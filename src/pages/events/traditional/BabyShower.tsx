import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ImprovedQuoteModal from '../../../components/QuoteGenerator/ImprovedQuoteModal';

const BabyShower: React.FC = () => {
  const { pathname } = useLocation();
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(12); // Show 12 images initially
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const IMAGES_PER_LOAD = 12; // Load 12 more images each time

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Gallery images - Baby Shower images
  const images = [
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461419/WhatsApp_Image_2025-08-26_at_7.20.25_PM_pytvci.jpg', title: 'Baby Shower Sreemantham - D Day Evento', alt: 'Beautiful Baby Shower Sreemantham ceremony by D Day Evento Hyderabad' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461408/WhatsApp_Image_2025-08-26_at_6.44.30_PM_1_d5190m.jpg', title: 'Traditional Baby Shower Setup', alt: 'Traditional baby shower ceremony setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461412/WhatsApp_Image_2025-08-26_at_6.44.30_PM_knm5e2.jpg', title: 'Sreemantham Decoration', alt: 'Beautiful Sreemantham decoration and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461380/WhatsApp_Image_2025-08-26_at_6.44.23_PM_i4ipe2.jpg', title: 'Baby Shower Floral Decor', alt: 'Elegant floral decoration for baby shower' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461377/WhatsApp_Image_2025-08-26_at_6.44.23_PM_2_hxpkce.jpg', title: 'Maternity Celebration', alt: 'Beautiful maternity celebration setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461373/WhatsApp_Image_2025-08-26_at_6.44.23_PM_1_dxjbmq.jpg', title: 'Baby Shower Photography', alt: 'Professional baby shower photography' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461369/WhatsApp_Image_2025-08-26_at_6.44.22_PM_hjiezm.jpg', title: 'Traditional Rituals Setup', alt: 'Traditional rituals setup for baby shower' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461366/WhatsApp_Image_2025-08-26_at_6.44.22_PM_1_seqjzp.jpg', title: 'Baby Shower Catering', alt: 'Traditional catering for baby shower ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461363/WhatsApp_Image_2025-08-26_at_6.44.20_PM_oulpr9.jpg', title: 'Family Celebration', alt: 'Joyful family celebration for baby shower' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461359/WhatsApp_Image_2025-08-26_at_6.44.20_PM_2_ygu0at.jpg', title: 'Mehendi Ceremony', alt: 'Beautiful mehendi ceremony during baby shower' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461356/WhatsApp_Image_2025-08-26_at_6.44.20_PM_1_sgsyps.jpg', title: 'Baby Shower Blessings', alt: 'Sacred blessings during baby shower ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461349/WhatsApp_Image_2025-08-26_at_6.44.19_PM_vyniry.jpg', title: 'Traditional Baby Shower', alt: 'Traditional baby shower ceremony celebration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461335/WhatsApp_Image_2025-08-26_at_6.44.19_PM_1_aljuop.jpg', title: 'Baby Shower Decoration', alt: 'Beautiful baby shower decoration setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461329/WhatsApp_Image_2025-08-26_at_6.44.18_PM_2_dd0tv9.jpg', title: 'Sreemantham Rituals', alt: 'Sacred Sreemantham rituals and ceremonies' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461325/WhatsApp_Image_2025-08-26_at_6.44.18_PM_1_dh24fw.jpg', title: 'Baby Shower Memories', alt: 'Creating beautiful memories at baby shower' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461322/WhatsApp_Image_2025-08-26_at_6.44.17_PM_wqrehe.jpg', title: 'Maternity Photography', alt: 'Professional maternity photography session' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461320/WhatsApp_Image_2025-08-26_at_6.44.17_PM_1_o1f95j.jpg', title: 'Baby Shower Entertainment', alt: 'Entertainment and activities for baby shower' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461383/WhatsApp_Image_2025-08-26_at_6.44.25_PM_1_xpll96.jpg', title: 'Traditional Setup', alt: 'Traditional baby shower setup and decoration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461386/WhatsApp_Image_2025-08-26_at_6.44.25_PM_aksyul.jpg', title: 'Baby Shower Celebration', alt: 'Complete baby shower celebration setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461394/WhatsApp_Image_2025-08-26_at_6.44.26_PM_2_da6hwv.jpg', title: 'Modern Baby Shower', alt: 'Modern baby shower decoration and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461398/WhatsApp_Image_2025-08-26_at_6.44.26_PM_p6hthg.jpg', title: 'Baby Shower Return Gifts', alt: 'Beautiful return gifts for baby shower guests' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461402/WhatsApp_Image_2025-08-26_at_6.44.28_PM_hdoluz.jpg', title: 'Baby Shower Food', alt: 'Traditional food arrangements for baby shower' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461404/WhatsApp_Image_2025-08-26_at_6.44.29_PM_piccln.jpg', title: 'Complete Baby Shower', alt: 'Complete baby shower ceremony celebration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760461415/WhatsApp_Image_2025-08-26_at_6.45.07_PM_aon26u.jpg', title: 'Baby Shower Finale', alt: 'Beautiful finale of baby shower ceremony' }
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
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461419/WhatsApp_Image_2025-08-26_at_7.20.25_PM_pytvci.jpg"
            alt="Baby Shower – Sreemantham - D Day Evento"
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
              Baby Shower{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                Sreemantham
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              A Baby Shower, known as Sreemantham in Telugu, is one of the most cherished celebrations in South India. It is not just an event—it's a sacred tradition, a blessing ceremony, and a festival of love.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
            >
              Showered upon the mother-to-be and the unborn child with divine blessings and family love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Celebrate Motherhood's Journey
              </button>
            </motion.div>
          </div>
        </div>
      </section> 
     {/* Sacred Tradition Section */}
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
                A Sacred{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Tradition</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  This occasion is deeply rooted in culture and rituals. Sreemantham marks the beginning of a new chapter where family, friends, and well-wishers gather to celebrate motherhood.
                </p>

                <div className="bg-gradient-to-r from-brand-primary/5 to-gold/5 p-6 rounded-xl border-l-4 border-brand-primary">
                  <p className="font-semibold text-brand-primary text-lg">
                    They pray for the child's healthy arrival, and shower blessings on the parents-to-be.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Why Celebrate?</h3>
                  <p>To honor the mother, welcome the child with divine blessings, and strengthen family bonds. It's a way of saying, "We are ready to receive this little miracle with love, care, and joy."</p>
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
                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461408/WhatsApp_Image_2025-08-26_at_6.44.30_PM_1_d5190m.jpg"
                alt="Sacred tradition of baby shower ceremony"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Celebration{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Details</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Whom to Celebrate With */}
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
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Whom to Celebrate With?</h3>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-center">
                    Close family, relatives, and friends gather around to create an atmosphere of happiness, laughter, rituals, music, and blessings.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* When to Celebrate */}
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
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">When to Celebrate?</h3>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-center">
                    Traditionally celebrated during the 7th or 9th month of pregnancy, as it's considered the most auspicious time for the child's growth and well-being.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Traditions & Rituals */}
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
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Traditions & Rituals</h3>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="font-semibold text-brand-primary mb-2">Traditional Side:</p>
                      <p className="text-sm">Complete floral decorations, decorated cradle setups, turmeric & kumkum rituals, mehendi for women, and heartfelt blessings from elders.</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-brand-secondary mb-2">Western Side:</p>
                      <p className="text-sm">Elegant balloon décor, soft pastel themes, chic backdrops, and modern arrangements that radiate class and joy.</p>
                    </div>
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
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461412/WhatsApp_Image_2025-08-26_at_6.44.30_PM_knm5e2.jpg"
                  alt="Baby shower celebration details"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-2xl font-bold mb-2 text-gold">Both Styles Celebrate Life</h4>
                  <p className="text-gray-200 text-lg">Traditional and modern approaches</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461380/WhatsApp_Image_2025-08-26_at_6.44.23_PM_i4ipe2.jpg"
                    alt="Baby shower decoration"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Beautiful Setup</p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461377/WhatsApp_Image_2025-08-26_at_6.44.23_PM_2_hxpkce.jpg"
                    alt="Baby shower celebration"
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

      {/* Food & Memories Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Food & Flavors{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                  + Memories
                </span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <div className="bg-gradient-to-r from-brand-primary/5 to-gold/5 p-6 rounded-xl border-l-4 border-brand-primary">
                  <p className="font-semibold text-brand-primary text-lg mb-2">Food & Flavors</p>
                  <p>Food is the soul of this occasion. From traditional South Indian cuisines to multi-cuisine spreads, the menu is curated to match your family's traditions, preferences, and tastes. Every dish speaks of culture, love, and hospitality.</p>
                </div>

                <div className="bg-gradient-to-r from-brand-secondary/5 to-brand-primary/5 p-6 rounded-xl border-l-4 border-brand-secondary">
                  <p className="font-semibold text-brand-secondary text-lg mb-2">Memories Captured Forever</p>
                  <p>Every smile, every ritual, every blessing deserves to be remembered. Our professional photographers capture moments that turn into lifelong memories.</p>
                </div>

                <div className="bg-gradient-to-r from-gold/10 to-brand-accent/10 p-6 rounded-xl border-l-4 border-gold">
                  <p className="font-semibold text-gold text-lg mb-2">Return Gifts</p>
                  <p>A heartfelt gesture to thank the guests—theme-based return gifts from the couple symbolize gratitude and togetherness, leaving a sweet memory for everyone present.</p>
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
              <img
                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461373/WhatsApp_Image_2025-08-26_at_6.44.23_PM_1_dxjbmq.jpg"
                alt="Food and memories at baby shower"
                className="w-full h-96 object-cover rounded-2xl shadow-xl border border-gray-200"
              />
            </motion.div>
          </div>
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
              D DAY EVENTO SERVICES –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Your Perfect Partner
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At D DAY EVENTO, we don't just plan your Baby Shower—we design the entire experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Decorations",
                description: "Traditional flower setups or modern balloon & theme-based décor."
              },
              {
                title: "Food & Catering",
                description: "Multiple cuisines, tailored to traditions & tastes."
              },
              {
                title: "Photography & Videography",
                description: "Capturing rituals, emotions & celebrations."
              },
              {
                title: "Entertainment & Activities",
                description: "Mehendi, music, cultural touch, or modern fun."
              },
              {
                title: "Return Gifts",
                description: "Personalized, theme-based gifts for all your loved ones."
              },
              {
                title: "Complete End-to-End Management",
                description: "From rituals to setup to execution—we ensure a stress-free, flawless celebration."
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

          {/* Service Promise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-brand-primary/5 to-gold/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-brand-primary/10 shadow-lg"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Promise to You
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                With us, every detail is handled with precision, passion, and perfection—because a Baby Shower is not just an event, it's a memory of a lifetime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">We make your traditions more beautiful</p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">We make your celebrations more joyful</p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">We make your memories everlasting</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760461369/WhatsApp_Image_2025-08-26_at_6.44.22_PM_hjiezm.jpg"
                  alt="D Day Evento baby shower services"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Baby Shower Gallery */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-16 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gray-50 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <span className="text-xs sm:text-sm font-medium text-gray-700">Baby Shower Celebrations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Our Baby Shower{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Portfolio
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                Witness the joy and love of our Sreemantham ceremonies across Hyderabad
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
                  You've seen all our baby shower celebrations!
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gray-50">
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
                Celebrating the Sacred Journey of Motherhood
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
                We ensure this sacred celebration honors the beauty of motherhood
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                while creating memories that will be cherished for generations to come.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg"
              >
                Celebrate Your Sacred Journey
                <ArrowRight className="ml-2" size={20} />
              </button>
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

      {/* Quote Modal */}
      <ImprovedQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default BabyShower;