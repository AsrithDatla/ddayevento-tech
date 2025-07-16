import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Star, Building, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteModal from '../../components/QuoteGenerator/QuoteModal';

const CorporateEventManagementHyderabad: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const corporateServices = [
    'Product Launch Events',
    'Corporate Conferences & Seminars',
    'Team Building Activities',
    'Award Ceremonies',
    'Annual General Meetings',
    'Corporate Parties & Celebrations',
    'Trade Shows & Exhibitions',
    'Board Meetings & Corporate Retreats',
    'Employee Recognition Events',
    'Company Milestone Celebrations'
  ];

  const techHubs = [
    'Gachibowli IT Hub Events',
    'Kondapur Corporate Services',
    'Hitech City Event Management',
    'Madhapur Business Events',
    'Financial District Conferences',
    'Jubilee Hills Corporate Parties',
    'Banjara Hills Executive Events',
    'Secunderabad Business Meetings'
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
            <span className="text-brand-primary font-medium">Corporate Event Management Hyderabad</span>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-full">
                <Building size={40} className="text-white" />
              </div>
              <span className="bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-lg font-medium">
                Corporate Event Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-dancing"
            >
              Corporate Event Management in Hyderabad
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              D-Day Evento is Hyderabad's leading corporate event management company, specializing in professional business events across Gachibowli IT Hub, Kondapur, Hitech City, and Financial District. We deliver exceptional corporate experiences that drive business success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Corporate Event Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
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
              Why Choose D-Day Evento for Corporate Events in Hyderabad?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-brand-gold" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">100+ Corporate Events</h3>
                </div>
                <p className="text-gray-600">Successfully managed over 100 corporate events across Hyderabad's major business districts with professional excellence.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-blue-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">IT Hub Expertise</h3>
                </div>
                <p className="text-gray-600">Specialized knowledge of Hyderabad's IT corridors including Gachibowli, Kondapur, and Hitech City business requirements.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="text-green-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Professional Service</h3>
                </div>
                <p className="text-gray-600">End-to-end corporate event management with attention to detail, punctuality, and business-focused approach.</p>
              </div>
            </div>
          </motion.div>

          {/* Corporate Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 font-dancing text-center">
              Complete Corporate Event Services in Hyderabad
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-dancing">
                  Our Corporate Services
                </h3>
                
                <div className="space-y-4">
                  {corporateServices.map((service, index) => (
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

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-dancing">
                  Hyderabad Business Districts We Serve
                </h3>
                
                <div className="space-y-4">
                  {techHubs.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
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
            <h3 className="text-3xl font-bold text-gray-800 mb-8 font-dancing text-center">
              Corporate Event Packages in Hyderabad
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Basic Corporate</h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">Starting from ₹50,000</p>
                <p className="text-gray-600 mb-4">Perfect for small meetings and team events</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Quote
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white text-center">
                <h4 className="text-xl font-bold mb-4">Professional Package</h4>
                <p className="text-2xl font-bold text-yellow-300 mb-4">Starting from ₹1,50,000</p>
                <p className="text-white/90 mb-4">Complete corporate event management</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:text-blue-800 transition-colors"
                >
                  Get Quote
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Enterprise Package</h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">Starting from ₹5,00,000</p>
                <p className="text-gray-600 mb-4">Large-scale corporate events and conferences</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
            className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-dancing">
              Ready to Plan Your Corporate Event in Hyderabad?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Contact Hyderabad's leading corporate event management company today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
              >
                Get Free Corporate Consultation
              </motion.button>
              <motion.a
                href="tel:+917386813689"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
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
                <span>Serving Hyderabad IT Corridor & Business Districts</span>
              </div>
            </div>
          </motion.div>

          {/* SEO Content */}
          <div className="mt-16 prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Corporate Event Management in Hyderabad - D-Day Evento</h2>
            <p className="text-gray-600 mb-4">
              Looking for professional corporate event management in Hyderabad? D-Day Evento is your trusted partner for business events across Hyderabad's major IT hubs including Gachibowli, Kondapur, Hitech City, and Financial District. As Hyderabad's premier corporate event management company, we specialize in conferences, product launches, team building events, and corporate celebrations.
            </p>
            <p className="text-gray-600 mb-4">
              Our experienced team understands the unique requirements of corporate events in Hyderabad's business environment. We work with leading venues and vendors across Telangana to ensure your corporate event achieves its business objectives while maintaining the highest professional standards.
            </p>
            <p className="text-gray-600">
              Contact D-Day Evento today to discuss your corporate event requirements with Hyderabad's most trusted corporate event management company. We offer free consultations and customized corporate event packages for businesses of all sizes.
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

export default CorporateEventManagementHyderabad;