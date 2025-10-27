import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Camera, Video } from 'lucide-react';
import ImprovedQuoteModal from '../../components/QuoteGenerator/ImprovedQuoteModal';

const PhotographyVideographyPage: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478684/PM_21_Shreni-Copy_p3jsxg.jpg"
            alt="Photography & Videography Services - D Day Evento Hyderabad"
            className="w-full h-full object-cover object-center brightness-75 contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 via-transparent to-brand-accent/30"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-2xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.9)' }}
            >
              <span className="block">Photography & Videography</span>
              <span className="text-gold drop-shadow-2xl">
                Capturing Memories That Last Forever
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              Every event is temporary, but memories last a lifetime. We don't just capture images — we create timeless narratives of your celebration.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-brand-accent/40 w-full sm:w-auto max-w-xs sm:max-w-none">
                Get Photography Quote
              </button>
              <div className="text-white/90 text-sm font-light">
                Art + Technology + Emotion in every frame
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Every Detail Counts Section - Event Page Style */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-brand-primary/5 to-brand-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight">
                Why Every Detail{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Counts</span>
              </h2>

              <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                <div className="grid grid-cols-1 gap-8">
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-gradient-to-br from-brand-primary/15 via-brand-secondary/10 to-brand-accent/15 p-8 rounded-3xl border-l-6 border-brand-primary transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Camera className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Memories Fade, Photos Don't</h3>
                          <p className="text-gray-700 leading-relaxed">High-quality visuals keep every smile, tear, ritual, and celebration alive for guests, family, and future generations to cherish.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="bg-gradient-to-br from-brand-secondary/15 via-brand-accent/10 to-brand-primary/15 p-8 rounded-3xl border-l-6 border-brand-secondary transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Video className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Legacy in Every Frame</h3>
                          <p className="text-gray-700 leading-relaxed">Every ritual, décor detail, outfit, and smile deserves to be remembered. Photography is proof of your celebration's grandeur.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="bg-gradient-to-br from-brand-accent/15 via-brand-primary/10 to-brand-secondary/15 p-8 rounded-3xl border-l-6 border-brand-accent transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Play className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Without Good Photography</h3>
                          <p className="text-gray-700 leading-relaxed">Even the most lavish event risks being forgotten. Quality visuals elevate your event's prestige and create lasting value.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478683/PM0081_Aira_HalfSaree_xoreby.jpg"
                    alt="Professional portrait photography"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478688/pexels-alex-andrews-271121-821749_zar28x.jpg"
                    alt="Candid moment capture"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478687/pexels-athena-3653772_zi0lab.jpg"
                    alt="Event videography"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478686/pexels-omar-markhieh-637410-1447264_rbdya9.jpg"
                    alt="Cinematic wedding photography"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-accent/30 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-brand-primary/25 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>      {
/* The Reality vs Our Approach Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* The Reality */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border-l-6 border-red-400">
                <h3 className="text-2xl font-bold text-red-800 mb-6">The Reality in Today's Market</h3>
                <div className="space-y-4">
                  {[
                    "Untrained Photographers – Anyone with a DSLR claims to be professional",
                    "Repetitive Poses – Lack of creativity, generic frames, copied edits",
                    "Poor Equipment – Outdated cameras, weak lighting, shaky video coverage",
                    "Missed Moments – Key rituals or guest reactions often go uncaptured",
                    "Delayed Delivery – Clients waiting months for albums & videos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-red-800 font-semibold mt-6 italic">
                  Result: Clients spend heavily, yet end up saying, "Photos didn't do justice to our event."
                </p>
              </div>
            </motion.div>

            {/* Our Signature Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-l-6 border-green-400">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Our Signature Approach</h3>
                <div className="space-y-4">
                  {[
                    "Professional Team – Trained photographers, cinematographers, editors",
                    "State-of-the-Art Equipment – 4K cameras, drones, gimbals, lighting setups",
                    "Creative Storytelling – Unique candid moments, cinematic edits, personalized albums",
                    "Event-Specific Style – Baby showers need warmth, weddings need grandeur",
                    "Quick Delivery – Fast turnaround without compromising on quality",
                    "Client Collaboration – Understanding preferences before shooting"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-green-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-green-800 font-semibold mt-6 italic">
                  Result: Clients feel proud when guests praise the quality and emotional depth of their photos & videos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events That Speak - Interactive Timeline Style */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Events That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Speak</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every celebration has its own visual language - we speak them all fluently
            </p>
          </motion.div>

          {/* Timeline Style Layout */}
          <div className="relative">
            {/* Central Timeline Line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent hidden lg:block z-10"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            ></motion.div>

            <div className="space-y-16">
              {/* Engagements & Weddings */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:text-right lg:pr-12">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 rounded-3xl p-8 shadow-xl border border-brand-primary/20 hover:shadow-2xl transition-all duration-500">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Engagements & Weddings</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Cinematic films that tell your love story</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Drone aerial shots for breathtaking perspectives</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Couple candids that capture genuine emotions</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478686/pexels-brunomassao-2873486_cfy2od.jpg"
                    alt="Wedding photography and videography"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Baby Showers & Family Events */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:order-1">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478686/pexels-brett-sayles-2445781_japesi.jpg"
                    alt="Baby shower and family event photography"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
                <div className="lg:pl-12 lg:order-2">
                  <div className="bg-gradient-to-br from-brand-secondary/10 via-brand-accent/5 to-brand-primary/10 rounded-3xl p-8 shadow-xl border border-brand-secondary/20 hover:shadow-2xl transition-all duration-500">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Baby Showers & Family Events</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Warm, emotional storytelling that captures joy</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Group captures with perfect family compositions</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Candid emotions and décor highlights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Corporate & Special Events */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="lg:text-right lg:pr-12">
                  <div className="bg-gradient-to-br from-brand-accent/10 via-brand-primary/5 to-brand-secondary/10 rounded-3xl p-8 shadow-xl border border-brand-accent/20 hover:shadow-2xl transition-all duration-500">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate & Special Events</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Professional branding and press-ready photos</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Fun-filled portraits and highlight reels</p>
                      </div>
                      <div className="flex items-start space-x-3 lg:justify-end lg:flex-row-reverse lg:space-x-reverse">
                        <div className="w-3 h-3 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Formal coverage with creative storytelling</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478688/pexels-annushka-ahuja-8114061_vacoh1.jpg"
                    alt="Corporate and special event photography"
                    className="w-full h-80 object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section> 
     {/* Behind the Scenes Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-primary/5 via-white to-brand-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Behind the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Perfect Shot</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Guests only see the final picture-perfect album. Behind the scenes, it's precision, patience, and sleepless nights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Lighting Challenges",
                description: "Mastering indoor vs. outdoor setups, adapting to changing weather, and creating perfect ambiance in any condition",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761478690/pexels-weekendplayer-93820_z4jk6b.jpg"
              },
              {
                number: "2",
                title: "Unpredictable Moments",
                description: "Kids running around, rituals moving fast, crowds blocking views - we're always ready to capture the unexpected",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761478688/pexels-alex-andrews-271121-821749_zar28x.jpg"
              },
              {
                number: "3",
                title: "Tech Load Management",
                description: "Managing multiple cameras, memory backups, batteries, lenses - ensuring no moment is missed due to technical issues",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761478687/pexels-athena-3653772_zi0lab.jpg"
              },
              {
                number: "4",
                title: "Editing Hours",
                description: "Hundreds of photos and videos filtered, color-corrected, and styled to perfection - each frame tells your story",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761478686/pexels-omar-markhieh-637410-1447264_rbdya9.jpg"
              },
              {
                number: "5",
                title: "Pressure of Perfection",
                description: "No second chance for once-in-a-lifetime moments - every shot must be perfect, every angle must be right",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761478683/PM0081_Aira_HalfSaree_xoreby.jpg"
              },
              {
                number: "6",
                title: "Storytelling Vision",
                description: "Weaving together thousands of moments into a cohesive narrative that captures the essence of your celebration",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761478684/PM_21_Shreni-Copy_p3jsxg.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center text-black font-bold text-lg shadow-lg">
                        {item.number}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Experience Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              With D DAY EVENTO,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Clients Feel</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                emotion: "Relaxed & Confident",
                description: "Knowing every moment is being beautifully documented by professionals",
                number: "📸"
              },
              {
                emotion: "Proud & Amazed",
                description: "When guests can't stop praising the quality of photos & videos",
                number: "🎬"
              },
              {
                emotion: "Emotional & Moved",
                description: "While reliving their special day through cinematic highlights",
                number: "💝"
              },
              {
                emotion: "Secure & Happy",
                description: "Confident that their memories are safe, secure, and everlasting",
                number: "🌟"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-brand-primary/30">
                  <span className="text-3xl">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.emotion}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      
{/* Why Choose D DAY EVENTO Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">D DAY EVENTO</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Where artistic vision meets cutting-edge technology to create your visual legacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                "Professional team with artistic vision",
                "Latest equipment & editing technology",
                "Cinematic storytelling, not just photography",
                "Custom style for each event",
                "Fast delivery & high-quality albums"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478686/pexels-brunomassao-2873486_cfy2od.jpg"
                  alt="Professional photography equipment"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478686/pexels-brett-sayles-2445781_japesi.jpg"
                    alt="Cinematic videography"
                    className="w-full h-30 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761478688/pexels-annushka-ahuja-8114061_vacoh1.jpg"
                    alt="Professional editing setup"
                    className="w-full h-30 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-primary/30 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-brand-accent/25 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-brand-primary to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight">
              Ready to Capture Your{' '}
              <span className="text-brand-accent">Legacy?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
              "At D DAY EVENTO, we don't just capture your event — we capture your legacy, one frame at a time."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Get Your Photography Quote
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </button>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              Professional team • Latest equipment • Cinematic storytelling
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      <ImprovedQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default PhotographyVideographyPage;