import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Check, Calendar, MapPin, User, Phone, Mail, FileText } from 'lucide-react';
import { useQuoteForm } from '../hooks/useQuoteForm';
import { eventsData } from '../data/eventsData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const {
    currentStep,
    formData,
    updateFormData,
    getSubEvents,
    getServices,
    toggleSubEvent,
    toggleService,
    nextStep,
    prevStep,
    resetForm,
    submitQuote
  } = useQuoteForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClose = () => {
    resetForm();
    setShowSuccess(false);
    onClose();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const result = await submitQuote();
    setIsSubmitting(false);
    
    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Get Your Quote</h2>
                <p className="text-white/80">Step {currentStep} of 4</p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4 bg-white/20 rounded-full h-2">
              <motion.div
                className="bg-brand-gold rounded-full h-2"
                initial={{ width: '25%' }}
                animate={{ width: `${(currentStep / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {showSuccess ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
                <p className="text-gray-600">Your quote has been sent successfully. We'll contact you soon!</p>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Select Main Event */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Your Event Type</h3>
                    
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Search events..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      />
                    </div>

                    <div className="grid gap-3 max-h-60 overflow-y-auto">
                      {filteredEvents.map((event) => (
                        <button
                          key={event.id}
                          onClick={() => updateFormData({ mainEvent: event.id })}
                          className={`p-4 text-left border rounded-lg transition-all ${
                            formData.mainEvent === event.id
                              ? 'border-brand-primary bg-brand-primary/10'
                              : 'border-gray-200 hover:border-brand-primary hover:bg-gray-50'
                          }`}
                        >
                          {event.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Select Sub-Events (Multiple Selection) */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Sub-Events (You can select multiple)</h3>
                    
                    <div className="grid gap-3">
                      {getSubEvents().map((subEvent) => (
                        <label
                          key={subEvent.id}
                          className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                            formData.subEvents?.includes(subEvent.id)
                              ? 'border-brand-primary bg-brand-primary/10'
                              : 'border-gray-200 hover:border-brand-primary hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.subEvents?.includes(subEvent.id) || false}
                            onChange={() => toggleSubEvent(subEvent.id)}
                            className="text-brand-primary rounded focus:ring-brand-primary"
                          />
                          <span className="font-medium">{subEvent.name}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Select Services */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Services</h3>
                    
                    <div className="space-y-6">
                      {getServices().map((category) => (
                        <div key={category.category}>
                          <h4 className="font-semibold text-gray-700 mb-3">{category.category}</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {category.services.map((service) => (
                              <label
                                key={service.id}
                                className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.services?.includes(service.id) || false}
                                  onChange={() => toggleService(service.id)}
                                  className="text-brand-primary rounded focus:ring-brand-primary"
                                />
                                <span className="text-sm">{service.name}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Event Details & Contact Info */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Details & Contact Info</h3>
                    
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Calendar size={16} className="inline mr-1" />
                            Date & Time
                          </label>
                          <input
                            type="datetime-local"
                            value={formData.dateTime || ''}
                            onChange={(e) => updateFormData({ dateTime: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <MapPin size={16} className="inline mr-1" />
                            Venue Location
                          </label>
                          <input
                            type="text"
                            placeholder="Enter venue location"
                            value={formData.venue || ''}
                            onChange={(e) => updateFormData({ venue: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User size={16} className="inline mr-1" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name || ''}
                          onChange={(e) => updateFormData({ name: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Phone size={16} className="inline mr-1" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="Enter phone number"
                            value={formData.phone || ''}
                            onChange={(e) => updateFormData({ phone: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Mail size={16} className="inline mr-1" />
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="Enter email address"
                            value={formData.email || ''}
                            onChange={(e) => updateFormData({ email: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <label className="flex items-start gap-3 p-4 border rounded-lg">
                        <input
                          type="checkbox"
                          checked={formData.termsAccepted || false}
                          onChange={(e) => updateFormData({ termsAccepted: e.target.checked })}
                          className="mt-1 text-brand-primary rounded focus:ring-brand-primary"
                        />
                        <span className="text-sm text-gray-600">
                          <FileText size={16} className="inline mr-1" />
                          I accept the terms and conditions and agree to be contacted regarding my event planning needs.
                        </span>
                      </label>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          {!showSuccess && (
            <div className="p-6 bg-gray-50 flex justify-between items-center">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !formData.mainEvent) ||
                    (currentStep === 2 && (!formData.subEvents || formData.subEvents.length === 0)) ||
                    (currentStep === 3 && (!formData.services || formData.services.length === 0))
                  }
                  className="flex items-center gap-2 bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={
                    isSubmitting ||
                    !formData.dateTime ||
                    !formData.venue ||
                    !formData.name ||
                    !formData.phone ||
                    !formData.email ||
                    !formData.termsAccepted
                  }
                  className="bg-brand-primary text-white px-8 py-2 rounded-lg hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote'}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuoteModal;