import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, MapPin } from 'lucide-react';
import QuoteModal from './QuoteModal';

const Hero: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-brand-gold/30"
        >
          <Star size={60} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 text-white/20"
        >
          <Sparkles size={40} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 text-brand-gold/20"
        >
          <Star size={35} />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative flex items-center justify-center min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Headline */}
            <motion.h1 
              className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight font-hero tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              EVENTS THAT
              <br />
              <span className="text-brand-gold">SPEAK STYLE</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.h2 
              className="text-2xl md:text-4xl font-semibold text-white/90 mb-8 font-dancing"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              SERVICES THAT SPEAK EXCELLENCE
            </motion.h2>

            {/* Location Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex items-center justify-center gap-2 mb-12"
            >
              <MapPin size={20} className="text-brand-gold" />
              <p className="text-lg md:text-xl text-white/90 font-medium">
                Serving Hyderabad and Surrounding Areas
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-brand-primary px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:bg-brand-gold hover:text-white transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Dream Quote
              </motion.button>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="h-1 bg-brand-gold mx-auto mt-12 rounded-full"
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