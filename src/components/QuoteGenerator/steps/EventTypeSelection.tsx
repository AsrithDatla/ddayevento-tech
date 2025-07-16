import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Building, GraduationCap, Users, Baby, Calendar, Sparkles, Briefcase } from 'lucide-react';
import { QuoteFormData } from '../../../types/quote';
import { allEventsData } from '../../../data/comprehensiveEventsData';

interface EventTypeSelectionProps {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  errors: Record<string, string>;
}

// Icon mapping for event categories
const categoryIcons: Record<string, React.ComponentType<any>> = {
  'wedding-events': Heart,
  'house-warming': Building,
  'baby-events': Baby,
  'birthdays': Calendar,
  'anniversaries': Sparkles,
  'half-saree-dhoti': Users,
  'college-events': GraduationCap,
  'corporate-events': Briefcase,
  'special-days': Sparkles
};

const EventTypeSelection: React.FC<EventTypeSelectionProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  const [selectedCategory, setSelectedCategory] = useState(formData.eventCategory);
  const [selectedEventType, setSelectedEventType] = useState(formData.eventType);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedEventType(''); // Reset event type when category changes
    updateFormData({ 
      eventCategory: categoryId, 
      eventType: '',
      selectedServices: [] // Reset services when event type changes
    });
  };

  const handleEventTypeSelect = (eventId: string) => {
    setSelectedEventType(eventId);
    updateFormData({ eventType: eventId });
  };

  const selectedCategoryData = allEventsData.find(cat => cat.id === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">What type of event are you planning?</h3>
        <p className="text-gray-600">Choose your event category to get started with personalized recommendations</p>
      </div>

      {/* Event Categories */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Event Categories</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allEventsData.map((category) => {
            const IconComponent = categoryIcons[category.id] || Sparkles;
            const isSelected = selectedCategory === category.id;

            return (
              <motion.button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`
                  p-4 rounded-xl border-2 text-left transition-all duration-300
                  ${isSelected 
                    ? 'border-brand-primary bg-brand-primary/10 shadow-lg' 
                    : 'border-gray-200 hover:border-brand-primary/50 hover:shadow-md'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    p-2 rounded-lg
                    ${isSelected ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-600'}
                  `}>
                    <IconComponent size={20} />
                  </div>
                  <div className="flex-1">
                    <h5 className={`font-semibold mb-1 ${isSelected ? 'text-brand-primary' : 'text-gray-800'}`}>
                      {category.name}
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
        {errors.eventCategory && (
          <p className="text-red-500 text-sm mt-2">{errors.eventCategory}</p>
        )}
      </div>

      {/* Specific Event Types */}
      {selectedCategoryData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Choose Specific Event Type
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedCategoryData.events.map((event) => {
              const isSelected = selectedEventType === event.eventId;

              return (
                <motion.button
                  key={event.eventId}
                  onClick={() => handleEventTypeSelect(event.eventId)}
                  className={`
                    p-4 rounded-xl border-2 text-left transition-all duration-300
                    ${isSelected 
                      ? 'border-brand-gold bg-brand-gold/10 shadow-lg' 
                      : 'border-gray-200 hover:border-brand-gold/50 hover:shadow-md'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className={`font-semibold ${isSelected ? 'text-brand-primary' : 'text-gray-800'}`}>
                        {event.eventName}
                      </h5>
                      <div className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                        ₹{event.estimatedBudget.min.toLocaleString()} - ₹{event.estimatedBudget.max.toLocaleString()}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{event.coreServices.length} Core Services</span>
                      <span>{event.extraServices.length} Extra Services</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
          {errors.eventType && (
            <p className="text-red-500 text-sm mt-2">{errors.eventType}</p>
          )}
        </motion.div>
      )}

      {/* Selected Event Summary */}
      {selectedCategoryData && selectedEventType && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-xl p-6 border border-brand-primary/20"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-primary text-white rounded-lg">
              {React.createElement(categoryIcons[selectedCategory] || Sparkles, { size: 24 })}
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-brand-primary text-lg mb-1">
                {selectedCategoryData.events.find(e => e.eventId === selectedEventType)?.eventName}
              </h5>
              <p className="text-gray-600 mb-3">
                {selectedCategoryData.events.find(e => e.eventId === selectedEventType)?.description}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-gray-600">Category: {selectedCategoryData.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span className="text-gray-600">
                    Budget Range: ₹{selectedCategoryData.events.find(e => e.eventId === selectedEventType)?.estimatedBudget.min.toLocaleString()} - 
                    ₹{selectedCategoryData.events.find(e => e.eventId === selectedEventType)?.estimatedBudget.max.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EventTypeSelection;