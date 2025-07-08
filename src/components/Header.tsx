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

// Helper function to split and group items for 4 columns
function splitIntoFourColumns<T extends { subEvents?: any[]; subServices?: any[] }>(items: T[]): T[][] {
  // Group items with >1 subItems first, then those with 1 or none
  const withMany = items.filter(item => (item.subEvents ? item.subEvents.length : (item.subServices ? item.subServices.length : 0)) > 1);
  const withOneOrNone = items.filter(item => (item.subEvents ? item.subEvents.length : (item.subServices ? item.subServices.length : 0)) <= 1);

  // Combine, so all with 1 or none are at the end
  const sorted = [...withMany, ...withOneOrNone];

  // Split into 4 columns as evenly as possible
  const columns: T[][] = [[], [], [], []];
  sorted.forEach((item, idx) => {
    columns[idx % 4].push(item);
  });
  return columns;
}

// Helper to get the main event by id
function getEventById(id: string) {
  return eventsData.find(event => event.id === id);
}

// Custom column order
const COLUMN_HEADINGS = [
  { id: 'weddings', label: 'Weddings' },
  { id: 'college-events', label: 'College Events' },
  { id: 'corporate-events', label: 'Corporate Events' },
  { id: 'festivals-special-days', label: 'Festivals/Special Days' }
];

