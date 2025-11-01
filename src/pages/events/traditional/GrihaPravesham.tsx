import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImprovedQuoteModal from '../../../components/QuoteGenerator/ImprovedQuoteModal';

const GrihaPravesham = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(9);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const images = [
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461264/WhatsApp_Image_2025-08-28_at_9.42.48_PM_zj1w25.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461262/WhatsApp_Image_2025-08-28_at_9.42.48_PM_3_zrj9ew.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461258/WhatsApp_Image_2025-08-28_at_9.42.48_PM_2_h7b8o6.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461254/WhatsApp_Image_2025-08-28_at_9.42.48_PM_1_lapc3w.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461252/WhatsApp_Image_2025-08-28_at_9.42.47_PM_adnbkt.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461248/WhatsApp_Image_2025-08-28_at_9.42.46_PM_nbpvvn.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461244/WhatsApp_Image_2025-08-28_at_9.42.45_PM_wavonb.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461242/WhatsApp_Image_2025-08-28_at_9.42.43_PM_l7july.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461238/WhatsApp_Image_2025-08-28_at_9.42.43_PM_1_mzgpva.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461234/WhatsApp_Image_2025-08-28_at_9.42.42_PM_tzxj3o.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461232/WhatsApp_Image_2025-08-28_at_9.42.42_PM_1_sb3kvd.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461228/WhatsApp_Image_2025-08-28_at_9.42.41_PM_apzhti.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461226/WhatsApp_Image_2025-08-28_at_9.42.41_PM_1_daeahf.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461222/WhatsApp_Image_2025-08-28_at_9.42.40_PM_mhejek.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461218/WhatsApp_Image_2025-08-28_at_9.42.40_PM_1_pfzwut.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461215/WhatsApp_Image_2025-08-28_at_9.42.39_PM_lnzq6b.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461213/WhatsApp_Image_2025-08-28_at_9.42.37_PM_zpynud.jpg",
    "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461211/WhatsApp_Image_2025-08-28_at_9.42.36_PM_siahtc.jpg"
  ];

  const services = [
    {
      title: "Floral Elegance",
      description: "Fresh flower garlands for every corner: main door, balconies, staircase railings, pooja room, and entrance gate. Each detail is decorated with grace and tradition."
    },
    {
      title: "Magical Lighting",
      description: "Lights are not just decoration—they bring your new home alive. From soft glow effects to complete outdoor illumination, we make your house shine like a palace."
    },
    {
      title: "Perfect Backdrop",
      description: "A thematic stage setup for family pictures and guest memories. Because these moments should be framed forever."
    },
    {
      title: "Traditional Food & Catering",
      description: "Authentic South Indian menus, buffet counters, or multi-cuisine spreads arranged with full seating and service."
    },
    {
      title: "Memorable Return Gifts",
      description: "Beautiful, thoughtful giveaways for every guest as a mark of gratitude and respect."
    },
    {
      title: "Cinematic Photography & Videography",
      description: "We capture every smile, every blessing, and every proud tear in a way you will relive for life."
    }
  ];

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 9, images.length));
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage(prev => prev === null ? null : Math.min(images.length - 1, prev + 1));
  };

  const prevImage = () => {
    setSelectedImage(prev => prev === null ? null : Math.max(0, prev - 1));
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage(prev => prev === null ? null : Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedImage(prev => prev === null ? null : Math.min(images.length - 1, prev + 1));
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, images.length]);

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461262/WhatsApp_Image_2025-08-28_at_9.42.48_PM_3_zrj9ew.jpg"
            alt="Griha Pravesham House Warming Ceremony - D Day Evento Hyderabad"
            className="w-full h-full object-cover object-center brightness-75 contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-2xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}
            >
              Griha Pravesham{' '}
              <span className="text-gold drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                House Warming Ceremony
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              In India, owning a house is not just an achievement—it is a lifelong dream. Every family sacrifices, struggles, and works hard for years to finally call a place their own.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto inline-block"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}
              >
                Plan Your Griha Pravesham
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emotional Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-primary/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                More Than{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Just a Ritual
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                  It doesn't matter whether it's an independent house, a flat, or a villa—when you step inside for the first time, it is no less than a victory of life.
                </p>

                <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-gold/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-brand-primary/10">
                  <p className="text-brand-primary font-semibold text-lg sm:text-xl text-center">
                    That's why Griha Pravesham is not a small ritual. It is the celebration of success, respect, and emotions. It is the day when you proudly say: "This is my home."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461264/WhatsApp_Image_2025-08-28_at_9.42.48_PM_zj1w25.jpg"
                  alt="More than just a ritual - Griha Pravesham celebration"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* How D DAY EVENTO Makes It Grand */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              How{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                D DAY EVENTO
              </span>{' '}
              Makes It Grand
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Most families think, "Housewarming should be simple… decoration and lighting cost too much."
              <span className="text-brand-primary font-semibold block mt-2">
                But we believe this is a once-in-a-lifetime celebration—and it deserves to be celebrated beautifully.
              </span>
            </p>
          </motion.div>

          {/* Intro Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-brand-primary/5 to-gold/5 backdrop-blur-sm rounded-3xl p-8 border border-brand-primary/10 shadow-lg">
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                At D DAY EVENTO, we transform your home into a festival of pride with:
              </p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:border-gold/50 transition-all duration-500 h-full hover:bg-white shadow-lg hover:shadow-xl">
                  {/* Number Badge */}
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-16"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main Large Image */}
              <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461258/WhatsApp_Image_2025-08-28_at_9.42.48_PM_2_h7b8o6.jpg"
                  alt="D Day Evento Griha Pravesham transformation"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-2xl font-bold mb-2 text-gold">Complete Transformation</h4>
                  <p className="text-gray-200 text-lg">From simple space to grand celebration</p>
                </div>
                {/* Brand Accent */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-gold rounded-full"></div>
              </div>

              {/* Side Images */}
              <div className="space-y-6">
                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461248/WhatsApp_Image_2025-08-28_at_9.42.46_PM_nbpvvn.jpg"
                    alt="Griha Pravesham decoration details"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-white">Elegant Details</p>
                  </div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-brand-primary rounded-full"></div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461244/WhatsApp_Image_2025-08-28_at_9.42.45_PM_wavonb.jpg"
                    alt="Griha Pravesham lighting setup"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-white">Magical Ambiance</p>
                  </div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gold rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-brand-primary/5 to-gold/5 backdrop-blur-sm rounded-3xl p-12 border border-brand-primary/10 shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to transform your home into a grand celebration?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't settle for ordinary when you can have extraordinary. Your dream home deserves a dream celebration.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-brand-primary to-gold hover:from-gold hover:to-brand-primary text-white font-bold px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why You Must Celebrate */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Why You Must{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Celebrate
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-brand-primary mb-6">The Investment in Memories</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Many people spend crores building or buying a home—but hesitate to spend on its first celebration. They make it small, minimal, and normal. But this is not just about walls and roofs—it is about your emotions, respect, and success story.</p>
                  <div className="bg-gradient-to-r from-gold/10 to-brand-primary/10 p-6 rounded-xl border-l-4 border-gold">
                    <p className="font-semibold text-brand-primary text-lg">Your housewarming is not an expense—it is an investment in memories.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-brand-secondary mb-6">Sacred Moments</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>This is the moment when your family, relatives, and friends bless your new beginning.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>This is the day that gives meaning to all your years of hard work.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Your dream home deserves a dream celebration with pride, tradition, and lasting memories.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461254/WhatsApp_Image_2025-08-28_at_9.42.48_PM_1_lapc3w.jpg"
                  alt="Why you must celebrate Griha Pravesham - D Day Evento Hyderabad"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Budget Friendly Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-12 tracking-tight leading-tight">
              D DAY EVENTO –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Budget Friendly & Grand
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-brand-primary mb-6">Custom Packages for Every Budget</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>We understand people worry about budgets. That's why we design custom housewarming packages that balance beauty and affordability.</p>
                    <p>Whether you want a simple elegant setup or a royal, festival-like celebration, we make sure it feels grand yet budget-friendly.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461252/WhatsApp_Image_2025-08-28_at_9.42.47_PM_adnbkt.jpg"
                    alt="Budget friendly and grand Griha Pravesham - D Day Evento"
                    className="w-full h-96 lg:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 sm:p-12 rounded-3xl text-center mb-12 shadow-2xl"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                With D DAY EVENTO, your Housewarming won't just be a function
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                —it will be a powerful, emotional, and unforgettable celebration of success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg"
              >
                Plan Your Dream Celebration
                <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-8">
              <Home className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-medium text-gray-700">Griha Pravesham Celebrations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Our Griha Pravesham{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Witness the grandeur and emotions of our housewarming ceremonies across Hyderabad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.slice(0, visibleImages).map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 9) * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="cursor-pointer w-full h-48 sm:h-56 md:h-64 overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`Griha Pravesham celebration ${index + 1}`}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {visibleImages < images.length && (
            <motion.div
              className="text-center mt-8 sm:mt-10 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                onClick={loadMoreImages}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View More Images
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </motion.div>
          )}

          {visibleImages >= images.length && images.length > 9 && (
            <motion.div
              className="text-center mt-8 sm:mt-10 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full">
                <span className="w-5 h-5 mr-2 text-brand-primary">✨</span>
                You've seen all our Griha Pravesham celebrations!
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-12 tracking-tight leading-tight">
              Your Dream Home Deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                A Dream Celebration
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 sm:p-12 rounded-3xl text-center mb-12 shadow-2xl"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                Don't just step in—step in with pride, tradition, and memories that last forever.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg"
              >
                Honor Your New Beginning With Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="text-white text-sm">
                {selectedImage + 1} of {images.length}
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            {selectedImage > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hidden md:flex"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {selectedImage < images.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hidden md:flex"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <motion.img
              key={selectedImage}
              src={images[selectedImage]}
              alt={`Griha Pravesham celebration ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div className="absolute inset-0 flex md:hidden">
            {selectedImage > 0 && (
              <div
                className="w-1/2 h-full flex items-center justify-start pl-4"
                onClick={prevImage}
              >
                <div className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white opacity-70">
                  <ChevronLeft size={20} />
                </div>
              </div>
            )}

            {selectedImage < images.length - 1 && (
              <div
                className="w-1/2 h-full flex items-center justify-end pr-4 ml-auto"
                onClick={nextImage}
              >
                <div className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-white opacity-70">
                  <ChevronRight size={20} />
                </div>
              </div>
            )}
          </div>

          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          />
        </div>
      )}

      {/* Quote Modal */}
      <ImprovedQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default GrihaPravesham;