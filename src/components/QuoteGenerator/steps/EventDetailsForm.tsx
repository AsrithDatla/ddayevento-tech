import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { QuoteFormData } from '../../../types/quote';

interface EventDetailsFormProps {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  errors: Record<string, string>;
}

const EventDetailsForm: React.FC<EventDetailsFormProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  
  // Get maximum date (2 years from now)
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const handleInputChange = (field: keyof QuoteFormData, value: any) => {
    updateFormData({ [field]: value });
  };

  const guestCountOptions = [
    { value: 50, label: '25-50 guests', description: 'Intimate gathering' },
    { value: 100, label: '50-100 guests', description: 'Small celebration' },
    { value: 200, label: '100-200 guests', description: 'Medium event' },
    { value: 300, label: '200-300 guests', description: 'Large celebration' },
    { value: 500, label: '300-500 guests', description: 'Grand event' },
    { value: 1000, label: '500+ guests', description: 'Mega celebration' }
  ];

  const popularVenues = [
    'Banquet Hall',
    'Hotel',
    'Resort',
    'Farmhouse',
    'Community Hall',
    'Home/Residence',
    'Garden/Outdoor',
    'Convention Center',
    'Club House',
    'Other'
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Tell us about your event</h3>
        <p className="text-gray-600">Help us understand your event requirements better</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Event Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <Calendar className="inline w-4 h-4 mr-2" />
              Event Date *
            </label>
            <input
              type="date"
              value={formData.eventDate}
              onChange={(e) => handleInputChange('eventDate', e.target.value)}
              min={today}
              max={maxDateString}
              className={`
                w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all
                ${errors.eventDate ? 'border-red-300' : 'border-gray-200'}
              `}
            />
            {errors.eventDate && (
              <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Select your preferred event date
            </p>
          </motion.div>

          {/* Guest Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <Users className="inline w-4 h-4 mr-2" />
              Expected Guest Count *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guestCountOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleInputChange('guestCount', option.value)}
                  className={`
                    p-3 rounded-lg border-2 text-left transition-all duration-300
                    ${formData.guestCount === option.value
                      ? 'border-brand-primary bg-brand-primary/10 shadow-md'
                      : 'border-gray-200 hover:border-brand-primary/50'
                    }
                  `}
                >
                  <div className="font-medium text-gray-800">{option.label}</div>
                  <div className="text-xs text-gray-500">{option.description}</div>
                </button>
              ))}
            </div>
            {errors.guestCount && (
              <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>
            )}
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              <MapPin className="inline w-4 h-4 mr-2" />
              Event Location
            </label>
            <select
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
            >
              <option value="Hyderabad">Hyderabad</option>
              <option value="Secunderabad">Secunderabad</option>
              <option value="Gachibowli">Gachibowli</option>
              <option value="Hitech City">Hitech City</option>
              <option value="Madhapur">Madhapur</option>
              <option value="Kondapur">Kondapur</option>
              <option value="Jubilee Hills">Jubilee Hills</option>
              <option value="Banjara Hills">Banjara Hills</option>
              <option value="Other in Hyderabad">Other in Hyderabad</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              We primarily serve Hyderabad and surrounding areas
            </p>
          </motion.div>

          {/* Venue Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Venue Type *
            </label>
            <div className="space-y-2">
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
                placeholder="Enter venue name or type (e.g., Hotel Taj Krishna, My Home)"
                className={`
                  w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all
                  ${errors.venue ? 'border-red-300' : 'border-gray-200'}
                `}
              />
              {errors.venue && (
                <p className="text-red-500 text-sm">{errors.venue}</p>
              )}
              
              {/* Popular Venue Suggestions */}
              <div className="flex flex-wrap gap-2 mt-3">
                {popularVenues.map((venue) => (
                  <button
                    key={venue}
                    type="button"
                    onClick={() => handleInputChange('venue', venue)}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-brand-primary hover:text-white rounded-full transition-colors"
                  >
                    {venue}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Event Summary Card */}
      {formData.eventDate && formData.guestCount && formData.venue && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-xl p-6 border border-brand-primary/20"
        >
          <h4 className="font-bold text-brand-primary text-lg mb-4 flex items-center gap-2">
            <Clock size={20} />
            Event Summary
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-primary/20 rounded-lg">
                <Calendar size={16} className="text-brand-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Date</div>
                <div className="font-semibold">
                  {new Date(formData.eventDate).toLocaleDateString('en-IN', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-primary/20 rounded-lg">
                <Users size={16} className="text-brand-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Guests</div>
                <div className="font-semibold">{formData.guestCount} people</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-primary/20 rounded-lg">
                <MapPin size={16} className="text-brand-primary" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Venue</div>
                <div className="font-semibold">{formData.venue}</div>
                <div className="text-xs text-gray-500">{formData.location}</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EventDetailsForm;