import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Users, 
  Calendar, 
  Award, 
  Shield, 
  CheckCircle, 
  Heart,
  MapPin,
  Clock,
  Trophy
} from 'lucide-react';

interface TrustIndicatorProps {
  variant?: 'horizontal' | 'vertical' | 'compact' | 'badges';
  showAll?: boolean;
  className?: string;
}

const trustData = {
  stats: [
    {
      icon: Users,
      value: '500+',
      label: 'Events Completed',
      description: 'Successfully organized events across Hyderabad & Telangana',
      color: 'text-blue-600'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Average Rating',
      description: 'Based on 300+ verified client reviews',
      color: 'text-yellow-500'
    },
    {
      icon: Heart,
      value: '99%',
      label: 'Client Satisfaction',
      description: 'Clients who would recommend us to friends',
      color: 'text-red-500'
    },
    {
      icon: Calendar,
      value: '6+',
      label: 'Years Experience',
      description: 'Serving Hyderabad since 2018',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      value: '#1',
      label: 'In Hyderabad',
      description: 'Top-rated event planner in Greater Hyderabad',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
      description: 'Emergency support during events',
      color: 'text-indigo-600'
    }
  ],
  badges: [
    {
      icon: Award,
      title: 'Best Event Planner 2023',
      subtitle: 'Hyderabad Wedding Awards',
      color: 'bg-gradient-to-r from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Verified Business',
      subtitle: 'Google My Business',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      icon: CheckCircle,
      title: 'Licensed & Insured',
      subtitle: 'Fully Certified',
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      icon: Trophy,
      title: 'Excellence Award',
      subtitle: 'Customer Choice 2023',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  ],
  testimonialHighlights: [
    '"Best event planners in Hyderabad!" - Priya & Rajesh',
    '"Exceeded all our expectations!" - Anitha Reddy',
    '"Professional and creative team!" - Vikram Family',
    '"Made our day absolutely perfect!" - Meera & Suresh'
  ]
};

const TrustIndicators: React.FC<TrustIndicatorProps> = ({ 
  variant = 'horizontal', 
  showAll = true,
  className = ''
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (variant === 'compact') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`flex flex-wrap items-center justify-center gap-6 ${className}`}
      >
        {trustData.stats.slice(0, 4).map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm"
            >
              <IconComponent size={20} className={stat.color} />
              <div>
                <div className="font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  if (variant === 'badges') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}
      >
        {trustData.badges.map((badge, index) => {
          const IconComponent = badge.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${badge.color} text-white rounded-xl p-4 text-center shadow-lg`}
            >
              <IconComponent size={24} className="mx-auto mb-2" />
              <div className="font-semibold text-sm">{badge.title}</div>
              <div className="text-xs opacity-90">{badge.subtitle}</div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  if (variant === 'vertical') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`space-y-6 ${className}`}
      >
        {(showAll ? trustData.stats : trustData.stats.slice(0, 3)).map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                <IconComponent size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="font-semibold text-gray-700">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  // Default horizontal variant
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ${className}`}
    >
      {(showAll ? trustData.stats : trustData.stats.slice(0, 4)).map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className={`inline-flex p-3 rounded-full bg-gray-50 mb-3 ${stat.color}`}>
              <IconComponent size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="font-semibold text-gray-700 text-sm mb-1">{stat.label}</div>
            <div className="text-xs text-gray-600">{stat.description}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Floating trust badge component for hero sections
export const FloatingTrustBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={`bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-current" />
          ))}
        </div>
        <div>
          <div className="font-bold text-gray-800">4.9 Rating</div>
          <div className="text-xs text-gray-600">300+ Reviews</div>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-600">
        <span className="font-semibold text-brand-primary">500+ Events</span> • Hyderabad's #1
      </div>
    </motion.div>
  );
};

// Quick trust indicators for forms and CTAs
export const QuickTrustIndicators: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 ${className}`}>
      <div className="flex items-center gap-1">
        <CheckCircle size={16} className="text-green-500" />
        <span>Licensed & Insured</span>
      </div>
      <div className="flex items-center gap-1">
        <Star size={16} className="text-yellow-500" />
        <span>4.9 Rating</span>
      </div>
      <div className="flex items-center gap-1">
        <Users size={16} className="text-blue-500" />
        <span>500+ Events</span>
      </div>
      <div className="flex items-center gap-1">
        <Shield size={16} className="text-purple-500" />
        <span>Verified Business</span>
      </div>
    </div>
  );
};

// Testimonial ticker for continuous social proof
export const TestimonialTicker: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`overflow-hidden bg-brand-primary/5 py-2 ${className}`}>
      <motion.div
        animate={{ x: [0, -100] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...trustData.testimonialHighlights, ...trustData.testimonialHighlights].map((testimonial, index) => (
          <span key={index} className="text-sm text-gray-600 flex items-center gap-2">
            <Star size={14} className="text-yellow-400 fill-current" />
            {testimonial}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// Inline trust indicators for CTAs and buttons
export const InlineTrustIndicators: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-6 text-xs text-gray-500 ${className}`}>
      <div className="flex items-center gap-1">
        <Star size={12} className="text-yellow-400 fill-current" />
        <span>4.9/5 Rating</span>
      </div>
      <div className="flex items-center gap-1">
        <Users size={12} className="text-blue-500" />
        <span>500+ Happy Clients</span>
      </div>
      <div className="flex items-center gap-1">
        <Shield size={12} className="text-green-500" />
        <span>Fully Insured</span>
      </div>
    </div>
  );
};



// Local focus trust indicators
export const LocalTrustIndicators: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${className}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Trusted Across Hyderabad</h3>
        <p className="text-sm text-gray-600">Serving the Greater Hyderabad area with excellence</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-primary">500+</div>
          <div className="text-xs text-gray-600">Events in Hyderabad</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-primary">50+</div>
          <div className="text-xs text-gray-600">Venues Covered</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-primary">6+</div>
          <div className="text-xs text-gray-600">Years Local Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-primary">24/7</div>
          <div className="text-xs text-gray-600">Local Support</div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <MapPin size={14} className="text-brand-primary" />
          <span>Proudly serving Gachibowli, Madhapur, Kondapur, Jubilee Hills & surrounding areas</span>
        </div>
      </div>
    </motion.div>
  );
};

// Security and certification indicators
export const SecurityTrustIndicators: React.FC<{ className?: string }> = ({ className = '' }) => {
  const securityFeatures = [
    { icon: Shield, label: 'Licensed Business', description: 'Registered with Telangana Govt.' },
    { icon: CheckCircle, label: 'Fully Insured', description: 'Comprehensive event insurance' },
    { icon: Award, label: 'Certified Planners', description: 'Professional event management certification' },
    { icon: Trophy, label: 'Award Winning', description: 'Multiple industry recognitions' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gray-50 rounded-2xl p-6 ${className}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Your Trust, Our Priority</h3>
        <p className="text-sm text-gray-600">Professional certifications and security you can count on</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {securityFeatures.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
            >
              <div className="p-2 bg-brand-primary/10 rounded-lg">
                <IconComponent size={20} className="text-brand-primary" />
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-sm">{feature.label}</div>
                <div className="text-xs text-gray-600">{feature.description}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TrustIndicators;