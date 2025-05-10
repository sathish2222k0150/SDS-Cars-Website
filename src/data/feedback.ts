export interface ServiceOption {
  id: string;
  label: string;
}

export interface FeedbackFormData {
  name: string;
  email: string;
  phone: string;
  vehicleMake: string;
  vehicleModel: string;
  serviceDate: string;
  serviceType: string[];
  serviceQuality: number;
  timelinessRating: number;
  customerServiceRating: number;
  valueForMoneyRating: number;
  additionalComments: string;
  wouldRecommend: boolean;
}

export type FormStep = 'customer' | 'vehicle' | 'service' | 'rating' | 'comments' | 'success';