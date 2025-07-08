import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Users, Calendar } from 'lucide-react';

const PopularClubhouses: React.FC = () => {
  const communities = [
    {
      name: 'Lodha Appartements',
      location: 'Kukatpally',
      image: 'https://content.jdmagicbox.com/comp/hyderabad/d6/040pxx40.xx40.120616232336.f2d6/catalogue/lodha-meridian-kukatpally-hyderabad-residential-buildings-0vbtmuol8j.jpg',
      rating: 4.8,
      capacity: '500 guests',
      events: 25,
      features: ['Community Hall', 'Garden Area', 'Parking', 'AC Halls']
    },
    {
      name: 'Ncc Urban One',
      location: 'Narsingi',
      image: 'https://www.nccurban.com/images/interior/p-1.jpg',
      rating: 4.7,
      capacity: '300 guests',
      events: 18,
      features: ['Banquet Hall', 'Lawn', 'Catering', 'Decoration']
    },
    {
      name: 'Marina Skies',
      location: 'Moosapet',
      image: 'https://www.marinaskies.in/ready-to-move-in-luxury-gated-community-apartments/marina-imgs/gallery/1170x780-gallery3.webp',
      rating: 4.9,
      capacity: '400 guests',
      events: 32,
      features: ['Premium Venue', 'Multiple Halls', 'Valet Parking', 'Full Service']
    },
    {
      name: 'Prestige High Fields',
      location: 'Financial District',
      image: 'https://preossdev.s3.ap-south-1.amazonaws.com/projectgallery/e03084fe-f244-4f1e-8c10-592ba0c22a30.jpeg',
      rating: 4.6,
      capacity: '600 guests',
      events: 28,
      features: ['Grand Ballroom', 'Outdoor Spaces', 'Modern Amenities', 'Event Planning']
    },
    {
      name: 'BR Meadows',
      location: 'Kukatpally',
      image: 'https://teja10.kuikr.com//r1/20210727/ak_925_2061577754-1627360077_700x700.png',
      rating: 4.5,
      capacity: '350 guests',
      events: 22,
      features: ['Community Center', 'Garden', 'Parking', 'Catering']
    },
    {
      name: "Raghavendras Mirra Panchajanya",
      location: 'Miyapur',
      image: '',
      rating: 4.4,
      capacity: '450 guests',
      events: 19,
      features: ['Event Hall', 'Outdoor Area', 'Sound System', 'Decoration']
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
    },
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
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-dancing">
                      {venue.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span>{venue.location}</span>
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