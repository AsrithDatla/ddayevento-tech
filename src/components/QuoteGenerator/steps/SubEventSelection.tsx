import React from 'react';
import { motion } from 'framer-motion';
import { QuoteFormData } from '../../../types/quote';
import { subEventsData } from '../../../data/subEventsData';

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
  const selectedCategory = subEventsData.find(cat => cat.id === formData.eventCategory);

  const toggleSubEvent = (subEventId: string) => {
    const currentSubEvents = formData.subEvents || [];
    const updatedSubEvents = currentSubEvents.includes(subEventId)
      ? currentSubEvents.filter(id => id !== subEventId)
      : [...currentSubEvents, subEventId];
    
    updateFormData({ subEvents: updatedSubEvents });
  };

  if (!selectedCategory) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Please select an event category first</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Select {selectedCategory.name}
        </h3>
        <p className="text-gray-600">Choose all the events you need for your celebration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedCategory.subEvents.map((subEvent) => (
          <motion.label
            key={subEvent.id}
            className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-md ${
              formData.subEvents?.includes(subEvent.id)
                ? 'border-brand-primary bg-brand-primary/10'
                : 'border-gray-200 hover:border-brand-primary/50'
            }`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <input
              type="checkbox"
              checked={formData.subEvents?.includes(subEvent.id) || false}
              onChange={() => toggleSubEvent(subEvent.id)}
              className="mt-1 text-brand-primary rounded focus:ring-brand-primary"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 mb-1">{subEvent.name}</h4>
              <p className="text-gray-600 text-sm">{subEvent.description}</p>
            </div>
          </motion.label>
        ))}
      </div>

      {errors.subEvents && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700 text-sm">{errors.subEvents}</p>
        </div>
      )}
    </div>
  );
};

export default SubEventSelection;