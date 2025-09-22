import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import EventCategorySelection from './steps/EventCategorySelection';
import SubEventSelection from './steps/SubEventSelection';
import EventDetailsForm from './steps/EventDetailsForm';
import ServiceSelection from './steps/ServiceSelection';
import ContactForm from './steps/ContactForm';
import ConfirmationStep from './steps/ConfirmationStep';
import ProgressIndicator from './ProgressIndicator';
import { QuoteFormData, QuoteStep } from '../../types/quote';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS: QuoteStep[] = [
  { id: 1, title: 'Event Category', description: 'Choose event type' },
  { id: 2, title: 'Sub Events', description: 'Select specific events' },
  { id: 3, title: 'Event Details', description: 'Date, location & guests' },
  { id: 4, title: 'Services', description: 'Select services' },
  { id: 5, title: 'Contact', description: 'Your information' },
  { id: 6, title: 'Confirmation', description: 'Review and submit' }
];

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    eventCategory: '',
    eventType: '',
    subEvents: [],
    eventDate: '',
    guestCount: 0,
    venue: '',
    location: 'Hyderabad',
    selectedServices: [],
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      whatsapp: ''
    },
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setFormData({
        eventCategory: '',
        eventType: '',
        subEvents: [],
        eventDate: '',
        guestCount: 0,
        venue: '',
        location: 'Hyderabad',
        selectedServices: [],
        contactInfo: {
          name: '',
          email: '',
          phone: '',
          whatsapp: ''
        },
        specialRequests: '',
      });
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  // Handle form data updates
  const updateFormData = (updates: Partial<QuoteFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
    // Clear related errors when data is updated
    const updatedFields = Object.keys(updates);
    setErrors(prev => {
      const newErrors = { ...prev };
      updatedFields.forEach(field => delete newErrors[field]);
      return newErrors;
    });
  };

  // Validation for each step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.eventCategory) newErrors.eventCategory = 'Please select an event category';
        break;
      case 2:
        if (!formData.subEvents || formData.subEvents.length === 0) newErrors.subEvents = 'Please select at least one sub event';
        break;
      case 3:
        if (!formData.eventDate) newErrors.eventDate = 'Please select event date';
        if (!formData.guestCount || formData.guestCount < 1) newErrors.guestCount = 'Please enter guest count';
        if (!formData.venue.trim()) newErrors.venue = 'Please enter venue details';
        break;
      case 4:
        if (formData.selectedServices.length === 0) newErrors.services = 'Please select at least one service';
        break;
      case 5: {
        if (!formData.contactInfo.name.trim()) newErrors.name = 'Please enter your name';
        if (!formData.contactInfo.email.trim()) newErrors.email = 'Please enter your email';
        if (!formData.contactInfo.phone.trim()) newErrors.phone = 'Please enter your phone number';
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.contactInfo.email && !emailRegex.test(formData.contactInfo.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        // Phone validation
        const phoneRegex = /^[+]?[\d\s-()]{10,}$/;
        if (formData.contactInfo.phone && !phoneRegex.test(formData.contactInfo.phone)) {
          newErrors.phone = 'Please enter a valid phone number';
        }
        break;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation handlers
  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < STEPS.length) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStepClick = (stepNumber: number) => {
    // Allow clicking on previous steps or current step
    if (stepNumber <= currentStep) {
      setCurrentStep(stepNumber);
    }
  };

  // Submit handler
  const handleSubmit = async () => {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    try {
      const payload = JSON.stringify(formData);
      const bytes = new TextEncoder().encode(payload).length;
      if (bytes > 100_000) {
        console.warn('Quote form payload unusually large:', bytes, 'bytes');
      }
      const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const primaryUrl = '/api/send-quote';
      const fallbackUrl = isDev ? 'http://localhost:3000/api/send-quote' : primaryUrl;

      async function doPost(url: string) {
        return fetch(url, {
          method: 'POST',
          // Minimal set of headers to reduce risk of 431
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: payload,
          redirect: 'follow',
          // Ensure no cookies or auth headers are attached automatically
          credentials: 'omit',
          // Do not send referrer header
          referrerPolicy: 'no-referrer',
          // Avoid cache complications
          cache: 'no-store'
        });
      }

      let response = await doPost(primaryUrl);
      if (response.status === 404 || response.status === 431) {
        console.warn('Primary API POST failed with status', response.status, 'retrying with fallback URL');
        response = await doPost(fallbackUrl);
      }

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const text = await response.text().catch(() => '');
        console.error('API error status', response.status, 'body:', text);
        throw new Error('Failed to submit quote request');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      setErrors({ submit: 'Failed to submit quote request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md text-center p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your quote request has been submitted successfully. We will get back to you shortly.
          </p>
          <button
            onClick={onClose}
            className="bg-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Close
          </button>
        </motion.div>
      </div>
    );
  }

  // Render current step component
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <EventCategorySelection
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 2:
        return (
          <SubEventSelection
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 3:
        return (
          <EventDetailsForm
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 4:
        return (
          <ServiceSelection
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 5:
        return (
          <ContactForm
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 6:
        return <ConfirmationStep onClose={onClose} formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold font-heading">Get Your Dream Quote</h2>
                  <p className="text-brand-gold mt-1">Let's plan your perfect event together</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6">
                <ProgressIndicator
                  steps={STEPS}
                  currentStep={currentStep}
                  onStepClick={handleStepClick}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStepContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            {currentStep < 6 && (
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                  Previous
                </button>

                <div className="text-sm text-gray-500">
                  Step {currentStep} of {STEPS.length}
                </div>

                {currentStep === 5 ? (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Next
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            )}

            {/* Error Display */}
            {errors.submit && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mx-6 mb-4">
                <p className="text-red-700">{errors.submit}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default QuoteModal;