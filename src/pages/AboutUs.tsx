import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 font-dancing">
            About D-Day Evento
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Welcome to D-Day Evento - where dreams meet reality and celebrations come to life.
            </p>

            <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-dancing">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">
                Founded with a passion for creating unforgettable moments, D-Day Evento has been serving 
                Hyderabad and surrounding areas with exceptional event planning services. We believe that 
                every celebration deserves to be extraordinary, and we're here to make that happen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-dancing">Our Mission</h3>
                <p className="text-gray-600">
                  To transform your vision into reality through meticulous planning, creative design, 
                  and flawless execution, ensuring every event speaks style and excellence.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-dancing">Our Vision</h3>
                <p className="text-gray-600">
                  To be Hyderabad's most trusted event planning partner, known for innovation, 
                  quality, and creating memories that last a lifetime.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 italic">
                "Events that speak style, services that speak excellence."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;