import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { FeedbackFormData } from '../data/feedback';
import StarRating from './StarRating';

interface ServiceRatingProps {
  formData: FeedbackFormData;
  onRatingChange: (field: keyof FeedbackFormData, value: number) => void;
  onRecommendChange: (value: boolean) => void;
  errors: Record<string, string>;
}

const ServiceRating: React.FC<ServiceRatingProps> = ({ 
  formData, 
  onRatingChange,
  onRecommendChange,
  errors 
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium text-gray-800">Your Rating</h2>
      <p className="text-gray-500 text-sm">Please rate your experience with our service.</p>
      
      <div className="mt-6 space-y-4">
        <StarRating 
          label="Service Quality" 
          rating={formData.serviceQuality} 
          onChange={(rating) => onRatingChange('serviceQuality', rating)} 
        />
        
        <StarRating 
          label="Timeliness" 
          rating={formData.timelinessRating} 
          onChange={(rating) => onRatingChange('timelinessRating', rating)} 
        />
        
        <StarRating 
          label="Customer Service" 
          rating={formData.customerServiceRating} 
          onChange={(rating) => onRatingChange('customerServiceRating', rating)} 
        />
        
        <StarRating 
          label="Value for Money" 
          rating={formData.valueForMoneyRating} 
          onChange={(rating) => onRatingChange('valueForMoneyRating', rating)} 
        />
        
        {(errors.serviceQuality || errors.timelinessRating || 
          errors.customerServiceRating || errors.valueForMoneyRating) && (
          <p className="text-sm text-red-500">Please provide ratings for all categories</p>
        )}
      </div>
      
      <div className="mt-8">
        <p className="text-gray-700 text-sm font-medium mb-3">Would you recommend our service to others?</p>
        
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => onRecommendChange(true)}
            className={`flex items-center justify-center px-6 py-2 rounded-xl transition-all ${
              formData.wouldRecommend 
                ? 'bg-green-100 text-green-700 border-2 border-green-500' 
                : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-gray-300'
            }`}
          >
            <ThumbsUp 
              size={18} 
              className={formData.wouldRecommend ? 'text-green-600 mr-2' : 'text-gray-500 mr-2'} 
            />
            Yes
          </button>
          
          <button
            type="button"
            onClick={() => onRecommendChange(false)}
            className={`flex items-center justify-center px-6 py-2 rounded-xl transition-all ${
              formData.wouldRecommend === false 
                ? 'bg-red-100 text-red-700 border-2 border-red-500'
                : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-gray-300'
            }`}
          >
            <ThumbsUp 
              size={18} 
              className={formData.wouldRecommend === false ? 'text-red-600 mr-2 rotate-180' : 'text-gray-500 mr-2 rotate-180'} 
            />
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRating;