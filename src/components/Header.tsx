import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteModal from './QuoteGenerator/QuoteModal';
import {
  desktopEventsNavSections,
  desktopServicesNavSections,
  mobileEventsNavSections,
  generateEventUrl
} from '../data/navConfig';

const Header: React.FC = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileEvents, setExpandedMobileEvents] = useState<string | null>(null);
  const [expandedMobileServices, setExpandedMobileServices] = useState<string | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img className="h-26" src="/mainlogo.png" alt="D-Day Evento" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-black hover:text-brand-teal font-semibold">HOME</Link>
            <Link to="/about" className="text-black hover:text-brand-teal font-semibold">ABOUT US</Link>

            {/* Events Dropdown */}
            <div className="relative group"
              onMouseEnter={() => { setIsEventsOpen(true); setActiveSubmenu(desktopEventsNavSections[0]?.id || null); }}
              onMouseLeave={() => setIsEventsOpen(false)}>
              <button className="flex items-center gap-1 text-black hover:text-brand-gold font-semibold py-4">
                EVENTS <ChevronDown size={16} className={`transition-transform duration-200 ${isEventsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isEventsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 z-50">
                  <div className="bg-white shadow-2xl border border-gray-100 w-[800px] rounded-xl p-0 overflow-hidden">
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
                                  <Link key={index} to={item.href || generateEventUrl(section.id, item.name)} onClick={() => setIsEventsOpen(false)}
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors group">
                                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                                    <span className="text-gray-700 group-hover:text-brand-primary font-medium text-sm">{item.name}</span>
                                    <ArrowRight size={14} className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </Link>
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
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center gap-1 text-black hover:text-brand-teal font-semibold py-4">
                SERVICES <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 z-50">
                  <div className="bg-white shadow-2xl border border-gray-100 w-[700px] rounded-xl p-0 overflow-hidden">
                    <div className="bg-teal-600 text-white py-4 px-6 rounded-t-xl">
                      <h3 className="text-xl font-bold text-center">Our Services</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {desktopServicesNavSections.map((service) => (
                          <Link key={service.id} to={service.href} onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group border border-transparent hover:border-brand-gold/20">
                            <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" />
                            <span className="text-gray-700 group-hover:text-brand-primary font-medium text-sm leading-relaxed">{service.label}</span>
                            <ArrowRight size={14} className="ml-auto text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blogs" className="text-black hover:text-brand-teal font-semibold">BLOGS</Link>
            <Link to="/reviews" className="text-black hover:text-brand-teal font-semibold">REVIEWS</Link>
            <Link to="/contact" className="text-black hover:text-brand-teal font-semibold">CONTACT US</Link>
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 hidden md:flex">
              GET QUOTE
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <Link to="/about" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>

              {/* Mobile Events Accordion */}
              <div>
                <button onClick={() => toggleMobileEventExpansion('events-main')} className="w-full flex justify-between items-center font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span>EVENTS</span>
                  <ChevronDown size={16} className={`transform transition-transform ${expandedMobileEvents ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileEvents && (
                  <div className="pl-6 pr-3 overflow-hidden">
                    {mobileEventsNavSections.map((section) => (
                      <div key={section.id} className="pt-2">
                        <h4 className="font-bold text-brand-primary text-sm py-2">{section.label}</h4>
                        <div className="flex flex-col items-start space-y-1 pb-2">
                          {section.items.map((item, index) => (
                            <Link key={index} to={item.href || generateEventUrl(section.id, item.name)} onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm py-1.5 text-gray-600 hover:text-brand-primary w-full text-left">{item.name}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div>
                <button onClick={() => toggleMobileServiceExpansion('services-main')} className="w-full flex justify-between items-center font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <span>SERVICES</span>
                  <ChevronDown size={16} className={`transform transition-transform ${expandedMobileServices ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileServices && (
                  <div className="pl-6 pr-3 overflow-hidden">
                    <div className="pt-2">
                      <div className="flex flex-col items-start space-y-1 pb-2">
                        {desktopServicesNavSections.map((service) => (
                          <Link key={service.id} to={service.href} onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm py-1.5 text-gray-600 hover:text-brand-primary w-full text-left">{service.label}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/blogs" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>BLOGS</Link>
              <Link to="/reviews" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>REVIEWS</Link>
              <Link to="/contact" className="font-semibold py-3 px-3 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>

              <button
                onClick={() => { setIsQuoteModalOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full bg-brand-primary text-white py-3 mt-2 rounded-lg font-bold text-sm">
                GET A FREE QUOTE
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </header>
  );
};

export default Header;