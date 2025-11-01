import React from 'react';
import { QuoteFormData } from '../../../types/quote';

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
  // This component is not used in the current implementation
  // The service selection is handled directly in the main modal
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Service Selection</h3>
        <p className="text-gray-600">This step is handled in the main modal</p>
      </div>
    </div>
  );
};

export default ServiceSelection;