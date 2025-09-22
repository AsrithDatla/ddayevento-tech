import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, MapPin, Heart, Users, Calendar } from 'lucide-react';
import QuoteModal from './QuoteGenerator/QuoteModal';

const Hero: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // This effect ensures the video restarts when the component is re-mounted
  // (e.g., when navigating back to the home page)
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // By setting the src again, we force the iframe to reload and autoplay.
      const originalSrc = videoElement.src;
      videoElement.src = ''; // Clear src first
      videoElement.src = originalSrc; // Re-assign to trigger reload
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section id="home" className="hero-section min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          ref={videoRef} // Add ref to the iframe
          src="https://player.cloudinary.com/embed/?cloud_name=djycmy2gr&public_id=samples%2Fcld-sample-video&profile=cld-default&autoplay=true&loop=true&muted=true&show_logo=false&show_controls=false"
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="background-video"
        ></iframe>
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for text visibility */}
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