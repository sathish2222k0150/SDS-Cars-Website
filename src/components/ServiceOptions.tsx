import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { ServiceOption } from '../data/feedback';

const serviceOptions: ServiceOption[] = [
  { id: 'oil-change', label: 'Oil Change' },
  { id: 'tire-replacement', label: 'Tire Replacement/Rotation' },
  { id: 'brake-service', label: 'Brake Service' },
  { id: 'engine-repair', label: 'Engine Repair' },
  { id: 'transmission', label: 'Transmission Service' },
  { id: 'ac-service', label: 'A/C Service' },
  { id: 'electrical', label: 'Electrical System' },
  { id: 'inspection', label: 'Regular Inspection' },
  { id: 'diagnostics', label: 'Diagnostics' },
  { id: 'body-work', label: 'Body Work' },
];

interface ServiceOptionsProps {
  selectedServices: string[];
  onChange: (services: string[]) => void;
}

const ServiceOptions: React.FC<ServiceOptionsProps> = ({ selectedServices, onChange }) => {
  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      onChange(selectedServices.filter(serviceId => serviceId !== id));
    } else {
      onChange([...selectedServices, id]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {serviceOptions.map((option) => (
        <div 
          key={option.id}
          onClick={() => toggleService(option.id)}
          className={`flex items-center p-3 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
            selectedServices.includes(option.id) 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          {selectedServices.includes(option.id) ? (
            <CheckCircle size={20} className="text-blue-500 mr-2 flex-shrink-0" />
          ) : (
            <Circle size={20} className="text-gray-400 mr-2 flex-shrink-0" />
          )}
          <span className="text-sm">{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ServiceOptions;