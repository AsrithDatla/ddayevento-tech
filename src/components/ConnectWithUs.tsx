import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle, Heart, Star } from 'lucide-react';
import { InlineTrustIndicators } from './TrustIndicators';

const ConnectWithUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-48 h-48 border border-brand-primary/5 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.7, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-36 h-36 border border-brand-gold/10 rounded-full"
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
            className="inline-flex items-center gap-2 bg-brand-primary/10 rounded-full px-6 py-3 mb-6"
          >
            <MessageCircle className="text-brand-primary" size={20} />
            <span className="text-brand-primary font-semibold">Let's Connect</span>
          </motion.div>
          
          <h2 className="text-display-md md:text-display-lg font-bold text-gray-800 mb-8 font-display">
            Connect With Us
          </h2>
          <p className="text-body-lg md:text-heading-md text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to start planning your dream event in Hyderabad? Get in touch for a 
            <span className="text-brand-primary font-semibold"> free consultation</span> and let's make your vision come to life across Gachibowli, Kondapur, and Jubilee Hills
          </p>
          
          {/* Trust Indicators */}
          <InlineTrustIndicators className="mb-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-white/50">
              <h3 className="text-heading-lg font-bold text-gray-800 mb-8 font-display">Get In Touch</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-5 rounded-2xl hover:bg-brand-accent/20 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Phone</h4>
                    <p className="text-gray-600 font-medium">+91-7386813689</p>
                    <p className="text-gray-600 font-medium">+91 98498 22899</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-5 rounded-2xl hover:bg-brand-accent/20 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-brand-secondary to-brand-primary p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Email</h4>
                    <p className="text-gray-600 font-medium">info@ddayevento.com</p>
                    <p className="text-gray-600 font-medium">ddayevento9@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-5 rounded-2xl hover:bg-brand-accent/20 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-brand-gold to-yellow-400 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Address</h4>
                    <p className="text-gray-600 font-medium">Hyderabad, Telangana</p>
                    <p className="text-gray-600 font-medium">Serving Greater Hyderabad Area</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-5 rounded-2xl hover:bg-brand-accent/20 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Business Hours</h4>
                    <p className="text-gray-600 font-medium">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 font-medium">24/7 Event Support Available</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* CTA for Free Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-10 text-white text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 border border-white/10 rounded-full"
                />
              </div>
              
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MessageCircle size={56} className="mx-auto mb-6 text-brand-gold" />
                </motion.div>
                
                <h3 className="text-heading-lg md:text-heading-xl font-bold mb-6 font-display">
                  Free Consultation Available
                </h3>
                <p className="mb-8 text-white/90 text-body-lg leading-relaxed">
                Schedule a no-obligation consultation to discuss your event vision and get expert advice
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg"
                  >
                    Book Free Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-primary transition-all duration-300"
                  >
                    <Star size={20} className="inline mr-2" />
                    View Portfolio
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-white/50">
              <h3 className="text-heading-lg font-bold text-gray-800 mb-8 font-display">Event Questionnaire</h3>
              
              {showSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: 2 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={40} className="text-green-600" />
                  </motion.div>
                  <h4 className="text-heading-md font-bold text-gray-800 mb-4 font-display">Message Sent!</h4>
                  <p className="text-gray-600 text-body-lg">
                    We'll get back to you within 24 hours with a personalized consultation.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-brand-primary">
                    <Heart size={16} />
                    <span className="text-sm font-medium">Thank you for choosing D-Day Evento!</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-body-md font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 hover:border-brand-primary/50 touch-manipulation"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-body-md font-semibold text-gray-700 mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 hover:border-brand-primary/50 touch-manipulation"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-body-md font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 hover:border-brand-primary/50"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-body-md font-semibold text-gray-700 mb-3">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 hover:border-brand-primary/50"
                    >
                      <option value="">Select event type</option>
                      <option value="weddings">Weddings</option>
                      <option value="birthdays">Birthdays</option>
                      <option value="corporate">Corporate Events</option>
                      <option value="baby-shower">Baby Shower</option>
                      <option value="anniversaries">Anniversaries</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-body-md font-semibold text-gray-700 mb-3">
                      Tell us about your event *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 resize-none hover:border-brand-primary/50"
                      placeholder="Describe your event vision, expected guests, date preferences, and any specific requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-4 px-8 rounded-xl font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                    aria-label={isSubmitting ? "Sending message..." : "Send message"}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;