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