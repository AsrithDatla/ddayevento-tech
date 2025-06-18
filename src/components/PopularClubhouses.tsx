import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Calendar } from 'lucide-react';

const PopularClubhouses: React.FC = () => {
  const communities = [
    {
      name: 'Lodha Appartements',
      location: 'Kukatpally',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?w=400&h=250&fit=crop',
      rating: 4.8,
      capacity: '500 guests',
      events: 25,
      features: ['Community Hall', 'Garden Area', 'Parking', 'AC Halls']
    },
    {
      name: 'Ncc Urban One',
      location: 'Narsingi',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?w=400&h=250&fit=crop',
      rating: 4.7,
      capacity: '300 guests',
      events: 18,
      features: ['Banquet Hall', 'Lawn', 'Catering', 'Decoration']
    },
    {
      name: 'Marina Skies',
      location: 'Moosapet',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?w=400&h=250&fit=crop',
      rating: 4.9,
      capacity: '400 guests',
      events: 32,
      features: ['Premium Venue', 'Multiple Halls', 'Valet Parking', 'Full Service']
    },
    {
      name: 'Prestige High Fields',
      location: 'Financial District',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?w=400&h=250&fit=crop',
      rating: 4.6,
      capacity: '600 guests',
      events: 28,
      features: ['Grand Ballroom', 'Outdoor Spaces', 'Modern Amenities', 'Event Planning']
    },
    {
      name: 'BR Meadows',
      location: 'Kukatpally',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=400&h=250&fit=crop',
      rating: 4.5,
      capacity: '350 guests',
      events: 22,
      features: ['Community Center', 'Garden', 'Parking', 'Catering']
    },
    {
      name: "Raghavendra's Mirra Panchajnya",
      location: 'Miyapur',
      image: 'https://images.pexels.com/photos/1370717/pexels-photo-1370717.jpeg?w=400&h=250&fit=crop',
      rating: 4.4,
      capacity: '450 guests',
      events: 19,
      features: ['Event Hall', 'Outdoor Area', 'Sound System', 'Decoration']
    },
    {
      name: 'Accurate Wind Chimes',
      location: 'Narsingi',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?w=400&h=250&fit=crop',
      rating: 4.7,
      capacity: '380 guests',
      events: 26,
      features: ['Modern Hall', 'Terrace', 'Parking', 'Full Service']
    },
    {
      name: 'Aparna Serena Park',
      location: 'Kondapur',
      image: 'https://images.pexels.com/photos/1438833/pexels-photo-1438833.jpeg?w=400&h=250&fit=crop',
      rating: 4.8,
      capacity: '520 guests',
      events: 31,
      features: ['Clubhouse', 'Swimming Pool Area', 'Lawn', 'Premium Amenities']
    },
    {
      name: 'Jayabheri Summit',
      location: 'Nanakramguda',
      image: 'https://images.pexels.com/photos/1396133/pexels-photo-1396133.jpeg?w=400&h=250&fit=crop',
      rating: 4.6,
      capacity: '420 guests',
      events: 24,
      features: ['Event Space', 'Garden', 'Valet Service', 'Catering']
    },
    {
      name: 'My Home Twitza',
      location: 'Hitech City',
      image: 'https://images.pexels.com/photos/1370718/pexels-photo-1370718.jpeg?w=400&h=250&fit=crop',
      rating: 4.5,
      capacity: '360 guests',
      events: 20,
      features: ['Community Hall', 'Terrace Garden', 'Parking', 'Sound System']
    },
    {
      name: 'SMR Vinay Iconia',
      location: 'Kondapur',
      image: 'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg?w=400&h=250&fit=crop',
      rating: 4.7,
      capacity: '480 guests',
      events: 29,
      features: ['Banquet Hall', 'Outdoor Space', 'Modern Facilities', 'Event Support']
    },
    {
      name: 'Vazhraa Nirmaan Pushpak',
      location: 'Nizampet',
      image: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?w=400&h=250&fit=crop',
      rating: 4.4,
      capacity: '340 guests',
      events: 17,
      features: ['Community Center', 'Garden Area', 'Parking', 'Basic Amenities']
    }
  ];

  // Duplicate the array for infinite scroll effect
  const infiniteScrollData = [...communities, ...communities, ...communities];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-accent/20 to-brand-gold/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-dancing">
            Popular in Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've successfully organized memorable events at Hyderabad's most prestigious residential communities
          </p>
        </motion.div>

        {/* Infinite Scrolling Image Carousel */}
        <div className="relative mb-12">
          <motion.div 
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
            style={{ width: '300%' }}
          >
            {infiniteScrollData.map((venue, index) => (
              <motion.div
                key={`${venue.name}-${index}`}
                className="flex-shrink-0 w-80 group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{venue.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-dancing">
                      {venue.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin size={16} />
                      <span>{venue.location}</span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users size={14} />
                        <span>{venue.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={14} />
                        <span>{venue.events} events</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {venue.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-brand-accent/30 text-brand-primary text-xs rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                      {venue.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                          +{venue.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Communities List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-dancing">
            Featured Communities We Work With
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {communities.map((venue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg hover:bg-white/50 transition-colors"
              >
                <h4 className="font-semibold text-gray-800 mb-1">{venue.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{venue.location}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-brand-primary">
                  <Calendar size={12} />
                  <span>{venue.events} events completed</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularClubhouses;