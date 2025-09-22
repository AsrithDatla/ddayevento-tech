import 'dotenv/config';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Load QuoteFormData type by relative path into dist if needed (avoid TS path issues by redefining minimal type here)
interface ServiceSelectionItem { id: string; name: string; eventName: string; isSelected: boolean; }
interface QuoteFormData {
  eventCategory: string;
  eventType: string;
  subEvents: string[];
  eventDate: string;
  guestCount: number;
  venue: string;
  location: string;
  selectedServices: ServiceSelectionItem[];
  contactInfo: { name: string; email: string; phone: string; whatsapp?: string };
  specialRequests: string;
}

function getEnv(name: string, fallback?: string): string | undefined {
  const raw = process.env[name];
  if (raw && raw.trim() !== '') return raw.trim();
  return fallback;
}

const EMAIL_USER = getEnv('EMAIL_SENDER') || getEnv('VITE_EMAIL_SENDER');
const EMAIL_PASS = getEnv('EMAIL_APP_PASSWORD') || getEnv('VITE_EMAIL_APP_PASSWORD');
const EMAIL_TO = getEnv('EMAIL_RECIPIENT') || getEnv('VITE_EMAIL_RECIPIENT') || EMAIL_USER;

async function buildTransporter() {
  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error('Email credentials missing (EMAIL_SENDER / EMAIL_APP_PASSWORD)');
  }
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
  await transporter.verify();
  return transporter;
}

function renderEmailHTML(data: QuoteFormData) {
  const servicesList = data.selectedServices.filter(s => s.isSelected)
    .map(s => `<li>${s.name} (for ${s.eventName})</li>`).join('');
  return `
    <h1>New Quote Request from D-Day Evento Website</h1>
    <p>A new quote request has been submitted. Details below:</p>
    <hr>
    <h2>Contact Information</h2>
    <ul>
      <li><strong>Name:</strong> ${data.contactInfo.name}</li>
      <li><strong>Email:</strong> ${data.contactInfo.email}</li>
      <li><strong>Phone:</strong> ${data.contactInfo.phone}</li>
      ${data.contactInfo.whatsapp ? `<li><strong>WhatsApp:</strong> ${data.contactInfo.whatsapp}</li>` : ''}
    </ul>
    <h2>Event Details</h2>
    <ul>
      <li><strong>Event Category:</strong> ${data.eventCategory}</li>
      <li><strong>Main Event Type:</strong> ${data.eventType}</li>
      <li><strong>Sub-Events:</strong> ${data.subEvents.join(', ')}</li>
      <li><strong>Event Date:</strong> ${data.eventDate ? new Date(data.eventDate).toLocaleDateString('en-IN', { dateStyle: 'full' }) : 'N/A'}</li>
      <li><strong>Guest Count:</strong> ${data.guestCount}</li>
      <li><strong>Venue:</strong> ${data.venue}</li>
      <li><strong>Location:</strong> ${data.location}</li>
    </ul>
    <h2>Selected Services</h2>
    ${servicesList ? `<ul>${servicesList}</ul>` : '<p>No specific services selected.</p>'}
    <h2>Special Requests</h2>
    <p>${data.specialRequests || 'None'}</p>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  try {
    // Diagnostics: header analysis (431 investigations)
    const headerEntries = Object.entries(req.headers || {});
    const headerReport = headerEntries.map(([k, v]) => {
      const val = Array.isArray(v) ? v.join(';') : (v ?? '');
      return { name: k, length: val.length };
    });
    const totalApprox = headerReport.reduce((sum, h) => sum + h.length + h.name.length, 0);
    console.log('[api/send-quote] Incoming header summary:', headerReport, 'Approx total bytes:', totalApprox);

    const formData = req.body as QuoteFormData;
    if (!formData || !formData.contactInfo || !formData.eventCategory) {
      return res.status(400).json({ success: false, message: 'Invalid form data' });
    }
    const transporter = await buildTransporter();
    const html = renderEmailHTML(formData);
    await transporter.sendMail({
      from: `"D-Day Evento Website" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: formData.contactInfo.email,
      subject: `New Quote Request from ${formData.contactInfo.name}`,
      html,
    });
    return res.status(200).json({ success: true, message: 'Quote request submitted successfully.' });
  } catch (err: unknown) {
    console.error('[api/send-quote] Failure:', err);
    let msg = 'Internal server error';
    function hasMessage(e: unknown): e is { message: string } {
      return !!e && typeof e === 'object' && 'message' in e && typeof (e as { message?: unknown }).message === 'string';
    }
    if (hasMessage(err)) {
      const m = err.message;
      if (/credentials/i.test(m)) msg = 'Email credentials missing';
      else if (/verification/i.test(m)) msg = 'Email transport verification failed';
      else if (/ENOTFOUND|ECONNREFUSED|ETIMEDOUT/i.test(m)) msg = 'Email server unreachable';
    }
    return res.status(500).json({ success: false, message: msg });
  }
}
