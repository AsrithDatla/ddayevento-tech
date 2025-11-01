export interface ServiceItem {
  id: string;
  name: string;
  description?: string;
  isPopular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  services: ServiceItem[];
}

export interface EventServices {
  eventId: string;
  eventName: string;
  availableServices: ServiceItem[];
}

// Main Service Categories
export const mainServiceCategories: ServiceCategory[] = [
  {
    id: 'event-planning',
    name: 'Event Planning & Management',
    icon: '📋',
    color: 'from-blue-500 to-blue-400',
    services: [
      { id: 'full-event-planning', name: 'Full Event Planning', description: 'Complete event coordination from start to finish', isPopular: true },
      { id: 'partial-planning', name: 'Partial Planning', description: 'Specific aspects of event planning' },
      { id: 'day-coordination', name: 'Day-of Coordination', description: 'Event day management and coordination' },
      { id: 'timeline-management', name: 'Timeline Management', description: 'Schedule and timeline coordination' }
    ]
  },
  {
    id: 'decoration-design',
    name: 'Decoration & Design',
    icon: '🎨',
    color: 'from-pink-500 to-pink-400',
    services: [
      { id: 'theme-decoration', name: 'Theme Decoration', description: 'Custom themed decorations', isPopular: true },
      { id: 'flower-arrangements', name: 'Flower Arrangements', description: 'Fresh flower decorations and arrangements' },
      { id: 'backdrop-design', name: 'Backdrop Design', description: 'Custom backdrop creation and setup' },
      { id: 'lighting-design', name: 'Lighting Design', description: 'Ambient and decorative lighting' },
      { id: 'table-centerpieces', name: 'Table Centerpieces', description: 'Beautiful table decoration pieces' }
    ]
  },
  {
    id: 'photography-videography',
    name: 'Photography & Videography',
    icon: '📸',
    color: 'from-purple-500 to-purple-400',
    services: [
      { id: 'wedding-photography', name: 'Event Photography', description: 'Professional event photography', isPopular: true },
      { id: 'videography', name: 'Videography', description: 'Professional video recording and editing' },
      { id: 'candid-photography', name: 'Candid Photography', description: 'Natural, unposed photography' },
      { id: 'drone-photography', name: 'Drone Photography', description: 'Aerial photography and videography' },
      { id: 'photo-booth', name: 'Photo Booth', description: 'Interactive photo booth setup' }
    ]
  },
  {
    id: 'entertainment-activities',
    name: 'Entertainment & Activities',
    icon: '🎭',
    color: 'from-green-500 to-green-400',
    services: [
      { id: 'live-music', name: 'Live Music', description: 'Professional musicians and bands' },
      { id: 'dj-services', name: 'DJ Services', description: 'Professional DJ and sound system' },
      { id: 'dance-performances', name: 'Dance Performances', description: 'Professional dance entertainment' },
      { id: 'games-activities', name: 'Games & Activities', description: 'Interactive games and activities' },
      { id: 'cultural-programs', name: 'Cultural Programs', description: 'Traditional cultural performances' }
    ]
  },
  {
    id: 'food-catering',
    name: 'Food & Catering',
    icon: '🍽️',
    color: 'from-orange-500 to-orange-400',
    services: [
      { id: 'full-catering', name: 'Full Catering Service', description: 'Complete meal service with staff', isPopular: true },
      { id: 'buffet-setup', name: 'Buffet Setup', description: 'Self-service buffet arrangement' },
      { id: 'live-counters', name: 'Live Counters', description: 'Interactive cooking stations' },
      { id: 'beverages', name: 'Beverages', description: 'Drinks and refreshment service' },
      { id: 'special-dietary', name: 'Special Dietary Options', description: 'Vegan, gluten-free, and other dietary needs' }
    ]
  },
  {
    id: 'makeup-styling',
    name: 'Makeup & Styling',
    icon: '💄',
    color: 'from-red-500 to-red-400',
    services: [
      { id: 'bridal-makeup', name: 'Bridal Makeup', description: 'Professional bridal makeup and styling' },
      { id: 'family-makeup', name: 'Family Makeup', description: 'Makeup for family members' },
      { id: 'hair-styling', name: 'Hair Styling', description: 'Professional hair styling services' },
      { id: 'saree-draping', name: 'Saree Draping', description: 'Traditional saree draping service' },
      { id: 'mehendi-artist', name: 'Mehendi Artist', description: 'Traditional henna art application' }
    ]
  },
  {
    id: 'cakes-confectionery',
    name: 'Cakes & Confectionery',
    icon: '🎂',
    color: 'from-yellow-500 to-yellow-400',
    services: [
      { id: 'custom-cakes', name: 'Custom Cakes', description: 'Personalized cake design and creation', isPopular: true },
      { id: 'dessert-table', name: 'Dessert Table', description: 'Variety of desserts and sweets' },
      { id: 'traditional-sweets', name: 'Traditional Sweets', description: 'Indian traditional sweets and mithai' },
      { id: 'cupcakes', name: 'Cupcakes & Mini Desserts', description: 'Individual portion desserts' }
    ]
  },
  {
    id: 'return-gifts',
    name: 'Return Gifts & Souvenirs',
    icon: '🎁',
    color: 'from-teal-500 to-teal-400',
    services: [
      { id: 'custom-return-gifts', name: 'Custom Return Gifts', description: 'Personalized gifts for guests' },
      { id: 'traditional-gifts', name: 'Traditional Gifts', description: 'Cultural and traditional gift items' },
      { id: 'eco-friendly-gifts', name: 'Eco-Friendly Gifts', description: 'Sustainable and environment-friendly options' },
      { id: 'gift-wrapping', name: 'Gift Wrapping', description: 'Professional gift wrapping service' }
    ]
  },
  {
    id: 'tent-house-rentals',
    name: 'Tent House Materials & Rentals',
    icon: '⛺',
    color: 'from-gray-600 to-gray-500',
    services: [
      { id: 'tent-setup', name: 'Tent Setup', description: 'Temporary structure setup and installation' },
      { id: 'furniture-rental', name: 'Furniture Rental', description: 'Tables, chairs, and seating arrangements' },
      { id: 'stage-setup', name: 'Stage Setup', description: 'Performance and ceremony stage construction' },
      { id: 'sound-system', name: 'Sound System', description: 'Audio equipment and microphone setup' },
      { id: 'generator-power', name: 'Generator & Power', description: 'Electrical power supply arrangements' }
    ]
  },
  {
    id: 'venue-booking',
    name: 'Venue Booking & Setup',
    icon: '🏛️',
    color: 'from-indigo-500 to-indigo-400',
    services: [
      { id: 'venue-selection', name: 'Venue Selection', description: 'Help finding and booking the perfect venue' },
      { id: 'venue-decoration', name: 'Venue Decoration', description: 'Complete venue transformation and setup' },
      { id: 'layout-planning', name: 'Layout Planning', description: 'Optimal space utilization and arrangement' },
      { id: 'vendor-coordination', name: 'Vendor Coordination', description: 'Managing all venue-related vendors' }
    ]
  },
  {
    id: 'specialized-services',
    name: 'Specialized Services',
    icon: '⭐',
    color: 'from-amber-500 to-amber-400',
    services: [
      { id: 'religious-ceremonies', name: 'Religious Ceremonies', description: 'Traditional and religious ritual coordination' },
      { id: 'cultural-consultancy', name: 'Cultural Consultancy', description: 'Guidance on traditional customs and practices' },
      { id: 'astrology-consultation', name: 'Astrology Consultation', description: 'Auspicious timing and ritual guidance' },
      { id: 'priest-services', name: 'Priest Services', description: 'Religious priest and ceremony conductor' }
    ]
  }
];

