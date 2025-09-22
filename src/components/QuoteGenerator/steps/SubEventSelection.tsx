import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import { QuoteFormData } from '../../../types/quote';
import { allEventsData } from '../../../data/comprehensiveEventsData';

interface SubEventSelectionProps {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  errors: Record<string, string>;
}



const SubEventSelection: React.FC<SubEventSelectionProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  const categoryData = allEventsData.find(cat => cat.id === formData.eventCategory);
  const currentSubEvents = categoryData ? categoryData.events : [];

  const toggleSubEvent = (subEventId: string) => {
    const currentSelected = formData.subEvents || [];
    const isSelected = currentSelected.includes(subEventId);
    
    let updatedSubEvents;
    if (isSelected) {
      updatedSubEvents = currentSelected.filter(id => id !== subEventId);
    } else {
      updatedSubEvents = [...currentSelected, subEventId];
    }
    
    updateFormData({ 
      subEvents: updatedSubEvents,
      selectedServices: [] // Reset services when sub events change
    });
  };

  if (!formData.eventCategory) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">Please select an event category first</p>
        <button className="text-brand-primary hover:underline flex items-center gap-2 mx-auto">
          <ArrowLeft size={16} />
          Go back to select category
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Select Your Specific Events</h3>
        <p className="text-gray-600">Choose one or more events you want to plan</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-brand-primary/10 rounded-lg px-4 py-2">
          <span className="text-sm text-brand-primary font-medium">
            {(formData.subEvents || []).length} events selected
          </span>
        </div>
      </div>

      {/* Sub Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentSubEvents.map((subEvent) => {
          const isSelected = (formData.subEvents || []).includes(subEvent.eventId);

          return (
            <motion.button
              key={subEvent.eventId}
              onClick={() => toggleSubEvent(subEvent.eventId)}
              className={`
                p-4 rounded-xl border-2 text-left transition-all duration-300
                ${isSelected 
                  ? 'border-brand-primary bg-brand-primary/10 shadow-md' 
                  : 'border-gray-200 hover:border-brand-primary/50 hover:shadow-sm'
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3">
                {/* Checkbox */}
                <div className={`
                  w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all mt-0.5
                  ${isSelected 
                    ? 'bg-brand-primary border-brand-primary shadow-sm' 
                    : 'border-gray-300 hover:border-brand-primary/50'
                  }
                `}>
                  {isSelected && <Check size={14} className="text-white" />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className={`
                    font-semibold mb-1 transition-colors duration-300
                    ${isSelected ? 'text-brand-primary' : 'text-gray-800'}
                  `}>
                    {subEvent.eventName}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {subEvent.description}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Error Display */}
      {errors.subEvents && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700 text-sm">{errors.subEvents}</p>
        </div>
      )}

      {/* Selected Events Summary */}
      {formData.subEvents && formData.subEvents.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-xl p-6 border border-brand-primary/20"
        >
          <h4 className="font-bold text-brand-primary text-lg mb-4">Selected Events Summary</h4>
          <div className="space-y-2">
            {formData.subEvents.map(eventId => {
              const event = currentSubEvents.find(e => e.eventId === eventId);
              return event ? (
                <div key={eventId} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-gray-700 font-medium">{event.eventName}</span>
                </div>
              ) : null;
            })}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            You can select multiple events if you're planning a series of celebrations
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SubEventSelection;