import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight, CheckCircle2, Calendar, Users, DollarSign, MapPin } from 'lucide-react';
import { cn } from '../components/Button';

export function PostRequirement() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-party-light flex flex-col font-sans text-party-dark">
      <header className="h-20 bg-white border-b border-gray-200 flex items-center px-8">
        <Link to="/" className="text-2xl font-display font-bold text-gradient">PartyDial</Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            {!submitted ? (
              <>
                <div className="text-center mb-10">
                  <h1 className="text-3xl font-display font-bold mb-3">Post Your Event Requirement</h1>
                  <p className="text-gray-600">Tell us what you need, and we'll connect you with the best venues.</p>
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

                <form className="space-y-6" onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep(step + 1); }}>
                  {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                      <h2 className="text-xl font-bold mb-4">Event Details</h2>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Event Type</label>
                          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all appearance-none">
                            <option>Wedding</option>
                            <option>Corporate Event</option>
                            <option>Birthday Party</option>
                            <option>Private Celebration</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Event Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="date" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" />
                          </div>
                        </div>
                      </div>
                      <Button variant="gradient" className="w-full mt-8" type="submit">
                        Continue <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                      <h2 className="text-xl font-bold mb-4">Requirements</h2>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Guest Count</label>
                          <div className="relative">
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all appearance-none">
                              <option>Up to 50</option>
                              <option>50 - 100</option>
                              <option>100 - 300</option>
                              <option>300 - 500</option>
                              <option>500+</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Budget Range</label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all appearance-none">
                              <option>Less than $5,000</option>
                              <option>$5,000 - $10,000</option>
                              <option>$10,000 - $20,000</option>
                              <option>$20,000+</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">City</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="text" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="e.g., New York" />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-8">
                        <Button variant="outline" className="w-full" onClick={() => setStep(1)} type="button">Back</Button>
                        <Button variant="gradient" className="w-full" type="submit">
                          Continue <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                      <h2 className="text-xl font-bold mb-4">Contact Details</h2>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Full Name</label>
                          <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Email Address</label>
                          <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Phone Number</label>
                          <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" required />
                        </div>
                      </div>
                      <div className="flex gap-4 mt-8">
                        <Button variant="outline" className="w-full" onClick={() => setStep(2)} type="button">Back</Button>
                        <Button variant="gradient" className="w-full" type="submit">
                          Submit Request
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div className="space-y-6 animate-in fade-in zoom-in duration-500 text-center py-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Request Submitted!</h2>
                <p className="text-gray-600 mb-8 text-lg">Your event requirement has been sent to top venues in your area. They will contact you shortly with custom quotes.</p>
                <Link to="/">
                  <Button variant="gradient" className="w-full">Return to Home</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
