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

export interface BudgetRange {
  min: number;
  max: number;
}

export interface SelectedService {
  id: string;
  name: string;
  category: 'core' | 'extra';
  estimatedPrice?: number;
  isSelected: boolean;
}

export interface QuoteFormData {
  // Step 1: Event Category
  eventCategory: string;
  
  // Step 2: Sub Events
  eventType: string;
  subEvents: string[];
  
  // Step 3: Event Details
  eventDate: string;
  guestCount: number;
  venue: string;
  location: string;
  
  // Step 4: Services
  selectedServices: SelectedService[];
  
  // Step 5: Contact
  contactInfo: ContactInfo;
  specialRequests: string;
  
  // Calculated
  estimatedTotal: number;
}

export interface QuoteRequest extends QuoteFormData {
  id?: string;
  submittedAt: string;
  status: 'new' | 'contacted' | 'quoted' | 'converted';
  source: string;
  leadScore?: number;
}

// Event data interfaces (from comprehensive events data)
export interface ServiceItem {
  id: string;
  name: string;
  category: 'core' | 'extra';
  description?: string;
  estimatedPrice?: {
    min: number;
    max: number;
  };
}

export interface EventService {
  eventId: string;
  eventName: string;
  coreServices: ServiceItem[];
  extraServices: ServiceItem[];
  description: string;
  estimatedBudget: {
    min: number;
    max: number;
  };
}

export interface EventCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  events: EventService[];
}