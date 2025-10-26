import React from 'react';
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
  const guestCountOptions = [
    { value: '50', label: 'Up to 50 guests' },
    { value: '100', label: '50-100 guests' },
    { value: '200', label: '100-200 guests' },
    { value: '300', label: '200-300 guests' },
    { value: '500', label: '300-500 guests' },
    { value: '1000', label: '500+ guests' }
  ];

  const venueTypeOptions = [
    { value: 'indoor', label: 'Indoor Venue' },
    { value: 'outdoor', label: 'Outdoor Venue' },
    { value: 'both', label: 'Both Indoor & Outdoor' },
    { value: 'home', label: 'Home/Residence' },
    { value: 'hotel', label: 'Hotel/Banquet Hall' },
    { value: 'destination', label: 'Destination Venue' }
  ];

  const budgetOptions = [
    { value: 'under-1l', label: 'Under ₹1 Lakh' },
    { value: '1l-3l', label: '₹1-3 Lakhs' },
    { value: '3l-5l', label: '₹3-5 Lakhs' },
    { value: '5l-10l', label: '₹5-10 Lakhs' },
    { value: '10l-20l', label: '₹10-20 Lakhs' },
    { value: 'above-20l', label: 'Above ₹20 Lakhs' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Tell us about your event</h3>
        <p className="text-gray-600">Help us understand your requirements better</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Event Celebration */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            What are you celebrating? *
          </label>
          <input
            type="text"
            value={formData.eventCelebration || ''}
            onChange={(e) => updateFormData({ eventCelebration: e.target.value })}
            placeholder="e.g., My daughter's wedding, Company anniversary, Birthday celebration"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all ${
              errors.eventCelebration ? 'border-red-300' : 'border-gray-200'
            }`}
          />
          {errors.eventCelebration && (
            <p className="text-red-500 text-sm mt-1">{errors.eventCelebration}</p>
          )}
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Event Date *
          </label>
          <input
            type="date"
            value={formData.eventDate}
            onChange={(e) => updateFormData({ eventDate: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all ${
              errors.eventDate ? 'border-red-300' : 'border-gray-200'
            }`}
          />
          {errors.eventDate && (
            <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
          )}
        </div>

        {/* Event Time */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Time
          </label>
          <select
            value={formData.eventTime}
            onChange={(e) => updateFormData({ eventTime: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
          >
            <option value="">Select time</option>
            <option value="morning">Morning (6 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
            <option value="evening">Evening (6 PM - 10 PM)</option>
            <option value="night">Night (10 PM onwards)</option>
            <option value="full-day">Full Day Event</option>
          </select>
        </div>

        {/* Guest Count */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Expected Guest Count *
          </label>
          <select
            value={formData.guestCount.toString()}
            onChange={(e) => updateFormData({ guestCount: parseInt(e.target.value) || 0 })}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all ${
              errors.guestCount ? 'border-red-300' : 'border-gray-200'
            }`}
          >
            <option value="0">Select guest count</option>
            {guestCountOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors.guestCount && (
            <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>
          )}
        </div>

        {/* Venue Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Venue Preference
          </label>
          <select
            value={formData.venueType}
            onChange={(e) => updateFormData({ venueType: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
          >
            <option value="">Select venue type</option>
            {venueTypeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Event Location
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => updateFormData({ location: e.target.value })}
            placeholder="City, Area"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Estimated Budget
          </label>
          <select
            value={formData.estimatedBudget}
            onChange={(e) => updateFormData({ estimatedBudget: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
          >
            <option value="">Select budget range</option>
            {budgetOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Special Requests */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Special Requests or Requirements
          </label>
          <textarea
            value={formData.specialRequests}
            onChange={(e) => updateFormData({ specialRequests: e.target.value })}
            placeholder="Any specific requirements, themes, dietary restrictions, accessibility needs, etc."
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsForm;