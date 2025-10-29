import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Shield, CheckCircle, Users, Settings, Truck } from 'lucide-react';
import ImprovedQuoteModal from '../../components/QuoteGenerator/ImprovedQuoteModal';

const TentHouseRentalsPage: React.FC = () => {
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
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488970/pexels-daria-andrievskaya-137434684-11066743_wjydop.jpg"
            alt="Tent House Materials & Rentals - D Day Evento Hyderabad"
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
              <span className="block">Tent House Materials</span>
              <span className="text-gold drop-shadow-2xl">
                The Foundation of Every Great Event
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Every event needs a foundation of comfort and structure — the unseen framework that makes celebrations possible.
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
                <Home size={20} />
                Get Rental Quote
              </button>
              <div className="text-white/90 text-sm font-light">
                Premium rentals for 1000+ events across Hyderabad
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
                          <Users size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Guest Comfort</h3>
                          <p className="text-gray-700 leading-relaxed">Ensures comfort and convenience for every guest with quality seating, proper ventilation, and weather protection.</p>
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
                          <Shield size={24} className="text-black" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Event Structure</h3>
                          <p className="text-gray-700 leading-relaxed">Brings structure to outdoor and indoor events with pandals, tents, stages, and proper infrastructure setup.</p>
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
                          <Settings size={24} className="text-black" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Invisible Essentials</h3>
                          <p className="text-gray-700 leading-relaxed">Covers the basics guests never notice — seating, tables, air coolers, fans, carpets — but always feel.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 p-6 rounded-2xl border border-brand-primary/20">
                  <p className="text-gray-800 font-semibold text-center italic">
                    "Without tent house setups, even the grandest event would feel incomplete or uncomfortable."
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
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488967/pexels-simeart-27958450_iysfml.jpg"
                    alt="Premium tent house setup"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488961/pexels-thevisionaryvows-33331296_g6css9.jpg"
                    alt="Event seating arrangements"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488958/pexels-thevisionaryvows-33485957_ap4thc.jpg"
                    alt="Professional event infrastructure"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488970/pexels-daria-andrievskaya-137434684-11066743_wjydop.jpg"
                    alt="Complete event setup"
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
                    "Vendors often provide mismatched, outdated, or poor-quality materials",
                    "Chairs, sofas, and tables are delivered in bad condition or dirty",
                    "Delays in delivery cause panic during setup",
                    "Lack of professional maintenance leads to torn carpets, broken furniture, unstable stages",
                    "Pricing is unclear and inconsistent, often with hidden charges"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-red-800 font-semibold mt-6 italic">
                  Result: Hosts feel embarrassed, and guests notice the lack of quality.
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
                    "Only well-maintained, quality-checked, and spotless materials are used",
                    "Wide range of options — from traditional shamiyanas to modern modular furniture",
                    "On-time delivery and professional setup crews",
                    "Attention to aesthetics — we ensure rentals match the event décor",
                    "Transparent pricing with no hidden surprises",
                    "Full coordination so clients never deal with multiple vendors"
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
                  Result: With D DAY Evento, rentals don't just serve a purpose — they elevate the entire event experience.
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
              Rentals That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Speak</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every event type deserves infrastructure that matches its grandeur and requirements
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
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488970/pexels-daria-andrievskaya-137434684-11066743_wjydop.jpg"
                  alt="Wedding tent house setup"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Weddings</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">• Stages, mandaps, and ceremonial platforms</p>
                <p className="text-gray-700">• Seating lounges and premium furniture</p>
                <p className="text-gray-700">• Carpets, chandeliers, and decorative elements</p>
              </div>
            </motion.div>

            {/* Corporate Events */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488967/pexels-simeart-27958450_iysfml.jpg"
                  alt="Corporate event setup"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Events</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">• Modular stalls and exhibition setups</p>
                <p className="text-gray-700">• Podiums, conference chairs, and meeting furniture</p>
                <p className="text-gray-700">• LED walls and professional presentation equipment</p>
              </div>
            </motion.div>

            {/* Birthdays & Private Parties */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488961/pexels-thevisionaryvows-33331296_g6css9.jpg"
                  alt="Birthday party setup"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Birthdays & Private Parties</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">• Balloon frames and themed furniture</p>
                <p className="text-gray-700">• Soft flooring for kids and play areas</p>
                <p className="text-gray-700">• Colorful seating and party-specific setups</p>
              </div>
            </motion.div>

            {/* Outdoor Events */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488958/pexels-thevisionaryvows-33485957_ap4thc.jpg"
                  alt="Outdoor event setup"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdoor Events</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">• Shamiyanas and waterproof tents</p>
                <p className="text-gray-700">• Air coolers, fans, and climate control</p>
                <p className="text-gray-700">• Mobile stages and weather-resistant furniture</p>
              </div>
            </motion.div>
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
              Behind the Scenes{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">What Clients Don't See</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The challenging process we make look seamless and stress-free
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Inventory Management",
                description: "Managing extensive inventory to ensure enough stock during peak season, tracking every item's condition and availability",
                icon: <Settings size={24} />
              },
              {
                number: "2",
                title: "Quality Control",
                description: "Cleaning and sanitizing every chair, table, or carpet before dispatch, ensuring spotless condition for every event",
                icon: <CheckCircle size={24} />
              },
              {
                number: "3",
                title: "Logistics Planning",
                description: "Complex logistics planning for bulky materials, coordinating multiple deliveries and pickup schedules",
                icon: <Truck size={24} />
              },
              {
                number: "4",
                title: "Emergency Response",
                description: "Handling last-minute emergencies like broken furniture or weather changes with backup solutions",
                icon: <Shield size={24} />
              },
              {
                number: "5",
                title: "Team Coordination",
                description: "Setup coordination with decorators, caterers, and sound teams to ensure seamless integration",
                icon: <Users size={24} />
              },
              {
                number: "6",
                title: "Professional Setup",
                description: "Expert installation and arrangement ensuring everything is perfectly placed and secure for the event",
                icon: <Home size={24} />
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
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center text-black font-bold text-lg shadow-lg">
                        {item.number}
                      </div>
                      <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 p-8 rounded-3xl border border-brand-primary/20">
              <p className="text-gray-800 font-semibold text-lg italic">
                "It's a challenging process — but we make it look seamless and stress-free."
              </p>
            </div>
          </motion.div>
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
              Clients Often{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Everything looked neat, polished, and perfectly placed.",
                emotion: "Impressed",
                number: "✨"
              },
              {
                quote: "For once, we didn't have to chase rental vendors — D DAY Evento handled it all.",
                emotion: "Relieved",
                number: "💕"
              },
              {
                quote: "Our outdoor event felt grand and organized, even in peak summer.",
                emotion: "Confident",
                number: "🌟"
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
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-brand-primary/30">
                    <span className="text-3xl">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.emotion}</h3>
                  <p className="text-gray-600 leading-relaxed italic">"{item.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 p-8 rounded-3xl border border-brand-accent/30">
              <p className="text-gray-800 font-bold text-xl">
                Guests rarely notice rentals when they're perfect — but they immediately notice when they're not. With us, it's always perfect.
              </p>
            </div>
          </motion.div>
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
              Experience the luxury of effortlessness with our premium rental solutions
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
                "Premium-quality materials",
                "Clean, well-maintained, ready-to-use rentals",
                "Timely delivery and professional setup",
                "Wide range of options to suit any theme or scale",
                "One-stop solution — no juggling multiple vendors"
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
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488970/pexels-daria-andrievskaya-137434684-11066743_wjydop.jpg"
                  alt="Premium tent house materials"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488967/pexels-simeart-27958450_iysfml.jpg"
                    alt="Professional event setup"
                    className="w-full h-30 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761488961/pexels-thevisionaryvows-33331296_g6css9.jpg"
                    alt="Quality rental furniture"
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
              Ready to Build Your{' '}
              <span className="text-brand-accent">Perfect Foundation?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
              "Great events are built on strong foundations. With D DAY Evento, every chair, carpet, and tent speaks of class and perfection."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
              >
                <Home size={20} />
                Get Your Rental Quote
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              Free consultation • Premium materials • Professional setup
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

export default TentHouseRentalsPage;