import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight, Calendar } from 'lucide-react';

// Font Awesome Snapchat icon component
const SnapchatIcon = ({ size = 16, className = "" }) => (
  <i className={`fab fa-snapchat ${className}`} style={{ fontSize: `${size}px` }}></i>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '/about' },
      { name: 'Events', href: '#events' },
      { name: 'Services', href: '#services' }
    ],
    'Services': [
      { name: 'Wedding Planning', href: '#services' },
      { name: 'Corporate Events', href: '#services' },
      { name: 'Birthday Parties', href: '#services' },
      { name: 'Baby Showers', href: '#services' }
    ],
    'Support': [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Get Quote', href: '#quote' },
      { name: 'Reviews', href: '#reviews' },
      { name: 'Gallery', href: '#gallery' }
    ]
  };

  // State for the quote modal - will be used when implementing the modal
  const [, setIsQuoteModalOpen] = React.useState(false);

  return (
    <footer className="relative">
      {/* Floating CTA Section */}

      {/* Main Footer Content */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
        <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/D-Day_Evento_logo.png"
                  alt="D-Day Evento - Hyderabad's Most Trusted Event Planners"
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
                />
                <span className="text-brand-teal text-2xl md:text-3xl font-normal font-['Pacifico'] whitespace-nowrap leading-none">D-Day Evento</span>
              </a>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable celebrations in Hyderabad with style, elegance, and excellence. Your dream event is our passion.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-brand-gold" />
                <span>+91-7386813689</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-brand-gold" />
                <span>info@ddayevento.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} className="text-brand-gold" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-brand-gold font-heading">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-gray-300">Follow us:</span>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="bg-gray-700 p-2 rounded-full hover:bg-brand-primary transition-colors duration-300"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="bg-gray-700 p-2 rounded-full hover:bg-brand-primary transition-colors duration-300"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="bg-gray-700 p-2 rounded-full hover:bg-brand-primary transition-colors duration-300"
                >
                  <SnapchatIcon size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="bg-gray-700 p-2 rounded-full hover:bg-brand-primary transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-primary hover:bg-brand-primary/90 px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <Heart size={16} className="text-brand-gold" />
            <span>© {currentYear} D-Day Evento. All rights reserved.</span>
          </div>
          
          <div className="flex gap-6">
            <motion.a
              href="#"
              className="hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold"></div>
      </div>
    </footer>
  );
};

export default Footer;