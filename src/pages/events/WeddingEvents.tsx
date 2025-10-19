import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FeatureSteps } from '../../components/ui/feature-section';

const WeddingEvents: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const weddingFeatures = [
    {
      step: "Engagement",
      title: "Engagement",
      content: "The official beginning of your forever. Where promises are made and rings are exchanged, marking the start of your journey together.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      step: "Bride & Groom Ceremonies",
      title: "Bride & Groom Traditional Ceremonies",
      content: "Customs that honor your roots. Individual celebrations that prepare both families for the sacred union ahead.",
      image: "https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      step: "Haldi & Mehendi",
      title: "Haldi & Mehendi",
      content: "Fun-filled, colorful traditions with family and friends. Where turmeric brings blessings and henna creates beautiful patterns of love.",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      step: "Sangeet / Cocktail / Bachelor's Party",
      title: "Sangeet / Cocktail / Bachelor's Party",
      content: "Where music, dance, and laughter take over. Celebrations that bring both families together in joy, music, and unforgettable moments.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      step: "Wedding Ceremony",
      title: "Wedding Ceremony",
      content: "The sacred union of two souls. The most sacred moment where vows are taken and two hearts become one forever.",
      image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      step: "Reception / Bharath",
      title: "Reception / Bharath",
      content: "A grand celebration to honor the new couple. Where the newlyweds are welcomed into society and celebrated by all who love them.",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Traditional wedding ceremony Hyderabad - D Day Evento"
            className="w-full h-full object-cover object-center brightness-75 contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-2xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}
            >
              Your Wedding. Your Story.{' '}
              <span className="text-yellow-300 drop-shadow-2xl block sm:inline" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}>
                Perfectly Executed.
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              A wedding is the beginning of a new life. It is the union of two people, two families, and two worlds.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto font-light drop-shadow-lg px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.7), 0 0 6px rgba(0, 0, 0, 0.8)' }}
            >
              At D DAY EVENTO, we turn your dream into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white/25 backdrop-blur-sm hover:bg-white/35 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-white/20 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Plan Your Wedding With Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is a Wedding */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                What is a{' '}
                <span className="text-brand-primary">Wedding?</span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="text-xl text-gray-800 font-medium">
                  The union of two people and two families.
                </p>

                <p>
                  The start of a new journey filled with love and responsibility. More than rituals, it is emotions, values, and tradition woven together.
                </p>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-l-4 border-brand-primary">
                  <p className="text-brand-primary font-semibold text-lg italic">
                    "In Indian culture, a wedding is not just a ceremony. It is the sacred bond that connects souls, families, and generations."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Indian wedding ceremony"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Do We Celebrate */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              Why Do We Celebrate?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Life's Biggest Milestone",
                description: "Because a wedding marks the most significant transition in human life - from individual to united souls."
              },
              {
                title: "Honor Traditions",
                description: "To celebrate love and unite families while preserving the sacred customs passed down through generations."
              },
              {
                title: "Create Lasting Memories",
                description: "To create memories that last a lifetime and beyond, becoming stories told to future generations."
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Events Steps */}
      <section className="py-16 sm:py-20 bg-white">
        <FeatureSteps 
          features={weddingFeatures}
          title="Wedding Events & Days We Curate"
          autoPlayInterval={4000}
          className="bg-white"
        />

      </section>

      {/* Who Do We Celebrate With */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding celebration with family and friends"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
                Who Do We Celebrate With?
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Family, relatives, friends, and well-wishers. Each person who attends your wedding brings their own blessings and love.
                </p>

                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-brand-primary">
                  <p className="text-brand-primary font-semibold">
                    Guests are not just attendees - they are part of the story, part of the celebration.
                  </p>
                </div>

                <p>
                  In Indian weddings, every guest is considered a blessing. Their presence makes the celebration complete, their joy multiplies your happiness, and their blessings pave the way for your new journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Wedding Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              The Wedding Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures that nothing is left to chance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {[
              { step: "Plan", description: "Understanding your vision and requirements" },
              { step: "Design", description: "Creating the perfect aesthetic for your celebration" },
              { step: "Organize", description: "Coordinating all vendors and logistics" },
              { step: "Execute", description: "Flawless implementation on your special day" },
              { step: "Celebrate", description: "Enjoying every moment without worry" },
              { step: "Conclude", description: "Ensuring everything ends perfectly" }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {process.step}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-gray-700 font-medium">
              Every ritual, every detail, every moment handled with precision and passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How D DAY EVENTO Helps */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              How D DAY EVENTO Helps
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We don't just plan weddings - we create experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full Control & Management</h3>
                <p className="text-gray-600">Complete oversight of the wedding process from start to finish, ensuring nothing is overlooked.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Vendor Management</h3>
                <p className="text-gray-600">Comprehensive coordination of vendors, décor, catering, music, and entertainment.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guest Care & Logistics</h3>
                <p className="text-gray-600">Smooth event flow handled with expertise, ensuring every guest feels welcomed and cared for.</p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Guest Service Assistance Team</h3>
                <p className="text-gray-600">Dedicated team for client handling, planning, and all necessary paperwork.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Event Task Force Team</h3>
                <p className="text-gray-600">Ground execution specialists handling setup and guest coordination seamlessly.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance to address any concerns and ensure peace of mind.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get With Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              What You Get With Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "A Stress-Free Wedding",
                description: "No chaos, only celebration. We handle the complexities so you can focus on the joy."
              },
              {
                title: "Happy Guests",
                description: "Well-served, well-managed, and well-entertained guests who leave with beautiful memories."
              },
              {
                title: "Relaxed Families",
                description: "Families free to enjoy the moments, not manage them. Your loved ones can be present, not stressed."
              },
              {
                title: "Unforgettable Experience",
                description: "A wedding that is grand, organized, and unforgettable - exactly as you dreamed it would be."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-16 sm:py-20 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">
              At D DAY EVENTO, your wedding is not just an event.
            </h2>
            <p className="text-xl sm:text-2xl text-white/95 mb-8 leading-relaxed italic">
              It is an experience - lived once, remembered forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Planning Your Wedding
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold rounded-lg transition-all duration-300"
              >
                Contact Us Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WeddingEvents;