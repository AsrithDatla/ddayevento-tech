import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const Reception: React.FC = () => {
    const { pathname } = useLocation();
    const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially
    const [isLoading, setIsLoading] = useState(false);

    const IMAGES_PER_LOAD = 6; // Load 6 more images each time

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Reception and Bharath images - D Day Evento Hyderabad
    const galleryImages = [
        // Reception Images (12)
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458797/WhatsApp_Image_2025-09-17_at_3.27.44_PM_1_uwz3pu.jpg', title: 'Grand Wedding Reception Setup', alt: 'Elegant wedding reception setup by D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458795/WhatsApp_Image_2025-09-17_at_3.27.42_PM_cnjjr3.jpg', title: 'Reception Stage Design', alt: 'Beautiful reception stage decoration - Hyderabad wedding planners' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458795/WhatsApp_Image_2025-09-17_at_3.27.42_PM_2_bomszw.jpg', title: 'Luxury Reception Decor', alt: 'Luxury reception decoration by D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458795/WhatsApp_Image_2025-09-17_at_3.27.43_PM_1_kciah2.jpg', title: 'Reception Entertainment Setup', alt: 'Live entertainment at wedding reception - Hyderabad events' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458796/WhatsApp_Image_2025-09-17_at_3.27.43_PM_2_gkeddk.jpg', title: 'Grand Reception Hall', alt: 'Grand reception hall setup - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458799/WhatsApp_Image_2025-09-17_at_3.27.44_PM_2_ffmqgf.jpg', title: 'Reception Lighting Design', alt: 'Professional lighting at reception - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458802/WhatsApp_Image_2025-09-17_at_3.27.45_PM_glzic9.jpg', title: 'Reception Guest Area', alt: 'Elegant reception guest seating - Hyderabad wedding planning' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458801/WhatsApp_Image_2025-09-17_at_3.27.45_PM_2_qn9el1.jpg', title: 'Reception Dining Setup', alt: 'Elegant reception dining setup - Hyderabad wedding catering' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458800/WhatsApp_Image_2025-09-17_at_3.27.44_PM_uuqoqo.jpg', title: 'Reception Celebration', alt: 'Guests celebrating at reception - Hyderabad wedding events' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458794/WhatsApp_Image_2025-09-17_at_3.27.41_PM_ahopfq.jpg', title: 'Reception Photography', alt: 'Professional reception photography - Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458794/WhatsApp_Image_2025-09-17_at_3.27.41_PM_1_jyzw69.jpg', title: 'Reception Grand Moments', alt: 'Grand reception moments captured - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760458800/WhatsApp_Image_2025-09-17_at_3.27.45_PM_1_cxneyy.jpg', title: 'Reception Finale', alt: 'Perfect reception finale - D Day Evento Hyderabad' },
        
        // Bharath Images (5)
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459579/WhatsApp_Image_2025-09-17_at_3.27.16_PM_1_d7lwq0.jpg', title: 'Traditional Bharath Ceremony', alt: 'Traditional Bharath ceremony celebration - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459582/WhatsApp_Image_2025-09-17_at_3.27.16_PM_r6sisf.jpg', title: 'Bharath Ritual Setup', alt: 'Beautiful Bharath ritual setup - Hyderabad wedding traditions' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459577/WhatsApp_Image_2025-09-17_at_3.27.15_PM_2_kejkzv.jpg', title: 'Bharath Family Celebration', alt: 'Family celebrating Bharath ceremony - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459577/WhatsApp_Image_2025-09-17_at_3.27.15_PM_bh9pl9.jpg', title: 'Bharath Traditional Moments', alt: 'Traditional Bharath ceremony moments - Hyderabad wedding planning' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459576/WhatsApp_Image_2025-09-17_at_3.27.15_PM_1_hottu3.jpg', title: 'Bharath Ceremony Blessings', alt: 'Bharath ceremony blessings and rituals - D Day Evento' }
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
            {/* Hero Section - Grand & Glamorous */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760458797/WhatsApp_Image_2025-09-17_at_3.27.44_PM_1_uwz3pu.jpg"
                        alt="Grand Wedding Reception - D Day Evento Hyderabad"
                        className="w-full h-full object-cover object-center brightness-75 contrast-110"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 via-transparent to-brand-accent/40"></div>
                </div>

                {/* Glamorous Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-brand-accent/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-brand-primary/40 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-brand-secondary/30 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-brand-accent/35 to-transparent rounded-full blur-2xl animate-pulse delay-1500"></div>
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-brand-primary/25 to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
                </div>

                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-2xl leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}
                        >
                            <span className="block">The Grand Celebration</span>
                            <span className="text-gold drop-shadow-2xl" style={{}}>
                                of Togetherness
                            </span>
                        </motion.h1>
                        
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
                        >
                            The reception is the grand finale of the wedding journey – where the couple is introduced to society as husband and wife. It's a night of glamour, music, entertainment, and endless joy.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-brand-accent/40 w-full sm:w-auto max-w-xs sm:max-w-none">
                                Plan Your Grand Reception
                            </button>
                            <div className="text-white/90 text-sm font-light">
                                Creating unforgettable grand finales since 2015
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>     
       {/* The Meaning of Reception */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-brand-primary/5 to-brand-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight">
                                The True Meaning of{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Reception</span>
                            </h2>

                            <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                                <div className="grid grid-cols-1 gap-8">
                                    <motion.div 
                                        className="relative group"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <div className="bg-gradient-to-br from-brand-primary/15 via-brand-secondary/10 to-brand-accent/15 p-8 rounded-3xl border-l-6 border-brand-primary transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                                    <span className="text-white text-xl font-bold">1</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Formal Introduction</h3>
                                                    <p className="text-gray-700 leading-relaxed">A formal introduction of the newlyweds to society, marking their new status as a married couple.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className="relative group"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <div className="bg-gradient-to-br from-brand-secondary/15 via-brand-accent/10 to-brand-primary/15 p-8 rounded-3xl border-l-6 border-brand-secondary transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                                    <span className="text-black text-xl font-bold">2</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Blessings</h3>
                                                    <p className="text-gray-700 leading-relaxed">A chance for extended families, friends, and society to bless the couple and celebrate their union.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className="relative group"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                    >
                                        <div className="bg-gradient-to-br from-brand-accent/15 via-brand-primary/10 to-brand-secondary/15 p-8 rounded-3xl border-l-6 border-brand-accent transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                                    <span className="text-black text-xl font-bold">3</span>
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">New Beginnings</h3>
                                                    <p className="text-gray-700 leading-relaxed">A celebration of new beginnings, marking the start of the couple's journey together in society.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760458795/WhatsApp_Image_2025-09-17_at_3.27.42_PM_2_bomszw.jpg"
                                    alt="Grand wedding reception celebration"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-brand-accent/20"></div>
                            </div>
                            {/* Glamorous Decorative Elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-brand-accent/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-brand-primary/25 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Is Celebrated - Grand Timeline */}
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
                            The Grand{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebration</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Every moment orchestrated to perfection, creating an unforgettable evening of glamour and joy
                        </p>
                    </motion.div>

                    {/* Reception Timeline */}
                    <div className="relative">
                        {/* Central Timeline Line */}
                        <motion.div 
                            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent hidden lg:block z-10"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        ></motion.div>

                        {/* Timeline Dots */}
                        <motion.div 
                            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-primary rounded-full border-4 border-white shadow-lg hidden lg:block z-20"
                            style={{ top: '200px' }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        ></motion.div>
                        
                        <motion.div 
                            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-secondary rounded-full border-4 border-white shadow-lg hidden lg:block z-20"
                            style={{ top: '560px' }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        ></motion.div>
                        
                        <motion.div 
                            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brand-accent rounded-full border-4 border-white shadow-lg hidden lg:block z-20"
                            style={{ top: '920px' }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        ></motion.div>

                        <div className="space-y-16">
                            {/* Grand Entry */}
                            <motion.div
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="lg:text-right lg:pr-12">
                                    <div className="bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 rounded-3xl p-8 shadow-xl border border-brand-primary/20 hover:shadow-2xl transition-all duration-500">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Grand Entry</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Couple's spectacular entry with music and lights</p>
                                            </div>
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Spotlight moments and grand introductions</p>
                                            </div>
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Professional photography capturing every moment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760458795/WhatsApp_Image_2025-09-17_at_3.27.43_PM_1_kciah2.jpg"
                                        alt="Couple grand entry at reception"
                                        className="w-full h-80 object-cover rounded-3xl shadow-xl"
                                    />
                                </div>
                            </motion.div>

                            {/* Entertainment & Performances */}
                            <motion.div
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="lg:order-1">
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760458799/WhatsApp_Image_2025-09-17_at_3.27.44_PM_2_ffmqgf.jpg"
                                        alt="Reception entertainment and performances"
                                        className="w-full h-80 object-cover rounded-3xl shadow-xl"
                                    />
                                </div>
                                <div className="lg:pl-12 lg:order-2">
                                    <div className="bg-gradient-to-br from-brand-secondary/10 via-brand-accent/5 to-brand-primary/10 rounded-3xl p-8 shadow-xl border border-brand-secondary/20 hover:shadow-2xl transition-all duration-500">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Entertainment & Performances</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Speeches, dance, and cultural performances</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Live bands, DJs, and celebrity performances</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Interactive entertainment for all guests</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Lavish Dining */}
                            <motion.div
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="lg:text-right lg:pr-12">
                                    <div className="bg-gradient-to-br from-brand-accent/10 via-brand-primary/5 to-brand-secondary/10 rounded-3xl p-8 shadow-xl border border-brand-accent/20 hover:shadow-2xl transition-all duration-500">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lavish Dining Experience</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Elaborate buffet with multi-cuisine delicacies</p>
                                            </div>
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Live cooking stations and gourmet experiences</p>
                                            </div>
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Premium hospitality and service excellence</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760458801/WhatsApp_Image_2025-09-17_at_3.27.45_PM_2_qn9el1.jpg"
                                        alt="Lavish reception dining setup"
                                        className="w-full h-80 object-cover rounded-3xl shadow-xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>       
     {/* Ideas to Make It Special - Luxury Showcase */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-brand-primary/5 to-brand-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                            Ideas to Make It{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Extraordinary</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Transform your reception into a spectacular celebration that leaves lasting impressions
                        </p>
                    </motion.div>

                    {/* Luxury Ideas Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        {/* Luxury Décor */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-brand-primary/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Luxury Décor</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Grand luxury stage designs",
                                    "LED screens and digital displays",
                                    "Elegant floral arches",
                                    "Crystal chandeliers and lighting"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Grand Entries */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-brand-secondary/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Grand Entries</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Spectacular fireworks displays",
                                    "Dramatic spotlight entrances",
                                    "Cold pyro and special effects",
                                    "Choreographed dance entries"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Premium Entertainment */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-brand-accent/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Premium Entertainment</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Live bands and orchestras",
                                    "Professional DJs and sound",
                                    "Celebrity performances",
                                    "Interactive entertainment zones"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Gourmet Dining */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Gourmet Dining</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Multi-cuisine elaborate buffets",
                                    "Live cooking demonstrations",
                                    "Premium bar and beverages",
                                    "Customized menu experiences"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
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
                            Our Reception{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Gallery</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Experience the grandeur and elegance of reception celebrations we've orchestrated
                        </p>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {galleryImages.slice(0, visibleImages).map((image, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => openLightbox(index)}
                            >
                                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                                    {!imageLoadErrors.has(index) ? (
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                            onError={() => handleImageError(index)}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                            <Camera className="w-12 h-12 text-gray-400" />
                                        </div>
                                    )}
                                </div>
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View More Button */}
                    {hasMoreImages && (
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <button
                                onClick={handleViewMore}
                                disabled={isLoading}
                                className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-secondary text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Loading...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>View More Grand Moments</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Navigation Buttons */}
                        {selectedImage > 0 && (
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        )}

                        {selectedImage < galleryImages.length - 1 && (
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        )}

                        {/* Image */}
                        <img
                            src={galleryImages[selectedImage].url}
                            alt={galleryImages[selectedImage].alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />

                        {/* Image Info */}
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                            <h3 className="text-white text-xl font-semibold mb-2">
                                {galleryImages[selectedImage].title}
                            </h3>
                            <p className="text-white/80 text-sm">
                                {selectedImage + 1} of {galleryImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}       
     {/* How D DAY EVENTO Helps - Premium Services */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-brand-primary/5 to-brand-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                            How{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">D DAY EVENTO</span>
                            {' '}Delivers Excellence
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We orchestrate every detail to create the perfect grand finale for your wedding journey
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Stage Design & Grand Décor",
                                description: "Complete stage design and grand décor setup with luxury elements, lighting, and visual displays that create the perfect backdrop for your celebration"
                            },
                            {
                                title: "Couple Entry Planning & Execution",
                                description: "Meticulously planned couple entry with special effects, music coordination, and dramatic moments that make your entrance unforgettable"
                            },
                            {
                                title: "Music, Entertainment & Light Management",
                                description: "Professional sound systems, lighting design, entertainment coordination, and technical management for seamless performances"
                            },
                            {
                                title: "Guest Hospitality & Premium Catering",
                                description: "Complete guest experience management with premium catering services, hospitality coordination, and dining excellence"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-3xl p-8 shadow-xl border border-brand-primary/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                        <span className="text-2xl font-bold">{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Get - Grand Results */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight">
                                What You{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Experience</span>
                            </h2>

                            <div className="space-y-8">
                                {[
                                    {
                                        title: "A Stunning, Flawless Reception",
                                        description: "Every detail perfectly executed, creating a grand celebration that exceeds expectations and leaves lasting impressions on all guests"
                                    },
                                    {
                                        title: "Guests Delighted and Entertained",
                                        description: "Your guests experience world-class hospitality, entertainment, and dining that keeps them engaged and creates wonderful memories"
                                    },
                                    {
                                        title: "Perfect Finale to Your Wedding",
                                        description: "A spectacular conclusion to your wedding journey that celebrates your new beginning with elegance, joy, and unforgettable moments"
                                    }
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                    >
                                        <div className="flex items-start space-x-6 p-8 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/10 rounded-3xl shadow-lg border border-brand-primary/20 hover:shadow-xl transition-all duration-500">
                                            <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg">
                                                ✓
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed text-lg">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="mt-12 p-8 bg-gradient-to-br from-brand-primary/15 via-brand-secondary/10 to-brand-accent/15 rounded-3xl border-l-6 border-brand-primary shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <div>
                                    <p className="text-xl text-brand-primary font-bold italic leading-relaxed">
                                        "At D DAY EVENTO, we turn your reception into a grand memory – full of music, magic, and joy."
                                    </p>
                                    <p className="text-gray-600 mt-2 font-medium">
                                        — Our Commitment to Your Grand Finale
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760458794/WhatsApp_Image_2025-09-17_at_3.27.41_PM_1_jyzw69.jpg"
                                    alt="D Day Evento reception results - happy celebration"
                                    className="w-full h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-brand-accent/20"></div>
                            </div>
                            {/* Glamorous Decorative Elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-brand-accent/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-brand-primary/25 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action - Grand & Celebratory */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-primary via-brand-primary-dark to-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
                            Ready to Create Your{' '}
                            <span className="text-brand-accent">Grand Finale?</span>
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Let us orchestrate a reception celebration that becomes the perfect grand finale to your wedding journey, filled with glamour, joy, and unforgettable memories.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                to="/contact"
                                className="bg-brand-accent hover:bg-brand-accent-dark text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-3 shadow-2xl"
                            >
                                <span>Plan Your Grand Reception</span>
                                <ArrowRight className="w-6 h-6" />
                            </Link>
                            <Link
                                to="/gallery"
                                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-10 py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-3"
                            >
                                <span>View Reception Gallery</span>
                                <Sparkles className="w-6 h-6" />
                            </Link>
                        </div>
                        <div className="mt-8 text-white/80 text-sm">
                            Join 1000+ couples who celebrated their grand finale with us
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Reception;