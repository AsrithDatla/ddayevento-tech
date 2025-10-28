import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Calendar, MapPin, Users, Phone, Mail, User, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { QuoteFormData, QuoteStep } from '../types/quote';
import { mainServiceCategories, eventSpecificServices } from '../data/servicesData';
import { subEventsData } from '../data/subEventsData';
import { SelectorChips } from '../components/ui/selector-chips';

const STEPS: QuoteStep[] = [
  { id: 1, title: 'Event Category', description: 'Choose event type' },
  { id: 2, title: 'Sub Events', description: 'Select specific events' },
  { id: 3, title: 'Event Details', description: 'Tell us more' },
  { id: 4, title: 'Services', description: 'What do you need?' },
  { id: 5, title: 'Contact', description: 'How to reach you' }
];

const QuotePage: React.FC = () => {
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
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const updateFormData = (updates: Partial<QuoteFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned non-JSON response');
      }

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(result.message || 'Failed to submit quote request');
      }
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Failed to submit quote request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper functions for service selection
  const handleServiceSelection = (categoryId: string, selectedServices: string[]) => {
    const category = mainServiceCategories.find(cat => cat.id === categoryId);
    if (!category) return;

    const updatedServices = [...formData.selectedServices];
    const filteredServices = updatedServices.filter(s => s.eventName !== category.name);
    
    selectedServices.forEach(serviceId => {
      const service = category.services.find(s => s.id === serviceId);
      if (service) {
        filteredServices.push({
          id: service.id,
          name: service.name,
          category: service.isPopular ? 'core' : 'extra',
          isSelected: true,
          eventName: category.name,
          description: service.description
        });
      }
    });

    updateFormData({ selectedServices: filteredServices });
  };

  const handleEventSpecificServiceSelection = (eventId: string, selectedServices: string[]) => {
    const eventServices = eventSpecificServices.find(es => es.eventId === eventId);
    if (!eventServices) return;

    const updatedServices = [...formData.selectedServices];
    const filteredServices = updatedServices.filter(s => s.eventName !== eventServices.eventName);
    
    selectedServices.forEach(serviceId => {
      const service = eventServices.availableServices.find(s => s.id === serviceId);
      if (service) {
        filteredServices.push({
          id: service.id,
          name: service.name,
          category: 'core',
          isSelected: true,
          eventName: eventServices.eventName,
          description: service.description
        });
      }
    });

    updateFormData({ selectedServices: filteredServices });
  };

  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your quote request has been submitted successfully. We'll contact you within 24 hours.
            </p>
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-brand-primary text-lg mb-4">What happens next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>Our team reviews your requirements within 2-4 hours</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>We prepare a detailed quote with pricing</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>You receive a proposal within 24 hours</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>Our coordinator calls to discuss details</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917386813689" className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-primary-dark transition-colors">
                Call +91-7386813689
              </a>
              <a href="/" className="border border-brand-primary text-brand-primary px-6 py-3 rounded-lg hover:bg-brand-primary/10 transition-colors">
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section with Progress */}
      <div className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-4"
            >
              <Sparkles size={16} />
              Step {currentStep} of {STEPS.length}
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Create Your Perfect Event
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tell us about your vision and we'll craft a personalized quote just for you
            </p>
          </div>

          {/* Modern Progress Indicator */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 rounded-full -translate-y-1/2"></div>
              <div 
                className="absolute top-1/2 left-0 h-1 bg-white rounded-full -translate-y-1/2 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
              ></div>
              
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative z-10 flex flex-col items-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    currentStep > step.id ? 'bg-white text-brand-primary shadow-lg' :
                    currentStep === step.id ? 'bg-white text-brand-primary shadow-lg ring-4 ring-white/30' :
                    'bg-white/20 text-white/70'
                  }`}>
                    {currentStep > step.id ? <Check size={20} /> : step.id}
                  </div>
                  <div className="mt-3 text-center">
                    <div className={`text-sm font-semibold ${
                      currentStep >= step.id ? 'text-white' : 'text-white/60'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-white/70 hidden sm:block">
                      {step.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >   
             {/* Step 1: Event Category */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        What type of event are you planning?
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the category that best describes your celebration
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                      {subEventsData.map((category) => (
                        <motion.button
                          key={category.id}
                          type="button"
                          onClick={() => updateFormData({ 
                            eventCategory: category.id,
                            subEvents: []
                          })}
                          className={`group p-8 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-xl hover:-translate-y-1 ${
                            formData.eventCategory === category.id
                              ? 'border-brand-primary bg-gradient-to-br from-brand-primary/10 to-purple-50 shadow-xl'
                              : 'border-gray-200 hover:border-brand-primary/50 bg-white'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            {category.icon}
                          </div>
                          <h3 className="font-bold text-xl text-gray-800 mb-3">{category.name}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                          
                          {formData.eventCategory === category.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="mt-4 flex items-center gap-2 text-brand-primary font-semibold"
                            >
                              <Check size={16} />
                              Selected
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>

                    {errors.eventCategory && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg max-w-2xl mx-auto"
                      >
                        <p className="text-red-700 text-sm">{errors.eventCategory}</p>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Step 2: Sub Events */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Select Your Events
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose all the events you need for your celebration
                      </p>
                    </div>

                    {(() => {
                      const selectedCategory = subEventsData.find(cat => cat.id === formData.eventCategory);
                      if (!selectedCategory) {
                        return (
                          <div className="text-center py-12">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <ArrowRight size={24} className="text-gray-400" />
                            </div>
                            <p className="text-gray-500">Please select an event category first</p>
                          </div>
                        );
                      }

                      const categoryData = selectedCategory; // TypeScript workaround

                      return (
                        <div className="max-w-4xl mx-auto">
                          <div className="bg-gradient-to-r from-brand-primary/10 to-purple-50 rounded-2xl p-6 mb-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-3">
                              <span className="text-3xl">{categoryData.icon}</span>
                              {categoryData.name}
                            </h3>
                            <p className="text-gray-600">{categoryData.description}</p>
                          </div>
                          
                          <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-gray-700 text-center">
                              Select the specific events you need:
                            </h4>
                            <SelectorChips
                              options={categoryData.subEvents.map(event => event.name)}
                              initialSelected={formData.subEvents.map(id => {
                                const event = categoryData.subEvents.find(e => e.id === id);
                                return event ? event.name : '';
                              }).filter(Boolean)}
                              onChange={(selectedNames) => {
                                const selectedIds = selectedNames.map(name => {
                                  const event = categoryData.subEvents.find(e => e.name === name);
                                  return event ? event.id : '';
                                }).filter(Boolean);
                                updateFormData({ subEvents: selectedIds });
                              }}
                            />
                          </div>
                        </div>
                      );
                    })()}

                    {errors.subEvents && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg max-w-2xl mx-auto"
                      >
                        <p className="text-red-700 text-sm">{errors.subEvents}</p>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Step 3: Event Details */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Tell us about your event
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Help us understand your requirements better
                      </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <User className="inline w-4 h-4 mr-2" />
                            What are you celebrating? *
                          </label>
                          <input
                            type="text"
                            value={formData.eventCelebration || ''}
                            onChange={(e) => updateFormData({ eventCelebration: e.target.value })}
                            placeholder="e.g., My daughter's wedding, Company anniversary, Birthday celebration"
                            className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg ${
                              errors.eventCelebration ? 'border-red-300' : 'border-gray-200'
                            }`}
                          />
                          {errors.eventCelebration && (
                            <p className="text-red-500 text-sm mt-2">{errors.eventCelebration}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <Calendar className="inline w-4 h-4 mr-2" />
                            Event Date *
                          </label>
                          <input
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => updateFormData({ eventDate: e.target.value })}
                            min={new Date().toISOString().split('T')[0]}
                            className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg ${
                              errors.eventDate ? 'border-red-300' : 'border-gray-200'
                            }`}
                          />
                          {errors.eventDate && (
                            <p className="text-red-500 text-sm mt-2">{errors.eventDate}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Preferred Time
                          </label>
                          <select
                            value={formData.eventTime}
                            onChange={(e) => updateFormData({ eventTime: e.target.value })}
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                          >
                            <option value="">Select time</option>
                            <option value="morning">Morning (6 AM - 12 PM)</option>
                            <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                            <option value="evening">Evening (6 PM - 10 PM)</option>
                            <option value="night">Night (10 PM onwards)</option>
                            <option value="full-day">Full Day Event</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <Users className="inline w-4 h-4 mr-2" />
                            Expected Guest Count *
                          </label>
                          <select
                            value={formData.guestCount.toString()}
                            onChange={(e) => updateFormData({ guestCount: parseInt(e.target.value) || 0 })}
                            className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg ${
                              errors.guestCount ? 'border-red-300' : 'border-gray-200'
                            }`}
                          >
                            <option value="0">Select guest count</option>
                            <option value="50">Up to 50 guests</option>
                            <option value="100">50-100 guests</option>
                            <option value="200">100-200 guests</option>
                            <option value="300">200-300 guests</option>
                            <option value="500">300-500 guests</option>
                            <option value="1000">500+ guests</option>
                          </select>
                          {errors.guestCount && (
                            <p className="text-red-500 text-sm mt-2">{errors.guestCount}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Venue Preference
                          </label>
                          <select
                            value={formData.venueType}
                            onChange={(e) => updateFormData({ venueType: e.target.value })}
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                          >
                            <option value="">Select venue type</option>
                            <option value="indoor">Indoor Venue</option>
                            <option value="outdoor">Outdoor Venue</option>
                            <option value="both">Both Indoor & Outdoor</option>
                            <option value="home">Home/Residence</option>
                            <option value="hotel">Hotel/Banquet Hall</option>
                            <option value="destination">Destination Venue</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <MapPin className="inline w-4 h-4 mr-2" />
                            Event Location
                          </label>
                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => updateFormData({ location: e.target.value })}
                            placeholder="City, Area"
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Estimated Budget
                          </label>
                          <select
                            value={formData.estimatedBudget}
                            onChange={(e) => updateFormData({ estimatedBudget: e.target.value })}
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-1l">Under ₹1 Lakh</option>
                            <option value="1l-3l">₹1-3 Lakhs</option>
                            <option value="3l-5l">₹3-5 Lakhs</option>
                            <option value="5l-10l">₹5-10 Lakhs</option>
                            <option value="10l-20l">₹10-20 Lakhs</option>
                            <option value="above-20l">Above ₹20 Lakhs</option>
                          </select>
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Special Requests or Requirements
                          </label>
                          <textarea
                            value={formData.specialRequests}
                            onChange={(e) => updateFormData({ specialRequests: e.target.value })}
                            placeholder="Any specific requirements, themes, dietary restrictions, accessibility needs, etc."
                            rows={4}
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none text-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Services */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Choose Your Services
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Select the services you need for your perfect event
                      </p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-8">
                      {/* Event-Specific Services */}
                      {formData.subEvents.length > 0 && (
                        <div>
                          <div className="bg-gradient-to-r from-brand-primary/10 to-purple-50 rounded-2xl p-6 mb-6">
                            <h3 className="text-xl font-semibold text-brand-primary mb-2 flex items-center gap-2">
                              <Sparkles size={20} />
                              Event-Specific Services
                            </h3>
                            <p className="text-gray-600">Specialized services tailored for your selected events</p>
                          </div>
                          
                          {formData.subEvents.map(subEventId => {
                            const eventServices = eventSpecificServices.find(es => es.eventId === subEventId);
                            if (!eventServices) return null;

                            const currentlySelected = formData.selectedServices
                              .filter(s => s.eventName === eventServices.eventName && s.isSelected)
                              .map(s => s.name);

                            return (
                              <div key={subEventId} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h4 className="font-semibold text-gray-800 mb-4 text-lg">
                                  {eventServices.eventName}
                                </h4>
                                <SelectorChips
                                  options={eventServices.availableServices.map(service => service.name)}
                                  initialSelected={currentlySelected}
                                  onChange={(selected) => handleEventSpecificServiceSelection(subEventId, 
                                    selected.map(name => {
                                      const service = eventServices.availableServices.find(s => s.name === name);
                                      return service ? service.id : '';
                                    }).filter(Boolean)
                                  )}
                                />
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* General Service Categories with Dropdowns */}
                      <div>
                        <div className="bg-gradient-to-r from-purple-50 to-brand-secondary/10 rounded-2xl p-6 mb-6">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">General Services</h3>
                          <p className="text-gray-600">Essential services available for all events</p>
                        </div>
                        
                        <div className="space-y-4">
                          {mainServiceCategories.map(category => {
                            const isExpanded = expandedCategories.includes(category.id);
                            const currentlySelected = formData.selectedServices
                              .filter(s => s.eventName === category.name && s.isSelected)
                              .map(s => s.name);

                            return (
                              <div key={category.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                <button
                                  type="button"
                                  onClick={() => toggleCategoryExpansion(category.id)}
                                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                  <div className="flex items-center gap-4">
                                    <span className="text-2xl">{category.icon}</span>
                                    <div className="text-left">
                                      <h4 className="font-semibold text-gray-800 text-lg">{category.name}</h4>
                                      <p className="text-sm text-gray-600">{category.services.length} services available</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    {currentlySelected.length > 0 && (
                                      <span className="bg-brand-primary text-white text-xs px-2 py-1 rounded-full">
                                        {currentlySelected.length} selected
                                      </span>
                                    )}
                                    <ChevronDown 
                                      size={20} 
                                      className={`text-gray-400 transition-transform duration-200 ${
                                        isExpanded ? 'rotate-180' : ''
                                      }`} 
                                    />
                                  </div>
                                </button>
                                
                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                      className="border-t border-gray-200"
                                    >
                                      <div className="p-6">
                                        <SelectorChips
                                          options={category.services.map(service => service.name)}
                                          initialSelected={currentlySelected}
                                          onChange={(selected) => handleServiceSelection(category.id, 
                                            selected.map(name => {
                                              const service = category.services.find(s => s.name === name);
                                              return service ? service.id : '';
                                            }).filter(Boolean)
                                          )}
                                        />
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {errors.services && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg max-w-2xl mx-auto"
                      >
                        <p className="text-red-700 text-sm">{errors.services}</p>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Step 5: Contact Information */}
                {currentStep === 5 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Contact Information
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        How can we reach you with your personalized quote?
                      </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <User className="inline w-4 h-4 mr-2" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.contactInfo.name}
                            onChange={(e) => updateFormData({
                              contactInfo: { ...formData.contactInfo, name: e.target.value }
                            })}
                            placeholder="Enter your full name"
                            className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg ${
                              errors.name ? 'border-red-300' : 'border-gray-200'
                            }`}
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <Phone className="inline w-4 h-4 mr-2" />
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.contactInfo.phone}
                            onChange={(e) => updateFormData({
                              contactInfo: { ...formData.contactInfo, phone: e.target.value }
                            })}
                            placeholder="Enter phone number"
                            className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg ${
                              errors.phone ? 'border-red-300' : 'border-gray-200'
                            }`}
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            <Mail className="inline w-4 h-4 mr-2" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.contactInfo.email}
                            onChange={(e) => updateFormData({
                              contactInfo: { ...formData.contactInfo, email: e.target.value }
                            })}
                            placeholder="Enter email address"
                            className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg ${
                              errors.email ? 'border-red-300' : 'border-gray-200'
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            WhatsApp Number (Optional)
                          </label>
                          <input
                            type="tel"
                            value={formData.contactInfo.whatsapp || ''}
                            onChange={(e) => updateFormData({
                              contactInfo: { ...formData.contactInfo, whatsapp: e.target.value }
                            })}
                            placeholder="WhatsApp number (if different)"
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                          />
                        </div>
                      </div>

                      {/* Final Summary */}
                      <div className="mt-12 bg-gradient-to-r from-brand-primary/10 to-purple-50 rounded-2xl p-8 border border-brand-primary/20">
                        <h3 className="font-bold text-brand-primary text-xl mb-6 text-center">Quote Summary</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="font-semibold text-gray-700">Event:</span> 
                              <span className="text-gray-800">{formData.eventCelebration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-semibold text-gray-700">Date:</span> 
                              <span className="text-gray-800">{formData.eventDate}</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="font-semibold text-gray-700">Guests:</span> 
                              <span className="text-gray-800">{formData.guestCount} people</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-semibold text-gray-700">Services:</span> 
                              <span className="text-gray-800">{formData.selectedServices.filter(s => s.isSelected).length} selected</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-purple-50/30 px-8 md:px-12 py-8 flex items-center justify-between border-t">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-xl hover:bg-white/50"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {currentStep === STEPS.length ? (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-3 bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-primary-dark hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all disabled:opacity-50 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Quote Request
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-primary-dark hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Next Step
                <ChevronRight size={20} />
              </button>
            )}
          </div>

          {/* Error Display */}
          {errors.submit && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border-l-4 border-red-400 p-4 mx-8 md:mx-12 mb-6 rounded-lg"
            >
              <p className="text-red-700">{errors.submit}</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating Summary Card for Mobile */}
      {formData.eventCelebration && (
        <div className="fixed bottom-4 right-4 lg:hidden z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-200 max-w-xs"
          >
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Progress</h4>
            <div className="space-y-1 text-xs text-gray-600">
              <div>Event: {formData.eventCelebration}</div>
              {formData.eventDate && <div>Date: {formData.eventDate}</div>}
              <div>Services: {formData.selectedServices.filter(s => s.isSelected).length}</div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default QuotePage;