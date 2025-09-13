import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

const ValueProp: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [counters, setCounters] = useState({
    years: 0,
    events: 0,
    clients: 0,
    support: 0
  });

  useEffect(() => {
    if (isInView) {
      const targets = {
        years: 4,
        events: 416,
        clients: 400,
        support: 24
      };

      Object.keys(targets).forEach((key) => {
        let start = 0;
        const end = targets[key as keyof typeof targets];
        const duration = 2000;
        const increment = end / (duration / 50);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounters(prev => ({ ...prev, [key]: end }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
          }
        }, 50);
      });
    }
  }, [isInView]);

  const stats = [
    {
      icon: Award,
      value: `${counters.years}+`,
      label: 'Years of Expertise',
      color: 'text-brand-primary'
    },
    {
      icon: Users,
      value: `${counters.events}+`,
      label: 'Events Delivered',
      color: 'text-brand-secondary'
    },
    {
      icon: Heart,
      value: `${counters.clients}+`,
      label: 'Happy Clients',
      color: 'text-pink-500'
    },
    {
      icon: Clock,
      value: `${counters.support}/7`,
      label: 'Dedicated Support',
      color: 'text-brand-gold'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-heading">
            Your One-Stop Experts for
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-8 font-heading">
            Unforgettable Celebrations
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            in Hyderabad and beyond
          </p>
        </motion.div>

        {/* Trust Bar with Animated Counters */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon size={32} className={stat.color} />
              </motion.div>
              
              <motion.div
                className="text-4xl font-bold text-gray-800 mb-2 font-heading"
                animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {stat.value}
              </motion.div>
              
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '300px' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-gold rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ValueProp;