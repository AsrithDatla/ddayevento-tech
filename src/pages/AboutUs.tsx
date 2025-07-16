import React from 'react';
import { Link } from 'react-router-dom';

const aboutImages = [
  '/about1.jpg', // Replace with your actual image paths or use public URLs
  '/about2.jpg',
  '/about3.jpg',
  '/about4.jpg',
  '/about5.jpg',
];

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#16a6a6]">
      {/* Sticky Header Section */}
      <header className="sticky top-0 z-50 pt-6 pb-2 bg-[#16a6a6] text-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Link to="/">
            <img src="/final-white-logo-400-120.png" alt="Dday Events" className="w-40 mb-2 cursor-pointer" />
          </Link>
          <nav className="flex gap-6 text-sm font-semibold mb-6">
            <Link to="/" className="hover:underline">HOME</Link>
            <a href="#" className="hover:underline">ABOUT US</a>
            <a href="#" className="hover:underline">SERVICES</a>
            <a href="#" className="hover:underline">EVENT STORE</a>
            <a href="#" className="hover:underline">GALLERY</a>
            <a href="#" className="hover:underline">REVIEWS</a>
            <a href="#" className="hover:underline">CONTACT US</a>
          </nav>
          <h1 className="text-5xl font-bold mb-6 mt-2">About US</h1>
        </div>
      </header>

      {/* Main Content Scrollable, with padding to avoid header/footer overlap */}
      <main className="flex-1 overflow-y-auto pt-6 pb-10">
        {/* Who We Are & What We Can Do */}
        <section className="bg-[#f8f6f3] py-12">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#16a6a6] mb-2">Who We Are?</h2>
              <p className="text-gray-700 mb-6">
                We are Hyderabad's premier event management company driven to cater to the wedding and event planning business across Telangana. As passionate event planners in Hyderabad, we deliver exceptional service and make your D-Day the most memorable and special with us here at "D-DAY EVENTO". Celebrate your big day with Hyderabad's most trusted event planners!
              </p>
              <img src={aboutImages[0]} alt="Who We Are" className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0" />
            </div>
            <div>
              <img src={aboutImages[1]} alt="What We Can Do" className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0 mb-4" />
              <h2 className="text-2xl font-bold text-[#16a6a6] mb-2">What We Can Do?</h2>
              <p className="text-gray-700">
                Birthday party planners in Hyderabad, Anniversary celebrations, Wedding planners Hyderabad, Traditional Telugu wedding functions, All ceremonial events across Telangana, Event decoration and lighting in Gachibowli, Catering services Hyderabad, Wedding photography Kondapur, Bridal makeup & Mehendi artists, DJ and entertainment services, Return gifts, and all event management services in Hyderabad.
              </p>
            </div>
          </div>
        </section>

        {/* Four Reasons Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#16a6a6] mb-12">Four Reasons Why You Should Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* D-Day Team */}
              <div>
                <h3 className="text-xl font-bold text-[#16a6a6] mb-2 flex items-center gap-2">
                  <span className="inline-block">🔔</span> D-Day Team
                </h3>
                <p className="text-gray-700 mb-4">
                  Our Hyderabad-based team is a passionate and smart working group of event planning professionals. We give our maximum efforts for meeting our client's requirements across Gachibowli, Kondapur, and Jubilee Hills. Our team's main motto is to provide quality event management, coordination, and excellent communication to all our clients in Hyderabad. We handle each event with care and create those moments each client awaits the most. We are a friendly, dedicated team of event planners who enjoys and loves what they do.
                </p>
                <img src={aboutImages[2]} alt="D-Day Team" className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0" />
              </div>
              {/* Perfect Vendors */}
              <div>
                <img src={aboutImages[3]} alt="Perfect Vendors" className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0 mb-4" />
                <h3 className="text-xl font-bold text-[#16a6a6] mb-2 flex items-center gap-2">
                  <span className="inline-block">🎉</span> Perfect Vendors
                </h3>
                <p className="text-gray-700">
                  We have the best event vendors across Hyderabad from all categories and events. We have specialised vendors in Gachibowli, Kondapur, and Jubilee Hills who have displayed great work. Our Hyderabad vendors believe in delivering quality, assurance, and perfection in their field of work. We make sure our local vendors provide the quality of work and satisfaction to us and to our clients across Telangana. We carefully assess all our Hyderabad-based vendors and choose verified vendors to cater to the client's needs and requirements.
                </p>
              </div>
              {/* Unique Memories */}
              <div>
                <h3 className="text-xl font-bold text-[#16a6a6] mb-2 flex items-center gap-2">
                  <span className="inline-block">💡</span> Unique Memories
                </h3>
                <p className="text-gray-700 mb-4">
                  Memories are made to last a lifetime and we at D-Day Evento believe in that. We trust in making, creating, and experiencing those moments for our clients. Recreating those moments that each person has thought of, conceptualising and making the events from discussing them to turning the idea into reality. Memories are always preserved and cherished and we believe in making it happen.
                </p>
                <img src={aboutImages[4]} alt="Unique Memories" className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0" />
              </div>
              {/* Unforgettable & Valuable Time */}
              <div>
                <img src={aboutImages[0]} alt="Unforgettable & Valuable Time" className="rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0 mb-4" />
                <h3 className="text-xl font-bold text-[#16a6a6] mb-2 flex items-center gap-2">
                  <span className="inline-block">⏰</span> Unforgettable & Valuable time
                </h3>
                <p className="text-gray-700">
                  Our Event Management Company respects and values our client's time. We analyse the budget, requirements, categories that the client is looking for. We give a detailed note of each thing discussed, suggest, and recommend our client what is suitable for them and make sure each penny they invest in us is a memory created for them. Our goal is to make sure our client spends the most beautiful time at their event when they sit back, relax and enjoy while we do all the work for them so that they can have an unforgettable moment of their life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#16a6a6] py-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Looking for something very special?</h3>
          <p className="mb-6">PLAN YOUR BUDGET AND LET'S GET STARTED!</p>
          <button className="bg-white text-[#16a6a6] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">BUDGET CALCULATOR</button>
        </section>
      </main>

      {/* Sticky Footer Info */}
      <footer className="sticky bottom-0 z-50 bg-gray-900 text-white py-8 mt-0">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src="/final-white-logo-400-120.png" alt="Dday Events" className="w-32 mb-2" />
            <p className="text-center md:text-left">" Let's join hands at your convenient Time, Place and Date ! "</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-2">CONTACT INFO</h4>
            <p>Gachibowli, Hyderabad, Telangana</p>
            <p>ddayevento@gmail.com</p>
            <p>+91 9701332813</p>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-6">All Rights Reserved © D-Day Evento</div>
      </footer>
    </div>
  );
};

export default AboutUs;