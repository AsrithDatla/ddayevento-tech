import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart, Users } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-40 h-40 border border-brand-primary/10 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-32 h-32 border border-brand-gold/20 rounded-full"
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
            className="inline-flex items-center gap-2 bg-brand-secondary/10 rounded-full px-6 py-3 mb-6"
          >
            <Heart className="text-brand-secondary" size={20} />
            <span className="text-brand-secondary font-semibold">Client Love</span>
          </motion.div>
          
          <h2 className="text-display-md md:text-display-lg font-bold text-gray-800 mb-8 font-display">
            What Our Clients Say
          </h2>
          <p className="text-body-lg md:text-heading-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the 
            <span className="text-brand-primary font-semibold"> families and organizations</span> who trusted us with their special moments
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-bl-full" />
                
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6 relative">
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Quote size={36} className="text-brand-primary/40" />
                  </motion.div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                      >
                        <Star size={18} className="text-yellow-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-8 italic text-body-md relative">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 relative">
                  <div className="relative">
                    <motion.img
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-3 border-brand-gold/50 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-display text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-brand-primary font-medium">{testimonial.event}</p>
                  </div>
                </div>

                {/* Decorative Element */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-primary to-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star size={24} className="text-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </div>
              <div className="text-display-sm font-bold text-gray-800 font-display">4.9</div>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-brand-primary" />
                <span className="font-medium">Based on {testimonialsData.length}+ reviews</span>
              </div>
            </div>
            
            <p className="text-body-lg text-gray-600 mt-4">
              <span className="text-brand-primary font-semibold">400+ happy families</span> have trusted us with their celebrations
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300"
            >
              Read All Reviews
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;