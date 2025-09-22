import { useState } from 'react';
import { QuoteFormData } from '../types';
import { eventsData } from '../data/eventsData';

export const useQuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<QuoteFormData>>({
    subEvents: [], // Changed to array
    services: [],
    termsAccepted: false,
  });

  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const toggleSubEvent = (subEventId: string) => {
    const currentSubEvents = formData.subEvents || [];
    const updatedSubEvents = currentSubEvents.includes(subEventId)
      ? currentSubEvents.filter(id => id !== subEventId)
      : [...currentSubEvents, subEventId];
    
    updateFormData({ subEvents: updatedSubEvents });
  };

  const getSubEvents = () => {
    const selectedEvent = eventsData.find(event => event.id === formData.mainEvent);
    return selectedEvent?.subEvents || [];
  };

  const getServices = () => {
    const selectedEvent = eventsData.find(event => event.id === formData.mainEvent);
    if (!selectedEvent || !formData.subEvents || formData.subEvents.length === 0) {
      return [];
    }

    // Aggregate services from all selected sub-events
    const allServices: { [category: string]: { category: string; services: {id: string; name: string}[] } } = {};
    
    formData.subEvents.forEach(subEventId => {
      const subEvent = selectedEvent.subEvents?.find(sub => sub.id === subEventId);
      if (subEvent) {
        subEvent.services.forEach(serviceCategory => {
          if (!allServices[serviceCategory.category]) {
            allServices[serviceCategory.category] = {
              category: serviceCategory.category,
              services: []
            };
          }
          
          // Add services that aren't already included
          serviceCategory.services.forEach(service => {
            const exists = allServices[serviceCategory.category].services.some(
              existingService => existingService.id === service.id
            );
            if (!exists) {
              allServices[serviceCategory.category].services.push(service);
            }
          });
        });
      }
    });

    return Object.values(allServices);
  };

  const toggleService = (serviceId: string) => {
    const currentServices = formData.services || [];
    const updatedServices = currentServices.includes(serviceId)
      ? currentServices.filter(id => id !== serviceId)
      : [...currentServices, serviceId];
    
    updateFormData({ services: updatedServices });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({ subEvents: [], services: [], termsAccepted: false });
  };

  const submitQuote = async () => {
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return { success: true };
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Failed to submit quote' }));
        return { success: false, error: errorData.message };
      }
    } catch (err) {
      const error = err as Error;
      return { success: false, error: error.message || 'Network error' };
    }
  };

  return {
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
    submitQuote,
  };
};