import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Building2, User, Phone, Mail, MapPin, Users, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../components/Button';

export function VendorRegistration() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-party-light flex flex-col font-sans text-party-dark">
      <header className="h-20 bg-white border-b border-gray-200 flex items-center px-8">
        <Link to="/" className="text-2xl font-display font-bold text-gradient">PartyDial</Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-display font-bold mb-3">Join PartyDial</h1>
              <p className="text-gray-600">Start getting high-quality event leads today.</p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3].map((i) => (
                <React.Fragment key={i}>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300",
                    step >= i ? "bg-party-purple text-white" : "bg-gray-100 text-gray-400"
                  )}>
                    {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                  </div>
                  {i < 3 && (
                    <div className={cn(
                      "w-16 h-1 transition-colors duration-300",
                      step > i ? "bg-party-purple" : "bg-gray-100"
                    )} />
                  )}
                </React.Fragment>
              ))}
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-xl font-bold mb-4">Basic Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Business Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="Grand Hotel & Spa" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Owner Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="tel" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="email" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="john@example.com" />
                      </div>
                    </div>
                  </div>
                  <Button variant="gradient" className="w-full mt-8" onClick={() => setStep(2)}>
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h2 className="text-xl font-bold mb-4">Venue Details</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Venue Type</label>
                      <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all appearance-none">
                        <option>Banquet Hall</option>
                        <option>Hotel / Resort</option>
                        <option>Restaurant / Lounge</option>
                        <option>Farmhouse</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">City</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="New York" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Max Capacity</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="number" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Starting Price</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="number" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="1000" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <Button variant="outline" className="w-full" onClick={() => setStep(1)}>Back</Button>
                    <Button variant="gradient" className="w-full" onClick={() => setStep(3)}>
                      Continue <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">You're all set!</h2>
                  <p className="text-gray-600 mb-8">Your venue profile has been created. Let's head to your dashboard.</p>
                  <Link to="/vendor">
                    <Button variant="gradient" className="w-full">Go to Dashboard</Button>
                  </Link>
                </div>
              )}
            </form>
          </div>
          <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Already have an account? <Link to="/vendor" className="text-party-purple font-medium hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
