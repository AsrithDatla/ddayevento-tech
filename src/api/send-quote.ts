import 'dotenv/config'; // Load environment variables (local dev)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { QuoteFormData } from '../types/quote';

// Normalize and fetch env vars with fallbacks and trimming
function getEnv(name: string, fallback?: string): string | undefined {
  const raw = process.env[name];
  if (raw && raw.trim() !== '') return raw.trim();
  return fallback;
}

const EMAIL_USER = getEnv('EMAIL_SENDER') || getEnv('VITE_EMAIL_SENDER');
const EMAIL_PASS = getEnv('EMAIL_APP_PASSWORD') || getEnv('VITE_EMAIL_APP_PASSWORD');
const EMAIL_TO = getEnv('EMAIL_RECIPIENT') || getEnv('VITE_EMAIL_RECIPIENT') || EMAIL_USER;

// This function can be expanded to use a service like Nodemailer
async function sendEmail(formData: QuoteFormData) {
  const {
    eventCategory,
    eventType,
    subEvents,
    eventDate,
    guestCount,
    venue,
    location,
    selectedServices,
    contactInfo,
    specialRequests,
  } = formData;

  // Create a Nodemailer transporter using Gmail
  // IMPORTANT: You must use an "App Password" for Gmail, not your regular password.
  // See: https://support.google.com/accounts/answer/185833
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  // Verify transporter (helpful for early failure diagnostics)
  try {
    await transporter.verify();
    console.log('[send-quote] SMTP verification success');
  } catch (verifyErr) {
    console.error('[send-quote] SMTP verification failed:', verifyErr);
    throw new Error('Email transport verification failed. Check credentials or Gmail App Password.');
  }

  const servicesList = selectedServices
    .filter(s => s.isSelected)
    .map(s => `<li>${s.name} (for ${s.eventName})</li>`)
    .join('');

  const emailHtml = `
    <h1>New Quote Request from D-Day Evento Website</h1>
    <p>A new quote request has been submitted. Please find the details below:</p>
    <hr>
    <h2>Contact Information</h2>
    <ul>
      <li><strong>Name:</strong> ${contactInfo.name}</li>
      <li><strong>Email:</strong> ${contactInfo.email}</li>
      <li><strong>Phone:</strong> ${contactInfo.phone}</li>
      ${contactInfo.whatsapp ? `<li><strong>WhatsApp:</strong> ${contactInfo.whatsapp}</li>` : ''}
    </ul>
    <hr>
    <h2>Event Details</h2>
    <ul>
      <li><strong>Event Category:</strong> ${eventCategory}</li>
      <li><strong>Main Event Type:</strong> ${eventType}</li>
      <li><strong>Sub-Events:</strong> ${subEvents.join(', ')}</li>
      <li><strong>Event Date:</strong> ${new Date(eventDate).toLocaleDateString('en-IN', { dateStyle: 'full' })}</li>
      <li><strong>Guest Count:</strong> ${guestCount}</li>
      <li><strong>Venue:</strong> ${venue}</li>
      <li><strong>Location:</strong> ${location}</li>
    </ul>
    <hr>
    <h2>Selected Services</h2>
    ${selectedServices.filter(s => s.isSelected).length > 0 ? `<ul>${servicesList}</ul>` : '<p>No specific services selected.</p>'}
    <hr>
    <h2>Special Requests</h2>
    <p>${specialRequests || 'None'}</p>
  `;

  // Send the email
  await transporter.sendMail({
    from: `"D-Day Evento Website" <${EMAIL_USER}>`,
    to: EMAIL_TO,
    subject: `New Quote Request from ${contactInfo.name}`,
    html: emailHtml,
  });

  return { success: true };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Load environment variables from .env file
  // In a Vercel environment, these are loaded automatically.
  // For local dev, you might need a package like 'dotenv'.

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const formData = req.body as QuoteFormData;
    
    if (!formData || !formData.contactInfo || !formData.eventCategory) {
      return res.status(400).json({ success: false, message: 'Invalid form data.' });
    }

    // Basic check for environment variables
    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error('[send-quote] Missing email credentials', { EMAIL_USER_PRESENT: !!EMAIL_USER, EMAIL_PASS_PRESENT: !!EMAIL_PASS });
      throw new Error('Email credentials missing on server');
    }

    await sendEmail(formData);

    return res.status(200).json({ success: true, message: 'Quote request submitted successfully.' });

  } catch (error: unknown) {
    console.error('[send-quote] Error handling quote request:', error);
    let clientMessage = 'Failed to process request.';
    function hasMessage(e: unknown): e is { message: string } {
      return !!e && typeof e === 'object' && 'message' in e && typeof (e as { message?: unknown }).message === 'string';
    }
    if (hasMessage(error)) {
      const msg = error.message;
      if (/verification/i.test(msg)) clientMessage = 'Email service verification failed.';
      else if (/credentials/i.test(msg)) clientMessage = 'Email credentials not configured.';
      else if (/ENOTFOUND|ECONNREFUSED|ETIMEDOUT/i.test(msg)) clientMessage = 'Email server unreachable.';
    }
    return res.status(500).json({ success: false, message: clientMessage });
  }
}