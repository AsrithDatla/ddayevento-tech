import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import ImprovedQuoteModal from '../../../components/QuoteGenerator/ImprovedQuoteModal';

const WeddingCeremony: React.FC = () => {
    const { pathname } = useLocation();
    const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially
    const [isLoading, setIsLoading] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const IMAGES_PER_LOAD = 6; // Load 6 more images each time

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Reusing gallery images from wedding events page
    const galleryImages = [
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457964/WhatsApp_Image_2025-09-17_at_4.36.15_PM_wmavz3.jpg', title: 'Traditional Wedding Ceremony Hyderabad - D Day Evento', alt: 'Beautiful traditional wedding ceremony setup by D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.12_PM_aitnbp.jpg', title: 'Grand Wedding Reception Hyderabad', alt: 'Elegant wedding reception decoration and setup' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457961/WhatsApp_Image_2025-09-17_at_4.36.14_PM_knylty.jpg', title: 'Bride and Groom Wedding Ceremony', alt: 'Beautiful bride and groom wedding ceremony moments' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.11_PM_b1coch.jpg', title: 'Sacred Wedding Ceremony Rituals', alt: 'Traditional wedding ceremony rituals and customs' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457959/WhatsApp_Image_2025-09-17_at_4.36.11_PM_2_xa5ysx.jpg', title: 'Wedding Reception Bharath Ceremony', alt: 'Grand wedding reception and Bharath ceremony' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457959/WhatsApp_Image_2025-09-17_at_4.36.11_PM_1_g0pidf.jpg', title: 'Wedding Mandap Decoration', alt: 'Beautiful wedding mandap decoration and setup' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457954/WhatsApp_Image_2025-09-17_at_4.36.10_PM_usduej.jpg', title: 'Wedding Guest Celebration', alt: 'Wedding guests celebrating with family and friends' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457954/WhatsApp_Image_2025-09-17_at_4.36.09_PM_cogjc0.jpg', title: 'Engagement Ceremony Planning', alt: 'Beautiful engagement ceremony setup and planning' },
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
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760457938/WhatsApp_Image_2025-09-17_at_4.36.03_PM_1_gfo1mg.jpg', title: 'Wedding Ceremony Sacred Fire', alt: 'Sacred fire ceremony in traditional wedding' }
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
            {/* Hero Section - Cinematic and Emotional */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.12_PM_aitnbp.jpg"
                        alt="Sacred Wedding Ceremony - D Day Evento Hyderabad"
                        className="w-full h-full object-cover object-center brightness-75 contrast-110"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 via-transparent to-brand-accent/30"></div>
                </div>

                {/* Sacred Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-accent/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-primary/30 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-brand-secondary/25 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-brand-accent/25 to-transparent rounded-full blur-xl animate-pulse delay-1500"></div>
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
                            <span className="block">The Divine Union,</span>
                            <span className="text-gold drop-shadow-2xl" style={{}}>
                                Perfectly Executed
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
                        >
                            The wedding day is the heart of all celebrations. It is the divine union of two souls, witnessed by family and friends, and celebrated with rituals, emotions, and grandeur.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button 
                                onClick={() => setIsQuoteModalOpen(true)}
                                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-brand-accent/40 w-full sm:w-auto max-w-xs sm:max-w-none">
                                Plan Your Perfect Wedding
                            </button>
                            <div className="text-white/90 text-sm font-light">
                                Trusted by 1000+ couples across Hyderabad
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* The Meaning of Wedding Ceremony - Sacred & Emotional */}
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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Wedding Ceremony</span>
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
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">The Start of New Life</h3>
                                                    <p className="text-gray-700 leading-relaxed">It marks the beginning of a new journey, where two individuals become one family, creating a foundation for generations to come.</p>
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
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Blending Traditions & Culture</h3>
                                                    <p className="text-gray-700 leading-relaxed">It beautifully weaves together traditions, values, and cultural heritage, creating a tapestry of love and respect.</p>
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
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Life's Most Significant Milestone</h3>
                                                    <p className="text-gray-700 leading-relaxed">It's the most emotional and significant milestone, witnessed by loved ones and blessed by divine grace.</p>
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
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457959/WhatsApp_Image_2025-09-17_at_4.36.11_PM_1_g0pidf.jpg"
                                    alt="Sacred wedding ceremony traditions"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-brand-accent/20"></div>
                            </div>
                            {/* Sacred Decorative Elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-brand-accent/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-brand-primary/25 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Is Celebrated - Ritual Journey */}
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
                            The Wedding{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebration</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Every ritual, every moment, every blessing crafted with reverence and precision
                        </p>
                    </motion.div>

                    {/* Ritual Timeline */}
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
                            {/* Wedding Rituals */}
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
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Rituals</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Pheras around the sacred fire</p>
                                            </div>
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Mangalsutra and Kanyadaan ceremonies</p>
                                            </div>
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Cultural equivalents and family traditions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457938/WhatsApp_Image_2025-09-17_at_4.36.03_PM_1_gfo1mg.jpg"
                                        alt="Sacred wedding rituals and ceremonies"
                                        className="w-full h-80 object-cover rounded-3xl shadow-xl"
                                    />
                                </div>
                            </motion.div>

                            {/* Traditional Attire */}
                            <motion.div
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="lg:order-1">
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457961/WhatsApp_Image_2025-09-17_at_4.36.14_PM_knylty.jpg"
                                        alt="Bride and groom in traditional wedding attire"
                                        className="w-full h-80 object-cover rounded-3xl shadow-xl"
                                    />
                                </div>
                                <div className="lg:pl-12 lg:order-2">
                                    <div className="bg-gradient-to-br from-brand-secondary/10 via-brand-accent/5 to-brand-primary/10 rounded-3xl p-8 shadow-xl border border-brand-secondary/20 hover:shadow-2xl transition-all duration-500">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Grandeur</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Bride and groom in exquisite traditional attire</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Stunning jewelry and ceremonial accessories</p>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Cultural authenticity with modern elegance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Guest Blessings */}
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
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Family Blessings</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Guests blessing the couple with love and gifts</p>
                                            </div>
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Family elders sharing wisdom and blessings</p>
                                            </div>
                                            <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                                                <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">Joyful celebrations with music and dance</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457954/WhatsApp_Image_2025-09-17_at_4.36.10_PM_usduej.jpg"
                                        alt="Wedding guests blessing the couple"
                                        className="w-full h-80 object-cover rounded-3xl shadow-xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Ideas to Make It Special - Mandap Showcase */}
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
                            Transform your sacred ceremony into an unforgettable celebration of love and tradition
                        </p>
                    </motion.div>

                    {/* Mandap Styles Showcase */}
                    <div className="mb-16">
                        <motion.h3
                            className="text-3xl font-bold text-gray-900 mb-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Mandap Décor Styles
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { style: "Floral Paradise", color: "from-brand-accent to-brand-secondary", description: "Fresh flowers and natural beauty" },
                                { style: "Crystal Elegance", color: "from-brand-primary to-brand-secondary", description: "Sparkling crystals and luxury" },
                                { style: "Temple Heritage", color: "from-brand-secondary to-brand-primary", description: "Traditional temple architecture" },
                                { style: "Beachside Serenity", color: "from-brand-accent to-brand-primary", description: "Ocean breeze and natural charm" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="relative group cursor-pointer"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 min-h-[200px] flex flex-col justify-between`}>
                                        <div>
                                            <h4 className="text-xl font-bold mb-3">{item.style}</h4>
                                            <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                        <div className="mt-4 text-right">
                                            <div className="inline-flex w-8 h-8 bg-white/20 rounded-full items-center justify-center">
                                                <span className="text-sm font-bold">{index + 1}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Ideas Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        {/* Couple Entry */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-brand-primary/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Grand Entries</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Royal Palki with flower petals",
                                    "Traditional dhol and shehnai",
                                    "Fireworks and sparkler displays",
                                    "Vintage car or decorated horse"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Sacred Music */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-brand-secondary/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Traditional Music</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Traditional shehnai melodies",
                                    "Live folk performances",
                                    "Devotional qawwali singers",
                                    "Classical instrumental music"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Royal Feast */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-brand-accent/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Royal Feast</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Traditional wedding thalis",
                                    "Multi-cuisine global buffets",
                                    "Live cooking stations",
                                    "Exquisite dessert displays"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Sacred Ambiance */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Divine Ambiance</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Divine lighting arrangements",
                                    "Fragrant flower decorations",
                                    "Sacred fire ceremony setup",
                                    "Peaceful meditation spaces"
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

            {/* Gallery Section - Reused from Wedding Events */}
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
                            Our Wedding{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Gallery</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Witness the divine beauty and emotional moments of wedding ceremonies we've crafted
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
                                        <span>View More Beautiful Moments</span>
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
                            {' '}Serves You
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We orchestrate every sacred detail with devotion, precision, and unmatched expertise
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Complete Mandap Setup",
                                description: "Full mandap setup and décor with traditional authenticity and modern elegance, customized to your vision"
                            },
                            {
                                title: "Ritual Management",
                                description: "Ritual essentials managed with precision, ensuring every ceremony flows seamlessly according to traditions"
                            },
                            {
                                title: "Guest Experience",
                                description: "Guest hospitality and flow coordination, creating comfort and reverence for all attendees"
                            },
                            {
                                title: "Sacred Entertainment",
                                description: "Music, photography, and entertainment that honors the sanctity while capturing every precious moment"
                            },
                            {
                                title: "Grand Entries",
                                description: "Bride and groom entry planning with traditional grandeur and personalized touches"
                            },
                            {
                                title: "Complete Coordination",
                                description: "End-to-end wedding day coordination ensuring flawless execution of your sacred ceremony"
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

            {/* What You Get - Emotional Results */}
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
                                        title: "A Perfectly Orchestrated Wedding",
                                        description: "Every ritual, every moment, every detail flows seamlessly, creating a sacred ceremony that honors tradition while celebrating your unique love story"
                                    },
                                    {
                                        title: "Stress-Free Families",
                                        description: "Your families can focus entirely on the emotional significance of the day, knowing that every logistical detail is handled with expertise and care"
                                    },
                                    {
                                        title: "Unforgettable Sacred Memories",
                                        description: "An experience that transcends expectations, creating memories that will be cherished for generations and stories that will be told with joy"
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
                                        "At D DAY EVENTO, your wedding day is crafted with devotion, love, and grandeur – making it truly unforgettable."
                                    </p>
                                    <p className="text-gray-600 mt-2 font-medium">
                                        — Our Promise to You
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
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760457948/WhatsApp_Image_2025-09-17_at_4.36.07_PM_2_r3k44u.jpg"
                                    alt="D Day Evento wedding ceremony results - happy couple"
                                    className="w-full h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-brand-accent/20"></div>
                            </div>
                            {/* Sacred Decorative Elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-brand-accent/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-brand-primary/25 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action - Sacred & Emotional */}
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
                            <span className="text-brand-accent">Perfect Wedding?</span>
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Let us transform your wedding ceremony into a divine celebration that honors tradition, celebrates love, and creates memories for eternity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button
                                onClick={() => setIsQuoteModalOpen(true)}
                                className="bg-brand-accent hover:bg-brand-accent-dark text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-3 shadow-2xl"
                            >
                                <span>Plan Your Perfect Wedding</span>
                                <ArrowRight className="w-6 h-6" />
                            </button>
                            <Link
                                to="/gallery"
                                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-10 py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-3"
                            >
                                <span>View Wedding Gallery</span>
                                <Sparkles className="w-6 h-6" />
                            </Link>
                        </div>
                        <div className="mt-8 text-white/80 text-sm">
                            Join 1000+ couples who trusted us with their most important day
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quote Modal */}
            <ImprovedQuoteModal 
                isOpen={isQuoteModalOpen} 
                onClose={() => setIsQuoteModalOpen(false)} 
            />
        </div>
    );
};

export default WeddingCeremony;