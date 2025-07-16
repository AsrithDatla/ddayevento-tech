import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, MapPin, Heart, Users, Calendar } from 'lucide-react';
import QuoteModal from './QuoteGenerator/QuoteModal';
import { FloatingTrustBadge } from './TrustIndicators';

const Hero: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-hero-warm">
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Authentic background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?w=1920&h=1080&fit=crop")'
          }}
        />
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

      {/* Floating Trust Badge */}
      <FloatingTrustBadge className="absolute top-32 right-8 hidden lg:block" />

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
              HYDERABAD'S MOST
              <br />
              <span className="text-brand-gold bg-gradient-to-r from-brand-gold to-yellow-300 bg-clip-text text-transparent"> 
                TRUSTED EVENT PLANNERS
              </span>
            </motion.h1>

            {/* Subheadline with Local Market Focus */}
            <motion.h2 
              className="text-heading-md md:text-heading-xl font-semibold text-white/95 mb-10 font-display"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Premier Wedding Planners & Event Management Company in Hyderabad
            </motion.h2>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mb-12"
            >
              <p className="text-body-lg md:text-heading-md text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                From intimate gatherings to grand celebrations, we bring your dreams to life with 
                <span className="text-brand-gold font-semibold"> style, elegance, and excellence</span>
              </p>
            </motion.div>

            {/* Stats Row - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12"
            >
              <div className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-gold">500+</div>
                <div className="text-white/80 text-xs sm:text-sm">Happy Clients</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-gold">6+</div>
                <div className="text-white/80 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-gold">24/7</div>
                <div className="text-white/80 text-xs sm:text-sm">Support</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-brand-primary px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:bg-brand-gold hover:text-white transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Your Dream Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-brand-primary transition-all duration-300 backdrop-blur-sm"
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