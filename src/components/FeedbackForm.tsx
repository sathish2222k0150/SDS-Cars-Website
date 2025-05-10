import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { FeedbackFormData, FormStep } from '../data/feedback';
import ProgressBar from './ProgressBar';
import CustomerInfo from './CustomerInfo';
import VehicleInfo from './VehicleInfo';
import ServiceDetails from './ServiceDetails';
import ServiceRating from './ServiceRating';
import AdditionalComments from './AdditionalComments';
import SuccessScreen from './SuccessScreen';

const WEB3FORMS_ACCESS_KEY = 'd841ed12-5bce-47a9-b4b1-0c508e913d80'; // Replace with your actual key

const initialFormData: FeedbackFormData = {
  name: '',
  email: '',
  phone: '',
  vehicleMake: '',
  vehicleModel: '',
  serviceDate: '',
  serviceType: [],
  serviceQuality: 0,
  timelinessRating: 0,
  customerServiceRating: 0,
  valueForMoneyRating: 0,
  additionalComments: '',
  wouldRecommend: true
};

const steps = [
  { id: 'customer' as FormStep, label: 'Customer Info' },
  { id: 'vehicle' as FormStep, label: 'Vehicle Details' },
  { id: 'service' as FormStep, label: 'Service Type' },
  { id: 'rating' as FormStep, label: 'Rating' },
  { id: 'comments' as FormStep, label: 'Feedback' },
  { id: 'success' as FormStep, label: 'Complete' }
];

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState<FormStep>('customer');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleServiceChange = (services: string[]) => {
    setFormData(prev => ({ ...prev, serviceType: services }));
    
    if (errors.serviceType) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.serviceType;
        return newErrors;
      });
    }
  };

  const handleRatingChange = (field: keyof FeedbackFormData, value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleRecommendChange = (value: boolean) => {
    setFormData(prev => ({ ...prev, wouldRecommend: value }));
  };

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 'customer') {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    
    else if (currentStep === 'vehicle') {
      if (!formData.vehicleMake.trim()) newErrors.vehicleMake = 'Vehicle make is required';
      if (!formData.vehicleModel.trim()) newErrors.vehicleModel = 'Vehicle model is required';
      if (!formData.serviceDate) newErrors.serviceDate = 'Service date is required';
    }
    
    else if (currentStep === 'service') {
      if (formData.serviceType.length === 0) {
        newErrors.serviceType = 'Please select at least one service type';
      }
    }
    
    else if (currentStep === 'rating') {
      if (formData.serviceQuality === 0) newErrors.serviceQuality = 'Required';
      if (formData.timelinessRating === 0) newErrors.timelinessRating = 'Required';
      if (formData.customerServiceRating === 0) newErrors.customerServiceRating = 'Required';
      if (formData.valueForMoneyRating === 0) newErrors.valueForMoneyRating = 'Required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goToNextStep = () => {
    if (!validateStep()) return;
    
    setFadeOut(true);
    setTimeout(() => {
      const currentIndex = steps.findIndex(step => step.id === currentStep);
      if (currentIndex < steps.length - 1) {
        setCurrentStep(steps[currentIndex + 1].id);
      }
      setFadeOut(false);
    }, 300);
  };

  const goToPreviousStep = () => {
    setFadeOut(true);
    setTimeout(() => {
      const currentIndex = steps.findIndex(step => step.id === currentStep);
      if (currentIndex > 0) {
        setCurrentStep(steps[currentIndex - 1].id);
      }
      setFadeOut(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          vehicle_make: formData.vehicleMake,
          vehicle_model: formData.vehicleModel,
          service_date: formData.serviceDate,
          service_type: formData.serviceType.join(', '),
          service_quality: formData.serviceQuality,
          timeliness_rating: formData.timelinessRating,
          customer_service_rating: formData.customerServiceRating,
          value_for_money_rating: formData.valueForMoneyRating,
          would_recommend: formData.wouldRecommend ? 'Yes' : 'No',
          additional_comments: formData.additionalComments,
          subject: 'New Automotive Service Feedback',
          from_name: 'Automotive Feedback Form',
          replyto: formData.email,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        goToNextStep();
        console.log('Form submitted successfully:', result);
      } else {
        setSubmitError(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'customer':
        return (
          <CustomerInfo 
            formData={formData} 
            onChange={handleInputChange} 
            errors={errors} 
          />
        );
      case 'vehicle':
        return (
          <VehicleInfo 
            formData={formData} 
            onChange={handleInputChange} 
            errors={errors} 
          />
        );
      case 'service':
        return (
          <ServiceDetails 
            formData={formData} 
            onServiceChange={handleServiceChange} 
            errors={errors} 
          />
        );
      case 'rating':
        return (
          <ServiceRating 
            formData={formData} 
            onRatingChange={handleRatingChange}
            onRecommendChange={handleRecommendChange}
            errors={errors} 
          />
        );
      case 'comments':
        return (
          <AdditionalComments 
            formData={formData} 
            onChange={handleInputChange} 
          />
        );
      case 'success':
        return <SuccessScreen />;
      default:
        return null;
    }
  };

  const isFirstStep = currentStep === steps[0].id;
  const isLastStep = currentStep === steps[steps.length - 2].id;
  const isSuccess = currentStep === 'success';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-8 px-4 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">SDS AUTOMOTIVE FEEDBACK</h1>
        </div>
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="px-6 py-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h1 className="text-2xl font-bold">Service Feedback</h1>
        <p className="opacity-80">We value your opinion about our automotive service</p>
      </div>
      
      {!isSuccess && (
        <div className="px-6 pt-6">
          <ProgressBar currentStep={currentStep} steps={steps} />
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className={`px-6 pb-8 transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          {renderStepContent()}
        </div>
        
        {submitError && (
          <div className="px-6 py-2 text-red-500 text-sm">
            {submitError}
          </div>
        )}
        
        {!isSuccess && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between">
            <button
              type="button"
              onClick={goToPreviousStep}
              className={`px-4 py-2 flex items-center text-gray-600 rounded-lg hover:bg-gray-100 transition-colors ${
                isFirstStep ? 'invisible' : ''
              }`}
            >
              <ChevronLeft size={20} className="mr-1" />
              Back
            </button>
            
            {isLastStep ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                {!isSubmitting && <Send size={18} className="ml-2" />}
              </button>
            ) : (
              <button
                type="button"
                onClick={goToNextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors"
              >
                Next
                <ChevronRight size={20} className="ml-1" />
              </button>
            )}
          </div>
        )}
      </form>
    </div>
    <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 SDS AUTOMOTIVE Workshop. All rights reserved.</p>
          <p className="mt-1">Your feedback helps us improve our service quality.</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;