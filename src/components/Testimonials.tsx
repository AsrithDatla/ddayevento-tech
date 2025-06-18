import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-dancing">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families and organizations who trusted us with their special moments
          </p>
        </motion.div>

        {/* Scrollable Testimonials */}
        <div className="relative">
          <motion.div 
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote size={32} className="text-brand-primary/30" />
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/30"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 font-dancing">{testimonial.name}</h4>
                      <p className="text-sm text-brand-primary">{testimonial.event}</p>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-brand-primary to-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-500 fill-current" />
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-800 font-dancing">4.9</div>
            <div className="text-gray-600">
              Based on {testimonialsData.length}+ reviews
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;