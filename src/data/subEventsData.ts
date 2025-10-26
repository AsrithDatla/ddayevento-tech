import { EventCategory } from '../types/quote';

export const subEventsData: EventCategory[] = [
  {
    id: 'wedding',
    name: 'Wedding Events',
    description: 'Complete wedding celebration services',
    icon: '💒',
    subEvents: [
      {
        id: 'engagement',
        name: 'Engagement Ceremony',
        description: 'Ring exchange and family celebration',
        category: 'wedding'
      },
      {
        id: 'haldi-mehendi',
        name: 'Haldi & Mehendi',
        description: 'Traditional pre-wedding ceremonies',
        category: 'wedding'
      },
      {
        id: 'sangeet-cocktail',
        name: 'Sangeet & Cocktail',
        description: 'Music, dance and celebration night',
        category: 'wedding'
      },
      {
        id: 'wedding-ceremony',
        name: 'Wedding Ceremony',
        description: 'Main wedding rituals and ceremonies',
        category: 'wedding'
      },
      {
        id: 'reception',
        name: 'Reception',
        description: 'Grand celebration with family and friends',
        category: 'wedding'
      }
    ]
  },
  {
    id: 'traditional',
    name: 'Traditional Events',
    description: 'Cultural and religious ceremonies',
    icon: '🕉️',
    subEvents: [
      {
        id: 'griha-pravesham',
        name: 'Griha Pravesham',
        description: 'Housewarming ceremony',
        category: 'traditional'
      },
      {
        id: 'half-saree',
        name: 'Half Saree Ceremony',
        description: 'Coming of age celebration',
        category: 'traditional'
      },
      {
        id: 'dhoti-ceremony',
        name: 'Dhoti Ceremony',
        description: 'Traditional boy\'s ceremony',
        category: 'traditional'
      },
      {
        id: 'baby-shower',
        name: 'Baby Shower (Sreemantham)',
        description: 'Blessing ceremony for expecting mothers',
        category: 'traditional'
      },
      {
        id: 'cradle-ceremony',
        name: 'Cradle Ceremony',
        description: 'Baby naming and blessing ceremony',
        category: 'traditional'
      }
    ]
  },
  {
    id: 'birthday',
    name: 'Birthday Celebrations',
    description: 'Memorable birthday parties',
    icon: '🎂',
    subEvents: [
      {
        id: 'kids-birthday',
        name: 'Kids Birthday Party',
        description: 'Fun-filled children\'s birthday celebration',
        category: 'birthday'
      },
      {
        id: 'adult-birthday',
        name: 'Adult Birthday Party',
        description: 'Elegant adult birthday celebration',
        category: 'birthday'
      },
      {
        id: 'milestone-birthday',
        name: 'Milestone Birthday',
        description: 'Special milestone birthday celebration',
        category: 'birthday'
      }
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate Events',
    description: 'Professional business events',
    icon: '🏢',
    subEvents: [
      {
        id: 'conference',
        name: 'Conference',
        description: 'Professional conferences and seminars',
        category: 'corporate'
      },
      {
        id: 'product-launch',
        name: 'Product Launch',
        description: 'New product introduction events',
        category: 'corporate'
      },
      {
        id: 'team-building',
        name: 'Team Building',
        description: 'Corporate team building activities',
        category: 'corporate'
      },
      {
        id: 'annual-party',
        name: 'Annual Party',
        description: 'Company annual celebration',
        category: 'corporate'
      }
    ]
  },
  {
    id: 'special-days',
    name: 'Special Days',
    description: 'Holiday and special occasion celebrations',
    icon: '🎉',
    subEvents: [
      {
        id: 'anniversary',
        name: 'Anniversary Celebration',
        description: 'Wedding or business anniversary',
        category: 'special-days'
      },
      {
        id: 'festival',
        name: 'Festival Celebration',
        description: 'Cultural and religious festivals',
        category: 'special-days'
      },
      {
        id: 'graduation',
        name: 'Graduation Party',
        description: 'Academic achievement celebration',
        category: 'special-days'
      }
    ]
  },
  {
    id: 'college',
    name: 'College Events',
    description: 'Educational institution events',
    icon: '🎓',
    subEvents: [
      {
        id: 'cultural-fest',
        name: 'Cultural Festival',
        description: 'College cultural events and competitions',
        category: 'college'
      },
      {
        id: 'tech-fest',
        name: 'Technical Festival',
        description: 'Technology and innovation events',
        category: 'college'
      },
      {
        id: 'sports-day',
        name: 'Sports Day',
        description: 'Athletic competitions and sports events',
        category: 'college'
      },
      {
        id: 'farewell',
        name: 'Farewell Party',
        description: 'Student farewell celebrations',
        category: 'college'
      }
    ]
  }
];