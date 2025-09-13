import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Phone, Mail, Instagram, Facebook, Linkedin, Menu, X, MapPin, ArrowRight } from 'lucide-react';
import QuoteModal from './QuoteGenerator/QuoteModal';
import {
  desktopEventsNavSections,
  desktopServicesNavSections,
  mobileEventsNavSections,
  mobileServicesNavSections,
  generateEventUrl,
  generateServiceUrl
} from '../data/navConfig';

// Font Awesome Snapchat icon component
const SnapchatIcon = ({ size = 16, className = "" }) => (
  <i className={`fab fa-snapchat ${className}`} style={{ fontSize: `${size}px` }}></i>
);

const Header: React.FC = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileEvents, setExpandedMobileEvents] = useState<string | null>(null);
  const [expandedMobileServices, setExpandedMobileServices] = useState<string | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeServicesSubmenu, setActiveServicesSubmenu] = useState<string | null>(null);

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

  // Removed compact mode behavior to keep header consistent

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">

      {/* Top Bar with Contact Info */}
      <div className="bg-brand-primary/90 text-black py-1 md:py-1">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center gap-2 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Phone size={12} className="md:w-4 md:h-4" />
              <span className="text-xs sm:text-sm">+91-777777777</span>
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

      {/* Main Navigation - Only visible when not compact */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.02 }}
          >
            <a href="/" className="flex items-center gap-3" aria-label="D-Day Evento - Home">
              <img
                src="/D-Day_Evento_logo.png"
                alt="D-Day Evento - Hyderabad's Most Trusted Event Planners"
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              />
              <span className="text-brand-teal text-2xl md:text-3xl font-normal font-['Pacifico'] whitespace-nowrap leading-none">D-Day Evento</span>
            </a>
          </motion.div>

          {/* Compact mode - No logo, just the three buttons */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
                <a
                  href="/"
                  className="text-black hover:text-brand-teal font-semibold transition-colors"
                >
                  HOME
                </a>
                <a
                  href="/about"
                  className="text-black hover:text-brand-teal font-semibold transition-colors"
                >
                  ABOUT US
                </a>

                {/* Events Dropdown - Enhanced Mega Menu */}
                <div className="relative group">
                  <button
                    className="flex items-center gap-1 text-black hover:text-brand-gold font-semibold transition-all duration-200 group-hover:scale-105"
                    onMouseEnter={() => {
                      setIsEventsOpen(true);
                      setActiveSubmenu(desktopEventsNavSections[0]?.id || null);
                    }}
                    onMouseLeave={() => setIsEventsOpen(false)}
                  >
                    EVENTS
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isEventsOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isEventsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-[-450px] mt-3 bg-white shadow-2xl border border-gray-100 w-[1100px] max-w-[calc(100vw-32px)] max-h-[500px] overflow-y-auto overflow-x-auto rounded-xl p-0 z-50"
                        onMouseEnter={() => setIsEventsOpen(true)}
                        onMouseLeave={() => setIsEventsOpen(false)}
                      >
                        <div className="flex">
                          {/* Left sidebar with categories */}
                          <div className="w-64 bg-gray-50 p-4 rounded-l-xl">
                            <div className="space-y-1">
                              {desktopEventsNavSections.map((section) => (
                                <button
                                  key={section.id}
                                  onMouseEnter={() => setActiveSubmenu(section.id)}
                                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group ${activeSubmenu === section.id
                                    ? 'bg-brand-primary text-white shadow-md'
                                    : 'text-gray-700 hover:bg-white hover:shadow-sm'
                                    }`}
                                >
                                  <span className="font-medium">{section.label}</span>
                                  <ChevronRight
                                    size={16}
                                    className={`transition-transform duration-200 ${activeSubmenu === section.id ? 'text-white' : 'text-gray-400'
                                      }`}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Right content area */}
                          <div className="flex-1 p-6">
                            {desktopEventsNavSections.map((section) => (
                              <div
                                key={section.id}
                                className={`${activeSubmenu === section.id ? 'block' : 'hidden'}`}
                              >
                                <div className="mb-4">
                                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                                    {section.label}
                                  </h3>
                                  <p className="text-gray-600 text-sm">
                                    Professional event planning services in Hyderabad
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  {section.items.map((item, index) => (
                                    <a
                                      key={index}
                                      href={generateEventUrl(section.id, item)}
                                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-brand-primary/20"
                                    >
                                      <div className="w-2 h-2 bg-brand-gold rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                                      <span className="text-gray-700 group-hover:text-brand-primary font-medium">
                                        {item}
                                      </span>
                                      <ArrowRight
                                        size={14}
                                        className="ml-auto text-gray-400 group-hover:text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-200"
                                      />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Dropdown - Enhanced Mega Menu with Two-Panel Layout */}
                <div className="relative group">
                  <button
                    className="flex items-center gap-1 text-black hover:text-brand-teal font-semibold transition-all duration-200 group-hover:scale-105"
                    onMouseEnter={() => {
                      setIsServicesOpen(true);
                      setActiveServicesSubmenu(desktopServicesNavSections[0]?.id || null);
                    }}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    SERVICES
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-[-450px] mt-3 bg-white shadow-2xl border border-gray-100 w-[1200px] max-w-[calc(100vw-32px)] max-h-[500px] overflow-y-auto overflow-x-auto rounded-xl p-0 z-50"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="flex">
                          {/* Left sidebar with service categories */}
                          <div className="w-64 bg-gray-50 p-4 rounded-l-xl">
                            <div className="space-y-1">
                              {desktopServicesNavSections.map((section) => (
                                <button
                                  key={section.id}
                                  onMouseEnter={() => setActiveServicesSubmenu(section.id)}
                                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group ${activeServicesSubmenu === section.id
                                    ? 'bg-brand-primary text-white shadow-md'
                                    : 'text-gray-700 hover:bg-white hover:shadow-sm'
                                    }`}
                                >
                                  <span className="font-medium">{section.label}</span>
                                  <ChevronRight
                                    size={16}
                                    className={`transition-transform duration-200 ${activeServicesSubmenu === section.id ? 'text-white' : 'text-gray-400'
                                      }`}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Right content area */}
                          <div className="flex-1 p-6">
                            {desktopServicesNavSections.map((section) => (
                              <div
                                key={section.id}
                                className={`${activeServicesSubmenu === section.id ? 'block' : 'hidden'}`}
                              >
                                <div className="mb-4">
                                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                                    {section.label}
                                  </h3>
                                  <p className="text-gray-600 text-sm">
                                    Comprehensive event services tailored for Hyderabad
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  {section.items.map((item, index) => (
                                    <a
                                      key={index}
                                      href={generateServiceUrl(section.id, item)}
                                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group border border-transparent hover:border-brand-primary/20"
                                    >
                                      <div className="w-2 h-2 bg-brand-gold rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                                      <span className="text-gray-700 group-hover:text-brand-primary font-medium">
                                        {item}
                                      </span>
                                      <ArrowRight
                                        size={14}
                                        className="ml-auto text-gray-400 group-hover:text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-200"
                                      />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="/gallery"
                  className="text-black hover:text-brand-teal font-semibold transition-colors"
                >
                  BLOGS
                </a>
                <a
                  href="/services"
                  className="text-black hover:text-brand-teal font-semibold transition-colors"
                >
                  REVIEWS
                </a>
                <a
                  href="/contact"
                  className="text-black hover:text-brand-teal font-semibold transition-colors"
                >
                  CONTACT US
                </a>
              </div>

          {/* Original Get Quote CTA Button */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:flex"
            >
              <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group hidden lg:flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  GET QUOTE
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-200 ${isCompact ? 'text-gray-800' : 'text-white'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu - Enhanced */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`lg:hidden mt-4 py-4 border-t max-h-96 overflow-y-auto scrollbar-hide ${isCompact
                ? 'border-gray-200 bg-white/95 backdrop-blur-lg rounded-lg mx-4 shadow-lg'
                : 'border-gray-700'
                }`}
            >
              <div className={`flex flex-col gap-2 ${isCompact ? 'px-4' : ''}`}>
                <a
                  href="/"
                  className={`font-semibold py-2 transition-colors ${isCompact
                    ? 'text-gray-800 hover:text-brand-primary'
                    : 'text-white hover:text-brand-gold'
                    }`}
                >
                  HOME
                </a>
                <a
                  href="/about"
                  className={`font-semibold py-2 transition-colors ${isCompact
                    ? 'text-gray-800 hover:text-brand-primary'
                    : 'text-white hover:text-brand-gold'
                    }`}
                >
                  ABOUT US
                </a>

                {/* Mobile Events Accordion - Enhanced */}
                <div className="space-y-2">
                  <div className={`font-semibold py-2 border-b ${isCompact
                    ? 'text-gray-800 border-gray-200'
                    : 'text-white border-gray-600'
                    }`}>
                    EVENTS
                  </div>
                  {mobileEventsNavSections.map((section) => (
                    <div key={section.id} className="ml-4">
                      <button
                        onClick={() => toggleMobileEventExpansion(section.id)}
                        className={`flex items-center justify-between w-full text-left font-medium py-2 transition-colors ${isCompact
                          ? 'text-brand-primary hover:text-brand-primary/80'
                          : 'text-brand-gold hover:text-brand-gold/80'
                          }`}
                      >
                        {section.label}
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${expandedMobileEvents === section.id ? 'rotate-180' : ''
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
                                className={`block text-sm py-1 transition-colors ${isCompact
                                  ? 'text-gray-600 hover:text-brand-primary'
                                  : 'text-gray-300 hover:text-white'
                                  }`}
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

                {/* Mobile Services Accordion - Enhanced */}
                <div className="space-y-2">
                  <div className={`font-semibold py-2 border-b ${isCompact
                    ? 'text-gray-800 border-gray-200'
                    : 'text-white border-gray-600'
                    }`}>
                    SERVICES
                  </div>
                  {mobileServicesNavSections.map((section) => (
                    <div key={section.id} className="ml-4">
                      <button
                        onClick={() => toggleMobileServiceExpansion(section.id)}
                        className={`flex items-center justify-between w-full text-left font-medium py-2 transition-colors ${isCompact
                          ? 'text-brand-primary hover:text-brand-primary/80'
                          : 'text-brand-gold hover:text-brand-gold/80'
                          }`}
                      >
                        {section.label}
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${expandedMobileServices === section.id ? 'rotate-180' : ''
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
                                className={`block text-sm py-1 transition-colors ${isCompact
                                  ? 'text-gray-600 hover:text-brand-primary'
                                  : 'text-gray-300 hover:text-white'
                                  }`}
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

                <a
                  href="/blogs"
                  className={`font-semibold py-2 transition-colors ${isCompact
                    ? 'text-gray-800 hover:text-brand-primary'
                    : 'text-white hover:text-brand-gold'
                    }`}
                >
                  BLOGS
                </a>
                <a
                  href="#reviews"
                  className={`font-semibold py-2 transition-colors ${isCompact
                    ? 'text-gray-800 hover:text-brand-primary'
                    : 'text-white hover:text-brand-gold'
                    }`}
                >
                  REVIEWS
                </a>
                <a
                  href="#contact"
                  className={`font-semibold py-2 transition-colors ${isCompact
                    ? 'text-gray-800 hover:text-brand-primary'
                    : 'text-white hover:text-brand-gold'
                    }`}
                >
                  CONTACT US
                </a>

                {/* Mobile Get Quote Button - Enhanced */}
                <motion.button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg mt-4 relative overflow-hidden group ${isCompact
                    ? 'bg-brand-primary hover:bg-brand-primary/90 text-white'
                    : 'bg-brand-gold hover:bg-brand-gold-dark text-brand-primary'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    GET QUOTE
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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