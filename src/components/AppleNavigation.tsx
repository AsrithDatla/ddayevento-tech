import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const AppleNavigation: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center gap-3">
                            <img 
                                src="/D-Day_Evento_logo.png" 
                                alt="D-Day Evento - Hyderabad's Most Trusted Event Planners"
                                className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
                            />
                            <span className="text-brand-teal text-sm sm:text-lg md:text-xl font-normal font-['Pacifico'] whitespace-nowrap leading-none">
                                D-Day Evento
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                            Home
                        </a>

                        {/* Events Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                                Events
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 hidden group-hover:block z-50">
                                <div className="p-2">
                                    <a href="/events/traditional" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Traditional Events
                                    </a>
                                    <a href="/events/weddings" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Wedding Events
                                    </a>
                                    <a href="/events/birthdays" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Birthday Celebrations
                                    </a>
                                    <a href="/events/corporate-events" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Corporate Events
                                    </a>
                                    <a href="/events/special-days" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Special Occasions
                                    </a>
                                    <a href="/events/college-events" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        College Events
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                                Services
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 hidden group-hover:block z-50">
                                <div className="p-2">
                                    <a href="/services#planning" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Event Planning & Management
                                    </a>
                                    <a href="/services#decoration" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Decoration & Design
                                    </a>
                                    <a href="/services#photography" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Photography & Videography
                                    </a>
                                    <a href="/services#entertainment" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Entertainment & Activities
                                    </a>
                                    <a href="/services#catering" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Food & Catering
                                    </a>
                                    <a href="/services#makeup" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Makeup & Styling
                                    </a>
                                    <a href="/services#cakes" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Cakes & Confectionery
                                    </a>
                                    <a href="/services#gifts" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Return Gifts & Souvenirs
                                    </a>
                                    <a href="/services#rentals" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Tent House Materials & Rentals
                                    </a>
                                    <a href="/services#venue" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Venue Booking & Setup
                                    </a>
                                    <a href="/services#specialized" className="block p-2 rounded hover:bg-gray-50 text-sm">
                                        Specialized Services
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="/about" className="text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                            About
                        </a>
                        <a href="/contact" className="text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                            Contact
                        </a>

                        {/* CTA Button */}
                        <button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                            Get Quote
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-900 hover:text-brand-primary transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-6 space-y-4">
                        <a href="/" className="block text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                            Home
                        </a>
                        <a href="/events" className="block text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                            Events
                        </a>
                        <a href="/services" className="block text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                            Services
                        </a>
                        <a href="/about" className="block text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                            About
                        </a>
                        <a href="/contact" className="block text-gray-900 hover:text-brand-primary transition-colors duration-200 font-medium">
                            Contact
                        </a>
                        <button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                            Get Quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default AppleNavigation;