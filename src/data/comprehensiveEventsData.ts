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

export const comprehensiveEventsData: EventCategory[] = [
  {
    id: 'wedding-events',
    name: 'Wedding Related Events',
    description: 'Complete wedding celebration services from engagement to reception',
    image: '/images/categories/wedding.jpg',
    events: [
      {
        eventId: 'engagement',
        eventName: 'Engagement',
        description: 'Beautiful engagement ceremony with traditional and modern elements',
        estimatedBudget: { min: 50000, max: 200000 },
        coreServices: [
          { 
            id: 'invitation', 
            name: 'Invitation', 
            category: 'core',
            description: 'Custom designed engagement invitations with premium printing',
            estimatedPrice: { min: 3000, max: 8000 }
          },
          { 
            id: 'decor-flower-backdrop-sofa', 
            name: 'Décor flower backdrop + Sofa', 
            category: 'core',
            description: 'Elegant floral backdrop with comfortable seating arrangement',
            estimatedPrice: { min: 15000, max: 35000 }
          },
          { 
            id: 'flower-varmalas', 
            name: 'Flower Varmalas', 
            category: 'core',
            description: 'Fresh flower garlands for the couple',
            estimatedPrice: { min: 2000, max: 5000 }
          },
          { 
            id: 'photography', 
            name: 'Photography', 
            category: 'core',
            description: 'Professional photography covering all moments',
            estimatedPrice: { min: 15000, max: 40000 }
          },
          { 
            id: 'food-catering', 
            name: 'Food Catering', 
            category: 'core',
            description: 'Multi-cuisine catering with variety of dishes',
            estimatedPrice: { min: 20000, max: 60000 }
          },
          { 
            id: 'led-food-counters', 
            name: 'LED Food Counters', 
            category: 'core',
            description: 'Illuminated food serving counters for elegant presentation',
            estimatedPrice: { min: 8000, max: 15000 }
          }
        ],
        extraServices: [
          { 
            id: 'pandit', 
            name: 'Pandit', 
            category: 'extra',
            description: 'Experienced priest for traditional ceremonies',
            estimatedPrice: { min: 2000, max: 5000 }
          },
          { 
            id: 'makeup-artist', 
            name: 'Makeup Artist', 
            category: 'extra',
            description: 'Professional makeup and styling services',
            estimatedPrice: { min: 5000, max: 15000 }
          },
          { 
            id: 'mehendi-artist', 
            name: 'Mehendi Artist', 
            category: 'extra',
            description: 'Traditional henna art for hands and feet',
            estimatedPrice: { min: 3000, max: 8000 }
          },
          { 
            id: 'rings-tray-hampers', 
            name: 'Rings tray/hampers/basket', 
            category: 'extra',
            description: 'Decorative trays and gift hampers for ring ceremony',
            estimatedPrice: { min: 1500, max: 4000 }
          },
          { 
            id: 'entry-all-types', 
            name: 'Entry (all types)', 
            category: 'extra',
            description: 'Grand entrance arrangements with various themes',
            estimatedPrice: { min: 8000, max: 25000 }
          },
          { 
            id: 'dj-sound-system', 
            name: 'DJ/Sound System', 
            category: 'extra',
            description: 'Professional DJ with high-quality sound equipment',
            estimatedPrice: { min: 8000, max: 20000 }
          },
          { 
            id: 'led-screen', 
            name: 'LED Screen', 
            category: 'extra',
            description: 'Large LED display for photos and videos',
            estimatedPrice: { min: 10000, max: 25000 }
          },
          { 
            id: 'anchor', 
            name: 'Anchor', 
            category: 'extra',
            description: 'Professional event host and master of ceremonies',
            estimatedPrice: { min: 5000, max: 12000 }
          },
          { 
            id: 'return-gifts', 
            name: 'Return Gifts', 
            category: 'extra',
            description: 'Customized gifts for guests as mementos',
            estimatedPrice: { min: 3000, max: 10000 }
          },
          { 
            id: 'hair-flower-accessories', 
            name: 'Hair flower accessories', 
            category: 'extra',
            description: 'Fresh flower jewelry and hair decorations',
            estimatedPrice: { min: 2000, max: 6000 }
          },
          { 
            id: 'decorative-plates', 
            name: 'Decorative plates for fruits, sweets, items etc', 
            category: 'extra',
            description: 'Elegant serving plates and decorative items',
            estimatedPrice: { min: 1500, max: 4000 }
          },
          { 
            id: 'cake', 
            name: 'Cake', 
            category: 'extra',
            description: 'Custom designed celebration cake',
            estimatedPrice: { min: 2000, max: 8000 }
          },
          { 
            id: 'entertainment-activities', 
            name: 'Entertainment activities - Bangle making, mehendi stall etc', 
            category: 'extra',
            description: 'Interactive entertainment stalls and activities',
            estimatedPrice: { min: 5000, max: 15000 }
          },
          { 
            id: 'tent-house-material', 
            name: 'Tent house material', 
            category: 'extra',
            description: 'Tents, chairs, tables and other event furniture',
            estimatedPrice: { min: 10000, max: 30000 }
          },
          { 
            id: 'generator', 
            name: 'Generator', 
            category: 'extra',
            description: 'Backup power supply for uninterrupted celebrations',
            estimatedPrice: { min: 3000, max: 8000 }
          },
          { 
            id: 'car-parking', 
            name: 'Car Parking', 
            category: 'extra',
            description: 'Organized parking arrangements for guests',
            estimatedPrice: { min: 2000, max: 5000 }
          }
        ]
      },
      {
        eventId: 'haldi',
        eventName: 'Haldi',
        description: 'Traditional haldi ceremony with vibrant decorations and rituals',
        estimatedBudget: { min: 25000, max: 80000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'decor-flower-backdrop-rangoli', name: 'Décor flower backdrop + Rangoli + Gangalalu + Stools', category: 'core' },
          { id: 'flower-varmalas', name: 'Flower Varmalas', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'flower-hair-jewellery', name: 'Flower Hair and jewellery accessories', category: 'core' }
        ],
        extraServices: [
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'mehendi-artist', name: 'Mehendi Artist', category: 'extra' },
          { id: 'kurtas', name: 'Kurtas', category: 'extra' },
          { id: 'pagdis', name: 'Pagdis', category: 'extra' },
          { id: 'sunglasses', name: 'Sunglasses', category: 'extra' },
          { id: 'punjabi-dhol', name: 'Punjabi Dhol', category: 'extra' },
          { id: 'dj-sound-system', name: 'DJ/Sound System', category: 'extra' },
          { id: 'fun-games-stalls', name: 'Fun Games - Stalls', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: 'home-lighting-pandiri', name: 'Home lighting and Pandiri, Décor', category: 'extra' },
          { id: 'rokali-haldi-danchadam', name: 'Rokali Haldi Danchadam', category: 'extra' }
        ]
      },
      {
        eventId: 'mehendi',
        eventName: 'Mehendi',
        description: 'Colorful mehendi ceremony with traditional decorations and entertainment',
        estimatedBudget: { min: 30000, max: 100000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'decor-flower-backdrop-sofa', name: 'Décor flower backdrop + Sofa + Deewan Setup + Cushions', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'flower-hair-jewellery', name: 'Flower Hair and jewellery accessories', category: 'core' }
        ],
        extraServices: [
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'mehendi-artist', name: 'Mehendi Artist', category: 'extra' },
          { id: 'led-dance-floor', name: 'LED Dance Floor', category: 'extra' },
          { id: 'dj-sound-system', name: 'DJ/Sound System', category: 'extra' },
          { id: 'fun-games-stalls', name: 'Fun Games - Stalls', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: 'home-lighting-pandiri', name: 'Home lighting and Pandiri, Décor', category: 'extra' }
        ]
      },
      {
        eventId: 'pellikuthuru-pellikoduku',
        eventName: 'Pellikuthuru/Pellikoduku',
        description: 'Traditional pre-wedding ceremony for bride and groom',
        estimatedBudget: { min: 35000, max: 90000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'decor-flower-backdrop-sofa', name: 'Décor flower backdrop + Sofa + Deewan Setup + Cushions', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'flower-varmala', name: 'Flower Varmala', category: 'core' }
        ],
        extraServices: [
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'mehendi-artist', name: 'Mehendi Artist', category: 'extra' },
          { id: 'flower-hair-jewellery', name: 'Flower Hair and jewellery accessories', category: 'extra' },
          { id: 'decorative-plates', name: 'Decorative plates for fruits, sweets, items etc', category: 'extra' },
          { id: 'return-gifts', name: 'Return Gifts', category: 'extra' },
          { id: 'nadaswaram', name: 'Nadaswaram', category: 'extra' },
          { id: 'well-baavi-water', name: 'Well (Baavi water cutout)', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: 'home-lighting-pandiri', name: 'Home lighting and Pandiri, Décor', category: 'extra' }
        ]
      },
      {
        eventId: 'sangeeth',
        eventName: 'Sangeeth',
        description: 'Musical night with dance, entertainment and grand celebrations',
        estimatedBudget: { min: 80000, max: 300000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'trendy-backdrop-led', name: 'Trendy Backdrop/LED Screen, Truss', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering-led', name: 'Food Catering, LED Food Counters', category: 'core' },
          { id: 'led-dance-floor', name: 'LED Dance Floor', category: 'core' },
          { id: 'dj', name: 'DJ', category: 'core' }
        ],
        extraServices: [
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'bar-counter', name: 'Bar counter', category: 'extra' },
          { id: 'photobooth', name: 'Photobooth', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: 'entry-dancers', name: 'Entry + Dancers', category: 'extra' },
          { id: 'choreographer', name: 'Choreographer', category: 'extra' },
          { id: 'entry-effects', name: 'Entry - Fog shots, cold fires, Paper blasts', category: 'extra' },
          { id: 'couple-seating', name: 'Couple Seating', category: 'extra' },
          { id: 'dance-props', name: 'Dance props/materials', category: 'extra' },
          { id: 'photobooth-props', name: 'Photobooth props', category: 'extra' },
          { id: 'generator', name: 'Generator', category: 'extra' },
          { id: '360-selfie-booth', name: '360 degree selfie booth/Instant Photobooth', category: 'extra' },
          { id: 'car-parking', name: 'Car Parking', category: 'extra' }
        ]
      },
      {
        eventId: 'bachelor-bridal-shower',
        eventName: "Bachelor's/Bridal Shower",
        description: 'Fun pre-wedding celebration with friends and family',
        estimatedBudget: { min: 25000, max: 75000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'balloon-decor-backdrop', name: 'Balloon Décor Backdrop', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'cake', name: 'Cake', category: 'core' },
          { id: 'sash-crown', name: 'Sash/crown', category: 'core' }
        ],
        extraServices: [
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'bar-counter', name: 'Bar counter', category: 'extra' },
          { id: 'photobooth', name: 'Photobooth', category: 'extra' },
          { id: 'photobooth-props', name: 'Photobooth Props', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: '360-selfie-booth', name: '360 degree selfie booth/Instant Photobooth', category: 'extra' },
          { id: 'led-dance-floor', name: 'LED Dance floor', category: 'extra' },
          { id: 'dj', name: 'DJ', category: 'extra' }
        ]
      },
      {
        eventId: 'wedding-bharath',
        eventName: 'Wedding, Bharath',
        description: 'Main wedding ceremony with all traditional rituals and celebrations',
        estimatedBudget: { min: 150000, max: 500000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'flower-decor-mandapam', name: 'Flower Décor Mandapam + Sofa + Stools', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering-led', name: 'Food Catering, LED Counters', category: 'core' },
          { id: 'pandit', name: 'Pandit', category: 'core' },
          { id: 'flower-varmalas', name: 'Flower Varmalas', category: 'core' },
          { id: 'dj', name: 'DJ', category: 'core' },
          { id: 'nadaswaram', name: 'Nadaswaram', category: 'core' },
          { id: 'rituals-materials', name: 'Rituals materials/items - Rice, Couple Games etc', category: 'core' }
        ],
        extraServices: [
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'kollatam-dandiya', name: 'Kollatam/Dandiya, Dandiya sticks', category: 'extra' },
          { id: 'orchestra', name: 'Orchestra', category: 'extra' },
          { id: 'entry', name: 'Entry', category: 'extra' },
          { id: 'led-screen', name: 'LED Screen', category: 'extra' },
          { id: 'decorative-items', name: 'Decorative items - Curtain, Coconut, Umbrella etc', category: 'extra' },
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'home-pandiri-decor', name: 'Home Pandiri, Décor', category: 'extra' },
          { id: 'home-lighting', name: 'Home Lighting', category: 'extra' },
          { id: 'car-parking', name: 'Car Parking', category: 'extra' },
          { id: 'instant-photobooth', name: 'Instant Photobooth', category: 'extra' },
          { id: 'pallaki-flower-chaddar', name: 'Pallaki, Flower Chaddar', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent House Material', category: 'extra' },
          { id: 'hair-flower-accessories', name: 'Hair Flower Accessories', category: 'extra' },
          { id: 'car-decoration', name: 'Car Decoration', category: 'extra' },
          { id: 'horses-buggy', name: 'Horses (Buggy) - Bharath', category: 'extra' },
          { id: 'punjabi-dhol', name: 'Punjabi Dhol', category: 'extra' },
          { id: 'cake', name: 'Cake', category: 'extra' },
          { id: 'pagdis', name: 'Pagdis', category: 'extra' }
        ]
      },
      {
        eventId: 'reception',
        eventName: 'Reception',
        description: 'Grand reception celebration with entertainment and dining',
        estimatedBudget: { min: 100000, max: 400000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'flower-decor-mandapam', name: 'Flower Décor Mandapam + Sofa', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering-led', name: 'Food Catering, LED Counters', category: 'core' }
        ],
        extraServices: [
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'dj', name: 'DJ', category: 'extra' },
          { id: 'led-dance-floor', name: 'LED Dance Floor', category: 'extra' },
          { id: 'entry', name: 'Entry', category: 'extra' },
          { id: 'entry-dancers', name: 'Entry Dancers', category: 'extra' },
          { id: 'entry-types', name: 'Entry Types - Fire, Fog etc', category: 'extra' },
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'instant-photobooth', name: 'Instant Photobooth/360 degree selfie booth', category: 'extra' },
          { id: 'home-lighting', name: 'Home Lighting', category: 'extra' },
          { id: 'car-parking', name: 'Car Parking', category: 'extra' },
          { id: 'fun-activities', name: 'Any Fun Activities', category: 'extra' },
          { id: 'generator', name: 'Generator', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent House Material', category: 'extra' },
          { id: 'hair-flower-accessories', name: 'Hair Flower Accessories', category: 'extra' },
          { id: 'car-decoration', name: 'Car Decoration', category: 'extra' },
          { id: 'led-screen', name: 'LED Screen', category: 'extra' }
        ]
      }
    ]
  },
  {
    id: 'house-warming',
    name: 'House Warming',
    description: 'Traditional house warming ceremonies with complete setup',
    image: '/images/categories/housewarming.jpg',
    events: [
      {
        eventId: 'house-warming',
        eventName: 'House Warming',
        description: 'Complete house warming ceremony with traditional decorations and rituals',
        estimatedBudget: { min: 40000, max: 120000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'decoration-comprehensive', name: 'Decoration: Flower Décor Backdrop, GOD room, Doors, Windows, Balcony, Staircase, Railing, Main Gate', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'pooja-vratam-setup', name: 'Pooja Vratam Setup', category: 'core' },
          { id: 'pandit', name: 'Pandit', category: 'core' },
          { id: 'pooja-material', name: 'Pooja Material', category: 'core' },
          { id: 'flower-varmalas', name: 'Flower Varmalas', category: 'core' }
        ],
        extraServices: [
          { id: 'home-lighting', name: 'Home Lighting', category: 'extra' },
          { id: 'home-pandiri', name: 'Home Pandiri', category: 'extra' },
          { id: 'return-gifts', name: 'Return Gifts', category: 'extra' },
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent House Material', category: 'extra' },
          { id: 'mehendi-artist', name: 'Mehendi Artist', category: 'extra' },
          { id: 'nadaswaram', name: 'Nadaswaram', category: 'extra' },
          { id: 'cow', name: 'Cow', category: 'extra' }
        ]
      }
    ]
  },
  {
    id: 'baby-events',
    name: 'Baby Events',
    description: 'Celebrating new life with traditional and modern baby ceremonies',
    image: '/images/categories/baby-events.jpg',
    events: [
      {
        eventId: 'sreemamtham-baby-shower',
        eventName: 'Sreemamtham/Baby Shower',
        description: 'Traditional baby shower ceremony with decorations and celebrations',
        estimatedBudget: { min: 30000, max: 100000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'decoration-flower-balloon', name: 'Decoration: Flower Décor Backdrop, Balloon Backdrop, Sofa', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'decorative-plates-hampers', name: 'Decorative plates/Hampers for fruits, sweets, items', category: 'core' },
          { id: 'pandit', name: 'Pandit', category: 'core' },
          { id: 'pooja-material', name: 'Pooja Material', category: 'core' },
          { id: 'flower-varmalas', name: 'Flower Varmalas', category: 'core' }
        ],
        extraServices: [
          { id: 'dolls', name: 'Dolls', category: 'extra' },
          { id: 'fun-games', name: 'Fun Games', category: 'extra' },
          { id: 'return-gifts', name: 'Return Gifts', category: 'extra' },
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent House Material', category: 'extra' },
          { id: 'mehendi-artist', name: 'Mehendi Artist', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'dj-sound-system', name: 'DJ/Sound System', category: 'extra' },
          { id: 'entertainment-activity', name: 'Any Entertainment activity - Bangle making etc', category: 'extra' },
          { id: 'instant-photobooth', name: 'Instant Photobooth', category: 'extra' },
          { id: 'cake', name: 'Cake', category: 'extra' }
        ]
      },
      {
        eventId: 'cradle-ceremony',
        eventName: 'Cradle Ceremony/Naming Ceremony',
        description: 'Traditional naming ceremony with cradle decorations and celebrations',
        estimatedBudget: { min: 25000, max: 80000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'decoration-cradle', name: 'Decoration: Flower Décor Backdrop/Balloon Backdrop + Sofa + Cradle & Cradle Décor', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'decorative-plates-hampers', name: 'Decorative plates/Hampers for fruits, sweets, items', category: 'core' },
          { id: 'pandit', name: 'Pandit', category: 'core' },
          { id: 'pooja-material', name: 'Pooja Material', category: 'core' },
          { id: 'flower-varmalas', name: 'Flower Varmalas', category: 'core' }
        ],
        extraServices: [
          { id: 'dolls', name: 'Dolls', category: 'extra' },
          { id: 'fun-games', name: 'Fun Games', category: 'extra' },
          { id: 'return-gifts', name: 'Return Gifts', category: 'extra' },
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent House Material', category: 'extra' },
          { id: 'mehendi-artist', name: 'Mehendi Artist', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'dj-sound-system', name: 'DJ/Sound System', category: 'extra' },
          { id: 'name-revealing-setup', name: 'Name revealing Setup', category: 'extra' },
          { id: 'led-screen', name: 'LED Screen', category: 'extra' },
          { id: 'entry', name: 'Entry', category: 'extra' },
          { id: 'entry-types', name: 'Entry Types', category: 'extra' }
        ]
      },
      {
        eventId: 'annaprasana',
        eventName: 'Annaprasana Ceremony',
        description: 'First rice feeding ceremony with traditional setup',
        estimatedBudget: { min: 20000, max: 60000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'flower-decor-backdrop', name: 'Flower Décor Backdrop', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'decorative-plates-hampers', name: 'Decorative plates/Hampers for fruits, sweets, items', category: 'core' },
          { id: 'pandit', name: 'Pandit', category: 'core' },
          { id: 'pooja-material', name: 'Pooja Material', category: 'core' },
          { id: 'flower-varmalas', name: 'Flower Varmalas', category: 'core' }
        ],
        extraServices: [
          { id: 'touching-items-baby', name: 'Touching items by the baby, mat for baby to crawl', category: 'extra' },
          { id: 'return-gifts', name: 'Return Gifts', category: 'extra' },
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent House Material', category: 'extra' },
          { id: 'mehendi-artist', name: 'Mehendi Artist', category: 'extra' }
        ]
      },
      {
        eventId: 'baby-welcoming',
        eventName: 'Baby Welcoming Home Event',
        description: 'Welcome baby home with beautiful decorations',
        estimatedBudget: { min: 15000, max: 40000 },
        coreServices: [
          { id: 'balloon-backdrop-home', name: 'Balloon Backdrop and Home balloon hangings and décor, pathway', category: 'core' },
          { id: 'cake', name: 'Cake', category: 'core' }
        ],
        extraServices: [
          { id: 'photography', name: 'Photography', category: 'extra' }
        ]
      }
    ]
  }
];// 

