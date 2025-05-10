import React, { useEffect } from 'react';
import { CheckCircle, Car, Star } from 'lucide-react';

const SuccessScreen: React.FC = () => {
  const [animate, setAnimate] = React.useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 text-center">
      <div className={`transition-all duration-700 transform ${
        animate ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
      }`}>
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 mx-auto">
          <CheckCircle size={40} className="text-green-600" />
        </div>
      </div>
      
      <h2 className={`text-2xl font-bold text-gray-800 mb-2 transition-all duration-500 delay-300 transform ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        Thank You For Your Feedback!
      </h2>
      
      <p className={`text-gray-600 mb-8 max-w-md transition-all duration-500 delay-500 transform ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        Your feedback is invaluable in helping us improve our service. We truly appreciate you taking the time to share your experience with us.
      </p>
      
      <div className={`flex items-center justify-center gap-6 transition-all duration-500 delay-700 transform ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="flex flex-col items-center p-4">
          <Car size={28} className="text-blue-500 mb-2" />
          <span className="text-sm text-gray-600">Better Service</span>
        </div>
        
        <div className="flex flex-col items-center p-4">
          <Star size={28} className="text-yellow-500 mb-2" />
          <span className="text-sm text-gray-600">Continuous Improvement</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;