import React from 'react';
import { FormStep } from '../data/feedback';

interface ProgressBarProps {
  currentStep: FormStep;
  steps: Array<{
    id: FormStep;
    label: string;
  }>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {
  const currentIndex = steps.findIndex(step => step.id === currentStep);
  
  const getStepStatus = (index: number) => {
    if (index < currentIndex) return 'completed';
    if (index === currentIndex) return 'current';
    return 'upcoming';
  };
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-4">
        {steps.filter(step => step.id !== 'success').map((step, index) => {
          const status = getStepStatus(index);
          return (
            <div key={step.id} className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  status === 'completed' ? 'bg-blue-500 text-white' : 
                  status === 'current' ? 'bg-white border-2 border-blue-500 text-blue-500' : 
                  'bg-gray-100 text-gray-400'
                }`}
              >
                {index + 1}
              </div>
              <span className="text-xs mt-2 hidden sm:block">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Progress bar */}
      <div className="relative pt-1">
        <div className="flex h-2 overflow-hidden bg-gray-100 rounded">
          <div 
            className="transition-all duration-500 ease-out bg-blue-500"
            style={{ 
              width: `${currentIndex === 0 ? 0 : (currentIndex / (steps.length - 2)) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;