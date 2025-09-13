import React from 'react';
import { Heart, Star, ArrowRight, Sparkles, Phone, Mail } from 'lucide-react';

const DesignSystem: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="font-display text-6xl font-bold text-black mb-4">
            D-Day Evento
            <span className="block text-brand-primary">Design System</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive design system built around White, Black, Teal, and Gold 
            for Hyderabad's premier event management company.
          </p>
        </header>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="font-display text-4xl font-bold text-black mb-8">Color Palette</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Primary Colors */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800">Primary Colors</h3>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="w-full h-20 bg-white border border-gray-300 rounded mb-3"></div>
                <p className="font-mono text-sm text-gray-600">#FFFFFF</p>
                <p className="font-semibold">White</p>
                <p className="text-sm text-gray-500">Backgrounds, text on dark</p>
              </div>

              <div className="bg-black rounded-lg p-4 shadow-sm">
                <div className="w-full h-20 bg-black rounded mb-3"></div>
                <p className="font-mono text-sm text-white">#000000</p>
                <p className="font-semibold text-white">Black</p>
                <p className="text-sm text-gray-300">Primary text, headers</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800">Brand Colors</h3>
              
              <div className="bg-brand-primary rounded-lg p-4 shadow-sm">
                <div className="w-full h-20 bg-brand-primary rounded mb-3"></div>
                <p className="font-mono text-sm text-white">#008B8B</p>
                <p className="font-semibold text-white">Teal</p>
                <p className="text-sm text-gray-200">Primary brand color</p>
              </div>

              <div className="bg-brand-accent rounded-lg p-4 shadow-sm">
                <div className="w-full h-20 bg-brand-accent rounded mb-3"></div>
                <p className="font-mono text-sm text-black">#FFD700</p>
                <p className="font-semibold text-black">Gold</p>
                <p className="text-sm text-gray-800">CTA buttons, accents</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800">Teal Variations</h3>
              
              <div className="space-y-2">
                <div className="bg-brand-primary-light rounded p-2">
                  <p className="text-xs font-mono text-white">#20B2AA</p>
                  <p className="text-sm text-white">Teal Light</p>
                </div>
                <div className="bg-brand-primary rounded p-2">
                  <p className="text-xs font-mono text-white">#008B8B</p>
                  <p className="text-sm text-white">Teal</p>
                </div>
                <div className="bg-brand-primary-dark rounded p-2">
                  <p className="text-xs font-mono text-white">#006666</p>
                  <p className="text-sm text-white">Teal Dark</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-800">Gold Variations</h3>
              
              <div className="space-y-2">
                <div className="bg-brand-accent-light rounded p-2">
                  <p className="text-xs font-mono text-black">#FFF8DC</p>
                  <p className="text-sm text-black">Gold Light</p>
                </div>
                <div className="bg-brand-accent rounded p-2">
                  <p className="text-xs font-mono text-black">#FFD700</p>
                  <p className="text-sm text-black">Gold</p>
                </div>
                <div className="bg-brand-accent-dark rounded p-2">
                  <p className="text-xs font-mono text-white">#DAA520</p>
                  <p className="text-sm text-white">Gold Dark</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="font-display text-4xl font-bold text-black mb-8">Typography</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-6">Display Font - Playfair Display</h3>
              <div className="space-y-4">
                <div>
                  <h1 className="font-display text-6xl font-bold text-black">Hero Title</h1>
                  <p className="text-sm text-gray-500 font-mono">60px, Bold</p>
                </div>
                <div>
                  <h2 className="font-display text-5xl font-bold text-black">Section Header</h2>
                  <p className="text-sm text-gray-500 font-mono">48px, Bold</p>
                </div>
                <div>
                  <h3 className="font-display text-4xl font-bold text-black">Card Title</h3>
                  <p className="text-sm text-gray-500 font-mono">36px, Bold</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-6">Body Font - Inter</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-semibold text-black">Large Body Text</p>
                  <p className="text-sm text-gray-500 font-mono">20px, Semibold</p>
                </div>
                <div>
                  <p className="text-lg text-black">Regular Body Text</p>
                  <p className="text-sm text-gray-500 font-mono">18px, Regular</p>
                </div>
                <div>
                  <p className="text-base text-gray-600">Secondary Text</p>
                  <p className="text-sm text-gray-500 font-mono">16px, Regular</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Small Text</p>
                  <p className="text-sm text-gray-500 font-mono">14px, Regular</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="font-display text-4xl font-bold text-black mb-8">Button System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Primary CTA - Gold</h3>
              <div className="space-y-4">
                <button className="bg-brand-accent text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Free Quote
                </button>
                <button className="bg-brand-accent text-black px-6 py-3 rounded-full font-semibold hover:bg-brand-accent-dark transition-all duration-300">
                  Book Consultation
                </button>
                <button className="bg-brand-accent text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-brand-accent-dark transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Secondary - Teal</h3>
              <div className="space-y-4">
                <button className="border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-primary hover:text-white transition-all duration-300">
                  View Gallery
                </button>
                <button className="border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-full font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300">
                  Our Services
                </button>
                <button className="border border-brand-primary text-brand-primary px-4 py-2 rounded-full font-medium text-sm hover:bg-brand-primary hover:text-white transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Tertiary - Minimal</h3>
              <div className="space-y-4">
                <button className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300">
                  Contact Us
                </button>
                <button className="text-brand-primary font-semibold px-6 py-3 hover:text-brand-primary-dark transition-colors duration-300 flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </button>
                <button className="text-gray-600 font-medium text-sm hover:text-gray-800 transition-colors duration-300">
                  See Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="font-display text-4xl font-bold text-black mb-8">Card Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-brand-primary to-brand-primary-light">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 bg-brand-accent text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Heart className="w-8 h-8 mb-2" />
                  <h3 className="font-display text-xl font-bold">Wedding Planning</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Creating magical moments for your special day with professional excellence.
                </p>
                <button className="w-full bg-brand-primary text-white py-3 rounded-full font-semibold hover:bg-brand-primary-dark transition-colors duration-300">
                  Explore Services
                </button>
              </div>
            </div>

            {/* Service Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-accent to-brand-accent-dark rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-display text-2xl font-bold text-black mb-3">
                  Event Decoration
                </h3>
                <p className="text-gray-600 mb-6">
                  Transform any venue into a magical setting with our creative decoration services.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-primary font-semibold">Starting ₹8,000</span>
                  <button className="text-brand-primary font-semibold hover:text-brand-primary-dark transition-colors">
                    Get Quote →
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "D-Day Evento made our wedding absolutely perfect. Their attention to detail is unmatched!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold">
                  PS
                </div>
                <div>
                  <p className="font-semibold text-black">Priya Sharma</p>
                  <p className="text-sm text-gray-500">Wedding Client</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icons & Elements */}
        <section className="mb-16">
          <h2 className="font-display text-4xl font-bold text-black mb-8">Icons & Elements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-6">Icon Styles</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mb-2">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">Primary</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-black" />
                  </div>
                  <p className="text-sm text-gray-600">Accent</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-600">Neutral</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-2">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">Dark</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-6">Badges & Tags</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-brand-accent text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                  <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Professional
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="border border-brand-primary text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                    Wedding
                  </span>
                  <span className="border border-brand-accent text-brand-accent px-3 py-1 rounded-full text-sm font-medium">
                    Corporate
                  </span>
                  <span className="border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    Birthday
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-16">
          <h2 className="font-display text-4xl font-bold text-black mb-8">Usage Guidelines</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-green-800 mb-4">✅ Do's</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Use gold for primary CTAs and important actions</li>
                <li>• Use teal for brand elements and secondary actions</li>
                <li>• Maintain consistent spacing and typography</li>
                <li>• Use white space effectively for clarity</li>
                <li>• Keep button text concise and action-oriented</li>
                <li>• Use Playfair Display for headings, Inter for body</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-red-800 mb-4">❌ Don'ts</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Don't use multiple competing colors</li>
                <li>• Don't make buttons too small (min 44px height)</li>
                <li>• Don't use low contrast color combinations</li>
                <li>• Don't mix different font families randomly</li>
                <li>• Don't overcrowd layouts with too many elements</li>
                <li>• Don't use gold and teal together without white space</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            D-Day Evento Design System - Built for conversion and brand consistency
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DesignSystem;