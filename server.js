const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Quote endpoint
app.post('/api/send-quote', async (req, res) => {
    try {
        const formData = req.body;
        console.log('Received quote request:', JSON.stringify(formData, null, 2));

        // Validate environment variables
        if (!process.env.EMAIL_SENDER || !process.env.EMAIL_APP_PASSWORD || !process.env.EMAIL_RECIPIENT) {
            console.error('Missing email configuration environment variables');
            return res.status(500).json({
                success: false,
                message: 'Email service configuration error. Please try again later.'
            });
        }

        // Create transporter using Gmail configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_SENDER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        // Format the email content (same as your API file)
        const selectedServices = formData.selectedServices && formData.selectedServices.length > 0
            ? formData.selectedServices
                .filter((service) => service.isSelected)
                .map((service) => {
                    const categoryInfo = service.eventName ? ` (${service.eventName})` : '';
                    const popularMark = service.category === 'core' ? ' ⭐' : '';
                    return `• ${service.name}${service.description ? ` - ${service.description}` : ''}${categoryInfo}${popularMark}`;
                })
                .join('\n')
            : 'No services selected';

        const subEventNames = formData.subEvents && formData.subEvents.length > 0
            ? formData.subEvents
                .map((eventId) => {
                    return eventId.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
                })
                .join(', ')
            : 'No sub-events selected';

        const eventCategoryName = formData.eventCategory
            ? formData.eventCategory.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
            : 'Not specified';

        const guestCountText = formData.guestCount
            ? (formData.guestCount === 50 ? 'Up to 50 guests' :
                formData.guestCount === 100 ? '50-100 guests' :
                    formData.guestCount === 200 ? '100-200 guests' :
                        formData.guestCount === 300 ? '200-300 guests' :
                            formData.guestCount === 500 ? '300-500 guests' :
                                formData.guestCount === 1000 ? '500+ guests' :
                                    `${formData.guestCount} guests`)
            : 'Not specified';

        const budgetText = formData.estimatedBudget
            ? (formData.estimatedBudget === 'under-1l' ? 'Under ₹1 Lakh' :
                formData.estimatedBudget === '1l-3l' ? '₹1-3 Lakhs' :
                    formData.estimatedBudget === '3l-5l' ? '₹3-5 Lakhs' :
                        formData.estimatedBudget === '5l-10l' ? '₹5-10 Lakhs' :
                            formData.estimatedBudget === '10l-20l' ? '₹10-20 Lakhs' :
                                formData.estimatedBudget === 'above-20l' ? 'Above ₹20 Lakhs' :
                                    formData.estimatedBudget)
            : 'Not specified';

        const timeText = formData.eventTime
            ? (formData.eventTime === 'morning' ? 'Morning (6 AM - 12 PM)' :
                formData.eventTime === 'afternoon' ? 'Afternoon (12 PM - 6 PM)' :
                    formData.eventTime === 'evening' ? 'Evening (6 PM - 10 PM)' :
                        formData.eventTime === 'night' ? 'Night (10 PM onwards)' :
                            formData.eventTime === 'full-day' ? 'Full Day Event' :
                                formData.eventTime)
            : 'Not specified';

        const venueTypeText = formData.venueType
            ? (formData.venueType === 'indoor' ? 'Indoor Venue' :
                formData.venueType === 'outdoor' ? 'Outdoor Venue' :
                    formData.venueType === 'both' ? 'Both Indoor & Outdoor' :
                        formData.venueType === 'home' ? 'Home/Residence' :
                            formData.venueType === 'hotel' ? 'Hotel/Banquet Hall' :
                                formData.venueType === 'destination' ? 'Destination Venue' :
                                    formData.venueType)
            : 'Not specified';

        const emailContent = `
🎉 NEW QUOTE REQUEST - D-DAY EVENTO 🎉

═══════════════════════════════════════════════════════════════

📋 EVENT DETAILS:
═══════════════════════════════════════════════════════════════
🎪 Event Category: ${eventCategoryName}
🎭 Sub Events: ${subEventNames}
🎊 Celebration: ${formData.eventCelebration || 'Not specified'}
📅 Event Date: ${formData.eventDate || 'Not specified'}
⏰ Preferred Time: ${timeText}
📍 Location: ${formData.location || 'Not specified'}
🏛️ Venue Type: ${venueTypeText}
👥 Guest Count: ${guestCountText}
💰 Estimated Budget: ${budgetText}

═══════════════════════════════════════════════════════════════
🛍️ SELECTED SERVICES:
═══════════════════════════════════════════════════════════════
${selectedServices}

═══════════════════════════════════════════════════════════════
📝 SPECIAL REQUESTS:
═══════════════════════════════════════════════════════════════
${formData.specialRequests || 'None'}

═══════════════════════════════════════════════════════════════
📞 CONTACT INFORMATION:
═══════════════════════════════════════════════════════════════
👤 Name: ${formData.contactInfo.name}
📧 Email: ${formData.contactInfo.email}
📱 Phone: ${formData.contactInfo.phone}
💬 WhatsApp: ${formData.contactInfo.whatsapp || 'Same as phone number'}

═══════════════════════════════════════════════════════════════
📊 QUOTE SUMMARY:
═══════════════════════════════════════════════════════════════
• Total Services Selected: ${formData.selectedServices ? formData.selectedServices.filter((s) => s.isSelected).length : 0}
• Event Type: ${eventCategoryName}
• Event Scale: ${guestCountText}
• Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

═══════════════════════════════════════════════════════════════

🌟 This quote request was submitted through the D-Day Evento website.
📧 Please respond within 24 hours for the best customer experience.

D-Day Evento - Making Your Dreams Come True! ✨
    `;

        // Send emails
        await transporter.sendMail({
            from: process.env.EMAIL_SENDER,
            to: process.env.EMAIL_RECIPIENT,
            subject: `New Quote Request - ${formData.eventCelebration}`,
            text: emailContent,
        });

        await transporter.sendMail({
            from: process.env.EMAIL_SENDER,
            to: formData.contactInfo.email,
            subject: 'Quote Request Received - D-Day Evento',
            text: `🎉 Dear ${formData.contactInfo.name},

Thank you for choosing D-Day Evento for your special celebration! ✨

We have successfully received your quote request for "${formData.eventCelebration}" and our expert team is already reviewing your requirements.

═══════════════════════════════════════════════════════════════
📋 YOUR REQUEST SUMMARY:
═══════════════════════════════════════════════════════════════
🎊 Event: ${formData.eventCelebration || 'Your Special Celebration'}
📅 Date: ${formData.eventDate || 'To be confirmed'}
📍 Location: ${formData.location || 'To be confirmed'}
👥 Guest Count: ${guestCountText}
🛍️ Services: ${formData.selectedServices ? formData.selectedServices.filter((s) => s.isSelected).length : 0} services selected
📝 Request ID: #${Date.now().toString().slice(-6)}

═══════════════════════════════════════════════════════════════
⏰ WHAT HAPPENS NEXT?
═══════════════════════════════════════════════════════════════
✅ Our team will review your requirements within 2-4 hours
✅ We'll prepare a detailed quote with pricing and options
✅ You'll receive a comprehensive proposal within 24 hours
✅ Our event coordinator will call you to discuss details

═══════════════════════════════════════════════════════════════
📞 NEED IMMEDIATE ASSISTANCE?
═══════════════════════════════════════════════════════════════
📱 Call/WhatsApp: +91-7386813689
📧 Email: ddayevento9@gmail.com
🌐 Website: https://ddayevento.com

Our team is available:
Monday - Saturday: 9:00 AM - 8:00 PM
Sunday: 10:00 AM - 6:00 PM

═══════════════════════════════════════════════════════════════

🌟 Thank you for trusting D-Day Evento with your special moments!
We're excited to make your celebration absolutely perfect! 🎊

With warm regards,
D-Day Evento Team
Hyderabad's Most Trusted Event Planners ✨

Follow us on social media for inspiration and updates! 📱`,
        });

        console.log('Emails sent successfully');
        res.status(200).json({ success: true, message: 'Quote request sent successfully' });
    } catch (error) {
        console.error('Error sending quote:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send quote request. Please try again.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});