import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EventCategories: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: 'Wedding Events',
      image: 'https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?w=400&h=260&fit=crop',
      alt: 'Wedding Events',
      link: '/events/wedding-events'
    },
    {
      id: 2,
      title: 'Traditional Events',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=400&h=260&fit=crop',
      alt: 'Traditional Events',
      link: '/events/traditional-events'
    },
    {
      id: 3,
      title: 'Birthdays',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=400&h=260&fit=crop',
      alt: 'Birthday Celebrations',
      link: '/events/birthdays'
    },
    {
      id: 4,
      title: 'Special Days',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?w=400&h=260&fit=crop',
      alt: 'Special Occasions',
      link: '/events/special-days'
    },
    {
      id: 5,
      title: 'College Events',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?w=400&h=260&fit=crop',
      alt: 'College Events',
      link: '/events/college-events'
    },
    {
      id: 6,
      title: 'Corporate Events',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=400&h=260&fit=crop',
      alt: 'Corporate Events',
      link: '/events/corporate-events'
    }
  ];

  // Duplicate categories for infinite scroll effect
  const duplicatedCategories = [...categories, ...categories];

  const handleCategoryClick = (category: typeof categories[0]) => {
    navigate(category.link);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let startTime: number;
    const duration = 40000; // 40 seconds for full cycle (slower animation)
    const slideWidth = 420; // Width of each slide including gap
    const totalWidth = slideWidth * categories.length;

    const animate = (currentTime: number) => {
      if (isHovered) {
        // Pause animation when hovered
        startTime = currentTime - (startTime ? currentTime - startTime : 0);
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      const translateX = -(progress * totalWidth);

      slider.style.transform = `translateX(${translateX}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [categories.length, isHovered]);

  return (
    <section id="events" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #008B8B 2px, transparent 2px), radial-gradient(circle at 75% 75%, #20B2AA 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">

          <h2 className="font-display text-5xl md:text-6xl font-bold text-black mb-8 leading-tight">
            Event Categories
            <span className="block md:inline text-brand-primary"> We Specialize In</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            From intimate family gatherings to grand celebrations across Hyderabad, we specialize in creating
            <span className="text-brand-primary font-semibold"> memorable experiences</span> that reflect your unique story
          </p>
        </div>
      </div>

        {/* Image Slider - Hidden on mobile, visible on desktop */}
        <section id="carousel" className="hidden md:block my-8">
          <div className="slider overflow-hidden py-8">
            <div
              ref={sliderRef}
              className="flex slide-track gap-5 items-end"
              style={{ width: `${duplicatedCategories.length * 420}px` }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {duplicatedCategories.map((category, index) => (
                <motion.div
                  key={`${category.id}-${index}`}
                  data-caid={category.id}
                  className={`carousel-link cursor-pointer ${index % 2 === 0 ? 'mt-0' : 'mt-8'
                    }`}
                  onClick={() => handleCategoryClick(category)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex carousel-slide-item">
                    <div className="image-wrapper flex relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      <img
                        className="w-full max-w-none object-cover"
                        alt={category.alt}
                        width="400"
                        height="260"
                        title={category.title}
                        src={category.image}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <p className="absolute bottom-4 left-4 text-lg font-bold mb-0 z-10" style={{ color: '#FFFFFF', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.9)' }}>
                        {category.title}
                      </p>
                      {/* Hover indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      <div className="container mx-auto px-6 relative">

        {/* Mobile Grid - Visible on mobile, hidden on desktop */}
        <div className="grid grid-cols-2 gap-4 md:hidden my-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer group hover:scale-105 transition-transform duration-300 ${index % 2 === 0 ? 'mt-0' : 'mt-4'
                }`}
              onClick={() => handleCategoryClick(category)}
            >
              <img
                src={category.image}
                alt={category.alt}
                className="w-full h-32 object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-2 text-sm font-bold z-10" style={{ color: '#FFFFFF', textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 0 3px rgba(0, 0, 0, 0.9)' }}>
                {category.title}
              </p>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
};

export default EventCategories;