const remainingEventCategories: EventCategory[] = [
  {
    id: 'birthdays',
    name: 'Birthdays',
    description: 'Memorable birthday celebrations for all ages',
    image: '/images/categories/birthdays.jpg',
    events: [
      {
        eventId: 'first-year-birthday',
        eventName: '1st Year Birthday/Yearly Birthdays',
        description: 'Special birthday celebrations with theme decorations and entertainment',
        estimatedBudget: { min: 25000, max: 150000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'theme-birthday-decor', name: 'Theme Birthday Décor', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering-snacks', name: 'Food Catering/Snacks', category: 'core' },
          { id: 'return-gifts', name: 'Return Gifts', category: 'core' },
          { id: 'cake', name: 'Cake', category: 'core' }
        ],
        extraServices: [
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'entertainment-activities', name: 'Entertainment Activities - Stalls, Games, Entertainers, Artists, Mascots, Bouncy etc', category: 'extra' },
          { id: 'instant-photobooth', name: 'Instant Photobooth/360 Degree Photobooth', category: 'extra' },
          { id: 'anchor-magician', name: 'Anchor/Magician', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: 'entry', name: 'Entry', category: 'extra' },
          { id: 'dj-sound-system', name: 'DJ/Sound System', category: 'extra' },
          { id: 'entry-effects', name: 'Entry - Fog shots, cold fires, Paper blasts', category: 'extra' },
          { id: 'photobooth-props', name: 'Photobooth props', category: 'extra' },
          { id: 'generator', name: 'Generator', category: 'extra' },
          { id: 'car-parking', name: 'Car Parking', category: 'extra' },
          { id: 'led-food-counters', name: 'LED Food Counters', category: 'extra' },
          { id: 'led-screen', name: 'LED Screen', category: 'extra' },
          { id: 'live-band', name: 'Live Band', category: 'extra' },
          { id: 'live-musical-instruments', name: 'Live Musical Instruments', category: 'extra' }
        ]
      }
    ]
  },
  {
    id: 'anniversaries',
    name: 'Anniversaries',
    description: 'Romantic anniversary celebrations and milestone commemorations',
    image: '/images/categories/anniversaries.jpg',
    events: [
      {
        eventId: 'wedding-anniversary',
        eventName: '1st Year Anniversary/Yearly Anniversaries',
        description: 'Romantic anniversary celebrations with personalized touches',
        estimatedBudget: { min: 20000, max: 100000 },
        coreServices: [
          { id: 'flower-balloon-backdrop', name: 'Flower/Balloon Backdrop, Pathway', category: 'core' },
          { id: 'food-candle-dinner', name: 'Food Candle Light Dinner', category: 'core' },
          { id: 'cake', name: 'Cake', category: 'core' },
          { id: 'bouquet', name: 'Bouquet', category: 'core' }
        ],
        extraServices: [
          { id: 'invitation', name: 'Invitation', category: 'extra' },
          { id: 'photography', name: 'Photography', category: 'extra' },
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'food-catering', name: 'Food Catering', category: 'extra' },
          { id: 'instant-photobooth', name: 'Instant Photobooth', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: 'entry', name: 'Entry', category: 'extra' },
          { id: 'dj-sound-system', name: 'DJ/Sound System', category: 'extra' },
          { id: 'entry-effects', name: 'Entry - Fog shots, cold fires, paper blasts', category: 'extra' },
          { id: 'photobooth-props', name: 'Photobooth props', category: 'extra' },
          { id: 'musical-instruments', name: 'Musical Instruments Performance', category: 'extra' },
          { id: 'pooja-traditional', name: 'If traditional - Pooja and Pooja Material Requirement', category: 'extra' },
          { id: 'return-gifts', name: 'Return Gifts', category: 'extra' },
          { id: 'generator', name: 'Generator', category: 'extra' }
        ]
      }
    ]
  },
  {
    id: 'half-saree-dhoti',
    name: 'Half Saree/Dhoti Ceremony',
    description: 'Traditional coming-of-age ceremonies with cultural significance',
    image: '/images/categories/half-saree.jpg',
    events: [
      {
        eventId: 'half-saree-dhoti',
        eventName: 'Half Saree/Saree/Dhoti Ceremony',
        description: 'Traditional ceremony marking the transition to adulthood',
        estimatedBudget: { min: 40000, max: 150000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'flower-decor-backdrop', name: 'Flower Décor Backdrop + Sofa', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'decorative-plates-hampers', name: 'Decorative plates/Hampers for fruits, sweets, items', category: 'core' },
          { id: 'pandit', name: 'Pandit', category: 'core' },
          { id: 'pooja-material', name: 'Pooja Material', category: 'core' },
          { id: 'flower-varmalas', name: 'Flower Varmalas', category: 'core' }
        ],
        extraServices: [
          { id: 'dolls', name: 'Dolls', category: 'extra' },
          { id: 'fun-games', name: 'Fun Games', category: 'extra' },
          { id: 'return-gifts', name: 'Return Gifts', category: 'extra' },
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent House Material', category: 'extra' },
          { id: 'mehendi-artist', name: 'Mehendi Artist', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'led-dance-floor', name: 'LED Dance Floor', category: 'extra' },
          { id: 'led-screen', name: 'LED Screen', category: 'extra' },
          { id: 'kollatam-dandiya', name: 'Kollatam/Dandiya, Dandiya sticks', category: 'extra' },
          { id: 'dj-sound-system', name: 'DJ/Sound System', category: 'extra' },
          { id: 'entertainment-activity', name: 'Any Entertainment activity - Bangle making etc', category: 'extra' },
          { id: 'led-food-counters', name: 'LED Food Counters', category: 'extra' },
          { id: 'instant-photobooth', name: 'Instant Photobooth', category: 'extra' },
          { id: 'entry', name: 'Entry', category: 'extra' },
          { id: 'entry-dancers', name: 'Entry Dancers', category: 'extra' },
          { id: 'entry-types', name: 'Entry Types', category: 'extra' },
          { id: 'cake', name: 'Cake', category: 'extra' },
          { id: 'generator', name: 'Generator', category: 'extra' },
          { id: 'car-parking', name: 'Car Parking', category: 'extra' },
          { id: 'haldi-event', name: 'Haldi Event and its requirements', category: 'extra' }
        ]
      }
    ]
  },
  {
    id: 'college-events',
    name: 'College Events',
    description: 'Educational institution events and celebrations',
    image: '/images/categories/college-events.jpg',
    events: [
      {
        eventId: 'college-events',
        eventName: 'College Events - Annual Day, Sports Day, Cultural Events, Fresher\'s Day, Farewell Day, Convocation',
        description: 'Complete college event management with modern setups',
        estimatedBudget: { min: 50000, max: 200000 },
        coreServices: [
          { id: 'trendy-backdrop-led', name: 'Trendy Backdrop/LED Screen, Truss/Theme Backdrop', category: 'core' }
        ],
        extraServices: [
          { id: 'invitation', name: 'Invitation', category: 'extra' },
          { id: 'food-catering-snacks', name: 'Food Catering/Snacks', category: 'extra' },
          { id: 'photographer', name: 'Photographer', category: 'extra' },
          { id: 'photobooth', name: 'Photobooth', category: 'extra' },
          { id: 'dj', name: 'DJ', category: 'extra' },
          { id: 'led-screen', name: 'LED Screen', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: 'entertainment-activities', name: 'Any Entertainment Activity/Games', category: 'extra' }
        ]
      }
    ]
  },
  {
    id: 'corporate-events',
    name: 'Corporate Events',
    description: 'Professional corporate event management and team building',
    image: '/images/categories/corporate-events.jpg',
    events: [
      {
        eventId: 'corporate-events',
        eventName: 'Corporate Events - Office Openings, Team Lunches & Dinners, Corporate Parties, Day Outings',
        description: 'Professional corporate event solutions with complete management',
        estimatedBudget: { min: 30000, max: 300000 },
        coreServices: [
          { id: 'theme-decor', name: 'Theme Decor', category: 'core' },
          { id: 'flex-backdrop-led', name: 'Flex Backdrop/LED Screen', category: 'core' },
          { id: 'sound-system', name: 'Sound System', category: 'core' },
          { id: 'food-catering-comprehensive', name: 'Food Catering/Snacks/Outside Lunch/Dinner', category: 'core' }
        ],
        extraServices: [
          { id: 'invitation', name: 'Invitation', category: 'extra' },
          { id: 'photographer', name: 'Photographer', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: 'entertainment-activities', name: 'Any Entertainment Activity/Games', category: 'extra' },
          { id: 'team-building', name: 'Team Building Activities', category: 'extra' },
          { id: 'awards', name: 'Awards', category: 'extra' },
          { id: 'customised-gifts', name: 'Customised Gifts/Return Gifts', category: 'extra' },
          { id: 'dj', name: 'DJ', category: 'extra' },
          { id: 'stationary-items', name: 'Stationary Items - Paper Pads, Pens etc', category: 'extra' },
          { id: 'transport-service', name: 'Transport Service', category: 'extra' }
        ]
      }
    ]
  },
  {
    id: 'special-days',
    name: 'Special Days',
    description: 'Unique celebrations and special occasion events',
    image: '/images/categories/special-days.jpg',
    events: [
      {
        eventId: 'special-days',
        eventName: 'Special Days - Surprise Parties, Kitty Parties, House Parties, Candle Light Dinners, Valentines/Proposal, Retirement',
        description: 'Personalized celebrations for special occasions and milestones',
        estimatedBudget: { min: 15000, max: 100000 },
        coreServices: [
          { id: 'invitation', name: 'Invitation', category: 'core' },
          { id: 'balloon-backdrop-sofa', name: 'Balloon Backdrop + Sofa/Chair', category: 'core' },
          { id: 'photography', name: 'Photography', category: 'core' },
          { id: 'food-catering', name: 'Food Catering', category: 'core' },
          { id: 'return-gifts', name: 'Return Gifts', category: 'core' },
          { id: 'cake', name: 'Cake', category: 'core' }
        ],
        extraServices: [
          { id: 'makeup-artist', name: 'Makeup Artist', category: 'extra' },
          { id: 'instant-photobooth', name: 'Instant Photobooth/360 Degree Photobooth', category: 'extra' },
          { id: 'anchor', name: 'Anchor', category: 'extra' },
          { id: 'tent-house-material', name: 'Tent house material', category: 'extra' },
          { id: 'dj-sound-system', name: 'DJ/Sound System', category: 'extra' },
          { id: 'photobooth-props', name: 'Photobooth props', category: 'extra' },
          { id: 'generator', name: 'Generator', category: 'extra' },
          { id: 'car-parking', name: 'Car Parking', category: 'extra' },
          { id: 'led-screen', name: 'LED Screen', category: 'extra' },
          { id: 'live-musical-instruments', name: 'Live Musical Instruments', category: 'extra' }
        ]
      }
    ]
  }
];

// Merge all event categories
export const allEventsData: EventCategory[] = [
  ...comprehensiveEventsData,
  ...remainingEventCategories
];

// Additional service note
export const additionalServiceNote = "FOR ANY EVENTS FOR BRIDE, GROOM AND FAMILY BOUTIQUE/APPAREL FOR THE FUNCTIONS REQUIRED.";

// Export default
export default allEventsData;