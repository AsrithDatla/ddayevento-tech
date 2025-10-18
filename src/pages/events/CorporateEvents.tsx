import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const CorporateEvents: React.FC = () => {
  const { pathname } = useLocation();
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
  const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const IMAGES_PER_LOAD = 6; // Load 6 more images each time

  // Corporate event gallery images (18 total - Real D Day Evento events)
  const galleryImages = [
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460467/WhatsApp_Image_2025-08-27_at_12.16.32_AM_gmjvqr.jpg', title: 'Corporate Conference Event Management Hyderabad', alt: 'Professional corporate conference organized by D Day Evento Hyderabad' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460464/WhatsApp_Image_2025-08-27_at_12.16.31_AM_lkvref.jpg', title: 'Annual Day Celebration Planning Hyderabad', alt: 'Grand annual day celebration event by D Day Evento' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460462/WhatsApp_Image_2025-08-27_at_12.16.31_AM_1_rngb3n.jpg', title: 'Team Building Activities Corporate Events', alt: 'Engaging team building activities for corporate teams' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460459/WhatsApp_Image_2025-08-27_at_12.16.30_AM_ivcmp1.jpg', title: 'Product Launch Event Management Hyderabad', alt: 'Professional product launch event planning and execution' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460457/WhatsApp_Image_2025-08-27_at_12.16.29_AM_wnufdb.jpg', title: 'Award Ceremony Corporate Events Hyderabad', alt: 'Elegant award ceremony organized by professional planners' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460454/WhatsApp_Image_2025-08-27_at_12.16.29_AM_1_rqalpt.jpg', title: 'Corporate Gala Dinner Event Planning', alt: 'Sophisticated corporate gala dinner arrangements' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460451/WhatsApp_Image_2025-08-27_at_12.16.27_AM_n52vjr.jpg', title: 'Business Networking Events Hyderabad', alt: 'Professional networking events for business growth' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460449/WhatsApp_Image_2025-08-27_at_12.16.27_AM_1_qewz29.jpg', title: 'Corporate Seminar Event Management', alt: 'Well-organized corporate seminars and workshops' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460446/WhatsApp_Image_2025-08-27_at_12.16.26_AM_wotptw.jpg', title: 'Festive Corporate Party Planning Hyderabad', alt: 'Corporate festive celebrations and cultural programs' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460443/WhatsApp_Image_2025-08-27_at_12.16.26_AM_1_fzivno.jpg', title: 'Corporate Meeting Event Setup Hyderabad', alt: 'Professional corporate meeting arrangements' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460441/WhatsApp_Image_2025-08-27_at_12.16.23_AM_zrokg0.jpg', title: 'Corporate Training Event Management', alt: 'Corporate training sessions and workshops planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460438/WhatsApp_Image_2025-08-27_at_12.16.23_AM_1_ogx0xv.jpg', title: 'Corporate Cocktail Night Events Hyderabad', alt: 'Elegant corporate cocktail evening arrangements' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460436/WhatsApp_Image_2025-08-27_at_12.16.19_AM_qjis26.jpg', title: 'Corporate Brand Launch Events', alt: 'Strategic brand launch event planning and execution' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460433/WhatsApp_Image_2025-08-27_at_12.16.18_AM_uajxre.jpg', title: 'Corporate Milestone Celebration Planning', alt: 'Corporate milestone and achievement celebrations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460431/WhatsApp_Image_2025-08-27_at_12.16.17_AM_s8px6n.jpg', title: 'Corporate Client Appreciation Events', alt: 'Client appreciation and relationship building events' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460428/WhatsApp_Image_2025-08-27_at_12.16.13_AM_kld2jz.jpg', title: 'Corporate Leadership Summit Planning', alt: 'Executive leadership summits and conferences' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460427/WhatsApp_Image_2025-08-27_at_12.16.12_AM_mx2zkp.jpg', title: 'Corporate Innovation Events Hyderabad', alt: 'Innovation showcases and technology events' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460425/WhatsApp_Image_2025-08-27_at_12.16.12_AM_1_zozras.jpg', title: 'Corporate Partnership Events Planning', alt: 'Strategic partnership announcements and events' }
  ];

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleImageError = (index: number) => {
    setImageLoadErrors(prev => new Set([...prev, index]));
  };

  const handleViewMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleImages(prev => Math.min(prev + IMAGES_PER_LOAD, galleryImages.length));
      setIsLoading(false);
    }, 500);
  };

  const hasMoreImages = visibleImages < galleryImages.length;

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage(prev => prev === null ? null : Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedImage(prev => prev === null ? null : Math.min(galleryImages.length - 1, prev + 1));
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
  }, [selectedImage, galleryImages.length]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage(prev => prev === null ? null : Math.min(galleryImages.length - 1, prev + 1));
  };

  const prevImage = () => {
    setSelectedImage(prev => prev === null ? null : Math.max(0, prev - 1));
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Full Width Responsive */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Corporate events background - D Day Evento Hyderabad"
            className="w-full h-full object-cover object-center brightness-75 contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-2xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}
            >
              Corporate Events with{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                D DAY EVENTO
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Professional events that connect, collaborate, celebrate, and grow your business.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
            >
              We create experiences that speak business, build relationships, and elevate brands.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Explore Our Corporate Solutions
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are Corporate Events */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-primary/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                What Are{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Corporate Events?
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                  Corporate events are more than just gatherings. They are the face of your brand, the pulse of your people, and the bridge to your clients and partners.
                </p>

                <p className="text-sm sm:text-base">
                  They are designed to connect, collaborate, celebrate, and grow.
                </p>

                <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-brand-primary/10">
                  <p className="text-brand-primary font-semibold text-lg sm:text-xl text-center">
                    Every corporate event is an opportunity to strengthen relationships and showcase your brand's excellence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460467/WhatsApp_Image_2025-08-27_at_12.16.32_AM_gmjvqr.jpg"
                  alt="Corporate events definition - D Day Evento Hyderabad"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Are They Important */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(120,119,198,0.05),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,119,198,0.05),_transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Why Are They{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Important?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Team Building & Unity</h3>
                <p>To strengthen team spirit and loyalty among employees, creating a cohesive work environment that drives productivity and job satisfaction.</p>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                <h3 className="text-xl font-bold text-brand-secondary mb-4">Celebrate Success</h3>
                <p>To celebrate milestones, achievements, and success stories that define your company's journey and motivate teams to reach new heights.</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460464/WhatsApp_Image_2025-08-27_at_12.16.31_AM_lkvref.jpg"
                  alt="Corporate team building and celebrations - D Day Evento"
                  className="w-full h-96 lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mt-12">
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460462/WhatsApp_Image_2025-08-27_at_12.16.31_AM_1_rngb3n.jpg"
                  alt="Corporate business growth and branding - D Day Evento"
                  className="w-full h-96 lg:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 order-1 md:order-2">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Business Growth</h3>
                <p>To impress clients, investors, and business partners with professionally organized events that reflect your company's commitment to excellence.</p>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                <h3 className="text-xl font-bold text-brand-secondary mb-4">Brand Image</h3>
                <p>To build and showcase a powerful brand image that resonates with your audience and establishes your company as a leader in the industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Corporate Events */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-secondary/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Types of Corporate Events{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                We Handle
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                <h3 className="text-xl font-bold text-brand-primary mb-6">Professional Gatherings</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• <strong>Conferences & Seminars</strong> - Knowledge sharing and industry insights</p>
                  <p>• <strong>Product Launches</strong> - Strategic market introductions</p>
                  <p>• <strong>Annual Day Celebrations</strong> - Company milestone celebrations</p>
                  <p>• <strong>Award Ceremonies</strong> - Recognition and appreciation events</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                <h3 className="text-xl font-bold text-brand-secondary mb-6">Team & Client Events</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• <strong>Team Building Activities</strong> - Strengthening workplace relationships</p>
                  <p>• <strong>Networking Events</strong> - Building business connections</p>
                  <p>• <strong>Gala Dinners</strong> - Elegant corporate celebrations</p>
                  <p>• <strong>Cultural Programs</strong> - Festive and cultural celebrations</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460459/WhatsApp_Image_2025-08-27_at_12.16.30_AM_ivcmp1.jpg"
                  alt="Types of corporate events - D Day Evento Hyderabad"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
              {/* Apple-style overline */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Professional Events</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Our Corporate{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Events Portfolio
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                Professional events that drive business success across Hyderabad
              </p>
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {galleryImages.slice(0, visibleImages).map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % IMAGES_PER_LOAD) * 0.1 }}
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
                        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={() => handleImageError(index)}
                      />
                    ) : (
                      <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-brand-primary mx-auto mb-2" />
                          <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">Corporate Event</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
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
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Loading More...
                    </>
                  ) : (
                    <>
                      View More Events
                      <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}

            {/* All Images Loaded Message */}
            {!hasMoreImages && galleryImages.length > IMAGES_PER_LOAD && (
              <motion.div
                className="text-center mt-8 sm:mt-10 md:mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full">
                  <Sparkles className="w-5 h-5 mr-2 text-brand-primary" />
                  You've seen all our professional corporate events!
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* The Corporate Event Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,119,198,0.05),_transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              The Corporate Event{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Process
              </span>
            </h2>

            {/* Mobile-friendly process steps */}
            <div className="mb-8 sm:mb-12">
              {/* Desktop horizontal layout */}
              <div className="hidden md:flex flex-wrap justify-center gap-4 mb-8">
                {['Planning', 'Concept', 'Execution', 'Guest Experience', 'Closing'].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-base">
                      {index + 1}
                    </div>
                    <span className="mx-2 text-lg font-medium text-gray-700">{step}</span>
                    {index < 4 && (
                      <svg className="w-6 h-6 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile vertical layout */}
              <div className="md:hidden space-y-4">
                {[
                  { step: 'Planning', description: 'Initial consultation and detailed planning phase' },
                  { step: 'Concept', description: 'Creative concept development and theme design' },
                  { step: 'Execution', description: 'Professional event setup and management' },
                  { step: 'Guest Experience', description: 'Seamless guest experience and engagement' },
                  { step: 'Closing', description: 'Event wrap-up and post-event services' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg p-4 border border-gray-200/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-1">{item.step}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tablet layout */}
              <div className="hidden sm:block md:hidden">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { step: 'Planning', description: 'Initial consultation and detailed planning' },
                    { step: 'Concept', description: 'Creative concept development and design' },
                    { step: 'Execution', description: 'Professional event setup and management' },
                    { step: 'Guest Experience', description: 'Seamless guest experience' },
                    { step: 'Closing', description: 'Event wrap-up and post-event services' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg p-4 border border-gray-200/30 ${index === 4 ? 'col-span-2 max-w-md mx-auto' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.step}</h3>
                        <p className="text-gray-600 text-xs">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-brand-primary/10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-medium text-center leading-relaxed">
                We manage it all with precision, professionalism, and perfection.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How D DAY EVENTO Helps You */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                How{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                  D DAY EVENTO
                </span>{' '}
                Helps You
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                  <h3 className="text-xl font-bold text-brand-primary mb-6">Complete Event Management</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>End-to-End Planning:</strong> From initial concept to final execution, we handle invitations, schedules, logistics, and event flow with meticulous attention to detail.</p>
                    <p><strong>Venue Management:</strong> We select and manage the perfect venue that aligns with your event's purpose and creates the right professional atmosphere.</p>
                    <p><strong>Décor & Theme Design:</strong> Our design team creates formal, classy, and impactful décor that reflects your brand identity and event objectives.</p>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                  <h3 className="text-xl font-bold text-brand-secondary mb-6">Technical & Guest Services</h3>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Audio-Visual Setup:</strong> Professional lighting, sound systems, presentations, and LED screens to ensure your message is delivered effectively.</p>
                    <p><strong>Food & Catering:</strong> Elegant menus specifically tailored for professional gatherings, accommodating diverse preferences and dietary requirements.</p>
                    <p><strong>Guest Management:</strong> Smooth, organized, and welcoming guest experience from arrival to departure.</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460457/WhatsApp_Image_2025-08-27_at_12.16.29_AM_wnufdb.jpg"
                    alt="How D Day Evento helps with corporate events"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 rounded-3xl p-8 sm:p-12 border border-brand-primary/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Entertainment & Documentation</h3>
                  <p className="text-gray-700 mb-4"><strong>Entertainment & Activities:</strong> Professional artists, keynote speakers, and engaging team-building activities that align with your corporate culture.</p>
                  <p className="text-gray-700"><strong>Photography & Videography:</strong> We capture every important moment with professional finesse, creating lasting memories of your corporate milestones.</p>
                </div>
                <div className="relative">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460454/WhatsApp_Image_2025-08-27_at_12.16.29_AM_1_rqalpt.jpg"
                    alt="Corporate event entertainment and documentation"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose D DAY EVENTO */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(120,119,198,0.05),_transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12 sm:mb-16">
              {/* Apple-style badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Why Choose Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Why Corporates Choose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  D DAY EVENTO
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
              {/* Content */}
              <div className="space-y-6">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Professionalism & Precision</h3>
                  <p className="text-gray-700 mb-4"><strong>Professionalism First:</strong> We understand the corporate world and deliver events that meet the highest professional standards.</p>
                  <p className="text-gray-700"><strong>Precision Planning:</strong> Every detail is documented and planned meticulously. No surprises, no delays, just flawless execution.</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                  <h3 className="text-xl font-bold text-brand-secondary mb-4">Creative Excellence</h3>
                  <p className="text-gray-700 mb-4"><strong>Creative Edge:</strong> Fresh ideas and unique experiences that align perfectly with your brand identity and corporate values.</p>
                  <p className="text-gray-700"><strong>Reliable Execution:</strong> On time, every time. Our track record speaks for our commitment to punctuality and quality.</p>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460451/WhatsApp_Image_2025-08-27_at_12.16.27_AM_n52vjr.jpg"
                    alt="Why choose D Day Evento for corporate events"
                    className="w-full h-96 lg:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
              {/* Image */}
              <div className="relative order-2 md:order-1">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460449/WhatsApp_Image_2025-08-27_at_12.16.27_AM_1_qewz29.jpg"
                    alt="Corporate event vendor network and brand impact"
                    className="w-full h-96 lg:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 order-1 md:order-2">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                  <h3 className="text-xl font-bold text-brand-primary mb-4">Complete Solutions</h3>
                  <p className="text-gray-700 mb-4"><strong>Strong Vendor Network:</strong> Comprehensive services including venues, décor, catering, and AV equipment, all managed under one roof.</p>
                  <p className="text-gray-700"><strong>Brand Impact:</strong> Every guest leaves with a lasting positive impression of your company and brand.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-8">
                Trusted by Many: From startups to global firms, we've delivered events that matter.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 sm:mb-12 tracking-tight leading-tight">
              What You Get With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                D DAY EVENTO
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
              {/* Content */}
              <div className="space-y-6">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                  <h3 className="text-xl font-bold text-brand-primary mb-6">What You Can Expect</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>✓ <strong>A flawless, stress-free event</strong> that runs smoothly from start to finish</p>
                    <p>✓ <strong>Professional experience for every guest</strong> that reflects your company's standards</p>
                    <p>✓ <strong>Strong impression on clients and partners</strong> that enhances business relationships</p>
                    <p>✓ <strong>An event that reflects your brand's values</strong> and strengthens your corporate identity</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460446/WhatsApp_Image_2025-08-27_at_12.16.26_AM_wotptw.jpg"
                    alt="What you get with D Day Evento corporate events"
                    className="w-full h-96 lg:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 sm:p-12 rounded-3xl text-center mb-12 shadow-2xl">
              <p className="text-xl text-white sm:text-2xl md:text-3xl font-bold mb-4">
                At D DAY EVENTO, We don't just manage corporate events.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">
                We create experiences that speak business, build relationships, and elevate brands.
              </p>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-base sm:text-lg w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
              >
                Plan Your Corporate Event With Us
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal - Phone Album Style */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="text-white text-sm">
                {selectedImage + 1} of {galleryImages.length}
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

          {/* Main Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Previous Button - Desktop */}
            {selectedImage > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hidden md:flex"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Next Button - Desktop */}
            {selectedImage < galleryImages.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-200 hidden md:flex"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Main Image */}
            <motion.img
              key={selectedImage}
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Mobile Navigation - Touch Areas */}
          <div className="absolute inset-0 flex md:hidden">
            {/* Left half - Previous */}
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

            {/* Right half - Next */}
            {selectedImage < galleryImages.length - 1 && (
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

          {/* Background Click to Close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          />
        </div>
      )}
    </div>
  );
};

export default CorporateEvents;
