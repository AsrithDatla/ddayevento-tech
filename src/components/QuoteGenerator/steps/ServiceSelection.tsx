import React, { useEffect } from 'react';
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
  const { selectedServices } = formData;

  // Get data for all selected sub-events
  const selectedSubEventsData = formData.subEvents
    .map(subEventId => {
      for (const category of allEventsData) {
        const event = category.events.find(e => e.eventId === subEventId);
        if (event) {
          return event;
        }
      }
      return null;
    })
    .filter((event): event is NonNullable<typeof event> => event !== null);


  // Initialize services when sub-events change
  useEffect(() => {
    const allServices: SelectedService[] = [];
    const serviceIds = new Set<string>();

    selectedSubEventsData.forEach(event => {
      const servicesForEvent = [...event.coreServices, ...event.extraServices];

      servicesForEvent.forEach(service => {
        if (!serviceIds.has(service.id)) {
          allServices.push({
            ...service,
            isSelected: service.category === 'core',
            eventName: event.eventName,
          });
          serviceIds.add(service.id);
        }
      });
    });

    updateFormData({ selectedServices: allServices });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubEventsData.map(e => e.eventId).join(',')]);

  const toggleService = (serviceId: string) => {
    const updatedServices = selectedServices.map(service => 
      service.id === serviceId 
        ? { ...service, isSelected: !service.isSelected }
        : service
    );
    updateFormData({ selectedServices: updatedServices });
  };

  const selectedCount = selectedServices.filter(s => s.isSelected).length;

  if (selectedSubEventsData.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Please select one or more sub-events first.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Services</h3>
        <p className="text-gray-600">Select the services you need for your chosen events.</p>
        <div className="mt-4 inline-flex items-center gap-4 bg-brand-primary/10 rounded-lg px-4 py-2">
          <span className="text-sm text-brand-primary font-medium">
            {selectedCount} services selected
          </span>
        </div>
      </div>

      {/* Services grouped by event */}
      <div className="space-y-10">
        {selectedSubEventsData.map(eventData => {
          const eventServices = selectedServices.filter(s => s.eventName === eventData.eventName);
          const coreServices = eventServices.filter(s => s.category === 'core');
          const extraServices = eventServices.filter(s => s.category === 'extra');

          return (
            <div key={eventData.eventId} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold text-brand-secondary mb-6 border-b pb-3">
                Services for: {eventData.eventName}
              </h4>

              {/* Core Services */}
              {coreServices.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-brand-gold" size={20} />
                    <h5 className="text-lg font-semibold text-gray-700">Core Services</h5>
                    <span className="text-xs bg-brand-gold/20 text-brand-primary px-2 py-1 rounded-full">
                      Recommended
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
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Extra Services */}
              {extraServices.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="text-brand-secondary" size={20} />
                    <h5 className="text-lg font-semibold text-gray-700">Additional Services</h5>
                    <span className="text-xs bg-brand-secondary/20 text-brand-secondary px-2 py-1 rounded-full">
                      Optional
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
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
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
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 mt-1">
                *Final details will be discussed during our consultation.
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