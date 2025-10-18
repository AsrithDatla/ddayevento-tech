import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Calendar, 
  Palette, 
  Camera, 
  Music, 
  ChefHat, 
  Sparkles, 
  Gift, 
  Tent, 
  MapPin, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// Apple-inspired service data with icons and descriptions
const services = [
  {
    id: 'planning-management',
    title: 'Event Planning & Management',
    icon: Calendar,
    description: 'Complete event orchestration from concept to execution',
    features: ['Timeline Management', 'Vendor Coordination', 'Budget Planning', 'Day-of Coordination'],
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'decoration-design',
    title: 'Decoration & Design',
    icon: Palette,
    description: 'Transforming spaces into magical experiences',
    features: ['Theme Design', 'Floral Arrangements', 'Lighting Design', 'Stage & Backdrop'],
    color: 'from-purple-500 to-purple-600',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'photo-video',
    title: 'Photography & Videography',
    icon: Camera,
    description: 'Capturing memories that last forever',
    features: ['Wedding Photography', 'Event Videography', 'Drone Photography', 'Photo Booth'],
    color: 'from-green-500 to-green-600',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'entertainment-activities',
    title: 'Entertainment & Activities',
    icon: Music,
    description: 'Engaging experiences for all ages',
    features: ['Live Performances', 'DJ & Sound', 'Games & Activities', 'Cultural Shows'],
    color: 'from-red-500 to-red-600',
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'food-catering',
    title: 'Food & Catering',
    icon: ChefHat,
    description: 'Culinary excellence for every palate',
    features: ['Multi-Cuisine Catering', 'Traditional Meals', 'Live Counters', 'Dessert Stations'],
    color: 'from-orange-500 to-orange-600',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'makeup-styling',
    title: 'Makeup & Styling',
    icon: Sparkles,
    description: 'Professional beauty and styling services',
    features: ['Bridal Makeup', 'Hair Styling', 'Mehendi Artists', 'Grooming Services'],
    color: 'from-pink-500 to-pink-600',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'cakes-confectionery',
    title: 'Cakes & Confectionery',
    icon: Gift,
    description: 'Custom cakes and sweet treats',
    features: ['Custom Wedding Cakes', 'Birthday Cakes', 'Dessert Tables', 'Traditional Sweets'],
    color: 'from-yellow-500 to-yellow-600',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'return-gifts',
    title: 'Return Gifts & Souvenirs',
    icon: Gift,
    description: 'Memorable keepsakes for your guests',
    features: ['Personalized Gifts', 'Traditional Gifts', 'Eco-Friendly Options', 'Luxury Hampers'],
    color: 'from-indigo-500 to-indigo-600',
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'rentals',
    title: 'Tent House Materials & Rentals',
    icon: Tent,
    description: 'Complete event infrastructure solutions',
    features: ['Tent & Canopy', 'Furniture Rental', 'Audio Visual Equipment', 'Lighting Equipment'],
    color: 'from-teal-500 to-teal-600',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'venue-booking',
    title: 'Venue Booking & Setup',
    icon: MapPin,
    description: 'Perfect locations for perfect events',
    features: ['Premium Venues', 'Outdoor Locations', 'Banquet Halls', 'Destination Venues'],
    color: 'from-cyan-500 to-cyan-600',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'specialized-services',
    title: 'Specialized Services',
    icon: Star,
    description: 'Unique offerings for extraordinary events',
    features: ['Destination Weddings', 'Corporate Events', 'Cultural Festivals', 'Luxury Experiences'],
    color: 'from-violet-500 to-violet-600',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const ServicesPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  
  // Apple-inspired parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero Section - Apple-inspired */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-secondary/10 to-transparent rounded-full blur-3xl" />
        
        <motion.div 
          style={{ y: headerY }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-5 h-5 text-brand-primary" />
            <span className="text-sm font-medium text-gray-700">Complete Event Solutions</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 tracking-tight"
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
              Services
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12"
          >
            From intimate gatherings to grand celebrations, we provide comprehensive event solutions 
            that bring your vision to life with precision and creativity.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid - Apple Card Design */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  isActive={activeService === service.id}
                  onHover={() => setActiveService(service.id)}
                  onLeave={() => setActiveService(null)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Ready to Create Something Amazing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss your event vision and create an unforgettable experience together.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

// Service Card Component with Apple-inspired design
interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isActive, onHover, onLeave }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const IconComponent = service.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.4 }
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group cursor-pointer"
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/30 hover:border-brand-primary/20 h-full">
        {/* Service Image */}
        <div className="relative overflow-hidden rounded-2xl mb-6 h-48">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Icon Overlay */}
          <div className={`absolute top-4 left-4 p-3 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.1) }}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-4"
          >
            <button className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all duration-300">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;