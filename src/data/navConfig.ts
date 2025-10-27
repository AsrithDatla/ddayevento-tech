export interface NavSection {
  id: string;
  label: string;
  items: NavItem[];
  icon?: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href?: string;
  description?: string;
  featured?: boolean;
}

export interface ServiceSection extends NavSection {
  href: string;
}

// Desktop Events Navigation (Apple-inspired hierarchical structure)
export const desktopEventsNavSections: NavSection[] = [
  {
    id: 'traditional-events',
    label: 'Traditional Events',
    icon: '🏠',
    description: 'Sacred ceremonies and cultural celebrations',
    items: [
      { name: 'Griha Pravesham / House Warming Ceremony', href: '/events/traditional/griha-pravesham', description: 'Blessing your new home', featured: true },
      { name: 'Half Saree Ceremony', href: '/events/traditional/half-saree', description: 'Celebrating womanhood' },
      { name: 'Dhoti Ceremony', href: '/events/traditional/dhoti-ceremony', description: 'Boys stepping into tradition' },
      { name: 'Cradle Ceremony/ Annaprasana/ Naming Ceremony', href: '/events/traditional/cradle-ceremony', description: 'First milestones', featured: true },
      { name: 'Baby Shower–Sreemantham', href: '/events/traditional/baby-shower', description: 'Celebrating new life' }
    ]
  },
  {
    id: 'weddings-events',
    label: 'Wedding Events',
    icon: '💍',
    description: 'Complete wedding celebration journey',
    items: [
      { name: 'Engagement Ceremony', href: '/events/wedding/engagement', description: 'The beginning of forever', featured: true },
      { name: 'Bride & Groom Events', href: '/events/wedding/bride-groom', description: 'Individual pre-wedding celebrations' },
      { name: 'Haldi & Mehendi', href: '/events/wedding/haldi-mehendi', description: 'Traditional ceremonies with vibrant colors', featured: true },
      { name: 'Sangeet / Cocktail / Bachelor\'s Party', href: '/events/wedding/sangeet-cocktail', description: 'Musical celebrations and parties' },
      { name: 'Wedding Ceremony', href: '/events/wedding/ceremony', description: 'The sacred union celebration', featured: true },
      { name: 'Reception / Bharath', href: '/events/wedding/reception', description: 'Grand celebration with family and friends' }
    ]
  },
  {
    id: 'birthdays',
    label: 'Birthday Celebrations',
    icon: '🎂',
    description: 'Making every year special',
    items: [
      { name: 'Baby Welcoming Event', href: '/events/birthdays', description: 'First hello to the world' },
      { name: 'Cake Smash', href: '/events/birthdays', description: 'Messy first birthday fun', featured: true },
      { name: '1st Year Birthday Parties', href: '/events/birthdays', description: 'Milestone celebration' },
      { name: 'Kids Yearly Birthdays', href: '/events/birthdays', description: 'Themed party magic' },
      { name: 'Adult Birthday Parties', href: '/events/birthdays', description: 'Sophisticated celebrations' }
    ]
  },
  {
    id: 'corporate-events',
    label: 'Corporate Events',
    icon: '🏢',
    description: 'Professional gatherings and team building',
    items: [
      { name: 'Corporate Party', href: '/events/corporate-events', description: 'Company celebrations' },
      { name: 'Team Day Outings', href: '/events/corporate-events', description: 'Building stronger teams', featured: true },
      { name: 'Office Parties', href: '/events/corporate-events', description: 'Workplace celebrations' },
      { name: 'Team Lunch/Dinner', href: '/events/corporate-events', description: 'Casual team bonding' },
      { name: 'Daily Catering Boxes', href: '/events/corporate-events', description: 'Regular meal solutions' },
      { name: 'Conferences & Seminars', href: '/events/corporate-events', description: 'Professional conferences and seminars' },
      { name: 'Product Launches', href: '/events/corporate-events', description: 'Strategic product launch events' },
      { name: 'Annual Day Celebrations', href: '/events/corporate-events', description: 'Company annual celebrations', featured: true },
      { name: 'Award Ceremonies', href: '/events/corporate-events', description: 'Recognition and award events' },
      { name: 'Team Building Activities', href: '/events/corporate-events', description: 'Engaging team building programs' },
      { name: 'Networking Events', href: '/events/corporate-events', description: 'Business networking opportunities' },
      { name: 'Gala Dinners', href: '/events/corporate-events', description: 'Elegant corporate gala events' }
    ]
  },
  {
    id: 'special-days',
    label: 'Special Occasions',
    icon: '✨',
    description: 'Unique moments deserve unique celebrations',
    items: [
      { name: 'Surprise Parties', description: 'Unforgettable surprises', featured: true },
      { name: 'Kitty Parties', description: 'Ladies social gatherings' },
      { name: 'House Parties', description: 'Intimate home celebrations' },
      { name: 'Candle Light Dinners', description: 'Romantic evenings' },
      { name: 'Valentines/Proposal', description: 'Love celebrations' },
      { name: 'Retirement Day', description: 'Honoring service' },
      { name: 'Anniversaries', description: 'Celebrating milestones' }
    ]
  },
  {
    id: 'college-events',
    label: 'College Events',
    icon: '🎓',
    description: 'Academic celebrations and milestones',
    items: [
      { name: 'Annual Day', description: 'Yearly celebrations' },
      { name: 'Sports Day', description: 'Athletic competitions' },
      { name: 'Cultural Day', description: 'Arts and culture showcase', featured: true },
      { name: 'Freshers Day', description: 'Welcome new students' },
      { name: 'Farewell Day', description: 'Goodbye celebrations' },
      { name: 'Convocation Day', description: 'Graduation ceremony' }
    ]
  }
];

// Desktop Services Navigation (proper routes for individual service pages)
export const desktopServicesNavSections: ServiceSection[] = [
  {
    id: 'planning-management',
    label: 'Event Planning & Management',
    href: '/services/planning-management',
    items: [],
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
    href: '/services/photography-videography',
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
    label: 'Tent House & Rentals',
    href: '/services/tent-house-rentals',
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
  // Handle special cases for main event categories
  if (sectionId === 'weddings-events') {
    return '/events/wedding-events';
  }
  if (sectionId === 'traditional-events') {
    return '/events/traditional-events';
  }
  if (sectionId === 'birthdays') {
    return '/events/birthdays';
  }
  if (sectionId === 'corporate-events') {
    return '/events/corporate-events';
  }
  if (sectionId === 'special-days') {
    return '/events/special-days';
  }
  if (sectionId === 'college-events') {
    return '/events/college-events';
  }
  
  const slug = itemName.toLowerCase().replace(/\s+/g, '-');
  return `/events/${sectionId}/${slug}`;
};

export const generateServiceUrl = (sectionId: string, itemName: string) => {
  const section = desktopServicesNavSections.find(s => s.id === sectionId);
  if (!section) return '/services';

  // For main service categories, return the main service page
  return section.href;
};