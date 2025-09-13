import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Building, Calendar, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import { QuoteFormData } from '../../../types/quote';

interface EventCategorySelectionProps {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  errors: Record<string, string>;
}

const eventCategories = [
  {
    id: 'traditional-events',
    name: 'Traditional Events',
    description: 'House warming, baby ceremonies, and cultural celebrations',
    icon: Building,
    color: 'from-orange-500 to-orange-400'
  },
  {
    id: 'wedding-events',
    name: 'Wedding',
    description: 'Complete wedding celebrations from engagement to reception',
    icon: Heart,
    color: 'from-pink-500 to-pink-400'
  },
  {
    id: 'birthdays',
    name: 'Birthdays',
    description: 'Memorable birthday celebrations for all ages',
    icon: Calendar,
    color: 'from-blue-500 to-blue-400'
  },
  {
    id: 'special-days',
    name: 'Special Days',
    description: 'Anniversaries, surprise parties, and unique celebrations',
    icon: Sparkles,
    color: 'from-purple-500 to-purple-400'
  },
  {
    id: 'college-events',
    name: 'College Events',
    description: 'Educational institution events and celebrations',
    icon: GraduationCap,
    color: 'from-green-500 to-green-400'
  },
  {
    id: 'corporate-events',
    name: 'Corporate Events',
    description: 'Professional corporate event management',
    icon: Briefcase,
    color: 'from-gray-600 to-gray-500'
  }
];

const EventCategorySelection: React.FC<EventCategorySelectionProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  const handleCategorySelect = (categoryId: string) => {
    updateFormData({ 
      eventCategory: categoryId,
      subEvents: [], // Reset sub events when category changes
      selectedServices: [] // Reset services when category changes
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">What type of event are you planning?</h3>
        <p className="text-gray-600">Choose your event category to get started</p>
      </div>

      {/* Event Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventCategories.map((category) => {
          const IconComponent = category.icon;
          const isSelected = formData.eventCategory === category.id;

          return (
            <motion.button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`
                p-6 rounded-xl border-2 text-left transition-all duration-300 group
                ${isSelected 
                  ? 'border-brand-primary bg-brand-primary/10 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-brand-primary/50 hover:shadow-md hover:scale-102'
                }
              `}
              whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className={`
                  inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color}
                  ${isSelected ? 'shadow-lg' : 'group-hover:shadow-md'}
                  transition-shadow duration-300
                `}>
                  <IconComponent className="text-white" size={24} />
                </div>

                {/* Content */}
                <div>
                  <h4 className={`
                    font-bold text-lg mb-2 transition-colors duration-300
                    ${isSelected ? 'text-brand-primary' : 'text-gray-800 group-hover:text-brand-primary'}
                  `}>
                    {category.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Selection Indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2 text-brand-primary font-medium text-sm"
                  >
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    Selected
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Error Display */}
      {errors.eventCategory && (
        <div className="text-center">
          <p className="text-red-500 text-sm">{errors.eventCategory}</p>
        </div>
      )}

      {/* Selected Category Summary */}
      {formData.eventCategory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-xl p-6 border border-brand-primary/20"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand-primary text-white rounded-lg">
              {React.createElement(
                eventCategories.find(cat => cat.id === formData.eventCategory)?.icon || Sparkles, 
                { size: 24 }
              )}
            </div>
            <div>
              <h5 className="font-bold text-brand-primary text-lg">
                {eventCategories.find(cat => cat.id === formData.eventCategory)?.name}
              </h5>
              <p className="text-gray-600">
                {eventCategories.find(cat => cat.id === formData.eventCategory)?.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EventCategorySelection;