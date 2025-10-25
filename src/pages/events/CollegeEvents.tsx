import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const CollegeEvents: React.FC = () => {
    const { pathname } = useLocation();
    const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [visibleImages, setVisibleImages] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    const IMAGES_PER_LOAD = 6;

    // College Events Gallery - 16 images
    const collegeEventsGallery = [
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460567/WhatsApp_Image_2025-08-27_at_12.23.23_AM_woknvv.jpg', title: 'College Annual Day Celebration Hyderabad', alt: 'Grand college annual day celebration - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460542/WhatsApp_Image_2025-08-27_at_12.23.18_AM_1_xekwje.jpg', title: 'Cultural Fest Event Management Hyderabad', alt: 'Vibrant cultural fest with student performances - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460562/WhatsApp_Image_2025-08-27_at_12.23.21_AM_wmy1jz.jpg', title: 'College DJ Night Party Hyderabad', alt: 'High-energy DJ night for college students - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460559/WhatsApp_Image_2025-08-27_at_12.23.21_AM_2_dyeazy.jpg', title: 'Farewell Party Planning Hyderabad', alt: 'Memorable farewell party for graduating students - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460556/WhatsApp_Image_2025-08-27_at_12.23.21_AM_1_ibh1s3.jpg', title: 'Freshers Party Event Coordination Hyderabad', alt: 'Welcome freshers party with exciting activities - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460553/WhatsApp_Image_2025-08-27_at_12.23.20_AM_q4zwjy.jpg', title: 'College Sports Day Event Management Hyderabad', alt: 'Energetic college sports day celebration - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460551/WhatsApp_Image_2025-08-27_at_12.23.20_AM_1_u0eun3.jpg', title: 'Convocation Ceremony Planning Hyderabad', alt: 'Dignified convocation ceremony organization - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460564/WhatsApp_Image_2025-08-27_at_12.23.23_AM_1_errtgj.jpg', title: 'College Stage Setup Services Hyderabad', alt: 'Professional stage setup for college events - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460548/WhatsApp_Image_2025-08-27_at_12.23.19_AM_qvy2kc.jpg', title: 'College Event Decoration Hyderabad', alt: 'Creative college event decorations and themes - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460545/WhatsApp_Image_2025-08-27_at_12.23.19_AM_1_fao5dj.jpg', title: 'College Photography Services Hyderabad', alt: 'Professional college event photography - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460542/WhatsApp_Image_2025-08-27_at_12.23.18_AM_errxii.jpg', title: 'College Catering Services Hyderabad', alt: 'Student-friendly catering for college events - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460537/WhatsApp_Image_2025-08-27_at_12.23.17_AM_mrhanc.jpg', title: 'College Entertainment Services Hyderabad', alt: 'High-energy entertainment for college celebrations - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460535/WhatsApp_Image_2025-08-27_at_12.23.17_AM_1_x2sosd.jpg', title: 'College Sound System Setup Hyderabad', alt: 'Professional sound systems for college events - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460532/WhatsApp_Image_2025-08-27_at_12.23.16_AM_poitl8.jpg', title: 'College Live Music Events Hyderabad', alt: 'Live music and band performances for colleges - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460530/WhatsApp_Image_2025-08-27_at_12.23.16_AM_2_mdqedj.jpg', title: 'College Interactive Activities Hyderabad', alt: 'Fun interactive activities for college students - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760460529/WhatsApp_Image_2025-08-27_at_12.23.16_AM_1_d17fro.jpg', title: 'College Event Management Hyderabad', alt: 'Complete college event management services - D Day Evento Hyderabad' }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);    
const handleImageError = (index: number) => {
        setImageLoadErrors(prev => new Set([...prev, index]));
    };

    const handleViewMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleImages(prev => Math.min(prev + IMAGES_PER_LOAD, collegeEventsGallery.length));
            setIsLoading(false);
        }, 500);
    };

    const hasMoreImages = visibleImages < collegeEventsGallery.length;

    // Handle keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            if (e.key === 'Escape') {
                setSelectedImage(null);
            } else if (e.key === 'ArrowLeft') {
                setSelectedImage(prev => prev === null ? null : Math.max(0, prev - 1));
            } else if (e.key === 'ArrowRight') {
                setSelectedImage(prev => prev === null ? null : Math.min(collegeEventsGallery.length - 1, prev + 1));
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
    }, [selectedImage, collegeEventsGallery.length]);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        setSelectedImage(prev => prev === null ? null : Math.min(collegeEventsGallery.length - 1, prev + 1));
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
                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460567/WhatsApp_Image_2025-08-27_at_12.23.23_AM_woknvv.jpg"
                        alt="College Events - Power Packed Celebrations - D Day Evento Hyderabad"
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
                            College Events with{' '}
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
                            College life is not just about books and exams — it's about creating memories that last a lifetime. We deliver impactful, power-packed services that transform college celebrations into unforgettable experiences.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                                Power Up Your College Events
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>        
    {/* What Students Achieve Through Celebrations */}
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
                                What Students Achieve{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                                    Through Celebrations
                                </span>
                            </h2>

                            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                                    Annual Days, Cultural Fests, DJ Nights, Farewell & Freshers Parties, Sports Day, and Convocation ceremonies are milestones that shape every student's journey.
                                </p>

                                <p className="text-sm sm:text-base">
                                    These are the days when students celebrate achievements, showcase talent, build unity, and experience the thrill of true celebration.
                                </p>

                                <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-brand-primary/10">
                                    <p className="text-brand-primary font-semibold text-lg sm:text-xl text-center">
                                        Making these moments larger-than-life needs the right setup. That's where D DAY EVENTO steps in.
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
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460562/WhatsApp_Image_2025-08-27_at_12.23.21_AM_wmy1jz.jpg"
                                    alt="What students achieve through celebrations - D Day Evento Hyderabad"
                                    className="w-full h-96 lg:h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>        
    {/* How We Execute */}
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
                            How{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                                We Execute
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-primary mb-4">Recognition & Pride</h3>
                                <p>Showcasing talent, honouring achievements, and creating a sense of belonging for every student.</p>
                            </div>

                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-secondary mb-4">Memories That Last</h3>
                                <p>Entertainment, laughter, and vibes that live beyond graduation and stay with students forever.</p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460559/WhatsApp_Image_2025-08-27_at_12.23.21_AM_2_dyeazy.jpg"
                                    alt="How we execute college events - D Day Evento"
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
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460556/WhatsApp_Image_2025-08-27_at_12.23.21_AM_1_ibh1s3.jpg"
                                    alt="Unity and energy in college events - D Day Evento"
                                    className="w-full h-96 lg:h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700 order-1 md:order-2">
                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-primary mb-4">Unity & Energy</h3>
                                <p>Events that bring the entire student community together, creating bonds and shared experiences.</p>
                            </div>

                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-secondary mb-4">Your Vision, Our Precision</h3>
                                <p>We understand your plans, your ideas, your vibe — we adopt it with precision and present it with bold accuracy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
          {/* Service Highlights */}
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
                            Service{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                                Highlights
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-6">
                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-primary mb-6">Stage & Setup</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>• <strong>Grand Stages</strong> - Professional stage setups that command attention</p>
                                    <p>• <strong>LED Backdrops</strong> - High-definition visual displays and screens</p>
                                    <p>• <strong>Thematic Props</strong> - Creative props that match your event theme</p>
                                    <p>• <strong>Dynamic Lighting</strong> - Lighting that energizes the atmosphere</p>
                                </div>
                            </div>

                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-secondary mb-6">Decorations & Catering</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>• <strong>Creative Décor</strong> - Trendy, theme-based décor that speaks the student language</p>
                                    <p>• <strong>Photography & Videography</strong> - Capturing every cheer, dance step, and moment</p>
                                    <p>• <strong>Food & Catering</strong> - Delicious spreads and student-friendly menus</p>
                                    <p>• <strong>Live Counters</strong> - Interactive food stations that fuel the celebration</p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460553/WhatsApp_Image_2025-08-27_at_12.23.20_AM_q4zwjy.jpg"
                                    alt="Service highlights for college events - D Day Evento Hyderabad"
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
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Power Packed Celebrations</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                                Our College Events{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                                    Portfolio
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                                Creating unforgettable college memories across Hyderabad
                            </p>
                        </motion.div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {collegeEventsGallery.slice(0, visibleImages).map((image, index) => (
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
                                                    <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">College Event</p>
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
                        {!hasMoreImages && collegeEventsGallery.length > IMAGES_PER_LOAD && (
                            <motion.div
                                className="text-center mt-8 sm:mt-10 md:mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full">
                                    <Sparkles className="w-5 h-5 mr-2 text-brand-primary" />
                                    You've seen all our college celebrations!
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>      
      {/* Entertainment & Activities */}
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
                                Entertainment &{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                                    Activities
                                </span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                            {/* Content */}
                            <div className="space-y-6">
                                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                    <h3 className="text-xl font-bold text-brand-primary mb-6">High-Voltage Entertainment</h3>
                                    <div className="space-y-4 text-gray-700">
                                        <p><strong>Sound Systems & DJ Setups:</strong> High-voltage sound systems that energize the entire venue.</p>
                                        <p><strong>Live Music & Bands:</strong> Professional bands and live music performances that create electric atmosphere.</p>
                                        <p><strong>Celebrity Performances:</strong> Special guest appearances and celebrity performances for memorable experiences.</p>
                                    </div>
                                </div>

                                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                    <h3 className="text-xl font-bold text-brand-secondary mb-6">Interactive Engagement</h3>
                                    <div className="space-y-4 text-gray-700">
                                        <p><strong>Anchors & Artists:</strong> Professional anchors and performers who keep the energy alive throughout the event.</p>
                                        <p><strong>Fun Zones & Games:</strong> Interactive activities and game zones that keep students engaged and entertained.</p>
                                        <p><strong>Interactive Activities:</strong> Engaging activities that bring the entire student community together.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460551/WhatsApp_Image_2025-08-27_at_12.23.20_AM_1_u0eun3.jpg"
                                        alt="Entertainment and activities for college events"
                                        className="w-full h-96 lg:h-[500px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 rounded-3xl p-8 sm:p-12 border border-brand-primary/10">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-brand-primary mb-4">The D Day Evento Edge</h3>
                                    <p className="text-gray-700 mb-4"><strong>Power-Packed Services:</strong> We don't just "arrange" events — we power them up. Every service is sharp, on-point, and impactful.</p>
                                    <p className="text-gray-700"><strong>Memorable Experiences:</strong> With us, your college events won't just be celebrated, they'll be remembered for years to come.</p>
                                </div>
                                <div className="relative">
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460564/WhatsApp_Image_2025-08-27_at_12.23.23_AM_1_errtgj.jpg"
                                        alt="D Day Evento edge in college events"
                                        className="w-full h-64 object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>     
       {/* What You Get */}
            <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(120,119,198,0.05),_transparent_50%)]" />

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
                                        <p>✓ <strong>Power-packed celebrations</strong> that match the energy and spirit of student life</p>
                                        <p>✓ <strong>Professional execution</strong> from small cultural performances to mega college fests</p>
                                        <p>✓ <strong>Unforgettable experiences</strong> that create memories lasting beyond graduation</p>
                                        <p>✓ <strong>Complete event solutions</strong> designed to bring the entire student community together</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760460548/WhatsApp_Image_2025-08-27_at_12.23.19_AM_qvy2kc.jpg"
                                        alt="What you get with D Day Evento college events"
                                        className="w-full h-96 lg:h-[400px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 sm:p-12 rounded-3xl text-center mb-12 shadow-2xl">
                            <p className="text-xl text-white sm:text-2xl md:text-3xl font-bold mb-4">
                                At D DAY EVENTO, We don't just arrange college events.
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">
                                We power them up with services that create memories lasting a lifetime.
                            </p>
                        </div>

                        <div className="text-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-base sm:text-lg w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
                            >
                                Power Up Your College Events
                                <ArrowRight className="ml-2" size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>         
   {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                    {/* Top Bar */}
                    <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-4">
                        <div className="flex items-center justify-between">
                            <div className="text-white text-sm">
                                {selectedImage + 1} of {collegeEventsGallery.length}
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
                        {selectedImage < collegeEventsGallery.length - 1 && (
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
                            src={collegeEventsGallery[selectedImage].url}
                            alt={collegeEventsGallery[selectedImage].alt}
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
                        {selectedImage < collegeEventsGallery.length - 1 && (
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

export default CollegeEvents;