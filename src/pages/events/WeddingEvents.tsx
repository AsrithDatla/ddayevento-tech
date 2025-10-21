import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FeatureSteps } from '../../components/ui/feature-section';

const WeddingEvents: React.FC = () => {
  const { pathname } = useLocation();
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
  const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const IMAGES_PER_LOAD = 6; // Load 6 more images each time

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Gallery images with SEO-optimized titles (53 real wedding images from your Cloudinary)
  const galleryImages = [
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457964/WhatsApp_Image_2025-09-17_at_4.36.15_PM_wmavz3.jpg', title: 'Traditional Wedding Ceremony Hyderabad - D Day Evento', alt: 'Beautiful traditional wedding ceremony setup by D Day Evento Hyderabad' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.12_PM_aitnbp.jpg', title: 'Grand Wedding Reception Hyderabad', alt: 'Elegant wedding reception decoration and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457961/WhatsApp_Image_2025-09-17_at_4.36.14_PM_knylty.jpg', title: 'Bride and Groom Wedding Ceremony', alt: 'Beautiful bride and groom wedding ceremony moments' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.14_PM_1_yjjxec.jpg', title: 'Haldi Mehendi Wedding Ceremony', alt: 'Colorful Haldi and Mehendi ceremony celebrations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.13_PM_anf6oz.jpg', title: 'Sangeet Cocktail Wedding Party', alt: 'Vibrant Sangeet and cocktail party celebrations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.11_PM_b1coch.jpg', title: 'Sacred Wedding Ceremony Rituals', alt: 'Traditional wedding ceremony rituals and customs' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457959/WhatsApp_Image_2025-09-17_at_4.36.11_PM_2_xa5ysx.jpg', title: 'Wedding Reception Bharath Ceremony', alt: 'Grand wedding reception and Bharath ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457959/WhatsApp_Image_2025-09-17_at_4.36.11_PM_1_g0pidf.jpg', title: 'Wedding Mandap Decoration', alt: 'Beautiful wedding mandap decoration and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457954/WhatsApp_Image_2025-09-17_at_4.36.10_PM_usduej.jpg', title: 'Wedding Guest Celebration', alt: 'Wedding guests celebrating with family and friends' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457954/WhatsApp_Image_2025-09-17_at_4.36.09_PM_cogjc0.jpg', title: 'Engagement Ceremony Planning', alt: 'Beautiful engagement ceremony setup and planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457954/WhatsApp_Image_2025-09-17_at_4.36.09_PM_1_jd75hr.jpg', title: 'Haldi Ceremony Traditions', alt: 'Traditional Haldi ceremony celebrations and rituals' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457953/WhatsApp_Image_2025-09-17_at_4.36.08_PM_uahhtg.jpg', title: 'Wedding Ceremony Sacred Moments', alt: 'Sacred wedding ceremony moments and traditions' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457950/WhatsApp_Image_2025-09-17_at_4.36.08_PM_2_ozhucy.jpg', title: 'Wedding Reception Grand Setup', alt: 'Grand wedding reception setup and decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457949/WhatsApp_Image_2025-09-17_at_4.36.08_PM_1_mry0ts.jpg', title: 'Bride Ceremony Preparations', alt: 'Beautiful bride ceremony preparations and rituals' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457949/WhatsApp_Image_2025-09-17_at_4.36.07_PM_rxzn9v.jpg', title: 'Wedding Decoration Flowers', alt: 'Elegant wedding decoration with fresh flowers' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457948/WhatsApp_Image_2025-09-17_at_4.36.07_PM_2_r3k44u.jpg', title: 'Wedding Venue Decoration', alt: 'Beautiful wedding venue decoration and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457948/WhatsApp_Image_2025-09-17_at_4.36.07_PM_1_rfhxj2.jpg', title: 'Wedding Mandap Traditional Setup', alt: 'Traditional wedding mandap setup with decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457945/WhatsApp_Image_2025-09-17_at_4.36.06_PM_si5q0v.jpg', title: 'Wedding Photography Services', alt: 'Professional wedding photography capturing moments' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457944/WhatsApp_Image_2025-09-17_at_4.36.06_PM_2_df4vz4.jpg', title: 'Wedding Catering Services', alt: 'Delicious wedding catering and food arrangements' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457944/WhatsApp_Image_2025-09-17_at_4.36.06_PM_1_tahxbn.jpg', title: 'Wedding Music Entertainment', alt: 'Traditional wedding music and entertainment' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457941/WhatsApp_Image_2025-09-17_at_4.36.05_PM_x14i96.jpg', title: 'Wedding Guest Coordination', alt: 'Professional wedding guest coordination services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457940/WhatsApp_Image_2025-09-17_at_4.36.05_PM_1_dbazcm.jpg', title: 'Haldi Ceremony Celebrations', alt: 'Joyful Haldi ceremony celebrations with family' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457940/WhatsApp_Image_2025-09-17_at_4.36.04_PM_csgqiw.jpg', title: 'Mehendi Ceremony Designs', alt: 'Beautiful Mehendi ceremony with intricate designs' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457939/WhatsApp_Image_2025-09-17_at_4.36.04_PM_1_xdn3gb.jpg', title: 'Wedding Venue Decoration Setup', alt: 'Complete wedding venue decoration and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457940/WhatsApp_Image_2025-09-17_at_4.36.03_PM_kfaicu.jpg', title: 'Wedding Traditional Rituals', alt: 'Sacred wedding traditional rituals and ceremonies' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457943/WhatsApp_Image_2025-09-17_at_4.36.03_PM_3_huoja0.jpg', title: 'Wedding Music Traditional', alt: 'Traditional wedding music and cultural performances' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457938/WhatsApp_Image_2025-09-17_at_4.36.03_PM_2_qbcrwz.jpg', title: 'Wedding Photography Moments', alt: 'Capturing beautiful wedding photography moments' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457938/WhatsApp_Image_2025-09-17_at_4.36.03_PM_1_gfo1mg.jpg', title: 'Wedding Ceremony Sacred Fire', alt: 'Sacred fire ceremony in traditional wedding' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457934/WhatsApp_Image_2025-09-17_at_4.36.02_PM_bxzyiv.jpg', title: 'Wedding Planning Process', alt: 'Professional wedding planning and coordination' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457934/WhatsApp_Image_2025-09-17_at_4.36.02_PM_2_vmk4rz.jpg', title: 'Wedding Decoration Elegant', alt: 'Elegant wedding decoration and styling' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457933/WhatsApp_Image_2025-09-17_at_4.36.02_PM_1_oixgkc.jpg', title: 'Wedding Venue Management', alt: 'Complete wedding venue management services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457933/WhatsApp_Image_2025-09-17_at_4.36.01_PM_vjp7ka.jpg', title: 'Wedding Coordination Services', alt: 'Professional wedding coordination and management' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457933/WhatsApp_Image_2025-09-17_at_4.36.01_PM_2_zkcqze.jpg', title: 'Wedding Execution Perfect', alt: 'Perfect wedding execution and management' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457932/WhatsApp_Image_2025-09-17_at_4.36.01_PM_1_ezyxbi.jpg', title: 'Wedding Celebration Moments', alt: 'Joyful wedding celebration moments with family' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457929/WhatsApp_Image_2025-09-17_at_4.35.59_PM_ipyyix.jpg', title: 'Wedding Event Execution', alt: 'Flawless wedding event execution and coordination' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457928/WhatsApp_Image_2025-09-17_at_4.35.59_PM_1_ypw9le.jpg', title: 'Wedding Behind Scenes', alt: 'Behind the scenes wedding planning and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457928/WhatsApp_Image_2025-09-17_at_3.28.48_PM_rtwtzw.jpg', title: 'Wedding Team Coordination', alt: 'Professional wedding team coordination services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457928/WhatsApp_Image_2025-09-17_at_3.28.48_PM_1_rqynyg.jpg', title: 'Wedding Setup Process', alt: 'Complete wedding setup and decoration process' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457928/WhatsApp_Image_2025-09-17_at_3.28.47_PM_qi4ain.jpg', title: 'Wedding Vendor Management', alt: 'Professional wedding vendor management services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457927/WhatsApp_Image_2025-09-17_at_3.28.47_PM_2_csiu61.jpg', title: 'Wedding Logistics Planning', alt: 'Complete wedding logistics planning and coordination' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457927/WhatsApp_Image_2025-09-17_at_3.28.47_PM_1_t5pqht.jpg', title: 'Wedding Planning Coordination', alt: 'Expert wedding planning and coordination services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457924/WhatsApp_Image_2025-09-17_at_3.28.46_PM_ocdfsp.jpg', title: 'Wedding Vendor Coordination', alt: 'Professional wedding vendor coordination and management' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457924/WhatsApp_Image_2025-09-17_at_3.28.46_PM_2_ifbdo9.jpg', title: 'Wedding Event Management', alt: 'Complete wedding event management services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457923/WhatsApp_Image_2025-09-17_at_3.28.46_PM_1_rbr8kl.jpg', title: 'Wedding Day Coordination', alt: 'Seamless wedding day coordination and execution' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457921/WhatsApp_Image_2025-09-17_at_3.28.45_PM_mwwy37.jpg', title: 'Wedding Event Execution Team', alt: 'Professional wedding event execution team' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457921/WhatsApp_Image_2025-09-17_at_3.28.45_PM_2_cc1vyx.jpg', title: 'Wedding Management Services', alt: 'Complete wedding management and coordination services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457920/WhatsApp_Image_2025-09-17_at_3.28.45_PM_1_gpjxik.jpg', title: 'Wedding Planning Excellence', alt: 'Excellence in wedding planning and execution' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457920/WhatsApp_Image_2025-09-17_at_3.28.44_PM_tjcybb.jpg', title: 'Wedding Coordination Expert', alt: 'Expert wedding coordination and management' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457920/WhatsApp_Image_2025-09-17_at_3.28.44_PM_1_ppm8hs.jpg', title: 'Wedding Setup Excellence', alt: 'Excellence in wedding setup and decoration' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457920/WhatsApp_Image_2025-09-17_at_3.28.43_PM_oykmld.jpg', title: 'Wedding Event Planning', alt: 'Professional wedding event planning services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457920/WhatsApp_Image_2025-09-17_at_3.28.43_PM_2_gfun95.jpg', title: 'Wedding Execution Perfect', alt: 'Perfect wedding execution and coordination' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457920/WhatsApp_Image_2025-09-17_at_3.28.43_PM_1_qjqdoq.jpg', title: 'Wedding Planning Professional', alt: 'Professional wedding planning and management' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457920/WhatsApp_Image_2025-09-17_at_3.28.42_PM_wixblg.jpg', title: 'Wedding Services Complete', alt: 'Complete wedding services and coordination' }
  ];

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

  const weddingFeatures = [
    {
      step: "Engagement",
      title: "Engagement",
      content: "The official beginning of your forever. Where promises are made and rings are exchanged, marking the start of your journey together.",
      image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760459618/WhatsApp_Image_2025-09-17_at_3.23.52_PM_1_nttm2b.jpg"
    },
    {
      step: "Bride & Groom Ceremonies",
      title: "Bride & Groom Traditional Ceremonies",
      content: "Customs that honor your roots. Individual celebrations that prepare both families for the sacred union ahead.",
      image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760457948/WhatsApp_Image_2025-09-17_at_4.36.07_PM_2_r3k44u.jpg"
    },
    {
      step: "Haldi & Mehendi",
      title: "Haldi & Mehendi",
      content: "Fun-filled, colorful traditions with family and friends. Where turmeric brings blessings and henna creates beautiful patterns of love.",
      image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760457934/WhatsApp_Image_2025-09-17_at_4.36.02_PM_2_vmk4rz.jpg"
    },
    {
      step: "Sangeet / Cocktail / Bachelor's Party",
      title: "Sangeet / Cocktail / Bachelor's Party",
      content: "Where music, dance, and laughter take over. Celebrations that bring both families together in joy, music, and unforgettable moments.",
      image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.13_PM_anf6oz.jpg"
    },
    {
      step: "Wedding Ceremony",
      title: "Wedding Ceremony",
      content: "The sacred union of two souls. The most sacred moment where vows are taken and two hearts become one forever.",
      image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.12_PM_aitnbp.jpg"
    },
    {
      step: "Reception / Bharath",
      title: "Reception / Bharath",
      content: "A grand celebration to honor the new couple. Where the newlyweds are welcomed into society and celebrated by all who love them.",
      image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760458794/WhatsApp_Image_2025-09-17_at_3.27.41_PM_1_jyzw69.jpg"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.12_PM_aitnbp.jpg"
            alt="Traditional wedding ceremony Hyderabad - D Day Evento"
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
              Your Wedding. Your Story.{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                Perfectly Executed.
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              A wedding is the beginning of a new life. It is the union of two people, two families, and two worlds.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
            >
              At D DAY EVENTO, we turn your dream into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Plan Your Wedding With Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is a Wedding */}
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
                What is a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Wedding?</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="text-xl text-gray-800 font-medium">
                  The union of two people and two families.
                </p>

                <p>
                  The start of a new journey filled with love and responsibility. More than rituals, it is emotions, values, and tradition woven together.
                </p>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-brand-primary">
                  <p className="text-brand-primary font-semibold text-lg italic">
                    "In Indian culture, a wedding is not just a ceremony. It is the sacred bond that connects souls, families, and generations."
                  </p>
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
                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457959/WhatsApp_Image_2025-09-17_at_4.36.11_PM_1_g0pidf.jpg"
                alt="Traditional Indian wedding ceremony"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Do We Celebrate */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              Why Do We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebrate?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Life's Biggest Milestone",
                description: "Because a wedding marks the most significant transition in human life - from individual to united souls."
              },
              {
                title: "Honor Traditions",
                description: "To celebrate love and unite families while preserving the sacred customs passed down through generations."
              },
              {
                title: "Create Lasting Memories",
                description: "To create memories that last a lifetime and beyond, becoming stories told to future generations."
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Events Steps */}
      <section className="py-16 sm:py-20 bg-white">
        <FeatureSteps
          features={weddingFeatures}
          title="Wedding Events & Days We Curate"
          autoPlayInterval={4000}
          className="bg-white"
        />

      </section>

      {/* Who Do We Celebrate With */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457954/WhatsApp_Image_2025-09-17_at_4.36.10_PM_usduej.jpg"
                alt="Wedding celebration with family and friends"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Who Do We{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebrate With?</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Family, relatives, friends, and well-wishers. Each person who attends your wedding brings their own blessings and love.
                </p>

                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-brand-primary">
                  <p className="text-brand-primary font-semibold">
                    Guests are not just attendees - they are part of the story, part of the celebration.
                  </p>
                </div>

                <p>
                  In Indian weddings, every guest is considered a blessing. Their presence makes the celebration complete, their joy multiplies your happiness, and their blessings pave the way for your new journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Wedding Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              The Wedding{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures that nothing is left to chance
            </p>
          </motion.div>



          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {[
              { step: "Plan", description: "Understanding your vision and requirements" },
              { step: "Design", description: "Creating the perfect aesthetic for your celebration" },
              { step: "Organize", description: "Coordinating all vendors and logistics" },
              { step: "Execute", description: "Flawless implementation on your special day" },
              { step: "Celebrate", description: "Enjoying every moment without worry" },
              { step: "Conclude", description: "Ensuring everything ends perfectly" }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {process.step}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {process.description}
                </p>
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
            <p className="text-lg text-gray-700 font-medium">
              Every ritual, every detail, every moment handled with precision and passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wedding Gallery Section */}
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
                <span className="text-xs sm:text-sm font-medium text-gray-700">Real Weddings</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Our Wedding{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Portfolio
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                Authentic moments from real weddings we've planned and executed across Hyderabad
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
                          <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">Wedding Celebration</p>
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
                      View More Wedding Stories
                      <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}

            {/* All Images Loaded Message */}
            {!hasMoreImages && galleryImages.length > IMAGES_PER_LOAD && (
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full">
                  <Sparkles className="w-5 h-5 mr-2 text-brand-primary" />
                  You've seen all our amazing wedding celebrations!
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* How D DAY EVENTO Helps */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              How{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">D DAY EVENTO</span>{' '}
              Helps
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We don't just plan weddings - we create experiences.
            </p>
          </motion.div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full Control & Management</h3>
                <p className="text-gray-600">Complete oversight of the wedding process from start to finish, ensuring nothing is overlooked.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Vendor Management</h3>
                <p className="text-gray-600">Comprehensive coordination of vendors, décor, catering, music, and entertainment.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guest Care & Logistics</h3>
                <p className="text-gray-600">Smooth event flow handled with expertise, ensuring every guest feels welcomed and cared for.</p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guest Service Assistance Team</h3>
                <p className="text-gray-600">Dedicated team for client handling, planning, and all necessary paperwork.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Event Task Force Team</h3>
                <p className="text-gray-600">Ground execution specialists handling setup and guest coordination seamlessly.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance to address any concerns and ensure peace of mind.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get With Us */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d97706%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3Ccircle%20cx%3D%220%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%220%22%20r%3D%224%22/%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2260%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              What You Get{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">With Us</span>
            </h2>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
            {[
              {
                title: "Stress-Free Experience",
                description: "No chaos, only celebration"
              },
              {
                title: "Happy Guests",
                description: "Well-served, well-managed, and well-entertained"
              },
              {
                title: "Relaxed Families",
                description: "Free to enjoy the moments, not manage them"
              },
              {
                title: "Unforgettable Wedding",
                description: "Grand, organized, and memorable"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <div className="relative">
                  {/* Modern accent line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mb-4"></div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Quote Card */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-orange-200/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-400/10 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-red-400/10 to-transparent rounded-tr-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">"</span>
              </div>
              
              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed mb-2">
                "At D DAY EVENTO, your wedding is not just an event."
              </blockquote>
              <blockquote className="text-lg sm:text-xl md:text-2xl text-brand-primary font-semibold italic leading-relaxed mb-6">
                "It is an experience – lived once, remembered forever."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent w-16"></div>
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent w-16"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/50 to-transparent">
            <div className="flex items-center justify-between">
              <div className="text-white text-sm">
                {selectedImage + 1} of {galleryImages.length}
              </div>
              <button
                onClick={closeLightbox}
                className="text-white hover:text-gray-300 transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Previous Button - Desktop */}
          {selectedImage > 0 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-10 hidden md:block"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Next Button - Desktop */}
          {selectedImage < galleryImages.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-10 hidden md:block"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.img
              key={selectedImage}
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Mobile Navigation Overlay */}
            <div className="absolute inset-0 flex md:hidden">
              {/* Left half - Previous */}
              {selectedImage > 0 && (
                <div
                  className="w-1/2 h-full flex items-center justify-start pl-4"
                  onClick={prevImage}
                >
                  <ChevronLeft size={24} className="text-white/70" />
                </div>
              )}

              {/* Right half - Next */}
              {selectedImage < galleryImages.length - 1 && (
                <div
                  className="w-1/2 h-full flex items-center justify-end pr-4 ml-auto"
                  onClick={nextImage}
                >
                  <ChevronRight size={24} className="text-white/70" />
                </div>
              )}
            </div>
          </div>

          {/* Image Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-white text-center text-sm sm:text-base">
              {galleryImages[selectedImage].title}
            </p>
          </div>
        </motion.div>
      )}

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6 sm:mb-8 leading-tight">
              Ready to Create Your Perfect Wedding?
            </h2>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed">
              Let's turn your dream wedding into reality. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Planning Your Wedding
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold rounded-lg transition-all duration-300"
              >
                Contact Us Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WeddingEvents;