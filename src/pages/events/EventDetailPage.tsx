import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, MapPin, Star, Heart, Sparkles } from 'lucide-react';
import { getEventSectionById } from '../../data/navConfig';

const EventDetailPage: React.FC = () => {
  const { sectionId, eventSlug } = useParams();
  
  // Get the section data
  const section = getEventSectionById(sectionId || '');
  
  // Convert slug back to event name (approximate match)
  const eventName = eventSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || 'Event';

  // Sample event data - in a real app, this would come from a database
  const eventData = {
    title: eventName,
    category: section?.label || 'Event Category',
    description: `Experience the magic of ${eventName.toLowerCase()} with D-Day Evento. We specialize in creating unforgettable celebrations that reflect your unique style and vision.`,
    features: [
      'Complete event planning and coordination',
      'Custom decoration and styling',
      'Professional photography and videography',
      'Catering services with multiple cuisine options',
      'Entertainment and music arrangements',
      'Venue selection and setup assistance'
    ],
    gallery: [
      'https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=400&h=300&fit=crop'
    ],
    testimonial: {
      text: `D-Day Evento made our ${eventName.toLowerCase()} absolutely perfect! Every detail was handled with care and professionalism.`,
      author: 'Happy Client',
      rating: 5
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
            <span className="text-gray-600">{section?.label}</span>
            <span className="text-gray-400">/</span>
            <span className="text-brand-primary font-medium">{eventName}</span>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart size={32} className="text-brand-primary" />
                <span className="bg-brand-accent text-brand-primary px-4 py-2 rounded-full text-sm font-medium">
                  {eventData.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-dancing">
                {eventData.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {eventData.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-md">
                  <Calendar size={20} className="text-brand-primary" />
                  <span className="text-gray-700">Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-md">
                  <Users size={20} className="text-brand-secondary" />
                  <span className="text-gray-700">Any Group Size</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-md">
                  <MapPin size={20} className="text-brand-gold" />
                  <span className="text-gray-700">Hyderabad & Beyond</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Custom Quote
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {eventData.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image}
                      alt={`${eventName} ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 text-brand-gold/30"
              >
                <Sparkles size={40} />
              </motion.div>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 font-dancing text-center">
              What's Included in Our {eventName} Service
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-brand-accent/20 transition-colors"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star size={12} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-8 text-white text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(eventData.testimonial.rating)].map((_, i) => (
                <Star key={i} size={24} className="text-brand-gold fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
              "{eventData.testimonial.text}"
            </blockquote>
            
            <p className="text-brand-gold font-semibold">
              - {eventData.testimonial.author}
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-16"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-dancing">
              Ready to Plan Your Perfect {eventName}?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your vision and create something magical together
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
                View Portfolio
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

export default EventDetailPage;