import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Lightbulb, 
  UtensilsCrossed, 
  Camera, 
  Music, 
  Gift,
  Heart,
  Users,
  CheckCircle
} from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Decor & Styling',
      description: 'Transform your venue with breathtaking decorations that tell your story',
      features: ['Flower Decor', 'Balloon Decor', 'Theme Styling', 'Centerpieces'],
      color: 'from-pink-500 to-rose-400',
      image: 'https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?w=400&h=250&fit=crop'
    },
    {
      icon: Lightbulb,
      title: 'Lighting & AV',
      description: 'Create the perfect ambiance with professional lighting and sound',
      features: ['Ambient Lighting', 'Stage Lighting', 'Screens & Projectors', 'Sound Systems'],
      color: 'from-yellow-500 to-orange-400',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=400&h=250&fit=crop'
    },
    {
      icon: UtensilsCrossed,
      title: 'Catering Services',
      description: 'Delight your guests with exquisite culinary experiences',
      features: ['South Indian', 'North Indian', 'Live Stalls', 'Dessert Counters'],
      color: 'from-green-500 to-emerald-400',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=400&h=250&fit=crop'
    },
    {
      icon: Camera,
      title: 'Photography & Video',
      description: 'Preserve your precious memories with stunning photography',
      features: ['Candid Photography', 'Drone Shots', 'Albums', 'Cinematic Videos'],
      color: 'from-blue-500 to-cyan-400',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=400&h=250&fit=crop'
    },
    {
      icon: Music,
      title: 'Entertainment',
      description: 'Keep your guests engaged with amazing entertainment',
      features: ['Live Music', 'Artists & Performers', 'Games & Activities', 'DJ Services'],
      color: 'from-purple-500 to-indigo-400',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=400&h=250&fit=crop'
    },
    {
      icon: Gift,
      title: 'Special Add-ons',
      description: 'Thoughtful extras that make your celebration truly special',
      features: ['Custom Cakes', 'Gift Arrangements', 'Makeup Services', 'Tent House'],
      color: 'from-red-500 to-pink-400',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-brand-accent/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 rounded-full px-6 py-3 mb-6"
          >
            <CheckCircle className="text-brand-primary" size={20} />
            <span className="text-brand-primary font-semibold">Complete Solutions</span>
          </motion.div>
          
          <h2 className="text-display-md md:text-display-lg font-bold text-gray-800 mb-8 font-display">
            Complete Event Solutions
          </h2>
          <p className="text-body-lg md:text-heading-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to execution, we provide 
            <span className="text-brand-primary font-semibold"> everything you need</span> to create extraordinary celebrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-full bg-gradient-to-r ${service.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon size={24} />
                  </div>
                  
                  {/* Title overlay */}
                  <h3 className="absolute bottom-4 right-4 text-white font-bold text-lg font-display">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-body-md">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
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
                        <span className="text-gray-700 font-medium text-body-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border border-white/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/10 rounded-full"
              />
            </div>
            
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={56} className="mx-auto mb-6 text-brand-gold" />
              </motion.div>
              
              <h3 className="text-heading-xl md:text-display-sm font-bold mb-6 font-display">
                Ready to Plan Your Perfect Event?
              </h3>
              <p className="text-body-lg md:text-heading-md mb-8 text-white/90 max-w-2xl mx-auto">
                Let's discuss your vision and create something magical together. 
                <span className="text-brand-gold font-semibold"> Your dream event awaits!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg"
                >
                  Get Custom Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-primary transition-all duration-300"
                >
                  <Users size={20} className="inline mr-2" />
                  Talk to Expert
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
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