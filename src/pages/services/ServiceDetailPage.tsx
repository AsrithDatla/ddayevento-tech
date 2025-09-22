import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Palette, Camera, Music, UtensilsCrossed, Gift, Lightbulb } from 'lucide-react';
import { getServiceSectionById } from '../../data/navConfig';

const ServiceDetailPage: React.FC = () => {
  const { sectionId, serviceSlug } = useParams();

  // Get the section data
  const section = getServiceSectionById(sectionId || '');

  // Convert slug back to service name (approximate match)
  const serviceName = serviceSlug?.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || section?.label || 'Service';

  // Icon mapping for different service categories
  const getServiceIcon = (sectionId: string) => {
    switch (sectionId) {
      case 'decoration': return Palette;
      case 'photography-videography': return Camera;
      case 'entertainment': return Music;
      case 'food-catering': return UtensilsCrossed;
      case 'return-gifts': return Gift;
      default: return Lightbulb;
    }
  };

  const ServiceIcon = getServiceIcon(sectionId || '');

  // Sample service data - in a real app, this would come from a database
  const serviceData = {
    title: serviceName,
    category: section?.label || 'Service Category',
    description: `Transform your event with our professional ${serviceName.toLowerCase()} services. At D-Day Evento, we bring creativity, expertise, and attention to detail to every aspect of your celebration.`,
    benefits: [
      'Professional and experienced team',
      'High-quality materials and equipment',
      'Customized solutions for your needs',
      'Competitive pricing packages',
      'On-time delivery and setup',
      'Post-event cleanup included'
    ],
    process: [
      'Initial consultation and requirement gathering',
      'Custom design and planning phase',
      'Material sourcing and preparation',
      'Professional setup and execution',
      'Event day coordination and support',
      'Post-event cleanup and breakdown'
    ],
    gallery: [
      'https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?w=400&h=300&fit=crop'
    ],
    pricing: {
      basic: 'Starting from ₹15,000',
      premium: 'Starting from ₹35,000',
      luxury: 'Starting from ₹75,000'
    }
  };

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
            <span className="text-brand-primary font-medium">{serviceName}</span>
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
                <ServiceIcon size={40} className="text-white" />
              </div>
              <span className="bg-brand-accent text-brand-primary px-6 py-3 rounded-full text-lg font-medium">
                {serviceData.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-heading"
            >
              {serviceData.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {serviceData.description}
            </motion.p>
          </div>

          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 font-heading text-center">
              Our Work Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image}
                    alt={`${serviceName} ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits & Process Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Why Choose Our {serviceName} Service?
              </h3>

              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Our Service Process
              </h3>

              <div className="space-y-4">
                {serviceData.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 font-heading text-center">
              Service Packages
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(serviceData.pricing).map(([tier, price], index) => (
                <motion.div
                  key={tier}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                  className={`p-6 rounded-2xl text-center ${tier === 'premium'
                    ? 'bg-gradient-to-br from-brand-primary to-brand-secondary text-white'
                    : 'bg-gray-50 border border-gray-200'
                    }`}
                >
                  <h4 className={`text-xl font-bold mb-4 capitalize ${tier === 'premium' ? 'text-white' : 'text-gray-800'
                    }`}>
                    {tier} Package
                  </h4>
                  <p className={`text-2xl font-bold mb-4 ${tier === 'premium' ? 'text-brand-gold' : 'text-brand-primary'
                    }`}>
                    {price}
                  </p>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${tier === 'premium'
                    ? 'bg-white text-brand-primary hover:bg-brand-gold hover:text-white'
                    : 'bg-brand-primary text-white hover:bg-brand-primary/90'
                    }`}>
                    Get Quote
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-heading">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today for a free consultation and custom quote
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-primary/90 transition-colors"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                Call Now: +91-7386813689
              </motion.button>
            </div>
          </motion.div>

          {/* Company Info */}
          <div className="mt-16 text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
            <p className="mb-2">D-Day Evento | Hyderabad | +91-7386813689 | info@ddayevento.com</p>
            <p>Creating unforgettable celebrations with style, elegance, and excellence.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;