// Build columns: each starts with its main heading, then fill with others
function buildEventColumns() {
  // Get the main events for each column
  const columns = COLUMN_HEADINGS.map(heading => {
    const mainEvent = getEventById(heading.id);
    return mainEvent ? [mainEvent] : [];
  });

  // Gather all other events not in the main headings
  const usedIds = new Set(COLUMN_HEADINGS.map(h => h.id));
  const otherEvents = eventsData.filter(event => !usedIds.has(event.id));

  // Distribute other events evenly into columns
  otherEvents.forEach((event, idx) => {
    columns[idx % 4].push(event);
  });

  return columns;
}

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

  const eventColumns = buildEventColumns();
  const servicesColumns = splitIntoFourColumns(servicesData);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg">
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-0.5 md:py-1">
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
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/final-white-logo-400-120.png" 
              alt="D-Day Evento" 
              className="w-44 h-10 md:w-56 md:h-12 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
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
                    className="absolute top-full left-[-450px] mt-2 bg-white shadow-xl border border-gray-200 w-[1100px] max-w-[calc(100vw-32px)] max-h-[500px] overflow-y-auto overflow-x-auto rounded-lg p-6 z-50"
                    onMouseEnter={() => setIsEventsOpen(true)}
                    onMouseLeave={() => setIsEventsOpen(false)}
                  >
                    <div className="grid grid-cols-4 gap-6 w-full">
                      {/* Traditional Events */}
                      <div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">Traditional Events</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Cradle Ceremony</div>
                          <div className="text-sm text-gray-600">Naming Ceremony</div>
                          <div className="text-sm text-gray-600">Annaprasana</div>
                          <div className="mt-2 text-sm text-gray-600">Baby Shower</div>
                          <div className="text-sm text-gray-600">Sreemantham</div>
                          <div className="mt-2 text-sm text-gray-600">Half Saree Function</div>
                          <div className="text-sm text-gray-600">Dhoti Function</div>
                          <div className="text-sm text-gray-600">Upanayanam Ceremony</div>
                          <div className="mt-2 text-sm text-gray-600">House Warming</div>
                          <div className="text-sm text-gray-600">Gruhapravesham</div>
                        </div>
                      </div>
                      {/* Weddings Events */}
                      <div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">Weddings Events</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Engagement</div>
                          <div className="text-sm text-gray-600">Pellikoduku</div>
                          <div className="text-sm text-gray-600">Pellikuthuru</div>
                          <div className="text-sm text-gray-600">Haldi</div>
                          <div className="text-sm text-gray-600">Mehendi</div>
                          <div className="text-sm text-gray-600">Bachelors Party</div>
                          <div className="text-sm text-gray-600">Sangeet</div>
                          <div className="text-sm text-gray-600">Bharath</div>
                          <div className="text-sm text-gray-600">Wedding Day</div>
                          <div className="text-sm text-gray-600">Reception</div>
                        </div>
                      </div>
                      {/* Birthdays & Corporate Events */}
                      <div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">Birthdays</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Baby Welcoming Event</div>
                          <div className="text-sm text-gray-600">Cake smash</div>
                          <div className="text-sm text-gray-600">1st Year Birthday Parties</div>
                          <div className="text-sm text-gray-600">Kids Yearly Birthdays</div>
                          <div className="text-sm text-gray-600">Adult Birthday Parties</div>
                        </div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing mt-6">Corporate Events</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Corporate Party</div>
                          <div className="text-sm text-gray-600">Team Day Outings</div>
                          <div className="text-sm text-gray-600">Office Parties</div>
                          <div className="text-sm text-gray-600">Team Lunch/Dinner</div>
                          <div className="text-sm text-gray-600">Daily Catering Boxes</div>
                        </div>
                      </div>
                      {/* Special Days & College Events */}
                      <div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">Special Days</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Surprise Parties</div>
                          <div className="text-sm text-gray-600">Kitty Parties</div>
                          <div className="text-sm text-gray-600">House Parties</div>
                          <div className="text-sm text-gray-600">Candle Light Dinners</div>
                          <div className="text-sm text-gray-600">Valentines/Proposal</div>
                          <div className="text-sm text-gray-600">Retirement Day</div>
                          <div className="text-sm text-gray-600">Anniversaries</div>
                        </div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing mt-6">College Events</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Annual Day</div>
                          <div className="text-sm text-gray-600">Sports Day</div>
                          <div className="text-sm text-gray-600">Cultural Day</div>
                          <div className="text-sm text-gray-600">Freshers Day</div>
                          <div className="text-sm text-gray-600">Farewell Day</div>
                          <div className="text-sm text-gray-600">Convocation Day</div>
                        </div>
                      </div>
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
                      {/* Decoration */}
                      <div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">Decoration</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Theme-Based Stage Decoration</div>
                          <div className="text-sm text-gray-600">Balloon Decoration</div>
                          <div className="text-sm text-gray-600">Floral Decoration</div>
                          <div className="text-sm text-gray-600">Fabric Drapes & Canopies</div>
                          <div className="text-sm text-gray-600">LED / Neon Signage</div>
                          <div className="text-sm text-gray-600">Entry Gate Setup</div>
                          <div className="text-sm text-gray-600">Welcome Board & Easel Setup</div>
                          <div className="text-sm text-gray-600">Table Styling</div>
                          <div className="text-sm text-gray-600">Photo Booth / Backdrop Walls</div>
                          <div className="text-sm text-gray-600">Themed Props & Cutouts</div>
                          <div className="text-sm text-gray-600">Hanging / Ceiling Decor</div>
                          <div className="text-sm text-gray-600">LED Letters & Numbers</div>
                          <div className="text-sm text-gray-600">Decor Lighting</div>
                        </div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing mt-6">Cakes</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Custom Theme Cakes</div>
                          <div className="text-sm text-gray-600">Fondant / Cream Cakes</div>
                          <div className="text-sm text-gray-600">Dessert Table Styling</div>
                          <div className="text-sm text-gray-600">Cupcakes, Brownies, Macarons</div>
                          <div className="text-sm text-gray-600">Name Cakes / Number Cakes</div>
                          <div className="text-sm text-gray-600">Eggless / Egg Options</div>
                          <div className="text-sm text-gray-600">Smash Cake for Babies</div>
                          <div className="text-sm text-gray-600">Instant Cake Cutting Setup</div>
                        </div>
                      </div>
                      {/* Photography & Videography + Return Gifts */}
                      <div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">Photography & Videography</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Regular Photography</div>
                          <div className="text-sm text-gray-600">Regular Videography</div>
                          <div className="text-sm text-gray-600">Candid Photography</div>
                          <div className="text-sm text-gray-600">Candid Videography</div>
                          <div className="text-sm text-gray-600">Teaser / Trailer Video</div>
                          <div className="text-sm text-gray-600">Drone Photography & Video</div>
                          <div className="text-sm text-gray-600">Instant Photo Printing Booth</div>
                          <div className="text-sm text-gray-600">Live Streaming</div>
                          <div className="text-sm text-gray-600">Photo Album Design & Printing</div>
                          <div className="text-sm text-gray-600">Same-Day Edits</div>
                        </div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 font-dancing mt-16">Return Gifts</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Personalized Gifts</div>
                          <div className="text-sm text-gray-600">Theme-Based Gift Boxes</div>
                          <div className="text-sm text-gray-600">Sweet Boxes / Custom Hampers</div>
                          <div className="text-sm text-gray-600">Eco-Friendly Gifts</div>
                          <div className="text-sm text-gray-600">Toys / Stationery Sets</div>
                          <div className="text-sm text-gray-600">Utility Gift Packs</div>
                          <div className="text-sm text-gray-600">Trousseau Packing</div>
                          <div className="text-sm text-gray-600">Premium Packing & Tagging</div>
                          <div className="text-sm text-gray-600">Gift Counters with Attendants</div>
                        </div>
                      </div>
                      {/* Food & Catering + Makeup & Styling */}
                      <div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">Food & Catering</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Veg / Non-Veg Catering</div>
                          <div className="text-sm text-gray-600">South Indian</div>
                          <div className="text-sm text-gray-600">North Indian</div>
                          <div className="text-sm text-gray-600">Continental</div>
                          <div className="text-sm text-gray-600">Italian</div>
                          <div className="text-sm text-gray-600">Indo-Chinese</div>
                          <div className="text-sm text-gray-600">Pan Asian</div>
                          <div className="text-sm text-gray-600">Live Counters/Stalls</div>
                          <div className="text-sm text-gray-600">Cutlery</div>
                          <div className="text-sm text-gray-600">Waiter / Staff Management</div>
                        </div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing mt-24">Makeup & Styling</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Party Makeup</div>
                          <div className="text-sm text-gray-600">Bridal Makeup</div>
                          <div className="text-sm text-gray-600">Groom Makeup & Styling</div>
                          <div className="text-sm text-gray-600">Saree/Half Saree Draping</div>
                          <div className="text-sm text-gray-600">Hair Styling & Hairdo</div>
                          <div className="text-sm text-gray-600">Mehendi Artist</div>
                          <div className="text-sm text-gray-600">Nail Art Station</div>
                          <div className="text-sm text-gray-600">Touch-Up Corner</div>
                          <div className="text-sm text-gray-600">Group Makeup</div>
                          <div className="text-sm text-gray-600">Makeup Trials</div>
                        </div>
                      </div>
                      {/* Venue Booking & Setup + Entertainment & Activities */}
                      <div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing">Venue Booking & Setup</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Venue Selection & Booking Assistance</div>
                          <div className="text-sm text-gray-600">Banquet Hall Coordination</div>
                          <div className="text-sm text-gray-600">Outdoor / Garden Venue Setup</div>
                          <div className="text-sm text-gray-600">Farmhouse Booking</div>
                          <div className="text-sm text-gray-600">Stage & Seating Arrangement</div>
                          <div className="text-sm text-gray-600">Parking Arrangement</div>
                        </div>
                        <div className="text-brand-primary font-bold text-2xl border-b border-gray-100 pb-2 mb-3 font-dancing mt-44">Entertainment & Activities</div>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">Music & Sound</div>
                          
                          <div className="text-sm text-gray-600">Grand Entry Concepts</div>
                          <div className="text-sm text-gray-600">Artists</div>
                          <div className="text-sm text-gray-600">Characters</div>
                          <div className="text-sm text-gray-600">Games</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
