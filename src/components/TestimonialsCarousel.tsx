import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, MapPin, Calendar, Quote } from 'lucide-react';
import { testimonialsData, getTestimonialsByEventType, type Testimonial } from '../data/testimonialsData';

interface TestimonialsCarouselProps {
  eventTypeFilter?: string;
  showFilters?: boolean;
  itemsPerView?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  eventTypeFilter = 'all',
  showFilters = true,
  itemsPerView = 3,
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState(eventTypeFilter);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'wedding', label: 'Weddings' },
    { value: 'baby', label: 'Baby Events' },
    { value: 'birthday', label: 'Birthdays' },
    { value: 'house warming', label: 'House Warming' },
    { value: 'anniversary', label: 'Anniversaries' }
  ];

  // Filter testimonials based on selected event type
  useEffect(() => {
    const filtered = getTestimonialsByEventType(selectedFilter);
    setTestimonials(filtered);
    setCurrentIndex(0);
  }, [selectedFilter]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || testimonials.length <= itemsPerView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerView);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length, itemsPerView]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
      />
    ));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50/50 to-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            What Our Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Over 400+ successful events in Hyderabad. Here's what our happy clients have to say about their experience with D-Day Evento.
          </motion.p>
        </div>

        {/* Event Type Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {eventTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedFilter(type.value)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedFilter === type.value
                  ? 'bg-brand-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-brand-primary/10 hover:text-brand-primary border border-gray-200 shadow-sm'
                  }`}
              >
                {type.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Carousel Container */}
        <div className="relative mx-4 md:mx-8">
          {/* Navigation Buttons */}
          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-brand-primary hover:text-white border border-gray-200"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-brand-primary hover:text-white border border-gray-200"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Testimonials Grid */}
          <div className="overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={`grid gap-8 mb-6 ${itemsPerView === 1
                  ? 'grid-cols-1'
                  : itemsPerView === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 relative mb-4"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 text-brand-primary/20">
                      <Quote size={24} />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                      "{testimonial.review}"
                    </p>

                    {/* Client Info */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-lg">
                        {testimonial.name}
                      </h4>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} />
                        <span>{testimonial.location}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-brand-primary">
                          <Calendar size={14} />
                          <span>{testimonial.eventDate}</span>
                        </div>
                        <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-medium">
                          {testimonial.eventType}
                        </span>
                      </div>

                      {testimonial.venue && (
                        <div className="text-xs text-gray-500 mt-2">
                          Venue: {testimonial.venue}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          {testimonials.length > itemsPerView && (
            <div className="flex justify-center gap-3 mt-12">
              {Array.from({
                length: Math.ceil(testimonials.length / itemsPerView)
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerView)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-brand-primary w-8'
                    : 'bg-gray-300 hover:bg-brand-primary/50'
                    }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-3">400+</div>
            <div className="text-sm text-gray-600 font-medium">Events Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-3">5.0</div>
            <div className="text-sm text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-3">98%</div>
            <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-primary mb-3">5+</div>
            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;