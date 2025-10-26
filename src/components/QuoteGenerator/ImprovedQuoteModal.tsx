import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { QuoteFormData, QuoteStep } from '../../types/quote';
import { subEventsData } from '../../data/subEventsData';
import { mainServiceCategories, eventSpecificServices } from '../../data/servicesData';
import EventCategorySelection from './steps/EventCategorySelection';
import SubEventSelection from './steps/SubEventSelection';
import EventDetailsForm from './steps/EventDetailsForm';
import ServiceSelection from './steps/ServiceSelection';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const STEPS: QuoteStep[] = [
    { id: 1, title: 'Event Category', description: 'Choose event type' },
    { id: 2, title: 'Sub Events', description: 'Select specific events' },
    { id: 3, title: 'Event Details', description: 'Tell us more' },
    { id: 4, title: 'Services', description: 'What do you need?' },
    { id: 5, title: 'Contact', description: 'How to reach you' }
];

// Dropdown Component
const Dropdown: React.FC<{
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
}> = ({ label, value, options, onChange, placeholder, error }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 text-left border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all ${error ? 'border-red-300' : 'border-gray-200 hover:border-brand-primary/50'
                    }`}
            >
                <div className="flex items-center justify-between">
                    <span className={value ? 'text-gray-900' : 'text-gray-500'}>
                        {value ? options.find(opt => opt.value === value)?.label : placeholder}
                    </span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                    >
                        {options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                            >
                                {option.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

// Accordion Component
const Accordion: React.FC<{
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    icon?: React.ReactNode;
}> = ({ title, children, isOpen, onToggle, icon }) => {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                type="button"
                onClick={onToggle}
                className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
            >
                <div className="flex items-center gap-3">
                    {icon}
                    <span className="font-semibold text-gray-800">{title}</span>
                </div>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 bg-white">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Multi-Select Dropdown Component
const MultiSelectDropdown: React.FC<{
    label: string;
    selectedValues: string[];
    options: { value: string; label: string }[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    error?: string;
}> = ({ label, selectedValues, options, onChange, placeholder, error }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOption = (value: string) => {
        const newValues = selectedValues.includes(value)
            ? selectedValues.filter(v => v !== value)
            : [...selectedValues, value];
        onChange(newValues);
    };

    return (
        <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 text-left border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all ${error ? 'border-red-300' : 'border-gray-200 hover:border-brand-primary/50'
                    }`}
            >
                <div className="flex items-center justify-between">
                    <span className={selectedValues.length > 0 ? 'text-gray-900' : 'text-gray-500'}>
                        {selectedValues.length > 0
                            ? `${selectedValues.length} selected`
                            : placeholder
                        }
                    </span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                    >
                        {options.map((option) => (
                            <label
                                key={option.value}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-brand-primary/10 cursor-pointer transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedValues.includes(option.value)}
                                    onChange={() => toggleOption(option.value)}
                                    className="text-brand-primary rounded focus:ring-brand-primary"
                                />
                                <span>{option.label}</span>
                            </label>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

const ImprovedQuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<QuoteFormData>({
        eventCategory: '',
        eventType: '',
        subEvents: [],
        eventCelebration: '',
        eventDate: '',
        eventTime: '',
        venue: '',
        venueType: '',
        location: 'Hyderabad',
        guestCount: 0,
        servicesLookingFor: [],
        estimatedBudget: '',
        specialRequests: '',
        selectedServices: [],
        contactInfo: {
            name: '',
            email: '',
            phone: '',
            whatsapp: ''
        }
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

    // Reset form when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentStep(1);
            setFormData({
                eventCategory: '',
                eventType: '',
                subEvents: [],
                eventCelebration: '',
                eventDate: '',
                eventTime: '',
                venue: '',
                venueType: '',
                location: 'Hyderabad',
                guestCount: 0,
                servicesLookingFor: [],
                estimatedBudget: '',
                specialRequests: '',
                selectedServices: [],
                contactInfo: {
                    name: '',
                    email: '',
                    phone: '',
                    whatsapp: ''
                }
            });
            setErrors({});
            setIsSubmitted(false);
            setOpenAccordions({});
        }
    }, [isOpen]);

    const updateFormData = (updates: Partial<QuoteFormData>) => {
        setFormData(prev => ({ ...prev, ...updates }));
        // Clear related errors
        const updatedFields = Object.keys(updates);
        setErrors(prev => {
            const newErrors = { ...prev };
            updatedFields.forEach(field => delete newErrors[field]);
            return newErrors;
        });
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        switch (step) {
            case 1:
                if (!formData.eventCategory) newErrors.eventCategory = 'Please select an event category';
                break;
            case 2:
                if (!formData.subEvents || formData.subEvents.length === 0) newErrors.subEvents = 'Please select at least one event';
                break;
            case 3:
                if (!formData.eventCelebration?.trim()) newErrors.eventCelebration = 'Please tell us what you are celebrating';
                if (!formData.eventDate) newErrors.eventDate = 'Please select event date';
                if (!formData.guestCount || formData.guestCount < 1) newErrors.guestCount = 'Please select guest count';
                break;
            case 4:
                if (!formData.selectedServices || formData.selectedServices.filter(s => s.isSelected).length === 0) {
                    newErrors.services = 'Please select at least one service';
                }
                break;
            case 5:
                if (!formData.contactInfo.name.trim()) newErrors.name = 'Please enter your name';
                if (!formData.contactInfo.email.trim()) newErrors.email = 'Please enter your email';
                if (!formData.contactInfo.phone.trim()) newErrors.phone = 'Please enter your phone number';
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

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

    const handleSubmit = async () => {
        if (!validateStep(4)) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setIsSubmitted(true);
                setTimeout(() => {
                    onClose();
                }, 3000);
            } else {
                throw new Error(result.message || 'Failed to submit quote request');
            }
        } catch (error) {
            console.error('Error submitting quote:', error);
            setErrors({
                submit: error instanceof Error ? error.message : 'Failed to submit quote request. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleAccordion = (key: string) => {
        setOpenAccordions(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    if (!isOpen) return null;

    if (isSubmitted) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md text-center p-8"
                >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
                    <p className="text-gray-600">Your quote request has been submitted successfully. We'll contact you soon!</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="flex h-full items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header - Fixed */}
                    <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-6 flex-shrink-0">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="text-2xl font-bold">Get Your Dream Quote</h2>
                                <p className="text-brand-gold">Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1]?.title}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="bg-white/20 rounded-full h-2">
                            <motion.div
                                className="bg-brand-gold rounded-full h-2"
                                initial={{ width: '25%' }}
                                animate={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>

                    {/* Content - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                {/* Step Content will be rendered here */}
                                {currentStep === 1 && (
                                    <EventCategorySelection
                                        formData={formData}
                                        updateFormData={updateFormData}
                                        errors={errors}
                                    />
                                )}

                                {currentStep === 2 && (
                                    <SubEventSelection
                                        formData={formData}
                                        updateFormData={updateFormData}
                                        errors={errors}
                                    />
                                )}

                                {currentStep === 3 && (
                                    <EventDetailsForm
                                        formData={formData}
                                        updateFormData={updateFormData}
                                        errors={errors}
                                    />
                                )}

                                {currentStep === 4 && (
                                    <div className="space-y-6">
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Services</h3>
                                            <p className="text-gray-600">Select the services you need for your event</p>
                                        </div>

                                        <div className="space-y-4">
                                            {/* Event-Specific Services */}
                                            {formData.subEvents.length > 0 && (
                                                <Accordion
                                                    title="Event-Specific Services"
                                                    isOpen={openAccordions['event-specific'] || false}
                                                    onToggle={() => toggleAccordion('event-specific')}
                                                    icon={<span className="text-brand-gold">⭐</span>}
                                                >
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                        {formData.subEvents.map(subEventId => {
                                                            const eventServices = eventSpecificServices.find(es => es.eventId === subEventId);
                                                            return eventServices?.availableServices.map(service => (
                                                                <label
                                                                    key={service.id}
                                                                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-brand-primary/50 cursor-pointer transition-colors"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={formData.selectedServices.some(s => s.id === service.id && s.isSelected)}
                                                                        onChange={(e) => {
                                                                            const updatedServices = [...formData.selectedServices];
                                                                            const existingIndex = updatedServices.findIndex(s => s.id === service.id);

                                                                            if (existingIndex >= 0) {
                                                                                updatedServices[existingIndex].isSelected = e.target.checked;
                                                                            } else {
                                                                                updatedServices.push({
                                                                                    id: service.id,
                                                                                    name: service.name,
                                                                                    category: 'core',
                                                                                    isSelected: e.target.checked,
                                                                                    eventName: eventServices.eventName,
                                                                                    description: service.description
                                                                                });
                                                                            }

                                                                            updateFormData({ selectedServices: updatedServices });
                                                                        }}
                                                                        className="text-brand-primary rounded focus:ring-brand-primary"
                                                                    />
                                                                    <div>
                                                                        <div className="font-medium text-sm">{service.name}</div>
                                                                        {service.description && (
                                                                            <div className="text-xs text-gray-500">{service.description}</div>
                                                                        )}
                                                                    </div>
                                                                </label>
                                                            ));
                                                        })}
                                                    </div>
                                                </Accordion>
                                            )}

                                            {/* General Service Categories */}
                                            {mainServiceCategories.map(category => (
                                                <Accordion
                                                    key={category.id}
                                                    title={category.name}
                                                    isOpen={openAccordions[category.id] || false}
                                                    onToggle={() => toggleAccordion(category.id)}
                                                    icon={<span>{category.icon}</span>}
                                                >
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                        {category.services.map(service => (
                                                            <label
                                                                key={service.id}
                                                                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-brand-primary/50 cursor-pointer transition-colors"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={formData.selectedServices.some(s => s.id === service.id && s.isSelected)}
                                                                    onChange={(e) => {
                                                                        const updatedServices = [...formData.selectedServices];
                                                                        const existingIndex = updatedServices.findIndex(s => s.id === service.id);

                                                                        if (existingIndex >= 0) {
                                                                            updatedServices[existingIndex].isSelected = e.target.checked;
                                                                        } else {
                                                                            updatedServices.push({
                                                                                id: service.id,
                                                                                name: service.name,
                                                                                category: service.isPopular ? 'core' : 'extra',
                                                                                isSelected: e.target.checked,
                                                                                eventName: category.name,
                                                                                description: service.description
                                                                            });
                                                                        }

                                                                        updateFormData({ selectedServices: updatedServices });
                                                                    }}
                                                                    className="text-brand-primary rounded focus:ring-brand-primary"
                                                                />
                                                                <div>
                                                                    <div className="font-medium text-sm flex items-center gap-1">
                                                                        {service.name}
                                                                        {service.isPopular && <span className="text-brand-gold text-xs">⭐</span>}
                                                                    </div>
                                                                    {service.description && (
                                                                        <div className="text-xs text-gray-500">{service.description}</div>
                                                                    )}
                                                                </div>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </Accordion>
                                            ))}
                                        </div>

                                        {errors.services && (
                                            <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                                <p className="text-red-700 text-sm">{errors.services}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {currentStep === 5 && (
                                    <div className="space-y-6">
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h3>
                                            <p className="text-gray-600">How can we reach you?</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                                <input
                                                    type="text"
                                                    value={formData.contactInfo.name}
                                                    onChange={(e) => updateFormData({
                                                        contactInfo: { ...formData.contactInfo, name: e.target.value }
                                                    })}
                                                    placeholder="Enter your full name"
                                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all ${errors.name ? 'border-red-300' : 'border-gray-200'
                                                        }`}
                                                />
                                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    value={formData.contactInfo.phone}
                                                    onChange={(e) => updateFormData({
                                                        contactInfo: { ...formData.contactInfo, phone: e.target.value }
                                                    })}
                                                    placeholder="Enter phone number"
                                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all ${errors.phone ? 'border-red-300' : 'border-gray-200'
                                                        }`}
                                                />
                                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    value={formData.contactInfo.email}
                                                    onChange={(e) => updateFormData({
                                                        contactInfo: { ...formData.contactInfo, email: e.target.value }
                                                    })}
                                                    placeholder="Enter email address"
                                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all ${errors.email ? 'border-red-300' : 'border-gray-200'
                                                        }`}
                                                />
                                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number (Optional)</label>
                                                <input
                                                    type="tel"
                                                    value={formData.contactInfo.whatsapp || ''}
                                                    onChange={(e) => updateFormData({
                                                        contactInfo: { ...formData.contactInfo, whatsapp: e.target.value }
                                                    })}
                                                    placeholder="WhatsApp number (if different)"
                                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Summary */}
                                        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-xl p-6 border border-brand-primary/20">
                                            <h4 className="font-bold text-brand-primary text-lg mb-4">Quote Summary</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <span className="font-semibold">Event:</span> {formData.eventCelebration}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Date:</span> {formData.eventDate}
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Guests:</span> {formData.guestCount} people
                                                </div>
                                                <div>
                                                    <span className="font-semibold">Services:</span> {formData.selectedServices.filter(s => s.isSelected).length} selected
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Footer - Fixed */}
                    <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t flex-shrink-0">
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

                        {currentStep === STEPS.length ? (
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

                    {/* Error Display */}
                    {errors.submit && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4 mx-6 mb-4">
                            <p className="text-red-700">{errors.submit}</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ImprovedQuoteModal;