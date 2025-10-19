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
      { name: 'House Warming/ Griha Pravesham', href: '/events/traditional/house-warming', description: 'Blessing your new home' },
      { name: 'Baby Shower/ Sreemantham', href: '/events/traditional/baby-shower', description: 'Celebrating new life', featured: true },
      { name: 'Cradle Ceremony/ Naming Ceremony/ Annaprasana', href: '/events/traditional/cradle-ceremony', description: 'First milestones' },
      { name: 'Half Saree Ceremony/ Doti Ceremony', href: '/events/traditional/half-saree', description: 'Coming of age celebration' },
      { name: 'Upanayanam', href: '/events/traditional/upanayanam', description: 'Sacred thread ceremony' }
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
      { name: 'Surprise Parties', href: '/events/special/surprise', description: 'Unforgettable surprises', featured: true },
      { name: 'Kitty Parties', href: '/events/special/kitty', description: 'Ladies social gatherings' },
      { name: 'House Parties', href: '/events/special/house-party', description: 'Intimate home celebrations' },
      { name: 'Candle Light Dinners', href: '/events/special/candlelight', description: 'Romantic evenings' },
      { name: 'Valentines/Proposal', href: '/events/special/valentine', description: 'Love celebrations' },
      { name: 'Retirement Day', href: '/events/special/retirement', description: 'Honoring service' },
      { name: 'Anniversaries', href: '/events/special/anniversary', description: 'Celebrating milestones' }
    ]
  },
  {
    id: 'college-events',
    label: 'College Events',
    icon: '🎓',
    description: 'Academic celebrations and milestones',
    items: [
      { name: 'Annual Day', href: '/events/college/annual-day', description: 'Yearly celebrations' },
      { name: 'Sports Day', href: '/events/college/sports-day', description: 'Athletic competitions' },
      { name: 'Cultural Day', href: '/events/college/cultural-day', description: 'Arts and culture showcase', featured: true },
      { name: 'Freshers Day', href: '/events/college/freshers', description: 'Welcome new students' },
      { name: 'Farewell Day', href: '/events/college/farewell', description: 'Goodbye celebrations' },
      { name: 'Convocation Day', href: '/events/college/convocation', description: 'Graduation ceremony' }
    ]
  }
];

// Desktop Services Navigation (as shown in desktop dropdown)
export const desktopServicesNavSections: ServiceSection[] = [
  {
    id: 'planning-management',
    label: 'Event Planning & Management',
    href: '/services#planning-management',
    items: [],
  },
  {
    id: 'decoration-design',
    label: 'Decoration & Design',
    href: '/services#decoration-design',
    items: [],
  },
  {
    id: 'photo-video',
    label: 'Photography & Videography',
    href: '/services#photo-video',
    items: [],
  },
  {
    id: 'entertainment-activities',
    label: 'Entertainment & Activities',
    href: '/services#entertainment-activities',
    items: [],
  },
  {
    id: 'food-catering',
    label: 'Food & Catering',
    href: '/services#food-catering',
    items: [],
  },
  {
    id: 'makeup-styling',
    label: 'Makeup & Styling',
    href: '/services#makeup-styling',
    items: [],
  },
  {
    id: 'cakes-confectionery',
    label: 'Cakes & Confectionery',
    href: '/services#cakes-confectionery',
    items: [],
  },
  {
    id: 'return-gifts',
    label: 'Return Gifts & Souvenirs',
    href: '/services#return-gifts',
    items: [],
  },
  {
    id: 'rentals',
    label: 'Tent House Materials & Rentals',
    href: '/services#rentals',
    items: [],
  },
  {
    id: 'venue-booking',
    label: 'Venue Booking & Setup',
    href: '/services#venue-booking',
    items: [],
  },
  {
    id: 'specialized-services',
    label: 'Specialized Services',
    href: '/services#specialized-services',
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
  const slug = itemName.toLowerCase().replace(/\s+/g, '-');
  return `/events/${sectionId}/${slug}`;
};

export const generateServiceUrl = (sectionId: string, itemName: string) => {
  const section = desktopServicesNavSections.find(s => s.id === sectionId);
  if (!section) return '/';

  const slug = itemName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return `${section.href}#${slug}`;
};