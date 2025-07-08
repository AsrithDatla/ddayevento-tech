import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';

const companyInfo = (
  <div className="mt-12 text-center text-gray-500 text-sm">
    <p>D-Day Evento | Hyderabad | +91-7386813689 | info@ddayevento.com</p>
    <p>Creating unforgettable celebrations with style, elegance, and excellence.</p>
  </div>
);

const EventSubPage: React.FC = () => {
  const { eventId, subEventId } = useParams();
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6 font-dancing text-center">
          {subEventId ? subEventId.replace(/-/g, ' ') : eventId?.replace(/-/g, ' ')}
        </h1>
        <div className="text-lg text-gray-700 text-center mb-8">
          {/* You can add more event-specific content here */}
          <p>Welcome to our {subEventId ? subEventId.replace(/-/g, ' ') : eventId?.replace(/-/g, ' ')} event page. We provide tailored services to make your event memorable.</p>
        </div>
        {companyInfo}
      </div>
    </div>
  );
};

export default EventSubPage; 