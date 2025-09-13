import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, Users, Heart, Star } from 'lucide-react';

const TraditionalEvents: React.FC = () => {
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
              Traditional Events
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Power Behind Your Celebration
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
                Plan Your Traditional Event
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="prose prose-lg md:prose-xl text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl leading-relaxed mb-8">
                Traditions aren't just dates on a calendar — they are the heartbeat of our culture. 
                Every cradle ceremony, baby shower, house warming, half saree, or upanayanam marks 
                a milestone that deserves dignity, precision, and beauty. At D DAY EVENTO, we don't 
                just "manage" events, we orchestrate them into seamless experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Traditions Matter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Why Traditions Matter
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Users className="w-10 h-10 text-brand-primary mb-4" />,
                    title: "Generational Connection",
                    description: "They connect families across generations, creating lasting bonds."
                  },
                  {
                    icon: <Heart className="w-10 h-10 text-brand-primary mb-4" />,
                    title: "Cultural Heritage",
                    description: "They carry blessings, rituals, and pride of our rich cultural heritage."
                  },
                  {
                    icon: <Star className="w-10 h-10 text-brand-primary mb-4" />,
                    title: "Elegant Celebrations",
                    description: "They deserve to be hosted with order, warmth, and elegance."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-center">
                      {item.icon}
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
                <p className="text-lg text-gray-700 italic text-center">
                  "But in reality, hosts are often left with stress — managing vendors, handling guests, 
                  solving problems — instead of enjoying the blessings."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Role Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Our Role – Your Advantage
              </h2>
              <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                We step in as the complete backbone of your celebration.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {[
                  "One-Stop Solution → Décor, food, rituals, photography, logistics.",
                  "Precision Planning → On time, every time, without excuses.",
                  "Hospitality Excellence → Guests feel welcomed, families feel relieved.",
                  "Stress-Free Execution → You focus on the rituals, we handle the rest."
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="flex-shrink-0 w-6 h-6 text-brand-primary mt-1 mr-3" />
                    <p className="text-lg text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Service Highlights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "🌿 Traditional Hospitality – Guest handling with warmth & respect.",
                  "🍴 Catering & Menu Design – Authentic flavors, customized spreads.",
                  "🌺 Décor & Styling – From simple elegance to grand themes.",
                  "🙏 Ritual & Puja Support – Every detail arranged with cultural accuracy.",
                  "📸 Photography & Videography – Capturing moments with clarity & soul.",
                  "🏛 Venue & Logistics – Smooth coordination, zero last-minute chaos."
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <p className="text-lg text-gray-800">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Promise of D DAY EVENTO</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                When families choose us, they choose confidence, clarity, and convenience. 
                No scattered vendors. No stress. No chaos. Just one team delivering tradition with perfection.
              </p>
              <div className="text-2xl font-bold">
                Your Traditions. Our Responsibility.
              </div>
              
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-primary hover:bg-gray-100 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Planning Your Traditional Event
                  <Calendar className="ml-2" size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TraditionalEvents;
