import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const HaldiMehendi: React.FC = () => {
    const { pathname } = useLocation();
    const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially
    const [isLoading, setIsLoading] = useState(false);

    const IMAGES_PER_LOAD = 6; // Load 6 more images each time

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Haldi ceremony images - D Day Evento Hyderabad
    const haldiImages = [
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459259/WhatsApp_Image_2025-09-17_at_3.22.51_PM_1_jmyjlq.jpg', title: 'Traditional Haldi Application', alt: 'Bride getting haldi applied by family members - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459260/WhatsApp_Image_2025-09-17_at_3.22.51_PM_dxpzmr.jpg', title: 'Joyful Haldi Moments', alt: 'Family celebrating during haldi ceremony - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459266/WhatsApp_Image_2025-09-17_at_3.22.52_PM_hiij8k.jpg', title: 'Colorful Haldi Decorations', alt: 'Beautiful yellow and orange haldi ceremony setup by D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459264/WhatsApp_Image_2025-09-17_at_3.22.52_PM_2_ceimzd.jpg', title: 'Haldi Celebration Dance', alt: 'Guests dancing during haldi ceremony - Hyderabad wedding planners' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459262/WhatsApp_Image_2025-09-17_at_3.22.52_PM_1_quehjt.jpg', title: 'Marigold Haldi Setup', alt: 'Traditional haldi ceremony with marigold decorations - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459261/WhatsApp_Image_2025-09-17_at_3.22.51_PM_2_jort28.jpg', title: 'Family Haldi Rituals', alt: 'Extended family participating in haldi ceremony - Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459259/WhatsApp_Image_2025-09-17_at_3.22.50_PM_w34hge.jpg', title: 'Groom Haldi Ceremony', alt: 'Groom enjoying his haldi ceremony - D Day Evento planning' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459267/WhatsApp_Image_2025-09-17_at_3.22.53_PM_1_xwdodz.jpg', title: 'Haldi Paste Preparation', alt: 'Traditional preparation of haldi paste - wedding ceremony Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459268/WhatsApp_Image_2025-09-17_at_3.22.53_PM_2_nwnypk.jpg', title: 'Outdoor Haldi Setup', alt: 'Beautiful outdoor haldi ceremony arrangement by D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459269/WhatsApp_Image_2025-09-17_at_3.22.53_PM_suqiwm.jpg', title: 'Haldi Games & Fun', alt: 'Fun games and activities during haldi ceremony - Hyderabad weddings' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459272/WhatsApp_Image_2025-09-17_at_3.22.54_PM_1_thk52p.jpg', title: 'Yellow Theme Decor', alt: 'Stunning yellow themed haldi decorations - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459272/WhatsApp_Image_2025-09-17_at_3.22.54_PM_2_ze7mgp.jpg', title: 'Haldi Blessing Ceremony', alt: 'Elders blessing during haldi ceremony - traditional wedding Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459274/WhatsApp_Image_2025-09-17_at_3.22.54_PM_jajmx4.jpg', title: 'Traditional Haldi Attire', alt: 'Beautiful traditional outfits for haldi ceremony - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459275/WhatsApp_Image_2025-09-17_at_3.22.55_PM_dzdneh.jpg', title: 'Haldi Photography', alt: 'Candid moments captured during haldi ceremony - Hyderabad wedding photography' }
    ];

    // Mehendi ceremony images - D Day Evento Hyderabad
    const mehendiImages = [
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459317/WhatsApp_Image_2025-09-17_at_3.23.29_PM_pq80zw.jpg', title: 'Intricate Mehendi Designs', alt: 'Beautiful intricate henna designs on bride hands - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459316/WhatsApp_Image_2025-09-17_at_3.23.28_PM_ekvd3d.jpg', title: 'Mehendi Artist at Work', alt: 'Professional mehendi artist creating designs - Hyderabad wedding planners' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459314/WhatsApp_Image_2025-09-17_at_3.23.28_PM_2_j4cbk4.jpg', title: 'Boho Mehendi Setup', alt: 'Colorful boho style mehendi ceremony setup by D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459313/WhatsApp_Image_2025-09-17_at_3.23.28_PM_1_dzzfvp.jpg', title: 'Mehendi Celebration', alt: 'Ladies celebrating during mehendi ceremony - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459311/WhatsApp_Image_2025-09-17_at_3.23.27_PM_ptta39.jpg', title: 'Bridal Mehendi', alt: 'Bride getting elaborate mehendi designs - Hyderabad wedding ceremony' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459310/WhatsApp_Image_2025-09-17_at_3.23.27_PM_2_ecs60w.jpg', title: 'Mehendi Decor Details', alt: 'Beautiful decorative elements for mehendi ceremony - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459308/WhatsApp_Image_2025-09-17_at_3.23.27_PM_1_zy2vqf.jpg', title: 'Group Mehendi Fun', alt: 'Friends and family getting mehendi together - Hyderabad celebrations' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459306/WhatsApp_Image_2025-09-17_at_3.23.26_PM_o9kgmh.jpg', title: 'Traditional Mehendi Patterns', alt: 'Classic traditional mehendi design patterns - D Day Evento Hyderabad' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459305/WhatsApp_Image_2025-09-17_at_3.23.26_PM_2_yfpzvq.jpg', title: 'Mehendi Lounge Area', alt: 'Comfortable seating area for mehendi ceremony - Hyderabad wedding planning' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459304/WhatsApp_Image_2025-09-17_at_3.23.26_PM_1_mwocot.jpg', title: 'Mehendi Music & Dance', alt: 'Musical performances during mehendi ceremony - D Day Evento' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459304/WhatsApp_Image_2025-09-17_at_3.23.25_PM_ffltmx.jpg', title: 'Mehendi Food Stalls', alt: 'Delicious food arrangements for mehendi guests - Hyderabad catering' },
        { url: 'https://res.cloudinary.com/dvfx89ago/image/upload/v1760459303/WhatsApp_Image_2025-09-17_at_3.23.25_PM_1_sglg3p.jpg', title: 'Mehendi Photography', alt: 'Beautiful moments captured during mehendi ceremony - D Day Evento Hyderabad' }
    ];

    const allImages = [...haldiImages, ...mehendiImages];

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
                        src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459259/WhatsApp_Image_2025-09-17_at_3.22.51_PM_1_jmyjlq.jpg"
                        alt="Haldi and Mehendi ceremonies - D Day Evento Hyderabad"
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
                            Colors, Laughter,{' '}
                            <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                                and Blessings All Around
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
                        >
                            The Haldi and Mehendi ceremonies are the most joyful pre-wedding celebrations. Filled with colors, music, laughter, and traditions, they bring families together in fun and happiness.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                                Plan Your Colorful Celebrations
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Meaning of Haldi & Mehendi */}
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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Haldi & Mehendi</span>
                            </h2>

                            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                                <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 p-6 rounded-2xl border-l-4 border-brand-accent">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Haldi Ceremony</h3>
                                    <p>Turmeric paste applied to bride and groom symbolizes purification, positivity, and protection.</p>
                                </div>

                                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-6 rounded-2xl border-l-4 border-brand-primary">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mehendi Ceremony</h3>
                                    <p>Henna designs on the bride's hands and feet symbolize love, prosperity, and beauty.</p>
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
                                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459266/WhatsApp_Image_2025-09-17_at_3.22.52_PM_hiij8k.jpg"
                                alt="Haldi and Mehendi ceremonies"
                                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* How They Are Celebrated */}
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
                            How They Are{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebrated</span>
                        </h2>
                    </motion.div>

                    {/* Celebration Details - Enhanced with Images */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        {/* Haldi Celebrations */}
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
                                        <h3 className="text-2xl font-bold text-gray-900">Haldi Celebrations</h3>
                                    </div>

                                    <div className="mb-6">
                                        <img
                                            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459264/WhatsApp_Image_2025-09-17_at_3.22.52_PM_2_ceimzd.jpg"
                                            alt="Haldi ceremony celebrations"
                                            className="w-full h-48 object-cover rounded-2xl shadow-lg"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { title: "Family members apply turmeric paste", desc: "in a playful yet traditional setting" },
                                            { title: "Singing and dancing", desc: "make the events festive" },
                                            { title: "Traditional games", desc: "bring laughter and joy" },
                                            { title: "Colorful decorations", desc: "with marigolds and yellow drapes" }
                                        ].map((celebration, index) => (
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
                                                    <h4 className="font-semibold text-gray-900">{celebration.title}</h4>
                                                    <p className="text-gray-600 text-sm">{celebration.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* Mehendi Celebrations */}
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
                                        <h3 className="text-2xl font-bold text-gray-900">Mehendi Celebrations</h3>
                                    </div>

                                    <div className="mb-6">
                                        <img
                                            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459314/WhatsApp_Image_2025-09-17_at_3.23.28_PM_2_j4cbk4.jpg"
                                            alt="Mehendi ceremony celebrations"
                                            className="w-full h-48 object-cover rounded-2xl shadow-lg"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { title: "Mehendi artists create intricate designs", desc: "for the bride and female guests" },
                                            { title: "Singing and dancing", desc: "make the events festive" },
                                            { title: "Games and activities", desc: "keep everyone entertained" },
                                            { title: "Boho mehendi lounges", desc: "with colorful cushions" }
                                        ].map((celebration, index) => (
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
                                                    <h4 className="font-semibold text-gray-900">{celebration.title}</h4>
                                                    <p className="text-gray-600 text-sm">{celebration.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Ideas to Make It Special */}
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
                            Ideas to Make It{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Special</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Transform your Haldi & Mehendi into vibrant celebrations with these creative touches
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                                    "Marigold and yellow drapes",
                                    "Floral swings, quirky backdrops, and umbrellas",
                                    "Boho mehendi lounges with colorful cushions"
                                ].map((theme, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm">{theme}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Entertainment */}
                        <motion.div
                            className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl p-6 sm:p-8 border border-brand-primary/20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Entertainment</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Dhol, folk singers, or DJ beats",
                                    "Fun activities: tug-of-war, quirky photo booths, couple games"
                                ].map((entertainment, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm">{entertainment}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Food */}
                        <motion.div
                            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Food</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Chaat stalls, golgappa counters, fruit platters",
                                    "Flavoured lassis, mocktails, and sweets"
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
            {/* Gallery Section */}
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
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Gallery</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Witness the joy, colors, and traditions of Haldi & Mehendi celebrations
                        </p>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {allImages.slice(0, visibleImages).map((image, index) => (
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                                className="bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
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

                        {selectedImage < allImages.length - 1 && (
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        )}

                        {/* Image */}
                        <img
                            src={allImages[selectedImage].url}
                            alt={allImages[selectedImage].alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />

                        {/* Image Info */}
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                            <h3 className="text-white text-xl font-semibold mb-2">
                                {allImages[selectedImage].title}
                            </h3>
                            <p className="text-white/80 text-sm">
                                {selectedImage + 1} of {allImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}

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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">D DAY EVENTO</span>
                            {' '}Helps
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We handle every detail to make your Haldi & Mehendi celebrations perfect
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Vibrant Setup Creation",
                                description: "Creating vibrant haldi & mehendi setups with authentic decorations and color themes"
                            },
                            {
                                title: "Artist & Entertainment",
                                description: "Arranging professional mehendi artists and entertainment including dhol, folk singers, and DJ"
                            },
                            {
                                title: "Food & Live Counters",
                                description: "Food stalls, live counters, chaat stations, and quirky snack ideas for your guests"
                            },
                            {
                                title: "Guest Hospitality",
                                description: "Complete guest hospitality and coordination to ensure everyone enjoys the celebration"
                            },
                            {
                                title: "Photography & Videography",
                                description: "Professional photo & video coverage to capture every colorful moment and tradition"
                            },
                            {
                                title: "Complete Coordination",
                                description: "End-to-end event coordination ensuring seamless execution of all ceremonies"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center mb-4">
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
            <section className="py-16 sm:py-20 bg-gray-50">
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
                                        title: "A Colorful, Lively Event",
                                        description: "Full of laughter, joy, and vibrant celebrations that create lasting memories"
                                    },
                                    {
                                        title: "Fully Engaged Guests",
                                        description: "Everyone entertained with activities, games, and interactive experiences"
                                    },
                                    {
                                        title: "Memory-Filled Celebration",
                                        description: "For the bride and groom with authentic traditions and modern touches"
                                    }
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                    >
                                        <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
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
                                className="mt-8 p-6 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl border-l-4 border-brand-primary"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <p className="text-lg text-brand-primary font-semibold italic leading-relaxed">
                                    "At D DAY EVENTO, we make your Haldi & Mehendi more than traditions – we make them a festival of joy."
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img
                                src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459272/WhatsApp_Image_2025-09-17_at_3.22.54_PM_1_thk52p.jpg"
                                alt="D Day Evento Haldi Mehendi celebration results"
                                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                            />
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
                            Ready to Plan Your{' '}
                            <span className="text-brand-accent">Colorful Celebrations?</span>
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Let us help you create unforgettable Haldi & Mehendi ceremonies filled with joy, laughter, and beautiful traditions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="bg-brand-accent hover:bg-brand-accent-dark text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
                            >
                                <span>Plan Your Celebration</span>
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

export default HaldiMehendi;