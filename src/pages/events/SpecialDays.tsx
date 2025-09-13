import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Heart, Gift, Sparkles, Calendar, Award, CheckCircle } from 'lucide-react';

const SpecialDays: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Special Days by D DAY EVENTO
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Some occasions are small in size but carry the biggest emotions.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At D DAY EVENTO, we are not just planners, we are Hyderabad's #1 Event Service Providers — giving you the backbone services that turn a simple day into a lasting memory.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Power Behind Your Special Day */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                The Power Behind Your Special Day
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Heart className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Anniversaries',
                    description: 'Elegant flowers, warm lights, and dining that feels special.'
                  },
                  {
                    icon: <Gift className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Kitty Parties',
                    description: 'Stylish setups, playful décor, and seamless service.'
                  },
                  {
                    icon: <Sparkles className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'House Parties',
                    description: 'Music, décor, catering — everything delivered and arranged.'
                  },
                  {
                    icon: <Calendar className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Surprise Parties',
                    description: 'Silent setup, precise timing, and flawless execution.'
                  },
                  {
                    icon: <Award className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Retirement Day',
                    description: 'Graceful décor, dignified service, and a celebration of respect.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-center">
                      {item.icon}
                      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose D DAY EVENTO Services? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Why Choose D DAY EVENTO Services?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  'Hyderabad\'s #1 Service Provider – Décor, catering, photography, entertainment & more.',
                  'End-to-End Execution – You enjoy, we handle every detail.',
                  'Detail Perfected – Every flower, every dish, every light in place.',
                  'Proven Experience – 4+ years, trusted by hundreds of families & communities.'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-white p-6 rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-2xl font-semibold text-gray-800 mb-12 max-w-3xl mx-auto">
                We don't just plan your day, we power it with services that speak for themselves.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Plan Your Special Day With Us
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialDays;
