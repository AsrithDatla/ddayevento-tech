import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import EventTypeSelection from './steps/EventTypeSelection';
import EventDetailsForm from './steps/EventDetailsForm';
import ServiceSelection from './steps/ServiceSelection';
import BudgetCalculator from './steps/BudgetCalculator';
import ContactForm from './steps/ContactForm';
import ConfirmationStep from './steps/ConfirmationStep';
import ProgressIndicator from './ProgressIndicator';
import { QuoteFormData, QuoteStep } from '../../types/quote';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEPS: QuoteStep[] = [
  { id: 1, title: 'Event Type', description: 'Choose your event category' },
  { id: 2, title: 'Event Details', description: 'Date, location & guest count' },
  { id: 3, title: 'Services', description: 'Select required services' },
  { id: 4, title: 'Budget', description: 'Set your budget range' },
  { id: 5, title: 'Contact', description: 'Your contact information' },
  { id: 6, title: 'Confirmation', description: 'Review and submit' }
];

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    eventCategory: '',
    eventType: '',
    eventDate: '',
    guestCount: 0,
    venue: '',
    location: 'Hyderabad',
    selectedServices: [],
    budgetRange: { min: 50000, max: 200000 },
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      whatsapp: ''
    },
    specialRequests: '',
    estimatedTotal: 0
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
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
        if (!formData.eventType) newErrors.eventType = 'Please select an event type';
        break;
      case 2:
        if (!formData.eventDate) newErrors.eventDate = 'Please select event date';
        if (!formData.guestCount || formData.guestCount < 1) newErrors.guestCount = 'Please enter guest count';
        if (!formData.venue.trim()) newErrors.venue = 'Please enter venue details';
        break;
      case 3:
        if (formData.selectedServices.length === 0) newErrors.services = 'Please select at least one service';
        break;
      case 4:
        if (!formData.budgetRange.min || !formData.budgetRange.max) newErrors.budget = 'Please set your budget range';
        break;
      case 5:
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
      // Here you would typically send the data to your backend
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'website_quote_modal'
        }),
      });

      if (response.ok) {
        setCurrentStep(6); // Move to confirmation step
      } else {
        throw new Error('Failed to submit quote request');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      setErrors({ submit: 'Failed to submit quote request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render current step component
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <EventTypeSelection
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 2:
        return (
          <EventDetailsForm
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 3:
        return (
          <ServiceSelection
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 4:
        return (
          <BudgetCalculator
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
        return (
          <ConfirmationStep
            formData={formData}
            onClose={onClose}
          />
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

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