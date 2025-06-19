import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, Instagram, Facebook, Linkedin, Menu, X } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import { servicesData } from '../data/servicesData';

// Snapchat icon component since it's not in lucide-react
const SnapchatIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.405.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

const Header: React.FC = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileEvents, setExpandedMobileEvents] = useState<string | null>(null);
  const [expandedMobileServices, setExpandedMobileServices] = useState<string | null>(null);

  const toggleMobileEventExpansion = (eventId: string) => {
    setExpandedMobileEvents(prev => 
      prev === eventId ? null : eventId
    );
  };

  const toggleMobileServiceExpansion = (serviceId: string) => {
    setExpandedMobileServices(prev => 
      prev === serviceId ? null : serviceId
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg">
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-1 md:py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center gap-2 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Phone size={12} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">+91-7386813689</span>
              <span className="sm:hidden">+91-7386813689</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail size={14} />
              <span>info@ddayevento.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Instagram size={14} className="md:w-4 md:h-4 cursor-pointer hover:text-brand-gold transition-colors" />
            <Facebook size={14} className="md:w-4 md:h-4 cursor-pointer hover:text-brand-gold transition-colors" />
            <SnapchatIcon size={14} className="md:w-4 md:h-4 cursor-pointer hover:text-brand-gold transition-colors" />
            <Linkedin size={14} className="md:w-4 md:h-4 cursor-pointer hover:text-brand-gold transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/final-white-logo-400-120.png" 
              alt="D-Day Evento" 
              className="w-32 h-10 md:w-40 md:h-12 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="font-semibold text-white hover:text-brand-gold transition-colors">HOME</a>
            <a href="/about" className="font-semibold text-white hover:text-brand-gold transition-colors">ABOUT US</a>
            
            {/* Events Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 font-semibold text-white hover:text-brand-gold transition-colors"
                onMouseEnter={() => setIsEventsOpen(true)}
                onMouseLeave={() => setIsEventsOpen(false)}
              >
                EVENTS <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {isEventsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border py-6 w-max min-w-[900px] max-w-screen-xl z-50"
                    onMouseEnter={() => setIsEventsOpen(true)}
                    onMouseLeave={() => setIsEventsOpen(false)}
                  >
                    <div className="grid grid-cols-4 gap-6 px-6">
                      {eventsData.map((event) => (
                        <div key={event.id} className="space-y-3">
                          <div className="text-brand-primary font-bold text-sm border-b border-gray-100 pb-2">
                            {event.name}
                          </div>
                          <div className="space-y-1">
                            {event.subEvents && event.subEvents.map((subEvent) => (
                              <a
                                key={subEvent.id}
                                href={`/events/${event.id}/${subEvent.id}`}
                                className="block text-gray-600 hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs py-1 px-2 rounded"
                              >
                                {subEvent.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 font-semibold text-white hover:text-brand-gold transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                SERVICES <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border py-6 w-max min-w-[700px] max-w-screen-xl z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-6 px-6">
                      {servicesData.map((service) => (
                        <div key={service.id} className="space-y-3">
                          <div className="text-brand-primary font-bold text-sm border-b border-gray-100 pb-2">
                            {service.name}
                          </div>
                          <div className="space-y-1">
                            {service.subServices && service.subServices.map((subService) => (
                              <a
                                key={subService.id}
                                href={`/services/${service.id}/${subService.id}`}
                                className="block text-gray-600 hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs py-1 px-2 rounded"
                              >
                                {subService.name}
                              </a>
                            ))}
                            {!service.subServices && (
                              <a
                                href={`/services/${service.id}`}
                                className="block text-gray-600 hover:bg-brand-accent hover:text-brand-primary transition-colors text-xs py-1 px-2 rounded"
                              >
                                View Details
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/packages" className="font-semibold text-white hover:text-brand-gold transition-colors">PACKAGES</a>
            <a href="/blogs" className="font-semibold text-white hover:text-brand-gold transition-colors">BLOGS</a>
            <a href="#reviews" className="font-semibold text-white hover:text-brand-gold transition-colors">REVIEWS</a>
            <a href="#contact" className="font-semibold text-white hover:text-brand-gold transition-colors">CONTACT US</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 py-4 border-t border-gray-700 max-h-96 overflow-y-auto scrollbar-hide"
            >
              <div className="flex flex-col gap-2">
                <a href="#home" className="font-semibold text-white py-2">HOME</a>
                <a href="/about" className="font-semibold text-white py-2">ABOUT US</a>
                
                {/* Mobile Events Accordion */}
                <div className="space-y-2">
                  <div className="font-semibold text-white py-2 border-b border-gray-600">
                    EVENTS
                  </div>
                  {eventsData.map((event) => (
                    <div key={event.id} className="ml-4">
                      <button
                        onClick={() => toggleMobileEventExpansion(event.id)}
                        className="flex items-center justify-between w-full text-left text-brand-gold font-medium py-2"
                      >
                        {event.name}
                        <ChevronDown 
                          size={16} 
                          className={`transform transition-transform ${
                            expandedMobileEvents === event.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {expandedMobileEvents === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-1"
                          >
                            {event.subEvents && event.subEvents.map((subEvent) => (
                              <a
                                key={subEvent.id}
                                href={`/events/${event.id}/${subEvent.id}`}
                                className="block text-gray-300 text-sm py-1 hover:text-white"
                              >
                                {subEvent.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile Services Accordion */}
                <div className="space-y-2">
                  <div className="font-semibold text-white py-2 border-b border-gray-600">
                    SERVICES
                  </div>
                  {servicesData.map((service) => (
                    <div key={service.id} className="ml-4">
                      <button
                        onClick={() => toggleMobileServiceExpansion(service.id)}
                        className="flex items-center justify-between w-full text-left text-brand-gold font-medium py-2"
                      >
                        {service.name}
                        <ChevronDown 
                          size={16} 
                          className={`transform transition-transform ${
                            expandedMobileServices === service.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {expandedMobileServices === service.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-1"
                          >
                            {service.subServices && service.subServices.map((subService) => (
                              <a
                                key={subService.id}
                                href={`/services/${service.id}/${subService.id}`}
                                className="block text-gray-300 text-sm py-1 hover:text-white"
                              >
                                {subService.name}
                              </a>
                            ))}
                            {!service.subServices && (
                              <a
                                href={`/services/${service.id}`}
                                className="block text-gray-300 text-sm py-1 hover:text-white"
                              >
                                View Details
                              </a>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <a href="/packages" className="font-semibold text-white py-2">PACKAGES</a>
                <a href="/blogs" className="font-semibold text-white py-2">BLOGS</a>
                <a href="#reviews" className="font-semibold text-white py-2">REVIEWS</a>
                <a href="#contact" className="font-semibold text-white py-2">CONTACT US</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;