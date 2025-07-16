import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Users, MapPin, IndianRupee, Phone, Mail, MessageSquare, Download, Share2 } from 'lucide-react';
import { QuoteFormData } from '../../../types/quote';
import { allEventsData } from '../../../data/comprehensiveEventsData';

interface ConfirmationStepProps {
  formData: QuoteFormData;
  onClose: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  formData,
  onClose
}) => {
  // Get event details
  const eventCategory = allEventsData.find(cat => cat.id === formData.eventCategory);
  const eventDetails = eventCategory?.events.find(event => event.eventId === formData.eventType);
  
  const selectedServices = formData.selectedServices.filter(service => service.isSelected);
  const coreServices = selectedServices.filter(s => s.category === 'core');
  const extraServices = selectedServices.filter(s => s.category === 'extra');

  const handleDownloadQuote = () => {
    // In a real implementation, this would generate and download a PDF
    console.log('Downloading quote PDF...');
  };

  const handleShareQuote = () => {
    // In a real implementation, this would share the quote
    if (navigator.share) {
      navigator.share({
        title: 'D-Day Evento Quote Request',
        text: `Quote for ${eventDetails?.eventName} - ${formData.guestCount} guests`,
        url: window.location.href
      });
    }
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I just submitted a quote request for ${eventDetails?.eventName} on ${formData.eventDate} for ${formData.guestCount} guests. Looking forward to hearing from you!`;
    const whatsappUrl = `https://wa.me/917386813689?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* Success Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Quote Request Submitted!</h3>
        <p className="text-gray-600 text-lg">
          Thank you for choosing D-Day Evento. We've received your request and will contact you soon.
        </p>
      </motion.div>

      {/* Quote Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-xl p-6 border border-brand-primary/20"
      >
        <h4 className="font-bold text-brand-primary text-xl mb-6">Your Event Summary</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Event Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="text-brand-primary" size={20} />
              <div>
                <div className="text-sm text-gray-600">Event Date</div>
                <div className="font-semibold">
                  {new Date(formData.eventDate).toLocaleDateString('en-IN', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Users className="text-brand-primary" size={20} />
              <div>
                <div className="text-sm text-gray-600">Guest Count</div>
                <div className="font-semibold">{formData.guestCount} people</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="text-brand-primary" size={20} />
              <div>
                <div className="text-sm text-gray-600">Venue & Location</div>
                <div className="font-semibold">{formData.venue}</div>
                <div className="text-sm text-gray-500">{formData.location}</div>
              </div>
            </div>
          </div>

          {/* Budget & Services */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <IndianRupee className="text-brand-primary" size={20} />
              <div>
                <div className="text-sm text-gray-600">Budget Range</div>
                <div className="font-semibold">
                  ₹{formData.budgetRange.min.toLocaleString()} - ₹{formData.budgetRange.max.toLocaleString()}
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-2">Event Type</div>
              <div className="font-semibold text-brand-primary">{eventDetails?.eventName}</div>
              <div className="text-sm text-gray-500">{eventCategory?.name}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-2">Services Selected</div>
              <div className="font-semibold">{selectedServices.length} services</div>
              <div className="text-sm text-gray-500">
                {coreServices.length} core + {extraServices.length} additional
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <h4 className="font-bold text-gray-800 text-lg mb-4">Selected Services</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core Services */}
          <div>
            <h5 className="font-semibold text-brand-primary mb-3">Core Services ({coreServices.length})</h5>
            <div className="space-y-2">
              {coreServices.map(service => (
                <div key={service.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">{service.name}</span>
                  <span className="text-brand-primary font-medium">
                    ₹{service.estimatedPrice?.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Services */}
          <div>
            <h5 className="font-semibold text-brand-secondary mb-3">Additional Services ({extraServices.length})</h5>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {extraServices.map(service => (
                <div key={service.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">{service.name}</span>
                  <span className="text-brand-secondary font-medium">
                    ₹{service.estimatedPrice?.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-4 pt-4 flex justify-between items-center">
          <span className="font-bold text-lg">Estimated Total</span>
          <span className="font-bold text-xl text-brand-primary">
            ₹{formData.estimatedTotal.toLocaleString()}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1 text-right">
          *Final pricing may vary based on specific requirements
        </p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-50 rounded-xl p-6"
      >
        <h4 className="font-bold text-gray-800 text-lg mb-4">Your Contact Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <Phone className="text-brand-primary" size={16} />
            <div>
              <div className="text-sm text-gray-600">Phone</div>
              <div className="font-semibold">{formData.contactInfo.phone}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-brand-primary" size={16} />
            <div>
              <div className="text-sm text-gray-600">Email</div>
              <div className="font-semibold">{formData.contactInfo.email}</div>
            </div>
          </div>
        </div>
        {formData.specialRequests && (
          <div className="mt-4">
            <div className="text-sm text-gray-600 mb-1">Special Requests</div>
            <div className="text-sm text-gray-800 bg-white rounded p-3">
              {formData.specialRequests}
            </div>
          </div>
        )}
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-brand-primary text-white rounded-xl p-6"
      >
        <h4 className="font-bold text-xl mb-4">What Happens Next?</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center text-brand-primary font-bold text-sm">1</div>
            <div>
              <div className="font-semibold">Instant Confirmation</div>
              <div className="text-brand-gold text-sm">You'll receive an email confirmation within 5 minutes</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center text-brand-primary font-bold text-sm">2</div>
            <div>
              <div className="font-semibold">Personal Consultation</div>
              <div className="text-brand-gold text-sm">Our team will call you within 2 hours to discuss details</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center text-brand-primary font-bold text-sm">3</div>
            <div>
              <div className="font-semibold">Detailed Proposal</div>
              <div className="text-brand-gold text-sm">Receive a comprehensive proposal within 24 hours</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={handleWhatsAppContact}
          className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <MessageSquare size={20} />
          Contact via WhatsApp
        </button>
        
        <button
          onClick={handleDownloadQuote}
          className="flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Download size={20} />
          Download Quote
        </button>
        
        <button
          onClick={handleShareQuote}
          className="flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Share2 size={20} />
          Share Quote
        </button>
      </motion.div>

      {/* Close Button */}
      <div className="text-center">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 underline"
        >
          Close and return to website
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;