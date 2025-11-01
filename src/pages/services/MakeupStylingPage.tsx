import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImprovedQuoteModal from '../../components/QuoteGenerator/ImprovedQuoteModal';

const MakeupStylingPage: React.FC = () => {
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
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486335/pexels-kinkate-208052_uaaluf.jpg"
            alt="Professional Makeup & Styling Services - D Day Evento Hyderabad"
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
              <span className="block">Makeup & Styling</span>
              <span className="text-gold drop-shadow-2xl">
                Confidence Crafted for the Spotlight
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Beauty is not in the makeup — it's in the confidence it creates. Where every brushstroke tells your story and every look becomes your signature.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-brand-accent/40 w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                Get Styling Quote
              </button>
              <div className="text-white/90 text-sm font-light italic">
                Shine inside and out
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Every Detail Counts - Large Image Focus */}
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
              Why Every{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Detail Counts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In every event, how you look defines how you feel — makeup enhances confidence and creates lasting impressions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Large Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486344/pexels-andersonguerra-1115128_yzzyry.jpg"
                  alt="Professional bridal makeup artistry"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Professional Artistry</h3>
                  <p className="text-white/90 drop-shadow-md">Where beauty meets confidence</p>
                </div>
              </div>


            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {[
                {
                  title: "Weddings",
                  description: "The bride's look is one of the most awaited moments; makeup enhances natural beauty while keeping it timeless.",
                  gradient: "from-brand-primary to-brand-secondary"
                },
                {
                  title: "Corporate Events",
                  description: "Styling and grooming reflect professionalism and brand identity.",
                  gradient: "from-brand-secondary to-brand-accent"
                },
                {
                  title: "Parties & Celebrations",
                  description: "Styling makes people camera-ready and elevates confidence.",
                  gradient: "from-brand-accent to-brand-primary"
                },
                {
                  title: "Photos & Videos",
                  description: "Great makeup translates to lasting memories captured beautifully.",
                  gradient: "from-brand-primary to-brand-accent"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <img
                      src="/D-Day_Evento_logo.png"
                      alt="D-Day Evento"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="text-center pt-6">
                <p className="text-lg font-semibold text-gray-800 italic">
                  Makeup & Styling isn't vanity — it's the art of presentation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* The Reality vs Our Approach - Full Width Images */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* The Reality - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-red-50 to-red-100 p-8 lg:p-12 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-red-800 mb-8">
                  The Reality in Today's Market
                </h3>
                <div className="space-y-6">
                  {[
                    "Many makeup artists use low-quality products that don't last under lights or long hours",
                    "Overdone or mismatched makeup makes clients feel uncomfortable",
                    "Poor time management causes delays in ceremonies",
                    "Styling is often generic — one style for all, ignoring personal needs"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-red-200/50 rounded-lg border-l-4 border-red-500">
                  <p className="text-red-800 font-semibold italic">
                    Result: Clients stressed, unhappy with their look, and uncomfortable in their own event.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Our Signature Approach - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/20 p-8 lg:p-12 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-brand-primary mb-8">
                  Our Signature Approach
                </h3>
                <div className="space-y-6">
                  {[
                    "We collaborate with professional stylists who customize every look",
                    "Only premium, skin-safe products are used for long-lasting results",
                    "We design looks that suit event lighting, photography, and personal features",
                    "Time-bound preparation ensures the event runs on schedule",
                    "Styling extends to families, guests of honor, and corporate teams"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-brand-primary font-medium leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-brand-primary/10 rounded-lg border-l-4 border-brand-primary">
                  <p className="text-brand-primary font-semibold italic">
                    Our promise: You look good, you feel great, you shine naturally.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events That Speak - Large Image Gallery */}
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
              Events That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Speak</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From bridal elegance to corporate polish — every look tells a story
            </p>
          </motion.div>

          {/* Large Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bridal Makeup",
                description: "Elegant, long-lasting looks with flawless finish",

                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486338/pexels-avneet-kaur-669191817-19284377_wvegyz.jpg",
              },
              {
                title: "Groom Styling",
                description: "Subtle grooming with confidence-enhancing details",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486255/pexels-marcelo-moreira-988124-1926620_foe7hm.jpg",

              },
              {
                title: "Corporate Styling",
                description: "Polished, professional grooming for teams and executives",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486344/pexels-andersonguerra-1115128_yzzyry.jpg",

              },
              {
                title: "Guest Styling",
                description: "Quick touch-ups, hair styling, and makeover sessions",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486335/pexels-kinkate-208052_uaaluf.jpg",

              },
              {
                title: "Theme Parties",
                description: "Creative looks matched to themes (retro, royal, festive)",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486346/pexels-828860-2693644_ar4laj.jpg",

              },
              {
                title: "Special Occasions",
                description: "Customized styling for anniversaries, celebrations, and milestones",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486339/pexels-andersonguerra-1121110_leuaxo.jpg",

              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-2 drop-shadow-lg text-brand-primary">{service.title}</h3>
                      <p className="text-brand-gold leading-relaxed drop-shadow-md">{service.description}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes - Process Cards */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Behind the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Beauty Magic</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              What clients don't see — the artistry, precision, and dedication that creates effortless beauty
            </p>
          </div>

          {/* Simple Process List */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation & Coordination</h3>
                  <p className="text-gray-600 leading-relaxed">Proper and continuous follow-up between clients and professional artists regarding costumes, accessories, hair styles, and final makeover outlook</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Trial Sessions</h3>
                  <p className="text-gray-600 leading-relaxed">Hours of trial sessions to finalize looks, ensuring every detail matches your vision and event theme</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">03</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Skin Analysis & Product Selection</h3>
                  <p className="text-gray-600 leading-relaxed">Managing different skin tones and sensitivities with the right premium, skin-safe products</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">04</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Lighting & Weather Coordination</h3>
                  <p className="text-gray-600 leading-relaxed">Handling event lights and weather conditions that affect makeup longevity and appearance</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">05</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Photography Coordination</h3>
                  <p className="text-gray-600 leading-relaxed">Coordinating with photographers so styling matches the lens and captures beautifully</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">06</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Team Synchronization</h3>
                  <p className="text-gray-600 leading-relaxed">Multiple team members working in parallel to ensure everyone is ready on time — it's a race against the clock</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-8 text-white shadow-2xl max-w-2xl mx-auto">
              <p className="text-xl font-semibold italic">
                The result? Effortless beauty that makes you shine naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience - Large Testimonial Images */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-brand-primary/5 to-brand-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Clients with D DAY EVENTO{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Often Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When confidence meets artistry, the results speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I felt like the best version of myself.",
                description: "Confidence radiating from within, enhanced by professional artistry",
                gradient: "from-brand-primary to-brand-secondary",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486335/pexels-kinkate-208052_uaaluf.jpg"
              },
              {
                quote: "My look stayed perfect from start to end.",
                description: "Long-lasting beauty that endures through every moment of celebration",
                gradient: "from-brand-secondary to-brand-accent",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486344/pexels-andersonguerra-1115128_yzzyry.jpg"
              },
              {
                quote: "The styling matched the event theme and photos beautifully.",
                description: "Seamless harmony between personal style, event aesthetics, and captured memories",
                gradient: "from-brand-accent to-brand-primary",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761486338/pexels-avneet-kaur-669191817-19284377_wvegyz.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* Large Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt="Client testimonial"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${testimonial.gradient} opacity-60`}></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white shadow-lg mb-4`}>
                        <span className="text-2xl">"</span>
                      </div>
                    </div>
                    <blockquote className="text-xl font-bold text-gray-900 mb-4 italic">
                      {testimonial.quote}
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed">
                      {testimonial.description}
                    </p>
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
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-3xl p-8 max-w-3xl mx-auto border border-brand-primary/20">
              <p className="text-2xl font-bold text-gray-900 mb-2">The biggest compliment?</p>
              <p className="text-xl text-gray-700 italic">
                They don't just look styled — they feel confident.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Why Choose D DAY EVENTO - Massive Image Showcase */}
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
              Where makeup becomes artistry and styling becomes confidence crafted for the spotlight
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  title: "Expert Stylists & Makeup Artists",
                  description: "Professional artists with proven portfolios and years of experience",
                  gradient: "from-brand-primary to-brand-secondary"
                },
                {
                  title: "Personalized Looks for Every Individual",
                  description: "Custom styling that reflects your personality and event theme",
                  gradient: "from-brand-secondary to-brand-accent"
                },
                {
                  title: "Premium, Skin-Friendly Products",
                  description: "Only the finest cosmetics and styling products for lasting results",
                  gradient: "from-brand-accent to-brand-primary"
                },
                {
                  title: "Punctual, Professional Execution",
                  description: "Time-bound preparation ensuring your event runs seamlessly",
                  gradient: "from-brand-primary to-brand-accent"
                },
                {
                  title: "Styling That Balances Comfort & Elegance",
                  description: "Beautiful looks that feel natural and comfortable throughout your event",
                  gradient: "from-brand-secondary to-brand-primary"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <img
                      src="/D-Day_Evento_logo.png"
                      alt="D-Day Evento"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Large Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Large Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761486335/pexels-kinkate-208052_uaaluf.jpg"
                  alt="Professional bridal makeup artistry showcase"
                  className="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Artistry in Every Detail</h3>
                  <p className="text-white/90 drop-shadow-md">Where beauty meets perfection</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-brand-accent/15 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
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
              Ready to Shine{' '}
              <span className="text-brand-accent">Inside and Out?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
              "When you trust us with your look, you get more than makeup — you get confidence crafted for the spotlight."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Get Your Styling Quote
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              Expert artists • Premium products • Personalized looks
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

export default MakeupStylingPage;