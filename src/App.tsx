import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import EventCategories from './components/EventCategories';
import ServicesGrid from './components/ServicesGrid';
import PopularClubhouses from './components/PopularClubhouses';
import Testimonials from './components/Testimonials';
import VisualGalleries from './components/VisualGalleries';
import ConnectWithUs from './components/ConnectWithUs';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

// Lazy load event and service pages
const EventSubPage = lazy(() => import('./pages/events/EventSubPage'));
const ServiceSubPage = lazy(() => import('./pages/services/ServiceSubPage'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <EventCategories />
              <ServicesGrid />
              <PopularClubhouses />
              <ValueProp />
              <Testimonials />
              <VisualGalleries />
              <ConnectWithUs />
            </>
          } />
          <Route path="/events/:eventId/:subEventId" element={<EventSubPage />} />
          <Route path="/services/:serviceId/:subServiceId" element={<ServiceSubPage />} />
          <Route path="/services/:serviceId" element={<ServiceSubPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;