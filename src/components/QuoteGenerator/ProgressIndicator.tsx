import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { QuoteStep } from '../../types/quote';

interface ProgressIndicatorProps {
  steps: QuoteStep[];
  currentStep: number;
  onStepClick: (stepNumber: number) => void;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
  onStepClick
}) => {
  return (
    <div className="w-full">
      {/* Desktop Progress Bar */}
      <div className="hidden md:flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const isClickable = step.id <= currentStep;

          return (
            <React.Fragment key={step.id}>
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <motion.button
                  onClick={() => isClickable && onStepClick(step.id)}
                  disabled={!isClickable}
                  className={`
                    relative w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                    transition-all duration-300 ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'}
                    ${isCompleted 
                      ? 'bg-green-500 text-white' 
                      : isCurrent 
                        ? 'bg-white text-brand-primary border-2 border-white shadow-lg' 
                        : 'bg-white/30 text-white/70'
                    }
                  `}
                  whileHover={isClickable ? { scale: 1.05 } : {}}
                  whileTap={isClickable ? { scale: 0.95 } : {}}
                >
                  {isCompleted ? (
                    <Check size={16} />
                  ) : (
                    step.id
                  )}
                  
                  {isCurrent && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-brand-gold"
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>

                {/* Step Label */}
                <div className="mt-2 text-center">
                  <div className={`text-xs font-medium ${isCurrent ? 'text-white' : 'text-white/80'}`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-white/60 mt-1 max-w-20">
                    {step.description}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div className="relative h-0.5 bg-white/30">
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: step.id < currentStep ? 1 : 0 
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile Progress Bar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white font-semibold">
            Step {currentStep} of {steps.length}
          </div>
          <div className="text-white/80 text-sm">
            {steps.find(s => s.id === currentStep)?.title}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/30 rounded-full h-2">
          <motion.div
            className="bg-white h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Step Dots */}
        <div className="flex justify-between mt-3">
          {steps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <motion.div
                key={step.id}
                className={`
                  w-2 h-2 rounded-full transition-colors duration-300
                  ${isCompleted 
                    ? 'bg-green-400' 
                    : isCurrent 
                      ? 'bg-white' 
                      : 'bg-white/40'
                  }
                `}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: step.id * 0.1 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;