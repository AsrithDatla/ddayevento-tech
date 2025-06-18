export interface Event {
  id: string;
  name: string;
  subEvents?: SubEvent[];
}

export interface SubEvent {
  id: string;
  name: string;
  services: ServiceCategory[];
}

export interface ServiceCategory {
  category: string;
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  price?: number;
}

export interface QuoteFormData {
  mainEvent: string;
  subEvents: string[]; // Changed to array
  services: string[];
  dateTime: string;
  venue: string;
  name: string;
  phone: string;
  email: string;
  termsAccepted: boolean;
}

export interface TestimonialData {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  event: string;
}

// New interfaces for services data
export interface ServiceCategoryData {
  id: string;
  name: string;
  subServices?: SubServiceData[];
}

export interface SubServiceData {
  id: string;
  name: string;
}