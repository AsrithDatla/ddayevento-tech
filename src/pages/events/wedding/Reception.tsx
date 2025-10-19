import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Reception: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Wedding reception and bharath planning Hyderabad - D Day Evento"
            className="w-full h-full object-cover object-center brightness-75 contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-2xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}
            >
              Reception & Bharath{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                Planning in Hyderabad
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Grand celebration with family and friends - the perfect finale
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Plan Your Reception
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Reception & Bharath */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Grand Reception & Bharath Celebrations
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The reception is the grand finale where the newlywed couple is welcomed into society as husband and wife. We create spectacular celebrations that bring together families, friends, and communities in joyous celebration.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Grand wedding reception setup"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Elegant Wedding Reception
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our wedding receptions are designed to be memorable celebrations where the couple is formally introduced as married. From elegant decor to gourmet dining, we ensure every guest feels the joy and grandeur of this special occasion.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Luxurious venue decoration with premium flowers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multi-cuisine gourmet dining experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Live entertainment and cultural performances
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Professional photography and videography
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Traditional Bharath Ceremony
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The Bharath ceremony is a beautiful tradition where the bride is formally welcomed into the groom's family. This intimate ceremony includes traditional rituals, family blessings, and the presentation of the new daughter-in-law to the extended family.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Traditional welcome rituals and aarti ceremony
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family blessing ceremonies and gift presentations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Traditional home decorations and rangoli
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Authentic home-style feast preparation
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Bharath ceremony"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Complete Reception Services
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything you need for a grand and memorable reception celebration
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Venue Decoration",
                description: "Luxurious decor with premium flowers, lighting, and elegant setups",
                image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "🎭"
              },
              {
                title: "Gourmet Catering",
                description: "Multi-cuisine dining with live counters and traditional delicacies",
                image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "🍽️"
              },
              {
                title: "Entertainment",
                description: "Live music, cultural performances, and DJ services",
                image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "🎵"
              },
              {
                title: "Photography",
                description: "Professional photographers capturing every precious moment",
                image: "https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "📸"
              },
              {
                title: "Guest Management",
                description: "Complete guest coordination and hospitality services",
                image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "👥"
              },
              {
                title: "Transportation",
                description: "Luxury car decorations and transportation arrangements",
                image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "🚗"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 text-2xl bg-white/90 rounded-full w-12 h-12 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reception Styles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Reception Styles We Offer
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">👑</span>
                Royal Traditional Reception
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">•</span>
                  Grand entrance with traditional shehnai and dhol
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">•</span>
                  Throne-style seating for the couple
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">•</span>
                  Traditional Indian cuisine with royal presentation
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">•</span>
                  Classical dance and music performances
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3">•</span>
                  Traditional gift ceremony and blessings
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">✨</span>
                Modern Elegant Reception
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3">•</span>
                  Contemporary decor with sophisticated lighting
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3">•</span>
                  Multi-cuisine buffet with live cooking stations
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3">•</span>
                  DJ music with dance floor and entertainment
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3">•</span>
                  Photo booths and interactive experiences
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3">•</span>
                  Cocktail hour with premium beverages
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <span className="text-3xl mr-3">🏠</span>
              Intimate Bharath Ceremony at Home
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Traditional Elements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Home entrance decoration with rangoli and flowers
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Traditional aarti and welcome ceremonies
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    Family blessing rituals and gift presentations
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Hospitality Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3">•</span>
                    Traditional home-style feast preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3">•</span>
                    Family coordination and guest management
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3">•</span>
                    Photography for intimate family moments
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready for Your Grand Reception?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let us create the perfect finale to your wedding celebrations with a grand reception that brings everyone together in joy and celebration
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Plan Your Reception
            </button>
            <Link
              to="/events/wedding-events"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-300"
            >
              View All Wedding Events
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reception;