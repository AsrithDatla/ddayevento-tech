import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, Camera, X, ChevronLeft, ChevronRight, Heart, Users, Calendar, Star } from 'lucide-react';

const EngagementCeremony: React.FC = () => {
    const { pathname } = useLocation();
    const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Gallery images (11 engagement photos)
    const galleryImages = [
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459628/WhatsApp_Image_2025-09-17_at_3.23.53_PM_dgnkzk.jpg', title: 'Traditional Engagement Ceremony Hyderabad - D Day Evento', alt: 'Beautiful traditional engagement ceremony setup by D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459626/WhatsApp_Image_2025-09-17_at_3.23.53_PM_2_j6rlkm.jpg', title: 'Engagement Ring Exchange Ceremony', alt: 'Sacred engagement ring exchange ceremony moments' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459623/WhatsApp_Image_2025-09-17_at_3.23.53_PM_1_ldhllc.jpg', title: 'Engagement Ceremony Planning Hyderabad', alt: 'Professional engagement ceremony planning and coordination' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459622/WhatsApp_Image_2025-09-17_at_3.23.52_PM_d0gd2o.jpg', title: 'Engagement Decoration Flowers', alt: 'Elegant engagement decoration with fresh flowers' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459620/WhatsApp_Image_2025-09-17_at_3.23.52_PM_2_uppm7o.jpg', title: 'Engagement Venue Decoration', alt: 'Beautiful engagement venue decoration and setup' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459618/WhatsApp_Image_2025-09-17_at_3.23.52_PM_1_nttm2b.jpg', title: 'Engagement Mandap Traditional Setup', alt: 'Traditional engagement mandap setup with decorations' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459616/WhatsApp_Image_2025-09-17_at_3.23.51_PM_kelenh.jpg', title: 'Engagement Photography Services', alt: 'Professional engagement photography capturing moments' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459614/WhatsApp_Image_2025-09-17_at_3.23.51_PM_2_q17pm2.jpg', title: 'Engagement Catering Services', alt: 'Delicious engagement catering and food arrangements' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459612/WhatsApp_Image_2025-09-17_at_3.23.51_PM_1_ssyhba.jpg', title: 'Engagement Music Entertainment', alt: 'Traditional engagement music and entertainment' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459612/WhatsApp_Image_2025-09-17_at_3.23.50_PM_klqneu.jpg', title: 'Engagement Guest Coordination', alt: 'Professional engagement guest coordination services' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459610/WhatsApp_Image_2025-09-17_at_3.23.50_PM_1_ivtawv.jpg', title: 'Engagement Family Celebrations', alt: 'Joyful engagement celebrations with family' }
    ];

    const handleImageError = (index: number) => {
        setImageLoadErrors(prev => new Set([...prev, index]));
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
            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459628/WhatsApp_Image_2025-09-17_at_3.23.53_PM_dgnkzk.jpg"
                        alt="Engagement ceremony planning Hyderabad - D Day Evento"
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
                            The Promise of{' '}
                            <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                                Forever Begins Here
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
                        >
                            The engagement ceremony is the official announcement of your love story – where two families come together to bless and celebrate the beginning of a beautiful journey.
                        </motion.p>
                        <motion.p
                            className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
                        >
                            It is more than an exchange of rings; it's the first step into marriage, filled with emotions, joy, and togetherness.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                                Plan Your Engagement With Us
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Meaning of Engagement */}
            <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(139,69,19,0.3)_2px,_transparent_2px),_radial-gradient(circle_at_75%_75%,_rgba(255,140,0,0.3)_2px,_transparent_2px)]" style={{ backgroundSize: '60px 60px' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full px-4 py-2 mb-6">
                                    <Heart className="w-4 h-4 text-brand-primary" />
                                    <span className="text-sm font-medium text-brand-primary">Sacred Beginning</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight mb-6">
                                    The Sacred Meaning of{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Engagement</span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    An engagement is more than a ceremony—it's the sacred moment when two souls publicly declare their intention to become one.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <Users className="w-6 h-6 text-brand-primary" />,
                                        title: "A Promise Witnessed",
                                        description: "A formal commitment to marry, blessed and witnessed by family and friends who will support your journey."
                                    },
                                    {
                                        icon: <Heart className="w-6 h-6 text-brand-primary" />,
                                        title: "Families Unite",
                                        description: "The beautiful moment when two families come together, creating bonds that will last generations."
                                    },
                                    {
                                        icon: <Star className="w-6 h-6 text-brand-primary" />,
                                        title: "New Beginnings",
                                        description: "A celebration of love that honors tradition while embracing the unique story of your relationship."
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative">
                                <img
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459618/WhatsApp_Image_2025-09-17_at_3.23.52_PM_1_nttm2b.jpg"
                                    alt="Traditional engagement ceremony"
                                    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>

                                {/* Floating Elements */}
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                    <span className="text-sm font-semibold text-brand-primary">Sacred Moments</span>
                                </div>

                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                                    <p className="text-sm font-medium text-gray-800">Where Forever Begins</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How Engagements Are Celebrated */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-primary/20 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-secondary/20 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8">
                            <Calendar className="w-5 h-5 text-brand-primary" />
                            <span className="text-sm font-medium text-gray-700">Celebration Styles</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight mb-6">
                            How Engagements Are{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebrated</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Every engagement reflects the unique personality and cultural heritage of the couple. We help you choose the perfect style that resonates with your love story.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Traditional Engagement",
                                description: "Sacred rituals conducted by experienced priests, with ring exchange ceremonies, traditional gift exchanges, and authentic cultural elements that honor your heritage.",
                                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760459622/WhatsApp_Image_2025-09-17_at_3.23.52_PM_d0gd2o.jpg",
                                features: ["Sacred Rituals", "Ring Exchange", "Traditional Gifts", "Cultural Authenticity"]
                            },
                            {
                                title: "Modern Ring Ceremony",
                                description: "Contemporary celebrations featuring elegant décor, professional photography, live music, and stylish presentations that blend tradition with modern sophistication.",
                                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760459614/WhatsApp_Image_2025-09-17_at_3.23.51_PM_2_q17pm2.jpg",
                                features: ["Elegant Décor", "Professional Photography", "Live Music", "Modern Style"]
                            },
                            {
                                title: "Destination Engagement",
                                description: "Unique venues like heritage palaces, beach resorts, or garden settings with customized themes that create an unforgettable backdrop for your special moment.",
                                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760459620/WhatsApp_Image_2025-09-17_at_3.23.52_PM_2_uppm7o.jpg",
                                features: ["Unique Venues", "Custom Themes", "Scenic Backdrops", "Memorable Settings"]
                            }
                        ].map((type, index) => (
                            <motion.div
                                key={index}
                                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={type.image}
                                        alt={type.title}
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                                        <span className="text-xs font-semibold text-brand-primary">Popular Choice</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {type.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {type.description}
                                    </p>
                                    <div className="space-y-2">
                                        {type.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ideas to Make Your Engagement Special */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center mb-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight">
                                Ideas to Make Your{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Engagement Special</span>
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Decor Themes */}
                        <motion.div
                            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Decor Themes</h3>
                            <div className="space-y-4">
                                {[
                                    "Pastel floral setup",
                                    "Royal stage with chandeliers",
                                    "Garden/lawn fairy-light décor",
                                    "Contemporary LED or digital backdrops"
                                ].map((theme, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">{theme}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Entertainment */}
                        <motion.div
                            className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Entertainment</h3>
                            <div className="space-y-4">
                                {[
                                    "Live band or acoustic singers",
                                    "Couple dance or family performances",
                                    "Anchor/Emcee hosting with games",
                                    "Audio-visual journey (couple's love story video)"
                                ].map((entertainment, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">{entertainment}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Food & Beverages */}
                        <motion.div
                            className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 sm:p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Food & Beverages</h3>
                            <div className="space-y-4">
                                {[
                                    "Multi-cuisine buffet (Indian, Continental, Pan Asian)",
                                    "Live counters (chaat, mocktails, grills)",
                                    "Customized engagement cake"
                                ].map((food, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">{food}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Engagement Gallery Section */}
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
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Real Engagements</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                                Our Engagement{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                                    Portfolio
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                                Beautiful moments from real engagement ceremonies we've planned and executed across Hyderabad
                            </p>
                        </motion.div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
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
                                                    <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">Engagement Celebration</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
                        <div className="flex items-center justify-center mb-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight">
                                How{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">D DAY EVENTO</span>{' '}
                                Helps
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Stage Design & Décor</h3>
                                <p className="text-gray-600">From floral backdrops to luxury setups.</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Vendor Management</h3>
                                <p className="text-gray-600">Catering, music, lighting, photography.</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Guest Experience</h3>
                                <p className="text-gray-600">Seating, serving, welcoming, and hospitality.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Additions</h3>
                                <p className="text-gray-600">Couple entry ideas (fireworks, spotlight, fog effect), ring platter design, personalized décor with initials.</p>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-brand-primary">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Coordination</h3>
                                <p className="text-gray-600">End-to-end planning and execution ensuring your engagement ceremony is flawless and memorable.</p>
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
                                title: "Perfectly Managed Engagement",
                                description: "Stress-free planning and execution"
                            },
                            {
                                title: "Happy Guests",
                                description: "Enjoying the event, not waiting or struggling"
                            },
                            {
                                title: "Memory-Filled Start",
                                description: "Beautiful beginning to your wedding journey"
                            },
                            {
                                title: "Complete Peace of Mind",
                                description: "Focus on your special moments while we handle everything"
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

                            <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed mb-6">
                                "At D DAY EVENTO, your engagement is not just a ceremony. It's the beginning of a story we design with beauty, detail, and joy."
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
                            Ready to Plan Your Perfect Engagement?
                        </h2>
                        <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed">
                            Let's create the beautiful beginning to your forever story with an unforgettable engagement ceremony.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                                Start Planning Your Engagement
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

export default EngagementCeremony;