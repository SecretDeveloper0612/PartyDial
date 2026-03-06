import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Users, Star, CheckCircle2, Image as ImageIcon, DollarSign, ArrowLeft, Phone, Mail, Calendar, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import gsap from 'gsap';

export function PublicVenueProfile() {
  const { id } = useParams();
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-img', {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, galleryRef);

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
        <Link to="/search" className="inline-flex items-center text-gray-500 hover:text-party-purple transition-colors mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Search
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="col-span-2 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group h-[400px]">
                <img src={`https://picsum.photos/seed/venue${id || 1}/800/600`} alt="Main Venue" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Button variant="outline" className="bg-white/20 text-white border-white/40 backdrop-blur-md hover:bg-white hover:text-party-dark">
                    <ImageIcon className="w-4 h-4 mr-2" /> View Gallery
                  </Button>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group h-[192px]">
                <img src={`https://picsum.photos/seed/venue${id || 1}a/400/300`} alt="Venue 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <div className="relative rounded-2xl overflow-hidden group h-[192px]">
                <img src={`https://picsum.photos/seed/venue${id || 1}b/400/300`} alt="Venue 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="text-white font-medium">+12 Photos</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-display font-bold">The Grand Plaza</h1>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" /> Downtown, New York, NY 10001
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-100">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="font-bold text-yellow-700">4.9</span>
                    <span className="text-yellow-600 text-sm ml-1">(128 reviews)</span>
                  </div>
                  <button className="text-gray-400 hover:text-party-pink transition-colors p-2 rounded-full hover:bg-party-pink/10">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="prose prose-gray max-w-none mb-8">
                <p>Experience luxury and elegance at The Grand Plaza. Our stunning ballrooms and lush outdoor gardens provide the perfect backdrop for your dream wedding, corporate gala, or private celebration. With world-class catering and impeccable service, we ensure your event is unforgettable.</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mb-8 py-6 border-y border-gray-100">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Venue Type</div>
                  <div className="font-medium">Hotel / Resort</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Max Capacity</div>
                  <div className="font-medium flex items-center"><Users className="w-4 h-4 mr-2 text-party-purple" /> Up to 500 Guests</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Starting Price</div>
                  <div className="font-medium flex items-center"><DollarSign className="w-4 h-4 mr-1 text-party-purple" /> $5,000 / day</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['In-house Catering', 'Valet Parking', 'Bridal Suite', 'Dance Floor', 'AV Equipment', 'Outdoor Area'].map((amenity, i) => (
                  <div key={i} className="flex items-center text-gray-700 bg-gray-50 px-4 py-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-party-blue" />
                    {amenity}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Location</h3>
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
                <img src="https://picsum.photos/seed/map/800/400" alt="Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-lg">
                    <MapPin className="w-6 h-6 text-party-pink" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl sticky top-28">
              <h3 className="text-xl font-bold mb-2">Request a Quote</h3>
              <p className="text-gray-500 text-sm mb-6">Get pricing and availability directly from the venue manager.</p>

              <form className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Event Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="date" className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Guest Count</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all text-sm appearance-none">
                      <option>Up to 50</option>
                      <option>50 - 100</option>
                      <option>100 - 300</option>
                      <option>300 - 500</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Message (Optional)</label>
                  <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all text-sm" rows={3} placeholder="Tell the venue about your event..."></textarea>
                </div>
                <Button variant="gradient" className="w-full py-3">Send Inquiry</Button>
              </form>

              <div className="space-y-3 pt-6 border-t border-gray-100">
                <Button variant="outline" className="w-full bg-white justify-center">
                  <Phone className="w-4 h-4 mr-2" /> Call Vendor
                </Button>
                <Button variant="outline" className="w-full bg-white justify-center">
                  <Mail className="w-4 h-4 mr-2" /> Email Vendor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
