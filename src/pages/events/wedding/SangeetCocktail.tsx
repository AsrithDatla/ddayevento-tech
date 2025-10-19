import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SangeetCocktail: React.FC = () => {
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
            src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Sangeet cocktail bachelor party planning Hyderabad - D Day Evento"
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
              Sangeet, Cocktail &{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                Bachelor's Party in Hyderabad
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Musical celebrations, cocktail parties, and unforgettable bachelor parties
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Plan Your Party
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sangeet & Parties */}
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
              Unforgettable Pre-Wedding Celebrations
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              From traditional Sangeet nights filled with music and dance to modern cocktail parties and memorable bachelor celebrations, we create the perfect pre-wedding festivities that bring everyone together.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sangeet ceremony with traditional music and dance"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sangeet Night</h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional musical celebration with choreographed dances, live performances, and family participation creating unforgettable memories.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Elegant cocktail party setup"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cocktail Party</h3>
              <p className="text-gray-600 leading-relaxed">
                Sophisticated evening celebrations with premium beverages, elegant decor, and contemporary entertainment for a modern pre-wedding experience.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Bachelor party celebration"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bachelor's Party</h3>
              <p className="text-gray-600 leading-relaxed">
                Epic celebrations for the groom and his friends with customized themes, entertainment, and activities for the ultimate send-off.
              </p>
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
              Complete Party Planning Services
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything you need for spectacular pre-wedding celebrations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "DJ & Sound System",
                description: "Professional DJ services with high-quality sound systems and lighting",
                image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "🎵"
              },
              {
                title: "Choreography Services",
                description: "Professional choreographers for Sangeet performances and group dances",
                image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "💃"
              },
              {
                title: "Bar & Beverages",
                description: "Premium bar setup with signature cocktails and professional bartenders",
                image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "🍸"
              },
              {
                title: "Stage & Lighting",
                description: "Professional stage setup with dynamic lighting and special effects",
                image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "🎭"
              },
              {
                title: "Photography & Videography",
                description: "Capturing all the fun moments and performances professionally",
                image: "https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "📸"
              },
              {
                title: "Catering & Food",
                description: "Delicious food stations, live counters, and party snacks",
                image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
                icon: "🍽️"
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

      {/* Event Types */}
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
              Types of Celebrations We Organize
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎵</span>
                Traditional Sangeet
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  Family dance performances and competitions
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  Live traditional music with dhol and tabla
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  Bollywood and regional song performances
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  Professional choreography for group dances
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  Traditional costumes and makeup arrangements
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🍸</span>
                Modern Cocktail Parties
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Premium bar with signature cocktails
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Contemporary music and DJ performances
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Elegant decor with mood lighting
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Gourmet appetizers and canapés
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Photo booths with props and backdrops
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <span className="text-3xl mr-3">🎉</span>
              Bachelor & Bachelorette Parties
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Bachelor Party Options</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    Adventure activities and outdoor games
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    Sports bar and gaming setups
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3">•</span>
                    Live entertainment and performances
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Bachelorette Party Options</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-3">•</span>
                    Spa and wellness activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-3">•</span>
                    Dance parties and karaoke nights
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-3">•</span>
                    Themed decorations and photo sessions
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Party Before the Big Day?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let us create unforgettable pre-wedding celebrations that bring everyone together for music, dance, and memories that last a lifetime
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Plan Your Party
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

export default SangeetCocktail;