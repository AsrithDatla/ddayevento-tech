import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Icons removed for cleaner design
import ImprovedQuoteModal from '../../components/QuoteGenerator/ImprovedQuoteModal';
import { ArrowRight } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Shield } from 'lucide-react';

const FoodCateringPage: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showMenuModal, setShowMenuModal] = useState(false);
  const [activeMenuType, setActiveMenuType] = useState<'food' | 'party'>('food');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483248/pexels-micklatter-18749077_uhxaij.jpg"
            alt="Food & Catering Services - D Day Evento Hyderabad"
            className="w-full h-full object-cover object-center brightness-75 contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 via-transparent to-brand-accent/30"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-2xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}
            >
              <span className="block">Food & Catering</span>
              <span className="text-gold drop-shadow-2xl">
                Flavors That Define Celebrations
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Food is not just about eating — it's about experience, culture, and memory. Where flavors become emotions and dining becomes part of the story.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-brand-accent/40 w-full sm:w-auto max-w-xs sm:max-w-none">
                Get Catering Quote
              </button>
              <div className="text-white/90 text-sm font-light">
                The taste of celebration itself
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu View Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Explore Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Complete Menu</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From traditional South Indian feasts to global cuisines - discover our full range of culinary offerings
            </p>
          </motion.div>

          {/* Menu Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Food Menu Card */}
            <motion.div
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => {
                setActiveMenuType('food');
                setShowMenuModal(true);
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Header with Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Traditional & Global
                  </div>
                  <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  Food Menu
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Comprehensive menu featuring traditional South Indian cuisines, North Indian classics, global dishes, live counters, and special dietary options.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                    Traditional South & North Indian
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></div>
                    Global Cuisines & Live Counters
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                    Desserts & Special Dietary Options
                  </div>
                </div>

                {/* CTA Button */}
                <div className="bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:from-brand-secondary group-hover:to-brand-primary text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-lg group-hover:shadow-xl text-center">
                  View Complete Food Menu
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            {/* Party Menu Card */}
            <motion.div
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => {
                setActiveMenuType('party');
                setShowMenuModal(true);
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-brand-gold/5 to-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Header with Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-brand-accent to-brand-gold text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Celebration Special
                  </div>
                  <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse"></div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-accent transition-colors duration-300">
                  Party Menu
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Special party packages with appetizers, main courses, beverages, and celebration treats perfect for birthdays, anniversaries, and gatherings.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mr-3"></div>
                    Party Starters & Finger Foods
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                    Buffet Specials & Live Stations
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                    Beverages, Cakes & Sweet Treats
                  </div>
                </div>

                {/* CTA Button */}
                <div className="bg-gradient-to-r from-brand-accent to-brand-gold group-hover:from-brand-gold group-hover:to-brand-accent text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-lg group-hover:shadow-xl text-center">
                  View Complete Party Menu
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Modal */}
      {showMenuModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl w-full h-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {activeMenuType === 'food' ? 'Food Menu' : 'Party Menu'}
              </h3>
              <div className="flex items-center gap-2 sm:gap-4">
                <a
                  href={activeMenuType === 'food' ? '/Foodmenu.pdf' : '/party-menu.pdf'}
                  download={`D-Day-Evento-${activeMenuType === 'food' ? 'Food' : 'Party'}-Menu.pdf`}
                  className={`${
                    activeMenuType === 'food' 
                      ? 'bg-brand-primary hover:bg-brand-secondary' 
                      : 'bg-brand-accent hover:bg-brand-gold'
                  } text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium`}
                >
                  Download
                </a>
                <button
                  onClick={() => setShowMenuModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Viewer Container */}
            <div className="flex-1 p-4 sm:p-6 overflow-hidden">
              <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <iframe
                  src={activeMenuType === 'food' ? '/Foodmenu.pdf' : '/party-menu.pdf'}
                  className="w-full h-full"
                  title={`${activeMenuType === 'food' ? 'Food' : 'Party'} Menu PDF`}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-200 flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                  Having trouble viewing? 
                  <a 
                    href={activeMenuType === 'food' ? '/Foodmenu.pdf' : '/party-menu.pdf'} 
                    target="_blank" 
                    className={`${
                      activeMenuType === 'food' ? 'text-brand-primary' : 'text-brand-accent'
                    } hover:underline ml-1 font-medium`}
                  >
                    Open in new tab
                  </a>
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className={`${
                      activeMenuType === 'food' 
                        ? 'bg-brand-primary hover:bg-brand-secondary' 
                        : 'bg-brand-accent hover:bg-brand-gold'
                    } text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium`}
                  >
                    Get Quote
                  </button>
                  <button
                    onClick={() => setShowMenuModal(false)}
                    className="border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-300 text-xs sm:text-sm font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Why Every Detail Counts Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-brand-primary/5 to-brand-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight">
                Why Every Flavor{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Matters</span>
              </h2>

              <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                <div className="grid grid-cols-1 gap-8">
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-gradient-to-br from-brand-primary/15 via-brand-secondary/10 to-brand-accent/15 p-8 rounded-3xl border-l-6 border-brand-primary transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-2xl p-1 w-fit">
                          <div className="bg-white rounded-xl px-4 py-2">
                            <span className="text-brand-primary font-bold text-sm">01</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Lasting Impressions</h3>
                          <p className="text-gray-700 leading-relaxed">Food leaves the strongest and longest-lasting impression on guests - they may forget the music or décor, but they always remember the taste.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="bg-gradient-to-br from-brand-secondary/15 via-brand-accent/10 to-brand-primary/15 p-8 rounded-3xl border-l-6 border-brand-secondary transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-brand-secondary/20 to-brand-accent/20 rounded-2xl p-1 w-fit">
                          <div className="bg-white rounded-xl px-4 py-2">
                            <span className="text-brand-secondary font-bold text-sm">02</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Cultural Connection</h3>
                          <p className="text-gray-700 leading-relaxed">A perfect menu reflects the host's warmth, personality, and culture - creating bonds through shared culinary experiences.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="bg-gradient-to-br from-brand-accent/15 via-brand-primary/10 to-brand-secondary/15 p-8 rounded-3xl border-l-6 border-brand-accent transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 rounded-2xl p-1 w-fit">
                          <div className="bg-white rounded-xl px-4 py-2">
                            <span className="text-brand-accent font-bold text-sm">03</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Social Experience</h3>
                          <p className="text-gray-700 leading-relaxed">Dining is where conversations happen, bonds form, and memories are made - respecting diverse preferences and dietary needs.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483246/pexels-pavel-danilyuk-7518973_ecjim9.jpg"
                    alt="Traditional cuisine preparation"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483245/pexels-skylar-kang-6378164_adirex.jpg"
                    alt="Elegant food presentation"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483244/pexels-valeriya-25388928_yxtl1m.jpg"
                    alt="Live cooking stations"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483252/pexels-ekrulila-11906261_gmzobs.jpg"
                    alt="Professional catering service"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-accent/30 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-brand-primary/25 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>  
    {/* The Reality vs Our Approach Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* The Reality */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border-l-6 border-red-400">
                <h3 className="text-2xl font-bold text-red-800 mb-6">The Reality in Today's Market</h3>
                <div className="space-y-4">
                  {[
                    "Quantity over Quality – Focus on filling plates, not crafting flavors",
                    "Repetitive Menus – Same buffet style with little innovation or variety",
                    "Hygiene Concerns – Poor kitchen standards, stale ingredients, unsafe handling",
                    "Untrained Staff – Servers without etiquette or knowledge of guest service",
                    "Mismatched Presentation – Food that tastes fine but looks unappealing"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-red-800 font-semibold mt-6 italic">
                  Result: Guests leave saying, "Food was okay, nothing special."
                </p>
              </div>
            </motion.div>

            {/* Our Signature Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-l-6 border-green-400">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Our Signature Approach</h3>
                <div className="space-y-4">
                  {[
                    "Customized Menus – From South Indian feasts to global cuisines matching your event",
                    "Live Counters – Interactive dosa stations, pasta counters, grills, and chaat stalls",
                    "Premium Ingredients – Fresh, high-quality produce, meats, and authentic spices",
                    "Hygiene First – Sanitized kitchens, proper storage, and professional chefs",
                    "Elegant Presentation – Food plated with style, buffets designed like décor",
                    "Professional Service Staff – Trained in etiquette, attentive, and guest-friendly"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-green-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-green-800 font-semibold mt-6 italic">
                  Result: Catering becomes an art of hospitality that guests remember fondly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cuisines That Speak - Interactive Timeline Style */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Cuisines That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Speak</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From traditional spreads to global cuisines - every dish tells a story of flavor and culture
            </p>
          </motion.div>

          {/* Timeline Style Layout */}
          <div className="relative">
            {/* Central Timeline Line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent hidden lg:block z-10"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            ></motion.div>

            <div className="space-y-16">
              {/* Traditional Indian Cuisines */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:text-right lg:pr-12">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 rounded-3xl p-8 shadow-xl border border-brand-primary/20 hover:shadow-2xl transition-all duration-500">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Indian Cuisines</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">South Indian banana leaf spreads with authentic flavors</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">North Indian buffets with rich gravies and tandoors</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Royal sweets and traditional dessert spreads</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483250/pexels-fireberrytech-10882875_vzebz5.jpg"
                    alt="Traditional Indian cuisine spread"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Global Cuisines */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:order-1">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483246/pexels-pavel-danilyuk-7518973_ecjim9.jpg"
                    alt="Global cuisine and continental dishes"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
                <div className="lg:pl-12 lg:order-2">
                  <div className="bg-gradient-to-br from-brand-secondary/10 via-brand-accent/5 to-brand-primary/10 rounded-3xl p-8 shadow-xl border border-brand-secondary/20 hover:shadow-2xl transition-all duration-500">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Cuisines</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Italian wood-fired pizzas, pastas, and risottos</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Continental platters with fresh salads and baked delicacies</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Pan-Asian sushi, dim sum, Thai curries, and stir-fries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Live Counters & Interactive Dining */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:text-right lg:pr-12">
                  <div className="bg-gradient-to-br from-brand-accent/10 via-brand-primary/5 to-brand-secondary/10 rounded-3xl p-8 shadow-xl border border-brand-accent/20 hover:shadow-2xl transition-all duration-500">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Counters & Interactive Dining</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Live chaat counters and street food stations</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">BBQ grills and tandoor cooking demonstrations</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Dessert stations and mocktail bars</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483244/pexels-valeriya-25388928_yxtl1m.jpg"
                    alt="Live cooking stations and interactive dining"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>      
{/* Behind the Scenes Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-primary/5 via-white to-brand-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Behind the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Kitchen Magic</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Guests only see delicious food. We handle the logistics, heat, and hustle in the kitchen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Menu Planning & Customization",
                description: "Balancing guest preferences, dietary needs, cultural requirements, and event themes to create the perfect menu",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761483248/pexels-micklatter-18749077_uhxaij.jpg"
              },
              {
                number: "2",
                title: "Premium Ingredient Sourcing",
                description: "Finding the freshest produce, authentic spices, and rare ingredients from trusted suppliers across the region",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761483245/pexels-skylar-kang-6378164_adirex.jpg"
              },
              {
                number: "3",
                title: "Kitchen Coordination",
                description: "Dozens of professional chefs working in perfect sync, managing multiple cuisines and cooking techniques simultaneously",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761483246/pexels-pavel-danilyuk-7518973_ecjim9.jpg"
              },
              {
                number: "4",
                title: "Time Pressure Management",
                description: "Cooking for hundreds of guests within tight timeframes while ensuring every dish is served hot and fresh",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761483244/pexels-valeriya-25388928_yxtl1m.jpg"
              },
              {
                number: "5",
                title: "Service Precision",
                description: "Keeping buffets replenished, plates cleared, drinks served, and maintaining elegant presentation throughout the event",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761483252/pexels-ekrulila-11906261_gmzobs.jpg"
              },
              {
                number: "6",
                title: "Hygiene & Safety Standards",
                description: "Maintaining the highest standards of food safety, kitchen cleanliness, and proper storage throughout the entire process",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761483250/pexels-fireberrytech-10882875_vzebz5.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center text-black font-bold text-lg shadow-lg">
                        {item.number}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Experience Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              With D DAY EVENTO,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Clients Feel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When food becomes a shared memory of the occasion, clients experience true hospitality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                feeling: "Confident & Proud",
                description: "Knowing their guests will leave delighted and talking about the exceptional food quality",
                icon: <Shield className="w-8 h-8" />
              },
              {
                feeling: "Relaxed & Stress-Free",
                description: "Service and hygiene are professionally managed, allowing them to enjoy their own event",
                icon: <Heart className="w-8 h-8" />
              },
              {
                feeling: "Proud & Appreciated",
                description: "When guests compliment both the incredible taste and beautiful presentation",
                icon: <span className="text-3xl">👨‍🍳</span>
              },
              {
                feeling: "Connected & Joyful",
                description: "As food becomes the centerpiece that brings everyone together in celebration",
                icon: <span className="text-3xl">🥂</span>
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-brand-primary/30">
                  <div className="text-brand-primary">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.feeling}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
     {/* Why Choose D DAY EVENTO Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">D DAY EVENTO</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Where catering becomes an art of hospitality and every meal is a masterpiece
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  title: "Wide Range of Cuisines & Custom Menus",
                  description: "From traditional Indian to global cuisines, tailored to your preferences and guest list"
                },
                {
                  title: "Hygiene & Safety as Top Priority",
                  description: "Sanitized kitchens, professional chefs, and the highest food safety standards"
                },
                {
                  title: "Trained Chefs & Professional Service Staff",
                  description: "Expert culinary team and service staff trained in hospitality and guest relations"
                },
                {
                  title: "Stunning Buffet & Live Counter Setups",
                  description: "Interactive dining experiences with elegant presentation and live cooking stations"
                },
                {
                  title: "Reliable Backend Team Managing Everything",
                  description: "Seamless coordination from menu planning to final service, handled professionally"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 p-1.5">
                    <img
                      src="/D-Day_Evento_logo.png"
                      alt="D-Day Evento"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-3 gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483248/pexels-micklatter-18749077_uhxaij.jpg"
                    alt="Professional catering setup"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483246/pexels-pavel-danilyuk-7518973_ecjim9.jpg"
                    alt="Traditional cuisine preparation"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                {/* Center Column */}
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483245/pexels-skylar-kang-6378164_adirex.jpg"
                    alt="Elegant food presentation"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483244/pexels-valeriya-25388928_yxtl1m.jpg"
                    alt="Live cooking stations"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                {/* Right Column */}
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483252/pexels-ekrulila-11906261_gmzobs.jpg"
                    alt="Professional catering service"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761483250/pexels-fireberrytech-10882875_vzebz5.jpg"
                    alt="Traditional cuisine spread"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-primary/30 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-brand-accent/25 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-brand-primary to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
              Ready to Create Unforgettable{' '}
              <span className="text-brand-accent">Flavors?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
              "At D DAY EVENTO, food is not just served — it is crafted, presented, and remembered as the flavor of your celebration."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Get Your Catering Quote
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              Custom menus • Premium ingredients • Professional service
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      <ImprovedQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default FoodCateringPage;