import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';

// Example usage of TestimonialsCarousel with Google Reviews integration
const GoogleReviewsExample: React.FC = () => {
  return (
    <div>
      {/* Full-featured testimonials with Google Reviews */}
      <TestimonialsCarousel
        useGoogleReviews={true}
        showGoogleStats={true}
        showFilters={true}
        itemsPerView={3}
        autoPlay={true}
        autoPlayInterval={5000}
      />

      {/* Compact version for other pages */}
      <TestimonialsCarousel
        useGoogleReviews={true}
        showGoogleStats={false}
        showFilters={false}
        itemsPerView={2}
        autoPlay={false}
      />

      {/* Local testimonials only (fallback) */}
      <TestimonialsCarousel
        useGoogleReviews={false}
        showGoogleStats={false}
        showFilters={true}
        itemsPerView={3}
      />
    </div>
  );
};

export default GoogleReviewsExample;