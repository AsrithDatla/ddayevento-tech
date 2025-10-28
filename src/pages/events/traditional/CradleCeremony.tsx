import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const CradleCeremony: React.FC = () => {
  const { pathname } = useLocation();
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(9); // Show 9 images initially
  const [isLoading, setIsLoading] = useState(false);

  const IMAGES_PER_LOAD = 6; // Load 6 more images each time

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Gallery images - Cradle ceremony images
  const images = [
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461094/WhatsApp_Image_2025-08-26_at_3.01.17_PM_ucfwlf.jpg', title: 'Cradle Ceremony - D Day Evento', alt: 'Beautiful Cradle ceremony setup by D Day Evento Hyderabad' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461092/WhatsApp_Image_2025-08-26_at_3.01.17_PM_1_movt85.jpg', title: 'Annaprasana Ceremony', alt: 'Traditional Annaprasana first feeding ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461088/WhatsApp_Image_2025-08-26_at_3.01.16_PM_cbdeop.jpg', title: 'Naming Ceremony Setup', alt: 'Beautiful naming ceremony decoration and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461084/WhatsApp_Image_2025-08-26_at_3.01.16_PM_3_mmq53e.jpg', title: 'Baby Cradle Decoration', alt: 'Elegant baby cradle decoration with flowers' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461082/WhatsApp_Image_2025-08-26_at_3.01.16_PM_2_wvanul.jpg', title: 'Traditional Baby Ceremony', alt: 'Traditional baby ceremony with family blessings' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461078/WhatsApp_Image_2025-08-26_at_3.01.16_PM_1_w7hwen.jpg', title: 'Baby Photography Session', alt: 'Professional baby photography during ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461075/WhatsApp_Image_2025-08-26_at_3.01.15_PM_njhnbv.jpg', title: 'Family Celebration', alt: 'Joyful family celebration for baby ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461072/WhatsApp_Image_2025-08-26_at_3.01.15_PM_2_vas04p.jpg', title: 'Baby Ceremony Catering', alt: 'Traditional catering for baby ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461069/WhatsApp_Image_2025-08-26_at_3.01.15_PM_1_ie1akn.jpg', title: 'Sacred Rituals Setup', alt: 'Sacred rituals setup for baby ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461066/WhatsApp_Image_2025-08-26_at_3.01.14_PM_epun8u.jpg', title: 'Baby Blessing Ceremony', alt: 'Baby blessing ceremony with traditional elements' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461063/WhatsApp_Image_2025-08-26_at_3.01.14_PM_2_pglijj.jpg', title: 'Cradle Ceremony Decoration', alt: 'Beautiful cradle ceremony decoration setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461061/WhatsApp_Image_2025-08-26_at_3.01.14_PM_1_py87x1.jpg', title: 'Baby Milestone Celebration', alt: 'Celebrating baby milestones with family' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461057/WhatsApp_Image_2025-08-26_at_3.01.13_PM_mt2bmq.jpg', title: 'Traditional Baby Setup', alt: 'Traditional setup for baby ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461054/WhatsApp_Image_2025-08-26_at_3.01.13_PM_1_mxstn1.jpg', title: 'Baby Ceremony Memories', alt: 'Creating beautiful memories at baby ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461053/WhatsApp_Image_2025-08-26_at_3.01.12_PM_ndcbc6.jpg', title: 'Complete Baby Ceremony', alt: 'Complete baby ceremony celebration setup' }
  ];

  const handleImageError = (index: number) => {
    setImageLoadErrors(prev => new Set([...prev, index]));
  };

  const handleViewMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleImages(prev => Math.min(prev + IMAGES_PER_LOAD, images.length));
      setIsLoading(false);
    }, 500);
  };

  const hasMoreImages = visibleImages < images.length;

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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461094/WhatsApp_Image_2025-08-26_at_3.01.17_PM_ucfwlf.jpg"
            alt="Cradle Ceremony | Annaprasana | Naming Ceremony - D Day Evento"
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
              Cradle Ceremony{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                - Annaprasana - Naming Ceremony
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              In South India, these first milestones of a child's life are more than just rituals—they are family treasures, moments that bond generations together, and blessings that shape the child's future.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
            >
              Though celebrated as small gatherings, these events carry big emotions and timeless traditions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Celebrate Your Little Star
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Three Sacred Ceremonies Section */}
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
              Three Sacred{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Ceremonies</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Cradle Ceremony */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Cradle Ceremony – A New Beginning</h3>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-center">
                    The Cradle Ceremony marks the baby's first introduction to the family and the world.
                  </p>

                  <div className="bg-gradient-to-r from-brand-primary/5 to-gold/5 p-4 rounded-xl border-l-4 border-brand-primary">
                    <p className="font-semibold text-brand-primary text-center">
                      The beautifully decorated cradle is not just a piece of furniture—it's the child's first throne, where love, prayers, and blessings are showered endlessly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Annaprasana */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Annaprasana – First Taste of Food</h3>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-center">
                    Annaprasana, or the first rice-feeding ceremony, is when the baby is introduced to food by parents and elders.
                  </p>

                  <div className="bg-gradient-to-r from-brand-secondary/5 to-brand-primary/5 p-4 rounded-xl border-l-4 border-brand-secondary">
                    <p className="font-semibold text-brand-secondary text-center">
                      This ritual symbolizes growth, prosperity, and health, making it one of the most heartfelt celebrations in a child's journey.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Naming Ceremony */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-brand-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Naming Ceremony – Identity & Blessings</h3>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-center">
                    A name is the soul of identity. The Naming Ceremony is when the baby receives the most precious gift from the family—a name that will be remembered for generations.
                  </p>

                  <div className="bg-gradient-to-r from-gold/10 to-brand-accent/10 p-4 rounded-xl border-l-4 border-gold">
                    <p className="font-semibold text-gold text-center">
                      It's the moment when the child's story begins.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461092/WhatsApp_Image_2025-08-26_at_3.01.17_PM_1_movt85.jpg"
                  alt="Three sacred ceremonies for babies"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-2xl font-bold mb-2 text-gold">Sacred Milestones</h4>
                  <p className="text-gray-200 text-lg">Celebrating life's precious moments</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461088/WhatsApp_Image_2025-08-26_at_3.01.16_PM_cbdeop.jpg"
                    alt="Baby ceremony decoration"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Beautiful Setup</p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461084/WhatsApp_Image_2025-08-26_at_3.01.16_PM_3_mmq53e.jpg"
                    alt="Baby ceremony celebration"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Family Joy</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why These Celebrations Matter */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Why These Celebrations{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Matter</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Many families think, "It's just a small gathering, let's keep it simple." But the truth is—these ceremonies are once-in-a-lifetime moments.
                </p>

                <div className="bg-gradient-to-r from-brand-primary/5 to-gold/5 p-6 rounded-xl border-l-4 border-brand-primary">
                  <p className="font-semibold text-brand-primary text-lg">
                    A child will only have one first cradle, one first bite, one first name announcement. These moments deserve to be celebrated with dignity, tradition, and joy.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Parents, grandparents, siblings, and close relatives come together under one roof to welcome, bless, and celebrate the little star of the family.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>These events carry big emotions and timeless traditions that bond generations together.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Each ceremony shapes the child's future with blessings and cultural heritage.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461082/WhatsApp_Image_2025-08-26_at_3.01.16_PM_2_wvanul.jpg"
                alt="Why baby ceremonies matter"
                className="w-full h-96 object-cover rounded-2xl shadow-xl border border-gray-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* D DAY EVENTO Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              D DAY EVENTO –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Turning Simple Gatherings into Lifetime Memories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At D DAY EVENTO, we understand the emotion behind these small-yet-grand milestones. We take care of every detail with personal attention, cultural respect, and modern execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Decorations",
                description: "Traditional flower work, elegant cradle setups, theme-based backdrops, table & chair arrangements."
              },
              {
                title: "Food & Catering",
                description: "From authentic home-style traditional meals to multi-cuisine spreads for all taste preferences."
              },
              {
                title: "Photography & Videography",
                description: "Small photoshoots, family portraits, and candid moments that preserve the essence of togetherness."
              },
              {
                title: "Complete Planning",
                description: "We design everything around your budget, traditions, and family comfort, ensuring a stress-free celebration."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:border-gold/50 transition-all duration-500 h-full hover:bg-white shadow-lg hover:shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Celebrate with D DAY EVENTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-brand-primary/5 to-gold/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-brand-primary/10 shadow-lg"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Celebrate with D DAY EVENTO?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Because we believe these are not small functions—they are priceless milestones.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "We respect your traditions, whether it's a classic flower-decorated cradle or a chic modern setup.",
                  "We understand your emotions, making every arrangement personal and family-friendly.",
                  "We fit into your budget without compromising on quality, elegance, or warmth."
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461078/WhatsApp_Image_2025-08-26_at_3.01.16_PM_1_w7hwen.jpg"
                  alt="D Day Evento baby ceremony services"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Baby Ceremony Gallery */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm font-medium text-gray-700">Baby Ceremonies</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Our Baby Ceremony{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Portfolio
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                Witness the joy and tenderness of our baby ceremonies across Hyderabad
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
                    {!imageLoadErrors.has(index) ? (
                      <img
                        src={image.url}
                        alt={image.alt}
                        title={image.title}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={() => handleImageError(index)}
                      />
                    ) : (
                      <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {hasMoreImages && (
              <motion.div
                className="text-center mt-8 sm:mt-10 md:mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.button
                  onClick={handleViewMore}
                  disabled={isLoading}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? 'Loading...' : `View More Images (${images.length - visibleImages} remaining)`}
                  {!isLoading && <ArrowRight className="ml-2" size={20} />}
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
                  You've seen all our baby ceremonies!
                </div>
              </motion.div>
            )}
          </div>
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
              D DAY EVENTO –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Where Even Small Gatherings Are Celebrated with Grand Hearts
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 sm:p-12 rounded-3xl text-center mb-12 shadow-2xl"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                We create memories that make you proud when you look back years later.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                Because your child deserves more than just a simple function—they deserve a story to remember.
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
                Celebrate Your Little Star's Milestones
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
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              title={images[selectedImage].title}
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
    </div>
  );
};

export default CradleCeremony;