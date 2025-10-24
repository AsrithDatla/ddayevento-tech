import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const BrideGroom: React.FC = () => {
    const { pathname } = useLocation();
    const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
                                    <span className="text-sm font-medium text-brand-primary">Sacred Traditions</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight mb-6">
                                    The Meaning of{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Traditional Ceremonies</span>
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    These sacred rituals are the foundation of a blessed marriage, connecting the couple to their cultural heritage and spiritual roots.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Spiritual Readiness",
                                        description: "These rituals mark the spiritual readiness of the bride and groom for their sacred union."
                                    },
                                    {
                                        title: "Divine Blessings",
                                        description: "They seek blessings from deities, ancestors, and elders for a prosperous married life."
                                    },
                                    {
                                        title: "Cultural Heritage",
                                        description: "They connect the marriage to family roots and cultural heritage, preserving traditions."
                                    }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
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
                                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1760459355/WhatsApp_Image_2025-09-17_at_3.25.02_PM_f0dcsr.jpg"
                                    alt="Traditional bride and groom ceremonies"
                                    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                                
                                {/* Floating Elements */}
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                    <span className="text-sm font-semibold text-brand-primary">Sacred Rituals</span>
                                </div>
                                
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                                    <p className="text-sm font-medium text-gray-800">Honoring Traditions</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>   
         {/* How These Ceremonies Are Celebrated */}
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
                            <span className="text-sm font-medium text-gray-700">Celebration Styles</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight mb-6">
                            How These Ceremonies Are{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Celebrated</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Each ceremony is unique, reflecting regional traditions and family customs while maintaining the sacred essence of these ancient rituals.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Bride's Home Rituals */}
                        <motion.div
                            className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 border border-pink-100"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Bride's Home Rituals</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Puja ceremonies with family deities",
                                    "Applying turmeric (Haldi) for purification",
                                    "Gifting sarees and jewelry from elders",
                                    "Blessings from family elders and relatives",
                                    "Mehendi ceremony with traditional designs",
                                    "Chooda ceremony (in North Indian traditions)"
                                ].map((ritual, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">{ritual}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Groom's Home Rituals */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 border border-blue-100"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Groom's Home Rituals</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Similar customs with dhoti and kurta ceremonies",
                                    "Rituals conducted with family priests",
                                    "Sehra Bandi (tying the ceremonial veil)",
                                    "Tilak ceremony with sacred marks",
                                    "Blessings from elders and family members",
                                    "Traditional music and celebrations"
                                ].map((ritual, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700">{ritual}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Cultural Variations */}
                    <motion.div
                        className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cultural Variations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "South India",
                                    traditions: [
                                        "Mangala Snanam (holy bath)",
                                        "Kashi Yatra ceremony",
                                        "Ganesha Puja for blessings",
                                        "Traditional Carnatic music"
                                    ],
                                    color: "from-orange-500 to-red-500"
                                },
                                {
                                    title: "North India",
                                    traditions: [
                                        "Chooda Ceremony for bride",
                                        "Sehra Bandi for groom",
                                        "Tilak ceremonies",
                                        "Punjabi folk music and dhol"
                                    ],
                                    color: "from-yellow-500 to-orange-500"
                                },
                                {
                                    title: "Western Influence",
                                    traditions: [
                                        "Pre-wedding family brunches",
                                        "Exchange of personalized gifts",
                                        "Modern photography sessions",
                                        "Fusion music and entertainment"
                                    ],
                                    color: "from-purple-500 to-pink-500"
                                }
                            ].map((variation, index) => (
                                <div key={index} className="text-center">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">{variation.title}</h4>
                                    <div className="space-y-2">
                                        {variation.traditions.map((tradition, tIndex) => (
                                            <p key={tIndex} className="text-gray-600 text-sm">{tradition}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
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
                        <div className="flex items-center justify-center mb-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight leading-tight">
                                Ideas to Make These{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Ceremonies Special</span>
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        {/* Décor Themes */}
                        <motion.div
                            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8"
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
                                    "Floral arches and puja backdrops",
                                    "Marigold and rose decorations"
                                ].map((theme, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm">{theme}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Music */}
                        <motion.div
                            className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8"
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
                                    "Soft instrumental background music",
                                    "Devotional songs and bhajans"
                                ].map((music, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm">{music}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Activities */}
                        <motion.div
                            className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 sm:p-8"
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
                                    "Traditional photo sessions",
                                    "Cultural performances"
                                ].map((activity, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm">{activity}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Food */}
                        <motion.div
                            className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 sm:p-8"
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
                                    "Traditional sweets and prasadam",
                                    "Sacred food offerings"
                                ].map((food, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 text-sm">{food}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Section - Bride & Groom Images */}
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
                                <span className="text-xs sm:text-sm font-medium text-gray-700">Sacred Ceremonies</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                                Our Bride & Groom{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
                                    Ceremony Portfolio
                                </span>
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2">
                                Beautiful moments from real bride and groom ceremonies we've planned and executed across Hyderabad
                            </p>
                        </motion.div>

                        {/* Bride Images Section */}
                        <motion.div
                            className="mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
                                    Bridal Ceremonies
                                </h3>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Sacred rituals celebrating the bride's journey into marriage
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                                {brideImages.map((image, index) => (
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
                                                <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-pink-200 to-red-200 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <Camera className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-500 mx-auto mb-2" />
                                                        <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">Bridal Ceremony</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Groom Images Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
                                    Groom Ceremonies
                                </h3>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Traditional rituals preparing the groom for his wedding day
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-center">
                                {groomImages.map((image, index) => (
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
                                            onClick={() => openLightbox(brideImages.length + index)}
                                        >
                                            {!imageLoadErrors.has(brideImages.length + index) ? (
                                                <img
                                                    src={image.url}
                                                    alt={image.alt}
                                                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                                    loading="lazy"
                                                    onError={() => handleImageError(brideImages.length + index)}
                                                />
                                            ) : (
                                                <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-teal-200 to-blue-200 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <Camera className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-500 mx-auto mb-2" />
                                                        <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">Groom Ceremony</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
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
                                whileHover={{ y: -5 }}
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
                                title: "Rituals Conducted with Accuracy",
                                description: "Every ceremony performed with devotion and traditional authenticity"
                            },
                            {
                                title: "Stress-Free Family Experience",
                                description: "Families can focus on blessings while we manage the complete flow"
                            },
                            {
                                title: "Traditional Yet Comfortable",
                                description: "Authentic ceremonies designed for comfort of all guests and participants"
                            },
                            {
                                title: "Heritage Moments Preserved",
                                description: "Professional documentation of these precious cultural traditions"
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
                                "We understand that these ceremonies are more than events - they're sacred moments that connect generations. That's why we handle every detail with the respect and care your traditions deserve."
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

                    {/* Image Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <p className="text-white text-center text-sm sm:text-base">
                            {allImages[selectedImage].title}
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