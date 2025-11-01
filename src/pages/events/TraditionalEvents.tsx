import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const TraditionalEvents: React.FC = () => {
    const { pathname } = useLocation();
    const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [visibleImages, setVisibleImages] = useState(6);
    const [isLoading, setIsLoading] = useState(false);

    const IMAGES_PER_LOAD = 6;

    // Traditional Events Gallery - 10 images
    const traditionalEventsGallery = [
        { url: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Griha Pravesham House Warming', alt: 'Traditional house warming ceremony - D Day Evento Hyderabad' },
        { url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'House Warming Rituals', alt: 'House warming ceremony rituals and traditions - Hyderabad' },
        { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Half Saree Ceremony Celebration', alt: 'Royal celebration of womanhood - Half Saree ceremony by D Day Evento' },
        { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Half Saree Traditional Rituals', alt: 'Traditional half saree ceremony rituals - Hyderabad event planners' },
        { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Dhoti Ceremony Pride', alt: 'Boys step into tradition and pride - Dhoti ceremony D Day Evento' },
        { url: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Dhoti Ceremony Traditions', alt: 'Traditional dhoti ceremony celebrations - Hyderabad' },
        { url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Cradle Ceremony Blessings', alt: 'Cradle ceremony and naming ceremony - D Day Evento Hyderabad' },
        { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Annaprasana Celebration', alt: 'Annaprasana and naming ceremony traditions - Hyderabad planners' },
        { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Sreemantham Baby Shower', alt: 'Traditional Sreemantham baby shower ceremony - D Day Evento' },
        { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Baby Shower Traditions', alt: 'Baby shower ceremony with traditional rituals - Hyderabad' }
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
            setVisibleImages(prev => Math.min(prev + IMAGES_PER_LOAD, traditionalEventsGallery.length));
            setIsLoading(false);
        }, 500);
    };

    const hasMoreImages = visibleImages < traditionalEventsGallery.length;

    // Handle keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            if (e.key === 'Escape') {
                setSelectedImage(null);
            } else if (e.key === 'ArrowLeft') {
                setSelectedImage(prev => prev === null ? null : Math.max(0, prev - 1));
            } else if (e.key === 'ArrowRight') {
                setSelectedImage(prev => prev === null ? null : Math.min(traditionalEventsGallery.length - 1, prev + 1));
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
    }, [selectedImage, traditionalEventsGallery.length]);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        setSelectedImage(prev => prev === null ? null : Math.min(traditionalEventsGallery.length - 1, prev + 1));
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
                        src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Traditional Events and Ceremonies - D Day Evento Hyderabad"
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
                            Traditional Events with{' '}
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
                            Traditions are not just dates on a calendar – they are the heartbeat of our culture. Every milestone deserves dignity, precision, and beauty.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                                Honor Your Traditions
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Traditions Matter */}
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
                                Why Traditions{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                                    Matter?
                                </span>
                            </h2>

                            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                                    They connect families across generations, weaving stories of heritage and creating bonds that transcend time.
                                </p>

                                <p className="text-sm sm:text-base">
                                    They carry blessings, rituals, and pride, ensuring that sacred traditions continue to flourish in modern times.
                                </p>

                                <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-brand-primary/10">
                                    <p className="text-brand-primary font-semibold text-lg sm:text-xl text-center">
                                        They deserve to be hosted with order, warmth, and elegance, honoring the sacred nature of each milestone.
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
                                    src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Why traditions matter - D Day Evento Hyderabad"
                                    className="w-full h-96 lg:h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Role - Your Advantage */}
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
                            Our Role –{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                                Your Advantage
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-primary mb-4">Complete Backbone</h3>
                                <p>We step in as the complete backbone of your celebration. Décor, food, rituals, photography, logistics – everything under one roof.</p>
                            </div>

                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-secondary mb-4">Stress-Free Experience</h3>
                                <p>You focus on the rituals, we handle the rest. On time, every time, without excuses – complete peace of mind for your family.</p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Our role in traditional events - D Day Evento"
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
                                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Traditional event excellence - D Day Evento"
                                    className="w-full h-96 lg:h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-lg leading-relaxed text-gray-700 order-1 md:order-2">
                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-primary mb-4">Hospitality Excellence</h3>
                                <p>Guests feel welcomed, families feel relieved – traditional warmth with modern efficiency and meticulous attention to every detail.</p>
                            </div>

                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-secondary mb-4">Cultural Guardian</h3>
                                <p>This is where D Day Evento steps in as your cultural guardian, ensuring every tradition is honored with dignity and precision.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Traditional Events */}
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
                            Types of Traditional Events{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                                We Handle
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-6">
                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-primary mb-6">Life Milestone Celebrations</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>• <strong>Griha Pravesham</strong> - House warming ceremonies with traditional blessings</p>
                                    <p>• <strong>Half Saree Ceremony</strong> - Celebrating a girl's transition to womanhood</p>
                                    <p>• <strong>Dhoti Ceremony</strong> - Boys stepping into tradition and cultural responsibility</p>
                                    <p>• <strong>Cradle Ceremony</strong> - Welcoming new life with sacred naming rituals</p>
                                </div>
                            </div>

                            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                <h3 className="text-xl font-bold text-brand-secondary mb-6">Sacred Family Traditions</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p>• <strong>Annaprasana</strong> - First feeding ceremonies with cultural significance</p>
                                    <p>• <strong>Sreemantham</strong> - Traditional baby shower celebrating motherhood</p>
                                    <p>• <strong>Custom Traditions</strong> - Your family's unique cultural celebrations</p>
                                    <p>• <strong>Heritage Events</strong> - Preserving and honoring ancestral traditions</p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Types of traditional events - D Day Evento Hyderabad"
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
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Sacred Celebrations</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                                Our Traditional{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                                    Events Portfolio
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                                Celebrating life's sacred milestones with cultural authenticity across Hyderabad
                            </p>
                        </motion.div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {traditionalEventsGallery.slice(0, visibleImages).map((image, index) => (
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
                                                    <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">Traditional Event</p>
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
                        {!hasMoreImages && traditionalEventsGallery.length > IMAGES_PER_LOAD && (
                            <motion.div
                                className="text-center mt-8 sm:mt-10 md:mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-full">
                                    <Sparkles className="w-5 h-5 mr-2 text-brand-primary" />
                                    You've seen all our traditional celebrations!
                                </div>
                            </motion.div>
                        )}
                    </div>
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
                                        <p><strong>Venue Management:</strong> We select and manage the perfect venue that aligns with your event's purpose and creates the right traditional atmosphere.</p>
                                        <p><strong>Décor & Theme Design:</strong> Our design team creates authentic, elegant, and impactful décor that reflects your cultural identity and event significance.</p>
                                    </div>
                                </div>

                                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg p-8 border border-gray-200/30">
                                    <h3 className="text-xl font-bold text-brand-secondary mb-6">Cultural & Guest Services</h3>
                                    <div className="space-y-4 text-gray-700">
                                        <p><strong>Ritual Coordination:</strong> Professional guidance and coordination of traditional rituals, ensuring cultural authenticity and proper execution.</p>
                                        <p><strong>Food & Catering:</strong> Traditional menus specifically tailored for cultural gatherings, accommodating diverse preferences and dietary requirements.</p>
                                        <p><strong>Guest Management:</strong> Smooth, organized, and welcoming guest experience from arrival to departure with traditional hospitality.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="How D Day Evento helps with traditional events"
                                        className="w-full h-96 lg:h-[500px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 rounded-3xl p-8 sm:p-12 border border-brand-primary/10">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-brand-primary mb-4">Cultural Preservation & Documentation</h3>
                                    <p className="text-gray-700 mb-4"><strong>Cultural Authenticity:</strong> We ensure every tradition is honored with proper rituals, maintaining the sacred and cultural significance of each ceremony.</p>
                                    <p className="text-gray-700"><strong>Photography & Videography:</strong> We capture every important moment with cultural sensitivity, creating lasting memories of your family's sacred milestones.</p>
                                </div>
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="Traditional event cultural preservation and documentation"
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
                                        <p>✓ <strong>A flawless, stress-free event</strong> that runs smoothly from start to finish</p>
                                        <p>✓ <strong>Cultural authenticity for every guest</strong> that reflects your family's traditions</p>
                                        <p>✓ <strong>Strong impression on family and friends</strong> that enhances cultural bonds</p>
                                        <p>✓ <strong>An event that honors your heritage</strong> and strengthens your cultural identity</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt="What you get with D Day Evento traditional events"
                                        className="w-full h-96 lg:h-[400px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 sm:p-12 rounded-3xl text-center mb-12 shadow-2xl">
                            <p className="text-xl text-white sm:text-2xl md:text-3xl font-bold mb-4">
                                At D DAY EVENTO, We don't just manage traditional events.
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">
                                We honor traditions, preserve culture, and create sacred memories that last for generations.
                            </p>
                        </div>

                        <div className="text-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-base sm:text-lg w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
                            >
                                Honor Your Traditions With Us
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
                                {selectedImage + 1} of {traditionalEventsGallery.length}
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
                        {selectedImage < traditionalEventsGallery.length - 1 && (
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
                            src={traditionalEventsGallery[selectedImage].url}
                            alt={traditionalEventsGallery[selectedImage].alt}
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
                        {selectedImage < traditionalEventsGallery.length - 1 && (
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

export default TraditionalEvents;