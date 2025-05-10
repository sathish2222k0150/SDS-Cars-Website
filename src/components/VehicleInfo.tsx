import React from 'react';
import { Car, CalendarDays } from 'lucide-react';
import { FeedbackFormData } from '../data/feedback';

interface VehicleInfoProps {
  formData: FeedbackFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
}

const VehicleInfo: React.FC<VehicleInfoProps> = ({ formData, onChange, errors }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-gray-800">Vehicle Information</h2>
      <p className="text-gray-500 text-sm">Tell us about your vehicle and service date.</p>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Car size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            id="vehicleMake"
            name="vehicleMake"
            value={formData.vehicleMake}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
              errors.vehicleMake ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            placeholder="Vehicle Make (e.g., Toyota, BMW)"
          />
        </div>
        {errors.vehicleMake && <p className="mt-1 text-sm text-red-500">{errors.vehicleMake}</p>}
      </div>

      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Car size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
              errors.vehicleModel ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            placeholder="Vehicle Model (e.g., Camry, X5)"
          />
        </div>
        {errors.vehicleModel && <p className="mt-1 text-sm text-red-500">{errors.vehicleModel}</p>}
      </div>

      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <CalendarDays size={18} className="text-gray-400" />
          </div>
          <input
            type="date"
            id="serviceDate"
            name="serviceDate"
            value={formData.serviceDate}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
              errors.serviceDate ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
        </div>
        {errors.serviceDate && <p className="mt-1 text-sm text-red-500">{errors.serviceDate}</p>}
      </div>
    </div>
  );
};

export default VehicleInfo;