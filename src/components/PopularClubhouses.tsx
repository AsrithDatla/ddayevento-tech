import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Building2, Award, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Premium venues we offer in Hyderabad
const premiumVenues = [
  {
    id: 1,
    name: "ITC Kohenur",
    location: "HITEC City, Hyderabad",
    type: "Luxury Hotel",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    capacity: "500-1000 guests",
    amenities: ["Grand Ballroom", "Outdoor Lawn", "Valet Parking", "Premium Catering"]
  },
  {
    id: 2,
    name: "Taj Krishna",
    location: "Banjara Hills, Hyderabad",
    type: "Heritage Hotel",
    image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800",
    capacity: "300-800 guests",
    amenities: ["Crystal Ballroom", "Garden Venue", "Spa Services", "Fine Dining"]
  },
  {
    id: 3,
    name: "Novotel Convention Centre",
    location: "HITEC City, Hyderabad",
    type: "Convention Center",
    image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
    capacity: "200-1500 guests",
    amenities: ["Multiple Halls", "Tech Support", "Catering", "Parking"]
  },
  {
    id: 4,
    name: "Golkonda Resort",
    location: "Gandipet, Hyderabad",
    type: "Resort & Spa",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    capacity: "100-400 guests",
    amenities: ["Lake View", "Spa", "Adventure Sports", "Multi-cuisine"]
  }
];

// Communities where we've done events (42 total)
const communities = [
  { name: "Accurate Wind Chimes", location: "Kondapur", image: "/club/Accurate wind chimes.webp" },
  { name: "Aditya Imperial Heights", location: "Kukatpally", image: "/club/Aditya Imperial Heights.webp" },
  { name: "Aditya Lagoon", location: "Narsingi", image: "/club/Aditya Lagoon.webp" },
  { name: "Alekhya Homes", location: "Miyapur", image: "/club/Alekhya Homes.jpg" },
  { name: "Aliens Space Station", location: "Tellapur", image: "/club/Aliens Space Station.webp" },
  { name: "Aparna Sarovar Zenith", location: "Nallagandla", image: "/club/Aparna Sarovar Zenith.webp" },
  { name: "Aparna Serene Park", location: "Kondapur", image: "/club/Aparna Serene Park.webp" },
  { name: "BR Meadows", location: "Kukatpally", image: "/club/BR Meadows.png" },
  { name: "Cyprus Palms", location: "Manikonda", image: "/club/Cyprus Palms.webp" },
  { name: "Gem Nakshathra", location: "Kompally", image: "/club/Gem Nakshathra.webp" },
  { name: "Hill Ridge Springs", location: "Gachibowli", image: "/club/Hill Ridge Spring.jpg" },
  { name: "Honer Vivantis", location: "Narsingi", image: "/club/Honer Vivantis.webp" },
  { name: "Indis City One", location: "Kukatpally", image: "/club/Indis city one.webp" },
  { name: "Indis One City", location: "Miyapur", image: "/club/Indis One City.webp" },
  { name: "Indis VB City", location: "Miyapur", image: "/club/Indis VB City.webp" },
  { name: "Indu Fortune Gardenia", location: "Kompally", image: "/club/Indu Fortune Gardenia.webp" },
  { name: "Jayabheri Summit", location: "Gachibowli", image: "/club/Jayabheri Summit.webp" },
  { name: "Life Style Dream Homes", location: "Kondapur", image: "/club/Life Style Dream Homes.webp" },
  { name: "Lodha Apartments", location: "Kukatpally", image: "/club/Lodha Apartments.jpeg" },
  { name: "Marina Skies", location: "Moosapet", image: "/club/Marina Skies.jpg" },
  { name: "Mayfair Apartments", location: "Kondapur", image: "/club/Mayfair Aparments.webp" },
  { name: "MJR Solitaire", location: "Raidurg", image: "/club/MJR Solitaire.webp" },
  { name: "Muppas Indraprastha", location: "Narsingi", image: "/club/Muppas Indraprastha.webp" },
  { name: "My Home Bhooja", location: "Hyderabad", image: "/club/My Home Bhooja.webp" },
  { name: "My Home Krishe", location: "Kompally", image: "/club/My Home Krishe.webp" },
  { name: "My Home Mangala", location: "Kondapur", image: "/club/My Home Mangala.webp" },
  { name: "My Home Twiza", location: "Kondapur", image: "/club/My Home Twiza.webp" },
  { name: "NCC Urban One", location: "Narsingi", image: "/club/NCC Urban One.jpg" },
  { name: "Niharika Exotica", location: "Miyapur", image: "/club/Niharika Exotica.webp" },
  { name: "Niharika Interlake", location: "Miyapur", image: "/club/Niharika Interlake.webp" },
  { name: "Ozone Heights", location: "Gachibowli", image: "/club/Ozone Heights.png" },
  { name: "Patels Green Front", location: "Kondapur", image: "/club/Patels Green Front.webp" },
  { name: "Prestige High Fields", location: "Financial District", image: "/club/Prestige High Fields.jpg" },
  { name: "Prestige Tranquil", location: "Kokapet", image: "/club/Prestige Tranquil.webp" },
  { name: "Raghavendra's Mirra Panchajanya", location: "Miyapur", image: "/club/Raghavendras Mirra Panchajanya.webp" },
  { name: "Rainbow Vistas", location: "Manikonda", image: "/club/Rainbow Vistas.webp" },
  { name: "Ramky One Galaxia", location: "Nallagandla", image: "/club/Ramky One Galaxia.webp" },
  { name: "Ramky Towers", location: "Gachibowli", image: "/club/Ramky Towers.webp" },
  { name: "SMR Vinay Iconia", location: "Miyapur", image: "/club/SMR Vinay Iconia.webp" },
  { name: "Solitaire Residency", location: "Kondapur", image: "/club/Solitaire Residency.jpg" },
  { name: "Sumadhura Horizon", location: "Narsingi", image: "/club/Sumadhura Horizon.webp" },
  { name: "Trishala Saffron Sanathan", location: "Kompally", image: "/club/Trishala Saffron Sanathan.webp" }
];

