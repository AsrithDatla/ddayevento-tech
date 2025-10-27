import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImprovedQuoteModal from '../../components/QuoteGenerator/ImprovedQuoteModal';

const CakesConfectioneryPage: React.FC = () => {
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
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489032/WhatsApp_Image_2025-10-26_at_7.04.02_PM_1_illv4c.jpg"
            alt="Premium Cakes & Confectionery Services - D Day Evento Hyderabad"
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
              <span className="block">Cakes & Confectionery</span>
              <span className="text-gold drop-shadow-2xl">
                The Sweetest Memory of Every Event
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              A cake is not just dessert — it is the centerpiece of celebration. Where every slice tells a story and becomes the sweetest memory.
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
                Get Cake Quote
              </button>
              <div className="text-white/90 text-sm font-light italic">
                Crafted experiences, not just cakes
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Every Detail Counts - Cake Gallery Showcase */}
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
              The cake-cutting moment is often the highlight of the event — it gathers everyone in a single frame of happiness
            </p>
          </motion.div>

          {/* Masonry-Style Cake Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Featured Cake */}
            <motion.div
              className="md:col-span-2 lg:col-span-2 lg:row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457964/WhatsApp_Image_2025-09-17_at_4.36.15_PM_wmavz3.jpg"
                  alt="Elegant multi-tier wedding cake"
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-lg">Wedding Masterpiece</h3>
                  <p className="text-white/90 text-lg drop-shadow-md">Multi-tier elegance with floral detailing</p>
                </div>
              </div>
            </motion.div>

            {/* Smaller Cake Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl group">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489021/WhatsApp_Image_2025-10-26_at_7.04.28_PM_1_cza7ac.jpg"
                  alt="Birthday themed cake"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg font-bold text-white drop-shadow-lg">Birthday Special</h4>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl group">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460321/WhatsApp_Image_2025-08-27_at_12.56.40_AM_iqiv1y.jpg"
                  alt="Anniversary celebration cake"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-lg font-bold text-white drop-shadow-lg">Anniversary Joy</h4>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Points */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              {
                title: "Centerpiece Moment",
                description: "The cake-cutting moment becomes the highlight that gathers everyone together",
                gradient: "from-brand-primary to-brand-secondary"
              },
              {
                title: "Visual Beauty",
                description: "Well-designed cakes add beauty and perfectly match your event theme",
                gradient: "from-brand-secondary to-brand-accent"
              },
              {
                title: "Lasting Impression",
                description: "The taste lingers even after celebration — creating sweet memories",
                gradient: "from-brand-accent to-brand-primary"
              },
              {
                title: "Complete Celebration",
                description: "Without a cake, celebration feels unfinished. With the right cake, it feels complete",
                gradient: "from-brand-primary to-brand-accent"
              }
            ].map((point, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${point.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <img
                    src="/D-Day_Evento_logo.png"
                    alt="D-Day Evento"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* The Reality vs Our Approach - Side by Side Comparison */}
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
                    "Many bakeries offer generic designs with little creativity",
                    "Taste often doesn't match the appearance — good-looking cakes, poor flavor",
                    "Last-minute delays or melting issues ruin the highlight moment",
                    "Lack of customization means clients get standard cakes that don't reflect their story"
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
                    The sad truth: what should be the sweetest part of the event sometimes becomes the most disappointing.
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
                    "We collaborate with expert bakers who create customized designs for every event theme",
                    "Only premium ingredients are used for freshness and taste",
                    "We ensure timely delivery and perfect presentation — the cake arrives in style",
                    "From size to flavor to design, every detail is tailored to client preference",
                    "Cakes are not just cut — they are presented as a moment to remember"
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
                    At D DAY Evento, cakes are not just baked — they are crafted experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events That Speak - Cake Categories Showcase */}
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
              From wedding masterpieces to birthday celebrations — every cake tells a unique story
            </p>
          </motion.div>

          {/* Alternating Layout for Different Cake Categories */}
          <div className="space-y-20">
            {/* Wedding Cakes */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457928/WhatsApp_Image_2025-09-17_at_4.35.59_PM_1_ypw9le.jpg"
                  alt="Elegant wedding cake with intricate design"
                  className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent rounded-3xl"></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Wedding Cakes</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Multi-tier cakes with elegant fondant designs and floral detailing. Each layer tells the story of your love, crafted to perfection for your special day.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                    <img
                      src="/D-Day_Evento_logo.png"
                      alt="D-Day Evento"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-brand-primary font-semibold">Custom designs for your dream wedding</span>
                </div>
              </div>
            </motion.div>

            {/* Birthday Cakes */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 lg:order-2">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Birthday Celebrations</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Themed cakes from cartoon characters to superhero designs, luxury styles, or customized photo cakes. Making every birthday unforgettable.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center">
                    <img
                      src="/D-Day_Evento_logo.png"
                      alt="D-Day Evento"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-brand-secondary font-semibold">Personalized themes for every age</span>
                </div>
              </div>
              <div className="relative lg:order-1">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489021/WhatsApp_Image_2025-10-26_at_7.04.28_PM_1_cza7ac.jpg"
                  alt="Creative birthday cake with themed decorations"
                  className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/40 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>

            {/* Corporate & Special Occasions */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460355/WhatsApp_Image_2025-08-27_at_12.57.05_AM_pbcjxb.jpg"
                  alt="Professional corporate cake design"
                  className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/40 to-transparent rounded-3xl"></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Corporate & Special Events</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Logo-based cakes, milestone celebrations, anniversaries with romantic designs, and cultural themed cakes for every special occasion.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-full flex items-center justify-center">
                    <img
                      src="/D-Day_Evento_logo.png"
                      alt="D-Day Evento"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-brand-accent font-semibold">Professional designs for every milestone</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Behind the Sweet Magic - Interactive Process Cards */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Sweet Magic</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              What clients don't see — the artistry, precision, and dedication that goes into every cake
            </p>
          </motion.div>

          {/* Hexagonal Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Design Planning & Trials",
                description: "Long hours of design planning and trials to create the perfect cake that matches your vision and event theme",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761489032/WhatsApp_Image_2025-10-26_at_7.04.02_PM_1_illv4c.jpg",
                gradient: "from-brand-primary to-brand-secondary"
              },
              {
                step: "02",
                title: "Premium Ingredients Sourcing",
                description: "Sourcing only the finest ingredients and balancing taste, design, and dietary needs including sugar-free and eggless options",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761489027/WhatsApp_Image_2025-10-26_at_7.04.02_PM_ngaoop.jpg",
                gradient: "from-brand-secondary to-brand-accent"
              },
              {
                step: "03",
                title: "Expert Crafting & Artistry",
                description: "Master bakers and decorators work meticulously to bring your cake design to life with precision and artistry",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761489021/WhatsApp_Image_2025-10-26_at_7.04.28_PM_1_cza7ac.jpg",
                gradient: "from-brand-accent to-brand-primary"
              },
              {
                step: "04",
                title: "Safe Transport & Handling",
                description: "Handling fragile cakes during transport in extreme weather conditions, ensuring they arrive in perfect condition",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761489017/WhatsApp_Image_2025-10-26_at_7.04.28_PM_kekstk.jpg",
                gradient: "from-brand-primary to-brand-accent"
              },
              {
                step: "05",
                title: "Perfect Presentation Setup",
                description: "Coordination with event planners to match the cake moment with lights, music, photography, and themed décor setup",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761489011/WhatsApp_Image_2025-10-26_at_7.05.16_PM_jzkhry.jpg",
                gradient: "from-brand-secondary to-brand-primary"
              },
              {
                step: "06",
                title: "Memorable Cake Moment",
                description: "Creating the perfect cake-cutting moment that becomes the highlight of your celebration and sweetest memory",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761489008/WhatsApp_Image_2025-10-26_at_7.06.42_PM_u0p8sd.jpg",
                gradient: "from-brand-accent to-brand-secondary"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-70 group-hover:opacity-50 transition-opacity duration-300`}></div>

                    {/* Step Number */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-lg font-bold text-gray-900">{item.step}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                        <img
                          src="/D-Day_Evento_logo.png"
                          alt="D-Day Evento"
                          className="w-5 h-5 object-contain brightness-0 invert"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 border-2 border-transparent group-hover:border-brand-primary rounded-3xl transition-colors duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Message with Floating Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-brand-accent/15 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>

            {/* Main Content Card */}
            <div className="relative bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-8 lg:p-12 text-white shadow-2xl max-w-4xl mx-auto overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute top-16 right-16 w-8 h-8 border-2 border-white rounded-full"></div>
                <div className="absolute top-4 right-24 w-4 h-4 bg-white rounded-full"></div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">The Sweet Truth</h3>
                <p className="text-xl lg:text-2xl font-semibold italic leading-relaxed">
                  It's not just about baking — it's about delivering perfection under pressure and creating moments that become the sweetest memories of your celebration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials - Image-Rich Testimonials */}
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
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When done right, the cake doesn't just sweeten the tongue — it sweetens the memory
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The cake looked stunning and tasted even better.",
                description: "Perfect balance of visual appeal and incredible flavor that left everyone amazed",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761489027/WhatsApp_Image_2025-10-26_at_7.04.02_PM_ngaoop.jpg",
                gradient: "from-brand-primary to-brand-secondary"
              },
              {
                quote: "Our guests couldn't stop clicking pictures with it.",
                description: "The cake became the star of our event, creating countless photo opportunities",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761489017/WhatsApp_Image_2025-10-26_at_7.04.28_PM_kekstk.jpg",
                gradient: "from-brand-secondary to-brand-accent"
              },
              {
                quote: "The cutting moment became the highlight of our event.",
                description: "A perfectly orchestrated moment that brought everyone together in celebration",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761489011/WhatsApp_Image_2025-10-26_at_7.05.16_PM_jzkhry.jpg",
                gradient: "from-brand-accent to-brand-primary"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* Large Testimonial Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt="Client cake testimonial"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${testimonial.gradient} opacity-60`}></div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white shadow-lg mb-4`}>
                        <span className="text-2xl font-bold">"</span>
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
        </div>
      </section>
      {/* Why Choose D DAY EVENTO - Full-Width Image Showcase */}
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
              We don't just deliver a cake — we deliver a centerpiece of joy
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
                  title: "Creative Cake Designs Tailored for Each Event",
                  description: "Custom designs that perfectly match your event theme and personal style",
                  gradient: "from-brand-primary to-brand-secondary"
                },
                {
                  title: "Trusted Bakers with Professional Expertise",
                  description: "Master craftsmen with years of experience in creating exceptional cakes",
                  gradient: "from-brand-secondary to-brand-accent"
                },
                {
                  title: "On-Time Delivery and Safe Handling",
                  description: "Reliable transport and setup ensuring your cake arrives in perfect condition",
                  gradient: "from-brand-accent to-brand-primary"
                },
                {
                  title: "Cakes That Balance Look, Taste, and Meaning",
                  description: "Perfect harmony of visual appeal, incredible flavor, and personal significance",
                  gradient: "from-brand-primary to-brand-accent"
                },
                {
                  title: "Complete Cake Presentation Setup",
                  description: "Full service including table décor, lighting, and coordination with your event",
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

            {/* Right Side - Large Cake Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Showcase Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761489032/WhatsApp_Image_2025-10-26_at_7.04.02_PM_1_illv4c.jpg"
                  alt="Premium cake showcase - D Day Evento masterpiece"
                  className="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-lg">Crafted to Perfection</h3>
                  <p className="text-white/90 text-lg drop-shadow-md">Every detail tells your story</p>
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-brand-accent/15 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
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
              Ready to Create Sweet{' '}
              <span className="text-brand-accent">Memories?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
              "Every slice tells a story. With D DAY Evento, your cake is more than dessert — it's the sweetest memory of your event."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Get Your Cake Quote
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              Custom designs • Premium ingredients • Perfect presentation
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

export default CakesConfectioneryPage;