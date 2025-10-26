export interface ServiceCategory {
  id: string;
  name: string;
  subServices?: SubService[];
}

export interface SubService {
  id: string;
  name: string;
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'decor-lighting',
    name: 'Decor & Lighting',
    subServices: [
      { id: 'flower-decors', name: 'Flower Decors' },
      { id: 'balloon-decors', name: 'Balloon Decors' },
      { id: 'table-setup', name: 'Table Setup' },
      { id: 'selfie-photobooths', name: 'Selfie/Photobooths' },
      { id: 'themed-backdrops', name: 'Customized Themed Backdrops' },
      { id: 'led-focus-lighting', name: 'LED/Focus Lighting' },
      { id: 'truss-screen-setup', name: 'Truss & Screen Setup' }
    ]
  },
  {
    id: 'multi-cuisine-menus',
    name: 'Multi-Cuisine Menus',
    subServices: [
      { id: 'south-indian', name: 'South Indian' },
      { id: 'north-indian', name: 'North Indian' },
      { id: 'continental', name: 'Continental' },
      { id: 'italian', name: 'Italian' },
      { id: 'indo-chinese', name: 'Indo-Chinese' },
      { id: 'pan-asian', name: 'Pan Asian' },
      { id: 'stalls', name: 'Stalls' },
      { id: 'barbeque', name: 'Barbeque' },
      { id: 'desserts', name: 'Desserts' },
      { id: 'catering', name: 'Catering' }
    ]
  },
  {
    id: 'photography-videography',
    name: 'Photography & Videography',
    subServices: [
      { id: 'conventional-photography', name: 'Conventional Photography/Traditional Photography' },
      { id: 'conventional-videography', name: 'Conventional Videography/Traditional Videography' },
      { id: 'candid-photography', name: 'Candid Photography' },
      { id: 'candid-videography', name: 'Candid Videography' },
      { id: 'cinematic-teaser', name: 'Cinematic Teaser' },
      { id: 'album', name: 'Album' },
      { id: 'drone', name: 'Drone' },
      { id: 'live-streaming', name: 'Live Streaming' }
    ]
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    subServices: [
      { id: 'music', name: 'Music' },
      { id: 'artists', name: 'Artists' },
      { id: 'mascots', name: 'Mascots' },
      { id: 'entries', name: 'Entries' },
      { id: 'games', name: 'Games' }
    ]
  },
  {
    id: 'makeup',
    name: 'Makeup',
    subServices: [
      { id: 'hair-styling', name: 'Hair Styling' },
      { id: 'saree-draping', name: 'Saree Draping' }
    ]
  },
  {
    id: 'cake',
    name: 'Cake'
  },
  {
    id: 'tent-house',
    name: 'Tent House'
  },
  {
    id: 'gifts-trousseau-packing',
    name: 'Gifts & Trousseau Packing',
    subServices: [
      { id: 'return-gifts', name: 'Return Gifts' },
      { id: 'customized-gifts', name: 'Customized Gifts' }
    ]
  }
];
// Additional exports for ImprovedQuoteModal
import { ServiceCategory as QuoteServiceCategory, EventSpecificService } from '../types/quote';

