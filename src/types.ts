export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  image:string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

export interface GalleryImageType {
  id: number;
  title: string;
  before: string;
  after: string;
  description: string;
}

export interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}