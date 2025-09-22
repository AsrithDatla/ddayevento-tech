import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Clock, Users } from 'lucide-react';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
  showOnScroll?: boolean;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  phoneNumber = '917386813689',
  message = 'Hi! I\'m interested in your event planning services. Can you help me with a quote?',
  position = 'bottom-right',
  showOnScroll = true
}) => {
  const [isVisible, setIsVisible] = useState(!showOnScroll);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show/hide based on scroll
  useEffect(() => {
    if (!showOnScroll) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOnScroll]);

  // Show tooltip after delay
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Hide tooltip after showing for a while
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Track click event for analytics and lead scoring
    if (typeof window !== 'undefined' && 'gtag' in window) {
type GTag = (...args: (string | number | Record<string, unknown>)[]) => void;

// ...

      const gtag = (window as { gtag?: GTag }).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: 'floating_button',
          value: 1
        });
      }
    }
    
    // Track WhatsApp engagement for lead scoring
    try {
      fetch('/api/analytics/whatsapp-engagement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'floating_button',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.log('Analytics tracking failed:', error);
    }
    
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <AnimatePresence>
        {/* Tooltip */}
        {showTooltip && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className={`absolute bottom-20 ${position === 'bottom-right' ? 'right-0' : 'left-0'} mb-2`}
          >
            <div className="bg-white rounded-lg shadow-lg border p-3 max-w-xs relative">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600"
              >
                <X size={12} />
              </button>
              <div className="text-sm text-gray-800 font-medium mb-1">
                Need help planning your event?
              </div>
              <div className="text-xs text-gray-600 mb-2">
                Chat with us on WhatsApp for instant assistance!
              </div>
              <div className="flex items-center gap-2 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Online now</span>
              </div>
              {/* Arrow */}
              <div className={`absolute top-full ${position === 'bottom-right' ? 'right-4' : 'left-4'} w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white`}></div>
            </div>
          </motion.div>
        )}

        {/* Expanded Chat Preview */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`absolute bottom-20 ${position === 'bottom-right' ? 'right-0' : 'left-0'} mb-2`}
          >
            <div className="bg-white rounded-2xl shadow-2xl border w-80 overflow-hidden">
              {/* Header */}
              <div className="bg-whatsapp text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">D-Day Evento</div>
                    <div className="text-xs opacity-90 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                      Online now
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Content */}
              <div className="p-4 bg-gray-50 max-h-60 overflow-y-auto">
                <div className="space-y-3">
                  {/* Bot Message */}
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-whatsapp rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={14} className="text-white" />
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                      <div className="text-sm text-gray-800">
                        👋 Hi! Welcome to D-Day Evento!
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        How can we help you plan your perfect event?
                      </div>
                    </div>
                  </div>

                  {/* Quick Options */}
                  <div className="space-y-2 ml-10">
                    <button className="block w-full text-left bg-blue-50 hover:bg-blue-100 rounded-lg p-2 text-sm text-blue-800 transition-colors">
                      🎉 Get Event Quote
                    </button>
                    <button className="block w-full text-left bg-purple-50 hover:bg-purple-100 rounded-lg p-2 text-sm text-purple-800 transition-colors">
                      📅 Check Availability
                    </button>
                    <button className="block w-full text-left bg-green-50 hover:bg-green-100 rounded-lg p-2 text-sm text-green-800 transition-colors">
                      💬 Chat with Expert
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-white border-t">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white rounded-lg py-3 px-4 font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Continue on WhatsApp
                </button>
                <div className="text-xs text-gray-500 text-center mt-2">
                  Usually replies within minutes
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative w-14 h-14 bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-20"></div>
        
        {/* Icon */}
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
          1
        </div>
      </motion.button>

      {/* Quick Stats (shown on hover) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute bottom-20 ${position === 'bottom-right' ? 'right-16' : 'left-16'} mb-2`}
          >
            <div className="bg-white rounded-lg shadow-lg border p-3 text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-green-600">
                  <Users size={12} />
                  <span>400+ Events</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <Clock size={12} />
                  <span>2min Response</span>
                </div>
                <div className="flex items-center gap-1 text-purple-600">
                  <Phone size={12} />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppFloat;