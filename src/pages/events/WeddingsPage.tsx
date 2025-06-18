import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Star } from 'lucide-react';

const WeddingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart size={32} className="text-brand-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-dancing">
                Wedding Events
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make your special day unforgettable with our comprehensive wedding planning services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              'Engagement Ceremonies',
              'Haldi Celebrations',
              'Mehendi Functions',
              'Sangeeth Nights',
              'Wedding Ceremonies',
              'Reception Parties'
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <Star size={24} className="text-brand-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 font-dancing">{service}</h3>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-dancing text-center">
              Our Wedding Services Include
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-brand-primary mb-4">Planning & Coordination</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Complete wedding planning</li>
                  <li>• Venue selection and booking</li>
                  <li>• Timeline management</li>
                  <li>• Vendor coordination</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-primary mb-4">Decoration & Design</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Floral arrangements</li>
                  <li>• Lighting design</li>
                  <li>• Stage decoration</li>
                  <li>• Theme-based setups</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WeddingsPage;