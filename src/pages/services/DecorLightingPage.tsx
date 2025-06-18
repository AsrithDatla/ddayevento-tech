import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Lightbulb } from 'lucide-react';

const DecorLightingPage: React.FC = () => {
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
              <Palette size={32} className="text-brand-primary" />
              <Lightbulb size={32} className="text-brand-gold" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-dancing">
                Decor & Lighting
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your venue with our stunning decoration and professional lighting services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              'Flower Decors',
              'Balloon Decors',
              'Table Setup',
              'Selfie/Photobooths',
              'Themed Backdrops',
              'LED/Focus Lighting',
              'Truss & Screen Setup'
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{service}</h3>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-dancing text-center">
              Why Choose Our Decor & Lighting Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-brand-primary mb-4">Creative Design</h3>
                <p className="text-gray-700">
                  Our team creates unique and personalized designs that reflect your style and vision.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-brand-primary mb-4">Quality Materials</h3>
                <p className="text-gray-700">
                  We use only the finest materials and equipment to ensure stunning results.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-brand-primary mb-4">Professional Setup</h3>
                <p className="text-gray-700">
                  Our experienced team handles all setup and breakdown with precision and care.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DecorLightingPage;