export const mainServiceCategories: QuoteServiceCategory[] = [
  {
    id: 'decor-lighting',
    name: 'Decor & Lighting',
    icon: '🎨',
    services: [
      { id: 'flower-decors', name: 'Flower Decors', description: 'Beautiful floral arrangements', isPopular: true },
      { id: 'balloon-decors', name: 'Balloon Decors', description: 'Creative balloon decorations' },
      { id: 'table-setup', name: 'Table Setup', description: 'Elegant table arrangements' },
      { id: 'selfie-photobooths', name: 'Selfie/Photobooths', description: 'Fun photo opportunities' },
      { id: 'themed-backdrops', name: 'Themed Backdrops', description: 'Custom themed backgrounds', isPopular: true },
      { id: 'led-focus-lighting', name: 'LED/Focus Lighting', description: 'Professional lighting setup' },
      { id: 'truss-screen-setup', name: 'Truss & Screen Setup', description: 'Stage and screen arrangements' }
    ]
  },
  {
    id: 'catering',
    name: 'Catering & Food',
    icon: '🍽️',
    services: [
      { id: 'south-indian', name: 'South Indian Cuisine', description: 'Traditional South Indian dishes', isPopular: true },
      { id: 'north-indian', name: 'North Indian Cuisine', description: 'Authentic North Indian food' },
      { id: 'continental', name: 'Continental', description: 'International continental dishes' },
      { id: 'italian', name: 'Italian', description: 'Italian cuisine and pasta' },
      { id: 'indo-chinese', name: 'Indo-Chinese', description: 'Fusion Indo-Chinese dishes' },
      { id: 'pan-asian', name: 'Pan Asian', description: 'Asian cuisine varieties' },
      { id: 'stalls', name: 'Food Stalls', description: 'Interactive food counters', isPopular: true },
      { id: 'barbeque', name: 'Barbeque', description: 'Grilled and BBQ items' },
      { id: 'desserts', name: 'Desserts', description: 'Sweet treats and desserts' }
    ]
  },
  {
    id: 'photography-videography',
    name: 'Photography & Videography',
    icon: '📸',
    services: [
      { id: 'conventional-photography', name: 'Traditional Photography', description: 'Classic photography style', isPopular: true },
      { id: 'candid-photography', name: 'Candid Photography', description: 'Natural moment captures', isPopular: true },
      { id: 'conventional-videography', name: 'Traditional Videography', description: 'Standard video coverage' },
      { id: 'candid-videography', name: 'Candid Videography', description: 'Spontaneous video moments' },
      { id: 'cinematic-teaser', name: 'Cinematic Teaser', description: 'Movie-style highlight videos' },
      { id: 'drone-photography', name: 'Drone Photography', description: 'Aerial photography and videos' }
    ]
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎵',
    services: [
      { id: 'dj-music', name: 'DJ & Music', description: 'Professional DJ services', isPopular: true },
      { id: 'live-band', name: 'Live Band', description: 'Live musical performances' },
      { id: 'dance-performances', name: 'Dance Performances', description: 'Professional dance shows' },
      { id: 'anchor-host', name: 'Anchor/Host', description: 'Event hosting and anchoring' },
      { id: 'games-activities', name: 'Games & Activities', description: 'Interactive entertainment' }
    ]
  },
  {
    id: 'logistics',
    name: 'Logistics & Coordination',
    icon: '📋',
    services: [
      { id: 'venue-booking', name: 'Venue Booking', description: 'Venue selection and booking', isPopular: true },
      { id: 'guest-coordination', name: 'Guest Coordination', description: 'Guest management services' },
      { id: 'transportation', name: 'Transportation', description: 'Guest transportation arrangements' },
      { id: 'accommodation', name: 'Accommodation', description: 'Hotel booking for guests' },
      { id: 'invitation-design', name: 'Invitation Design', description: 'Custom invitation cards' }
    ]
  }
];

export const eventSpecificServices: EventSpecificService[] = [
  {
    eventId: 'engagement',
    eventName: 'Engagement Ceremony',
    availableServices: [
      { id: 'ring-ceremony-setup', name: 'Ring Ceremony Setup', description: 'Special ring exchange arrangement' },
      { id: 'engagement-photography', name: 'Engagement Photography', description: 'Couple photography session' },
      { id: 'family-coordination', name: 'Family Coordination', description: 'Managing both families' }
    ]
  },
  {
    eventId: 'haldi-mehendi',
    eventName: 'Haldi & Mehendi',
    availableServices: [
      { id: 'mehendi-artists', name: 'Mehendi Artists', description: 'Professional henna artists' },
      { id: 'haldi-setup', name: 'Haldi Ceremony Setup', description: 'Traditional haldi arrangements' },
      { id: 'yellow-theme-decor', name: 'Yellow Theme Decor', description: 'Vibrant yellow decorations' }
    ]
  },
  {
    eventId: 'wedding-ceremony',
    eventName: 'Wedding Ceremony',
    availableServices: [
      { id: 'mandap-setup', name: 'Mandap Setup', description: 'Traditional wedding mandap' },
      { id: 'priest-coordination', name: 'Priest Coordination', description: 'Religious ceremony management' },
      { id: 'ritual-arrangements', name: 'Ritual Arrangements', description: 'All wedding ritual setups' }
    ]
  },
  {
    eventId: 'reception',
    eventName: 'Reception',
    availableServices: [
      { id: 'grand-entrance', name: 'Grand Entrance', description: 'Spectacular couple entrance' },
      { id: 'stage-decoration', name: 'Stage Decoration', description: 'Reception stage setup' },
      { id: 'guest-entertainment', name: 'Guest Entertainment', description: 'Reception entertainment programs' }
    ]
  }
];