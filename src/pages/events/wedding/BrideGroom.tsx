import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const BrideGroom: React.FC = () => {
  const { pathname } = useLocation();
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially
  const [isLoading, setIsLoading] = useState(false);

  const IMAGES_PER_LOAD = 6; // Load 6 more images each time

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Gallery images - Bride images (11) and Groom images (6)
  const brideImages = [
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459356/WhatsApp_Image_2025-09-17_at_3.25.03_PM_wkj4rb.jpg', title: 'Traditional Bridal Ceremony - D Day Evento', alt: 'Beautiful traditional bridal ceremony setup by D Day Evento Hyderabad' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459355/WhatsApp_Image_2025-09-17_at_3.25.02_PM_f0dcsr.jpg', title: 'Bridal Haldi Ceremony', alt: 'Sacred bridal haldi ceremony moments' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459354/WhatsApp_Image_2025-09-17_at_3.25.02_PM_2_vhyqkq.jpg', title: 'Bridal Mehendi Planning', alt: 'Professional bridal mehendi ceremony planning' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459352/WhatsApp_Image_2025-09-17_at_3.25.02_PM_1_bxddug.jpg', title: 'Bridal Decoration Flowers', alt: 'Elegant bridal decoration with fresh flowers' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459350/WhatsApp_Image_2025-09-17_at_3.25.01_PM_tn6ugd.jpg', title: 'Bridal Venue Setup', alt: 'Beautiful bridal venue decoration and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459349/WhatsApp_Image_2025-09-17_at_3.25.01_PM_2_saxhkd.jpg', title: 'Bridal Mandap Traditional Setup', alt: 'Traditional bridal mandap setup with decorations' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459347/WhatsApp_Image_2025-09-17_at_3.25.01_PM_1_m3fndf.jpg', title: 'Bridal Photography Services', alt: 'Professional bridal photography capturing moments' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459346/WhatsApp_Image_2025-09-17_at_3.25.00_PM_pcowri.jpg', title: 'Bridal Catering Services', alt: 'Delicious bridal catering and food arrangements' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459345/WhatsApp_Image_2025-09-17_at_3.25.00_PM_2_sq7hxx.jpg', title: 'Bridal Music Entertainment', alt: 'Traditional bridal music and entertainment' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459344/WhatsApp_Image_2025-09-17_at_3.25.00_PM_1_opsmih.jpg', title: 'Bridal Family Celebrations', alt: 'Joyful bridal celebrations with family' }
  ];

  const groomImages = [
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459531/WhatsApp_Image_2025-09-17_at_3.24.37_PM_1_esgcvw.jpg', title: 'Traditional Groom Ceremony - D Day Evento', alt: 'Beautiful traditional groom ceremony setup by D Day Evento Hyderabad' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459530/WhatsApp_Image_2025-09-17_at_3.24.39_PM_sx30fd.jpg', title: 'Groom Haldi Ceremony', alt: 'Sacred groom haldi ceremony moments' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459528/WhatsApp_Image_2025-09-17_at_3.24.39_PM_2_aqqh9w.jpg', title: 'Groom Sehra Bandi', alt: 'Traditional groom sehra bandi ceremony' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459527/WhatsApp_Image_2025-09-17_at_3.24.39_PM_1_fstofl.jpg', title: 'Groom Decoration Setup', alt: 'Elegant groom decoration and setup' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459525/WhatsApp_Image_2025-09-17_at_3.24.38_PM_swuw6i.jpg', title: 'Groom Photography Services', alt: 'Professional groom photography capturing moments' },
    { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459524/WhatsApp_Image_2025-09-17_at_3.24.38_PM_1_ztirdh.jpg', title: 'Groom Family Celebrations', alt: 'Joyful groom celebrations with family' }
  ];

  const allImages = [...brideImages, ...groomImages];

  const handleImageError = (index: number) => {
    setImageLoadErrors(prev => new Set([...prev, index]));
  };

  const handleViewMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleImages(prev => Math.min(prev + IMAGES_PER_LOAD, allImages.length));
      setIsLoading(false);
    }, 500);
  };

  const hasMoreImages = visibleImages < allImages.length;

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage(prev => prev === null ? null : Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedImage(prev => prev === null ? null : Math.min(allImages.length - 1, prev + 1));
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
  }, [selectedImage, allImages.length]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage(prev => prev === null ? null : Math.min(allImages.length - 1, prev + 1));
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
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459356/WhatsApp_Image_2025-09-17_at_3.25.03_PM_wkj4rb.jpg"
            alt="Bride and Groom ceremonies planning Hyderabad - D Day Evento"
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
              Honoring Traditions,{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                Blessing the Couple
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Before the wedding day arrives, both the bride and groom undergo sacred rituals in their homes. These ceremonies are filled with tradition, spirituality, and blessings.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
            >
              They prepare the couple for the journey of marriage – purifying their hearts, minds, and souls.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Plan Your Sacred Ceremonies
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Meaning of Traditional Ceremonies */}
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
                The Meaning of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Traditional Ceremonies</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  These rituals mark the spiritual readiness of the bride and groom for their sacred union.
                </p>

                <p>
                  They seek blessings from deities, ancestors, and elders for a prosperous married life.
                </p>

                <p>
                  They connect the marriage to family roots and cultural heritage, preserving traditions for future generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459355/WhatsApp_Image_2025-09-17_at_3.25.02_PM_f0dcsr.jpg"
                alt="Traditional bride and groom ceremonies"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* How These Ceremonies Are Celebrated */}
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
              How These Ceremonies Are{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebrated</span>
            </h2>
          </motion.div>

          {/* Bride's and Groom's Rituals - Enhanced with Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Bride's Home Rituals */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-3xl p-8 shadow-xl border border-brand-accent/20 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-accent/20 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-primary/20 to-transparent rounded-tr-full"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Bride's Home Rituals</h3>
                  </div>

                  <div className="mb-6">
                    <img
                      src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459355/WhatsApp_Image_2025-09-17_at_3.25.02_PM_f0dcsr.jpg"
                      alt="Bride's ceremony rituals"
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    {[
                      { title: "Puja ceremonies", desc: "with family deities" },
                      { title: "Applying turmeric (Haldi)", desc: "for purification" },
                      { title: "Gifting sarees and jewelry", desc: "from elders" },
                      { title: "Blessings from family", desc: "elders and relatives" }
                    ].map((ritual, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-brand-accent text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{ritual.title}</h4>
                          <p className="text-gray-600 text-sm">{ritual.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Groom's Home Rituals */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-3xl p-8 shadow-xl border border-brand-primary/20 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-primary/30 to-transparent rounded-tl-full"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Groom's Home Rituals</h3>
                  </div>

                  <div className="mb-6">
                    <img
                      src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459531/WhatsApp_Image_2025-09-17_at_3.24.37_PM_1_esgcvw.jpg"
                      alt="Groom's ceremony rituals"
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    {[
                      { title: "Similar customs", desc: "with dhoti and kurta ceremonies" },
                      { title: "Rituals conducted", desc: "with family priests" },
                      { title: "Traditional blessings", desc: "and sacred marks" },
                      { title: "Family celebrations", desc: "and music" }
                    ].map((ritual, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{ritual.title}</h4>
                          <p className="text-gray-600 text-sm">{ritual.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cultural Variations - Enhanced */}
          <motion.div
            className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-3xl p-8 shadow-xl border-2 border-brand-primary/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(139,69,19,0.3)_2px,_transparent_2px),_radial-gradient(circle_at_75%_75%,_rgba(255,140,0,0.3)_2px,_transparent_2px)]" style={{ backgroundSize: '60px 60px' }}></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 rounded-full px-6 py-3 mb-6">
                  <span className="text-sm font-medium text-brand-primary">Regional Traditions</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Cultural Variations Across India</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">Each region brings its own beautiful traditions to these sacred ceremonies</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    region: "South India",
                    color: "from-brand-accent to-brand-accent-dark",
                    bgColor: "from-brand-accent/10 to-brand-accent/5",
                    borderColor: "border-brand-accent/30",
                    traditions: [
                      "Mangala Snanam (holy bath)",
                      "Kashi Yatra ceremony",
                      "Ganesha Puja for blessings"
                    ]
                  },
                  {
                    region: "North India",
                    color: "from-brand-primary to-brand-primary-dark",
                    bgColor: "from-brand-primary/10 to-brand-primary/5",
                    borderColor: "border-brand-primary/30",
                    traditions: [
                      "Chooda Ceremony for bride",
                      "Sehra Bandi for groom",
                      "Tilak ceremonies"
                    ]
                  },
                  {
                    region: "Western Influence",
                    color: "from-gray-700 to-gray-900",
                    bgColor: "from-gray-50 to-gray-100",
                    borderColor: "border-gray-300",
                    traditions: [
                      "Pre-wedding family brunches",
                      "Exchange of personalized gifts",
                      "Modern photography sessions"
                    ]
                  }
                ].map((variation, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${variation.bgColor} rounded-2xl p-6 border-2 ${variation.borderColor} hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                      <div className={`w-full h-full bg-gradient-to-bl ${variation.color} rounded-bl-full`}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${variation.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <span className="text-white text-2xl font-bold">{index + 1}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{variation.region}</h4>
                      </div>

                      <div className="space-y-3">
                        {variation.traditions.map((tradition, tIndex) => (
                          <motion.div
                            key={tIndex}
                            className="flex items-start space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: tIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 text-sm leading-relaxed">{tradition}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ideas to Make These Ceremonies Special */}
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
              Ideas to Make These{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Ceremonies Special</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your sacred ceremonies into unforgettable experiences with these thoughtful touches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Décor Themes */}
            <motion.div
              className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 rounded-2xl p-6 sm:p-8 border border-brand-accent/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Décor Themes</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Traditional rangoli & banana leaf décor",
                  "Temple-style mandap in homes",
                  "Floral arches and puja backdrops"
                ].map((theme, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{theme}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Music */}
            <motion.div
              className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl p-6 sm:p-8 border border-brand-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Music</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Shehnai for traditional ambiance",
                  "Nadaswaram for South Indian ceremonies",
                  "Soft instrumental background music"
                ].map((music, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{music}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Activities */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Activities</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Blessing rituals with elders",
                  "Family storytelling sessions",
                  "Traditional photo sessions"
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{activity}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Food */}
            <motion.div
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Food</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Authentic regional cuisine",
                  "Served on banana leaves or thalis",
                  "Traditional sweets and prasadam"
                ].map((food, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{food}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bride & Groom Ceremony Gallery */}
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
                <span className="text-xs sm:text-sm font-medium text-gray-700">Sacred Ceremonies</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                Our Bride & Groom{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                  Ceremony Portfolio
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                Authentic moments from real bride and groom ceremonies we've planned across Hyderabad
              </p>
            </motion.div>

            {/* Gallery Grid - Show 6 initially */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {allImages.slice(0, visibleImages).map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
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
                          <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">Sacred Ceremony</p>
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
                      View More Sacred Moments
                      <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      {/* How D DAY EVENTO Helps */}
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
              How{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">D DAY EVENTO</span>{' '}
              Helps
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Ritual Setup",
                description: "Arranging complete ritual setup including mandap, havan kund, and all necessary samagri for authentic ceremonies."
              },
              {
                title: "Themed Traditional Décor",
                description: "Beautiful themed traditional décor at home or event venues that reflects your cultural heritage."
              },
              {
                title: "Priests & Performers",
                description: "Experienced priests, musicians, and cultural performers to conduct ceremonies with authenticity."
              },
              {
                title: "Guest Management",
                description: "Complete guest seating, serving, and catering arrangements for a comfortable experience."
              },
              {
                title: "Photography & Videography",
                description: "Professional photography and videography to capture these precious heritage moments forever."
              },
              {
                title: "Complete Coordination",
                description: "End-to-end planning and execution ensuring every ritual is conducted with devotion and accuracy."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get With Us */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
            {[
              {
                title: "Rituals conducted with accuracy and devotion",
                description: "Every ceremony performed with traditional authenticity"
              },
              {
                title: "Families stress-free while we manage the flow",
                description: "Complete coordination allowing focus on blessings"
              },
              {
                title: "A traditional yet comfortable experience for all guests",
                description: "Authentic ceremonies designed for everyone's comfort"
              },
              {
                title: "Heritage moments preserved forever",
                description: "Professional documentation of precious traditions"
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

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-orange-200/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">"</span>
              </div>

              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed mb-6">
                "At D DAY EVENTO, we blend authenticity with organization, ensuring that every ritual reflects the beauty of your culture and the blessings of your family."
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
                {selectedImage + 1} of {allImages.length}
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
          {selectedImage < allImages.length - 1 && (
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
              src={allImages[selectedImage].url}
              alt={allImages[selectedImage].alt}
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
              {selectedImage < allImages.length - 1 && (
                <div
                  className="w-1/2 h-full flex items-center justify-end pr-4 ml-auto"
                  onClick={nextImage}
                >
                  <ChevronRight size={24} className="text-white/70" />
                </div>
              )}
            </div>
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
              Ready to Honor Your Traditions?
            </h2>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed">
              Let's create beautiful and authentic bride and groom ceremonies that honor your heritage and bless your union.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Plan Your Sacred Ceremonies
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

export default BrideGroom;