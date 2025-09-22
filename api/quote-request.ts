import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { QuoteFormData } from '../src/types/quote';

// Securely access environment variables
const SENDER_EMAIL = process.env.VITE_EMAIL_SENDER;
const APP_PASSWORD = process.env.VITE_EMAIL_APP_PASSWORD;
const RECIPIENT_EMAIL = process.env.VITE_EMAIL_RECIPIENT;

// Reusable Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SENDER_EMAIL,
    pass: APP_PASSWORD,
  },
});

// Function to generate a rich HTML email body
const generateHtmlBody = (quoteData: QuoteFormData): string => {
  const {
    contactInfo,
    eventCategory,
    subEvents,
    eventDate,
    guestCount,
    venue,
    location,
    selectedServices,
    specialRequests,
    estimatedTotal,
  } = quoteData;

  // Find event names from IDs for a more readable email
  const subEventDetails = subEvents.join(', ');

  const servicesHtml = selectedServices
    .filter(s => s.isSelected)
    .map(s => `
      <tr>
        <td>${s.eventName || 'General'}</td>
        <td>${s.name}</td>
        <td>₹${s.estimatedPrice?.toLocaleString() || 'N/A'}</td>
      </tr>
    `)
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Event Quote Request</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; }
        .container { max-width: 680px; margin: 20px auto; padding: 25px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        h2 { color: #005A5A; border-bottom: 2px solid #005A5A; padding-bottom: 10px; }
        h3 { color: #333; margin-top: 25px; }
        ul { list-style-type: none; padding-left: 0; }
        li { margin-bottom: 10px; }
        strong { color: #005A5A; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px 15px; border: 1px solid #ddd; text-align: left; }
        th { background-color: #f5f5f5; font-weight: 600; }
        .footer { margin-top: 25px; font-size: 0.9em; color: #888; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>🎉 New Event Quote Request!</h2>
        <p>A new quote request has been submitted through the D-Day Evento website.</p>
        
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${contactInfo.name}</li>
          <li><strong>Email:</strong> ${contactInfo.email}</li>
          <li><strong>Phone:</strong> ${contactInfo.phone}</li>
          ${contactInfo.whatsapp ? `<li><strong>WhatsApp Enabled:</strong> ${contactInfo.whatsapp}</li>` : ''}
        </ul>

        <h3>Event Details</h3>
        <ul>
          <li><strong>Event Category:</strong> ${eventCategory}</li>
          <li><strong>Selected Events:</strong> ${subEventDetails}</li>
          <li><strong>Event Date:</strong> ${eventDate}</li>
          <li><strong>Guest Count:</strong> ${guestCount}</li>
          <li><strong>Venue:</strong> ${venue}</li>
          <li><strong>Location:</strong> ${location}</li>
        </ul>

        <h3>Selected Services</h3>
        <table>
          <thead>
            <tr>
              <th>For Event</th>
              <th>Service</th>
              <th>Est. Price</th>
            </tr>
          </thead>
          <tbody>
            ${servicesHtml.length > 0 ? servicesHtml : '<tr><td colspan="3">No services selected.</td></tr>'}
          </tbody>
        </table>
        
        <p style="font-size: 1.2em; font-weight: bold; margin-top: 20px;">
          <strong>Estimated Total:</strong> ₹${estimatedTotal.toLocaleString()}
        </p>
        
        ${specialRequests ? `
          <h3>Special Requests</h3>
          <p style="padding: 10px; background-color: #f5f5f5; border-radius: 5px;">${specialRequests}</p>
        ` : ''}

        <div class="footer">
          <p>This is an automated notification from the D-Day Evento website.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Ensure this function only handles POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  // Basic validation for environment variables
  if (!SENDER_EMAIL || !APP_PASSWORD || !RECIPIENT_EMAIL) {
    console.error('Email service is not configured. Check environment variables.');
    return res.status(500).json({
      success: false,
      message: 'The server has an internal configuration error.',
    });
  }

  const quoteData: QuoteFormData = req.body;

  const mailOptions = {
    from: `"D-Day Evento" <${SENDER_EMAIL}>`,
    to: RECIPIENT_EMAIL,
    subject: `🎉 New Quote Request from ${quoteData.contactInfo.name} for ${quoteData.eventCategory}`,
    html: generateHtmlBody(quoteData),
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'There was an issue sending the quote request. Please try again later.',
    });
  }
}
