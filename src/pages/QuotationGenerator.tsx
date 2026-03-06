import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { Sparkles, FileText, Download, Send, MessageCircle, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '../components/Button';
import gsap from 'gsap';

export function QuotationGenerator() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [quoteGenerated, setQuoteGenerated] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [step]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setQuoteGenerated(true);
      setStep(5);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">AI Quotation Generator</h1>
          <p className="text-gray-600">Create professional, branded quotes in seconds.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Builder Panel */}
        <div className="lg:col-span-1 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[600px]">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-lg">Quote Builder</h2>
              <span className="text-sm font-medium text-party-purple">Step {step} of 4</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gradient-party h-1.5 rounded-full transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }}></div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6" ref={formRef}>
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold">Select Event Type</h3>
                <div className="space-y-3">
                  {['Wedding Reception', 'Corporate Event', 'Birthday Party', 'Anniversary', 'Other'].map((type) => (
                    <label key={type} className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-party-purple/50 hover:bg-party-purple/5 transition-all">
                      <input type="radio" name="eventType" className="w-4 h-4 text-party-purple focus:ring-party-purple border-gray-300" />
                      <span className="ml-3 font-medium text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold">Event Details</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Guest Count</label>
                    <input type="number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="e.g., 250" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Event Date</label>
                    <input type="date" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Client Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" placeholder="Sarah Johnson" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold">Choose Packages</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Venue Rental', desc: 'Main hall, garden area, basic lighting', price: '$5,000' },
                    { name: 'Premium Catering', desc: '3-course meal, welcome drinks, desserts', price: '$85/person' },
                    { name: 'Decoration Package', desc: 'Floral arrangements, stage setup, centerpieces', price: '$3,500' },
                    { name: 'Photography & Video', desc: '2 photographers, drone, highlight video', price: '$2,800' },
                  ].map((pkg) => (
                    <label key={pkg.name} className="flex items-start p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-party-purple/50 hover:bg-party-purple/5 transition-all">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-party-purple focus:ring-party-purple border-gray-300 rounded" />
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-900">{pkg.name}</span>
                          <span className="font-medium text-party-purple">{pkg.price}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{pkg.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 text-center py-8">
                <div className="w-20 h-20 bg-party-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-party-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ready to Generate</h3>
                <p className="text-gray-600 mb-8">Our AI will compile these details into a professional, persuasive quotation.</p>
                <Button 
                  variant="gradient" 
                  className="w-full h-14 text-lg" 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating AI Quote...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Generate Quote <Sparkles className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </Button>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6 text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Quote Generated!</h3>
                <p className="text-gray-600 mb-8">Your professional quotation is ready to be sent to the client.</p>
                
                <div className="space-y-3">
                  <Button variant="gradient" className="w-full bg-green-500 hover:bg-green-600 shadow-green-500/25">
                    <MessageCircle className="w-5 h-5 mr-2" /> Send via WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full bg-white">
                    <Send className="w-5 h-5 mr-2" /> Send via Email
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <Download className="w-5 h-5 mr-2" /> Download PDF
                  </Button>
                </div>
                
                <button onClick={() => {setStep(1); setQuoteGenerated(false);}} className="text-sm font-medium text-party-purple mt-6 hover:underline">
                  Create Another Quote
                </button>
              </div>
            )}
          </div>

          {step < 4 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-between">
              <Button 
                variant="outline" 
                className="bg-white" 
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button 
                variant="gradient" 
                onClick={() => setStep(Math.min(4, step + 1))}
              >
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden h-[600px] flex flex-col">
          <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
            <div className="flex items-center text-sm font-medium text-gray-500">
              <FileText className="w-4 h-4 mr-2" /> Live Preview
            </div>
            {quoteGenerated && (
              <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center">
                <CheckCircle2 className="w-3 h-3 mr-1" /> Ready to Send
              </div>
            )}
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 bg-gray-100/50">
            <div className={cn(
              "bg-white max-w-2xl mx-auto rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-500",
              quoteGenerated ? "opacity-100 scale-100" : "opacity-50 scale-95 blur-[2px]"
            )}>
              {/* Mock Quotation Document */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h1 className="text-2xl font-display font-bold text-party-dark mb-1">Grand Hotel & Spa</h1>
                    <p className="text-sm text-gray-500">123 Luxury Ave, New York, NY 10001</p>
                    <p className="text-sm text-gray-500">+1 (555) 123-4567 | events@grandhotel.com</p>
                  </div>
                  <div className="text-right">
                    <h2 className="text-xl font-bold text-gray-300 uppercase tracking-widest mb-2">Quotation</h2>
                    <p className="text-sm font-medium text-gray-900">Quote #: <span className="text-gray-500 font-normal">QT-2026-089</span></p>
                    <p className="text-sm font-medium text-gray-900">Date: <span className="text-gray-500 font-normal">Oct 12, 2026</span></p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Prepared For</h3>
                  <p className="font-medium text-party-dark">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Wedding Reception | 250 Guests</p>
                  <p className="text-sm text-gray-600">Event Date: Oct 15, 2026</p>
                </div>

                <table className="w-full text-left mb-8">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 text-sm font-bold text-gray-900 uppercase tracking-wider">Description</th>
                      <th className="py-3 text-sm font-bold text-gray-900 uppercase tracking-wider text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="py-4">
                        <p className="font-bold text-gray-900">Venue Rental - Grand Ballroom</p>
                        <p className="text-gray-500 mt-1">Includes main hall, garden access, basic lighting, and setup.</p>
                      </td>
                      <td className="py-4 text-right font-medium text-gray-900">$5,000.00</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4">
                        <p className="font-bold text-gray-900">Premium Catering Package</p>
                        <p className="text-gray-500 mt-1">3-course meal, welcome drinks, desserts for 250 guests.</p>
                      </td>
                      <td className="py-4 text-right font-medium text-gray-900">$21,250.00</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4">
                        <p className="font-bold text-gray-900">Decoration Package - Elegance</p>
                        <p className="text-gray-500 mt-1">Floral arrangements, stage setup, premium centerpieces.</p>
                      </td>
                      <td className="py-4 text-right font-medium text-gray-900">$3,500.00</td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-end">
                  <div className="w-64 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-medium text-gray-900">$29,750.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Tax (8.875%)</span>
                      <span className="font-medium text-gray-900">$2,640.31</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                      <span className="text-party-dark">Total</span>
                      <span className="text-party-purple">$32,390.31</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-party-purple/5 p-6 text-center">
                <p className="text-sm text-party-purple font-medium mb-2">Thank you for considering Grand Hotel & Spa!</p>
                <p className="text-xs text-gray-500">This quotation is valid for 14 days from the date of issue.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
