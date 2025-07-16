import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Star, Cake, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteGenerator/QuoteModal';

const BirthdayPartyPlannersHyderabad: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const birthdayServices = [
    'Theme-based Birthday Decorations',
    'Custom Birthday Cakes & Desserts',
    'Birthday Photography & Videography',
    'Entertainment & Games',
    'Return Gifts & Party Favors',
    'Balloon Decorations & Arrangements',
    'DJ & Music Services',
    'Face Painting & Activities',
    'Catering & Food Services',
    'Venue Booking & Setup'
  ];

  const birthdayThemes = [
    'Princess & Superhero Themes',
    'Cartoon Character Parties',
    'Bollywood Theme Birthdays',
    'Sports Theme Celebrations',
    'Garden Party Themes',
    'Pool Party Arrangements',
    'Traditional Theme Birthdays',
    'Adult Birthday Celebrations'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Services</span>
            <span className="text-gray-400">/</span>
            <span className="text-brand-primary font-medium">Birthday Party Planners Hyderabad</span>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="bg-gradient-to-r from-pink-500 to-rose-400 p-4 rounded-full">
                <Cake size={40} className="text-white" />
              </div>
              <span className="bg-pink-50 text-pink-600 px-6 py-3 rounded-full text-lg font-medium">
                Birthday Party Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-dancing"
            >
              Best Birthday Party Planners in Hyderabad
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              D-Day Evento is Hyderabad's most creative birthday party planning company, specializing in memorable birthday celebrations for kids and adults across Gachibowli, Kondapur, Jubilee Hills, and all of Hyderabad. We make every birthday special with unique themes and personalized touches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Birthday Party Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-xl font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                Call: +91-7386813689
              </motion.button>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 font-dancing text-center">
              Why Choose D-Day Evento for Birthday Parties in Hyderabad?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-brand-gold" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">200+ Birthday Parties</h3>
                </div>
                <p className="text-gray-600">Successfully organized over 200 birthday parties across Hyderabad with creative themes and happy memories.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Cake className="text-pink-500" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Creative Themes</h3>
                </div>
                <p className="text-gray-600">Unique and personalized birthday themes that make every celebration special and memorable for all ages.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-brand-primary" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">All Hyderabad Areas</h3>
                </div>
                <p className="text-gray-600">Serving birthday party planning across all areas of Hyderabad including Gachibowli, Kondapur, and Jubilee Hills.</p>
              </div>
            </div>
          </motion.div>

          {/* Birthday Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 font-dancing text-center">
              Complete Birthday Party Services in Hyderabad
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-dancing">
                  Our Birthday Services
                </h3>
                
                <div className="space-y-4">
                  {birthdayServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-dancing">
                  Popular Birthday Themes
                </h3>
                
                <div className="space-y-4">
                  {birthdayThemes.map((theme, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Cake size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700">{theme}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 font-dancing text-center">
              Birthday Party Packages in Hyderabad
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Basic Birthday</h4>
                <p className="text-2xl font-bold text-pink-500 mb-4">Starting from ₹15,000</p>
                <p className="text-gray-600 mb-4">Perfect for intimate birthday celebrations</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
                >
                  Get Quote
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 text-white text-center">
                <h4 className="text-xl font-bold mb-4">Premium Birthday</h4>
                <p className="text-2xl font-bold text-yellow-300 mb-4">Starting from ₹35,000</p>
                <p className="text-white/90 mb-4">Complete birthday party with all services</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-white text-pink-500 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:text-pink-600 transition-colors"
                >
                  Get Quote
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Luxury Birthday</h4>
                <p className="text-2xl font-bold text-pink-500 mb-4">Starting from ₹75,000</p>
                <p className="text-gray-600 mb-4">Grand birthday celebrations with premium services</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-dancing">
              Ready to Plan an Amazing Birthday Party in Hyderabad?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Contact Hyderabad's best birthday party planners today for a memorable celebration
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors"
              >
                Get Free Birthday Consultation
              </motion.button>
              <motion.a
                href="tel:+917386813689"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Phone size={20} />
                Call Now: +91-7386813689
              </motion.a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@ddayevento.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Serving all of Hyderabad & Telangana</span>
              </div>
            </div>
          </motion.div>

          {/* SEO Content */}
          <div className="mt-16 prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Birthday Party Planners in Hyderabad - D-Day Evento</h2>
            <p className="text-gray-600 mb-4">
              Looking for the best birthday party planners in Hyderabad? D-Day Evento specializes in creating magical birthday celebrations for kids and adults across Hyderabad, Gachibowli, Kondapur, and Jubilee Hills. As Hyderabad's premier birthday party planning company, we offer creative themes, personalized decorations, and memorable experiences.
            </p>
            <p className="text-gray-600 mb-4">
              Our experienced team of birthday party planners in Hyderabad understands what makes each celebration special. From themed decorations to entertainment, custom cakes to return gifts, we handle every detail to ensure your birthday party is unforgettable. We serve all areas of Hyderabad and Telangana with professional birthday party planning services.
            </p>
            <p className="text-gray-600">
              Contact D-Day Evento today to plan your perfect birthday party in Hyderabad. We offer free consultations and customized birthday party packages for all ages and budgets.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default BirthdayPartyPlannersHyderabad;