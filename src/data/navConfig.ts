export interface NavSection {
  id: string;
  label: string;
  items: string[];
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
      'Gruhapravesham'
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
export const desktopServicesNavSections: NavSection[] = [
  {
    id: 'decoration',
    label: 'Decoration',
    items: [
      'Theme-Based Stage Decoration',
      'Balloon Decoration',
      'Floral Decoration',
      'Fabric Drapes & Canopies',
      'LED / Neon Signage',
      'Entry Gate Setup',
      'Welcome Board & Easel Setup',
      'Table Styling',
      'Photo Booth / Backdrop Walls',
      'Themed Props & Cutouts',
      'Hanging / Ceiling Decor',
      'LED Letters & Numbers',
      'Decor Lighting'
    ]
  },
  {
    id: 'cakes',
    label: 'Cakes',
    items: [
      'Custom Theme Cakes',
      'Fondant / Cream Cakes',
      'Dessert Table Styling',
      'Cupcakes, Brownies, Macarons',
      'Name Cakes / Number Cakes',
      'Eggless / Egg Options',
      'Smash Cake for Babies',
      'Instant Cake Cutting Setup'
    ]
  },
  {
    id: 'photography-videography',
    label: 'Photography & Videography',
    items: [
      'Regular Photography',
      'Regular Videography',
      'Candid Photography',
      'Candid Videography',
      'Teaser / Trailer Video',
      'Drone Photography & Video',
      'Instant Photo Printing Booth',
      'Live Streaming',
      'Photo Album Design & Printing',
      'Same-Day Edits'
    ]
  },
  {
    id: 'return-gifts',
    label: 'Return Gifts',
    items: [
      'Personalized Gifts',
      'Theme-Based Gift Boxes',
      'Sweet Boxes / Custom Hampers',
      'Eco-Friendly Gifts',
      'Toys / Stationery Sets',
      'Utility Gift Packs',
      'Trousseau Packing',
      'Premium Packing & Tagging',
      'Gift Counters with Attendants'
    ]
  },
  {
    id: 'food-catering',
    label: 'Food & Catering',
    items: [
      'Veg / Non-Veg Catering',
      'South Indian',
      'North Indian',
      'Continental',
      'Italian',
      'Indo-Chinese',
      'Pan Asian',
      'Live Counters/Stalls',
      'Cutlery',
      'Waiter / Staff Management'
    ]
  },
  {
    id: 'makeup-styling',
    label: 'Makeup & Styling',
    items: [
      'Party Makeup',
      'Bridal Makeup',
      'Groom Makeup & Styling',
      'Saree/Half Saree Draping',
      'Hair Styling & Hairdo',
      'Mehendi Artist',
      'Nail Art Station',
      'Touch-Up Corner',
      'Group Makeup',
      'Makeup Trials'
    ]
  },
  {
    id: 'venue-booking',
    label: 'Venue Booking & Setup',
    items: [
      'Venue Selection & Booking Assistance',
      'Banquet Hall Coordination',
      'Outdoor / Garden Venue Setup',
      'Farmhouse Booking',
      'Stage & Seating Arrangement',
      'Parking Arrangement'
    ]
  },
  {
    id: 'entertainment',
    label: 'Entertainment & Activities',
    items: [
      'Music & Sound',
      'Grand Entry Concepts',
      'Artists',
      'Characters',
      'Games'
    ]
  }
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
  const slug = itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `/events/${sectionId}/${slug}`;
};

export const generateServiceUrl = (sectionId: string, itemName: string) => {
  const slug = itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `/services/${sectionId}/${slug}`;
};