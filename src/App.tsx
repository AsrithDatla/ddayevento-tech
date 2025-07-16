import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import EventCategories from './components/EventCategories';
import ServicesGrid from './components/ServicesGrid';
import PopularClubhouses from './components/PopularClubhouses';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import VisualGalleries from './components/VisualGalleries';
import ConnectWithUs from './components/ConnectWithUs';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import TrustIndicators, { TrustBanner, LocalTrustIndicators, SecurityTrustIndicators } from './components/TrustIndicators';

// Lazy load event and service pages
const EventDetailPage = lazy(() => import('./pages/events/EventDetailPage'));
const ServiceDetailPage = lazy(() => import('./pages/services/ServiceDetailPage'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TrustBanner />
      <Header />
      <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              {/* Trust Indicators Section */}
              <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                  <TrustIndicators variant="horizontal" className="mb-8" />
                </div>
              </section>
              <EventCategories />
              <ServicesGrid />
              <PopularClubhouses />
              <ValueProp />
              {/* Local Trust Section */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <LocalTrustIndicators />
                    <SecurityTrustIndicators />
                  </div>
                </div>
              </section>
              <TestimonialsCarousel />
              <VisualGalleries />
              <ConnectWithUs />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events/:sectionId/:eventSlug" element={<EventDetailPage />} />
          <Route path="/services/:sectionId/:serviceSlug" element={<ServiceDetailPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;