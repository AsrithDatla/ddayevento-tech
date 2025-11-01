import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface VendorRegistrationData {
  fullName: string;
  companyName: string;
  category: string;
  contactNumber: string;
  email: string;
  city: string;
  yearsOfExperience: string;
  priceRange: string;
  portfolioLink: string;
  agreement: boolean;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const vendorData: VendorRegistrationData = req.body;

    // Validate required fields
    const requiredFields = ['fullName', 'category', 'contactNumber', 'email', 'city', 'yearsOfExperience', 'priceRange'];
    for (const field of requiredFields) {
      if (!vendorData[field as keyof VendorRegistrationData]) {
        return res.status(400).json({ message: `Missing required field: ${field}` });
      }
    }

    if (!vendorData.agreement) {
      return res.status(400).json({ message: 'Agreement acceptance is required' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email to D DAY EVENTO (Admin notification)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Vendor Registration - D DAY EVENTO</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8f9fa; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
          .content { padding: 30px; }
          .section { margin-bottom: 25px; }
          .section h2 { color: #8B5CF6; font-size: 20px; margin-bottom: 15px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
          .info-item { background-color: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #8B5CF6; }
          .info-label { font-weight: bold; color: #555; font-size: 14px; margin-bottom: 5px; }
          .info-value { color: #333; font-size: 16px; }
          .full-width { grid-column: 1 / -1; }
          .agreement { background-color: #e8f5e8; border: 1px solid #4caf50; border-radius: 8px; padding: 15px; margin: 20px 0; }
          .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
          .priority { background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 8px; padding: 15px; margin: 20px 0; }
          @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; }
            .content { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Vendor Registration</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">D DAY EVENTO Vendor Network</p>
          </div>
          
          <div class="content">
            <div class="priority">
              <strong>⚡ Action Required:</strong> A new vendor has registered to join your network. Please review their application and respond within 2-3 business days.
            </div>

            <div class="section">
              <h2>👤 Basic Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Full Name</div>
                  <div class="info-value">${vendorData.fullName}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Company Name</div>
                  <div class="info-value">${vendorData.companyName || 'Not provided'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Service Category</div>
                  <div class="info-value">${vendorData.category}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Contact Number</div>
                  <div class="info-value">${vendorData.contactNumber}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email Address</div>
                  <div class="info-value">${vendorData.email}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">City / Location</div>
                  <div class="info-value">${vendorData.city}</div>
                </div>
              </div>
            </div>

            <div class="section">
              <h2>💼 Business Details</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Years of Experience</div>
                  <div class="info-value">${vendorData.yearsOfExperience}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Price Range</div>
                  <div class="info-value">${vendorData.priceRange}</div>
                </div>
                <div class="info-item full-width">
                  <div class="info-label">Portfolio / Sample Work</div>
                  <div class="info-value">
                    ${vendorData.portfolioLink ? 
                      `<a href="${vendorData.portfolioLink}" target="_blank" style="color: #8B5CF6; text-decoration: none;">${vendorData.portfolioLink}</a>` : 
                      'Not provided'
                    }
                  </div>
                </div>
              </div>
            </div>

            <div class="agreement">
              <strong>✅ Agreement Status:</strong> Vendor has agreed to maintain professionalism, deliver quality service, and follow D DAY EVENTO's vendor partnership terms.
            </div>

            <div class="section">
              <h2>📋 Next Steps</h2>
              <ol style="color: #555; line-height: 1.8;">
                <li>Review the vendor's experience and service category alignment</li>
                <li>Check portfolio/sample work if provided</li>
                <li>Verify contact information and location</li>
                <li>Conduct initial screening call if suitable</li>
                <li>Send approval/rejection email to vendor</li>
              </ol>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>D DAY EVENTO</strong> - Vendor Management System</p>
            <p>Registration received on ${new Date().toLocaleDateString('en-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              timeZone: 'Asia/Kolkata'
            })} at ${new Date().toLocaleTimeString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              hour12: true 
            })}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Confirmation email to vendor
    const vendorEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vendor Registration Confirmation - D DAY EVENTO</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8f9fa; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
          .content { padding: 30px; }
          .welcome-box { background: linear-gradient(135deg, #f8f9ff 0%, #fff5f8 100%); border-radius: 12px; padding: 25px; margin: 20px 0; text-align: center; }
          .info-box { background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 4px solid #8B5CF6; }
          .timeline { background-color: #e8f5e8; border-radius: 8px; padding: 20px; margin: 20px 0; }
          .timeline h3 { color: #2e7d32; margin-top: 0; }
          .contact-info { background: linear-gradient(135deg, #fff9e6 0%, #fff3e0 100%); border-radius: 8px; padding: 20px; margin: 20px 0; }
          .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
          .highlight { color: #8B5CF6; font-weight: bold; }
          ul { padding-left: 20px; }
          li { margin-bottom: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Welcome to D DAY EVENTO!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Vendor Registration Confirmation</p>
          </div>
          
          <div class="content">
            <div class="welcome-box">
              <h2 style="color: #8B5CF6; margin-top: 0;">Thank You for Your Interest!</h2>
              <p style="font-size: 16px; margin-bottom: 0;">
                Dear <strong>${vendorData.fullName}</strong>,<br>
                We've successfully received your vendor registration application for <span class="highlight">${vendorData.category}</span>.
              </p>
            </div>

            <div class="info-box">
              <h3 style="margin-top: 0; color: #333;">📋 Application Summary</h3>
              <ul style="margin: 0;">
                <li><strong>Service Category:</strong> ${vendorData.category}</li>
                <li><strong>Experience:</strong> ${vendorData.yearsOfExperience}</li>
                <li><strong>Location:</strong> ${vendorData.city}</li>
                <li><strong>Price Range:</strong> ${vendorData.priceRange}</li>
              </ul>
            </div>

            <div class="timeline">
              <h3>⏰ What Happens Next?</h3>
              <ol style="margin: 0;">
                <li><strong>Application Review (1-2 days):</strong> Our team will review your application and portfolio</li>
                <li><strong>Initial Screening (Day 2-3):</strong> If shortlisted, we'll contact you for a brief discussion</li>
                <li><strong>Final Decision (Day 3):</strong> You'll receive our decision via email</li>
                <li><strong>Onboarding (If approved):</strong> We'll guide you through our vendor onboarding process</li>
              </ol>
            </div>

            <div class="info-box">
              <h3 style="margin-top: 0; color: #333;">🌟 Why Partner with D DAY EVENTO?</h3>
              <ul style="margin: 0;">
                <li>Access to premium clients across Hyderabad</li>
                <li>Regular project opportunities</li>
                <li>Professional growth and networking</li>
                <li>Fair and timely payments</li>
                <li>Brand association with a trusted name</li>
              </ul>
            </div>

            <div class="contact-info">
              <h3 style="margin-top: 0; color: #f57c00;">📞 Need Assistance?</h3>
              <p style="margin-bottom: 0;">
                If you have any questions about your application or our vendor program, feel free to reach out:<br>
                <strong>Email:</strong> vendors@ddayevento.com<br>
                <strong>Phone:</strong> +91 9876543210<br>
                <strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM
              </p>
            </div>

            <p style="text-align: center; color: #666; font-style: italic; margin-top: 30px;">
              We appreciate your interest in joining our vendor network and look forward to potentially working together!
            </p>
          </div>
          
          <div class="footer">
            <p><strong>D DAY EVENTO</strong></p>
            <p>Hyderabad's Premier Event Management Company</p>
            <p style="font-size: 12px; margin-top: 15px;">
              This is an automated confirmation email. Please do not reply to this email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: `"D DAY EVENTO Vendor System" <${process.env.EMAIL_SENDER}>`,
      to: process.env.EMAIL_RECIPIENT,
      subject: `🎯 New Vendor Registration - ${vendorData.category} | ${vendorData.fullName}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to vendor
    await transporter.sendMail({
      from: `"D DAY EVENTO" <${process.env.EMAIL_SENDER}>`,
      to: vendorData.email,
      subject: '🎉 Vendor Registration Confirmation - D DAY EVENTO',
      html: vendorEmailHtml,
    });

    res.status(200).json({ 
      message: 'Vendor registration submitted successfully',
      status: 'success'
    });

  } catch (error) {
    console.error('Error processing vendor registration:', error);
    res.status(500).json({ 
      message: 'Failed to process vendor registration',
      error: process.env.NODE_ENV === 'development' ? error : 'Internal server error'
    });
  }
}