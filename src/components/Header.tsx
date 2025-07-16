import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, Instagram, Facebook, Linkedin, Menu, X, MapPin } from 'lucide-react';
import QuoteModal from './QuoteGenerator/QuoteModal';
import { 
  desktopEventsNavSections, 
  desktopServicesNavSections,
  mobileEventsNavSections,
  mobileServicesNavSections,
  generateEventUrl,
  generateServiceUrl
} from '../data/navConfig';

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
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleMobileEventExpansion = (sectionId: string) => {
    setExpandedMobileEvents(prev => 
      prev === sectionId ? null : sectionId
    );
  };

  const toggleMobileServiceExpansion = (sectionId: string) => {
    setExpandedMobileServices(prev => 
      prev === sectionId ? null : sectionId
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg">
      {/* Top Bar with Local Focus - Mobile Optimized */}
      <div className="bg-brand-primary text-white py-1 md:py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center gap-2 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Phone size={12} className="md:w-4 md:h-4" />
              <span className="text-xs sm:text-sm">+91-7386813689</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail size={14} />
              <span>info@ddayevento.com</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-brand-gold">
              <MapPin size={12} />
              <span>Serving Hyderabad & Surrounding Areas</span>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-4">
            <div className="hidden md:flex items-center gap-1 text-brand-gold text-xs">
              <span>500+ Events in Hyderabad</span>
            </div>
            <Instagram size={12} className="md:w-4 md:h-4 cursor-pointer hover:text-brand-gold transition-colors" />
            <Facebook size={12} className="md:w-4 md:h-4 cursor-pointer hover:text-brand-gold transition-colors" />
            <SnapchatIcon size={12} className="md:w-4 md:h-4 cursor-pointer hover:text-brand-gold transition-colors" />
            <Linkedin size={12} className="md:w-4 md:h-4 cursor-pointer hover:text-brand-gold transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/" aria-label="D-Day Evento - Home">
              <img 
                src="/final-white-logo-400-120.png" 
                alt="D-Day Evento - Hyderabad's Most Trusted Event Planners" 
                className="w-44 h-10 md:w-56 md:h-12 object-contain"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
            <a href="/" className="font-semibold text-white hover:text-brand-gold transition-colors">HOME</a>
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
                    className="absolute top-full left-[-450px] mt-2 bg-white shadow-xl border border-gray-200 w-[1100px] max-w-[calc(100vw-32px)] max-h-[500px] overflow-y-auto overflow-x-auto rounded-lg p-6 z-50"
                    onMouseEnter={() => setIsEventsOpen(true)}
                    onMouseLeave={() => setIsEventsOpen(false)}
                  >
                    <div className="grid grid-cols-3 gap-6 w-full">
                      {desktopEventsNavSections.map((section) => (
                        <div key={section.id}>
                          <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">
                            {section.label}
                          </div>
                          <div className="space-y-1">
                            {section.items.map((item, index) => (
                              <a
                                key={index}
                                href={generateEventUrl(section.id, item)}
                                className="block text-sm text-gray-600 hover:text-brand-primary transition-colors"
                              >
                                {item}
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
                    className="absolute top-full left-[-450px] mt-2 bg-white shadow-xl border border-gray-200 w-[1100px] max-w-[calc(100vw-32px)] max-h-[500px] overflow-y-auto overflow-x-auto rounded-lg p-6 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="grid grid-cols-4 gap-6 w-full">
                      {desktopServicesNavSections.map((section) => (
                        <div key={section.id}>
                          <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">
                            {section.label}
                          </div>
                          <div className="space-y-1">
                            {section.items.map((item, index) => (
                              <a
                                key={index}
                                href={generateServiceUrl(section.id, item)}
                                className="block text-sm text-gray-600 hover:text-brand-primary transition-colors"
                              >
                                {item}
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

            <a href="/blogs" className="font-semibold text-white hover:text-brand-gold transition-colors">BLOGS</a>
            <a href="#reviews" className="font-semibold text-white hover:text-brand-gold transition-colors">REVIEWS</a>
            <a href="#contact" className="font-semibold text-white hover:text-brand-gold transition-colors">CONTACT US</a>
          </div>

          {/* Get Quote CTA Button */}
          <div className="hidden lg:flex">
            <motion.button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-primary px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET QUOTE
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 py-4 border-t border-gray-700 max-h-96 overflow-y-auto scrollbar-hide"
            >
              <div className="flex flex-col gap-2">
                <a href="/" className="font-semibold text-white py-2">HOME</a>
                <a href="/about" className="font-semibold text-white py-2">ABOUT US</a>
                
                {/* Mobile Events Accordion */}
                <div className="space-y-2">
                  <div className="font-semibold text-white py-2 border-b border-gray-600">
                    EVENTS
                  </div>
                  {mobileEventsNavSections.map((section) => (
                    <div key={section.id} className="ml-4">
                      <button
                        onClick={() => toggleMobileEventExpansion(section.id)}
                        className="flex items-center justify-between w-full text-left text-brand-gold font-medium py-2"
                      >
                        {section.label}
                        <ChevronDown 
                          size={16} 
                          className={`transform transition-transform ${
                            expandedMobileEvents === section.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {expandedMobileEvents === section.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-1"
                          >
                            {section.items.map((item, index) => (
                              <a
                                key={index}
                                href={generateEventUrl(section.id, item)}
                                className="block text-gray-300 text-sm py-1 hover:text-white"
                              >
                                {item}
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
                  {mobileServicesNavSections.map((section) => (
                    <div key={section.id} className="ml-4">
                      <button
                        onClick={() => toggleMobileServiceExpansion(section.id)}
                        className="flex items-center justify-between w-full text-left text-brand-gold font-medium py-2"
                      >
                        {section.label}
                        <ChevronDown 
                          size={16} 
                          className={`transform transition-transform ${
                            expandedMobileServices === section.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {expandedMobileServices === section.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-1"
                          >
                            {section.items.map((item, index) => (
                              <a
                                key={index}
                                href={generateServiceUrl(section.id, item)}
                                className="block text-gray-300 text-sm py-1 hover:text-white"
                              >
                                {item}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <a href="/blogs" className="font-semibold text-white py-2">BLOGS</a>
                <a href="#reviews" className="font-semibold text-white py-2">REVIEWS</a>
                <a href="#contact" className="font-semibold text-white py-2">CONTACT US</a>
                
                {/* Mobile Get Quote Button */}
                <motion.button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-brand-gold hover:bg-brand-gold-dark text-brand-primary px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GET QUOTE
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </header>
  );
};

export default Header;