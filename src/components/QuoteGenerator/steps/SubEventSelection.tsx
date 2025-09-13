import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import { QuoteFormData } from '../../../types/quote';

interface SubEventSelectionProps {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  errors: Record<string, string>;
}

// Simplified sub-events mapping based on main categories
const subEventsData: Record<string, Array<{id: string, name: string, description: string}>> = {
  'traditional-events': [
    { id: 'house-warming', name: 'House Warming', description: 'Traditional house warming ceremony' },
    { id: 'baby-shower', name: 'Baby Shower/Sreemamtham', description: 'Traditional baby shower ceremony' },
    { id: 'cradle-ceremony', name: 'Cradle/Naming Ceremony', description: 'Baby naming and cradle ceremony' },
    { id: 'annaprasana', name: 'Annaprasana', description: 'First rice feeding ceremony' },
    { id: 'half-saree', name: 'Half Saree/Dhoti Ceremony', description: 'Coming of age ceremony' }
  ],
  'wedding-events': [
    { id: 'engagement', name: 'Engagement', description: 'Ring ceremony and celebration' },
    { id: 'haldi', name: 'Haldi', description: 'Traditional turmeric ceremony' },
    { id: 'mehendi', name: 'Mehendi', description: 'Henna ceremony with music and dance' },
    { id: 'pellikuthuru', name: 'Pellikuthuru/Pellikoduku', description: 'Pre-wedding ceremony for bride/groom' },
    { id: 'sangeeth', name: 'Sangeeth', description: 'Musical night with dance performances' },
    { id: 'bachelor-party', name: 'Bachelor/Bridal Shower', description: 'Pre-wedding celebration with friends' },
    { id: 'wedding', name: 'Wedding Ceremony', description: 'Main wedding ceremony and rituals' },
    { id: 'reception', name: 'Reception', description: 'Grand reception celebration' }
  ],
  'birthdays': [
    { id: 'first-birthday', name: '1st Birthday', description: 'Special first birthday celebration' },
    { id: 'kids-birthday', name: 'Kids Birthday (2-12 years)', description: 'Fun themed birthday parties for children' },
    { id: 'teen-birthday', name: 'Teen Birthday (13-19 years)', description: 'Trendy celebrations for teenagers' },
    { id: 'adult-birthday', name: 'Adult Birthday (20+ years)', description: 'Elegant celebrations for adults' }
  ],
  'special-days': [
    { id: 'anniversary', name: 'Wedding Anniversary', description: 'Romantic anniversary celebrations' },
    { id: 'surprise-party', name: 'Surprise Party', description: 'Surprise celebrations for loved ones' },
    { id: 'kitty-party', name: 'Kitty Party', description: 'Social gatherings and get-togethers' },
    { id: 'house-party', name: 'House Party', description: 'Casual home celebrations' },
    { id: 'valentine-proposal', name: 'Valentine/Proposal', description: 'Romantic celebrations and proposals' },
    { id: 'retirement-party', name: 'Retirement Party', description: 'Farewell celebrations' }
  ],
  'college-events': [
    { id: 'annual-day', name: 'Annual Day', description: 'School/college annual celebrations' },
    { id: 'sports-day', name: 'Sports Day', description: 'Athletic competitions and celebrations' },
    { id: 'cultural-events', name: 'Cultural Events', description: 'Cultural programs and performances' },
    { id: 'freshers-day', name: 'Freshers Day', description: 'Welcome celebration for new students' },
    { id: 'farewell-day', name: 'Farewell Day', description: 'Goodbye celebration for graduating students' },
    { id: 'convocation', name: 'Convocation', description: 'Graduation ceremony' }
  ],
  'corporate-events': [
    { id: 'office-opening', name: 'Office Opening', description: 'Grand opening ceremonies' },
    { id: 'team-lunch', name: 'Team Lunch/Dinner', description: 'Team building meals and gatherings' },
    { id: 'corporate-party', name: 'Corporate Party', description: 'Company celebrations and events' },
    { id: 'day-outing', name: 'Day Outing', description: 'Team building outdoor activities' },
    { id: 'conference', name: 'Conference/Seminar', description: 'Professional meetings and presentations' },
    { id: 'product-launch', name: 'Product Launch', description: 'New product introduction events' },
    { id: 'awards-ceremony', name: 'Awards Ceremony', description: 'Recognition and award events' }
  ]
};

const SubEventSelection: React.FC<SubEventSelectionProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  const currentSubEvents = subEventsData[formData.eventCategory] || [];

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
          const isSelected = (formData.subEvents || []).includes(subEvent.id);

          return (
            <motion.button
              key={subEvent.id}
              onClick={() => toggleSubEvent(subEvent.id)}
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
                    {subEvent.name}
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
              const event = currentSubEvents.find(e => e.id === eventId);
              return event ? (
                <div key={eventId} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-gray-700 font-medium">{event.name}</span>
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