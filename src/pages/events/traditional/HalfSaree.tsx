import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const HalfSaree: React.FC = () => {
  const { pathname } = useLocation();
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(12); // Show 12 images initially
  const [isLoading, setIsLoading] = useState(false);

  const IMAGES_PER_LOAD = 12; // Load 12 more images each time

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Gallery images - Half Saree ceremony images
  const images = [
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461011/WhatsApp_Image_2025-08-26_at_7.20.19_PM_sug7s3.jpg', title: 'Half Saree Ceremony - D Day Evento', alt: 'Beautiful Half Saree ceremony setup by D Day Evento Hyderabad' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461021/WhatsApp_Image_2025-08-26_at_7.20.25_PM_ffkwq8.jpg', title: 'Royal Half Saree Celebration', alt: 'Royal Half Saree ceremony celebration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461017/WhatsApp_Image_2025-08-26_at_7.20.20_PM_b4zshr.jpg', title: 'Traditional Half Saree Setup', alt: 'Traditional Half Saree ceremony setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461013/WhatsApp_Image_2025-08-26_at_7.20.20_PM_1_u9fm98.jpg', title: 'Half Saree Decoration', alt: 'Beautiful Half Saree ceremony decoration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461008/WhatsApp_Image_2025-08-26_at_7.20.19_PM_2_piinc8.jpg', title: 'Half Saree Venue Setup', alt: 'Elegant Half Saree venue decoration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461004/WhatsApp_Image_2025-08-26_at_7.20.19_PM_1_elkln1.jpg', title: 'Half Saree Stage Design', alt: 'Beautiful Half Saree stage design' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461001/WhatsApp_Image_2025-08-26_at_7.20.16_PM_mbcgyn.jpg', title: 'Half Saree Photography', alt: 'Professional Half Saree photography' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460999/WhatsApp_Image_2025-08-26_at_7.06.57_PM_imqbsu.jpg', title: 'Half Saree Catering', alt: 'Traditional Half Saree catering services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460994/WhatsApp_Image_2025-08-26_at_7.06.54_PM_r39maf.jpg', title: 'Half Saree Entertainment', alt: 'Cultural entertainment for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460994/WhatsApp_Image_2025-08-26_at_7.06.53_PM_iowrkx.jpg', title: 'Half Saree Family Celebration', alt: 'Joyful Half Saree family celebrations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460989/WhatsApp_Image_2025-08-26_at_7.06.53_PM_1_mld8pf.jpg', title: 'Half Saree Rituals', alt: 'Traditional Half Saree rituals and ceremonies' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460985/WhatsApp_Image_2025-08-26_at_7.06.52_PM_w3locw.jpg', title: 'Half Saree Blessings', alt: 'Sacred Half Saree blessing ceremonies' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460984/WhatsApp_Image_2025-08-26_at_7.06.52_PM_2_ox5nhn.jpg', title: 'Half Saree Floral Decor', alt: 'Beautiful floral decorations for Half Saree' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460979/WhatsApp_Image_2025-08-26_at_7.06.52_PM_1_cty5eo.jpg', title: 'Half Saree Lighting', alt: 'Elegant lighting setup for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460976/WhatsApp_Image_2025-08-26_at_7.06.51_PM_diywr6.jpg', title: 'Half Saree Traditional Setup', alt: 'Traditional Half Saree ceremony setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460972/WhatsApp_Image_2025-08-26_at_7.06.51_PM_2_ltcyic.jpg', title: 'Half Saree Celebration Moments', alt: 'Beautiful Half Saree celebration moments' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460969/WhatsApp_Image_2025-08-26_at_7.06.51_PM_1_iz5ozh.jpg', title: 'Half Saree Cultural Program', alt: 'Cultural programs for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460966/WhatsApp_Image_2025-08-26_at_7.06.50_PM_zltf6r.jpg', title: 'Half Saree Guest Arrangements', alt: 'Guest arrangements for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460963/WhatsApp_Image_2025-08-26_at_7.06.50_PM_2_zbtgjq.jpg', title: 'Half Saree Return Gifts', alt: 'Traditional return gifts for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460961/WhatsApp_Image_2025-08-26_at_7.06.50_PM_1_xbzfbj.jpg', title: 'Half Saree Memory Making', alt: 'Creating memories at Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460957/WhatsApp_Image_2025-08-26_at_7.06.49_PM_q1xd3p.jpg', title: 'Half Saree Grand Entry', alt: 'Grand entry concepts for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460954/WhatsApp_Image_2025-08-26_at_7.06.48_PM_t8rq7e.jpg', title: 'Half Saree Theme Decoration', alt: 'Theme-based decoration for Half Saree' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460952/WhatsApp_Image_2025-08-26_at_7.06.45_PM_vzmxec.jpg', title: 'Half Saree Food Arrangements', alt: 'Traditional food arrangements for Half Saree' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460948/WhatsApp_Image_2025-08-26_at_7.06.45_PM_1_dzmy2x.jpg', title: 'Half Saree Photography Session', alt: 'Professional photography for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460945/WhatsApp_Image_2025-08-26_at_7.06.43_PM_qesslf.jpg', title: 'Half Saree Entertainment Program', alt: 'Entertainment programs for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460942/WhatsApp_Image_2025-08-26_at_7.06.43_PM_1_peol5p.jpg', title: 'Half Saree Ritual Setup', alt: 'Sacred ritual setup for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460939/WhatsApp_Image_2025-08-26_at_7.06.42_PM_tjx2me.jpg', title: 'Half Saree Celebration Joy', alt: 'Joyful moments from Half Saree celebration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460937/WhatsApp_Image_2025-08-26_at_7.06.40_PM_aroluk.jpg', title: 'Half Saree Traditional Attire', alt: 'Beautiful traditional attire for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460932/WhatsApp_Image_2025-08-26_at_7.06.39_PM_sw6mot.jpg', title: 'Half Saree Family Gathering', alt: 'Family gathering for Half Saree ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460931/WhatsApp_Image_2025-08-26_at_7.06.38_PM_sat9gv.jpg', title: 'Half Saree Memorable Moments', alt: 'Creating memorable moments at Half Saree ceremony' }
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
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461011/WhatsApp_Image_2025-08-26_at_7.20.19_PM_sug7s3.jpg"
            alt="Half Saree Ceremony - A Royal Celebration of Womanhood - D Day Evento"
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
              Half Saree Ceremony{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                A Royal Celebration of Womanhood
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              In India, and especially in South India, the Half Saree Ceremony is one of the most vibrant and meaningful milestones in a girl's life. It's not just a function—it's a cultural transformation.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
            >
              Where a young girl steps into her new phase of life, celebrated with family, friends, and tradition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Plan Her Royal Celebration
              </button>
            </motion.div>
          </div>
        </div>
      </section>      {/*
 Meaning & Purpose Section */}
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
                Meaning &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Purpose</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  The Half Saree Ceremony (also called Langa Voni, Ritu Shuddhi, or Coming of Age Ceremony) is celebrated when a girl enters puberty/adolescence, usually between 11–13 years of age.
                </p>

                <div className="bg-gradient-to-r from-brand-primary/5 to-gold/5 p-6 rounded-xl border-l-4 border-brand-primary">
                  <p className="font-semibold text-brand-primary text-lg">
                    It symbolizes her transition from childhood to womanhood.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Why Celebrate?</h3>
                  <p>To honor her growth, bless her with prosperity, health, and good fortune, and to present her with the cultural attire that marks maturity—the Half Saree.</p>
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
                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461021/WhatsApp_Image_2025-08-26_at_7.20.25_PM_ffkwq8.jpg"
                alt="Half Saree ceremony meaning and purpose"
                className="w-full h-96 object-cover rounded-2xl shadow-xl border border-gray-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Celebration Details Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              How to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebrate</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* With Whom to Celebrate */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">With Whom to Celebrate?</h3>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-center mb-6">This is a big family gathering where everyone comes together to witness the girl's first steps into womanhood:</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Parents & Grandparents",
                      "Siblings & Relatives", 
                      "Family Friends",
                      "Community Members"
                    ].map((person, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{person}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How to Celebrate */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">How to Celebrate?</h3>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-center mb-6">With rituals, prayers, blessings, grandeur, and joyful festivities that showcase both tradition and modern elegance:</p>
                  
                  <div className="space-y-3">
                    {[
                      "Sacred rituals and prayers",
                      "Traditional blessings ceremony", 
                      "Grand decorations and setup",
                      "Cultural performances",
                      "Joyful family festivities"
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grand Entry Concepts Section */}
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
              The Grand{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Entry Concepts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The girl's entry is the highlight of the ceremony—her moment of royalty. D DAY EVENTO curates unforgettable entry concepts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Pallaki Entry",
                description: "A flower-decorated palanquin, carried with grace and tradition."
              },
              {
                title: "Passage Walk",
                description: "A grand pathway adorned with flowers, lights, or themed décor."
              },
              {
                title: "Themed Vehicles",
                description: "Royal chariots, decorated cars, or traditional carts."
              },
              {
                title: "Dance Troupes & Music",
                description: "Classical dancers or folk performers escorting her in style."
              },
              {
                title: "Lighting Effects",
                description: "Spotlights, cold pyros, and thematic LED lighting to enhance the moment."
              },
              {
                title: "Royal Treatment",
                description: "Every entry is designed to make the girl feel like a queen stepping into her destiny."
              }
            ].map((concept, index) => (
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
                    {concept.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {concept.description}
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
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461017/WhatsApp_Image_2025-08-26_at_7.20.20_PM_b4zshr.jpg"
                  alt="Grand entry concepts for Half Saree ceremony"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-2xl font-bold mb-2 text-gold">Royal Entry Concepts</h4>
                  <p className="text-gray-200 text-lg">Making her feel like a queen</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461013/WhatsApp_Image_2025-08-26_at_7.20.20_PM_1_u9fm98.jpg"
                    alt="Half Saree ceremony decoration"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Elegant Setup</p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461008/WhatsApp_Image_2025-08-26_at_7.20.19_PM_2_piinc8.jpg"
                    alt="Half Saree ceremony venue"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Perfect Venue</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>   
   {/* D DAY EVENTO Services Section */}
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
              D DAY EVENTO –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Your Celebration Partner</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At D DAY EVENTO, we don't just organize Half Saree Ceremonies—we create grand stories that a girl and her family will cherish forever.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Complete Theme Planning",
                description: "From rituals to entertainment, every detail planned to perfection."
              },
              {
                title: "Royal Entries",
                description: "Tailored to family traditions & modern styles for that perfect moment."
              },
              {
                title: "Floral & Theme Décor",
                description: "Every setup designed with perfection, matching your vision and tradition."
              },
              {
                title: "Food & Catering",
                description: "Menus reflecting both tradition & variety, served with excellence."
              },
              {
                title: "Cinematic Photography",
                description: "Memories that look larger than life, captured professionally."
              },
              {
                title: "Anchors & Entertainment",
                description: "Keeping the crowd lively & engaged throughout the celebration."
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

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-brand-primary/5 to-gold/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-brand-primary/10 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Additional Ceremonial Services
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Decoration & Setup",
                      description: "Stage & Backdrop with flower-adorned backdrop and royal seating arrangements"
                    },
                    {
                      title: "Food & Feast",
                      description: "Authentic South Indian spreads to multi-cuisine menus reflecting heritage and taste"
                    },
                    {
                      title: "Photography & Memories",
                      description: "Cinematic memory creation with candid captures and royal entry sequences"
                    },
                    {
                      title: "Return Gifts",
                      description: "Tambulam sets and traditional gift packs customized as per family tradition"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461004/WhatsApp_Image_2025-08-26_at_7.20.19_PM_1_elkln1.jpg"
                  alt="D Day Evento Half Saree ceremony services"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Rituals Section */}
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
              Other Rituals Connected with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Half Saree Ceremony</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Haldi Ceremony",
                description: "A ritual of applying turmeric paste for purity, beauty, and protection.",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461001/WhatsApp_Image_2025-08-26_at_7.20.16_PM_mbcgyn.jpg"
              },
              {
                title: "Mehendi Ceremony", 
                description: "A joyful celebration where girls adorn their hands with mehendi, filled with music, laughter, and fun.",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760460999/WhatsApp_Image_2025-08-26_at_7.06.57_PM_imqbsu.jpg"
              },
              {
                title: "Satyanarayana Vratham",
                description: "A sacred puja performed for divine blessings and family prosperity.",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760460994/WhatsApp_Image_2025-08-26_at_7.06.54_PM_r39maf.jpg"
              }
            ].map((ritual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 hover:border-gold/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={ritual.image}
                      alt={ritual.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">
                      {ritual.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {ritual.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Half Saree Ceremony Gallery */}
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
                <span className="text-xs sm:text-sm font-medium text-gray-700">Half Saree Celebrations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Our Half Saree{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Portfolio
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                Witness the royal celebrations and beautiful traditions of our Half Saree ceremonies across Hyderabad
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

            {visibleImages >= images.length && images.length > 12 && (
              <motion.div
                className="text-center mt-8 sm:mt-10 md:mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full">
                  <span className="w-5 h-5 mr-2 text-brand-primary">✨</span>
                  You've seen all our Half Saree celebrations!
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>      {/* 
Final CTA */}
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
                Where Tradition Meets Grandeur
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
                We make your daughter's Half Saree Ceremony not just a function,
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                but a royal celebration of her new journey.
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
                Celebrate Her Royal Journey
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

export default HalfSaree;