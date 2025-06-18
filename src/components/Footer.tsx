import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

// Snapchat icon component since it's not in lucide-react
const SnapchatIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.405.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
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

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
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
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/final-white-logo-400-120.png" 
                alt="D-Day Evento" 
                className="w-32 h-10 object-contain"
              />
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
              <h4 className="text-lg font-semibold mb-6 text-brand-gold font-dancing">{category}</h4>
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
    </footer>
  );
};

export default Footer;