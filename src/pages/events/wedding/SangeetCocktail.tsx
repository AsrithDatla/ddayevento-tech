import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const SangeetCocktail: React.FC = () => {
    const { pathname } = useLocation();
    const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially
    const [isLoading, setIsLoading] = useState(false);

    const IMAGES_PER_LOAD = 6; // Load 6 more images each time

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Sangeet/Cocktail/Bachelor's Party images - D Day Evento Hyderabad
    const galleryImages = [
        // Sangeet Images (10)
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459218/WhatsApp_Image_2025-09-17_at_3.25.29_PM_2_g6o3wl.jpg', title: 'Sangeet Dance Performance', alt: 'Family performing choreographed dance at sangeet ceremony - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459217/WhatsApp_Image_2025-09-17_at_3.25.28_PM_1_zhtgvj.jpg', title: 'DJ Night Entertainment', alt: 'DJ performance at cocktail party - Hyderabad wedding planners' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459224/WhatsApp_Image_2025-09-17_at_3.25.31_PM_bi0pgy.jpg', title: 'Cocktail Party Setup', alt: 'Elegant cocktail party setup by D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459223/WhatsApp_Image_2025-09-17_at_3.25.30_PM_yhabcj.jpg', title: 'Sangeet Celebration', alt: 'Vibrant sangeet celebration - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459221/WhatsApp_Image_2025-09-17_at_3.25.30_PM_2_zaurok.jpg', title: 'Live Band Performance', alt: 'Live band performance at sangeet ceremony' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459224/WhatsApp_Image_2025-09-17_at_3.25.31_PM_1_q8ankh.jpg', title: 'Dance Floor Celebration', alt: 'Guests celebrating on dance floor - Hyderabad wedding events' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459220/WhatsApp_Image_2025-09-17_at_3.25.30_PM_1_qndgtp.jpg', title: 'Bollywood Theme Night', alt: 'Bollywood themed sangeet celebration - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459219/WhatsApp_Image_2025-09-17_at_3.25.29_PM_mtvm52.jpg', title: 'Cocktail Bar Setup', alt: 'Professional cocktail bar setup - Hyderabad party planning' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459218/WhatsApp_Image_2025-09-17_at_3.25.29_PM_1_n4dyon.jpg', title: 'Stage Lighting Design', alt: 'Professional stage and lighting setup by D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459216/WhatsApp_Image_2025-09-17_at_3.25.28_PM_fnxqjk.jpg', title: 'Party Entertainment', alt: 'Entertainment and games at sangeet party - Hyderabad' },

        // Bachelor's Party Images (7)
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459687/WhatsApp_Image_2025-09-17_at_3.26.08_PM_2_nfgmlq.jpg', title: 'Bachelor Party Celebration', alt: 'Fun bachelor party celebration - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459690/WhatsApp_Image_2025-09-17_at_3.26.08_PM_iz3xft.jpg', title: 'Bachelor Party Entertainment', alt: 'Bachelor party entertainment and activities - Hyderabad party planning' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459685/WhatsApp_Image_2025-09-17_at_3.26.08_PM_1_zr8inv.jpg', title: 'Bachelor Party Setup', alt: 'Professional bachelor party setup by D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459683/WhatsApp_Image_2025-09-17_at_3.26.07_PM_tnkm2a.jpg', title: 'Bachelor Party Games', alt: 'Interactive games at bachelor party - Hyderabad events' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459681/WhatsApp_Image_2025-09-17_at_3.26.07_PM_2_dzwhhe.jpg', title: 'Bachelor Party Venue', alt: 'Bachelor party venue decoration - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459681/WhatsApp_Image_2025-09-17_at_3.26.07_PM_1_ijwokb.jpg', title: 'Bachelor Party Fun', alt: 'Bachelor party fun activities - Hyderabad party planners' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459679/WhatsApp_Image_2025-09-17_at_3.26.06_PM_padcjo.jpg', title: 'Bachelor Party Memories', alt: 'Creating bachelor party memories - D Day Evento' }
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
            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459218/WhatsApp_Image_2025-09-17_at_3.25.29_PM_2_g6o3wl.jpg"
                        alt="Sangeet Cocktail Bachelor Party - D Day Evento Hyderabad"
                        className="w-full h-full object-cover object-center brightness-75 contrast-110"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 via-transparent to-brand-secondary/30"></div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-brand-secondary/20 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-2xl leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}
                        >
                            The Night of{' '}
                            <span className="text-gold drop-shadow-2xl" style={{}}>
                                Dance, Music, and Bonding
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
                        >
                            The sangeet or cocktail night is where the real fun begins! Families come together, friends let loose, and the couple is celebrated with music, dance, and laughter.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-brand-accent/30 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
                                Plan Your Ultimate Party
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* The Meaning Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-brand-primary/5">
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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Sangeet & Celebrations</span>
                            </h2>

                            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 p-6 rounded-2xl border-l-4 border-brand-primary transform hover:scale-105 transition-all duration-300">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">A Night of Joy & Dance</h3>
                                        <p>Where music fills the air and dance brings hearts together in celebration</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-brand-secondary/10 via-brand-accent/5 to-brand-primary/10 p-6 rounded-2xl border-l-4 border-brand-secondary transform hover:scale-105 transition-all duration-300">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Bonding</h3>
                                        <p>A chance for both families to break the ice and create lasting connections</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-brand-accent/10 via-brand-primary/5 to-brand-secondary/10 p-6 rounded-2xl border-l-4 border-brand-accent transform hover:scale-105 transition-all duration-300">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Love & Friendship</h3>
                                        <p>A celebration of love, friendship, and the joy of coming together</p>
                                    </div>
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
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <img
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459217/WhatsApp_Image_2025-09-17_at_3.25.28_PM_1_zhtgvj.jpg"
                                    alt="Sangeet and cocktail celebrations"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-brand-secondary/20"></div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full opacity-20 blur-xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Is Celebrated */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                            How It Is{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebrated</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Every element designed to create unforgettable moments of joy and celebration
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Dance Performances */}
                        <motion.div
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/10 rounded-3xl p-8 shadow-xl border border-brand-primary/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl font-bold">D</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Dance Performances</h3>
                                </div>

                                <div className="mb-6">
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459224/WhatsApp_Image_2025-09-17_at_3.25.31_PM_bi0pgy.jpg"
                                        alt="Family dance performances at sangeet"
                                        className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">Family and friends perform choreographed dances</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">Professional choreographers for perfect performances</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Music & Entertainment */}
                        <motion.div
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-gradient-to-br from-brand-secondary/10 via-brand-accent/5 to-brand-primary/10 rounded-3xl p-8 shadow-xl border border-brand-secondary/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-primary text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl font-bold">M</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Music & Entertainment</h3>
                                </div>

                                <div className="mb-6">
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459221/WhatsApp_Image_2025-09-17_at_3.25.30_PM_2_zaurok.jpg"
                                        alt="DJ and live band entertainment"
                                        className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">DJ nights or live bands keep the floor alive</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">Professional sound and lighting systems</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Party Atmosphere */}
                        <motion.div
                            className="relative group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="bg-gradient-to-br from-brand-accent/10 via-brand-primary/5 to-brand-secondary/10 rounded-3xl p-8 shadow-xl border border-brand-accent/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-secondary text-black rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl font-bold">P</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Party Atmosphere</h3>
                                </div>

                                <div className="mb-6">
                                    <img
                                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459219/WhatsApp_Image_2025-09-17_at_3.25.29_PM_mtvm52.jpg"
                                        alt="Cocktail party and games"
                                        className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">Cocktails, games, and interactive entertainment</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">Themed setups and immersive experiences</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Ideas to Make It Special */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-brand-primary/5 to-brand-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                            Ideas to Make It{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Special</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Transform your celebration with these creative and modern party concepts
                        </p>
                    </motion.div>

                    {/* Theme Ideas */}
                    <div className="mb-16">
                        <motion.h3
                            className="text-2xl font-bold text-gray-900 mb-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Party Themes
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { theme: "Bollywood Night", color: "from-brand-accent to-brand-secondary", description: "Glamorous Bollywood-inspired celebration" },
                                { theme: "Retro Disco", color: "from-brand-secondary to-brand-primary", description: "Groovy retro vibes with disco lights" },
                                { theme: "Royal Ballroom", color: "from-brand-primary to-brand-secondary", description: "Elegant and sophisticated royal theme" },
                                { theme: "Beach Party", color: "from-brand-secondary to-brand-accent", description: "Tropical beach party atmosphere" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="relative group cursor-pointer"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}>
                                        <h4 className="text-xl font-bold mb-2">{item.theme}</h4>
                                        <p className="text-white/90 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Ideas Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Décor */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-brand-primary/20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-full flex items-center justify-center mb-4">
                                    <span className="text-xl font-bold">D</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Décor Elements</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "LED dance floors with dynamic lighting",
                                    "Disco lights and laser shows",
                                    "Luxury lounge setups with modern furniture",
                                    "Themed backdrops and photo walls"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Entertainment */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-brand-secondary/20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary text-white rounded-full flex items-center justify-center mb-4">
                                    <span className="text-xl font-bold">E</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Entertainment</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Professional choreographers for group dances",
                                    "Celebrity anchors and hosts",
                                    "Live artists and performers",
                                    "Stand-up comedians and interactive games"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Food & Beverages */}
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-brand-accent/20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary text-black rounded-full flex items-center justify-center mb-4">
                                    <span className="text-xl font-bold">F</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Food & Beverages</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Cocktail and mocktail bars with mixologists",
                                    "Gourmet finger foods and canapés",
                                    "Live grilling stations and food counters",
                                    "Designer desserts and sweet treats"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">{item}</p>
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
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Gallery</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Experience the energy and excitement of our sangeet and cocktail celebrations
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
                                        <span>View More</span>
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

            {/* How D DAY EVENTO Helps */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-brand-primary/5 to-brand-accent/10">
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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">D DAY EVENTO</span>
                            {' '}Helps
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We orchestrate every detail to create the ultimate party experience
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Stage & Technical Setup",
                                description: "Professional stage, sound systems, and dynamic lighting setup for the perfect party atmosphere"
                            },
                            {
                                title: "Dance & Performance",
                                description: "Dance choreography planning, performance coordination, and artist management"
                            },
                            {
                                title: "Entertainment Management",
                                description: "DJ coordination, live bands, celebrity artists, and complete entertainment lineup"
                            },
                            {
                                title: "Catering & Hospitality",
                                description: "Bar setup, catering coordination, guest flow management, and complete hospitality services"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-brand-primary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-full flex items-center justify-center mb-4">
                                    <span className="text-xl font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                                What You{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Get</span>
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "A Glamorous, Fun-Filled Night",
                                        description: "An unforgettable celebration that exceeds all expectations with style and sophistication"
                                    },
                                    {
                                        title: "Guests Enjoying Every Moment",
                                        description: "Everyone fully engaged with entertainment, activities, and experiences they'll remember forever"
                                    },
                                    {
                                        title: "Stress-Free Execution",
                                        description: "While you celebrate and enjoy, we handle every detail behind the scenes flawlessly"
                                    }
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-gradient-to-br from-brand-primary/5 to-brand-accent/10 rounded-2xl shadow-lg border border-brand-primary/20"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                            ✓
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="mt-8 p-6 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 rounded-2xl border-l-4 border-brand-primary"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <p className="text-lg text-brand-primary font-semibold italic leading-relaxed">
                                    "At D DAY EVENTO, your sangeet or cocktail is not just an event – it's the most unforgettable party of your life."
                                </p>
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
                                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="D Day Evento sangeet and cocktail party results"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-brand-secondary/20"></div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-full opacity-20 blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-primary via-brand-primary-dark to-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
                            Ready to Create Your{' '}
                            <span className="text-brand-accent">Ultimate Party?</span>
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Let us transform your sangeet or cocktail night into the most unforgettable celebration of your life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="bg-brand-accent hover:bg-brand-accent-dark text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
                            >
                                <span>Plan Your Party</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/gallery"
                                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
                            >
                                <span>View More Gallery</span>
                                <Sparkles className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SangeetCocktail;