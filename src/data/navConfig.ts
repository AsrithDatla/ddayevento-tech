export interface NavSection {
  id: string;
  label: string;
  items: string[];
}

export interface ServiceSection extends NavSection {
  href: string;
}

// Desktop Events Navigation (as shown in desktop dropdown)
export const desktopEventsNavSections: NavSection[] = [
  {
    id: 'traditional-events',
    label: 'Traditional Events',
    items: [
      'Cradle Ceremony',
      'Naming Ceremony',
      'Annaprasana',
      'Baby Shower',
      'Sreemantham',
      'Half Saree Function',
      'Dhoti Function',
      'Upanayanam Ceremony',
      'House Warming',
      'Gruhapravesham',
      '---', // Visual separator
      'View All Traditional Events'
    ]
  },
  {
    id: 'weddings-events',
    label: 'Weddings Events',
    items: [
      'Engagement',
      'Pellikoduku',
      'Pellikuthuru',
      'Haldi',
      'Mehendi',
      'Bachelors Party',
      'Sangeet',
      'Bharath',
      'Wedding Day',
      'Reception'
    ]
  },
  {
    id: 'birthdays',
    label: 'Birthdays',
    items: [
      'Baby Welcoming Event',
      'Cake smash',
      '1st Year Birthday Parties',
      'Kids Yearly Birthdays',
      'Adult Birthday Parties'
    ]
  },
  {
    id: 'corporate-events',
    label: 'Corporate Events',
    items: [
      'Corporate Party',
      'Team Day Outings',
      'Office Parties',
      'Team Lunch/Dinner',
      'Daily Catering Boxes'
    ]
  },
  {
    id: 'special-days',
    label: 'Special Days',
    items: [
      'Surprise Parties',
      'Kitty Parties',
      'House Parties',
      'Candle Light Dinners',
      'Valentines/Proposal',
      'Retirement Day',
      'Anniversaries'
    ]
  },
  {
    id: 'college-events',
    label: 'College Events',
    items: [
      'Annual Day',
      'Sports Day',
      'Cultural Day',
      'Freshers Day',
      'Farewell Day',
      'Convocation Day'
    ]
  }
];

// Desktop Services Navigation (as shown in desktop dropdown)
export const desktopServicesNavSections: ServiceSection[] = [
  {
    id: 'planning-management',
    label: 'Event Planning & Management',
    href: '/services/planning-management',
    items: [
      'Why Every Detail Counts',
      'The Reality',
      'Our Signature Approach',
      'Events That Speak',
      'Behind the Scenes',
      'Our Client Experience With D-DAY EVENTO',
      'Why Choose D DAY Evento',
    ],
  },
  {
    id: 'decoration-design',
    label: 'Decoration & Design',
    href: '/services/decoration-design',
    items: [],
  },
  {
    id: 'photo-video',
    label: 'Photography & Videography',
    href: '/services/photo-video',
    items: [],
  },
  {
    id: 'entertainment-activities',
    label: 'Entertainment & Activities',
    href: '/services/entertainment-activities',
    items: [],
  },
  {
    id: 'food-catering',
    label: 'Food & Catering',
    href: '/services/food-catering',
    items: [],
  },
  {
    id: 'makeup-styling',
    label: 'Makeup & Styling',
    href: '/services/makeup-styling',
    items: [],
  },
  {
    id: 'cakes-confectionery',
    label: 'Cakes & Confectionery',
    href: '/services/cakes-confectionery',
    items: [],
  },
  {
    id: 'return-gifts',
    label: 'Return Gifts & Souvenirs',
    href: '/services/return-gifts',
    items: [],
  },
  {
    id: 'rentals',
    label: 'Tent House Materials & Rentals',
    href: '/services/rentals',
    items: [],
  },
  {
    id: 'venue-booking',
    label: 'Venue Booking & Setup',
    href: '/services/venue-booking',
    items: [],
  },
  {
    id: 'specialized-services',
    label: 'Specialized Services',
    href: '/services/specialized-services',
    items: [],
  },
];

// Mobile Navigation - Using same structure as desktop
export const mobileEventsNavSections = desktopEventsNavSections;
export const mobileServicesNavSections = desktopServicesNavSections;

// Navigation utility functions
export const getEventSectionById = (id: string) => {
  return desktopEventsNavSections.find(section => section.id === id);
};

export const getServiceSectionById = (id: string) => {
  return desktopServicesNavSections.find(section => section.id === id);
};

// Generate URLs for navigation items
export const generateEventUrl = (sectionId: string, itemName: string) => {
  // Special case for the Traditional Events page link
  if (itemName === 'View All Traditional Events') {
    return '/events/traditional-events';
  }
  
  const slug = itemName.toLowerCase().replace(/\s+/g, '-');
  return `/events/${sectionId}/${slug}`;
};

export const generateServiceUrl = (sectionId: string, itemName:string) => {
  const section = desktopServicesNavSections.find(s => s.id === sectionId);
  if (!section) return '/';

  const slug = itemName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
    
  return `${section.href}#${slug}`;
};