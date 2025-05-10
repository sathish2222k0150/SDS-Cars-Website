import React from 'react';
import { Wrench } from 'lucide-react';
import { FeedbackFormData } from '../data/feedback';
import ServiceOptions from './ServiceOptions';

interface ServiceDetailsProps {
  formData: FeedbackFormData;
  onServiceChange: (services: string[]) => void;
  errors: Record<string, string>;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ 
  formData, 
  onServiceChange,
  errors 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-gray-800">Service Details</h2>
      <p className="text-gray-500 text-sm">Select the service(s) you received.</p>
      
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <Wrench size={20} className="text-blue-500 mr-2" />
          <label className="block text-gray-700 text-sm font-medium">
            Type of Service
          </label>
        </div>
        
        <ServiceOptions 
          selectedServices={formData.serviceType} 
          onChange={onServiceChange} 
        />
        
        {errors.serviceType && (
          <p className="mt-2 text-sm text-red-500">{errors.serviceType}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;