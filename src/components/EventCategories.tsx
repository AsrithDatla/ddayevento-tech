import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Building, GraduationCap, Users, ArrowRight, Sparkles } from 'lucide-react';

const EventCategories: React.FC = () => {
  const categories = [
    {
      icon: Heart,
      title: 'Social & Milestone Events',
      description: 'Celebrating life\'s most precious moments with warmth and elegance',
      events: ['Weddings', 'Birthdays', 'Anniversaries', 'Baby Showers', 'Naming Ceremonies'],
      color: 'from-pink-500 to-rose-400',
      bgColor: 'bg-pink-50',
      image: 'https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?w=400&h=300&fit=crop'
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Elevating your business events with professional excellence',
      events: ['Product Launches', 'Conferences', 'Team Building', 'Award Ceremonies'],
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=400&h=300&fit=crop'
    },
    {
      icon: GraduationCap,
      title: 'Educational & Sports Events',
      description: 'Honoring achievements and celebrating success stories',
      events: ['Graduations', 'College Fests', 'Sports Events', 'Academic Awards'],
      color: 'from-green-500 to-emerald-400',
      bgColor: 'bg-green-50',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=400&h=300&fit=crop'
    },
    {
      icon: Users,
      title: 'Public & Community Events',
      description: 'Bringing communities together through memorable celebrations',
      events: ['Festival Celebrations', 'Shop Openings', 'Community Gatherings', 'Cultural Events'],
      color: 'from-purple-500 to-indigo-400',
      bgColor: 'bg-purple-50',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-brand-accent/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-primary/10 rounded-full"
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
            className="inline-flex items-center gap-2 bg-brand-accent/30 rounded-full px-6 py-3 mb-6"
          >
            <Sparkles className="text-brand-primary" size={20} />
            <span className="text-brand-primary font-semibold">Our Expertise</span>
          </motion.div>
          
          <h2 className="text-display-md md:text-display-lg font-bold text-gray-800 mb-8 font-display">
            Our Event Expertise
          </h2>
          <p className="text-body-lg md:text-heading-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate family gatherings to grand celebrations, we specialize in creating 
            <span className="text-brand-primary font-semibold"> memorable experiences</span> that reflect your unique story
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              whileHover={{ y: -12 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${category.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-heading-md font-bold text-gray-800 mb-4 font-display group-hover:text-brand-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-body-md">
                    {category.description}
                  </p>

                  {/* Event List */}
                  <div className="space-y-3 mb-6">
                    {category.events.slice(0, 3).map((event, eventIndex) => (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (eventIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0`} />
                        <span className="text-sm font-medium">{event}</span>
                      </motion.div>
                    ))}
                    {category.events.length > 3 && (
                      <div className="text-sm text-gray-500 font-medium">
                        +{category.events.length - 3} more...
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-gray-800 font-semibold group-hover:text-brand-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-body-md">Explore Services</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;