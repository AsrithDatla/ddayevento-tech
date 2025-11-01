import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, MapPin, Calendar, Quote, RefreshCw, ExternalLink } from 'lucide-react';
import { testimonialsData, getMixedTestimonials, type Testimonial } from '../data/testimonialsData';
import { useGoogleReviews as useGoogleReviewsHook } from '../hooks/useGoogleReviews';

interface TestimonialsCarouselProps {
  eventTypeFilter?: string;
  showFilters?: boolean;
  itemsPerView?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  useGoogleReviews?: boolean;
  showGoogleStats?: boolean;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  eventTypeFilter = 'all',
  showFilters = true,
  itemsPerView = 3,
  autoPlay = true,
  autoPlayInterval = 5000,
  useGoogleReviews = true,
  showGoogleStats = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState(eventTypeFilter);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);

  // Fetch Google Reviews
  const {
    reviews: googleReviews,
    loading: googleLoading,
    error: googleError,
    totalRating,
    totalReviews,
    lastUpdated,
    refetch: refetchGoogleReviews
  } = useGoogleReviewsHook(useGoogleReviews, 30 * 60 * 1000); // Refresh every 30 minutes

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'wedding', label: 'Weddings' },
    { value: 'baby', label: 'Baby Events' },
    { value: 'birthday', label: 'Birthdays' },
    { value: 'house warming', label: 'House Warming' },
    { value: 'anniversary', label: 'Anniversaries' }
  ];

  // Combine and filter testimonials based on selected event type
  useEffect(() => {
    let combinedTestimonials: Testimonial[];
    
    if (useGoogleReviews && googleReviews.length > 0) {
      // Mix Google reviews with local testimonials
      combinedTestimonials = getMixedTestimonials(googleReviews, 4);
    } else {
      // Use only local testimonials
      combinedTestimonials = testimonialsData;
    }

    // Apply event type filter
    const filtered = selectedFilter === 'all' 
      ? combinedTestimonials 
      : combinedTestimonials.filter(testimonial => 
          testimonial.eventType.toLowerCase().includes(selectedFilter.toLowerCase())
        );
    
    setTestimonials(filtered);
    setCurrentIndex(0);
  }, [selectedFilter, googleReviews, useGoogleReviews]);

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
    <section id="reviews" className="py-20 bg-gradient-to-br from-gray-50/50 to-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            What Our Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Over 400+ successful events in Hyderabad. Here's what our happy clients have to say about their experience with D-Day Evento.
          </p>

          {/* Google Reviews Stats */}
          {showGoogleStats && useGoogleReviews && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              {googleLoading ? (
                <div className="flex items-center gap-2 text-gray-500">
                  <RefreshCw size={16} className="animate-spin" />
                  <span className="text-sm">Loading live reviews...</span>
                </div>
              ) : googleError ? (
                <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
                  <span className="text-sm">Showing cached reviews</span>
                  <button
                    onClick={refetchGoogleReviews}
                    className="text-amber-700 hover:text-amber-800 transition-colors"
                    title="Retry loading live reviews"
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>
              ) : totalReviews > 0 ? (
                <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {renderStars(Math.round(totalRating))}
                    </div>
                    <span className="font-semibold text-gray-800">{totalRating.toFixed(1)}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {totalReviews} Google Reviews
                  </div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                  {lastUpdated && (
                    <button
                      onClick={refetchGoogleReviews}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      title={`Last updated: ${new Date(lastUpdated).toLocaleString()}`}
                    >
                      <RefreshCw size={14} />
                    </button>
                  )}
                </div>
              ) : null}
            </div>
          )}
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
                    {/* Quote Icon and Source Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      {testimonial.source === 'google' && (
                        <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </div>
                      )}
                      <div className="text-brand-primary/20">
                        <Quote size={24} />
                      </div>
                    </div>

                    {/* Profile Photo and Rating */}
                    <div className="flex items-start gap-4 mb-4">
                      {testimonial.profilePhoto && (
                        <img
                          src={testimonial.profilePhoto}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/20"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-1 mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <h4 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                          {testimonial.authorUrl ? (
                            <a
                              href={testimonial.authorUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-brand-primary transition-colors flex items-center gap-1"
                            >
                              {testimonial.name}
                              <ExternalLink size={14} />
                            </a>
                          ) : (
                            testimonial.name
                          )}
                        </h4>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                      "{testimonial.review}"
                    </p>

                    {/* Client Info */}
                    <div className="space-y-2">
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