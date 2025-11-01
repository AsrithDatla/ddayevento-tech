export interface QuoteStep {
  id: number;
  title: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
}

export interface SelectedService {
  id: string;
  name: string;
  category: 'core' | 'extra';
  isSelected: boolean;
  eventName?: string;
  description?: string;
}

export interface QuoteFormData {
  eventCategory: string;
  eventType: string;
  subEvents: string[];
  eventCelebration: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  venueType: string;
  location: string;
  guestCount: number;
  servicesLookingFor: string[];
  estimatedBudget: string;
  specialRequests: string;
  selectedServices: SelectedService[];
  contactInfo: ContactInfo;
}

export interface EventCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  subEvents: SubEvent[];
}

export interface SubEvent {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  isPopular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  services: Service[];
}

export interface EventSpecificService {
  eventId: string;
  eventName: string;
  availableServices: Service[];
}