import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EngagementCeremony: React.FC = () => {
    const { pathname } = useLocation();

    // Scroll to top when pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Engagement ceremony planning Hyderabad - D Day Evento"
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
                            Engagement Ceremony{' '}
                            <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                                Planning in Hyderabad
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
                        >
                            The beginning of forever starts with the perfect engagement ceremony
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                                Plan Your Engagement
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Engagement Ceremonies */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 sm:mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Perfect Engagement Ceremonies
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            The engagement ceremony marks the beautiful beginning of your journey together. We create intimate and memorable celebrations that honor tradition while reflecting your unique love story.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Beautiful engagement ceremony setup"
                                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                            />
                        </motion.div>
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Traditional Ring Ceremony
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our engagement ceremonies blend traditional rituals with modern elegance. From the sacred ring exchange to the blessing ceremonies, we ensure every moment is captured beautifully and celebrated with your loved ones.
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Traditional ring exchange ceremony
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Beautiful floral decorations and mandap setup
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Professional photography and videography
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Customized catering and refreshments
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4 sm:mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Our Engagement Services
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Complete engagement ceremony planning with attention to every detail
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                title: "Venue Selection",
                                description: "Beautiful venues perfect for intimate engagement ceremonies",
                                image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Mandap & Decor",
                                description: "Traditional mandap setup with fresh flowers and elegant decorations",
                                image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Photography",
                                description: "Professional photographers to capture your special moments",
                                image: "https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Catering Services",
                                description: "Delicious traditional and modern cuisine for your guests",
                                image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Music & Entertainment",
                                description: "Traditional music and entertainment for the ceremony",
                                image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Guest Coordination",
                                description: "Complete guest management and coordination services",
                                image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4 sm:mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            Our Planning Process
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            From initial consultation to the final celebration, we handle every detail
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            {
                                step: "01",
                                title: "Consultation",
                                description: "Understanding your vision and requirements for the perfect engagement ceremony"
                            },
                            {
                                step: "02",
                                title: "Planning",
                                description: "Detailed planning including venue, decor, catering, and timeline coordination"
                            },
                            {
                                step: "03",
                                title: "Coordination",
                                description: "Managing all vendors and ensuring seamless execution of your ceremony"
                            },
                            {
                                step: "04",
                                title: "Celebration",
                                description: "Your perfect engagement ceremony executed flawlessly while you enjoy the moment"
                            }
                        ].map((process, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {process.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {process.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {process.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-brand-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 sm:mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Ready to Plan Your Engagement?
                    </motion.h2>
                    <motion.p
                        className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Let us create the perfect beginning to your forever story with a beautiful engagement ceremony
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <button className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                            Get Free Consultation
                        </button>
                        <Link
                            to="/events/wedding-events"
                            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold rounded-lg transition-all duration-300"
                        >
                            View All Wedding Events
                            <ArrowRight className="ml-2" size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default EngagementCeremony;