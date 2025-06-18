import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Building, GraduationCap, Users, ArrowRight } from 'lucide-react';

const EventCategories: React.FC = () => {
  const categories = [
    {
      icon: Heart,
      title: 'Social & Milestone Events',
      description: 'Weddings, birthdays, anniversaries, and life celebrations',
      events: ['Weddings', 'Birthdays', 'Anniversaries', 'Baby Showers', 'Naming Ceremonies'],
      color: 'from-pink-500 to-rose-400',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Professional gatherings and business celebrations',
      events: ['Product Launches', 'Conferences', 'Team Building', 'Award Ceremonies'],
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: GraduationCap,
      title: 'Educational & Sports Events',
      description: 'Academic achievements and sporting celebrations',
      events: ['Graduations', 'College Fests', 'Sports Events', 'Academic Awards'],
      color: 'from-green-500 to-emerald-400',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Public & Community Events',
      description: 'Festivals, openings, and community gatherings',
      events: ['Festival Celebrations', 'Shop Openings', 'Community Gatherings', 'Cultural Events'],
      color: 'from-purple-500 to-indigo-400',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-dancing">
            Our Event Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we specialize in creating memorable experiences across all event categories
          </p>
        </motion.div>

        {/* Centered Cards Container */}
        <div className="flex justify-center">
          <motion.div 
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide max-w-full"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                whileHover={{ y: -10 }}
              >
                <div className={`${category.bgColor} rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50`}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-dancing">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Event List */}
                  <div className="space-y-2 mb-6">
                    {category.events.map((event, eventIndex) => (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (eventIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-sm font-medium">{event}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-gray-800 font-semibold group-hover:text-brand-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Explore Services</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {categories.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCategories;