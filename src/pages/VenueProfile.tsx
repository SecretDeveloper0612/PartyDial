import React, { useEffect, useRef } from 'react';
import { MapPin, Users, Star, CheckCircle2, Edit3, Image as ImageIcon, DollarSign } from 'lucide-react';
import { Button } from '../components/Button';
import gsap from 'gsap';

export function VenueProfile() {
  const headerRef = useRef<HTMLDivElement>(null);
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
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">My Venue Profile</h1>
          <p className="text-gray-600">This is how your venue appears to event planners.</p>
        </div>
        <Button variant="outline" className="bg-white">
          <Edit3 className="w-4 h-4 mr-2" /> Edit Profile
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Gallery */}
          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group h-[400px]">
              <img src="https://picsum.photos/seed/venue1/800/600" alt="Main Venue" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <Button variant="outline" className="bg-white/20 text-white border-white/40 backdrop-blur-md hover:bg-white hover:text-party-dark">
                  <ImageIcon className="w-4 h-4 mr-2" /> View Gallery
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group h-[192px]">
              <img src="https://picsum.photos/seed/venue2/400/300" alt="Venue 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="relative rounded-2xl overflow-hidden group h-[192px]">
              <img src="https://picsum.photos/seed/venue3/400/300" alt="Venue 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
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
                  <h2 className="text-3xl font-display font-bold">Grand Hotel & Spa</h2>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                  </span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" /> 123 Luxury Ave, New York, NY 10001
                </div>
              </div>
              <div className="flex items-center bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-100">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="font-bold text-yellow-700">4.9</span>
                <span className="text-yellow-600 text-sm ml-1">(128 reviews)</span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none mb-8">
              <p>Experience luxury and elegance at the Grand Hotel & Spa. Our stunning ballrooms and lush outdoor gardens provide the perfect backdrop for your dream wedding, corporate gala, or private celebration. With world-class catering and impeccable service, we ensure your event is unforgettable.</p>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['In-house Catering', 'Valet Parking', 'Bridal Suite', 'AV Equipment', 'Dance Floor', 'Outdoor Area', 'WiFi Access', 'Wheelchair Accessible', 'Liquor License'].map((amenity, i) => (
                <div key={i} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold mb-6">Pricing Packages</h3>
            
            <div className="space-y-4 mb-6">
              <div className="p-4 border border-party-purple/30 bg-party-purple/5 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-party-purple text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
                <h4 className="font-bold text-party-dark mb-1">Premium Wedding</h4>
                <div className="text-2xl font-display font-bold text-party-purple mb-2">$15,000</div>
                <p className="text-sm text-gray-600">Includes Grand Ballroom, 3-course catering for 150 guests, and basic decor.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-xl hover:border-party-purple/30 transition-colors cursor-pointer">
                <h4 className="font-bold text-party-dark mb-1">Corporate Gala</h4>
                <div className="text-xl font-display font-bold text-gray-900 mb-2">$8,500</div>
                <p className="text-sm text-gray-600">Includes Conference Hall, AV setup, and buffet lunch for 200 guests.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-xl hover:border-party-purple/30 transition-colors cursor-pointer">
                <h4 className="font-bold text-party-dark mb-1">Intimate Gathering</h4>
                <div className="text-xl font-display font-bold text-gray-900 mb-2">$3,000</div>
                <p className="text-sm text-gray-600">Includes Garden Pavilion, high tea setup for 50 guests.</p>
              </div>
            </div>
            
            <Button variant="gradient" className="w-full">
              Preview Public Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
