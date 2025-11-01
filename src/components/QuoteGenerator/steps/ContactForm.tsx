import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, FileText } from 'lucide-react';
import { QuoteFormData } from '../../../types/quote';

interface ContactFormProps {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  errors: Record<string, string>;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  const handleContactInfoChange = (field: keyof QuoteFormData['contactInfo'], value: string) => {
    updateFormData({
      contactInfo: {
        ...formData.contactInfo,
        [field]: value
      }
    });
  };

  // Email validation helper
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation helper
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const handleSpecialRequestsChange = (value: string) => {
    updateFormData({ specialRequests: value });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h3>
        <p className="text-gray-600">We'll use this information to send you the quote and follow up</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Contact Details */}
        <div className="space-y-6">
          {/* Full Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <User className="inline w-4 h-4 mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              value={formData.contactInfo.name}
              onChange={(e) => handleContactInfoChange('name', e.target.value)}
              placeholder="Enter your full name"
              className={`
                w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all
                ${errors.name ? 'border-red-300' : 'border-gray-200'}
              `}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <Mail className="inline w-4 h-4 mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              value={formData.contactInfo.email}
              onChange={(e) => handleContactInfoChange('email', e.target.value)}
              placeholder="your.email@example.com"
              className={`
                w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all
                ${errors.email ? 'border-red-300' : 'border-gray-200'}
              `}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            {formData.contactInfo.email && !isValidEmail(formData.contactInfo.email) && !errors.email && (
              <p className="text-amber-600 text-sm mt-1">Please enter a valid email address</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              We'll send your quote and updates to this email
            </p>
          </motion.div>

          {/* Phone Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <Phone className="inline w-4 h-4 mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.contactInfo.phone}
              onChange={(e) => handleContactInfoChange('phone', e.target.value)}
              placeholder="+91 98765 43210"
              className={`
                w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all
                ${errors.phone ? 'border-red-300' : 'border-gray-200'}
              `}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
            {formData.contactInfo.phone && !isValidPhone(formData.contactInfo.phone) && !errors.phone && (
              <p className="text-amber-600 text-sm mt-1">Please enter a valid phone number</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              We'll call you to discuss your requirements in detail
            </p>
          </motion.div>

          {/* WhatsApp Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <MessageSquare className="inline w-4 h-4 mr-2" />
              WhatsApp Number (Optional)
            </label>
            <input
              type="tel"
              value={formData.contactInfo.whatsapp || ''}
              onChange={(e) => handleContactInfoChange('whatsapp', e.target.value)}
              placeholder="+91 98765 43210 (if different from phone)"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
            />
            <p className="text-xs text-gray-500 mt-1">
              For quick updates and coordination via WhatsApp
            </p>
          </motion.div>
        </div>

        {/* Right Column - Special Requests */}
        <div className="space-y-6">
          {/* Special Requests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <FileText className="inline w-4 h-4 mr-2" />
              Special Requests or Additional Details
            </label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) => handleSpecialRequestsChange(e.target.value)}
              placeholder="Tell us about any specific requirements, themes, dietary restrictions, or special arrangements you need..."
              rows={8}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Help us understand your vision better (optional)
            </p>
          </motion.div>

          {/* Contact Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="bg-brand-primary/10 rounded-lg p-4 border border-brand-primary/20"
          >
            <h4 className="font-semibold text-brand-primary mb-3">What happens next?</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span>You'll receive an instant quote summary via email</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span>Our team will call you within 2 hours to discuss details</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span>We'll schedule a consultation at your convenience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span>Receive a detailed proposal within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Privacy Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="bg-gray-50 rounded-lg p-4"
          >
            <h5 className="font-medium text-gray-800 text-sm mb-2">Privacy & Communication</h5>
            <div className="text-xs text-gray-600 space-y-1">
              <p>• Your information is secure and will only be used for this quote</p>
              <p>• We'll contact you only regarding your event planning needs</p>
              <p>• You can opt out of communications at any time</p>
              <p>• We don't share your details with third parties</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Summary */}
      {formData.contactInfo.name && formData.contactInfo.email && formData.contactInfo.phone && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200"
        >
          <h4 className="font-bold text-green-800 text-lg mb-4">Contact Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600">Name</div>
              <div className="font-semibold text-gray-800">{formData.contactInfo.name}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Email</div>
              <div className="font-semibold text-gray-800">{formData.contactInfo.email}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Phone</div>
              <div className="font-semibold text-gray-800">{formData.contactInfo.phone}</div>
            </div>
            {formData.contactInfo.whatsapp && (
              <div>
                <div className="text-sm text-gray-600">WhatsApp</div>
                <div className="font-semibold text-gray-800">{formData.contactInfo.whatsapp}</div>
              </div>
            )}
          </div>
          {formData.specialRequests && (
            <div className="mt-4">
              <div className="text-sm text-gray-600">Special Requests</div>
              <div className="font-medium text-gray-800 text-sm mt-1 bg-white rounded p-3">
                {formData.specialRequests}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;