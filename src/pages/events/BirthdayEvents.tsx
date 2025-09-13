import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Cake, Gift, Sparkles, Users, Heart, Star, CheckCircle } from 'lucide-react';

const BirthdayEvents: React.FC = () => {
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
              Birthday Events with D DAY EVENTO
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A birthday is not just another date on the calendar. It is the celebration of life, growth, and blessings.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="prose prose-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl mb-6">
                It's the one day in the year that belongs completely to you. Some birthdays are small, some are grand – but every birthday is special.
              </p>
              <p className="text-xl mb-6">
                Some Birthdays stand apart. The 1st birthday – the beginning of life's journey. The 60th birthday – the celebration of wisdom and legacy. Both deserve nothing less than a grand, unforgettable celebration.
              </p>
              <p className="text-xl mb-6">
                But birthdays are not only about milestones. Every year is different. As a child, it's about cartoons, balloons, games, and cake smashes. As a teen, it's music, lights, and friends. As an adult, it's style, elegance, or even a private dinner with closed ones.
              </p>
              <p className="text-xl font-semibold mb-6">
                The way we celebrate changes with age – but the feeling stays the same.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cake Section */}
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
              <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Cake className="w-12 h-12 text-brand-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Heart of Every Birthday
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                And yes – what's the heart of every birthday? The Cake.
              </p>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Without cake, there is no birthday. The cake cutting moment is a wholesome celebration moment when happiness peaks, and memories are locked in forever. Cake is the sweetest highlight of the day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Celebration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-12 h-12 text-brand-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Celebrating Together
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Birthdays bring together family, friends, colleagues, and well-wishers.
              </p>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Sometimes it's 20 people at home, sometimes it's 200+ guests in a hall. But no matter the size, one thing is certain: birthdays are about people and moments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* D DAY EVENTO Difference */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                This is where D DAY EVENTO steps in.
              </h2>
              <p className="text-2xl font-semibold text-brand-primary mb-8">
                We don't just plan birthdays – we create experiences.
              </p>
              
              <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Kids</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Customized themes and decor setups</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Colorful tables and vibrant decorations</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Entertainment with games, mascots, and music</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Milestone Birthdays</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Elegant and grand decor</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Family-style dining experiences</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>Sophisticated entertainment options</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Every Gathering</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Tailored food options from snack boxes to full cuisines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Fun stalls and activities for kids</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Complete event management from start to finish</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-xl font-semibold mt-12 text-gray-800">
                Our team makes sure the event flow is smooth – from décor to cake, from photography to entertainment, from guests walking in to the last goodbye. Nothing is missed. Nothing is left unplanned.
              </p>
              
              <p className="text-2xl font-bold mt-8 text-brand-primary">
                Because for us, birthdays are not just parties.
              </p>
              <p className="text-2xl font-bold text-gray-800">
                They are memories, milestones, and moments of life – celebrated once, remembered forever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
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
                Why Choose D DAY EVENTO for Birthdays?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                {[
                  {
                    icon: <Star className="w-6 h-6 text-brand-primary" />,
                    title: 'Specialized in Celebrations',
                    description: 'We specialize in birthdays – it\'s what we are most known for.'
                  },
                  {
                    icon: <Gift className="w-6 h-6 text-brand-primary" />,
                    title: 'Fully Customizable',
                    description: 'We customize every event – from small gatherings to milestone celebrations.'
                  },
                  {
                    icon: <Sparkles className="w-6 h-6 text-brand-primary" />,
                    title: 'End-to-End Service',
                    description: 'We handle everything – décor, food, entertainment, cake, photography, return gifts, music and fun activities.'
                  },
                  {
                    icon: <Heart className="w-6 h-6 text-brand-primary" />,
                    title: 'Unforgettable Experiences',
                    description: 'We make birthdays extraordinary – stress-free, memorable, and full of joy.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-xl mt-12 text-gray-700 max-w-3xl mx-auto">
                At D DAY EVENTO, every birthday – whether it's the first, the sixtieth, or anything in between – becomes a story worth telling for life.
              </p>
              
              <motion.div
                className="mt-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Plan Your Birthday With Us
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

export default BirthdayEvents;
