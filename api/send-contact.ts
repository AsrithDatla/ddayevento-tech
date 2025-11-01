import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, eventType, message } = req.body;
    console.log('Received contact form submission:', { name, email, phone, eventType, message });

    // Validate environment variables
    if (!process.env.EMAIL_SENDER || !process.env.EMAIL_APP_PASSWORD || !process.env.EMAIL_RECIPIENT) {
      console.error('Missing email configuration environment variables');
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please try again later.'
      });
    }

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email content for D Day Evento team
    const teamEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(135deg, #008B8B 0%, #20B2AA 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">D Day Evento - Event Planning Services</p>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #008B8B; margin-bottom: 20px; font-size: 22px;">Contact Details</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #333; display: inline-block; width: 120px;">Name:</strong>
              <span style="color: #666;">${name}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #333; display: inline-block; width: 120px;">Email:</strong>
              <span style="color: #666;">${email}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #333; display: inline-block; width: 120px;">Phone:</strong>
              <span style="color: #666;">${phone}</span>
            </div>
            ${eventType ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #333; display: inline-block; width: 120px;">Event Type:</strong>
              <span style="color: #666;">${eventType}</span>
            </div>
            ` : ''}
          </div>
          
          <h3 style="color: #008B8B; margin-bottom: 15px; font-size: 18px;">Message</h3>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #008B8B;">
            <p style="color: #666; line-height: 1.6; margin: 0;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #008B8B 0%, #20B2AA 100%); border-radius: 8px; text-align: center;">
            <p style="color: white; margin: 0; font-weight: bold;">Follow up with this potential client within 2 hours for best results!</p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            This message was sent from the D Day Evento website contact form
          </p>
        </div>
      </div>
    `;

    // Email content for client confirmation
    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(135deg, #008B8B 0%, #20B2AA 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Thank You for Contacting Us!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">D Day Evento - Your Event Planning Partner</p>
        </div>
        
        <div style="padding: 30px;">
          <h2 style="color: #008B8B; margin-bottom: 20px;">Hi ${name},</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to D Day Evento! We've received your message and are excited to help you plan your special event.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #008B8B; margin-bottom: 15px; font-size: 18px;">What happens next?</h3>
            <ul style="color: #666; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li>Our team will review your requirements</li>
              <li>We'll call you within 2 hours to discuss your event vision</li>
              <li>Schedule a free consultation at your convenience</li>
              <li>Receive a detailed proposal within 24 hours</li>
            </ul>
          </div>
          
          <div style="background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <p style="color: #333; margin: 0; font-weight: bold;">
              🎉 Free consultation available! Let's discuss your dream event.
            </p>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            In the meantime, feel free to explore our services and portfolio on our website. We specialize in weddings, corporate events, birthdays, and all types of celebrations across Hyderabad.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #008B8B; font-weight: bold; margin-bottom: 10px;">Contact Information</p>
            <p style="color: #666; margin: 5px 0;">📞 +91-7386813689 | +91 98498 22899</p>
            <p style="color: #666; margin: 5px 0;">📧 info@ddayevento.com</p>
            <p style="color: #666; margin: 5px 0;">📍 Hyderabad, Telangana</p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            Best regards,<br>
            <strong style="color: #008B8B;">D Day Evento Team</strong><br>
            Your Event Planning Partner in Hyderabad
          </p>
        </div>
      </div>
    `;

    // Send email to team
    await transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Contact Form Submission - ${eventType || 'General Inquiry'} - ${name}`,
      html: teamEmailContent,
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: email,
      subject: 'Thank you for contacting D Day Evento - We\'ll be in touch soon!',
      html: clientEmailContent,
    });

    console.log('Contact form emails sent successfully');

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 2 hours.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'There was an error sending your message. Please try again or contact us directly.'
    });
  }
}