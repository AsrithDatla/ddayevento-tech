import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImprovedQuoteModal from '../../components/QuoteGenerator/ImprovedQuoteModal';

const DecorationDesignPage: React.FC = () => {
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
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401564/pexels-prince-nature-273406283-34389342_fym4g2.jpg"
            alt="Decoration & Design Services - D Day Evento Hyderabad"
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
              <span className="block">Decoration & Design</span>
              <span className="text-gold drop-shadow-2xl">
                Crafting Atmosphere, Creating Memories
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Decoration & design are the soul of any event. They are not just flowers, drapes, or lights — they are the language of celebration.
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
                Get Design Quote
              </button>
              <div className="text-white/90 text-sm font-light">
                Trusted by 1000+ clients across Hyderabad
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Every Detail Counts Section - Event Page Style */}
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
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-white text-xl font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">The Moment They Walk In</h3>
                          <p className="text-gray-700 leading-relaxed">That first gasp of wonder when guests see your beautifully transformed space - it sets the tone for everything that follows.</p>
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
                          <span className="text-black text-xl font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Story, Your Style</h3>
                          <p className="text-gray-700 leading-relaxed">Whether you dream of royal elegance, rustic charm, or modern sophistication - every detail reflects who you are.</p>
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
                          <span className="text-black text-xl font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Picture Perfect Moments</h3>
                          <p className="text-gray-700 leading-relaxed">Every corner becomes a backdrop for memories - photos that will make you smile for years to come.</p>
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
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401564/pexels-asadphoto-169190_v0yuna.jpg"
                    alt="Beautiful floral arrangements"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401564/pexels-naresh99-31002035_v82fcz.jpg"
                    alt="Elegant table settings"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401564/pexels-olly-947914_zlqfo1.jpg"
                    alt="Perfect lighting design"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401562/360_F_285163203_idtMHwkK28kxOGOLmDW1sFB206dlc40B_ztwycg.jpg"
                    alt="Grand backdrop decoration"
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
                    "Use repeated, outdated themes for every event",
                    "Opt for cheap materials that look flashy but lack class",
                    "Focus only on the stage, ignoring guest areas and details",
                    "Promise 'grand setups' but deliver unfinished work",
                    "Struggle with coordination — last-minute chaos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-red-800 font-semibold mt-6 italic">
                  Result: Events that look ordinary, incomplete, and rushed.
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
                    "Concept-to-Execution – Every design begins with your story",
                    "Tailored Themes – Royal, minimalist, fun — all personalized",
                    "Premium Materials – Quality fabrics, fresh flowers, safe lighting",
                    "Attention to Detail – Every corner designed to perfection",
                    "Time Management – Setup starts early, tested before guests arrive",
                    "Seamless Finish – Clean, polished, and photo-ready"
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
                  Result: Events that feel personal, complete, and absolutely magical.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Design Services - Interactive Timeline Style */}
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
              Designs That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Speak</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every space tells a story - let us help you tell yours beautifully
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
              {/* House Decorations */}
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Intimate Home Celebrations</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Simple yet classy décor for family gatherings</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Warm lighting and comfortable seating arrangements</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Personal touches that make guests feel at home</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401564/pexels-naresh99-31002035_v82fcz.jpg"
                    alt="House decoration for intimate celebrations"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Grand Stage & Backdrop */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:order-1">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401562/4_w6lhs2.jpg"
                    alt="Grand stage and backdrop decoration"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
                <div className="lg:pl-12 lg:order-2">
                  <div className="bg-gradient-to-br from-brand-secondary/10 via-brand-accent/5 to-brand-primary/10 rounded-3xl p-8 shadow-xl border border-brand-secondary/20 hover:shadow-2xl transition-all duration-500">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Grand Stages & Backdrops</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Themed photo walls that become the heart of your event</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Custom designs that match your celebration's personality</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Professional lighting to make every photo magical</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Table Settings & Ambiance */}
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Table Settings & Ambiance</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Fine arrangements with fresh flowers and candles</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Elegant centerpieces that spark conversations</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Lighting that creates the perfect dining atmosphere</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401564/pexels-asadphoto-169190_v0yuna.jpg"
                    alt="Elegant table settings and arrangements"
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
              The Love & Care{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Behind Every Detail</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              While you sleep peacefully, our team works with passion to create your dream celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Sourcing with Heart",
                description: "We personally visit vendors, touch fabrics, smell flowers, and choose only what makes us smile - because your joy matters to us",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761401562/360_F_282074655_HkdldgH3947EHZHkNc6cLrxshERJJ8VR_fhq2or.jpg"
              },
              {
                number: "2",
                title: "Team Harmony",
                description: "Our carpenters, florists, and technicians work like a family - everyone knows their role in creating your perfect day",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761401563/pexels-thatguycraig000-1652303_wnyhtj.jpg"
              },
              {
                number: "3",
                title: "Midnight Magic",
                description: "While you dream about your big day, we're there at 2 AM arranging flowers, hanging lights, making everything perfect",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761401562/9c2423978fe584b4ddaba22ed0348535_ryksnh.jpg"
              },
              {
                number: "4",
                title: "Every Inch Matters",
                description: "We measure twice, adjust thrice - because when you walk in, every single detail should make your heart skip a beat",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761401564/pexels-leeloothefirst-4661619_sz2gml.jpg"
              },
              {
                number: "5",
                title: "Invisible Perfection",
                description: "We hide the wires, smooth the wrinkles, polish every surface - so all you see is beauty, not the hard work",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761401562/4_w6lhs2.jpg"
              },
              {
                number: "6",
                title: "Ready for Your Moment",
                description: "When you arrive, everything is picture-perfect - ready for your first dance, first kiss, first celebration as a family",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761401563/pexels-zephyrevents-32866203_eefoys.jpg"
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                emotion: "Tears of Joy",
                description: "When they see their dream come to life exactly as they imagined",
                number: "💕"
              },
              {
                emotion: "Pure Confidence",
                description: "Knowing every guest will be amazed by the beauty and thoughtfulness",
                number: "✨"
              },
              {
                emotion: "Complete Peace",
                description: "No stress, no chasing vendors - just pure enjoyment of their special day",
                number: "🌟"
              },
              {
                emotion: "Heart Full of Pride",
                description: "When guests can't stop talking about how beautiful everything looks",
                number: "🎉"
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
                  <span className="text-3xl">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.emotion}</h3>
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
              Experience the difference that passion, precision, and professionalism make
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
                "Creative themes customized for every occasion",
                "Premium materials & flawless finishing",
                "Complete venue coverage — not just stage setups",
                "Strong backend team with professional expertise",
                "On-time delivery, no last-minute excuses"
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
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401564/pexels-prince-nature-273406283-34389342_fym4g2.jpg"
                  alt="Professional decoration setup"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401563/pexels-zephyrevents-32866203_eefoys.jpg"
                    alt="Event ambiance and atmosphere"
                    className="w-full h-30 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761401562/4_w6lhs2.jpg"
                    alt="Stage decoration details"
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
              Ready to Transform Your{' '}
              <span className="text-brand-accent">Event Space?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
              "At D DAY EVENTO, decoration is not just about design — it is about creating an atmosphere where every moment feels timeless, elegant, and unforgettable."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Get Your Design Quote
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              Free consultation • Custom designs • Professional execution
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

export default DecorationDesignPage;