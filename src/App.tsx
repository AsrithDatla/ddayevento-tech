import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ValueProp />
      <EventCategories />
      <ServicesGrid />
      <PopularClubhouses />
      <Testimonials />
      <VisualGalleries />
      <ConnectWithUs />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;