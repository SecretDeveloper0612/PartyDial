import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../components/Button';
import { Search, MapPin, Users, Calendar, DollarSign, Star, ArrowRight, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const featuredVenues = [
  { id: 1, name: 'The Grand Plaza', type: 'Hotel & Resort', location: 'Downtown, New York', rating: 4.9, reviews: 128, capacity: '50-500', price: '$5,000', image: 'https://picsum.photos/seed/venue1/800/600' },
  { id: 2, name: 'Crystal Banquets', type: 'Banquet Hall', location: 'Beverly Hills, CA', rating: 4.8, reviews: 96, capacity: '100-800', price: '$3,500', image: 'https://picsum.photos/seed/venue2/800/600' },
  { id: 3, name: 'Sunset Gardens', type: 'Outdoor Venue', location: 'Miami Beach, FL', rating: 4.7, reviews: 84, capacity: '50-300', price: '$2,800', image: 'https://picsum.photos/seed/venue3/800/600' },
  { id: 4, name: 'The Glasshouse', type: 'Modern Space', location: 'Chicago, IL', rating: 4.9, reviews: 156, capacity: '20-200', price: '$4,200', image: 'https://picsum.photos/seed/venue4/800/600' },
];

const categories = [
  { name: 'Wedding Venues', image: 'https://picsum.photos/seed/cat1/400/300' },
  { name: 'Corporate Events', image: 'https://picsum.photos/seed/cat2/400/300' },
  { name: 'Birthday Parties', image: 'https://picsum.photos/seed/cat3/400/300' },
  { name: 'Private Celebrations', image: 'https://picsum.photos/seed/cat4/400/300' },
];

export function MarketplaceHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from(searchRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      gsap.to('.confetti', {
        y: 'random(-30, 30)',
        x: 'random(-30, 30)',
        rotation: 'random(-90, 90)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <div className="min-h-screen bg-party-light font-sans text-party-dark">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold text-gradient">PartyDial</Link>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <Link to="/search" className="hover:text-party-purple transition-colors">Venues</Link>
            <Link to="/vendors" className="hover:text-party-purple transition-colors">For Vendors</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/post-requirement">
              <Button variant="outline" className="hidden md:flex bg-white">Post Requirement</Button>
            </Link>
            <Link to="/vendor">
              <Button variant="gradient">Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-party-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-party-purple/20 to-party-blue/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-party-pink/20 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Confetti */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`confetti absolute w-3 h-3 rounded-full ${
                ['bg-party-pink', 'bg-party-purple', 'bg-party-blue'][i % 3]
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="hero-element text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
            Find the Perfect Venue <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-party-pink via-party-purple to-party-blue">For Your Event</span>
          </h1>
          <p className="hero-element text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover and book the best venues for weddings, corporate events, and private parties. Get quotes instantly.
          </p>

          {/* Search Bar */}
          <div ref={searchRef} className="bg-white p-3 md:p-4 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="City or Location" className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-party-purple transition-all" />
              </div>
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-party-purple transition-all appearance-none text-gray-600">
                  <option value="">Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                </select>
              </div>
              <div className="flex-1 relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-party-purple transition-all appearance-none text-gray-600">
                  <option value="">Guest Count</option>
                  <option value="50">Up to 50</option>
                  <option value="100">50 - 100</option>
                  <option value="500">100 - 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <Button variant="gradient" size="lg" className="md:w-auto w-full rounded-2xl py-3 md:py-4 px-8">
                Search Venues
              </Button>
            </form>
          </div>

          <div className="hero-element mt-8 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span>Popular:</span>
            <div className="flex gap-2 flex-wrap justify-center">
              {['Banquet Halls', 'Resorts', 'Farmhouses', 'Hotels'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Browse by Event Type</h2>
              <p className="text-gray-600">Find venues specialized for your specific celebration.</p>
            </div>
            <Link to="/search" className="hidden md:flex items-center text-party-purple font-medium hover:text-party-dark transition-colors">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, i) => (
              <Link to="/search" key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-party-dark/80 via-party-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm flex items-center group-hover:text-party-pink transition-colors">
                    Explore Venues <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-24 bg-party-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Featured Venues</h2>
              <p className="text-gray-600">Top-rated venues highly recommended by our users.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVenues.map((venue) => (
              <div key={venue.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-party-pink hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-party-dark">
                    {venue.type}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-party-dark line-clamp-1">{venue.name}</h3>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="text-xs font-bold text-yellow-700">{venue.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" /> {venue.location}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-2 py-1.5 rounded-lg">
                      <Users className="w-4 h-4 mr-1.5 text-party-purple" /> {venue.capacity}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-2 py-1.5 rounded-lg">
                      <DollarSign className="w-4 h-4 mr-1 text-party-blue" /> From {venue.price}
                    </div>
                  </div>
                  <Link to={`/venue/${venue.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-party-dark group-hover:text-white transition-colors">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post Requirement CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-party rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-party-purple/20">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Can't find what you're looking for?</h2>
              <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Post your event requirements and let the best venues in your city contact you with custom quotes.</p>
              <Link to="/post-requirement">
                <Button variant="outline" size="lg" className="bg-white text-party-dark border-none hover:bg-gray-50 hover:text-party-purple">
                  Post Event Requirement <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-party-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-party-pink to-party-blue mb-6">PartyDial</div>
            <p className="text-gray-400 max-w-sm mb-6">The premier marketplace for finding and booking the perfect event venues.</p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-party-purple transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-party-purple transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-party-purple transition-colors cursor-pointer"></div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">For Users</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/search" className="hover:text-white transition-colors">Search Venues</Link></li>
              <li><Link to="/post-requirement" className="hover:text-white transition-colors">Post Requirement</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">For Vendors</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/vendors" className="hover:text-white transition-colors">List Your Venue</Link></li>
              <li><Link to="/vendor" className="hover:text-white transition-colors">Vendor Login</Link></li>
              <li><Link to="/mobile-app" className="hover:text-white transition-colors">Vendor Mobile App</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PartyDial. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
