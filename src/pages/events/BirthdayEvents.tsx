import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const BirthdayEvents: React.FC = () => {
  const { pathname } = useLocation();
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
  const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCakeImage, setCurrentCakeImage] = useState(0);

  const IMAGES_PER_LOAD = 6; // Load 6 more images each time

  // Cake carousel images
  const cakeImages = [
    {
      url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460224/WhatsApp_Image_2025-09-16_at_4.57.25_PM_1_kdr9cp.jpg',
      alt: 'Beautiful birthday cake design - D Day Evento Hyderabad'
    },
    {
      url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460199/WhatsApp_Image_2025-09-16_at_4.57.18_PM_xys9vx.jpg',
      alt: 'Custom birthday cake creation - D Day Evento Hyderabad'
    },
    {
      url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460186/WhatsApp_Image_2025-09-16_at_4.57.17_PM_1_hrceon.jpg',
      alt: 'Elegant birthday cake decoration - D Day Evento Hyderabad'
    }
  ];

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Auto carousel for cake images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCakeImage((prev) => (prev + 1) % cakeImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [cakeImages.length]);

  // Gallery images with SEO-optimized titles (57 real images from your Cloudinary)
  const galleryImages = [
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460256/WhatsApp_Image_2025-09-16_at_4.57.30_PM_kxz2y4.jpg', title: 'Best Birthday Event Planner in Hyderabad - Kids Theme Party', alt: 'Professional birthday party decoration with colorful themes by D Day Evento Hyderabad' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460254/WhatsApp_Image_2025-09-16_at_4.57.29_PM_fvfpv2.jpg', title: 'Premium Birthday Cake Cutting Ceremony Hyderabad', alt: 'Elegant birthday cake cutting moment captured by top event planners' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460251/WhatsApp_Image_2025-09-16_at_4.57.29_PM_1_wl9lyb.jpg', title: 'Luxury Adult Birthday Party Planner Hyderabad', alt: 'Sophisticated adult birthday celebration with premium decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460248/WhatsApp_Image_2025-09-16_at_4.57.28_PM_x3ikga.jpg', title: 'First Birthday Party Decoration Specialists Hyderabad', alt: 'Beautiful first birthday party setup with custom themes' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460246/WhatsApp_Image_2025-09-16_at_4.57.28_PM_2_ny6g1q.jpg', title: 'Milestone Birthday Event Management Hyderabad', alt: 'Grand milestone birthday celebration organized by professional planners' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460243/WhatsApp_Image_2025-09-16_at_4.57.28_PM_1_lbmuwt.jpg', title: 'Kids Birthday Party Entertainment Hyderabad', alt: 'Fun-filled kids birthday party with games and entertainment' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460241/WhatsApp_Image_2025-09-16_at_4.57.27_PM_p1aqrl.jpg', title: 'Birthday Balloon Decoration Experts Hyderabad', alt: 'Creative balloon decorations for birthday celebrations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460237/WhatsApp_Image_2025-09-16_at_4.57.27_PM_2_lsy3ta.jpg', title: 'Themed Birthday Party Planners Hyderabad', alt: 'Custom themed birthday party decorations and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460235/WhatsApp_Image_2025-09-16_at_4.57.27_PM_1_sybfl1.jpg', title: 'Birthday Photography Services Hyderabad', alt: 'Professional birthday party photography capturing precious moments' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460232/WhatsApp_Image_2025-09-16_at_4.57.26_PM_ks41ac.jpg', title: 'Cake Smash Photography Hyderabad', alt: 'Adorable cake smash session for first birthday celebrations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460229/WhatsApp_Image_2025-09-16_at_4.57.25_PM_kkjggd.jpg', title: 'Birthday Venue Decoration Hyderabad', alt: 'Complete venue transformation for birthday celebrations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460228/WhatsApp_Image_2025-09-16_at_4.57.25_PM_2_lll5aa.jpg', title: 'Corporate Birthday Event Planners Hyderabad', alt: 'Professional corporate birthday celebration management' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460224/WhatsApp_Image_2025-09-16_at_4.57.25_PM_1_kdr9cp.jpg', title: 'Princess Theme Birthday Party Hyderabad', alt: 'Magical princess themed birthday celebration for girls' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460222/WhatsApp_Image_2025-09-16_at_4.57.24_PM_bdhhtp.jpg', title: 'Superhero Birthday Party Decorations Hyderabad', alt: 'Action-packed superhero themed birthday party setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460220/WhatsApp_Image_2025-09-16_at_4.57.23_PM_uenzex.jpg', title: 'Unicorn Theme Birthday Event Planner Hyderabad', alt: 'Whimsical unicorn themed birthday party decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460216/WhatsApp_Image_2025-09-16_at_4.57.23_PM_2_e40jmo.jpg', title: 'Cartoon Character Birthday Party Hyderabad', alt: 'Popular cartoon character themed birthday celebrations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460214/WhatsApp_Image_2025-09-16_at_4.57.23_PM_1_drjtbq.jpg', title: 'Outdoor Birthday Party Organizers Hyderabad', alt: 'Beautiful outdoor birthday party setup and management' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460211/WhatsApp_Image_2025-09-16_at_4.57.22_PM_pfw5go.jpg', title: 'Indoor Birthday Party Decorations Hyderabad', alt: 'Elegant indoor birthday party venue decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460209/WhatsApp_Image_2025-09-16_at_4.57.21_PM_cnsmur.jpg', title: 'Birthday Return Gifts Specialists Hyderabad', alt: 'Creative birthday return gifts and party favors' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460206/WhatsApp_Image_2025-09-16_at_4.57.21_PM_2_gj945c.jpg', title: 'Birthday Catering Services Hyderabad', alt: 'Delicious birthday party catering and food arrangements' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460203/WhatsApp_Image_2025-09-16_at_4.57.21_PM_1_yjymk8.jpg', title: 'Birthday DJ and Music Services Hyderabad', alt: 'Professional DJ and music entertainment for birthdays' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460202/WhatsApp_Image_2025-09-16_at_4.57.20_PM_pdlmxg.jpg', title: 'Birthday Magic Show Entertainment Hyderabad', alt: 'Amazing magic show entertainment for kids birthdays' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460199/WhatsApp_Image_2025-09-16_at_4.57.18_PM_xys9vx.jpg', title: 'Birthday Mascot Entertainment Hyderabad', alt: 'Fun mascot characters for birthday party entertainment' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460196/WhatsApp_Image_2025-09-16_at_4.57.18_PM_2_sgfo5u.jpg', title: 'Birthday Game Activities Hyderabad', alt: 'Exciting birthday party games and activities for kids' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460193/WhatsApp_Image_2025-09-16_at_4.57.18_PM_1_ou7tok.jpg', title: '60th Birthday Celebration Planners Hyderabad', alt: 'Elegant 60th milestone birthday celebration planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460191/WhatsApp_Image_2025-09-16_at_4.57.17_PM_cyh7rn.jpg', title: '50th Birthday Party Organizers Hyderabad', alt: 'Sophisticated 50th birthday party planning and execution' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460188/WhatsApp_Image_2025-09-16_at_4.57.17_PM_2_qh1gsz.jpg', title: '18th Birthday Party Planners Hyderabad', alt: 'Coming of age 18th birthday celebration planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460182/WhatsApp_Image_2025-09-16_at_4.57.16_PM_lczkrg.jpg', title: '21st Birthday Celebration Experts Hyderabad', alt: 'Special 21st birthday milestone celebration planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460181/WhatsApp_Image_2025-09-16_at_4.57.16_PM_1_qakl3w.jpg', title: 'Birthday Photoshoot Services Hyderabad', alt: 'Professional birthday photoshoot and photography services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460177/WhatsApp_Image_2025-09-16_at_4.57.15_PM_n1cavv.jpg', title: 'Birthday Videography Services Hyderabad', alt: 'Professional birthday party videography and filming' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460175/WhatsApp_Image_2025-09-16_at_4.57.14_PM_h17ch7.jpg', title: 'Birthday Backdrop Decorations Hyderabad', alt: 'Beautiful birthday party backdrop and photo booth setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460160/WhatsApp_Image_2025-09-16_at_4.57.10_PM_khefxu.jpg', title: 'Birthday Table Decorations Hyderabad', alt: 'Elegant birthday party table setup and decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460153/WhatsApp_Image_2025-09-16_at_4.57.09_PM_1_bruzev.jpg', title: 'Birthday Lighting Decorations Hyderabad', alt: 'Beautiful lighting arrangements for birthday celebrations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460151/WhatsApp_Image_2025-09-16_at_4.57.08_PM_yscqrt.jpg', title: 'Birthday Flower Decorations Hyderabad', alt: 'Fresh flower arrangements for birthday party decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460150/WhatsApp_Image_2025-09-16_at_4.57.08_PM_3_nby03n.jpg', title: 'Birthday Surprise Party Planners Hyderabad', alt: 'Expert surprise birthday party planning and coordination' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460146/WhatsApp_Image_2025-09-16_at_4.57.08_PM_2_b8ino1.jpg', title: 'Birthday Pool Party Organizers Hyderabad', alt: 'Fun pool party birthday celebrations and management' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460143/WhatsApp_Image_2025-09-16_at_4.57.08_PM_1_ole9we.jpg', title: 'Birthday Garden Party Planners Hyderabad', alt: 'Beautiful garden birthday party setup and decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460142/WhatsApp_Image_2025-09-16_at_4.57.07_PM_vlssu9.jpg', title: 'Birthday Hall Decorations Hyderabad', alt: 'Grand birthday party hall decorations and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460138/WhatsApp_Image_2025-09-16_at_4.57.07_PM_1_wppd9r.jpg', title: 'Birthday Home Party Decorations Hyderabad', alt: 'Cozy home birthday party decorations and planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460135/WhatsApp_Image_2025-09-16_at_4.57.06_PM_kpvoau.jpg', title: 'Birthday Cake Design Services Hyderabad', alt: 'Custom birthday cake design and decoration services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460133/WhatsApp_Image_2025-09-16_at_4.57.06_PM_3_ycvuts.jpg', title: 'Birthday Cupcake Arrangements Hyderabad', alt: 'Beautiful birthday cupcake displays and arrangements' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460130/WhatsApp_Image_2025-09-16_at_4.57.06_PM_2_a65sdv.jpg', title: 'Birthday Dessert Table Setup Hyderabad', alt: 'Elegant birthday dessert table decorations and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460128/WhatsApp_Image_2025-09-16_at_4.57.06_PM_1_fj5ix9.jpg', title: 'Birthday Party Favors Hyderabad', alt: 'Creative birthday party favors and gift arrangements' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460125/WhatsApp_Image_2025-09-16_at_4.57.05_PM_j49aiu.jpg', title: 'Birthday Invitation Design Hyderabad', alt: 'Custom birthday invitation card design services' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460123/WhatsApp_Image_2025-09-16_at_4.57.05_PM_2_eweotw.jpg', title: 'Birthday Costume Party Planners Hyderabad', alt: 'Fun costume themed birthday party planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460121/WhatsApp_Image_2025-09-16_at_4.57.05_PM_1_mgpbmr.jpg', title: 'Birthday Dance Party Organizers Hyderabad', alt: 'Energetic birthday dance party planning and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460120/WhatsApp_Image_2025-09-16_at_4.57.04_PM_crgbje.jpg', title: 'Birthday Karaoke Party Setup Hyderabad', alt: 'Fun karaoke birthday party entertainment setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460116/WhatsApp_Image_2025-09-16_at_4.57.04_PM_2_xts5bk.jpg', title: 'Birthday Movie Night Party Hyderabad', alt: 'Cozy birthday movie night party planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460115/WhatsApp_Image_2025-09-16_at_4.57.04_PM_1_y9ahbi.jpg', title: 'Birthday Craft Activity Parties Hyderabad', alt: 'Creative birthday craft activity party planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460113/WhatsApp_Image_2025-09-16_at_4.57.03_PM_mbzaru.jpg', title: 'Birthday Sports Party Organizers Hyderabad', alt: 'Active sports themed birthday party planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460256/WhatsApp_Image_2025-09-16_at_4.57.30_PM_kxz2y4.jpg', title: 'Birthday Picnic Party Planners Hyderabad', alt: 'Outdoor birthday picnic party planning and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460254/WhatsApp_Image_2025-09-16_at_4.57.29_PM_fvfpv2.jpg', title: 'Birthday Tea Party Organizers Hyderabad', alt: 'Elegant birthday tea party planning and decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460251/WhatsApp_Image_2025-09-16_at_4.57.29_PM_1_wl9lyb.jpg', title: 'Birthday Pajama Party Planners Hyderabad', alt: 'Fun sleepover birthday pajama party planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460248/WhatsApp_Image_2025-09-16_at_4.57.28_PM_x3ikga.jpg', title: 'Birthday Spa Party Organizers Hyderabad', alt: 'Relaxing birthday spa party planning for teens' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460246/WhatsApp_Image_2025-09-16_at_4.57.28_PM_2_ny6g1q.jpg', title: 'Birthday Gaming Party Setup Hyderabad', alt: 'Exciting gaming birthday party setup and planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460243/WhatsApp_Image_2025-09-16_at_4.57.28_PM_1_lbmuwt.jpg', title: 'Birthday Art Party Planners Hyderabad', alt: 'Creative art themed birthday party planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460241/WhatsApp_Image_2025-09-16_at_4.57.27_PM_p1aqrl.jpg', title: 'Birthday Science Party Organizers Hyderabad', alt: 'Educational science themed birthday party planning' }
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

  return (
    <div className="bg-white">
      {/* Hero Section - Full Width Responsive */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460143/WhatsApp_Image_2025-09-16_at_4.57.08_PM_1_ole9we.jpg"
            alt="Birthday celebration background - D Day Evento Hyderabad"
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
              Birthday Events with{' '}
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
              A birthday is not just another date on the calendar. It is the celebration of life, growth, and blessings.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
            >
              It's the one day in the year that belongs completely to you.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Explore Our Celebrations
              </button>
            </motion.div>
          </div>
        </div>


      </section>

      {/* Story Section */}
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
                Every Birthday{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Tells a Story
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                  Some birthdays are small, some are grand, but every birthday is special.
                </p>

                <p className="text-sm sm:text-base">
                  <strong>Some Birthdays stand apart.</strong> The 1st birthday marks the beginning of life's journey. The 60th birthday celebrates wisdom and legacy. Both deserve nothing less than a grand, unforgettable celebration.
                </p>

                <p className="text-sm sm:text-base">
                  But birthdays are not only about milestones. Every year is different. As a child, it's about cartoons, balloons, games, and cake smashes. As a teen, it's music, lights, and friends. As an adult, it's style, elegance, or even a private dinner with loved ones.
                </p>

                <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-brand-primary/10">
                  <p className="text-brand-primary font-semibold text-lg sm:text-xl text-center">
                    The way we celebrate changes with age, but the feeling stays the same.
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
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460256/WhatsApp_Image_2025-09-16_at_4.57.30_PM_kxz2y4.jpg"
                  alt="Birthday celebration story - D Day Evento Hyderabad"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-brand-primary">Every Story Matters</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Cake Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(120,119,198,0.05),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,119,198,0.05),_transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <motion.img
                  key={currentCakeImage}
                  src={cakeImages[currentCakeImage].url}
                  alt={cakeImages[currentCakeImage].alt}
                  className="w-full h-96 lg:h-[500px] object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-brand-primary">Sweet Moments</span>
              </div>

              {/* Carousel indicators */}
              <div className="absolute bottom-6 left-6 flex space-x-2">
                {cakeImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCakeImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentCakeImage
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/70'
                      }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
                The Heart of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                  Every Birthday
                </span>
              </h2>

              <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 rounded-3xl p-8 border border-brand-primary/10 mb-8">
                <p className="text-2xl md:text-3xl font-bold text-brand-primary mb-6">
                  And yes, what's the heart of every birthday? The Cake.
                </p>

                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Without cake, there is no birthday. The cake cutting moment is a wholesome celebration moment when happiness peaks, and memories are locked in forever.
                  </p>
                  <p className="text-center font-medium text-brand-secondary text-xl">
                    Cake is the sweetest highlight of the day.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* People & Moments */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-secondary/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
                It's All About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                  People & Moments
                </span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">
                <p className="text-xl md:text-2xl text-gray-600 font-light">
                  Birthdays bring together family, friends, colleagues, and well-wishers.
                </p>
                <p>
                  Sometimes it's 20 people at home, sometimes it's 200+ guests in a hall. But no matter the size, one thing is certain:
                </p>
              </div>

              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 rounded-3xl shadow-lg">
                <p className="text-2xl font-semibold text-center text-white">
                  Birthdays are about people and moments.
                </p>
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
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460254/WhatsApp_Image_2025-09-16_at_4.57.29_PM_fvfpv2.jpg"
                  alt="Birthday celebration with people and moments - D Day Evento Hyderabad"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-brand-primary">Together Forever</span>
              </div>
            </motion.div>
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
                <span className="text-xs sm:text-sm font-medium text-gray-700">Real Celebrations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Our Birthday{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Celebrations
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                Real celebrations, real joy, real memories from our events across Hyderabad
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
                          <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">Birthday Celebration</p>
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
                      View More Celebrations
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
                  You've seen all our amazing birthday celebrations!
                </div>

              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                {/* Apple-style badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 backdrop-blur-sm border border-brand-primary/20 rounded-full px-6 py-3 mb-8">
                  <span className="text-sm font-medium text-brand-primary">Our Expertise</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
                  This is where{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                    D DAY EVENTO
                  </span>{' '}
                  steps in
                </h2>
                <p className="text-2xl md:text-3xl text-brand-primary font-semibold mb-12">
                  We don't just plan birthdays, we create experiences
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200/30 hover:border-brand-primary/20 hover:-translate-y-2 p-8">
                  <div className="relative mb-6">
                    <img
                      src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460243/WhatsApp_Image_2025-09-16_at_4.57.28_PM_1_lbmuwt.jpg"
                      alt="Kids birthday party themes - D Day Evento"
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-brand-primary">For Kids</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">For Kids</h3>
                  <p className="text-gray-700">Customized themes, colorful decor setups, and entertainment with games, mascots, and music.</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200/30 hover:border-brand-primary/20 hover:-translate-y-2 p-8">
                  <div className="relative mb-6">
                    <img
                      src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460193/WhatsApp_Image_2025-09-16_at_4.57.18_PM_1_ou7tok.jpg"
                      alt="Milestone birthday celebrations - D Day Evento"
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-brand-primary">Milestones</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">For Milestone Birthdays</h3>
                  <p className="text-gray-700">Elegant and grand decor with family-style dining experiences.</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200/30 hover:border-brand-primary/20 hover:-translate-y-2 p-8">
                  <div className="relative mb-6">
                    <img
                      src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460206/WhatsApp_Image_2025-09-16_at_4.57.21_PM_2_gj945c.jpg"
                      alt="Birthday party catering - D Day Evento"
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-brand-primary">All Events</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">For Every Gathering</h3>
                  <p className="text-gray-700">Food matched to your crowd - from snack boxes to complete cuisines and fun stalls.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 rounded-3xl p-12 border border-brand-primary/10 mb-12">
                <p className="text-xl text-gray-800 leading-relaxed text-center">
                  Our team ensures smooth event flow from décor to cake, photography to entertainment, from guests walking in to the last goodbye. <strong>Nothing is missed. Nothing is left unplanned.</strong>
                </p>
              </div>

              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">
                  Because for us, birthdays are not just parties.
                </p>
                <p className="text-xl md:text-2xl font-bold text-gray-800">
                  They are memories, milestones, and moments of life, celebrated once, remembered forever.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
            <div className="text-center mb-16">
              {/* Apple-style badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-5 h-5 text-brand-primary" />
                <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
                Why Choose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                  D DAY EVENTO
                </span>{' '}
                for Birthdays?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200/30 hover:border-brand-primary/20 hover:-translate-y-2 p-8">
                <div className="relative mb-6">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460256/WhatsApp_Image_2025-09-16_at_4.57.30_PM_kxz2y4.jpg"
                    alt="Birthday specialists - D Day Evento"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-brand-primary">Specialists</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">Birthday Specialists</h3>
                <p className="text-gray-700">We specialize in birthdays, it's what we are most known for.</p>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200/30 hover:border-brand-secondary/20 hover:-translate-y-2 p-8">
                <div className="relative mb-6">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460220/WhatsApp_Image_2025-09-16_at_4.57.23_PM_uenzex.jpg"
                    alt="Customizable birthday events - D Day Evento"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-brand-secondary">Custom</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-secondary mb-3">Fully Customizable</h3>
                <p className="text-gray-700">We customize every event from small gatherings to milestone celebrations.</p>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200/30 hover:border-brand-primary/20 hover:-translate-y-2 p-8">
                <div className="relative mb-6">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460202/WhatsApp_Image_2025-09-16_at_4.57.20_PM_pdlmxg.jpg"
                    alt="Complete birthday services - D Day Evento"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-brand-primary">Complete</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">Complete Service</h3>
                <p className="text-gray-700">We handle everything: décor, food, entertainment, cake, photography, return gifts, music and fun activities.</p>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200/30 hover:border-brand-secondary/20 hover:-translate-y-2 p-8">
                <div className="relative mb-6">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460175/WhatsApp_Image_2025-09-16_at_4.57.14_PM_h17ch7.jpg"
                    alt="Extraordinary birthday experiences - D Day Evento"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-brand-secondary">Premium</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-secondary mb-3">Extraordinary Experiences</h3>
                <p className="text-gray-700">We make birthdays extraordinary, stress-free, memorable, and full of joy.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br  from-brand-primary to-brand-secondary text-white p-12 rounded-3xl text-center mb-12 shadow-2xl">
              <p className="text-xl md:text-2xl font-medium text-white">
                At D DAY EVENTO, every birthday, whether it's the first, the sixtieth, or anything in between, becomes a story worth telling for life.
              </p>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-base sm:text-lg w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
              >
                Plan Your Birthday With Us
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

export default BirthdayEvents;
