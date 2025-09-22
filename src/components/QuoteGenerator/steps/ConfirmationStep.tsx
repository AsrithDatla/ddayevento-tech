import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Users, MapPin, MessageSquare } from 'lucide-react';
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
                <div className="text-sm text-gray-600">Venue</div>
                <div className="font-semibold">{formData.venue}</div>
              </div>
            </div>
          </div>

          {/* Selected Services */}
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Core Services</h5>
              {coreServices.length > 0 ? (
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {coreServices.map(s => <li key={s.id}>{s.name}</li>)}
                </ul>
              ) : <p className="text-sm text-gray-500">None selected</p>}
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Extra Services</h5>
              {extraServices.length > 0 ? (
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {extraServices.map(s => <li key={s.id}>{s.name}</li>)}
                </ul>
              ) : <p className="text-sm text-gray-500">None selected</p>}
            </div>
          </div>
        </div>

        {/* Special Requests */}
        {formData.specialRequests && (
          <div className="mt-6">
            <h5 className="font-semibold text-gray-800 mb-2">Special Requests</h5>
            <p className="text-gray-600 bg-gray-100 p-3 rounded-lg">{formData.specialRequests}</p>
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
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button
          onClick={handleWhatsAppContact}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          <MessageSquare size={20} />
          Contact us on WhatsApp
        </button>
        <button
          onClick={onClose}
          className="w-full sm:w-auto text-gray-600 hover:text-gray-800 font-semibold py-3 px-6"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ConfirmationStep;