import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Cake, Palette, Gift, UtensilsCrossed, Sparkles, MapPin, Music, Star, ArrowRight } from 'lucide-react';
import QuoteModal from './QuoteGenerator/QuoteModal';
import TrustIndicators, { QuickTrustIndicators } from './TrustIndicators';

const services = [
  {
    id: 1,
    title: "Wedding Photography Hyderabad",
    description: "Capture every precious moment with Hyderabad's top wedding photographers and videographers who specialize in creating timeless memories across Gachibowli, Kondapur, and Jubilee Hills.",
    icon: Camera,
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Professional Equipment", "Candid & Posed Shots", "Same Day Editing", "Digital Gallery"],
    price: "Starting from ₹15,000"
  },
  {
    id: 2,
    title: "Wedding Cakes Hyderabad",
    description: "Delight your guests with Hyderabad's finest artisanal wedding cakes and desserts, crafted with love and designed to match your celebration's theme.",
    icon: Cake,
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Custom Designs", "Multiple Flavors", "Dietary Options", "Themed Decorations"],
    price: "Starting from ₹2,500"
  },
  {
    id: 3,
    title: "Event Decoration Hyderabad",
    description: "Transform any venue in Hyderabad into a magical setting with our creative decoration services that reflect your unique style and vision.",
    icon: Palette,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Theme-based Decor", "Floral Arrangements", "Lighting Setup", "Backdrop Design"],
    price: "Starting from ₹8,000"
  },
  {
    id: 4,
    title: "Return Gifts Hyderabad",
    description: "Show your appreciation with thoughtfully curated return gifts from Hyderabad's best vendors that your guests will treasure long after the celebration ends.",
    icon: Gift,
    image: "https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Personalized Items", "Bulk Packaging", "Custom Branding", "Eco-friendly Options"],
    price: "Starting from ₹50/piece"
  },
  {
    id: 5,
    title: "Catering Services Hyderabad",
    description: "Treat your guests to an unforgettable culinary experience with Hyderabad's diverse menu options and professional catering services including authentic Telangana cuisine.",
    icon: UtensilsCrossed,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Multi-cuisine Options", "Live Counters", "Dietary Accommodations", "Professional Staff"],
    price: "Starting from ₹350/plate"
  },
  {
    id: 6,
    title: "Bridal Makeup Hyderabad",
    description: "Look and feel your absolute best with Hyderabad's professional makeup artists and stylists who enhance your natural beauty for your special day.",
    icon: Sparkles,
    image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Bridal Makeup", "Hair Styling", "Saree Draping", "Touch-up Services"],
    price: "Starting from ₹5,000"
  },
  {
    id: 7,
    title: "Wedding Venues Hyderabad",
    description: "Find the perfect wedding venue in Hyderabad and let us handle all the setup details to create the ideal atmosphere for your celebration across top locations.",
    icon: MapPin,
    image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Venue Selection", "Layout Planning", "Equipment Setup", "Coordination"],
    price: "Starting from ₹10,000"
  },
  {
    id: 8,
    title: "DJ Services Hyderabad",
    description: "Keep your guests engaged and entertained with Hyderabad's best DJ services and wide range of entertainment options and interactive activities.",
    icon: Music,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
    features: ["Live Music", "DJ Services", "Games & Activities", "Cultural Performances"],
    price: "Starting from ₹8,000"
  }
];

const ServicesGrid: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleServiceQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Complete Event{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            As Hyderabad's premier event management company, we provide comprehensive services 
            to make every moment of your special day absolutely perfect across Gachibowli, Kondapur, and Jubilee Hills.
          </p>
          
          {/* Trust Indicators */}
          <QuickTrustIndicators className="mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional event service in Hyderabad`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <IconComponent className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-brand-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-primary hover:text-white transition-colors duration-300"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-primary">
                      {service.price}
                    </span>
                    <motion.button
                      onClick={() => handleServiceQuote(service.title)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-brand-primary hover:text-brand-primary-dark text-sm font-semibold"
                    >
                      Get Quote →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 bg-gradient-to-r from-brand-primary/10 to-brand-gold/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every celebration is unique. Let us create a personalized service package 
            that perfectly matches your vision and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => handleServiceQuote('Custom Package')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Custom Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-xl font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              View All Services
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </section>
  );
};

export default ServicesGrid;