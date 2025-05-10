import React from 'react';
import { User, Mail, Phone } from 'lucide-react';
import { FeedbackFormData } from '../data/feedback';

interface CustomerInfoProps {
  formData: FeedbackFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ formData, onChange, errors }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-gray-800">Your Information</h2>
      <p className="text-gray-500 text-sm">Please provide your contact details.</p>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            placeholder="Full Name"
          />
        </div>
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail size={18} className="text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            placeholder="Email Address"
          />
        </div>
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone size={18} className="text-gray-400" />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            placeholder="Phone Number"
          />
        </div>
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default CustomerInfo;