import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, Heart, Star, Package } from 'lucide-react';
import ImprovedQuoteModal from '../../components/QuoteGenerator/ImprovedQuoteModal';

const ReturnGiftsPage: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489111/WhatsApp_Image_2025-10-26_at_7.09.42_PM_w8onip.jpg"
            alt="Return Gifts Services - D Day Evento Hyderabad"
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
              <span className="block">Return Gifts</span>
              <span className="text-gold drop-shadow-2xl">
                Memories Wrapped with Care
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              A return gift is more than a token — it is a gesture of gratitude. It says, "Thank you for being part of our celebration."
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-brand-accent/40 w-full sm:w-auto max-w-xs sm:max-w-none flex items-center justify-center gap-2"
              >
                <Gift size={20} />
                Get Gift Quote
              </button>
              <div className="text-white/90 text-sm font-light">
                Curated gifts for 1000+ celebrations across Hyderabad
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                Why Every Detail{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Counts</span>
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
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Heart size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Strengthens Bonds</h3>
                          <p className="text-gray-700 leading-relaxed">Makes guests feel valued and appreciated, creating lasting emotional connections beyond the event.</p>
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
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Star size={24} className="text-black" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Personal Connection</h3>
                          <p className="text-gray-700 leading-relaxed">Gifts become a memory tied to the event, reflecting the host's taste, thoughtfulness, and attention to detail.</p>
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
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Package size={24} className="text-black" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Lasting Memory</h3>
                          <p className="text-gray-700 leading-relaxed">A well-chosen gift becomes a symbol of the event itself, transforming a one-day celebration into a lasting memory.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 p-6 rounded-2xl border border-brand-primary/20">
                  <p className="text-gray-800 font-semibold text-center italic">
                    "Without a return gift, the event ends. With it, the event lives on in every guest's home."
                  </p>
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
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489106/WhatsApp_Image_2025-10-26_at_7.09.58_PM_yvb7vi.jpg"
                    alt="Beautiful return gift arrangements"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489101/WhatsApp_Image_2025-10-26_at_7.10.23_PM_jvmnpn.jpg"
                    alt="Elegant gift packaging"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489096/WhatsApp_Image_2025-10-26_at_7.10.24_PM_1_pshsuq.jpg"
                    alt="Personalized gift collections"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489092/WhatsApp_Image_2025-10-26_at_7.10.24_PM_aqqbmh.jpg"
                    alt="Premium gift hampers"
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
                    "False expectations and unrealistic hopes given by gifting partners and vendors",
                    "Giving delayed responses to clients creating unnecessary stress at the last minute",
                    "Return gifts are often generic, low-quality, and forgettable",
                    "Bulk vendors compromise on packaging and presentation",
                    "Lack of personalization makes gifts feel meaningless",
                    "Poor planning leads to delays, shortages, or mismatched quantities"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-red-800 font-semibold mt-6 italic">
                  Result: Guests receive items that are used, discarded, or worse — remembered for the wrong reasons.
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
                    "We curate gifts that are unique, useful, and meaningful",
                    "Options range from traditional, modern, luxury, or themed selections",
                    "Customized packaging and personalization (names, event logo, themes)",
                    "Logistics managed perfectly — right quantity, right time, zero stress",
                    "Every gift is presented with style and thoughtfulness",
                    "Quality assurance and timely delivery guaranteed"
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
                  Result: When guests open a D DAY Evento gift, they remember not just the item — they remember the event.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event That Speaks Section */}
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
              Gifts That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Speak</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every celebration deserves gifts that match its spirit and significance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Weddings */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489111/WhatsApp_Image_2025-10-26_at_7.09.42_PM_w8onip.jpg"
                  alt="Wedding return gifts"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Weddings</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">• Silver idols and traditional hampers</p>
                <p className="text-gray-700">• Scented candles and personalized keepsakes</p>
                <p className="text-gray-700">• Elegant packaging with couple's names</p>
              </div>
            </motion.div>

            {/* Birthdays */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489106/WhatsApp_Image_2025-10-26_at_7.09.58_PM_yvb7vi.jpg"
                  alt="Birthday return gifts"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Birthdays</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">• Toys and stationery kits for kids</p>
                <p className="text-gray-700">• Cartoon-themed goodies and customized chocolates</p>
                <p className="text-gray-700">• Age-appropriate gifts that bring smiles</p>
              </div>
            </motion.div>

            {/* Corporate Events */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489101/WhatsApp_Image_2025-10-26_at_7.10.23_PM_jvmnpn.jpg"
                  alt="Corporate event gifts"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Events</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">• Branded items and eco-friendly gifts</p>
                <p className="text-gray-700">• Premium hampers with company branding</p>
                <p className="text-gray-700">• Professional presentation and packaging</p>
              </div>
            </motion.div>

            {/* Baby Showers & Traditional */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489092/WhatsApp_Image_2025-10-26_at_7.10.24_PM_aqqbmh.jpg"
                  alt="Baby shower and traditional gifts"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Baby Showers & Traditional Events</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">• Personalized baby essentials and memory books</p>
                <p className="text-gray-700">• Customized décor pieces and keepsakes</p>
                <p className="text-gray-700">• Traditional items with modern presentation</p>
              </div>
            </motion.div>
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
              Experience the difference that thoughtfulness, quality, and precision make
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
                "Unique, curated gift collections",
                "Personalization & themed packaging",
                "End-to-end logistics management",
                "Wide range of budgets — from simple tokens to luxury hampers",
                "A guarantee of quality, thought, and presentation"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
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
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489088/WhatsApp_Image_2025-10-26_at_7.11.25_PM_bp8hlf.jpg"
                  alt="Premium return gift collections"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489096/WhatsApp_Image_2025-10-26_at_7.10.24_PM_1_pshsuq.jpg"
                    alt="Professional gift presentation"
                    className="w-full h-30 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489101/WhatsApp_Image_2025-10-26_at_7.10.23_PM_jvmnpn.jpg"
                    alt="Customized gift packaging"
                    className="w-full h-30 object-cover rounded-2xl shadow-lg"
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
              Ready to Create{' '}
              <span className="text-brand-accent">Memorable Gifts?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
              "The best celebrations are remembered not just by moments, but by memories carried home. With D DAY Evento, your return gift becomes that memory."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
              >
                <Gift size={20} />
                Get Your Gift Quote
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              Free consultation • Custom curation • Premium presentation
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

export default ReturnGiftsPage;