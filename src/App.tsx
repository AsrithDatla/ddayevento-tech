import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
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
import { TrustBanner } from './components/TrustIndicators';
import DesignSystem from './components/DesignSystem';

// Lazy load event and service pages
const EventDetailPage = lazy(() => import('./pages/events/EventDetailPage'));
const ServiceDetailPage = lazy(() => import('./pages/services/ServiceDetailPage'));
const TraditionalEvents = lazy(() => import('./pages/events/TraditionalEvents'));
const WeddingEvents = lazy(() => import('./pages/events/WeddingEvents'));
const BirthdayEvents = lazy(() => import('./pages/events/BirthdayEvents'));
const CorporateEvents = lazy(() => import('./pages/events/CorporateEvents'));
const SpecialDays = lazy(() => import('./pages/events/SpecialDays'));

const EventPlanningPage = lazy(() => import('./pages/services/EventPlanningPage'));

// Wedding sub-pages
const EngagementCeremony = lazy(() => import('./pages/events/wedding/EngagementCeremony'));
const BrideGroom = lazy(() => import('./pages/events/wedding/BrideGroom'));
const HaldiMehendi = lazy(() => import('./pages/events/wedding/HaldiMehendi'));
const SangeetCocktail = lazy(() => import('./pages/events/wedding/SangeetCocktail'));
const WeddingCeremony = lazy(() => import('./pages/events/wedding/WeddingCeremony'));
const Reception = lazy(() => import('./pages/events/wedding/Reception'));

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TrustBanner />
      <Header />
      <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <EventCategories />
              <ServicesGrid />
              <PopularClubhouses />
              <TestimonialsCarousel />
              <VisualGalleries />
              <ConnectWithUs />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reviews" element={<div className="pt-32 text-center">Reviews page coming soon...</div>} />
          <Route path="/contact" element={<div className="pt-32 text-center">Contact page coming soon...</div>} />
          <Route path="/services" element={<div className="pt-32 text-center">Services page coming soon...</div>} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/events/traditional-events" element={<TraditionalEvents />} />
          <Route path="/events/wedding-events" element={<WeddingEvents />} />
          <Route path="/events/birthdays" element={<BirthdayEvents />} />
          <Route path="/events/corporate-events" element={<CorporateEvents />} />
          <Route path="/events/special-days" element={<SpecialDays />} />
          <Route path="/events/college-events" element={<div className="pt-32 text-center">College Events page coming soon...</div>} />
          <Route path="/services/planning-management" element={<EventPlanningPage />} />

          {/* Wedding sub-pages */}
          <Route path="/events/wedding/engagement" element={<EngagementCeremony />} />
          <Route path="/events/wedding/bride-groom" element={<BrideGroom />} />
          <Route path="/events/wedding/haldi-mehendi" element={<HaldiMehendi />} />
          <Route path="/events/wedding/sangeet-cocktail" element={<SangeetCocktail />} />
          <Route path="/events/wedding/ceremony" element={<WeddingCeremony />} />
          <Route path="/events/wedding/reception" element={<Reception />} />

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