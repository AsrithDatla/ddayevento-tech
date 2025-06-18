import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Lightbulb, 
  UtensilsCrossed, 
  Camera, 
  Music, 
  Gift,
  Sparkles,
  Heart
} from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Decor & Styling',
      description: 'Beautiful flower arrangements, stunning balloon decor, and elegant styling',
      features: ['Flower Decor', 'Balloon Decor', 'Theme Styling', 'Centerpieces'],
      color: 'from-pink-500 to-rose-400'
    },
    {
      icon: Lightbulb,
      title: 'Lighting & AV',
      description: 'Professional lighting design and audio-visual equipment',
      features: ['Ambient Lighting', 'Stage Lighting', 'Screens & Projectors', 'Sound Systems'],
      color: 'from-yellow-500 to-orange-400'
    },
    {
      icon: UtensilsCrossed,
      title: 'Catering Services',
      description: 'Delicious cuisines from traditional to contemporary',
      features: ['South Indian', 'North Indian', 'Live Stalls', 'Dessert Counters'],
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Camera,
      title: 'Photography & Video',
      description: 'Capture every precious moment with professional quality',
      features: ['Candid Photography', 'Drone Shots', 'Albums', 'Cinematic Videos'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Music,
      title: 'Entertainment',
      description: 'Live performances, music, and interactive entertainment',
      features: ['Live Music', 'Artists & Performers', 'Games & Activities', 'DJ Services'],
      color: 'from-purple-500 to-indigo-400'
    },
    {
      icon: Gift,
      title: 'Special Add-ons',
      description: 'Extra touches to make your event unforgettable',
      features: ['Custom Cakes', 'Gift Arrangements', 'Makeup Services', 'Tent House'],
      color: 'from-red-500 to-pink-400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-dancing">
            Complete Event Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to execution, we provide all the services you need to create extraordinary events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-dancing">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center gap-2 text-brand-primary font-semibold">
                    <Sparkles size={16} />
                    <span>Learn More</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
            <Heart size={48} className="mx-auto mb-4 text-brand-gold" />
            <h3 className="text-3xl font-bold mb-4 font-dancing">Ready to Plan Your Perfect Event?</h3>
            <p className="text-xl mb-6 text-white/90">
              Let's discuss your vision and create something magical together
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-gold hover:text-white transition-all duration-300"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;