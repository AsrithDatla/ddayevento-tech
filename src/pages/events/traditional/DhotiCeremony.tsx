import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const DhotiCeremony: React.FC = () => {
  const { pathname } = useLocation();
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(9); // Show 9 images initially
  const [isLoading, setIsLoading] = useState(false);

  const IMAGES_PER_LOAD = 9; // Load all remaining images at once

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Gallery images - Dhoti ceremony images
  const images = [
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398564/WhatsApp_Image_2025-08-29_at_12.07.56_AM_w8dfp0.jpg', title: 'Dhoti Ceremony - D Day Evento', alt: 'Beautiful Dhoti ceremony setup by D Day Evento Hyderabad' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398569/WhatsApp_Image_2025-08-29_at_12.07.49_AM_2_d2vbal.jpg', title: 'Traditional Dhoti Ceremony', alt: 'Traditional dhoti ceremony celebration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398568/WhatsApp_Image_2025-08-29_at_12.07.50_AM_fsy3lw.jpg', title: 'Pancha Kattu Ceremony', alt: 'Beautiful Pancha Kattu ceremony setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398555/WhatsApp_Image_2025-08-29_at_12.07.50_AM_3_xuaeh9.jpg', title: 'Boy\'s Transition Ceremony', alt: 'Boy\'s transition to manhood ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398556/WhatsApp_Image_2025-08-29_at_12.07.50_AM_2_v6stzz.jpg', title: 'Traditional Dhoti Setup', alt: 'Traditional dhoti ceremony decoration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398558/WhatsApp_Image_2025-08-29_at_12.07.50_AM_1_faaife.jpg', title: 'Dhoti Ceremony Photography', alt: 'Professional dhoti ceremony photography' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398563/WhatsApp_Image_2025-08-29_at_12.07.51_AM_ejsa6t.jpg', title: 'Family Celebration', alt: 'Joyful family celebration for dhoti ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398573/WhatsApp_Image_2025-08-29_at_12.07.49_AM_1_tr2mm7.jpg', title: 'Traditional Rituals', alt: 'Traditional rituals during dhoti ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1761398575/WhatsApp_Image_2025-08-29_at_12.07.49_AM_zpsutv.jpg', title: 'Complete Dhoti Ceremony', alt: 'Complete dhoti ceremony celebration setup' }
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
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761398564/WhatsApp_Image_2025-08-29_at_12.07.56_AM_w8dfp0.jpg"
            alt="Dhoti Ceremony – A Boy's Step into Tradition & Pride - D Day Evento"
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
              Dhoti Ceremony{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                A Boy's Step into Tradition & Pride
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              In South India, the Dhoti Ceremony (Pancha Kattu) is one of the most important milestones in a boy's life. It is the day he is first dressed in a dhoti, symbolizing his transition from boyhood into culture, responsibility, and manhood.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
            >
              This is not just a family ritual—it is a celebration of pride and heritage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Celebrate His Royal Journey
              </button>
            </motion.div>
          </div>
        </div>
      </section>     
 {/* Celebration Significance Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                A Celebration of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Pride & Heritage</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Parents, grandparents, relatives, and friends gather to bless the boy, showering him with love, laughter, and wishes for a bright future.
                </p>

                <div className="bg-gradient-to-r from-brand-primary/5 to-gold/5 p-6 rounded-xl border-l-4 border-brand-primary">
                  <p className="font-semibold text-brand-primary text-lg">
                    This is his proud introduction to tradition, a story that will be remembered by generations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Why This Celebration Matters</h3>
                  <p>Many families think, "It's just a small function." But the truth is—your son will wear his first dhoti only once in his lifetime.</p>
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
                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761398569/WhatsApp_Image_2025-08-29_at_12.07.49_AM_2_d2vbal.jpg"
                alt="Dhoti ceremony celebration significance"
                className="w-full h-96 object-cover rounded-2xl shadow-xl border border-gray-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How D DAY EVENTO Celebrates It */}
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
              How D DAY EVENTO{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebrates It</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At D DAY EVENTO, we know that this is a once-in-a-lifetime event—and we make it unforgettable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Grand Entry Concepts",
                description: "The boy is introduced like a prince, with powerful entry styles such as traditional drum beats, vintage car entries, lighted walkways, torch bearers, and cinematic light effects."
              },
              {
                title: "Decoration & Setup",
                description: "From bold flower backdrops to royal stage seating and elegant guest arrangements, every detail reflects tradition and dignity."
              },
              {
                title: "Food & Catering",
                description: "Whether a classic South Indian feast served on banana leaves or a multi-cuisine spread, menus are customized to your family's taste."
              },
              {
                title: "Photography & Videography",
                description: "Not just pictures, but cinematic storytelling that captures rituals, family bonds, and proud moments."
              },
              {
                title: "Entertainment",
                description: "Anchors, live drummers, DJs, and family games keep the event lively and engaging for all generations."
              },
              {
                title: "Return Gifts",
                description: "Theme-based, meaningful giveaways that leave a lasting impression on guests as a gesture of gratitude."
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
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761398568/WhatsApp_Image_2025-08-29_at_12.07.50_AM_fsy3lw.jpg"
                  alt="D Day Evento dhoti ceremony celebration"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-2xl font-bold mb-2 text-gold">Royal Celebration</h4>
                  <p className="text-gray-200 text-lg">Making it unforgettable</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761398555/WhatsApp_Image_2025-08-29_at_12.07.50_AM_3_xuaeh9.jpg"
                    alt="Dhoti ceremony setup"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Traditional Setup</p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761398556/WhatsApp_Image_2025-08-29_at_12.07.50_AM_2_v6stzz.jpg"
                    alt="Dhoti ceremony celebration"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Grand Celebration</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promise Section */}
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
              Our Promise{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                to You
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
                With D DAY EVENTO, your son's Dhoti Ceremony will not just be a ritual
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                —it will be a royal celebration of manhood, tradition, and family pride.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-r from-brand-primary/5 to-gold/5 p-6 rounded-xl border-l-4 border-brand-primary">
                  <p className="font-semibold text-brand-primary text-lg mb-2">Once-in-a-Lifetime Event</p>
                  <p className="text-gray-700">We understand the profound significance of this milestone and ensure every detail reflects the importance of this sacred transition.</p>
                </div>

                <div className="bg-gradient-to-r from-brand-secondary/5 to-brand-primary/5 p-6 rounded-xl border-l-4 border-brand-secondary">
                  <p className="font-semibold text-brand-secondary text-lg mb-2">Royal Treatment</p>
                  <p className="text-gray-700">Your son deserves to feel like a prince on this special day, and we make sure every moment reflects that dignity and honor.</p>
                </div>

                <div className="bg-gradient-to-r from-gold/10 to-brand-accent/10 p-6 rounded-xl border-l-4 border-gold">
                  <p className="font-semibold text-gold text-lg mb-2">Generational Memories</p>
                  <p className="text-gray-700">We create celebrations that become family stories, passed down through generations with pride and joy.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761398558/WhatsApp_Image_2025-08-29_at_12.07.50_AM_1_faaife.jpg"
                  alt="D Day Evento promise for dhoti ceremony"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl border border-gray-200"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>     
 {/* Dhoti Ceremony Gallery */}
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
                <span className="text-xs sm:text-sm font-medium text-gray-700">Dhoti Ceremonies</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Our Dhoti Ceremony{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Portfolio
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                Witness the pride and tradition of our Dhoti ceremonies across Hyderabad
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
                  You've seen all our dhoti ceremonies!
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
                Celebrating Tradition with Royal Pride
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
                Your son will wear his first dhoti only once in his lifetime.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                Make it a royal celebration of manhood, tradition, and family pride.
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
                Honor His Sacred Transition
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

export default DhotiCeremony;