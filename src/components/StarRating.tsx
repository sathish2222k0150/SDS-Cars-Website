import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  onChange: (rating: number) => void;
  label: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  size = 28, 
  onChange,
  label
}) => {
  const [hoverRating, setHoverRating] = React.useState(0);
  
  const getStarFill = (position: number): string => {
    const activeRating = hoverRating > 0 ? hoverRating : rating;
    
    if (position <= activeRating) {
      return "text-yellow-400 fill-yellow-400";
    }
    return "text-gray-300";
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>
      <div className="flex items-center">
        <div className="flex gap-1">
          {[...Array(maxRating)].map((_, index) => {
            const position = index + 1;
            return (
              <button
                key={position}
                type="button"
                onClick={() => onChange(position)}
                onMouseEnter={() => setHoverRating(position)}
                onMouseLeave={() => setHoverRating(0)}
                className={`transition-all duration-150 ${getStarFill(position)}`}
                aria-label={`${position} star`}
              >
                <Star size={size} strokeWidth={1.5} />
              </button>
            );
          })}
        </div>
        <span className="ml-3 text-sm font-medium text-gray-700">
          {rating > 0 ? rating : ''}
        </span>
      </div>
    </div>
  );
};

export default StarRating;