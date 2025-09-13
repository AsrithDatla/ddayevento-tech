import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Star, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteGenerator/QuoteModal';

const WeddingPlannersHyderabad: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const weddingServices = [
    'Complete Wedding Planning',
    'Venue Selection & Booking',
    'Wedding Photography & Videography',
    'Bridal Makeup & Styling',
    'Wedding Decoration & Lighting',
    'Catering & Food Services',
    'DJ & Entertainment',
    'Wedding Invitations',
    'Return Gifts & Favors',
    'Transportation Arrangements'
  ];

  const hyderabadAreas = [
    'Gachibowli Wedding Planners',
    'Kondapur Wedding Services',
    'Jubilee Hills Event Management',
    'Banjara Hills Wedding Planners',
    'Madhapur Event Services',
    'Hitech City Wedding Planning',
    'Kukatpally Wedding Organizers',
    'Secunderabad Event Management'
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
            <span className="text-brand-primary font-medium">Wedding Planners Hyderabad</span>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-4 rounded-full">
                <Heart size={40} className="text-white" />
              </div>
              <span className="bg-brand-accent text-brand-primary px-6 py-3 rounded-full text-lg font-medium">
                Wedding Planning Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-heading"
            >
              Best Wedding Planners in Hyderabad
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              D-Day Evento is Hyderabad's most trusted wedding planning company, specializing in creating unforgettable wedding celebrations across Gachibowli, Kondapur, Jubilee Hills, and all of Telangana. With 500+ successful weddings, we bring your dream wedding to life.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Free Wedding Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-xl font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 font-heading text-center">
              Why Choose D-Day Evento for Your Hyderabad Wedding?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-brand-gold" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">500+ Weddings</h3>
                </div>
                <p className="text-gray-600">Successfully planned and executed over 500 weddings across Hyderabad and Telangana with 100% client satisfaction.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-brand-primary" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Local Expertise</h3>
                </div>
                <p className="text-gray-600">Deep knowledge of Hyderabad's best wedding venues, vendors, and traditions across all areas including Gachibowli and Kondapur.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="text-pink-500" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Personalized Service</h3>
                </div>
                <p className="text-gray-600">Every wedding is unique. We create personalized wedding experiences that reflect your love story and cultural traditions.</p>
              </div>
            </div>
          </motion.div>

          {/* Wedding Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 font-heading text-center">
              Complete Wedding Planning Services in Hyderabad
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                  Our Wedding Services
                </h3>
                
                <div className="space-y-4">
                  {weddingServices.map((service, index) => (
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

              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                  Areas We Serve in Hyderabad
                </h3>
                
                <div className="space-y-4">
                  {hyderabadAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700">{area}</span>
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
            <h3 className="text-3xl font-bold text-gray-800 mb-8 font-heading text-center">
              Wedding Planning Packages in Hyderabad
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Essential Package</h4>
                <p className="text-2xl font-bold text-brand-primary mb-4">Starting from ₹2,50,000</p>
                <p className="text-gray-600 mb-4">Perfect for intimate weddings with essential services</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-brand-primary text-white py-3 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors"
                >
                  Get Quote
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white text-center">
                <h4 className="text-xl font-bold mb-4">Premium Package</h4>
                <p className="text-2xl font-bold text-brand-gold mb-4">Starting from ₹5,00,000</p>
                <p className="text-white/90 mb-4">Complete wedding planning with premium services</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-white text-brand-primary py-3 rounded-lg font-semibold hover:bg-brand-gold hover:text-white transition-colors"
                >
                  Get Quote
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Luxury Package</h4>
                <p className="text-2xl font-bold text-brand-primary mb-4">Starting from ₹10,00,000</p>
                <p className="text-gray-600 mb-4">Ultra-luxury weddings with exclusive services</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-brand-primary text-white py-3 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors"
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
            className="text-center bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-heading">
              Ready to Plan Your Dream Wedding in Hyderabad?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Contact Hyderabad's best wedding planners today for a free consultation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-primary/90 transition-colors"
              >
                Get Free Wedding Consultation
              </motion.button>
              <motion.a
                href="tel:+917386813689"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Wedding Planners in Hyderabad - D-Day Evento</h2>
            <p className="text-gray-600 mb-4">
              Looking for the best wedding planners in Hyderabad? D-Day Evento is your trusted partner for creating magical wedding celebrations across Hyderabad, Gachibowli, Kondapur, and Jubilee Hills. As Hyderabad's premier wedding planning company, we specialize in traditional Telugu weddings, destination weddings, and contemporary celebrations.
            </p>
            <p className="text-gray-600 mb-4">
              Our experienced team of wedding planners in Hyderabad understands the local culture, traditions, and preferences. We work with the best vendors across Telangana to ensure your wedding day is perfect in every detail. From venue selection to catering, photography to decoration, we handle everything so you can enjoy your special day.
            </p>
            <p className="text-gray-600">
              Contact D-Day Evento today to discuss your wedding plans with Hyderabad's most trusted wedding planners. We offer free consultations and customized wedding packages to suit every budget and requirement.
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

export default WeddingPlannersHyderabad;