import React from 'react';
import { motion } from 'framer-motion';
import { QuoteFormData } from '../../../types/quote';
import { subEventsData } from '../../../data/subEventsData';

interface EventCategorySelectionProps {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  errors: Record<string, string>;
}

const EventCategorySelection: React.FC<EventCategorySelectionProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">What type of event are you planning?</h3>
        <p className="text-gray-600">Choose the category that best describes your event</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subEventsData.map((category) => (
          <motion.button
            key={category.id}
            type="button"
            onClick={() => updateFormData({ 
              eventCategory: category.id,
              subEvents: [] // Reset sub events when category changes
            })}
            className={`p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
              formData.eventCategory === category.id
                ? 'border-brand-primary bg-brand-primary/10 shadow-lg'
                : 'border-gray-200 hover:border-brand-primary/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-3xl mb-3">{category.icon}</div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">{category.name}</h4>
            <p className="text-gray-600 text-sm">{category.description}</p>
          </motion.button>
        ))}
      </div>

      {errors.eventCategory && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700 text-sm">{errors.eventCategory}</p>
        </div>
      )}
    </div>
  );
};

export default EventCategorySelection;