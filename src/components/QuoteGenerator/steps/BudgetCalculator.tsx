import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, TrendingUp, Calculator, AlertCircle } from 'lucide-react';
import { QuoteFormData } from '../../../types/quote';

interface BudgetCalculatorProps {
  formData: QuoteFormData;
  updateFormData: (updates: Partial<QuoteFormData>) => void;
  errors: Record<string, string>;
}

const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  const [budgetRange, setBudgetRange] = useState(formData.budgetRange);
  const [selectedBudgetTier, setSelectedBudgetTier] = useState<string>('');

  // Predefined budget tiers
  const budgetTiers = [
    {
      id: 'basic',
      name: 'Basic Package',
      range: { min: 25000, max: 75000 },
      description: 'Essential services for intimate celebrations',
      features: ['Core decoration', 'Basic photography', 'Simple catering', 'Standard setup'],
      color: 'from-green-500 to-green-400'
    },
    {
      id: 'standard',
      name: 'Standard Package',
      range: { min: 75000, max: 150000 },
      description: 'Comprehensive services for medium-scale events',
      features: ['Enhanced decoration', 'Professional photography', 'Multi-cuisine catering', 'LED lighting', 'Entertainment'],
      color: 'from-blue-500 to-blue-400'
    },
    {
      id: 'premium',
      name: 'Premium Package',
      range: { min: 150000, max: 300000 },
      description: 'Luxury services for grand celebrations',
      features: ['Designer decoration', 'Candid + Traditional photography', 'Premium catering', 'Advanced lighting', 'Live entertainment', 'Makeup artist'],
      color: 'from-purple-500 to-purple-400'
    },
    {
      id: 'luxury',
      name: 'Luxury Package',
      range: { min: 300000, max: 500000 },
      description: 'Ultra-premium services for extraordinary events',
      features: ['Bespoke decoration', 'Cinematic photography', 'Gourmet catering', 'Designer lighting', 'Celebrity entertainment', 'Full styling team', 'Luxury transport'],
      color: 'from-gold-500 to-yellow-400'
    }
  ];

  // Update form data when budget changes
  useEffect(() => {
    updateFormData({ budgetRange });
  }, [budgetRange, updateFormData]);

  const handleBudgetTierSelect = (tier: typeof budgetTiers[0]) => {
    setSelectedBudgetTier(tier.id);
    setBudgetRange(tier.range);
  };

  const handleCustomBudgetChange = (type: 'min' | 'max', value: number) => {
    setBudgetRange(prev => ({
      ...prev,
      [type]: value
    }));
    setSelectedBudgetTier('custom');
  };

  // Calculate budget recommendations based on guest count and services
  const calculateRecommendedBudget = () => {
    const basePerGuest = 1500; // Base cost per guest
    const serviceCost = formData.estimatedTotal || 0;
    const guestBasedCost = formData.guestCount * basePerGuest;
    
    return {
      minimum: Math.max(serviceCost, guestBasedCost * 0.8),
      recommended: serviceCost + guestBasedCost,
      premium: (serviceCost + guestBasedCost) * 1.5
    };
  };

  const recommendations = calculateRecommendedBudget();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Set Your Budget Range</h3>
        <p className="text-gray-600">Help us understand your budget to provide the best recommendations</p>
      </div>

      {/* Budget Recommendations */}
      <div className="bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-xl p-6 border border-brand-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="text-brand-primary" size={20} />
          <h4 className="font-bold text-brand-primary">Budget Recommendations for Your Event</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">
              ₹{Math.round(recommendations.minimum).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Minimum Budget</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-brand-primary">
              ₹{Math.round(recommendations.recommended).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Recommended Budget</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-purple-600">
              ₹{Math.round(recommendations.premium).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Premium Budget</div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Based on {formData.guestCount} guests and selected services
        </p>
      </div>

      {/* Budget Tier Selection */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Choose a Budget Package</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {budgetTiers.map((tier) => (
            <motion.button
              key={tier.id}
              onClick={() => handleBudgetTierSelect(tier)}
              className={`
                p-6 rounded-xl border-2 text-left transition-all duration-300
                ${selectedBudgetTier === tier.id
                  ? 'border-brand-primary bg-brand-primary/10 shadow-lg'
                  : 'border-gray-200 hover:border-brand-primary/50 hover:shadow-md'
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className={`font-bold text-lg ${selectedBudgetTier === tier.id ? 'text-brand-primary' : 'text-gray-800'}`}>
                    {tier.name}
                  </h5>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${tier.color} text-white`}>
                    ₹{tier.range.min.toLocaleString()} - ₹{tier.range.max.toLocaleString()}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{tier.description}</p>
                <div className="flex flex-wrap gap-1">
                  {tier.features.slice(0, 4).map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                      {feature}
                    </span>
                  ))}
                  {tier.features.length > 4 && (
                    <span className="text-xs text-gray-500">+{tier.features.length - 4} more</span>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Custom Budget Range */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Or Set Custom Budget Range</h4>
        <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Budget
              </label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  value={budgetRange.min}
                  onChange={(e) => handleCustomBudgetChange('min', parseInt(e.target.value) || 0)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="25,000"
                  min="10000"
                  step="5000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Budget
              </label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="number"
                  value={budgetRange.max}
                  onChange={(e) => handleCustomBudgetChange('max', parseInt(e.target.value) || 0)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="200,000"
                  min={budgetRange.min}
                  step="5000"
                />
              </div>
            </div>
          </div>

          {/* Budget Range Slider */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>₹{budgetRange.min.toLocaleString()}</span>
              <span>₹{budgetRange.max.toLocaleString()}</span>
            </div>
            <div className="relative">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-gradient-to-r from-brand-primary to-brand-gold rounded-full"
                  style={{ 
                    width: `${((budgetRange.max - budgetRange.min) / 500000) * 100}%`,
                    marginLeft: `${(budgetRange.min / 500000) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Breakdown */}
      {formData.selectedServices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-brand-secondary" size={20} />
            <h4 className="font-semibold text-gray-700">Budget Breakdown</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Selected Services</span>
              <span className="font-semibold">₹{formData.estimatedTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Venue & Setup (estimated)</span>
              <span className="font-semibold">₹{(formData.guestCount * 500).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Miscellaneous (10%)</span>
              <span className="font-semibold">₹{Math.round((formData.estimatedTotal + formData.guestCount * 500) * 0.1).toLocaleString()}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold text-lg">
              <span>Estimated Total</span>
              <span className="text-brand-primary">
                ₹{Math.round((formData.estimatedTotal + formData.guestCount * 500) * 1.1).toLocaleString()}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Budget Tips */}
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-blue-600 mt-0.5" size={16} />
          <div>
            <h5 className="font-semibold text-blue-800 text-sm mb-1">Budget Tips</h5>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Consider seasonal pricing - off-season events can be 15-20% cheaper</li>
              <li>• Weekday events typically cost less than weekend celebrations</li>
              <li>• Book 2-3 months in advance for better rates and availability</li>
              <li>• We offer flexible payment plans to suit your budget</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {errors.budget && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700 text-sm">{errors.budget}</p>
        </div>
      )}
    </div>
  );
};

export default BudgetCalculator;