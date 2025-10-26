import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // Create transporter (you'll need to configure with your email service)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format the email content
    const selectedServices = formData.selectedServices
      .filter((service: any) => service.isSelected)
      .map((service: any) => `• ${service.name}${service.description ? ` - ${service.description}` : ''}`)
      .join('\n');

    const subEventNames = formData.subEvents
      .map((eventId: string) => {
        // You might want to map these IDs to readable names
        return eventId.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
      })
      .join(', ');

    const emailContent = `
New Quote Request from D-Day Evento Website

Event Details:
- Event Category: ${formData.eventCategory}
- Sub Events: ${subEventNames}
- Celebration: ${formData.eventCelebration}
- Date: ${formData.eventDate}
- Time: ${formData.eventTime || 'Not specified'}
- Location: ${formData.location}
- Venue Type: ${formData.venueType || 'Not specified'}
- Guest Count: ${formData.guestCount}
- Budget: ${formData.estimatedBudget || 'Not specified'}

Selected Services:
${selectedServices}

Special Requests:
${formData.specialRequests || 'None'}

Contact Information:
- Name: ${formData.contactInfo.name}
- Email: ${formData.contactInfo.email}
- Phone: ${formData.contactInfo.phone}
- WhatsApp: ${formData.contactInfo.whatsapp || 'Same as phone'}

---
This quote request was submitted through the D-Day Evento website.
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'info@ddayevento.com',
      subject: `New Quote Request - ${formData.eventCelebration}`,
      text: emailContent,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: formData.contactInfo.email,
      subject: 'Quote Request Received - D-Day Evento',
      text: `Dear ${formData.contactInfo.name},

Thank you for your quote request for ${formData.eventCelebration}!

We have received your request and our team will review it shortly. We'll get back to you within 24 hours with a detailed quote and next steps.

Event Summary:
- Date: ${formData.eventDate}
- Location: ${formData.location}
- Guest Count: ${formData.guestCount}
- Services: ${formData.selectedServices.filter((s: any) => s.isSelected).length} services selected

If you have any urgent questions, please feel free to call us at +91-7386813689 or WhatsApp us.

Best regards,
D-Day Evento Team
Hyderabad's Most Trusted Event Planners

Website: https://ddayevento.com
Phone: +91-7386813689
Email: info@ddayevento.com`,
    });

    res.status(200).json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error sending quote:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send quote request. Please try again.' 
    });
  }
}