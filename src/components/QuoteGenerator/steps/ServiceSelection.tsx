import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Info } from 'lucide-react';
import { QuoteFormData, SelectedService } from '../../../types/quote';
import { allEventsData } from '../../../data/comprehensiveEventsData';

interface ServiceSelectionProps {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  errors: Record<string, string>;
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(formData.selectedServices);
  const [estimatedTotal, setEstimatedTotal] = useState(0);

  // Get current event data
  const currentEventCategory = allEventsData.find(cat => cat.id === formData.eventCategory);
  const currentEvent = currentEventCategory?.events.find(event => event.eventId === formData.eventType);

  // Initialize services when event changes
  useEffect(() => {
    if (currentEvent && selectedServices.length === 0) {
      const initialServices: SelectedService[] = [
        ...currentEvent.coreServices.map(service => ({
          ...service,
          isSelected: true, // Core services are pre-selected
          estimatedPrice: service.estimatedPrice ? 
            (service.estimatedPrice.min + service.estimatedPrice.max) / 2 : 
            Math.floor(Math.random() * 10000) + 5000 // Fallback pricing
        })),
        ...currentEvent.extraServices.map(service => ({
          ...service,
          isSelected: false,
          estimatedPrice: service.estimatedPrice ? 
            (service.estimatedPrice.min + service.estimatedPrice.max) / 2 : 
            Math.floor(Math.random() * 8000) + 3000 // Fallback pricing
        }))
      ];
      setSelectedServices(initialServices);
    }
  }, [currentEvent, selectedServices.length]);

  // Calculate estimated total
  useEffect(() => {
    const total = selectedServices
      .filter(service => service.isSelected)
      .reduce((sum, service) => sum + (service.estimatedPrice || 0), 0);
    setEstimatedTotal(total);
  }, [selectedServices]);

  // Update form data when services change
  useEffect(() => {
    updateFormData({ 
      selectedServices,
      estimatedTotal 
    });
  }, [selectedServices, estimatedTotal, updateFormData]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, isSelected: !service.isSelected }
          : service
      )
    );
  };

  const coreServices = selectedServices.filter(s => s.category === 'core');
  const extraServices = selectedServices.filter(s => s.category === 'extra');
  const selectedCount = selectedServices.filter(s => s.isSelected).length;

  if (!currentEvent) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Please select an event type first</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Services</h3>
        <p className="text-gray-600">Select the services you need for your {currentEvent.eventName}</p>
        <div className="mt-4 inline-flex items-center gap-4 bg-brand-primary/10 rounded-lg px-4 py-2">
          <span className="text-sm text-brand-primary font-medium">
            {selectedCount} services selected
          </span>
          <span className="text-sm text-gray-600">
            Estimated: ₹{estimatedTotal.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Core Services */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Star className="text-brand-gold" size={20} />
          <h4 className="text-lg font-semibold text-gray-700">Core Services</h4>
          <span className="text-xs bg-brand-gold/20 text-brand-primary px-2 py-1 rounded-full">
            Essential for your event
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreServices.map((service) => (
            <motion.div
              key={service.id}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer
                ${service.isSelected 
                  ? 'border-brand-primary bg-brand-primary/10 shadow-md' 
                  : 'border-gray-200 hover:border-brand-primary/50'
                }
              `}
              onClick={() => toggleService(service.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`
                      w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                      ${service.isSelected 
                        ? 'bg-brand-primary border-brand-primary shadow-md' 
                        : 'border-gray-300 hover:border-brand-primary/50'
                      }
                    `}>
                      {service.isSelected && <Check size={14} className="text-white" />}
                    </div>
                    <h5 className="font-semibold text-gray-800">{service.name}</h5>
                  </div>
                  {service.description && (
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{service.description}</p>
                  )}
                  {service.estimatedPrice && typeof service.estimatedPrice === 'object' && 'min' in service.estimatedPrice && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Price Range:</span>
                      <span className="font-medium">₹{service.estimatedPrice.min.toLocaleString()} - ₹{service.estimatedPrice.max.toLocaleString()}</span>
                    </div>
                  )}
                </div>
                <div className="text-right ml-4">
                  <div className="text-lg font-bold text-brand-primary">
                    ₹{service.estimatedPrice ? 
                      Math.round((service.estimatedPrice.min + service.estimatedPrice.max) / 2).toLocaleString() :
                      service.estimatedPrice?.toLocaleString()
                    }
                  </div>
                  <div className="text-xs text-gray-500">avg. price</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extra Services */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Info className="text-brand-secondary" size={20} />
          <h4 className="text-lg font-semibold text-gray-700">Additional Services</h4>
          <span className="text-xs bg-brand-secondary/20 text-brand-secondary px-2 py-1 rounded-full">
            Optional enhancements
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {extraServices.map((service) => (
            <motion.div
              key={service.id}
              className={`
                p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer
                ${service.isSelected 
                  ? 'border-brand-secondary bg-brand-secondary/10 shadow-md' 
                  : 'border-gray-200 hover:border-brand-secondary/50'
                }
              `}
              onClick={() => toggleService(service.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className={`
                    w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all mt-0.5
                    ${service.isSelected 
                      ? 'bg-brand-secondary border-brand-secondary shadow-md' 
                      : 'border-gray-300 hover:border-brand-secondary/50'
                    }
                  `}>
                    {service.isSelected && <Check size={14} className="text-white" />}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800 text-sm mb-1">{service.name}</h5>
                    {service.description && (
                      <p className="text-xs text-gray-600 mb-2 leading-relaxed">{service.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  {service.estimatedPrice && (
                    <div className="text-xs text-gray-500">
                      ₹{service.estimatedPrice.min.toLocaleString()} - ₹{service.estimatedPrice.max.toLocaleString()}
                    </div>
                  )}
                  <div className="text-right">
                    <div className="text-sm font-bold text-brand-secondary">
                      ₹{service.estimatedPrice ? 
                        Math.round((service.estimatedPrice.min + service.estimatedPrice.max) / 2).toLocaleString() :
                        service.estimatedPrice?.toLocaleString()
                      }
                    </div>
                    <div className="text-xs text-gray-500">avg.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Summary */}
      {selectedCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-xl p-6 border border-brand-primary/20"
        >
          <h4 className="font-bold text-brand-primary text-lg mb-4">Service Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-700 mb-2">Selected Services ({selectedCount})</h5>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {selectedServices
                  .filter(s => s.isSelected)
                  .map(service => (
                    <div key={service.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">{service.name}</span>
                      <span className="text-brand-primary font-medium">
                        ₹{service.estimatedPrice?.toLocaleString()}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-brand-primary">
                ₹{estimatedTotal.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Estimated Total</div>
              <div className="text-xs text-gray-500 mt-1">
                *Final pricing may vary based on specific requirements
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Boutique/Apparel Note */}
      <div className="bg-brand-gold/10 rounded-lg p-4 border border-brand-gold/30">
        <div className="flex items-start gap-3">
          <Info className="text-brand-gold mt-0.5" size={16} />
          <div>
            <h5 className="font-semibold text-brand-primary text-sm mb-1">
              Boutique & Apparel Services
            </h5>
            <p className="text-xs text-gray-600">
              For any events, we also provide boutique/apparel services for the bride, groom, and family functions. 
              This will be discussed during our consultation call.
            </p>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {errors.services && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700 text-sm">{errors.services}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceSelection;