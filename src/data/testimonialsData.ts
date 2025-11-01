export interface Testimonial {
  id: string;
  name: string;
  location: string;
  eventType: string;
  rating: number;
  review: string;
  image?: string;
  eventDate: string;
  venue?: string;
  source?: 'local' | 'google';
  profilePhoto?: string;
  authorUrl?: string;
  timestamp?: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Priya & Rajesh',
    location: 'Gachibowli, Hyderabad',
    eventType: 'Wedding',
    rating: 5,
    review: 'D-Day Evento made our dream wedding come true! From the beautiful mandap decoration to the seamless coordination, everything was perfect. The team understood our vision and executed it flawlessly. Highly recommend for anyone planning their special day in Hyderabad!',
    eventDate: 'December 2023',
    venue: 'Shilpakala Vedika'
  },
  {
    id: '2',
    name: 'Anitha Reddy',
    location: 'Jubilee Hills, Hyderabad',
    eventType: 'Baby Shower',
    rating: 5,
    review: 'The baby shower organized by D-Day Evento was absolutely magical! The balloon decorations and theme setup were beyond our expectations. The team was professional, punctual, and made sure every detail was perfect. Thank you for making this day so special!',
    eventDate: 'November 2023',
    venue: 'Home Function'
  },
  {
    id: '3',
    name: 'Vikram & Family',
    location: 'Kondapur, Hyderabad',
    eventType: 'House Warming',
    rating: 5,
    review: 'Excellent service for our house warming ceremony! The traditional decorations and pooja arrangements were beautifully done. The team coordinated with the pandit and managed everything smoothly. Very satisfied with their professionalism and attention to detail.',
    eventDate: 'January 2024',
    venue: 'Residential'
  },
  {
    id: '4',
    name: 'Meera & Suresh',
    location: 'Banjara Hills, Hyderabad',
    eventType: 'Engagement',
    rating: 5,
    review: 'Our engagement ceremony was a grand success thanks to D-Day Evento! The floral decorations, photography, and catering were all top-notch. The team handled everything with such care and professionalism. Definitely the best event planners in Hyderabad!',
    eventDate: 'October 2023',
    venue: 'Taj Krishna'
  },
  {
    id: '5',
    name: 'Kavitha Sharma',
    location: 'Madhapur, Hyderabad',
    eventType: 'Birthday',
    rating: 5,
    review: 'My daughter\'s first birthday party was absolutely wonderful! The theme decorations, entertainment activities, and cake were all perfect. The kids had a blast, and parents were impressed. D-Day Evento truly knows how to make celebrations memorable!',
    eventDate: 'September 2023',
    venue: 'Community Hall'
  },
  {
    id: '6',
    name: 'Ramesh & Lakshmi',
    location: 'Kukatpally, Hyderabad',
    eventType: 'Anniversary',
    rating: 5,
    review: 'Our 25th wedding anniversary celebration was beautifully organized by D-Day Evento. The romantic setup, candle light dinner arrangement, and surprise elements made it truly special. The team\'s creativity and execution were outstanding!',
    eventDate: 'August 2023',
    venue: 'Hotel Marriott'
  },
  {
    id: '7',
    name: 'Divya & Kiran',
    location: 'Hitech City, Hyderabad',
    eventType: 'Mehendi',
    rating: 5,
    review: 'The mehendi ceremony was absolutely stunning! The colorful decorations, comfortable seating arrangements, and entertainment kept all our guests happy. D-Day Evento\'s attention to detail and creative ideas made our function unforgettable.',
    eventDate: 'December 2023',
    venue: 'Farmhouse'
  },
  {
    id: '8',
    name: 'Srinivas Family',
    location: 'Secunderabad, Hyderabad',
    eventType: 'Cradle Ceremony',
    rating: 5,
    review: 'The naming ceremony for our baby was perfectly organized! The traditional setup, cradle decorations, and pooja arrangements were beautiful. The team coordinated everything smoothly and made sure all rituals were performed properly.',
    eventDate: 'November 2023',
    venue: 'Home Function'
  }
];

// Filter testimonials by event type
export const getTestimonialsByEventType = (eventType: string): Testimonial[] => {
  if (eventType === 'all') return testimonialsData;
  return testimonialsData.filter(testimonial => 
    testimonial.eventType.toLowerCase().includes(eventType.toLowerCase())
  );
};

// Get featured testimonials (highest rated)
export const getFeaturedTestimonials = (count: number = 6): Testimonial[] => {
  return testimonialsData
    .filter(testimonial => testimonial.rating === 5)
    .slice(0, count);
};

// Combine local testimonials with Google Reviews
export const combineTestimonials = (googleReviews: Testimonial[] = []): Testimonial[] => {
  // Add source field to local testimonials
  const localWithSource = testimonialsData.map(testimonial => ({
    ...testimonial,
    source: 'local' as const,
    timestamp: new Date().getTime() - Math.random() * 365 * 24 * 60 * 60 * 1000 // Random timestamp for sorting
  }));

  // Combine and sort by timestamp (most recent first)
  const combined = [...localWithSource, ...googleReviews];
  return combined.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
};

// Get mixed testimonials with Google Reviews prioritized
export const getMixedTestimonials = (googleReviews: Testimonial[] = [], localCount: number = 4): Testimonial[] => {
  const localWithSource = testimonialsData.map(testimonial => ({
    ...testimonial,
    source: 'local' as const,
    timestamp: new Date().getTime() - Math.random() * 365 * 24 * 60 * 60 * 1000
  }));

  // Take recent Google reviews and mix with local ones
  const recentGoogle = googleReviews.slice(0, 6);
  const selectedLocal = localWithSource.slice(0, localCount);
  
  return [...recentGoogle, ...selectedLocal].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
};