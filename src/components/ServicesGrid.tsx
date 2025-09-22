import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Cake, Palette, Gift, UtensilsCrossed, Sparkles, MapPin, Music, ArrowRight } from 'lucide-react';

import { cn } from '../lib/utils';

const services = [
  {
    id: 1,
    title: "Photography & Videography",
    description: "Capture every precious moment with Hyderabad's top wedding photographers and videographers who specialize in creating timeless memories with professional equipment and artistic vision.",
    icon: Camera,
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Professional Equipment", "Candid & Posed Shots", "Same Day Editing", "Digital Gallery"],
    slug: "photography-videography"
  },
  {
    id: 2,
    title: "Cakes",
    description: "Delight your guests with Hyderabad's finest artisanal wedding cakes and desserts, crafted with love and designed to match your celebration's theme perfectly.",
    icon: Cake,
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Custom Designs", "Multiple Flavors", "Dietary Options", "Themed Decorations"],
    slug: "cakes"
  },
  {
    id: 3,
    title: "Decoration",
    description: "Transform any venue in Hyderabad into a magical setting with our creative decoration services that reflect your unique style and vision with stunning arrangements.",
    icon: Palette,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Theme-based Decor", "Floral Arrangements", "Lighting Setup", "Backdrop Design"],
    slug: "decoration"
  },
  {
    id: 4,
    title: "Return Gifts",
    description: "Show your appreciation with thoughtfully curated return gifts from Hyderabad's best vendors that your guests will treasure long after the celebration ends.",
    icon: Gift,
    image: "https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Personalized Items", "Bulk Packaging", "Custom Branding", "Eco-friendly Options"],
    slug: "return-gifts"
  },
  {
    id: 5,
    title: "Food & Catering",
    description: "Treat your guests to an unforgettable culinary experience with Hyderabad's diverse menu options and professional catering services including authentic Telangana cuisine.",
    icon: UtensilsCrossed,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Multi-cuisine Options", "Live Counters", "Dietary Accommodations", "Professional Staff"],
    slug: "food-catering"
  },
  {
    id: 6,
    title: "Makeup & Styling",
    description: "Look and feel your absolute best with Hyderabad's professional makeup artists and stylists who enhance your natural beauty for your special day with expert techniques.",
    icon: Sparkles,
    image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Bridal Makeup", "Hair Styling", "Saree Draping", "Touch-up Services"],
    slug: "makeup-styling"
  },
  {
    id: 7,
    title: "Venue Booking & Setup",
    description: "Find the perfect wedding venue in Hyderabad and let us handle all the setup details to create the ideal atmosphere for your celebration across premium locations.",
    icon: MapPin,
    image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Venue Selection", "Layout Planning", "Equipment Setup", "Full Coordination"],
    slug: "venue-booking-setup"
  },
  {
    id: 8,
    title: "Entertainment & Activities",
    description: "Keep your guests engaged and entertained with Hyderabad's best DJ services and wide range of entertainment options including live performances and interactive activities.",
    icon: Music,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Live Music", "DJ Services", "Games & Activities", "Cultural Performances"],
    slug: "entertainment-activities"
  }
];

const ServicesGrid: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(services[0].slug);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progressKey, setProgressKey] = useState<number>(0);
  const autoPlayRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const activeServiceData = services.find(service => service.slug === activeService);

  // Auto-play functionality - simplified
  const startAutoPlay = (currentServiceSlug: string) => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);

    autoPlayRef.current = window.setTimeout(() => {
      // Find next service based on the current service at timeout creation
      const currentIndex = services.findIndex(service => service.slug === currentServiceSlug);
      const nextIndex = (currentIndex + 1) % services.length;
      const nextService = services[nextIndex];

      // Switch to next service
      setProgressKey(prev => prev + 1);
      setActiveService(nextService.slug);
    }, 5000);
  };

  const handleTabSwitch = (serviceSlug: string) => {
    if (serviceSlug !== activeService) {
      // Clear any existing timeout
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);

      // Reset progress animation and switch immediately
      setProgressKey(prev => prev + 1);
      setActiveService(serviceSlug);
    }
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // Stop auto-play when section goes out of view
          if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start slightly before the section is fully visible
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    };
  }, []);

  // Initialize auto-play when conditions are met
  useEffect(() => {
    if (isInView && !isPaused) {
      // Clear any existing timeout first
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
      // Start new auto-play cycle with current service
      startAutoPlay(activeService);
    } else {
      // Clear timeout if conditions are not met
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    };
  }, [activeService, isInView, isPaused]);

  // Pause auto-play on hover, resume on leave
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Complete Event{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            As Hyderabad's premier event management company, we provide comprehensive services
            to make every moment of your special day absolutely perfect across Gachibowli, Kondapur, and Jubilee Hills.
          </p>


        </div>

        {/* Animated Tabs Interface */}
        <div
          className="w-full max-w-6xl mx-auto flex flex-col gap-y-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >


          {/* Service Tabs */}
          <div className="flex gap-2 flex-wrap bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-gray-200/50">
            {services.map((service) => (
              <button
                key={service.slug}
                onClick={() => handleTabSwitch(service.slug)}
                className={cn(
                  "relative px-4 py-3 text-sm font-semibold rounded-xl outline-none transition-all duration-300",
                  activeService === service.slug
                    ? "text-white"
                    : "text-gray-600 hover:text-brand-primary"
                )}
              >
                {activeService === service.slug && (
                  <motion.div
                    layoutId="active-service-tab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary shadow-lg backdrop-blur-sm rounded-xl"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 text-xs sm:text-sm">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Service Content Area */}
          <div className="relative p-6 bg-white/90 shadow-lg backdrop-blur-sm rounded-2xl border border-gray-200/50 min-h-96">
            {/* Service Content */}
            {activeServiceData && (
              <motion.div
                key={activeService}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  filter: "blur(0px)"
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)"
                }}
                transition={{
                  duration: 0.5,
                  ease: "circInOut",
                  type: "spring",
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full"
              >
                {/* Service Image */}
                <div className="relative">
                  <img
                    src={activeServiceData.image}
                    alt={`${activeServiceData.title} - Professional event service in Hyderabad`}
                    className="rounded-2xl w-full h-80 lg:h-96 object-cover shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-200/50"
                  />
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-gray-200/50">
                    <activeServiceData.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex flex-col gap-y-4 justify-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {activeServiceData.title}
                  </h2>

                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    {activeServiceData.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {activeServiceData.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary border border-brand-primary/20 backdrop-blur-sm shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Know More Button */}
                  <a
                    href={`/services/${activeServiceData.slug}`}
                    className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-fit mt-4"
                  >
                    <span className="mr-2">Know More</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* Continuous Auto-play Progress Slider */}
            {isInView && !isPaused && (
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200/30 overflow-hidden" style={{ borderRadius: '0 0 16px 16px' }}>
                <motion.div
                  key={progressKey}
                  className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary shadow-sm"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: 0
                  }}
                  style={{ borderRadius: '0 0 16px 0' }}
                />
                {/* Subtle glow effect */}
                <motion.div
                  key={`glow-${progressKey}`}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60"
                  initial={{ width: "0%", x: "0%" }}
                  animate={{ width: "100%", x: "0%" }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: 0
                  }}
                  style={{ borderRadius: '0 0 16px 0' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 rounded-3xl p-12 border border-brand-primary/10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Need a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Custom Package?
              </span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every celebration is unique. Let us create a personalized service package
              that perfectly matches your vision and brings your dream event to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>

              <a
                href="/services"
                className="border-2 border-brand-primary text-brand-primary px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;