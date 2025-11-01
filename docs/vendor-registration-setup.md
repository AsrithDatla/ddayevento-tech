# Vendor Registration System - Setup Guide

## Overview
The vendor registration system allows potential vendors to register and join D DAY EVENTO's vendor network. The system includes a comprehensive registration form and automated email notifications.

## Architecture
- **Frontend**: React-based registration form (`/vendor-registration`)
- **Backend**: Vercel serverless function (`/api/send-vendor-registration`)
- **Email Service**: Nodemailer with Gmail SMTP

## Features

### Registration Form
- **Basic Information**: Name, company, category, contact details
- **Business Details**: Experience, pricing, portfolio
- **Agreement**: Terms and conditions acceptance
- **Validation**: Client-side form validation with error handling
- **Responsive Design**: Mobile-friendly interface

### Email Notifications
- **Admin Notification**: Detailed vendor application with all information
- **Vendor Confirmation**: Professional confirmation email with next steps

### Service Categories
- Event Planning & Coordination
- Decoration & Design
- Photography & Videography
- Food & Catering
- Entertainment & Activities
- Makeup & Styling
- Cakes & Confectionery
- Return Gifts
- Tent House & Rentals
- Venue Booking & Setup
- Specialized Services
- Audio Visual Equipment
- Transportation Services
- Security Services
- Cleaning Services
- Other

## Environment Variables
The following environment variables are required for the email service:

```env
EMAIL_SENDER=your-gmail-address@gmail.com
EMAIL_RECIPIENT=admin-email@ddayevento.com
EMAIL_APP_PASSWORD=your-gmail-app-password
```

## API Endpoint

### POST /api/send-vendor-registration

**Request Body:**
```json
{
  "fullName": "string",
  "companyName": "string (optional)",
  "category": "string",
  "contactNumber": "string",
  "email": "string",
  "city": "string",
  "yearsOfExperience": "string",
  "priceRange": "string",
  "portfolioLink": "string (optional)",
  "agreement": boolean
}
```

**Response:**
```json
{
  "message": "Vendor registration submitted successfully",
  "status": "success"
}
```

## Navigation Integration
- **Desktop Header**: "VENDOR" link after "CONTACT US"
- **Mobile Header**: "VENDOR" link in mobile menu
- **Route**: `/vendor-registration`

## Deployment
The system is configured for Vercel deployment:
- API functions in `/api` directory
- Automatic serverless function deployment
- Environment variables configured in Vercel dashboard

## Form Validation
- Required fields validation
- Email format validation
- Phone number validation (10-digit Indian mobile)
- Terms agreement validation
- Real-time error display

## Email Templates
- **Admin Email**: Comprehensive vendor details with action items
- **Vendor Email**: Professional confirmation with timeline and next steps
- **Responsive Design**: Mobile-friendly email templates
- **Branding**: D DAY EVENTO branded templates

## Security Features
- Server-side validation
- CORS protection
- Rate limiting (Vercel default)
- Input sanitization
- Error handling without exposing sensitive information

## Testing
To test the vendor registration system:
1. Navigate to `/vendor-registration`
2. Fill out the registration form
3. Submit and verify email delivery
4. Check both admin and vendor email inboxes

## Maintenance
- Monitor email delivery rates
- Review vendor applications regularly
- Update service categories as needed
- Maintain email templates
- Monitor API performance in Vercel dashboard