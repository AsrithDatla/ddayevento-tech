import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Star, Calendar, Phone } from 'lucide-react';
import { InlineTrustIndicators } from './TrustIndicators';

// Popular clubhouses and venues in Hyderabad
const clubhouses = [
  {
    id: 1,
    name: "Lodha Appartments",
    location: "Kukatpally, Hyderabad",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "NCC Urban One",
    location: "Narsingi, Hyderabad",
    image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Marina Skies",
    location: "Moosapet, Hyderabad",
    image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    name: "Prestige High Fields",
    location: "Financial District, Hyderabad",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    name: "RR Meadows",
    location: "Kukatpally, Hyderabad",
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    name: "Raghavendra's Mitra Panchaniya",
    location: "Miyapur, Hyderabad",
    image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const PopularClubhouses: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Premium Venues in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Hyderabad
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our handpicked collection of stunning venues where your special moments come to life. 
            Each location is chosen for its unique charm and exceptional service.
          </p>
          
          {/* Trust Indicators */}
          <InlineTrustIndicators className="mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {clubhouses.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">4.8</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Premium Venue
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      {venue.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                      <span className="text-sm">{venue.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4 text-gray-600">
                  <Users className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm font-medium">200-500 guests</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Clubhouse', 'Swimming Pool', 'Gym', 'Party Hall'].map((amenity: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
                  <p className="text-gray-700 italic mb-2">"Perfect venue for our celebration!"</p>
                  <p className="text-sm font-semibold text-purple-700">- Happy Client</p>
                </div>

                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Book Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            Explore All Venues
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularClubhouses;