import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Calendar, CheckCircle, Heart } from 'lucide-react';

const PopularClubhouses: React.FC = () => {
  const communities = [
    {
      name: 'Lodha Appartements',
      location: 'Kukatpally',
      image: 'https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?w=400&h=250&fit=crop',
      rating: 4.8,
      capacity: '500 guests',
      events: 25,
      features: ['Community Hall', 'Garden Area', 'Parking', 'AC Halls'],
      testimonial: 'Perfect venue for our wedding celebration!'
    },
    {
      name: 'Ncc Urban One',
      location: 'Narsingi',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=400&h=250&fit=crop',
      rating: 4.7,
      capacity: '300 guests',
      events: 18,
      features: ['Banquet Hall', 'Lawn', 'Catering', 'Decoration'],
      testimonial: 'Amazing service and beautiful setup!'
    },
    {
      name: 'Marina Skies',
      location: 'Moosapet',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=400&h=250&fit=crop',
      rating: 4.9,
      capacity: '400 guests',
      events: 32,
      features: ['Premium Venue', 'Multiple Halls', 'Valet Parking', 'Full Service'],
      testimonial: 'Exceeded all our expectations!'
    },
    {
      name: 'Prestige High Fields',
      location: 'Financial District',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=400&h=250&fit=crop',
      rating: 4.6,
      capacity: '600 guests',
      events: 28,
      features: ['Grand Ballroom', 'Outdoor Spaces', 'Modern Amenities', 'Event Planning'],
      testimonial: 'Luxury at its finest!'
    },
    {
      name: 'BR Meadows',
      location: 'Kukatpally',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=400&h=250&fit=crop',
      rating: 4.5,
      capacity: '350 guests',
      events: 22,
      features: ['Community Center', 'Garden', 'Parking', 'Catering'],
      testimonial: 'Great community support!'
    },
    {
      name: "Raghavendras Mirra Panchajanya",
      location: 'Miyapur',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?w=400&h=250&fit=crop',
      rating: 4.4,
      capacity: '450 guests',
      events: 19,
      features: ['Event Hall', 'Outdoor Area', 'Sound System', 'Decoration'],
      testimonial: 'Wonderful experience overall!'
    },
    {
      name: 'Accurate Wind Chimes',
      location: 'Narsingi',
      image: 'https://cdn-projects.gharpe.com/accurate-wind-chimes-hyderabad/image/accurate-wind-chimes-banner-image.jpeg',
      rating: 4.7,
      capacity: '380 guests',
      events: 26,
      features: ['Modern Hall', 'Terrace', 'Parking', 'Full Service']
    },
    {
      name: 'Aparna Serena Park',
      location: 'Kondapur',
      image: 'https://is1-2.housingcdn.com/4f2250e8/5a4cf6e4db1cde66abe0134a070bb247/v0/fs/aparna_serene_park-gachibowli-hyderabad-aparna_constructions.jpeg',
      rating: 4.8,
      capacity: '520 guests',
      events: 31,
      features: ['Clubhouse', 'Swimming Pool Area', 'Lawn', 'Premium Amenities']
    },
    {
      name: 'Jayabheri Summit',
      location: 'Nanakramguda',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Jayabheri_The_Summit_from_Khajaguda_hills.jpg/2560px-Jayabheri_The_Summit_from_Khajaguda_hills.jpg',
      rating: 4.6,
      capacity: '420 guests',
      events: 24,
      features: ['Event Space', 'Garden', 'Valet Service', 'Catering']
    },
    {
      name: 'My Home Twitza',
      location: 'Hitech City',
      image: 'https://pbs.twimg.com/media/E6eY2Z9VIAE8Rt_.jpg:large',
      rating: 4.5,
      capacity: '360 guests',
      events: 20,
      features: ['Community Hall', 'Terrace Garden', 'Parking', 'Sound System']
    },
    {
      name: 'SMR Vinay Iconia',
      location: 'Kondapur',
      image: 'https://homehunt.co.in/wp-content/uploads/2022/11/ICONIA11-scaled.jpg',
      rating: 4.7,
      capacity: '480 guests',
      events: 29,
      features: ['Banquet Hall', 'Outdoor Space', 'Modern Facilities', 'Event Support']
    },
    {
      name: 'Vazhraa Nirmaan Pushpak',
      location: 'Nizampet',
      image: 'https://images.jdmagicbox.com/v2/comp/hyderabad/c8/040pxx40.xx40.220928143724.x6c8/catalogue/space4u-nizampet-hyderabad-rooms-on-rent-0ll92gq6t0.jpg',
      rating: 4.4,
      capacity: '340 guests',
      events: 17,
      features: ['Community Center', 'Garden Area', 'Parking', 'Basic Amenities']
    },
    {
      name: 'Niharika Interlake',
      location: 'Khajaguda',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Indu Fortune Gardenia',
      location: 'Kukatpally',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'My Home Mangala',
      location: 'Kondapur',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Sai Keerti Appartments',
      location: 'Chandanagar',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Honer Vivantis',
      location: 'Tellapur',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Chakri Aspire Heights',
      location: 'Kukatpally',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Ramky Towers',
      location: 'Gachibowli',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'My Home Krishe',
      location: 'Gachibowli',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'My Home Bhooja',
      location: 'Raidurg',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'My Home Ankura',
      location: 'Tellapur',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'MJR Solitaire Appartments',
      location: 'Moosapet',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Ramky One Galaxia',
      location: 'Nallagandla',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Trishala Saffron Sananthan Appartments',
      location: 'Nallagandla',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Gem Nakshrata Appartments',
      location: 'Kokapet',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Lifestyle Dream Homes',
      location: 'Patancheru',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Indis City One',
      location: 'Kukatpally',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Niharika Exotica',
      location: 'Manikonda',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Aliens Space Station',
      location: 'Tellapur',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: "Patel's Green Front Appartments",
      location: 'Yapral',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Mayfair Appartments',
      location: 'Tellapur',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Alekhya Homes',
      location: 'Hafeezpet',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Indis VB City',
      location: 'Bolarum',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Sumadhura Horizon Society',
      location: 'Kondapur',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Ozone Heights',
      location: 'Tellapur',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Aditya Imperial Heights',
      location: 'Hafeezpet',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Aditya Lagoon',
      location: 'Nizampet',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Cyprus Palms',
      location: 'Kondapur',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Rainbow Vistas',
      location: 'Moosapet',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Aparna Saravor',
      location: 'Nallagandla',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Solitaire Residency',
      location: 'Kondapur',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Prestige Tranquil',
      location: 'Kokapet',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: "Muppa's Indraprashta",
      location: 'Osman Nagar',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
    },
    {
      name: 'Hill Ridge Springs Villas',
      location: 'Gachibowli',
      image: 'https://via.placeholder.com/320x180?text=Community+Image',
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-brand-accent/20 to-brand-gold/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-10 w-24 h-24 bg-brand-primary/10 rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-20 w-32 h-32 bg-brand-gold/15 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-gold/20 rounded-full px-6 py-3 mb-6"
          >
            <Heart className="text-brand-primary" size={20} />
            <span className="text-brand-primary font-semibold">Trusted Venues</span>
          </motion.div>
          
          <h2 className="text-display-md md:text-display-lg font-bold text-gray-800 mb-8 font-display">
            Popular in Communities
          </h2>
          <p className="text-body-lg md:text-heading-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've successfully organized 
            <span className="text-brand-primary font-semibold"> memorable events</span> at Hyderabad's most prestigious residential communities
          </p>
        </motion.div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              whileHover={{ y: -12 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{venue.rating}</span>
                  </div>
                  
                  {/* Events count */}
                  <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-semibold">{venue.events} Events</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-heading-md font-bold text-gray-800 mb-3 font-display group-hover:text-brand-primary transition-colors">
                    {venue.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin size={16} className="text-brand-primary" />
                    <span className="font-medium">{venue.location}</span>
                  </div>

                  {/* Capacity */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Users size={16} className="text-brand-secondary" />
                    <span className="text-sm">Up to {venue.capacity}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {venue.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-brand-accent/30 rounded-lg p-3 mt-4">
                    <p className="text-sm text-gray-700 italic">"{venue.testimonial}"</p>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    Book This Venue
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
            <h3 className="text-heading-lg md:text-heading-xl font-bold text-gray-800 mb-4 font-display">
              Don't See Your Community?
            </h3>
            <p className="text-body-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with venues across Hyderabad. Let us help you find the perfect location for your celebration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-primary/90 transition-all duration-300"
              >
                Find My Venue
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                <Calendar size={20} className="inline mr-2" />
                Schedule Visit
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularClubhouses;
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Communities List */}
      </div>
    </section>
  );
};

export default PopularClubhouses;