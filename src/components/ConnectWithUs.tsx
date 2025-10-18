import React, { useState } from 'react';
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
        <div className="absolute top-10 right-10 w-48 h-48 border border-brand-primary/5 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute bottom-10 left-10 w-36 h-36 border border-brand-gold/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 rounded-full px-6 py-3 mb-6">
            <MessageCircle className="text-brand-primary" size={20} />
            <span className="text-brand-primary font-semibold">Let's Connect</span>
          </div>

          <h2 className="text-display-md md:text-display-lg font-bold text-gray-800 mb-8 font-display">
            Connect With Us
          </h2>
          <p className="text-body-lg md:text-heading-md text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to start planning your dream event in Hyderabad? Get in touch for a
            <span className="text-brand-primary font-semibold"> free consultation</span> and let's make your vision come to life across Gachibowli, Kondapur, and Jubilee Hills
          </p>

          {/* Trust Indicators */}
          <InlineTrustIndicators className="mb-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-white/50">
              <h3 className="text-heading-lg font-bold text-gray-800 mb-8 font-display">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 rounded-2xl hover:bg-brand-accent/20 transition-all duration-300 group hover:translate-x-2 hover:scale-105">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Phone</h4>
                    <p className="text-gray-600 font-medium">+91-7386813689</p>
                    <p className="text-gray-600 font-medium">+91 98498 22899</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl hover:bg-brand-accent/20 transition-all duration-300 group hover:translate-x-2 hover:scale-105">
                  <div className="bg-gradient-to-r from-brand-secondary to-brand-primary p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Email</h4>
                    <p className="text-gray-600 font-medium">info@ddayevento.com</p>
                    <p className="text-gray-600 font-medium">ddayevento9@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl hover:bg-brand-accent/20 transition-all duration-300 group hover:translate-x-2 hover:scale-105">
                  <div className="bg-gradient-to-r from-brand-gold to-yellow-400 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Address</h4>
                    <p className="text-gray-600 font-medium">Hyderabad, Telangana</p>
                    <p className="text-gray-600 font-medium">Serving Greater Hyderabad Area</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl hover:bg-brand-accent/20 transition-all duration-300 group hover:translate-x-2 hover:scale-105">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">Business Hours</h4>
                    <p className="text-gray-600 font-medium">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 font-medium">24/7 Event Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA for Free Consultation */}
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl p-10 text-white text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              </div>

              <div className="relative">
                <div className="animate-pulse">
                  <MessageCircle size={56} className="mx-auto mb-6 text-brand-gold" />
                </div>

                <h3 className="text-heading-lg md:text-heading-xl font-bold mb-6 font-display">
                  Free Consultation Available
                </h3>
                <p className="mb-8 text-white/90 text-body-lg leading-relaxed">
                  Schedule a no-obligation consultation to discuss your event vision and get expert advice
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg hover:scale-105 hover:-translate-y-1 active:scale-95">
                    Book Free Consultation
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-primary transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95">
                    <Star size={20} className="inline mr-2" />
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-white/50">
              <h3 className="text-heading-lg font-bold text-gray-800 mb-8 font-display">Event Questionnaire</h3>

              {showSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h4 className="text-heading-md font-bold text-gray-800 mb-4 font-display">Message Sent!</h4>
                  <p className="text-gray-600 text-body-lg">
                    We'll get back to you within 24 hours with a personalized consultation.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4 text-brand-primary">
                    <Heart size={16} />
                    <span className="text-sm font-medium">Thank you for choosing D-Day Evento!</span>
                  </div>
                </div>
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-4 px-8 rounded-xl font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:-translate-y-1 active:scale-95"
                    aria-label={isSubmitting ? "Sending message..." : "Send message"}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;