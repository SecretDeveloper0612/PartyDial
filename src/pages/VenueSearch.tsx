import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Search, MapPin, Users, DollarSign, Star, Heart, Filter, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const venues = [
  { id: 1, name: 'The Grand Plaza', type: 'Hotel & Resort', location: 'Downtown, New York', rating: 4.9, reviews: 128, capacity: '50-500', price: '$5,000', image: 'https://picsum.photos/seed/venue1/800/600' },
  { id: 2, name: 'Crystal Banquets', type: 'Banquet Hall', location: 'Beverly Hills, CA', rating: 4.8, reviews: 96, capacity: '100-800', price: '$3,500', image: 'https://picsum.photos/seed/venue2/800/600' },
  { id: 3, name: 'Sunset Gardens', type: 'Outdoor Venue', location: 'Miami Beach, FL', rating: 4.7, reviews: 84, capacity: '50-300', price: '$2,800', image: 'https://picsum.photos/seed/venue3/800/600' },
  { id: 4, name: 'The Glasshouse', type: 'Modern Space', location: 'Chicago, IL', rating: 4.9, reviews: 156, capacity: '20-200', price: '$4,200', image: 'https://picsum.photos/seed/venue4/800/600' },
  { id: 5, name: 'Royal Palace', type: 'Banquet Hall', location: 'Las Vegas, NV', rating: 4.6, reviews: 112, capacity: '200-1000', price: '$6,000', image: 'https://picsum.photos/seed/venue5/800/600' },
  { id: 6, name: 'Oceanview Resort', type: 'Resort', location: 'Malibu, CA', rating: 4.8, reviews: 204, capacity: '100-400', price: '$8,500', image: 'https://picsum.photos/seed/venue6/800/600' },
];

export function VenueSearch() {
  const [filterOpen, setFilterOpen] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.venue-card', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-party-light font-sans text-party-dark">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold text-gradient">PartyDial</Link>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <Link to="/search" className="text-party-purple transition-colors">Venues</Link>
            <Link to="/vendors" className="hover:text-party-purple transition-colors">For Vendors</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/post-requirement">
              <Button variant="outline" className="hidden md:flex bg-white">Post Requirement</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold mb-2">Wedding Venues in New York</h1>
            <p className="text-gray-600">Showing {venues.length} venues matching your criteria</p>
          </div>
          <Button variant="outline" className="bg-white md:hidden" onClick={() => setFilterOpen(!filterOpen)}>
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${filterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-28 space-y-8">
              <div>
                <h3 className="font-bold mb-4">Event Type</h3>
                <div className="space-y-3">
                  {['Wedding', 'Corporate Event', 'Birthday Party', 'Private Party'].map((type) => (
                    <label key={type} className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 text-party-purple focus:ring-party-purple border-gray-300 rounded" />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-party-dark transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Venue Type</h3>
                <div className="space-y-3">
                  {['Banquet Hall', 'Hotel / Resort', 'Farmhouse', 'Restaurant'].map((type) => (
                    <label key={type} className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 text-party-purple focus:ring-party-purple border-gray-300 rounded" />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-party-dark transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Guest Capacity</h3>
                <div className="space-y-3">
                  {['Up to 50', '50 - 100', '100 - 300', '300 - 500', '500+'].map((cap) => (
                    <label key={cap} className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 text-party-purple focus:ring-party-purple border-gray-300 rounded" />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-party-dark transition-colors">{cap}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Price Range</h3>
                <input type="range" className="w-full accent-party-purple" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$500</span>
                  <span>$10,000+</span>
                </div>
              </div>
              
              <Button variant="gradient" className="w-full">Apply Filters</Button>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search by name..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-party-purple transition-all" />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
                <select className="bg-gray-50 border-none text-sm rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-party-purple transition-all font-medium">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue) => (
                <div key={venue.id} className="venue-card bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
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
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="bg-white">Load More Venues</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
