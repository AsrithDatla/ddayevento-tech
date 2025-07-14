import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya & Arjun",
    event: "Wedding Celebration",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    text: "D-Day Evento made our dream wedding come true! From the stunning decorations to the flawless coordination, every detail was perfect. Our guests are still talking about how magical everything was. Thank you for making our special day absolutely unforgettable!",
    location: "Hyderabad",
    date: "December 2023"
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    event: "Cradle Ceremony",
    image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    text: "The team understood the cultural significance of our baby's naming ceremony and created such a beautiful, traditional setup. The attention to detail and respect for our customs was remarkable. It was a day filled with joy and blessings.",
    location: "Secunderabad",
    date: "November 2023"
  },
  {
    id: 3,
    name: "Vikram Reddy",
    event: "Corporate Event",
    image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    text: "Professional, punctual, and absolutely brilliant! They managed our company's annual celebration with such precision. The entertainment, catering, and overall coordination exceeded our expectations. Highly recommend for corporate events.",
    location: "HITEC City",
    date: "October 2023"
  },
  {
    id: 4,
    name: "Sneha & Family",
    event: "Birthday Celebration",
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    text: "My daughter's 5th birthday party was absolutely magical! The themed decorations, entertainment, and cake were beyond our imagination. The kids had a blast, and the parents were impressed. Thank you for creating such wonderful memories!",
    location: "Banjara Hills",
    date: "September 2023"
  },
  {
    id: 5,
    name: "Rajesh & Kavitha",
    event: "Anniversary Celebration",
    image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    text: "For our 25th wedding anniversary, D-Day Evento created an intimate yet elegant celebration. The romantic ambiance, beautiful flowers, and thoughtful touches made it a night to remember. Our family and friends were amazed!",
    location: "Jubilee Hills",
    date: "August 2023"
  },
  {
    id: 6,
    name: "Anitha Sharma",
    event: "Housewarming",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5,
    text: "Moving into our new home was stressful, but D-Day Evento made our housewarming celebration stress-free and beautiful. The traditional decorations and delicious catering made our guests feel so welcome. Perfect service!",
    location: "Gachibowli",
    date: "July 2023"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Stories of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Celebration
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every event tells a story, and every story creates memories. Here's what our clients 
            have to say about their unforgettable celebrations with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-purple-600 font-medium">
                      {testimonial.event}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    </motion.div>
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-purple-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Join Our Happy Clients
            </h3>
            <p className="text-gray-600 mb-6">
              Ready to create your own unforgettable celebration? Let's make your vision come to life!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Events Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Planning Your Event
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View More Reviews
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;