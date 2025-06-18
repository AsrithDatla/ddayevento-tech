import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Check } from 'lucide-react';

const Packages: React.FC = () => {
  const packages = [
    {
      name: 'Essential',
      price: '₹25,000',
      description: 'Perfect for intimate gatherings',
      features: [
        'Basic Decoration',
        'Photography (2 hours)',
        'Simple Catering',
        'Event Coordination'
      ]
    },
    {
      name: 'Premium',
      price: '₹75,000',
      description: 'Ideal for medium-scale events',
      features: [
        'Premium Decoration',
        'Photography & Videography',
        'Multi-cuisine Catering',
        'Entertainment',
        'Full Event Management'
      ],
      popular: true
    },
    {
      name: 'Luxury',
      price: '₹1,50,000',
      description: 'For grand celebrations',
      features: [
        'Luxury Decoration & Lighting',
        'Professional Photography & Videography',
        'Premium Catering',
        'Live Entertainment',
        'Complete Event Planning',
        'Dedicated Event Manager'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-dancing">
              Our Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted packages designed to suit every celebration and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border ${
                  pkg.popular ? 'border-brand-primary ring-2 ring-brand-primary/20' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={14} className="fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-dancing">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-brand-primary mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Choose Package
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom package? We'd love to create something special for you.
            </p>
            <button className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors">
              Request Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Packages;