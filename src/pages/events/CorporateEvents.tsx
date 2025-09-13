import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, Award, Calendar, Mic, Gift, Star, CheckCircle, Lightbulb, Coffee } from 'lucide-react';

const CorporateEvents: React.FC = () => {
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
              Corporate Events with D DAY EVENTO
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional events that connect, collaborate, celebrate, and grow your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What Are Corporate Events? */}
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
              <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Briefcase className="w-12 h-12 text-brand-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Are Corporate Events?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Corporate events are more than just gatherings. They are the face of your brand, the pulse of your people, and the bridge to your clients and partners.
              </p>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div 
              className="bg-gray-100 rounded-xl h-64 md:h-96 mb-16 flex items-center justify-center text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              [Corporate Event Image]
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Are They Important? */}
      <section className="py-20 bg-gray-50">
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
                Why Are They Important?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Users className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Team Building',
                    description: 'Strengthen team spirit and loyalty.'
                  },
                  {
                    icon: <Award className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Celebration',
                    description: 'Celebrate milestones, achievements, and success.'
                  },
                  {
                    icon: <Briefcase className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Business Growth',
                    description: 'Impress clients, investors, and business partners.'
                  },
                  {
                    icon: <Star className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Brand Image',
                    description: 'Build and showcase a powerful brand image.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
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

      {/* Types of Corporate Events */}
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
                Types of Corporate Events We Handle
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Mic className="w-6 h-6 mr-3 text-brand-primary" />, text: 'Conferences & Seminars' },
                  { icon: <Gift className="w-6 h-6 mr-3 text-brand-primary" />, text: 'Product Launches' },
                  { icon: <Award className="w-6 h-6 mr-3 text-brand-primary" />, text: 'Annual Day Celebrations' },
                  { icon: <Star className="w-6 h-6 mr-3 text-brand-primary" />, text: 'Award Ceremonies' },
                  { icon: <Users className="w-6 h-6 mr-3 text-brand-primary" />, text: 'Team Building Activities' },
                  { icon: <Calendar className="w-6 h-6 mr-3 text-brand-primary" />, text: 'Festive Parties & Cultural Programs' },
                  { icon: <Briefcase className="w-6 h-6 mr-3 text-brand-primary" />, text: 'Networking Events & Business Meets' },
                  { icon: <Coffee className="w-6 h-6 mr-3 text-brand-primary" />, text: 'Gala Dinners & Cocktail Nights' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.icon}
                    <span className="text-gray-800">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Corporate Event Process */}
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
                The Corporate Event Process
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['Planning', 'Concept', 'Execution', 'Guest Experience', 'Closing'].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <span className="mx-2 text-lg font-medium text-gray-700">{step}</span>
                    {index < 4 && (
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <p className="text-xl text-gray-700">
                We manage it all with precision, professionalism, and perfection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How D DAY EVENTO Helps You */}
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
                How D DAY EVENTO Helps You
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'End-to-End Planning – invites, schedules, logistics, and flow.',
                  'Venue Management – right place, right vibe.',
                  'Décor & Theme Design – formal, classy, impactful.',
                  'Audio-Visual Setup – lights, sound, presentations, LED screens.',
                  'Food & Catering – elegant menus tailored for professionals.',
                  'Guest Management – smooth, organized, welcoming.',
                  'Entertainment & Activities – artists, speakers, team-building activities.',
                  'Photography & Videography – capture every moment with finesse.'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-gray-50 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose D DAY EVENTO */}
      <section className="py-20 bg-gray-50">
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
                Why Corporates Choose D DAY EVENTO
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Briefcase className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Professionalism First',
                    description: 'We know how businesses work and what they expect.'
                  },
                  {
                    icon: <Calendar className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Precision Planning',
                    description: 'Every detail on paper, no surprises, no delays.'
                  },
                  {
                    icon: <Lightbulb className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Creative Edge',
                    description: 'Fresh ideas, unique experiences, all within your brand identity.'
                  },
                  {
                    icon: <CheckCircle className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Reliable Execution',
                    description: 'On time, every time.'
                  },
                  {
                    icon: <Users className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Strong Vendor Network',
                    description: 'Venues, décor, catering, AV – all under one roof.'
                  },
                  {
                    icon: <Star className="w-8 h-8 text-brand-primary mb-4" />,
                    title: 'Brand Impact',
                    description: 'Every guest walks away impressed.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
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
              
              <p className="text-xl font-semibold mt-12 text-gray-800">
                Trusted by Many – From startups to global firms, we've delivered events that matter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
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
                What You Get With D DAY EVENTO
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  '✅ A flawless, stress-free event',
                  '✅ Professional experience for every guest',
                  '✅ A strong impression on clients, employees, and partners',
                  '✅ An event that reflects your brand\'s strength and values'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center bg-gray-50 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-2xl font-bold text-gray-900 mb-8">
                At D DAY EVENTO – We don't just manage corporate events.
              </p>
              <p className="text-2xl font-bold text-brand-primary mb-12">
                We create experiences that speak business, build relationships, and elevate brands.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Plan Your Corporate Event With Us
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

export default CorporateEvents;
