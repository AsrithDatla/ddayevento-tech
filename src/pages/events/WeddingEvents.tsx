import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, Users, Heart, Gift, Music, Camera, Sparkles } from 'lucide-react';

const WeddingEvents: React.FC = () => {
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
              💍 Your Wedding. Your Story. Perfectly Executed.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A wedding is the beginning of a new life. It is the union of two people, two families, and two worlds.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Plan Your Wedding With Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is a Wedding? */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is a Wedding?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    icon: <Heart className="w-10 h-10 text-brand-primary mb-4" />,
                    text: 'The union of two people and two families.'
                  },
                  {
                    icon: <Users className="w-10 h-10 text-brand-primary mb-4" />,
                    text: 'The start of a new journey and responsibility.'
                  },
                  {
                    icon: <Heart className="w-10 h-10 text-brand-primary mb-4" />,
                    text: 'More than rituals – it is love, values, and tradition.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-center">
                      {item.icon}
                      <p className="text-lg text-gray-700 mt-4">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Do We Celebrate? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Do We Celebrate?
              </h2>
              <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                A wedding is life's biggest milestone, celebrating love, tradition, and the start of a beautiful journey together.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    icon: <Gift className="w-10 h-10 text-brand-primary mb-4" />,
                    title: 'Honoring Traditions',
                    text: 'Celebrating cultural and family traditions that have been passed down through generations.'
                  },
                  {
                    icon: <Heart className="w-10 h-10 text-brand-primary mb-4" />,
                    title: 'Celebrating Love',
                    text: 'Marking the beautiful union of two people in love, ready to start their life together.'
                  },
                  {
                    icon: <Users className="w-10 h-10 text-brand-primary mb-4" />,
                    title: 'Uniting Families',
                    text: 'Bringing together families and friends to celebrate this special bond.'
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
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wedding Events & Days */}
      <section className="py-20 bg-white">
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
                Wedding Events & Days
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Heart className="w-8 h-8 mr-3 text-brand-primary" />, text: 'Engagement' },
                  { icon: <Users className="w-8 h-8 mr-3 text-brand-primary" />, text: 'Bride & Groom Traditional Ceremonies' },
                  { icon: <Sparkles className="w-8 h-8 mr-3 text-brand-primary" />, text: 'Haldi & Mehendi' },
                  { icon: <Music className="w-8 h-8 mr-3 text-brand-primary" />, text: 'Sangeet / Cocktail / Bachelors Party' },
                  { icon: <Heart className="w-8 h-8 mr-3 text-brand-primary" />, text: 'Wedding Ceremony' },
                  { icon: <Camera className="w-8 h-8 mr-3 text-brand-primary" />, text: 'Reception / Bharath' }
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
              
              <p className="text-gray-500 mt-8 italic">
                (There can be more rituals and traditions which depend on each culture, but every moment matters.)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How D DAY EVENTO Helps */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How D DAY EVENTO Helps
              </h2>
              
              <div className="mt-12 space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Complete Wedding Management</h3>
                  <p className="text-gray-600">
                    We take full control of your wedding process, from initial planning to the final send-off.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Vendor Management',
                    'Décor & Styling',
                    'Catering Coordination',
                    'Music & Entertainment',
                    'Guest Management',
                    'Logistics Planning'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div className="bg-brand-primary/5 p-6 rounded-xl border border-brand-primary/10">
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">Guest Service Team</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Client handling & coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Detailed planning & scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Documentation & paperwork</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-brand-primary/5 p-6 rounded-xl border border-brand-primary/10">
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">Event Task Force</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>On-ground execution</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Venue setup & decoration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>Guest coordination</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
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
                What You Get
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                        icon: '✅',
                        title: 'Stress-Free Experience',
                        description: 'A wedding with no chaos, just beautiful moments.'
                      },
                      {
                        icon: '✅',
                        title: 'Happy Guests',
                        description: 'Well-served and well-managed guest experience.'
                      },
                      {
                        icon: '✅',
                        title: 'Relaxed Families',
                        description: 'Enjoy the event, not run it.'
                      },
                      {
                        icon: '✅',
                        title: 'Unforgettable Memories',
                        description: 'A wedding that is organized, grand, and remembered forever.'
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
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Your Wedding, Our Expertise
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                At D DAY EVENTO, your wedding is not just an event. It is an experience, lived once, remembered forever.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-primary font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Your Wedding With Us
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

export default WeddingEvents;
