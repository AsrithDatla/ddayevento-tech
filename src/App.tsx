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
import DesignSystem from './components/DesignSystem';

// Quote page
const QuotePage = lazy(() => import('./pages/QuotePage'));

// Lazy load event and service pages
const EventDetailPage = lazy(() => import('./pages/events/EventDetailPage'));
const ServiceDetailPage = lazy(() => import('./pages/services/ServiceDetailPage'));
const TraditionalEvents = lazy(() => import('./pages/events/TraditionalEvents'));
const WeddingEvents = lazy(() => import('./pages/events/WeddingEvents'));
const BirthdayEvents = lazy(() => import('./pages/events/BirthdayEvents'));
const CorporateEvents = lazy(() => import('./pages/events/CorporateEvents'));
const SpecialDays = lazy(() => import('./pages/events/SpecialDays'));
const CollegeEvents = lazy(() => import('./pages/events/CollegeEvents'));

// Service pages
const EventPlanningPage = lazy(() => import('./pages/services/EventPlanningPage'));
const DecorationDesignPage = lazy(() => import('./pages/services/DecorationDesignPage'));
const PhotographyVideographyPage = lazy(() => import('./pages/services/PhotographyVideographyPage'));
const EntertainmentActivitiesPage = lazy(() => import('./pages/services/EntertainmentActivitiesPage'));
// const EntertainmentActivitiesPage = lazy(() => import('./pages/services/EntertainmentActivitiesPage'));
const FoodCateringPage = lazy(() => import('./pages/services/FoodCateringPage'));
const MakeupStylingPage = lazy(() => import('./pages/services/MakeupStylingPage'));
const CakesConfectioneryPage = lazy(() => import('./pages/services/CakesConfectioneryPage'));
// const ReturnGiftsPage = lazy(() => import('./pages/services/ReturnGiftsPage'));
// const TentHouseRentalsPage = lazy(() => import('./pages/services/TentHouseRentalsPage'));
// const VenueBookingPage = lazy(() => import('./pages/services/VenueBookingPage'));
// const SpecializedServicesPage = lazy(() => import('./pages/services/SpecializedServicesPage'));

// Wedding sub-pages
const EngagementCeremony = lazy(() => import('./pages/events/wedding/EngagementCeremony'));
const BrideGroom = lazy(() => import('./pages/events/wedding/BrideGroom'));
const HaldiMehendi = lazy(() => import('./pages/events/wedding/HaldiMehendi'));
const SangeetCocktail = lazy(() => import('./pages/events/wedding/SangeetCocktail'));
const WeddingCeremony = lazy(() => import('./pages/events/wedding/WeddingCeremony'));
const Reception = lazy(() => import('./pages/events/wedding/Reception'));

// Traditional sub-pages
const GrihaPravesham = lazy(() => import('./pages/events/traditional/GrihaPravesham'));
const HalfSaree = lazy(() => import('./pages/events/traditional/HalfSaree'));
const DhotiCeremony = lazy(() => import('./pages/events/traditional/DhotiCeremony'));
const CradleCeremony = lazy(() => import('./pages/events/traditional/CradleCeremony'));
const BabyShower = lazy(() => import('./pages/events/traditional/BabyShower'));

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/reviews" element={<div className="pt-32 text-center">Reviews page coming soon...</div>} />
          <Route path="/contact" element={<div className="pt-32 text-center">Contact page coming soon...</div>} />
          <Route path="/services" element={<div className="pt-32 text-center">Services page coming soon...</div>} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/events/traditional-events" element={<TraditionalEvents />} />
          <Route path="/events/wedding-events" element={<WeddingEvents />} />
          <Route path="/events/birthdays" element={<BirthdayEvents />} />
          <Route path="/events/corporate-events" element={<CorporateEvents />} />
          <Route path="/events/special-days" element={<SpecialDays />} />
          <Route path="/events/college-events" element={<CollegeEvents />} />
          {/* Service pages */}
          <Route path="/services/planning-management" element={<EventPlanningPage />} />

          {/* Completed service pages */}
          <Route path="/services/decoration-design" element={<DecorationDesignPage />} />

          <Route path="/services/photography-videography" element={<PhotographyVideographyPage />} />
          <Route path="/services/entertainment-activities" element={<EntertainmentActivitiesPage />} />
          <Route path="/services/food-catering" element={<FoodCateringPage />} />
          <Route path="/services/makeup-styling" element={<MakeupStylingPage />} />
          <Route path="/services/cakes-confectionery" element={<CakesConfectioneryPage />} />

          {/* Temporary fallback for remaining service pages */}
          <Route path="/services/return-gifts" element={<div className="pt-32 text-center"><h1 className="text-2xl font-bold">Return Gifts & Souvenirs Services</h1><p className="mt-4">Coming Soon...</p></div>} />
          <Route path="/services/tent-house-rentals" element={<div className="pt-32 text-center"><h1 className="text-2xl font-bold">Tent House & Rentals Services</h1><p className="mt-4">Coming Soon...</p></div>} />
          <Route path="/services/venue-booking" element={<div className="pt-32 text-center"><h1 className="text-2xl font-bold">Venue Booking & Setup Services</h1><p className="mt-4">Coming Soon...</p></div>} />
          <Route path="/services/specialized-services" element={<div className="pt-32 text-center"><h1 className="text-2xl font-bold">Specialized Services</h1><p className="mt-4">Coming Soon...</p></div>} />

          {/* Wedding sub-pages */}
          <Route path="/events/wedding/engagement" element={<EngagementCeremony />} />
          <Route path="/events/wedding/bride-groom" element={<BrideGroom />} />
          <Route path="/events/wedding/haldi-mehendi" element={<HaldiMehendi />} />
          <Route path="/events/wedding/sangeet-cocktail" element={<SangeetCocktail />} />
          <Route path="/events/wedding/ceremony" element={<WeddingCeremony />} />
          <Route path="/events/wedding/reception" element={<Reception />} />

          {/* Traditional sub-pages */}
          <Route path="/events/traditional/griha-pravesham" element={<GrihaPravesham />} />
          <Route path="/events/traditional/half-saree" element={<HalfSaree />} />
          <Route path="/events/traditional/dhoti-ceremony" element={<DhotiCeremony />} />
          <Route path="/events/traditional/cradle-ceremony" element={<CradleCeremony />} />
          <Route path="/events/traditional/baby-shower" element={<BabyShower />} />

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