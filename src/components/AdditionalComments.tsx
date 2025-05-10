import React from 'react';
import { MessageSquare } from 'lucide-react';
import { FeedbackFormData } from '../data/feedback';

interface AdditionalCommentsProps {
  formData: FeedbackFormData;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AdditionalComments: React.FC<AdditionalCommentsProps> = ({ 
  formData, 
  onChange 
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-gray-800">Additional Comments</h2>
      <p className="text-gray-500 text-sm">Please share any additional feedback or suggestions.</p>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageSquare size={18} className="text-gray-400" />
          </div>
          <textarea
            id="additionalComments"
            name="additionalComments"
            value={formData.additionalComments}
            onChange={onChange}
            rows={6}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Share your experience and suggestions for improvement..."
          />
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Your feedback helps us improve our service. Thank you for taking the time to share your thoughts.
        </p>
      </div>
    </div>
  );
};

export default AdditionalComments;