import { Event } from '../types';

export const eventsData: Event[] = [
  {
    id: 'weddings',
    name: 'Weddings',
    subEvents: [
      {
        id: 'engagement',
        name: 'Engagement',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'table-setup', name: 'Table Setup' },
              { id: 'selfie-booth', name: 'Selfie/Photobooths' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
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
            category: 'Photography & Videography',
            services: [
              { id: 'conventional-photo', name: 'Conventional Photography/Traditional Photography' },
              { id: 'conventional-video', name: 'Conventional Videography/Traditional Videography' },
              { id: 'candid-photo', name: 'Candid Photography' },
              { id: 'candid-video', name: 'Candid Videography' },
              { id: 'cinematic-teaser', name: 'Cinematic Teaser' },
              { id: 'album', name: 'Album' },
              { id: 'drone', name: 'Drone' },
              { id: 'live-streaming', name: 'Live Streaming' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' },
              { id: 'mascots', name: 'Mascots' },
              { id: 'entries', name: 'Entries' },
              { id: 'games', name: 'Games' }
            ]
          },
          {
            category: 'Makeup',
            services: [
              { id: 'hair-styling', name: 'Hair Styling' },
              { id: 'saree-draping', name: 'Saree Draping' }
            ]
          },
          {
            category: 'Cake',
            services: [
              { id: 'custom-cake', name: 'Custom Cake' }
            ]
          },
          {
            category: 'Tent House',
            services: [
              { id: 'tent-setup', name: 'Tent Setup' }
            ]
          },
          {
            category: 'Gifts & Trousseau Packing',
            services: [
              { id: 'return-gifts', name: 'Return Gifts' },
              { id: 'customized-gifts', name: 'Customized Gifts' }
            ]
          }
        ]
      },
      {
        id: 'haldi',
        name: 'Haldi',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Photography & Videography',
            services: [
              { id: 'candid-photo', name: 'Candid Photography' },
              { id: 'album', name: 'Album' }
            ]
          }
        ]
      },
      {
        id: 'pellikuthuru-pellikoduku',
        name: 'Pellikuthuru & Pellikoduku',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      },
      {
        id: 'mehendi',
        name: 'Mehendi',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'selfie-booth', name: 'Selfie/Photobooths' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' }
            ]
          }
        ]
      },
      {
        id: 'bachelor-bridal-shower',
        name: "Bachelor's Party/Bridal Shower",
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      },
      {
        id: 'sangeeth',
        name: 'Sangeeth',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'selfie-booth', name: 'Selfie/Photobooths' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'north-indian', name: 'North Indian' },
              { id: 'stalls', name: 'Stalls' },
              { id: 'desserts', name: 'Desserts' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      },
      {
        id: 'bharath',
        name: 'Bharath',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      },
      {
        id: 'wedding',
        name: 'Wedding',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'selfie-booth', name: 'Selfie/Photobooths' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'north-indian', name: 'North Indian' },
              { id: 'stalls', name: 'Stalls' },
              { id: 'desserts', name: 'Desserts' }
            ]
          },
          {
            category: 'Photography & Videography',
            services: [
              { id: 'candid-photo', name: 'Candid Photography' },
              { id: 'drone', name: 'Drone' },
              { id: 'album', name: 'Album' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' }
            ]
          },
          {
            category: 'Makeup',
            services: [
              { id: 'hair-styling', name: 'Hair Styling' },
              { id: 'saree-draping', name: 'Saree Draping' }
            ]
          },
          {
            category: 'Cake',
            services: [
              { id: 'custom-cake', name: 'Custom Cake' }
            ]
          },
          {
            category: 'Tent House',
            services: [
              { id: 'tent-setup', name: 'Tent Setup' }
            ]
          }
        ]
      },
      {
        id: 'reception',
        name: 'Reception',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'selfie-booth', name: 'Selfie/Photobooths' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'north-indian', name: 'North Indian' },
              { id: 'stalls', name: 'Stalls' },
              { id: 'desserts', name: 'Desserts' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'house-warming',
    name: 'House Warming',
    subEvents: [
      {
        id: 'griha-pravesh',
        name: 'Griha Pravesh',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'baby-welcoming',
    name: 'Baby Welcoming',
    subEvents: [
      {
        id: 'baby-shower',
        name: 'Baby Shower',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'selfie-booth', name: 'Selfie/Photobooths' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'games', name: 'Games' },
              { id: 'music', name: 'Music' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'baby-shower-sreemamtham',
    name: 'Baby Shower/Sreemamtham',
    subEvents: [
      {
        id: 'traditional-ceremony',
        name: 'Traditional Ceremony',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'cradle-ceremony',
    name: 'Cradle Ceremony/Naming',
    subEvents: [
      {
        id: 'naming-ceremony',
        name: 'Naming Ceremony',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'annaprasana',
    name: 'Annaprasana',
    subEvents: [
      {
        id: 'first-rice-ceremony',
        name: 'First Rice Ceremony',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'birthdays',
    name: 'Birthdays',
    subEvents: [
      {
        id: 'kids-birthday',
        name: 'Kids Birthday',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'selfie-booth', name: 'Selfie/Photobooths' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'games', name: 'Games' },
              { id: 'artists', name: 'Artists' },
              { id: 'music', name: 'Music' }
            ]
          },
          {
            category: 'Cake',
            services: [
              { id: 'custom-cake', name: 'Custom Cake' }
            ]
          },
          {
            category: 'Gifts & Trousseau Packing',
            services: [
              { id: 'return-gifts', name: 'Return Gifts' }
            ]
          }
        ]
      },
      {
        id: 'adult-birthday',
        name: 'Adult Birthday',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'north-indian', name: 'North Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'anniversaries',
    name: 'Anniversaries',
    subEvents: [
      {
        id: 'wedding-anniversary',
        name: 'Wedding Anniversary',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'selfie-booth', name: 'Selfie/Photobooths' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'north-indian', name: 'North Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'half-saree-dhoti',
    name: 'Half Saree/Dhoti',
    subEvents: [
      {
        id: 'haldi-ceremony',
        name: 'Haldi',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      },
      {
        id: 'mehendi-ceremony',
        name: 'Mehendi',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' }
            ]
          }
        ]
      },
      {
        id: 'upanayanam-ceremony',
        name: 'Upanayanam',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'festivals-special-days',
    name: 'Festivals/Special Days',
    subEvents: [
      {
        id: 'surprise-parties',
        name: 'Surprise Parties',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      },
      {
        id: 'house-parties',
        name: 'House Parties',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      },
      {
        id: 'kitty-parties',
        name: 'Kitty Parties',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'table-setup', name: 'Table Setup' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'stalls', name: 'Stalls' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      },
      {
        id: 'mothers-fathers-day',
        name: 'Mothers/Fathers Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' }
            ]
          },
          {
            category: 'Gifts & Trousseau Packing',
            services: [
              { id: 'customized-gifts', name: 'Customized Gifts' }
            ]
          }
        ]
      },
      {
        id: 'womens-day',
        name: 'Womens Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' }
            ]
          }
        ]
      },
      {
        id: 'valentines-day',
        name: 'Valentines Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'continental', name: 'Continental' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      },
      {
        id: 'proposal-day',
        name: 'Proposal Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Photography & Videography',
            services: [
              { id: 'candid-photo', name: 'Candid Photography' },
              { id: 'candid-video', name: 'Candid Videography' }
            ]
          }
        ]
      },
      {
        id: 'candle-night-dinner',
        name: 'Candle Night Dinner',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'table-setup', name: 'Table Setup' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'continental', name: 'Continental' },
              { id: 'italian', name: 'Italian' }
            ]
          }
        ]
      },
      {
        id: 'retirement-party',
        name: 'Retirement Party',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'south-indian', name: 'South Indian' },
              { id: 'north-indian', name: 'North Indian' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'corporate-events',
    name: 'Corporate Events',
    subEvents: [
      {
        id: 'conference',
        name: 'Conference',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'stalls', name: 'Stalls' }
            ]
          }
        ]
      },
      {
        id: 'team-meetings',
        name: 'Team Meetings/Team Lunches/Workshops',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'table-setup', name: 'Table Setup' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'stalls', name: 'Stalls' },
              { id: 'catering', name: 'Catering' }
            ]
          }
        ]
      },
      {
        id: 'seminars',
        name: 'Seminars',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'stalls', name: 'Stalls' }
            ]
          }
        ]
      },
      {
        id: 'awards',
        name: 'Awards',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' }
            ]
          }
        ]
      },
      {
        id: 'corporate-parties',
        name: 'Corporate Parties',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      },
      {
        id: 'corporate-day-outings',
        name: 'Corporate-Day Outings',
        services: [
          {
            category: 'Entertainment',
            services: [
              { id: 'games', name: 'Games' },
              { id: 'music', name: 'Music' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'barbeque', name: 'Barbeque' },
              { id: 'stalls', name: 'Stalls' }
            ]
          }
        ]
      },
      {
        id: 'product-launch',
        name: 'Product Launch',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' },
              { id: 'selfie-booth', name: 'Selfie/Photobooths' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'stalls', name: 'Stalls' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'college-events',
    name: 'College Events',
    subEvents: [
      {
        id: 'annual-day',
        name: 'School Events & College-Annual Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' }
            ]
          }
        ]
      },
      {
        id: 'sports-day',
        name: 'School Events & College-Sports Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      },
      {
        id: 'cultural-day',
        name: 'School Events & College-Cultural Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      },
      {
        id: 'freshers-day',
        name: 'School Events & College-Fresher\'s Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      },
      {
        id: 'farewell-day',
        name: 'School Events & College-Farewell Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' }
            ]
          }
        ]
      },
      {
        id: 'convocation',
        name: 'School Events & College-Convocation',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' },
              { id: 'truss-screen', name: 'Truss & Screen Setup' }
            ]
          },
          {
            category: 'Photography & Videography',
            services: [
              { id: 'conventional-photo', name: 'Conventional Photography/Traditional Photography' },
              { id: 'album', name: 'Album' }
            ]
          }
        ]
      },
      {
        id: 'festivals-teachers-day',
        name: 'School Events & College-Festivals & Teacher\'s Day, Children\'s Day',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'balloon-decor', name: 'Balloon Decor' },
              { id: 'themed-backdrops', name: 'Customized Themed Backdrops' }
            ]
          },
          {
            category: 'Entertainment',
            services: [
              { id: 'music', name: 'Music' },
              { id: 'artists', name: 'Artists' },
              { id: 'games', name: 'Games' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'shop-office-openings',
    name: 'Shop/Office Openings',
    subEvents: [
      {
        id: 'inauguration',
        name: 'Inauguration',
        services: [
          {
            category: 'Decor & Lighting',
            services: [
              { id: 'flower-decor', name: 'Flower Decor' },
              { id: 'led-lighting', name: 'LED/Focus Lighting' }
            ]
          },
          {
            category: 'Multi-Cuisine Menus',
            services: [
              { id: 'stalls', name: 'Stalls' },
              { id: 'desserts', name: 'Desserts' }
            ]
          }
        ]
      }
    ]
  }
];