const PopularClubhouses: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerSlide = 8; // Show 8 communities per slide
  const totalSlides = Math.ceil(communities.length / itemsPerSlide);

  // Auto-play functionality with Apple-like smooth transitions
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // 4 seconds like Apple's carousels

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCommunities = () => {
    const start = currentSlide * itemsPerSlide;
    return communities.slice(start, start + itemsPerSlide);
  };

  return (
    <div>
      {/* Premium Venues Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Apple-inspired background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-primary/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            {/* Apple-style overline */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-gray-700">Premium Venues</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Exceptional Venues in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Hyderabad
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Discover our handpicked collection of premium venues where every detail is crafted
              to create unforgettable moments with exceptional service and stunning ambiance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {premiumVenues.map((venue, index) => (
              <div
                key={venue.id}
                className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200/30 hover:border-brand-primary/20 hover:-translate-y-2 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Venue Type Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-brand-primary">{venue.type}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {venue.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2 text-brand-primary flex-shrink-0" />
                      <span className="text-sm">{venue.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-brand-primary" />
                    <span className="text-sm font-medium">{venue.capacity}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {venue.amenities.slice(0, 3).map((amenity: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary text-xs font-medium rounded-full border border-brand-primary/20"
                      >
                        {amenity}
                      </span>
                    ))}
                    {venue.amenities.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{venue.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work - Communities Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Apple-inspired background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(120,119,198,0.05),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,119,198,0.05),_transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            {/* Apple-style badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 backdrop-blur-sm border border-brand-primary/20 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-medium text-brand-primary">42+ Communities Served</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Our Work Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary">
                Hyderabad
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              We've successfully organized memorable events across premium clubhouses and
              gated communities, creating magical moments for families and communities throughout the city.
            </p>
          </div>

          {/* Communities Carousel - Apple-inspired */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {getCurrentCommunities().map((community, index) => (
                <div
                  key={`${community.name}-${currentSlide}`}
                  className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-200/30 hover:border-brand-primary/30 hover:-translate-y-3 hover:scale-105"
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={community.image}
                      alt={community.name}
                      className="w-full h-36 md:h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Apple-style floating badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Star className="w-4 h-4 text-brand-primary" />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="text-xs font-semibold bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1">
                        ✨ Events Organized
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors duration-300">
                      {community.name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-xs md:text-sm">
                      <MapPin className="w-3 h-3 mr-2 text-brand-primary flex-shrink-0" />
                      <span className="truncate font-medium">{community.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="p-3 bg-white border-2 border-brand-primary text-brand-primary rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-brand-primary w-8'
                      : 'bg-gray-300 hover:bg-brand-primary/30'
                      }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="p-3 bg-white border-2 border-brand-primary text-brand-primary rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Award className="w-5 h-5 inline mr-2" />
                View All Our Work
              </button>
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-gold/5 rounded-3xl p-8 border border-brand-primary/10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Need Help Choosing the{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                    Perfect Venue?
                  </span>
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our venue experts will help you find the ideal location that matches your vision, budget, and guest count.
                </p>
                <button className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Building2 className="w-5 h-5 inline mr-2" />
                  Get Venue Recommendations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularClubhouses;