import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';


const EventPlanningPage: React.FC = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const planningPhases = [
    {
      phase: "Vision & Strategy",
      duration: "Week 1-2",
      description: "Understanding your dream and creating the master plan",
      image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761479062/pexels-shvets-production-9052846_bas5tr.jpg",
      activities: ["Initial consultation & vision mapping", "Budget planning & allocation", "Venue scouting & selection", "Theme conceptualization"]
    },
    {
      phase: "Coordination & Booking",
      duration: "Week 3-6",
      description: "Securing the best vendors and locking in all details",
      image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761479063/pexels-coralbellestudios-811572_iekpme.jpg",
      activities: ["Vendor negotiations & contracts", "Timeline development", "Menu planning & tastings", "Entertainment booking"]
    },
    {
      phase: "Execution & Management",
      duration: "Event Day",
      description: "Flawless orchestration while you enjoy every moment",
      image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1761479062/pexels-rosario-fernandes-26325-3835638_o9k4hx.jpg",
      activities: ["Real-time coordination", "Vendor management", "Guest experience oversight", "Crisis management"]
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-advance tabs every 4 seconds (pause when user interacts)
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % planningPhases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [planningPhases.length, isPaused]);

  // Handle manual tab click
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsPaused(true);
    // Resume auto-advance after 8 seconds of no interaction
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Command Center Style */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761479064/pexels-rdne-7648020_c93dju.jpg"
            alt="Event Planning & Management Services - D Day Evento Hyderabad"
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
              <span className="block">Event Planning & Management</span>
              <span className="text-gold drop-shadow-2xl">
                The Orchestrators Behind Every Perfect Moment
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-5xl mx-auto leading-relaxed font-light drop-shadow-xl px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.9)' }}
            >
              From dream to reality, we orchestrate unforgettable moments with precision and passion. Where others react, we prepare. Where others panic, we perform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/quote"
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg shadow-2xl hover:shadow-brand-accent/40 w-full sm:w-auto max-w-xs sm:max-w-none text-center block">
                Get Planning Quote
              </Link>
              <div className="text-white/90 text-sm font-light">
                4+ years orchestrating perfect celebrations
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planning Process - Interactive Timeline */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-brand-primary/5 to-brand-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              The Art of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Orchestration</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every perfect event follows a masterful plan. Here's how we turn your vision into reality.
            </p>
            
            {/* Auto-advance indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {planningPhases.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeTab 
                      ? 'w-8 bg-brand-primary' 
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Interactive Phase Tabs */}
          <div className="flex flex-col lg:flex-row gap-8"
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}>
            {/* Phase Navigation */}
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {planningPhases.map((phase, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${activeTab === index
                      ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-xl scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                      }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeTab === index ? 'bg-white/20' : 'bg-brand-primary/10'
                        }`}>
                        <span className={`font-bold text-lg ${activeTab === index ? 'text-white' : 'text-brand-primary'
                          }`}>
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{phase.phase}</h3>
                        <p className={`text-sm ${activeTab === index ? 'text-white/80' : 'text-gray-500'
                          }`}>
                          {phase.duration}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Phase Content */}
            <div className="lg:w-2/3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="relative h-64 lg:h-80">
                  <img
                    src={planningPhases[activeTab].image}
                    alt={planningPhases[activeTab].phase}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {planningPhases[activeTab].phase}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {planningPhases[activeTab].description}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Activities:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {planningPhases[activeTab].activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-brand-primary rounded-full mt-1 flex-shrink-0"></div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* The Reality vs Our Approach - Split Screen Design */}
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
              The Industry{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Reality</span>
              {' '}vs Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Approach</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* The Reality - Problem Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border-l-6 border-red-400 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-6">The Industry Reality</h3>
                <div className="space-y-6">
                  <div className="bg-white/50 rounded-2xl p-6 border border-red-200">
                    <h4 className="font-bold text-red-700 mb-3">Fake "Planners"</h4>
                    <p className="text-red-600 text-sm">Many coordinators call themselves "planners" but lack professional systems, resulting in missed deadlines and vendor confusion.</p>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6 border border-red-200">
                    <h4 className="font-bold text-red-700 mb-3">Budget Disasters</h4>
                    <p className="text-red-600 text-sm">Hidden costs and poor budget management lead to financial shocks and compromised quality.</p>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6 border border-red-200">
                    <h4 className="font-bold text-red-700 mb-3">Last-Minute Chaos</h4>
                    <p className="text-red-600 text-sm">Clients running around solving problems, panic behind glamorous facades, and compromised celebrations.</p>
                  </div>
                </div>
                <p className="text-red-800 font-semibold mt-6 italic text-center">
                  Result: Events that look good but feel stressful
                </p>
              </div>
            </motion.div>

            {/* Our Approach - Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-l-6 border-green-400 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-6">Our Signature Approach</h3>
                <div className="space-y-6">
                  <div className="bg-white/50 rounded-2xl p-6 border border-green-200">
                    <h4 className="font-bold text-green-700 mb-3">Professional Orchestration</h4>
                    <p className="text-green-600 text-sm">Step-by-step roadmaps, real-time tracking, and synchronized team coordination for flawless execution.</p>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6 border border-green-200">
                    <h4 className="font-bold text-green-700 mb-3">Transparent Budgeting</h4>
                    <p className="text-green-600 text-sm">Clear cost breakdowns, no hidden surprises, and smart solutions that maximize value.</p>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-6 border border-green-200">
                    <h4 className="font-bold text-green-700 mb-3">Proactive Management</h4>
                    <p className="text-green-600 text-sm">Anticipating problems before they appear, contingency planning, and seamless crisis management.</p>
                  </div>
                </div>
                <p className="text-green-800 font-semibold mt-6 italic text-center">
                  Result: Clients enjoy their events like guests
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events We Orchestrate - Masonry Grid */}
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
              Events We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Orchestrate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we manage every detail with precision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Weddings",
                description: "From sangeet rehearsals to mandap timings, every moment runs smoothly",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760457960/WhatsApp_Image_2025-09-17_at_4.36.12_PM_aitnbp.jpg",

              },
              {
                title: "Corporate Events",
                description: "Guest check-ins, stage management, and tech setups without downtime",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760460467/WhatsApp_Image_2025-08-27_at_12.16.32_AM_gmjvqr.jpg",

              },
              {
                title: "Birthday Parties",
                description: "Surprise elements, cake timing, and activity flow managed flawlessly",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760460182/WhatsApp_Image_2025-09-16_at_4.57.16_PM_lczkrg.jpg",

              },
              {
                title: "Cultural Celebrations",
                description: "Rituals and traditions respected while ensuring modern comforts",
                image: "https://res.cloudinary.com/dvfx89ago/image/upload/v1760461228/WhatsApp_Image_2025-08-28_at_9.42.41_PM_apzhti.jpg",

              }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes - Command Center Style */}
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
              The Unseen{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Battlefield</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              This is where the magic happens - the command center operations that make events look effortless
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vendor Negotiations",
                description: "Hours of balancing cost and quality, building relationships, and securing the best deals for our clients",
                stat: "20-30",
                statLabel: "Parallel Activities"
              },
              {
                title: "Contingency Planning",
                description: "Power cuts, weather changes, guest delays - we prepare for everything that could go wrong",
                stat: "24/7",
                statLabel: "Crisis Support"
              },
              {
                title: "Minute-by-Minute Scheduling",
                description: "Preventing clashes, coordinating arrivals, and ensuring perfect timing for every element",
                stat: "100%",
                statLabel: "On-Time Execution"
              },
              {
                title: "Emergency Replacements",
                description: "When vendors fail last minute, we have backup plans and alternative solutions ready",
                stat: "0",
                statLabel: "Failed Events"
              },
              {
                title: "Real-Time Coordination",
                description: "Managing multiple teams, tracking deliveries, and ensuring seamless communication",
                stat: "4+",
                statLabel: "Years Experience"
              },
              {
                title: "Quality Control",
                description: "Every detail checked, every standard maintained, every expectation exceeded",
                stat: "436+",
                statLabel: "Happy Clients"
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
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors">
                    <div className="w-8 h-8 bg-brand-primary/20 rounded-full"></div>
                  </div>
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg p-3">
                      <img
                        src="/D-Day_Evento_logo.png"
                        alt="D-Day Evento"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">{item.description}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-primary">{item.stat}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{item.statLabel}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-3xl p-8 border border-brand-primary/20">
              <p className="text-xl text-gray-700 italic font-medium">
                "This is the unseen battlefield. But we handle it quietly so clients only see beauty."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Client Experience - Testimonial Style */}
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
              What Our Clients{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">Actually Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The hallmark of good planning is when clients don't feel the pressure — they feel the joy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "We enjoyed our event like guests",
                description: "Instead of running around managing vendors, they celebrated with their family and friends",
                category: "Stress-Free"
              },
              {
                quote: "We didn't even realize when things shifted — it was so smooth",
                description: "Seamless transitions, perfect timing, and invisible coordination made everything feel natural",
                category: "Seamless"
              },
              {
                quote: "It felt effortless, but we know the effort behind it was massive",
                description: "Professional execution that makes complex coordination look simple and elegant",
                category: "Professional"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative">
                  <div className="absolute -top-4 left-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="pt-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-semibold rounded-full uppercase tracking-wide">
                        {testimonial.category}
                      </span>
                    </div>
                    <blockquote className="text-xl font-bold text-gray-900 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed">{testimonial.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose D DAY EVENTO - Stats & Features */}
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
              Where professional systems meet passionate execution
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
                {
                  title: "4+ Years of Expertise",
                  description: "Managing diverse events with proven systems and processes"
                },
                {
                  title: "Dual-Force Team",
                  description: "Admin excellence combined with flawless ground execution"
                },
                {
                  title: "Professional Vendor Network",
                  description: "Ensuring quality & reliability through trusted partnerships"
                },
                {
                  title: "Stress-Free Guarantee",
                  description: "You celebrate, we manage - complete peace of mind"
                },
                {
                  title: "Transparent Costs & Smart Solutions",
                  description: "No hidden surprises, maximum value for your investment"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 p-1.5">
                    <img
                      src="/D-Day_Evento_logo.png"
                      alt="D-Day Evento"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
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
              <div className="grid grid-cols-3 gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761479062/pexels-shvets-production-9052846_bas5tr.jpg"
                    alt="Professional event planning coordination"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761479062/pexels-rosario-fernandes-26325-3835638_o9k4hx.jpg"
                    alt="Event planning team meeting"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Center Column */}
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761479063/pexels-coralbellestudios-811572_iekpme.jpg"
                    alt="Event setup and coordination"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761479064/pexels-rdne-7648020_c93dju.jpg"
                    alt="Professional event management"
                    className="w-full h-40 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761479064/pexels-erik-debarre-2151386688-33890525_siirby.jpg"
                    alt="Event execution and management"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://res.cloudinary.com/dvfx89ago/image/upload/v1761479065/pexels-amina-filkins-5409711_mt6y6m.jpg"
                    alt="Successful event coordination"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
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
              Ready to Experience{' '}
              <span className="text-brand-accent">Effortless Celebrations?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
              "Events don't just happen — they are managed into perfection. Let D DAY EVENTO be the manager of your memories."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-gradient-to-r from-brand-accent to-brand-secondary hover:from-brand-accent-dark hover:to-brand-primary text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl text-center inline-flex items-center justify-center"
              >
                Get Your Planning Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="text-gray-400 text-sm mt-4">
              Professional systems • Passionate execution • Stress-free guarantee
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}

    </div>
  );
};

export default EventPlanningPage;