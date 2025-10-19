import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrideGroom: React.FC = () => {
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
            src="https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Bride and groom events planning Hyderabad - D Day Evento"
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
              Bride & Groom Events{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                in Hyderabad
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Individual celebrations for the bride and groom's special moments
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Plan Bride & Groom Events
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Bride & Groom Events */}
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
              Special Bride & Groom Events
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Individual celebrations honoring the bride and groom separately, creating intimate moments with their respective families and friends. These personal ceremonies add special meaning to the wedding journey.
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
                src="https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful bride ceremony setup"
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
                Bride's Special Ceremonies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Celebrate the bride with intimate ceremonies that honor her journey from daughter to wife. These special moments include traditional rituals, family blessings, and beautiful preparations that make her feel like a queen on her special day.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bridal shower and pre-wedding pampering sessions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Traditional ceremonies like Gauri Ganpati puja
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Professional makeup and styling sessions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family blessing ceremonies and gift presentations
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
                Groom's Special Ceremonies
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Honor the groom with traditional ceremonies that prepare him for married life. These meaningful rituals include family blessings, traditional preparations, and celebrations that mark his transition from bachelor to husband.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Traditional Upanayana or thread ceremony if needed
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Groom's preparation and styling sessions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Family blessing ceremonies and traditional gifts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bachelor party and friends' celebrations
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
                src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Groom ceremony preparations"
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
              Individual Celebration Services
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Personalized services for both bride and groom's special moments
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Bridal Shower",
                description: "Intimate celebrations with close friends and family members",
                image: "https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "bride",
                icon: "👰"
              },
              {
                title: "Groom's Preparation",
                description: "Traditional ceremonies and modern grooming sessions",
                image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "groom",
                icon: "🤵"
              },
              {
                title: "Beauty & Styling",
                description: "Professional makeup, hair styling, and beauty treatments",
                image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "bride",
                icon: "💄"
              },
              {
                title: "Traditional Rituals",
                description: "Sacred ceremonies specific to bride and groom preparations",
                image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "both",
                icon: "🕉️"
              },
              {
                title: "Photography Sessions",
                description: "Individual photo shoots capturing personal moments",
                image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "both",
                icon: "📸"
              },
              {
                title: "Family Ceremonies",
                description: "Intimate family blessing and gift presentation ceremonies",
                image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
                category: "both",
                icon: "👨‍👩‍👧‍👦"
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
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    service.category === 'bride' ? 'bg-pink-100 text-pink-800' :
                    service.category === 'groom' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {service.category === 'bride' ? 'Bride' : service.category === 'groom' ? 'Groom' : 'Both'}
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

      {/* Traditional Ceremonies */}
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
              Traditional Pre-Wedding Ceremonies
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">👰</span>
                Bride's Ceremonies
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3">•</span>
                  <div>
                    <strong>Gauri Ganpati Puja:</strong> Seeking blessings from Goddess Gauri for a happy married life
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3">•</span>
                  <div>
                    <strong>Bridal Shower:</strong> Modern celebration with friends and female relatives
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3">•</span>
                  <div>
                    <strong>Chooda Ceremony:</strong> Traditional red and white bangles ceremony
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3">•</span>
                  <div>
                    <strong>Solah Shringar:</strong> Traditional 16 adornments for the bride
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3">•</span>
                  <div>
                    <strong>Mata ki Chowki:</strong> Devotional singing and prayers for blessings
                  </div>
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
                <span className="text-3xl mr-3">🤵</span>
                Groom's Ceremonies
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <div>
                    <strong>Upanayana:</strong> Sacred thread ceremony if not performed earlier
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <div>
                    <strong>Tilak Ceremony:</strong> Family blessing ceremony with tilak application
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <div>
                    <strong>Sehra Bandi:</strong> Traditional headgear ceremony with family blessings
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <div>
                    <strong>Kalire Ceremony:</strong> Traditional ornaments and blessing rituals
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <div>
                    <strong>Bachelor's Send-off:</strong> Friends and family celebration before marriage
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
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
              Celebration Packages
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Bride's Special Package",
                description: "Complete celebration package for the bride's pre-wedding ceremonies",
                features: ["Bridal shower planning", "Beauty and styling sessions", "Traditional ceremonies", "Photography coverage", "Family coordination"],
                color: "pink"
              },
              {
                title: "Groom's Special Package",
                description: "Comprehensive package for groom's pre-wedding celebrations",
                features: ["Traditional ceremonies", "Grooming sessions", "Bachelor party planning", "Family blessing ceremonies", "Photography coverage"],
                color: "blue"
              },
              {
                title: "Combined Package",
                description: "Complete package covering both bride and groom's individual celebrations",
                features: ["All bride ceremonies", "All groom ceremonies", "Coordinated planning", "Complete photography", "Family management"],
                color: "purple"
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-2xl font-bold mb-4 ${
                  pkg.color === 'pink' ? 'text-pink-600' :
                  pkg.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                }`}>
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        pkg.color === 'pink' ? 'bg-pink-500' :
                        pkg.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                      }`}></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.color === 'pink' ? 'bg-pink-600 hover:bg-pink-700 text-white' :
                  pkg.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                  'bg-purple-600 hover:bg-purple-700 text-white'
                }`}>
                  Choose Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Honor the Bride & Groom?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let us create beautiful individual celebrations that honor both the bride and groom with traditional ceremonies and modern touches
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Plan Individual Events
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

export default BrideGroom;