// Event-specific services mapping
export const eventSpecificServices: EventServices[] = [
  {
    eventId: 'griha-pravesham',
    eventName: 'House Warming / Griha Pravesham',
    availableServices: [
      // Invitations & Communication
      { id: 'invitation-cards', name: 'Invitation Cards', description: 'Custom designed invitation cards' },

      // Decoration Services
      { id: 'flower-decoration-backdrop', name: 'Flower Decoration Backdrop', description: 'Beautiful floral backdrop for main area' },
      { id: 'doors-decoration', name: 'Doors Decoration', description: 'Decorative elements for all doors' },
      { id: 'main-gate-decoration', name: 'Main Gate Decoration', description: 'Grand entrance decoration' },
      { id: 'staircase-decoration', name: 'Staircase Decoration', description: 'Elegant staircase beautification' },
      { id: 'pooja-mandir-decoration', name: 'Pooja Mandir Decoration', description: 'Sacred space decoration' },

      // Ritual Setup
      { id: 'pooja-vratam-setup', name: 'Pooja Vratam Setup', description: 'Complete religious ceremony setup' },
      { id: 'pandiri-setup', name: 'Pandiri Setup', description: 'Traditional seating arrangement' },

      // Technical Services
      { id: 'lighting-setup', name: 'Lighting Setup', description: 'Ambient and decorative lighting' },
      { id: 'photography-service', name: 'Photography', description: 'Professional event photography' },
      { id: 'videography-service', name: 'Videography', description: 'Complete event video coverage' },

      // Hospitality
      { id: 'food-catering-service', name: 'Food & Catering', description: 'Traditional meal service for guests' },
      { id: 'return-gifts-service', name: 'Return Gifts', description: 'Thoughtful gifts for guests' },

      // Personal Services
      { id: 'makeup-styling-service', name: 'Makeup & Styling', description: 'Personal grooming for hosts' },
      { id: 'mehendi-artist-service', name: 'Mehendi Artist', description: 'Traditional henna art' },

      // Infrastructure
      { id: 'tent-house-materials', name: 'Tent House Materials', description: 'Temporary structures and equipment' },

      // Traditional Entertainment
      { id: 'nadaswaram', name: 'Nadaswaram', description: 'Traditional South Indian musical performance' }
    ]
  },
  {
    eventId: 'baby-shower',
    eventName: 'Baby Shower / Sreemantham',
    availableServices: [
      // Invitations
      { id: 'bs-invitation', name: 'Invitation', description: 'Beautiful baby shower invitation cards' },

      // Decoration Options
      { id: 'bs-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Traditional themed backdrop decoration' },
      { id: 'bs-western-backdrop', name: 'Western Style Decoration Backdrop', description: 'Modern western themed backdrop' },
      { id: 'bs-sofa', name: 'Sofa', description: 'Comfortable seating arrangement for the mother-to-be' },
      { id: 'bs-selfie-booth', name: 'Selfie Photo Booth Decoration', description: 'Interactive photo booth setup' },

      // Photography & Videography
      { id: 'bs-photography', name: 'Photography', description: 'Professional baby shower photography' },
      { id: 'bs-videography', name: 'Videography', description: 'Complete event video coverage' },
      { id: 'bs-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing booth' },

      // Food & Treats
      { id: 'bs-food-catering', name: 'Food & Catering', description: 'Delicious meal service for guests' },
      { id: 'bs-cake', name: 'Cake', description: 'Custom baby shower themed cake' },

      // Personal Services
      { id: 'bs-makeup-styling', name: 'Makeup & Styling', description: 'Beautiful makeup for the mother-to-be' },
      { id: 'bs-mehendi-artist', name: 'Mehendi Artist', description: 'Traditional henna art application' },

      // Gifts & Hampers
      { id: 'bs-return-gifts', name: 'Return Gifts', description: 'Thoughtful gifts for guests' },
      { id: 'bs-decorative-hampers', name: 'Decorative Hampers (Sweets, Fruits, Dolls)', description: 'Beautiful gift hampers with sweets, fruits, and baby dolls' },

      // Entertainment & Activities
      { id: 'bs-live-bangle-making', name: 'Live Bangle Making', description: 'Interactive bangle making activity' },
      { id: 'bs-live-mehendi-artist', name: 'Live Mehendi Artist', description: 'Live henna art for guests' },
      { id: 'bs-baby-games', name: 'Baby Related Games', description: 'Fun baby-themed games and activities' },
      { id: 'bs-grand-entry', name: 'Grand Entry', description: 'Special entrance arrangement for the mother-to-be' },

      // Technical Services
      { id: 'bs-dj', name: 'DJ', description: 'Music and entertainment system' },
      { id: 'bs-pa-sound', name: 'PA Sound System', description: 'Professional audio system' },
      { id: 'bs-anchor', name: 'Anchor', description: 'Professional event host and coordinator' },

      // Infrastructure
      { id: 'bs-tent-house', name: 'Tent House Material', description: 'Temporary structures and equipment' }
    ]
  },
  {
    eventId: 'cradle-ceremony',
    eventName: 'Cradle Ceremony / Naming Ceremony / Annaprasana',
    availableServices: [
      // Invitations
      { id: 'cc-invitation', name: 'Invitation', description: 'Custom naming ceremony invitation cards' },

      // Decoration Options
      { id: 'cc-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Traditional themed backdrop decoration' },
      { id: 'cc-western-backdrop', name: 'Western Style Decoration Backdrop', description: 'Modern western themed backdrop' },
      { id: 'cc-cradle', name: 'Cradle', description: 'Beautiful decorative cradle for the ceremony' },
      { id: 'cc-cradle-decoration', name: 'Cradle Decoration', description: 'Elegant cradle decoration and setup' },
      { id: 'cc-sofa', name: 'Sofa', description: 'Comfortable seating arrangement' },
      { id: 'cc-name-revealing', name: 'Name Revealing Setup', description: 'Special setup for the name revealing moment' },

      // Photography & Videography
      { id: 'cc-photography', name: 'Photography', description: 'Professional ceremony photography' },
      { id: 'cc-videography', name: 'Videography', description: 'Complete event video coverage' },

      // Food & Catering
      { id: 'cc-food-catering', name: 'Food & Catering', description: 'Traditional meal service for guests' },
      { id: 'cc-return-gifts', name: 'Return Gifts', description: 'Meaningful gifts for guests' },

      // Technical Services
      { id: 'cc-pa-sound', name: 'PA Sound System', description: 'Professional audio system' },
      { id: 'cc-led-screen', name: 'LED Screen', description: 'Display screen for presentations' },
      { id: 'cc-projector', name: 'Projector', description: 'Projection system for displays' },

      // Entertainment
      { id: 'cc-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and entertainment for guests' },

      // Infrastructure
      { id: 'cc-tent-house', name: 'Tent House Material', description: 'Temporary structures and equipment' }
    ]
  },
  {
    eventId: 'half-saree',
    eventName: 'Half Saree Ceremony / Dhoti Ceremony',
    availableServices: [
      // Invitations
      { id: 'hsc-invitation', name: 'Invitation', description: 'Elegant coming-of-age ceremony invitations' },

      // Decoration Options
      { id: 'hsc-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Traditional themed main backdrop' },
      { id: 'hsc-sofa', name: 'Sofa', description: 'Comfortable seating for the ceremony' },
      { id: 'hsc-haldi-backdrop', name: 'Haldi Traditional Style Decoration Backdrop', description: 'Special backdrop for haldi ceremony' },
      { id: 'hsc-mehendi-backdrop', name: 'Mehendi Traditional Style Decoration Backdrop', description: 'Beautiful backdrop for mehendi ceremony' },

      // Photography & Videography
      { id: 'hsc-photography', name: 'Photography', description: 'Professional ceremony photography' },
      { id: 'hsc-videography', name: 'Videography', description: 'Complete event video coverage' },
      { id: 'hsc-cinematic-teasers', name: 'Cinematic Teasers', description: 'Professional cinematic video highlights' },
      { id: 'hsc-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing booth' },
      { id: 'hsc-360-photobooth', name: '360 Degree Photobooth', description: 'Interactive 360-degree photo experience' },

      // Food & Treats
      { id: 'hsc-food-catering', name: 'Food & Catering', description: 'Traditional feast for guests' },
      { id: 'hsc-cake', name: 'Cake', description: 'Custom celebration cake' },

      // Personal Services
      { id: 'hsc-makeup-styling', name: 'Makeup & Styling', description: 'Professional makeup and styling' },
      { id: 'hsc-mehendi-artist', name: 'Mehendi Artist', description: 'Traditional henna art application' },

      // Entertainment & Technical
      { id: 'hsc-dj', name: 'DJ', description: 'Music and entertainment system' },
      { id: 'hsc-grand-entry', name: 'Grand Entry', description: 'Special entrance arrangement' },
      { id: 'hsc-anchor', name: 'Anchor', description: 'Professional event host' },
      { id: 'hsc-led-screen', name: 'LED Screen', description: 'Display screen for presentations' },
      { id: 'hsc-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance floor' },

      // Activities & Gifts
      { id: 'hsc-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and cultural programs' },
      { id: 'hsc-return-gifts', name: 'Return Gifts', description: 'Thoughtful gifts for guests' },
      { id: 'hsc-decorative-hampers', name: 'Decorative Hampers (Sweets, Fruits, Dolls)', description: 'Beautiful gift hampers' },

      // Infrastructure
      { id: 'hsc-tent-house', name: 'Tent House Materials', description: 'Temporary structures and equipment' },
      { id: 'hsc-generator', name: 'Generator', description: 'Power backup and electrical supply' }
    ]
  },
  {
    eventId: 'dhoti-ceremony',
    eventName: 'Upanayanam',
    availableServices: [
      // Invitations
      { id: 'up-invitation', name: 'Invitation', description: 'Sacred thread ceremony invitation cards' },

      // Decoration & Setup
      { id: 'up-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Traditional sacred ceremony backdrop' },
      { id: 'up-pooja-homam-setup', name: 'Pooja Homam Setup', description: 'Complete religious ceremony and fire ritual setup' },
      { id: 'up-pandit', name: 'Pandit', description: 'Experienced priest for conducting the sacred thread ceremony' },

      // Photography & Videography
      { id: 'up-photography', name: 'Photography', description: 'Professional ceremony photography' },
      { id: 'up-videography', name: 'Videography', description: 'Complete ritual video coverage' },

      // Personal Services
      { id: 'up-makeup-styling', name: 'Makeup & Styling', description: 'Traditional styling for the ceremony' },

      // Food & Hospitality
      { id: 'up-food-catering', name: 'Food & Catering', description: 'Traditional vegetarian meal service' },
      { id: 'up-return-gifts', name: 'Return Gifts', description: 'Sacred and meaningful gifts for guests' },

      // Infrastructure
      { id: 'up-tent-house', name: 'Tent House Materials', description: 'Temporary structures and ceremonial equipment' }
    ]
  },

  // WEDDING EVENTS
  {
    eventId: 'engagement',
    eventName: 'Engagement',
    availableServices: [
      { id: 'eng-invitation', name: 'Invitation', description: 'Elegant engagement invitation cards', isPopular: true },
      { id: 'eng-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Beautiful traditional backdrop for ceremony', isPopular: true },
      { id: 'eng-sofa', name: 'Sofa', description: 'Comfortable seating arrangement for couple' },
      { id: 'eng-lighting', name: 'Lighting', description: 'Romantic and elegant lighting setup', isPopular: true },
      { id: 'eng-grand-entry', name: 'Grand Entry', description: 'Special entrance arrangement for couple' },
      { id: 'eng-photography', name: 'Photography', description: 'Professional engagement photography', isPopular: true },
      { id: 'eng-videography', name: 'Videography', description: 'Complete video coverage of ceremony' },
      { id: 'eng-cinematic-teasers', name: 'Cinematic Teasers', description: 'Short cinematic video highlights' },
      { id: 'eng-food-catering', name: 'Food & Catering', description: 'Delicious catering for guests', isPopular: true },
      { id: 'eng-cake', name: 'Cake', description: 'Custom engagement cake' },
      { id: 'eng-makeup-styling', name: 'Makeup & Styling', description: 'Professional makeup for couple' },
      { id: 'eng-mehendi-artist', name: 'Mehendi Artist', description: 'Beautiful henna designs' },
      { id: 'eng-anchor', name: 'Anchor', description: 'Professional event host/MC' },
      { id: 'eng-dj', name: 'DJ', description: 'Music and entertainment' },
      { id: 'eng-led-screen', name: 'LED Screen', description: 'Display screen for photos/videos' },
      { id: 'eng-return-gifts', name: 'Return Gifts', description: 'Thoughtful gifts for guests' },
      { id: 'eng-decorative-hampers', name: 'Decorative Hampers (Sweets, Fruits, Dolls)', description: 'Beautiful gift hampers' },
      { id: 'eng-couple-rings-hamper', name: 'Couple Rings Hamper', description: 'Special ring presentation' },
      { id: 'eng-entertainment-activities', name: 'Entertainment & Activities', description: 'Fun activities for guests' },
      { id: 'eng-generator', name: 'Generator', description: 'Power backup arrangements' },
      { id: 'eng-tent-house', name: 'Tent House Materials', description: 'Temporary structures and equipment' }
    ]
  },

  {
    eventId: 'haldi-mehendi',
    eventName: 'Haldi & Mehendi',
    availableServices: [
      // Haldi Services
      { id: 'haldi-invitation', name: 'Invitation', description: 'Colorful haldi & mehendi ceremony invitations' },
      { id: 'haldi-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Vibrant traditional backdrop', isPopular: true },
      { id: 'haldi-brass-props', name: 'Brass Props', description: 'Traditional brass decorative items' },
      { id: 'haldi-lighting', name: 'Lighting', description: 'Warm and festive lighting' },
      { id: 'haldi-rangoli', name: 'Rangoli', description: 'Beautiful floor art designs', isPopular: true },
      { id: 'haldi-punjabi-dhol', name: 'Punjabi Dhol', description: 'Traditional dhol music' },
      { id: 'haldi-dandiya', name: 'Dandiya', description: 'Traditional dance props' },
      { id: 'haldi-photography', name: 'Photography', description: 'Candid haldi ceremony photos', isPopular: true },
      { id: 'haldi-videography', name: 'Videography', description: 'Complete ceremony video coverage' },
      { id: 'haldi-cinematic-teasers', name: 'Cinematic Teasers', description: 'Highlight video creation' },
      { id: 'haldi-food-catering', name: 'Food & Catering', description: 'Traditional refreshments' },
      { id: 'haldi-makeup-styling', name: 'Makeup & Styling', description: 'Natural makeup for ceremony' },
      { id: 'haldi-stalls', name: 'Stalls', description: 'Food and activity stalls' },
      { id: 'haldi-music-sound', name: 'Music & Sound', description: 'Sound system and music' },
      { id: 'haldi-grand-entry', name: 'Grand Entry', description: 'Special entrance for bride/groom' },
      { id: 'haldi-anchor', name: 'Anchor', description: 'Event coordination and hosting' },
      { id: 'haldi-water-games', name: 'Water Games & Props', description: 'Fun water-based activities' },
      { id: 'haldi-generator', name: 'Generator', description: 'Power backup' },
      { id: 'haldi-tent-house', name: 'Tent House Materials', description: 'Event infrastructure' },

      // Mehendi Services
      { id: 'mehendi-artists', name: 'Mehendi Artists', description: 'Professional henna artists', isPopular: true },
      { id: 'mehendi-sofa-cushions', name: 'Mehendi Seating (Cushions & Items)', description: 'Comfortable mehendi seating with cushions' },
      { id: 'mehendi-led-dance-floor', name: 'LED Dance Floor', description: 'Illuminated dance area for mehendi' },
      { id: 'mehendi-fun-games', name: 'Mehendi Fun Games', description: 'Interactive games for mehendi guests' }
    ]
  },

  {
    eventId: 'sangeet-cocktail',
    eventName: 'Sangeet & Cocktail',
    availableServices: [
      { id: 'mehendi-invitation', name: 'Invitation', description: 'Beautiful mehendi ceremony invitations' },
      { id: 'mehendi-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Colorful traditional backdrop', isPopular: true },
      { id: 'mehendi-sofa-cushions', name: 'Sofa (Cushions & Items)', description: 'Comfortable seating with cushions' },
      { id: 'mehendi-lighting', name: 'Lighting', description: 'Warm ambient lighting' },
      { id: 'mehendi-artists', name: 'Mehendi Artists', description: 'Professional henna artists', isPopular: true },
      { id: 'mehendi-makeup-styling', name: 'Makeup & Styling', description: 'Beautiful makeup for bride' },
      { id: 'mehendi-led-dance-floor', name: 'LED Dance Floor', description: 'Illuminated dance area' },
      { id: 'mehendi-dj', name: 'DJ', description: 'Music and entertainment' },
      { id: 'mehendi-anchor', name: 'Anchor', description: 'Event host and coordinator' },
      { id: 'mehendi-fun-games', name: 'Fun Games', description: 'Interactive games for guests' },
      { id: 'mehendi-food-catering', name: 'Food & Catering', description: 'Delicious catering service', isPopular: true },
      { id: 'mehendi-stalls', name: 'Stalls', description: 'Food and activity stalls' },
      { id: 'mehendi-photography', name: 'Photography', description: 'Professional mehendi photography', isPopular: true },
      { id: 'mehendi-videography', name: 'Videography', description: 'Complete event videography' },
      { id: 'mehendi-cinematic-teasers', name: 'Cinematic Teasers', description: 'Cinematic highlight videos' },
      { id: 'mehendi-generator', name: 'Generator', description: 'Power backup arrangements' },
      { id: 'mehendi-tent-house', name: 'Tent House Materials', description: 'Event infrastructure' }
    ]
  },

  {
    eventId: 'bride-groom-ceremonies',
    eventName: 'Bride & Groom Ceremonies',
    availableServices: [
      { id: 'bg-invitation', name: 'Invitation', description: 'Special ceremony invitations' },
      { id: 'bg-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Elegant traditional backdrop', isPopular: true },
      { id: 'bg-lighting', name: 'Lighting', description: 'Sacred ceremony lighting' },
      { id: 'bg-sofa', name: 'Sofa', description: 'Comfortable seating for couple' },
      { id: 'bg-photography', name: 'Photography', description: 'Professional ceremony photography', isPopular: true },
      { id: 'bg-videography', name: 'Videography', description: 'Complete ceremony documentation' },
      { id: 'bg-cinematic-teasers', name: 'Cinematic Teasers', description: 'Beautiful highlight videos' },
      { id: 'bg-food-catering', name: 'Food & Catering', description: 'Traditional catering service' },
      { id: 'bg-makeup-styling', name: 'Makeup & Styling', description: 'Professional styling for couple' },
      { id: 'bg-return-gifts', name: 'Return Gifts', description: 'Meaningful gifts for guests' },
      { id: 'bg-nadaswaram', name: 'Nadaswaram', description: 'Traditional South Indian music' },
      { id: 'bg-tent-house', name: 'Tent House Materials', description: 'Ceremony infrastructure' }
    ]
  },

  {
    eventId: 'bridal-bachelors-party',
    eventName: 'Bridal/Bachelors Party',
    availableServices: [
      { id: 'bb-invitation', name: 'Invitation', description: 'Fun party invitations' },
      { id: 'bb-western-backdrop', name: 'Western Style Decoration Backdrop', description: 'Modern party backdrop', isPopular: true },
      { id: 'bb-selfie-photobooth', name: 'Selfie Photobooth Decoration', description: 'Instagram-worthy photo setup' },
      { id: 'bb-lighting', name: 'Lighting', description: 'Party mood lighting' },
      { id: 'bb-photography', name: 'Photography', description: 'Fun party photography', isPopular: true },
      { id: 'bb-videography', name: 'Videography', description: 'Party video coverage' },
      { id: 'bb-cinematic-teasers', name: 'Cinematic Teasers', description: 'Party highlight videos' },
      { id: 'bb-food-catering', name: 'Food & Catering', description: 'Party catering and snacks' },
      { id: 'bb-bar-counter', name: 'Bar Counter', description: 'Beverage service setup' },
      { id: 'bb-cake', name: 'Cake', description: 'Special party cake' },
      { id: 'bb-makeup-styling', name: 'Makeup & Styling', description: 'Party makeup and styling' },
      { id: 'bb-dj', name: 'DJ', description: 'High-energy music and entertainment', isPopular: true },
      { id: 'bb-led-dance-floor', name: 'LED Dance Floor', description: 'Illuminated dance area' },
      { id: 'bb-fun-games-props', name: 'Fun Games & Props', description: 'Party games and entertainment props' },
      { id: 'bb-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing booth' },
      { id: 'bb-360-photobooth', name: '360 Degree Photobooth', description: '360-degree video booth experience' },
      { id: 'bb-tent-house', name: 'Tent House Materials', description: 'Party infrastructure' }
    ]
  },

  {
    eventId: 'wedding-ceremony',
    eventName: 'Wedding Ceremony',
    availableServices: [
      { id: 'sangeeth-invitation', name: 'Invitation', description: 'Musical night invitations' },
      { id: 'sangeeth-led-truss', name: 'LED Truss Setup', description: 'Professional stage lighting setup', isPopular: true },
      { id: 'sangeeth-led-screen-backdrop', name: 'LED Screen Backdrop', description: 'Large LED display backdrop' },
      { id: 'sangeeth-led-dance-floor', name: 'LED Dance Floor', description: 'Illuminated dance floor', isPopular: true },
      { id: 'sangeeth-selfie-photobooth', name: 'Selfie Photobooth Decoration', description: 'Photo booth setup' },
      { id: 'sangeeth-lighting', name: 'Lighting', description: 'Stage and ambient lighting' },
      { id: 'sangeeth-couple-seating', name: 'Couple Seating Arrangement', description: 'Special seating for couple' },
      { id: 'sangeeth-anchor', name: 'Anchor', description: 'Professional event host', isPopular: true },
      { id: 'sangeeth-choreographers', name: 'Choreographers', description: 'Dance choreography services' },
      { id: 'sangeeth-grand-entry', name: 'Grand Entry', description: 'Spectacular entrance for couple' },
      { id: 'sangeeth-dancers-props', name: 'Dancers and Props', description: 'Professional dancers and performance props' },
      { id: 'sangeeth-makeup-styling', name: 'Makeup & Styling', description: 'Stage-ready makeup and styling' },
      { id: 'sangeeth-photography', name: 'Photography', description: 'Professional event photography', isPopular: true },
      { id: 'sangeeth-videography', name: 'Videography', description: 'Complete event videography' },
      { id: 'sangeeth-cinematic-teasers', name: 'Cinematic Teasers', description: 'Cinematic highlight videos' },
      { id: 'sangeeth-food-catering', name: 'Food & Catering', description: 'Grand catering service' },
      { id: 'sangeeth-bar-counter', name: 'Bar Counter', description: 'Beverage service' },
      { id: 'sangeeth-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing' },
      { id: 'sangeeth-360-photobooth', name: '360 Degree Photobooth', description: '360-degree video experience' },
      { id: 'sangeeth-entertainment', name: 'Entertainment Activities', description: 'Various entertainment options' },
      { id: 'sangeeth-generator', name: 'Generator', description: 'Power backup for equipment' },
      { id: 'sangeeth-tent-house', name: 'Tent House Materials', description: 'Event infrastructure' }
    ]
  },

  {
    eventId: 'reception',
    eventName: 'Reception',
    availableServices: [
      { id: 'wedding-invitation', name: 'Invitation', description: 'Traditional wedding invitations' },
      { id: 'wedding-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Sacred wedding backdrop', isPopular: true },
      { id: 'wedding-lighting', name: 'Lighting', description: 'Auspicious ceremony lighting' },
      { id: 'wedding-sofa', name: 'Sofa', description: 'Comfortable seating for couple' },
      { id: 'wedding-car-decoration', name: 'Car Decoration', description: 'Bridal car decoration' },
      { id: 'wedding-makeup-styling', name: 'Makeup & Styling', description: 'Bridal makeup and styling', isPopular: true },
      { id: 'wedding-photography', name: 'Photography', description: 'Professional wedding photography', isPopular: true },
      { id: 'wedding-videography', name: 'Videography', description: 'Complete wedding videography' },
      { id: 'wedding-cinematic-teasers', name: 'Cinematic Teasers', description: 'Wedding highlight videos' },
      { id: 'wedding-food-catering', name: 'Food & Catering', description: 'Traditional wedding feast', isPopular: true },
      { id: 'wedding-grand-entry', name: 'Grand Entry', description: 'Spectacular bridal/groom entry' },
      { id: 'wedding-nadaswaram', name: 'Nadaswaram', description: 'Traditional wedding music' },
      { id: 'wedding-dj', name: 'DJ', description: 'Music and sound system' },
      { id: 'wedding-led-screen', name: 'LED Screen', description: 'Display screen for ceremony' },
      { id: 'wedding-entertainment', name: 'Entertainment & Activities', description: 'Guest entertainment' },
      { id: 'wedding-anchor', name: 'Anchor', description: 'Ceremony coordination' },
      { id: 'wedding-return-gifts', name: 'Return Gifts', description: 'Wedding favor gifts' },
      { id: 'wedding-decorative-items', name: 'Decorative Items', description: 'Traditional decorative elements' },
      { id: 'wedding-generator', name: 'Generator', description: 'Power backup' },
      { id: 'wedding-tent-house', name: 'Tent House Materials', description: 'Wedding infrastructure' }
    ]
  },

  {
    eventId: 'reception',
    eventName: 'Reception',
    availableServices: [
      { id: 'reception-invitation', name: 'Invitation', description: 'Elegant reception invitations' },
      { id: 'reception-traditional-backdrop', name: 'Traditional Style Decoration Backdrop', description: 'Grand reception backdrop', isPopular: true },
      { id: 'reception-sofa', name: 'Sofa', description: 'Comfortable couple seating' },
      { id: 'reception-selfie-photobooth', name: 'Selfie Photobooth Decoration', description: 'Photo booth for guests' },
      { id: 'reception-lighting', name: 'Lighting', description: 'Elegant reception lighting' },
      { id: 'reception-photography', name: 'Photography', description: 'Professional reception photography', isPopular: true },
      { id: 'reception-videography', name: 'Videography', description: 'Complete reception coverage' },
      { id: 'reception-cinematic-teasers', name: 'Cinematic Teasers', description: 'Reception highlight videos' },
      { id: 'reception-food-catering', name: 'Food & Catering', description: 'Grand reception catering', isPopular: true },
      { id: 'reception-cake', name: 'Cake', description: 'Wedding reception cake' },
      { id: 'reception-makeup-styling', name: 'Makeup & Styling', description: 'Reception makeup and styling' },
      { id: 'reception-grand-entry', name: 'Grand Entry', description: 'Spectacular couple entrance' },
      { id: 'reception-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for guests' },
      { id: 'reception-anchor', name: 'Anchor', description: 'Professional event hosting' },
      { id: 'reception-entertainment', name: 'Entertainment & Activities', description: 'Guest entertainment programs' },
      { id: 'reception-led-screen', name: 'LED Screen', description: 'Display screen for photos/videos' },
      { id: 'reception-led-dance-floor', name: 'LED Dance Floor', description: 'Illuminated dance area' },
      { id: 'reception-generator', name: 'Generator', description: 'Power backup arrangements' },
      { id: 'reception-tent-house', name: 'Tent House Materials', description: 'Reception infrastructure' }
    ]
  },

  // BIRTHDAY EVENTS
  {
    eventId: 'kids-birthday',
    eventName: 'Kids Birthday Party',
    availableServices: [
      { id: 'fyb-invitation', name: 'Invitation', description: 'Adorable first birthday invitation cards', isPopular: true },
      { id: 'fyb-western-backdrop', name: 'Western Style Decoration Backdrop', description: 'Colorful and fun themed backdrop', isPopular: true },
      { id: 'fyb-grand-entrance-pathway', name: 'Grand Entrance Pathway Decoration', description: 'Beautiful entrance pathway decoration' },
      { id: 'fyb-milestone-boards', name: 'Milestone Decoration Boards', description: 'Special milestone celebration boards' },
      { id: 'fyb-lighting', name: 'Lighting', description: 'Bright and cheerful lighting setup' },
      { id: 'fyb-selfie-photobooth', name: 'Selfie Photobooth Decoration', description: 'Fun photo booth for family pictures' },
      { id: 'fyb-photography', name: 'Photography', description: 'Professional first birthday photography', isPopular: true },
      { id: 'fyb-videography', name: 'Videography', description: 'Complete birthday video coverage' },
      { id: 'fyb-cinematic-teasers', name: 'Cinematic Teasers', description: 'Beautiful highlight videos' },
      { id: 'fyb-food-catering', name: 'Food & Catering', description: 'Family-friendly catering service', isPopular: true },
      { id: 'fyb-stalls', name: 'Stalls', description: 'Food and activity stalls' },
      { id: 'fyb-cake', name: 'Cake', description: 'Custom first birthday cake', isPopular: true },
      { id: 'fyb-entertainment-activities', name: 'Entertainment & Activities', description: 'Age-appropriate entertainment' },
      { id: 'fyb-tattoo-artist', name: 'Tattoo Artist', description: 'Temporary tattoo artist for kids' },
      { id: 'fyb-digital-caricature', name: 'Digital Caricature Artist', description: 'Digital caricature creation' },
      { id: 'fyb-live-pottery', name: 'Live Pottery Making', description: 'Interactive pottery making activity' },
      { id: 'fyb-games-zone', name: 'Games & Game Zone', description: 'Fun games and play area for children' },
      { id: 'fyb-mascots', name: 'Mascots', description: 'Character mascots for entertainment' },
      { id: 'fyb-grand-entry', name: 'Grand Entry', description: 'Special entrance for birthday child' },
      { id: 'fyb-pa-sound', name: 'PA Sound System', description: 'Professional audio system' },
      { id: 'fyb-dj', name: 'DJ', description: 'Music and entertainment system' },
      { id: 'fyb-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing booth' },
      { id: 'fyb-360-photobooth', name: '360 Degree Photobooth', description: '360-degree video experience' },
      { id: 'fyb-anchor', name: 'Anchor', description: 'Professional event host' },
      { id: 'fyb-magician', name: 'Magician', description: 'Magic shows for entertainment' },
      { id: 'fyb-entertainer', name: 'Entertainer', description: 'Professional children entertainer' },
      { id: 'fyb-return-gifts', name: 'Return Gifts', description: 'Thoughtful gifts for guests' },
      { id: 'fyb-makeup-styling', name: 'Makeup & Styling', description: 'Makeup and styling for family' },
      { id: 'fyb-led-screen', name: 'LED Screen', description: 'Display screen for photos/videos' },
      { id: 'fyb-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance area' },
      { id: 'fyb-tent-house', name: 'Tent House Materials', description: 'Event infrastructure and equipment' },
      { id: 'fyb-generator', name: 'Generator', description: 'Power backup arrangements' }
    ]
  },

  {
    eventId: 'cake-smash',
    eventName: 'Cake Smash',
    availableServices: [
      { id: 'cs-western-backdrop-props', name: 'Western Style Decoration Props/Backdrop', description: 'Fun and colorful cake smash backdrop setup', isPopular: true },
      { id: 'cs-studios-indoor', name: 'Studios - Indoor Shoot', description: 'Professional indoor studio setup for cake smash' },
      { id: 'cs-parks-outdoor', name: 'Parks - Outdoor Shoot', description: 'Beautiful outdoor park location for cake smash' },
      { id: 'cs-cake', name: 'Cake', description: 'Special cake designed for smashing', isPopular: true },
      { id: 'cs-photography', name: 'Photography', description: 'Professional cake smash photography session', isPopular: true },
      { id: 'cs-cinematic-teaser', name: 'Cinematic Teaser', description: 'Beautiful cake smash highlight video' }
    ]
  },

  {
    eventId: 'adult-birthday',
    eventName: 'Adult Birthday Party',
    availableServices: [
      { id: 'abp-invitation', name: 'Invitation', description: 'Elegant adult birthday invitations' },
      { id: 'abp-western-backdrop', name: 'Western Style Decoration Backdrop', description: 'Sophisticated party backdrop', isPopular: true },
      { id: 'abp-lighting', name: 'Lighting', description: 'Ambient party lighting setup' },
      { id: 'abp-selfie-photobooth', name: 'Selfie Photobooth Decoration', description: 'Stylish photo booth setup' },
      { id: 'abp-photography', name: 'Photography', description: 'Professional party photography', isPopular: true },
      { id: 'abp-videography', name: 'Videography', description: 'Complete party video coverage' },
      { id: 'abp-cinematic-teasers', name: 'Cinematic Teasers', description: 'Party highlight videos' },
      { id: 'abp-food-catering', name: 'Food & Catering', description: 'Delicious party catering', isPopular: true },
      { id: 'abp-stalls', name: 'Stalls', description: 'Food and beverage stalls' },
      { id: 'abp-cake', name: 'Cake', description: 'Custom birthday cake', isPopular: true },
      { id: 'abp-entertainment-activities', name: 'Entertainment & Activities', description: 'Adult party entertainment' },
      { id: 'abp-anchor', name: 'Anchor', description: 'Professional party host' },
      { id: 'abp-music-sound-artists', name: 'Music & Sound Artists', description: 'Live music and sound artists' },
      { id: 'abp-pa-sound', name: 'PA Sound System', description: 'Professional audio system' },
      { id: 'abp-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing' },
      { id: 'abp-360-photobooth', name: '360 Degree Photobooth', description: '360-degree video experience' },
      { id: 'abp-return-gifts', name: 'Return Gifts', description: 'Thoughtful party favors' },
      { id: 'abp-makeup-styling', name: 'Makeup & Styling', description: 'Party makeup and styling' },
      { id: 'abp-tent-house', name: 'Tent House Materials', description: 'Party infrastructure' }
    ]
  },

  {
    eventId: 'milestone-birthday',
    eventName: 'Milestone Birthday',
    availableServices: [
      { id: 'kyb-invitation', name: 'Invitation', description: 'Fun kids birthday invitations', isPopular: true },
      { id: 'kyb-western-backdrop', name: 'Western Style Decoration Backdrop', description: 'Colorful themed backdrop for kids', isPopular: true },
      { id: 'kyb-lighting', name: 'Lighting', description: 'Bright and colorful lighting' },
      { id: 'kyb-selfie-photobooth', name: 'Selfie Photobooth Decoration', description: 'Kid-friendly photo booth' },
      { id: 'kyb-photography', name: 'Photography', description: 'Professional kids party photography', isPopular: true },
      { id: 'kyb-videography', name: 'Videography', description: 'Complete party video coverage' },
      { id: 'kyb-cinematic-teasers', name: 'Cinematic Teasers', description: 'Fun party highlight videos' },
      { id: 'kyb-food-catering', name: 'Food & Catering', description: 'Kid-friendly catering service', isPopular: true },
      { id: 'kyb-stalls', name: 'Stalls', description: 'Food and activity stalls' },
      { id: 'kyb-cake', name: 'Cake', description: 'Custom themed birthday cake', isPopular: true },
      { id: 'kyb-entertainment-activities', name: 'Entertainment & Activities', description: 'Fun activities for children' },
      { id: 'kyb-face-painting', name: 'Face Painting Artist', description: 'Professional face painting for kids' },
      { id: 'kyb-balloon-twisting', name: 'Balloon Twisting', description: 'Balloon art and twisting entertainment' },
      { id: 'kyb-canvas-painting', name: 'Canvas Painting', description: 'Interactive canvas painting activity' },
      { id: 'kyb-live-keychain', name: 'Live Key Chain Making', description: 'Custom keychain making activity' },
      { id: 'kyb-games-zone', name: 'Games & Game Zone', description: 'Dedicated play area with games', isPopular: true },
      { id: 'kyb-mascots', name: 'Mascots', description: 'Character mascots for entertainment' },
      { id: 'kyb-grand-entry', name: 'Grand Entry', description: 'Special entrance for birthday child' },
      { id: 'kyb-pa-sound', name: 'PA Sound System', description: 'Audio system for announcements' },
      { id: 'kyb-dj', name: 'DJ', description: 'Kid-friendly music and entertainment' },
      { id: 'kyb-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing booth' },
      { id: 'kyb-360-photobooth', name: '360 Degree Photobooth', description: '360-degree video experience' },
      { id: 'kyb-anchor', name: 'Anchor', description: 'Professional kids party host' },
      { id: 'kyb-magician', name: 'Magician', description: 'Magic shows for children' },
      { id: 'kyb-entertainer', name: 'Entertainer', description: 'Professional children entertainer' },
      { id: 'kyb-return-gifts', name: 'Return Gifts', description: 'Fun return gifts for kids' },
      { id: 'kyb-makeup-styling', name: 'Makeup & Styling', description: 'Makeup for family members' },
      { id: 'kyb-led-screen', name: 'LED Screen', description: 'Display screen for videos/photos' },
      { id: 'kyb-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance area' },
      { id: 'kyb-tent-house', name: 'Tent House Materials', description: 'Party infrastructure' },
      { id: 'kyb-generator', name: 'Generator', description: 'Power backup for equipment' }
    ]
  },

  {
    eventId: 'baby-welcoming-event',
    eventName: 'Baby Welcoming Event',
    availableServices: [
      { id: 'bwe-western-backdrop', name: 'Western Style Decoration Backdrop', description: 'Beautiful baby welcoming backdrop', isPopular: true },
      { id: 'bwe-wall-hangings', name: 'Wall Hangings Decoration', description: 'Decorative wall hangings for the event' },
      { id: 'bwe-pathway-decoration', name: 'Pathway Decoration', description: 'Beautiful pathway decoration setup' },
      { id: 'bwe-cake', name: 'Cake', description: 'Special baby welcoming cake' },
      { id: 'bwe-photography', name: 'Photography', description: 'Professional baby welcoming photography', isPopular: true }
    ]
  },

  // SPECIAL DAYS EVENTS
  // SPECIAL DAYS EVENTS
  {
    eventId: 'anniversary',
    eventName: 'Anniversary Celebration',
    availableServices: [
      { id: 'anniv-invitation', name: 'Invitation', description: 'Elegant anniversary invitation cards' },
      { id: 'anniv-western-backdrop', name: 'Western Style Decoration Backdrop', description: 'Modern anniversary backdrop', isPopular: true },
      { id: 'anniv-floral-backdrop', name: 'Floral Style Decoration Backdrop', description: 'Beautiful floral themed backdrop' },
      { id: 'anniv-selfie-photobooth', name: 'Selfie Photobooth Decoration', description: 'Romantic photo booth setup' },
      { id: 'anniv-lighting', name: 'Lighting', description: 'Romantic ambient lighting', isPopular: true },
      { id: 'anniv-photography', name: 'Photography', description: 'Professional anniversary photography', isPopular: true },
      { id: 'anniv-videography', name: 'Videography', description: 'Complete anniversary video coverage' },
      { id: 'anniv-cinematic-teasers', name: 'Cinematic Teasers', description: 'Romantic cinematic highlights' },
      { id: 'anniv-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for guests' },
      { id: 'anniv-food-catering', name: 'Food & Catering', description: 'Special anniversary catering', isPopular: true },
      { id: 'anniv-cake', name: 'Cake', description: 'Custom anniversary celebration cake' },
      { id: 'anniv-makeup-styling', name: 'Makeup & Styling', description: 'Professional styling for couple' },
      { id: 'anniv-return-gifts', name: 'Return Gifts', description: 'Thoughtful anniversary gifts for guests' },
      { id: 'anniv-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and entertainment' },
      { id: 'anniv-grand-entry', name: 'Grand Entry', description: 'Special entrance for anniversary couple' },
      { id: 'anniv-anchor', name: 'Anchor', description: 'Professional event host' },
      { id: 'anniv-dj', name: 'DJ', description: 'Music and entertainment system' },
      { id: 'anniv-pa-sound', name: 'PA Sound System', description: 'Professional audio system' },
      { id: 'anniv-music-sound', name: 'Music & Sound', description: 'Complete sound and music setup' },
      { id: 'anniv-led-screen', name: 'LED Screen', description: 'Display screen for photos and videos' },
      { id: 'anniv-led-dance-floor', name: 'LED Dance Floor', description: 'Illuminated dance area' },
      { id: 'anniv-tent-house', name: 'Tent House Materials', description: 'Event infrastructure and equipment' }
    ]
  },

  {
    eventId: 'festival',
    eventName: 'Festival Celebration',
    availableServices: [
      { id: 'fest-decoration', name: 'Festival Decoration', description: 'Traditional festival decorations', isPopular: true },
      { id: 'fest-cultural-programs', name: 'Cultural Programs', description: 'Traditional cultural performances', isPopular: true },
      { id: 'fest-food-stalls', name: 'Food Stalls', description: 'Traditional festival food stalls' },
      { id: 'fest-photography', name: 'Photography', description: 'Festival celebration photography' },
      { id: 'fest-entertainment', name: 'Entertainment', description: 'Festival entertainment and activities' }
    ]
  },
  {
    eventId: 'graduation',
    eventName: 'Graduation Party',
    availableServices: [
      { id: 'grad-venue-decoration', name: 'Venue Decoration', description: 'Graduation themed decorations', isPopular: true },
      { id: 'grad-photography', name: 'Photography', description: 'Professional graduation photography', isPopular: true },
      { id: 'grad-catering', name: 'Catering', description: 'Graduation celebration catering' },
      { id: 'grad-cake', name: 'Graduation Cake', description: 'Custom graduation themed cake' },
      { id: 'grad-entertainment', name: 'Entertainment', description: 'Graduation party entertainment' }
    ]
  },
  {
    eventId: 'kitty-parties',
    eventName: 'Kitty Parties',
    availableServices: [
      { id: 'kitty-invitation', name: 'Invitation', description: 'Stylish kitty party invitation cards' },
      { id: 'kitty-venue-booking', name: 'Venue Booking', description: 'Perfect venue selection and booking', isPopular: true },
      { id: 'kitty-selfie-booth', name: 'Selfie Booth Decor', description: 'Fun photo booth decoration setup' },
      { id: 'kitty-food-catering', name: 'Food & Catering', description: 'Delicious catering for ladies gathering', isPopular: true },
      { id: 'kitty-entertainment', name: 'Entertainment & Activities', description: 'Engaging activities for group' },
      { id: 'kitty-fun-games', name: 'Fun Games', description: 'Interactive games and activities', isPopular: true },
      { id: 'kitty-music-sound', name: 'Music & Sound', description: 'Background music and sound system' }
    ]
  },

  {
    eventId: 'house-parties',
    eventName: 'House Parties',
    availableServices: [
      { id: 'house-invitation', name: 'Invitation', description: 'Casual house party invitation cards' },
      { id: 'house-food-catering', name: 'Food & Catering', description: 'Home-style catering and snacks', isPopular: true },
      { id: 'house-entertainment', name: 'Entertainment & Activities', description: 'Fun activities for house party' },
      { id: 'house-fun-games', name: 'Fun Games', description: 'Interactive games and entertainment', isPopular: true },
      { id: 'house-music-sound', name: 'Music & Sound', description: 'Music system and playlist setup' }
    ]
  },

  {
    eventId: 'retirement-parties',
    eventName: 'Retirement Parties',
    availableServices: [
      { id: 'retire-invitation', name: 'Invitation', description: 'Elegant retirement celebration invitations' },
      { id: 'retire-western-backdrop', name: 'Western Style Decoration Backdrop', description: 'Professional retirement backdrop' },
      { id: 'retire-floral-backdrop', name: 'Floral Style Decoration Backdrop', description: 'Beautiful floral themed backdrop' },
      { id: 'retire-lighting', name: 'Lighting', description: 'Elegant celebration lighting' },
      { id: 'retire-selfie-photobooth', name: 'Selfie Photobooth Decoration', description: 'Memory-making photo booth setup' },
      { id: 'retire-photography', name: 'Photography', description: 'Professional retirement party photography', isPopular: true },
      { id: 'retire-videography', name: 'Videography', description: 'Complete retirement celebration coverage' },
      { id: 'retire-cinematic-teasers', name: 'Cinematic Teasers', description: 'Career highlight video creation' },
      { id: 'retire-food-catering', name: 'Food & Catering', description: 'Special retirement celebration catering', isPopular: true },
      { id: 'retire-stalls', name: 'Stalls', description: 'Food and refreshment stalls' },
      { id: 'retire-cake', name: 'Cake', description: 'Custom retirement celebration cake' },
      { id: 'retire-entertainment', name: 'Entertainment & Activities', description: 'Celebration activities and programs' },
      { id: 'retire-anchor', name: 'Anchor', description: 'Professional event host and coordinator' },
      { id: 'retire-music-sound', name: 'Music & Sound', description: 'Complete audio and music setup' },
      { id: 'retire-pa-sound', name: 'PA Sound System', description: 'Professional sound system for speeches' },
      { id: 'retire-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for memories' },
      { id: 'retire-360-photobooth', name: '360 Degree Photobooth', description: '360-degree video experience' },
      { id: 'retire-return-gifts', name: 'Return Gifts', description: 'Meaningful retirement celebration gifts' },
      { id: 'retire-makeup-styling', name: 'Makeup & Styling', description: 'Professional styling for retiree' }
    ]
  },

  // CORPORATE EVENTS
  // CORPORATE EVENTS
  {
    eventId: 'conference',
    eventName: 'Conference',
    availableServices: [
      { id: 'conf-venue-booking', name: 'Venue Booking', description: 'Professional conference venue selection', isPopular: true },
      { id: 'conf-av-equipment', name: 'AV Equipment', description: 'Audio-visual equipment and setup', isPopular: true },
      { id: 'conf-registration', name: 'Registration Management', description: 'Attendee registration and check-in' },
      { id: 'conf-catering', name: 'Conference Catering', description: 'Professional meal and refreshment service', isPopular: true },
      { id: 'conf-photography', name: 'Photography', description: 'Professional conference photography' },
      { id: 'conf-live-streaming', name: 'Live Streaming', description: 'Online broadcast of conference sessions' }
    ]
  },
  {
    eventId: 'product-launch',
    eventName: 'Product Launch',
    availableServices: [
      { id: 'pl-venue-setup', name: 'Venue Setup', description: 'Product launch venue arrangement', isPopular: true },
      { id: 'pl-branding', name: 'Branding & Signage', description: 'Corporate branding and promotional materials', isPopular: true },
      { id: 'pl-media-coverage', name: 'Media Coverage', description: 'Press and media coordination' },
      { id: 'pl-photography', name: 'Photography', description: 'Professional product launch photography', isPopular: true },
      { id: 'pl-catering', name: 'Catering', description: 'Corporate catering service' },
      { id: 'pl-entertainment', name: 'Entertainment', description: 'Launch event entertainment' }
    ]
  },
  {
    eventId: 'team-building',
    eventName: 'Team Building',
    availableServices: [
      { id: 'tb-venue-booking', name: 'Venue Booking', description: 'Team building venue selection', isPopular: true },
      { id: 'tb-activities', name: 'Team Building Activities', description: 'Professional team building exercises', isPopular: true },
      { id: 'tb-facilitator', name: 'Professional Facilitator', description: 'Expert team building facilitator' },
      { id: 'tb-catering', name: 'Catering', description: 'Team meal and refreshment service', isPopular: true },
      { id: 'tb-transportation', name: 'Transportation', description: 'Team transportation arrangements' }
    ]
  },
  {
    eventId: 'annual-party',
    eventName: 'Annual Party',
    availableServices: [
      { id: 'corp-invitation', name: 'Invitation', description: 'Professional corporate party invitations' },
      { id: 'corp-themed-backdrop', name: 'Themed Decoration Backdrop', description: 'Corporate branded themed backdrop', isPopular: true },
      { id: 'corp-venue-booking', name: 'Venue Booking', description: 'Professional venue selection and booking', isPopular: true },
      { id: 'corp-selfie-photobooth', name: 'Selfie Photobooth Decoration', description: 'Corporate branded photo booth setup' },
      { id: 'corp-lighting', name: 'Lighting', description: 'Professional event lighting setup' },
      { id: 'corp-led-truss', name: 'LED Truss Setup', description: 'Professional stage lighting truss system', isPopular: true },
      { id: 'corp-led-screen', name: 'LED Screen', description: 'Large display screen for presentations and branding' },
      { id: 'corp-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance floor' },
      { id: 'corp-dj', name: 'DJ', description: 'Professional DJ and music entertainment' },
      { id: 'corp-photography', name: 'Photography', description: 'Professional corporate event photography', isPopular: true },
      { id: 'corp-videography', name: 'Videography', description: 'Complete corporate event video coverage' },
      { id: 'corp-cinematic-teasers', name: 'Cinematic Teasers', description: 'Professional corporate event highlights' },
      { id: 'corp-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing with corporate branding' },
      { id: 'corp-food-catering', name: 'Food & Catering', description: 'Professional corporate catering service', isPopular: true },
      { id: 'corp-bar-counter', name: 'Bar Counter', description: 'Professional beverage service setup' },
      { id: 'corp-entertainment', name: 'Entertainment & Activities', description: 'Corporate entertainment and team activities' },
      { id: 'corp-wooden-games', name: 'Wooden Games & Fun Activities', description: 'Team building wooden games and activities' },
      { id: 'corp-anchor', name: 'Anchor', description: 'Professional corporate event host and MC' },
      { id: 'corp-customized-gifts', name: 'Customized Return Gifts', description: 'Corporate branded return gifts and souvenirs' },
      { id: 'corp-tent-house', name: 'Tent House Materials', description: 'Professional event infrastructure and equipment' }
    ]
  },

  {
    eventId: 'team-day-outings',
    eventName: 'Team Day Outings',
    availableServices: [
      { id: 'team-invitation', name: 'Invitation', description: 'Team outing invitation and communication' },
      { id: 'team-venue-booking', name: 'Venue Booking', description: 'Outdoor venue selection and booking for team activities', isPopular: true },
      { id: 'team-anchor', name: 'Anchor', description: 'Professional team outing coordinator and facilitator' },
      { id: 'team-building-games', name: 'Team Building Games & Activities', description: 'Professional team building exercises and activities', isPopular: true },
      { id: 'team-wooden-games', name: 'Wooden Games & Fun Activities', description: 'Outdoor wooden games and recreational activities' },
      { id: 'team-food-catering', name: 'Food & Catering', description: 'Outdoor catering and meal service for team', isPopular: true },
      { id: 'team-customized-gifts', name: 'Customized Return Gifts', description: 'Team branded gifts and mementos' }
    ]
  },

  {
    eventId: 'team-lunch-dinner',
    eventName: 'Team Lunch/Dinner',
    availableServices: [
      { id: 'lunch-invitation', name: 'Invitation', description: 'Team meal invitation and coordination' },
      { id: 'lunch-food-catering', name: 'Food & Catering', description: 'Professional team meal catering service', isPopular: true },
      { id: 'lunch-venue-booking', name: 'Venue Booking', description: 'Restaurant or venue booking for team meals' },
      { id: 'lunch-games', name: 'Games', description: 'Light entertainment and team bonding games' },
      { id: 'lunch-customized-gifts', name: 'Customized Return Gifts', description: 'Small team appreciation gifts' }
    ]
  },

  {
    eventId: 'daily-catering',
    eventName: 'Daily Catering / Food Boxes',
    availableServices: [
      { id: 'daily-food-catering', name: 'Food & Catering', description: 'Regular daily catering service for offices', isPopular: true },
      { id: 'daily-lunch', name: 'Lunch', description: 'Daily lunch catering and delivery service', isPopular: true },
      { id: 'daily-dinner', name: 'Dinner', description: 'Daily dinner catering and delivery service' },
      { id: 'daily-meal-boxes', name: 'Customized Meal Boxes', description: 'Individual packaged meal boxes with customization', isPopular: true }
    ]
  },

  // COLLEGE EVENTS (All events share common services)
  // COLLEGE EVENTS
  {
    eventId: 'cultural-fest',
    eventName: 'Cultural Festival',
    availableServices: [
      { id: 'cf-stage-setup', name: 'Stage Setup', description: 'Professional stage for performances', isPopular: true },
      { id: 'cf-sound-lighting', name: 'Sound & Lighting', description: 'Professional audio-visual setup', isPopular: true },
      { id: 'cf-decoration', name: 'Festival Decoration', description: 'Cultural festival themed decorations' },
      { id: 'cf-photography', name: 'Photography', description: 'Cultural festival photography', isPopular: true },
      { id: 'cf-catering', name: 'Catering', description: 'Student-friendly catering service', isPopular: true },
      { id: 'cf-coordination', name: 'Event Coordination', description: 'Professional event management' }
    ]
  },
  {
    eventId: 'tech-fest',
    eventName: 'Technical Festival',
    availableServices: [
      { id: 'tf-av-equipment', name: 'AV Equipment', description: 'Advanced audio-visual equipment', isPopular: true },
      { id: 'tf-exhibition-setup', name: 'Exhibition Setup', description: 'Technical exhibition arrangements' },
      { id: 'tf-networking', name: 'Networking Setup', description: 'Technical networking and connectivity' },
      { id: 'tf-photography', name: 'Photography', description: 'Technical festival photography' },
      { id: 'tf-catering', name: 'Catering', description: 'Tech fest catering service', isPopular: true }
    ]
  },
  {
    eventId: 'sports-day',
    eventName: 'Sports Day',
    availableServices: [
      { id: 'sd-ground-setup', name: 'Ground Setup', description: 'Sports ground preparation and setup', isPopular: true },
      { id: 'sd-equipment', name: 'Sports Equipment', description: 'Professional sports equipment rental' },
      { id: 'sd-photography', name: 'Photography', description: 'Sports event photography', isPopular: true },
      { id: 'sd-catering', name: 'Catering', description: 'Sports day refreshments', isPopular: true },
      { id: 'sd-medical-support', name: 'Medical Support', description: 'First aid and medical assistance' }
    ]
  },
  {
    eventId: 'farewell',
    eventName: 'Farewell Party',
    availableServices: [
      { id: 'college-invitation', name: 'Invitation', description: 'Professional college event invitation cards' },
      { id: 'college-themed-backdrop', name: 'Themed Decoration Backdrop', description: 'Custom themed backdrop for college events', isPopular: true },
      { id: 'college-selfie-booth', name: 'Selfie Booth Decoration', description: 'Fun photo booth setup for students' },
      { id: 'college-lighting', name: 'Lighting', description: 'Professional stage and ambient lighting', isPopular: true },
      { id: 'college-led-truss', name: 'LED Truss Setup', description: 'Professional LED truss lighting system' },
      { id: 'college-led-screen', name: 'LED Screen', description: 'Large LED display screen for presentations', isPopular: true },
      { id: 'college-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance floor' },
      { id: 'college-food-catering', name: 'Food & Catering', description: 'Student-friendly catering service', isPopular: true },
      { id: 'college-photography', name: 'Photography', description: 'Professional college event photography', isPopular: true },
      { id: 'college-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for students' },
      { id: 'college-dj', name: 'DJ', description: 'High-energy music and entertainment', isPopular: true },
      { id: 'college-anchor', name: 'Anchor', description: 'Professional event host and MC' },
      { id: 'college-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and performances' },
      { id: 'college-tent-house', name: 'Tent House Materials', description: 'Event infrastructure and equipment' },
      { id: 'college-generator', name: 'Generator', description: 'Power backup for all equipment' }
    ]
  },

  {
    eventId: 'freshers-day',
    eventName: 'Freshers Day',
    availableServices: [
      { id: 'college-invitation', name: 'Invitation', description: 'Professional college event invitation cards' },
      { id: 'college-themed-backdrop', name: 'Themed Decoration Backdrop', description: 'Custom themed backdrop for college events', isPopular: true },
      { id: 'college-selfie-booth', name: 'Selfie Booth Decoration', description: 'Fun photo booth setup for students' },
      { id: 'college-lighting', name: 'Lighting', description: 'Professional stage and ambient lighting', isPopular: true },
      { id: 'college-led-truss', name: 'LED Truss Setup', description: 'Professional LED truss lighting system' },
      { id: 'college-led-screen', name: 'LED Screen', description: 'Large LED display screen for presentations', isPopular: true },
      { id: 'college-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance floor' },
      { id: 'college-food-catering', name: 'Food & Catering', description: 'Student-friendly catering service', isPopular: true },
      { id: 'college-photography', name: 'Photography', description: 'Professional college event photography', isPopular: true },
      { id: 'college-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for students' },
      { id: 'college-dj', name: 'DJ', description: 'High-energy music and entertainment', isPopular: true },
      { id: 'college-anchor', name: 'Anchor', description: 'Professional event host and MC' },
      { id: 'college-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and performances' },
      { id: 'college-tent-house', name: 'Tent House Materials', description: 'Event infrastructure and equipment' },
      { id: 'college-generator', name: 'Generator', description: 'Power backup for all equipment' }
    ]
  },

  {
    eventId: 'farewell-day',
    eventName: 'Farewell Day',
    availableServices: [
      { id: 'college-invitation', name: 'Invitation', description: 'Professional college event invitation cards' },
      { id: 'college-themed-backdrop', name: 'Themed Decoration Backdrop', description: 'Custom themed backdrop for college events', isPopular: true },
      { id: 'college-selfie-booth', name: 'Selfie Booth Decoration', description: 'Fun photo booth setup for students' },
      { id: 'college-lighting', name: 'Lighting', description: 'Professional stage and ambient lighting', isPopular: true },
      { id: 'college-led-truss', name: 'LED Truss Setup', description: 'Professional LED truss lighting system' },
      { id: 'college-led-screen', name: 'LED Screen', description: 'Large LED display screen for presentations', isPopular: true },
      { id: 'college-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance floor' },
      { id: 'college-food-catering', name: 'Food & Catering', description: 'Student-friendly catering service', isPopular: true },
      { id: 'college-photography', name: 'Photography', description: 'Professional college event photography', isPopular: true },
      { id: 'college-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for students' },
      { id: 'college-dj', name: 'DJ', description: 'High-energy music and entertainment', isPopular: true },
      { id: 'college-anchor', name: 'Anchor', description: 'Professional event host and MC' },
      { id: 'college-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and performances' },
      { id: 'college-tent-house', name: 'Tent House Materials', description: 'Event infrastructure and equipment' },
      { id: 'college-generator', name: 'Generator', description: 'Power backup for all equipment' }
    ]
  },

  {
    eventId: 'sports-day',
    eventName: 'Sports Day',
    availableServices: [
      { id: 'college-invitation', name: 'Invitation', description: 'Professional college event invitation cards' },
      { id: 'college-themed-backdrop', name: 'Themed Decoration Backdrop', description: 'Custom themed backdrop for college events', isPopular: true },
      { id: 'college-selfie-booth', name: 'Selfie Booth Decoration', description: 'Fun photo booth setup for students' },
      { id: 'college-lighting', name: 'Lighting', description: 'Professional stage and ambient lighting', isPopular: true },
      { id: 'college-led-truss', name: 'LED Truss Setup', description: 'Professional LED truss lighting system' },
      { id: 'college-led-screen', name: 'LED Screen', description: 'Large LED display screen for presentations', isPopular: true },
      { id: 'college-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance floor' },
      { id: 'college-food-catering', name: 'Food & Catering', description: 'Student-friendly catering service', isPopular: true },
      { id: 'college-photography', name: 'Photography', description: 'Professional college event photography', isPopular: true },
      { id: 'college-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for students' },
      { id: 'college-dj', name: 'DJ', description: 'High-energy music and entertainment', isPopular: true },
      { id: 'college-anchor', name: 'Anchor', description: 'Professional event host and MC' },
      { id: 'college-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and performances' },
      { id: 'college-tent-house', name: 'Tent House Materials', description: 'Event infrastructure and equipment' },
      { id: 'college-generator', name: 'Generator', description: 'Power backup for all equipment' }
    ]
  },

  {
    eventId: 'cultural-day',
    eventName: 'Cultural Day',
    availableServices: [
      { id: 'college-invitation', name: 'Invitation', description: 'Professional college event invitation cards' },
      { id: 'college-themed-backdrop', name: 'Themed Decoration Backdrop', description: 'Custom themed backdrop for college events', isPopular: true },
      { id: 'college-selfie-booth', name: 'Selfie Booth Decoration', description: 'Fun photo booth setup for students' },
      { id: 'college-lighting', name: 'Lighting', description: 'Professional stage and ambient lighting', isPopular: true },
      { id: 'college-led-truss', name: 'LED Truss Setup', description: 'Professional LED truss lighting system' },
      { id: 'college-led-screen', name: 'LED Screen', description: 'Large LED display screen for presentations', isPopular: true },
      { id: 'college-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance floor' },
      { id: 'college-food-catering', name: 'Food & Catering', description: 'Student-friendly catering service', isPopular: true },
      { id: 'college-photography', name: 'Photography', description: 'Professional college event photography', isPopular: true },
      { id: 'college-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for students' },
      { id: 'college-dj', name: 'DJ', description: 'High-energy music and entertainment', isPopular: true },
      { id: 'college-anchor', name: 'Anchor', description: 'Professional event host and MC' },
      { id: 'college-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and performances' },
      { id: 'college-tent-house', name: 'Tent House Materials', description: 'Event infrastructure and equipment' },
      { id: 'college-generator', name: 'Generator', description: 'Power backup for all equipment' }
    ]
  },

  {
    eventId: 'prom-day',
    eventName: 'Prom Day',
    availableServices: [
      { id: 'college-invitation', name: 'Invitation', description: 'Professional college event invitation cards' },
      { id: 'college-themed-backdrop', name: 'Themed Decoration Backdrop', description: 'Custom themed backdrop for college events', isPopular: true },
      { id: 'college-selfie-booth', name: 'Selfie Booth Decoration', description: 'Fun photo booth setup for students' },
      { id: 'college-lighting', name: 'Lighting', description: 'Professional stage and ambient lighting', isPopular: true },
      { id: 'college-led-truss', name: 'LED Truss Setup', description: 'Professional LED truss lighting system' },
      { id: 'college-led-screen', name: 'LED Screen', description: 'Large LED display screen for presentations', isPopular: true },
      { id: 'college-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance floor' },
      { id: 'college-food-catering', name: 'Food & Catering', description: 'Student-friendly catering service', isPopular: true },
      { id: 'college-photography', name: 'Photography', description: 'Professional college event photography', isPopular: true },
      { id: 'college-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for students' },
      { id: 'college-dj', name: 'DJ', description: 'High-energy music and entertainment', isPopular: true },
      { id: 'college-anchor', name: 'Anchor', description: 'Professional event host and MC' },
      { id: 'college-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and performances' },
      { id: 'college-tent-house', name: 'Tent House Materials', description: 'Event infrastructure and equipment' },
      { id: 'college-generator', name: 'Generator', description: 'Power backup for all equipment' }
    ]
  },

  {
    eventId: 'convocation-day',
    eventName: 'Convocation Day',
    availableServices: [
      { id: 'college-invitation', name: 'Invitation', description: 'Professional college event invitation cards' },
      { id: 'college-themed-backdrop', name: 'Themed Decoration Backdrop', description: 'Custom themed backdrop for college events', isPopular: true },
      { id: 'college-selfie-booth', name: 'Selfie Booth Decoration', description: 'Fun photo booth setup for students' },
      { id: 'college-lighting', name: 'Lighting', description: 'Professional stage and ambient lighting', isPopular: true },
      { id: 'college-led-truss', name: 'LED Truss Setup', description: 'Professional LED truss lighting system' },
      { id: 'college-led-screen', name: 'LED Screen', description: 'Large LED display screen for presentations', isPopular: true },
      { id: 'college-led-dance-floor', name: 'LED Dance Floor', description: 'Interactive LED dance floor' },
      { id: 'college-food-catering', name: 'Food & Catering', description: 'Student-friendly catering service', isPopular: true },
      { id: 'college-photography', name: 'Photography', description: 'Professional college event photography', isPopular: true },
      { id: 'college-instant-photobooth', name: 'Instant Photobooth', description: 'Instant photo printing for students' },
      { id: 'college-dj', name: 'DJ', description: 'High-energy music and entertainment', isPopular: true },
      { id: 'college-anchor', name: 'Anchor', description: 'Professional event host and MC' },
      { id: 'college-entertainment', name: 'Entertainment & Activities', description: 'Fun activities and performances' },
      { id: 'college-tent-house', name: 'Tent House Materials', description: 'Event infrastructure and equipment' },
      { id: 'college-generator', name: 'Generator', description: 'Power backup for all equipment' }
    ]
  }
];