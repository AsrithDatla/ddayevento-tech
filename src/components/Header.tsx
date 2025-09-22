import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import QuoteModal from './QuoteGenerator/QuoteModal';
import {
  desktopEventsNavSections,
  desktopServicesNavSections,
  mobileEventsNavSections,
  mobileServicesNavSections,
  generateEventUrl,
  generateServiceUrl
} from '../data/navConfig';

const Header: React.FC = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileEvents, setExpandedMobileEvents] = useState<string | null>(null);
  const [expandedMobileServices, setExpandedMobileServices] = useState<string | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeServicesSubmenu, setActiveServicesSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <img className="h-26" src="/mainlogo.png" alt="D-Day Evento" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-black hover:text-brand-teal font-semibold">HOME</a>
            <a href="/about" className="text-black hover:text-brand-teal font-semibold">ABOUT US</a>
            
            {/* Events Dropdown */}
            <div className="group"
                 onMouseEnter={() => { setIsEventsOpen(true); setActiveSubmenu(desktopEventsNavSections[0]?.id || null); }}
                 onMouseLeave={() => setIsEventsOpen(false)}>
              <button className="flex items-center gap-1 text-black hover:text-brand-gold font-semibold">
                EVENTS <ChevronDown size={16} className={`transition-transform duration-200 ${isEventsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isEventsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                    className="fixed top-30 left-0 right-0 w-full flex justify-center z-50 pointer-events-none">
                    <div className="bg-white shadow-2xl border border-gray-100 w-[950px] max-w-[90vw] rounded-xl p-0 overflow-hidden pointer-events-auto">
                      <div className="flex">
                        <div className="w-64 bg-gray-50 p-4 rounded-l-xl border-r">
                          <div className="space-y-1">
                            {desktopEventsNavSections.map((section) => (
                              <button
                                key={section.id}
                                onMouseEnter={() => setActiveSubmenu(section.id)}
                                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-between text-sm font-medium ${activeSubmenu === section.id ? 'bg-brand-primary text-white shadow-sm' : 'text-gray-700 hover:bg-white'}`}>
                                {section.label}
                                <ChevronRight size={16} />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1 p-6">
                          {desktopEventsNavSections.find(s => s.id === activeSubmenu)?.items.length ? (
                            desktopEventsNavSections.map((section) => (
                              <div key={section.id} className={`${activeSubmenu === section.id ? 'block' : 'hidden'}`}>
                                <h3 className="text-xl font-bold text-brand-primary mb-4">{section.label}</h3>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                  {section.items.map((item, index) => (
                                    <a key={index} href={generateEventUrl(section.id, item)} onClick={() => setIsEventsOpen(false)}
                                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors group">
                                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                                      <span className="text-gray-700 group-hover:text-brand-primary font-medium text-sm">{item}</span>
                                      <ArrowRight size={14} className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-10 text-gray-500">Select a category</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div className="group"
                 onMouseEnter={() => { setIsServicesOpen(true); setActiveServicesSubmenu(desktopServicesNavSections[0]?.id || null); }}
                 onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center gap-1 text-black hover:text-brand-teal font-semibold">
                SERVICES <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
                    className="fixed top-30 left-0 right-0 w-full flex justify-center z-50 pointer-events-none">
                    <div className="bg-white shadow-2xl border border-gray-100 w-[950px] max-w-[90vw] rounded-xl p-0 overflow-hidden pointer-events-auto">
                      <div className="flex">
                        <div className="w-64 bg-gray-50 p-4 rounded-l-xl border-r">
                          <div className="space-y-1">
                            {desktopServicesNavSections.map((section) => (
                              <button
                                key={section.id}
                                onMouseEnter={() => setActiveServicesSubmenu(section.id)}
                                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-between text-sm font-medium ${activeServicesSubmenu === section.id ? 'bg-brand-primary text-white shadow-sm' : 'text-gray-700 hover:bg-white'}`}>
                                {section.label}
                                <ChevronRight size={16} />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1 p-6">
                          {desktopServicesNavSections.find(s => s.id === activeServicesSubmenu)?.items.length ? (
                            desktopServicesNavSections.map((section) => (
                              <div key={section.id} className={`${activeServicesSubmenu === section.id ? 'block' : 'hidden'}`}>
                                <h3 className="text-xl font-bold text-brand-primary mb-4">{section.label}</h3>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                  {section.items.map((item, index) => (
                                    <a key={index} href={generateServiceUrl(section.id, item)} onClick={() => setIsServicesOpen(false)}
                                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors group">
                                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                                      <span className="text-gray-700 group-hover:text-brand-primary font-medium text-sm">{item}</span>
                                      <ArrowRight size={14} className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-10 text-gray-500">Select a category</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/blogs" className="text-black hover:text-brand-teal font-semibold">BLOGS</a>
            <a href="/reviews" className="text-black hover:text-brand-teal font-semibold">REVIEWS</a>
            <a href="/contact" className="text-black hover:text-brand-teal font-semibold">CONTACT US</a>
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
             <motion.button
               onClick={() => setIsQuoteModalOpen(true)}
               className="bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 hidden md:flex"
               whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               GET QUOTE
             </motion.button>
             
             {/* Mobile Menu Button */}
             <button
              className="md:hidden p-2"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-2">
                <a href="/" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
                <a href="/about" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</a>

                {/* Mobile Events Accordion */}
                <div>
                  <button onClick={() => toggleMobileEventExpansion('events-main')} className="w-full flex justify-between items-center font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <span>EVENTS</span>
                    <ChevronDown size={16} className={`transform transition-transform ${expandedMobileEvents ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {expandedMobileEvents && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-6 pr-3 overflow-hidden">
                        {mobileEventsNavSections.map((section) => (
                          <div key={section.id} className="pt-2">
                             <h4 className="font-bold text-brand-primary text-sm py-2">{section.label}</h4>
                             <div className="flex flex-col items-start space-y-1 pb-2">
                              {section.items.map((item, index) => (
                                <a key={index} href={generateEventUrl(section.id, item)} onClick={() => setIsMobileMenuOpen(false)}
                                   className="block text-sm py-1.5 text-gray-600 hover:text-brand-primary w-full text-left">{item}</a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Services Accordion */}
                <div>
                  <button onClick={() => toggleMobileServiceExpansion('services-main')} className="w-full flex justify-between items-center font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <span>SERVICES</span>
                    <ChevronDown size={16} className={`transform transition-transform ${expandedMobileServices ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {expandedMobileServices && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pl-6 pr-3 overflow-hidden">
                        {mobileServicesNavSections.map((section) => (
                          <div key={section.id} className="pt-2">
                             <h4 className="font-bold text-brand-primary text-sm py-2">{section.label}</h4>
                             <div className="flex flex-col items-start space-y-1 pb-2">
                              {section.items.map((item, index) => (
                                <a key={index} href={generateServiceUrl(section.id, item)} onClick={() => setIsMobileMenuOpen(false)}
                                   className="block text-sm py-1.5 text-gray-600 hover:text-brand-primary w-full text-left">{item}</a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="/blogs" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>BLOGS</a>
                <a href="#reviews" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>REVIEWS</a>
                <a href="#contact" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</a>
                
                <motion.button
                  onClick={() => { setIsQuoteModalOpen(true); setIsMobileMenuOpen(false); }}
                  className="w-full bg-brand-primary text-white py-3 mt-2 rounded-lg font-bold text-sm"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  GET A FREE QUOTE
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </header>
  );
};

export default Header;