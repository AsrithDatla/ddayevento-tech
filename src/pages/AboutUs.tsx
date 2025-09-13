import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle, 
  Star, 
  Heart, 
  Clock, 
  Shield, 
  Phone, 
  Calendar,
  Camera,
  Palette,
  Music,
  UtensilsCrossed,
  Gift,
  MapPin,
  Sparkles,
  Cake,
  Car,
  Mail,
  ArrowRight,
  Quote
} from 'lucide-react';
import QuoteModal from '../components/QuoteGenerator/QuoteModal';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const services = [
  { icon: Users, title: 'Guest Service Assistance', description: 'Professional guest coordination and support throughout your event' },
  { icon: Users, title: 'Event Setup Crew', description: 'Expert team for seamless event setup and breakdown' },
  { icon: Camera, title: 'Photography & Videography', description: 'Capture every precious moment with professional quality' },
  { icon: Palette, title: 'Decor & Styling', description: 'Transform your venue with stunning decorations and themes' },
  { icon: Sparkles, title: 'Makeup Artists', description: 'Professional makeup and styling for your special day' },
  { icon: Music, title: 'Music & Live Entertainment', description: 'DJ services, live music, and entertainment activities' },
  { icon: UtensilsCrossed, title: 'Catering & Bartending', description: 'Delicious multi-cuisine menus and professional service' },
  { icon: Car, title: 'Transport & Logistics', description: 'Seamless transportation and logistics coordination' },
  { icon: MapPin, title: 'Venue Coordination', description: 'Perfect venue selection and complete coordination' },
  { icon: Gift, title: 'Gifting & Invites', description: 'Custom invitations and thoughtful return gifts' },
  { icon: Cake, title: 'Cakes', description: 'Custom designed cakes for every celebration' }
];

const differentiators = [
  {
    icon: CheckCircle,
    title: 'All-in-One Service Network',
    description: 'We work with service requirements for seamless execution.'
  },
  {
    icon: Shield,
    title: 'Verified Professionals Only',
    description: 'Every vendor is handpicked, experienced, and quality-checked.'
  },
  {
    icon: Heart,
    title: 'Personal Guidance & Consultation',
    description: 'We help you with planning, doubts, comparisons, and suggestions.'
  },
  {
    icon: Star,
    title: 'Budget-Based Service Provider',
    description: 'Get the best within your budget — without compromising on quality.'
  },
  {
    icon: Phone,
    title: 'Single Point of Contact',
    description: 'One dedicated planner manages all coordination and communication.'
  },
  {
    icon: Clock,
    title: 'Timely Responses & Full Availability',
    description: 'Quick follow-ups, updates, and last-minute support — anytime.'
  },
  {
    icon: Users,
    title: 'Smooth Coordination Across Services',
    description: 'We handle transitions between our team for flawless flow.'
  },
  {
    icon: MapPin,
    title: '100% Doorstep Delivery',
    description: 'Every item and service — delivered where you need, when you need it.'
  },
  {
    icon: Heart,
    title: 'After-Event Support',
    description: 'We stay with you after the event for edits, feedback, and closure.'
  }
];

const AboutUs: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero-warm text-white pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-float">
            <Heart size={60} />
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <Star size={50} />
          </div>
          <div className="absolute bottom-40 left-20 animate-float-slow">
            <Sparkles size={45} />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-gordita font-bold text-5xl md:text-6xl mb-6 leading-tight">
              CELEBRATING THE DAY
            </h1>
            <div className="text-2xl md:text-3xl font-gordita font-semibold mb-4 text-brand-gold">
              One Platform. Every Event. All Your Services.
            </div>
            <p className="text-xl md:text-2xl font-gordita font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
              From First Thought to Final Applause
            </p>
            <p className="text-lg font-gordita font-normal max-w-3xl mx-auto leading-relaxed opacity-90">
              From small gatherings to big gatherings, we simplify every celebration with complete event solutions and provide end-to-end required service support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="font-gordita font-bold text-4xl md:text-5xl text-brand-primary mb-6">
              Who We Are
            </h2>
            <div className="text-2xl font-gordita font-semibold text-brand-accent mb-8">
              Your Complete Event Ecosystem
            </div>
            <p className="text-lg font-gordita font-normal text-brand-text leading-relaxed">
              At D-day Evento, we help you plan and execute events without the stress. We are a complete event service provider, who bring and offer personal guidance, and manage everything from your first inquiry to post-event follow-ups — so you can celebrate while we handle the work behind-the-scenes.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '500+', label: 'Events Completed' },
              { number: '4+', label: 'Years Experience' },
              { number: '50+', label: 'Verified Vendors' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-gordita font-bold text-3xl md:text-4xl text-brand-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-gordita font-medium text-sm text-brand-text">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-brand-teal-50 to-brand-coral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-gordita font-bold text-4xl md:text-5xl text-brand-primary mb-6">
              What We Offer
            </h2>
            <div className="text-2xl font-gordita font-semibold text-brand-accent mb-8">
              One Click. Every Service.
            </div>
            <p className="text-lg font-gordita font-normal text-brand-text max-w-3xl mx-auto">
              Services You Can Book with Us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="font-gordita font-semibold text-lg text-brand-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-gordita font-normal text-brand-text text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-gordita font-bold text-4xl md:text-5xl text-brand-primary mb-6">
              What Makes Us Different
            </h2>
            <div className="text-2xl font-gordita font-semibold text-brand-accent mb-8">
              Why Choose D-day Evento?
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="font-gordita font-semibold text-xl text-brand-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="font-gordita font-normal text-brand-text leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-brand-teal-50 to-brand-coral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-gordita font-bold text-4xl md:text-5xl text-brand-primary mb-6">
              What Our Clients Say
            </h2>
            <div className="text-2xl font-gordita font-semibold text-brand-accent mb-8">
              Real Experiences. Happy Celebrations.
            </div>
          </motion.div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-float">
            <Quote size={80} />
          </div>
          <div className="absolute bottom-10 right-10 animate-float-delayed">
            <Heart size={60} />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-gordita font-bold text-4xl md:text-5xl mb-6">
              Ready to Plan Your Event?
            </h2>
            <div className="text-2xl font-gordita font-semibold mb-8 text-brand-gold">
              From Plan to Party — We've Got You
            </div>
            <p className="text-xl font-gordita font-normal mb-12 max-w-3xl mx-auto leading-relaxed">
              Big or small, we have got your back. Get in touch today and let us bring your event to life — the D-Day Evento way.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-primary font-gordita font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-gordita font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-brand-primary transition-all duration-300 flex items-center gap-2"
              >
                <Calendar size={20} />
                Schedule a Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default AboutUs;