import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Music, Mic, Volume2, Users, Zap, Heart } from 'lucide-react';
import ImprovedQuoteModal from '../../components/QuoteGenerator/ImprovedQuoteModal';

const EntertainmentActivitiesPage: React.FC = () => {
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
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486403/pexels-joshsorenson-976862_pfhtyn.jpg"
            alt="Entertainment, Music & Activities Services - D Day Evento Hyderabad"
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
              <span className="block">Entertainment, Music & Activities</span>
              <span className="text-gold drop-shadow-2xl">
                The Soul and Heartbeat of Every Celebration
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Décor gives beauty, food gives flavor, but it's the sound, rhythm, and joy of entertainment that gives life to your celebration.
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
                Get Entertainment Quote
              </button>
              <div className="text-white/90 text-sm font-light">
                Where celebration never stops
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
                Why Every Beat{' '}
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
                          <Music className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Music Sets the Soul</h3>
                          <p className="text-gray-700 leading-relaxed">From soft instrumentals during dinner to high-energy beats on the dance floor - music creates the emotional journey of your event.</p>
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
                          <Users className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Activities Connect Hearts</h3>
                          <p className="text-gray-700 leading-relaxed">Interactive games and entertainment keep guests engaged, connected, and celebrating together across all age groups.</p>
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
                          <Volume2 className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Crystal Clear Moments</h3>
                          <p className="text-gray-700 leading-relaxed">Professional sound management ensures every speech, ritual, and performance is heard perfectly by every guest.</p>
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
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486399/pexels-pixabay-164960_t5dwdv.jpg"
                    alt="Live music performance"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486411/pexels-cottonbro-3402907_zi4jkf.jpg"
                    alt="DJ entertainment setup"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486408/pexels-hatice-baran-153179658-30164912_b1apvf.jpg"
                    alt="Interactive activities and games"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486400/pexels-oandremoura-2897776_hg6bwb.jpg"
                    alt="Professional sound system"
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
      </section>      {
/* The Reality vs Our Approach Section */}
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
                    "Poor sound systems — too loud, too low, or unclear audio quality",
                    "DJs play generic playlists that don't match the audience mood",
                    "Unplanned entertainment schedules leaving awkward silences",
                    "Low-quality game setups and amateur emcees make activities feel forced",
                    "Technical failures during key moments ruin the celebration flow"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-red-800 font-semibold mt-6 italic">
                  Result: Guests lose energy, conversations overpower the stage, and events feel disconnected.
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
                    "Curated Playlists – Every beat matches the moment and audience mood",
                    "Live Talent – Handpicked DJs, singers, bands, and instrumentalists",
                    "Perfect Sound Balance – Crystal-clear audio with professional technicians",
                    "Engaging Activities – Interactive games and themed entertainment corners",
                    "Seamless Flow – Entertainment blended perfectly into the event schedule",
                    "Backup Systems – Always ready for technical contingencies"
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
                  Result: Every moment sounds good, feels good, and looks unforgettable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events That Speak - Interactive Timeline Style */}
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
              Events That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Rock</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every celebration has its own rhythm - we create the perfect soundtrack for your special moments
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
              {/* Weddings */}
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Weddings & Celebrations</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Dhol beats for baraat and grand entries</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Live singers for emotional ceremony moments</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">High-energy DJs for sangeet and reception dancing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459576/WhatsApp_Image_2025-09-17_at_3.27.15_PM_1_hottu3.jpg"
                    alt="Wedding entertainment and music"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Corporate & Birthday Events */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:order-1">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460462/WhatsApp_Image_2025-08-27_at_12.16.31_AM_1_rngb3n.jpg"
                    alt="Corporate and birthday event entertainment"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
                <div className="lg:pl-12 lg:order-2">
                  <div className="bg-gradient-to-br from-brand-secondary/10 via-brand-accent/5 to-brand-primary/10 rounded-3xl p-8 shadow-xl border border-brand-secondary/20 hover:shadow-2xl transition-all duration-500">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate & Birthday Events</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Professional anchors and AV systems for presentations</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Team-building games and interactive activities</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Karaoke, dance floors, and live entertainment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cultural & Kids Events */}
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural & Kids Events</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Folk performances with traditional instruments</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Devotional singers and regional bands</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Puppet shows and cartoon-themed entertainment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486408/pexels-hatice-baran-153179658-30164912_b1apvf.jpg"
                    alt="Cultural and kids event entertainment"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Perfect Beat</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              What clients don't see - the high-pressure juggling act that we make look effortless
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Sound Checks & Testing",
                description: "Hours before the event, we test every microphone, speaker, and connection to ensure crystal-clear audio throughout",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486399/pexels-pixabay-164960_t5dwdv.jpg"
              },
              {
                number: "2",
                title: "Backup Systems Ready",
                description: "Multiple backup systems and equipment on standby - because technical failures are never an option",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486400/pexels-oandremoura-2897776_hg6bwb.jpg"
              },
              {
                number: "3",
                title: "Artist Coordination",
                description: "Coordinating with DJs, singers, bands, and emcees for perfect timing and seamless transitions",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486403/pexels-joshsorenson-976862_pfhtyn.jpg"
              },
              {
                number: "4",
                title: "Volume Balance Magic",
                description: "Balancing music volumes so conversations, rituals, and entertainment all sync smoothly without overpowering",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486411/pexels-cottonbro-3402907_zi4jkf.jpg"
              },
              {
                number: "5",
                title: "Power & Safety Management",
                description: "Managing power loads, stage safety, and equipment security while keeping the energy flowing",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486408/pexels-hatice-baran-153179658-30164912_b1apvf.jpg"
              },
              {
                number: "6",
                title: "Real-Time Engagement",
                description: "Reading the crowd, adjusting playlists, and managing guest engagement to keep the celebration alive",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486397/pexels-timmossholder-1115680_vkw90y.jpg"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When music and activities sync perfectly, clients don't just watch — they feel the celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                feedback: "Perfect Sound Quality",
                description: "The sound was perfect, not once did we face technical glitches throughout the event",
                icon: <Volume2 className="w-8 h-8" />
              },
              {
                feedback: "DJ Knew the Mood",
                description: "The DJ knew exactly when to raise the beats and when to keep it mellow",
                icon: <Music className="w-8 h-8" />
              },
              {
                feedback: "Guests Stayed Engaged",
                description: "Guests were engaged from start to finish - no one was sitting idle",
                icon: <Users className="w-8 h-8" />
              },
              {
                feedback: "Energy Never Dropped",
                description: "The celebration never stopped - there was always something exciting happening",
                icon: <Zap className="w-8 h-8" />
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.feedback}</h3>
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
              Where entertainment is designed, not random - creating celebrations that never stop
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
                  title: "Expert DJs, Singers, Bands & Artists",
                  description: "Handpicked talent that matches your event's vibe and energy"
                },
                {
                  title: "Premium Sound & Light Systems",
                  description: "Professional equipment with expert handling for flawless audio-visual experience"
                },
                {
                  title: "Entertainment Tailored to Your Audience",
                  description: "Customized playlists and activities that match your guests' mood and preferences"
                },
                {
                  title: "Creative Interactive Activities",
                  description: "Engaging games and entertainment for all age groups and event types"
                },
                {
                  title: "Energy, Clarity & Celebration Guarantee",
                  description: "A promise of non-stop entertainment without technical chaos"
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
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486403/pexels-joshsorenson-976862_pfhtyn.jpg"
                  alt="Professional entertainment setup"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486399/pexels-pixabay-164960_t5dwdv.jpg"
                    alt="Live music performance"
                    className="w-full h-30 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486411/pexels-cottonbro-3402907_zi4jkf.jpg"
                    alt="DJ and sound system"
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
              Ready to Make Your Event{' '}
              <span className="text-brand-accent">Rock?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
              "When the beats drop, the lights shine, and the laughter begins — that's not just entertainment, that's D DAY EVENTO."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Get Your Entertainment Quote
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              Expert talent • Premium systems • Non-stop celebration
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

export default EntertainmentActivitiesPage;