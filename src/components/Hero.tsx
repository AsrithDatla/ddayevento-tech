import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, MapPin, Heart, Users, Calendar } from 'lucide-react';
import QuoteModal from './QuoteGenerator/QuoteModal';

const Hero: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images from different events
  const carouselImages = [
    {
      url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459356/WhatsApp_Image_2025-09-17_at_3.25.03_PM_wkj4rb.jpg',
      alt: 'Wedding Ceremony - D Day Evento',
      title: 'Beautiful Wedding Ceremonies'
    },
    {
      url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461011/WhatsApp_Image_2025-08-26_at_7.20.19_PM_sug7s3.jpg',
      alt: 'Half Saree Ceremony - D Day Evento',
      title: 'Traditional Half Saree Celebrations'
    },
    {
      url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461264/WhatsApp_Image_2025-08-28_at_9.42.48_PM_zj1w25.jpg',
      alt: 'Griha Pravesham - D Day Evento',
      title: 'Grand Housewarming Ceremonies'
    },
    {
      url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461419/WhatsApp_Image_2025-08-26_at_7.20.25_PM_pytvci.jpg',
      alt: 'Baby Shower - D Day Evento',
      title: 'Sacred Baby Shower Celebrations'
    },
    {
      url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398564/WhatsApp_Image_2025-08-29_at_12.07.56_AM_w8dfp0.jpg',
      alt: 'Dhoti Ceremony - D Day Evento',
      title: 'Traditional Dhoti Ceremonies'
    },
    {
      url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461094/WhatsApp_Image_2025-08-26_at_3.01.17_PM_ucfwlf.jpg',
      alt: 'Cradle Ceremony - D Day Evento',
      title: 'Beautiful Cradle Ceremonies'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="home" className="hero-section min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={carouselImages[currentImageIndex].url}
              alt={carouselImages[currentImageIndex].alt}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for text visibility */}
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-brand-gold/40"
        >
          <Heart size={60} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 text-white/30"
        >
          <Sparkles size={50} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 text-brand-gold/40"
        >
          <Users size={45} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-60 right-32 text-white/25"
        >
          <Calendar size={35} />
        </motion.div>
      </div>

     

      {/* Hero Content */}
      <div className="relative flex items-center justify-center min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Trust Badge with Local Focus */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
            >
              <Star className="text-brand-gold" size={20} />
              <span className="text-white font-medium">Hyderabad's #1 Event Planners</span>
              <Star className="text-brand-gold" size={20} />
            </motion.div>

            {/* Main Headline with Local Positioning */}
            <motion.h1 
              className="text-display-lg md:text-display-xl font-black text-white mb-8 leading-tight font-hero tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
            >
              Hyderabad's Most Trusted Service Provider
            </motion.h1>

            {/* Subheadline with Local Market Focus */}
            <motion.h3 
              className="text-heading-md md:text-heading-xl font-semibold text-white/95 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
             From intimate gatherings to grand celebrations, we bring your dreams to life with 
                     <span className="text-brand-gold font-semibold"> style, elegance, and excellence</span>
            </motion.h3>



            {/* Stats Row - Mobile Optimized */}


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-brand-primary px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:bg-brand-gold hover:text-white transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Your Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="flex items-center justify-center gap-2 mt-8"
            >
              <MapPin size={18} className="text-brand-gold" />
              <span className="text-white/80 text-sm">
                Proudly serving Hyderabad and surrounding areas
              </span>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '300px' }}
              transition={{ duration: 2, delay: 1.9 }}
              className="h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-12 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;