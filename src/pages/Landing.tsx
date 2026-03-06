import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../components/Button';
import { Sparkles, Target, Zap, MapPin, BarChart2, CheckCircle2, ArrowRight, Star, ShieldCheck, TrendingUp, LayoutDashboard, MessageSquare, Globe, Calendar, CreditCard, Mail, Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    // Hero Animations
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Confetti floating
      gsap.to('.confetti', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-45, 45)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1,
      });

      // Scroll Animations
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });

      gsap.from('.step-card', {
        scrollTrigger: {
          trigger: howItWorksRef.current,
          start: 'top 75%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.benefit-card', {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.5)',
      });

      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-party-light font-sans text-party-dark overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-display font-bold text-gradient">PartyDial</div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-party-purple transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-party-purple transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-party-purple transition-colors">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/vendor">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="gradient">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        {/* Confetti Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="hero-text inline-flex items-center px-4 py-2 rounded-full bg-white border border-party-purple/20 text-party-purple text-sm font-medium mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            The #1 B2B Platform for Event Venues
          </div>
          <h1 className="hero-text text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
            Get Event Leads That <br />
            <span className="text-gradient">Actually Convert</span>
          </h1>
          <p className="hero-text text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Connect with high-intent event planners looking for venues like yours. 
            Manage leads, generate AI quotes, and grow your revenue on autopilot.
          </p>
          <div className="hero-text flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                Start Getting Leads
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-200 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by top venues nationwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-party-dark mb-2">500+</div>
              <div className="text-gray-500 text-sm font-medium">Active Venues</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-party-dark mb-2">$25M+</div>
              <div className="text-gray-500 text-sm font-medium">Revenue Generated</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-party-dark mb-2">50k+</div>
              <div className="text-gray-500 text-sm font-medium">Leads Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-party-dark mb-2">3x</div>
              <div className="text-gray-500 text-sm font-medium">Higher Conversion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Everything you need to close more deals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Powerful tools designed specifically for banquet halls, hotels, and event venues.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Smart Lead Distribution', desc: 'Get matched with leads that fit your venue capacity and pricing.' },
              { icon: Zap, title: 'AI Quotation Generator', desc: 'Create professional, branded quotes in seconds using AI.' },
              { icon: MapPin, title: 'Location Based Leads', desc: 'Dominate your local market with geo-targeted event requests.' },
              { icon: BarChart2, title: 'Vendor CRM', desc: 'Track conversations, follow-ups, and conversions in one place.' },
            ].map((feature, i) => (
              <div key={i} className="feature-card p-6 rounded-2xl bg-party-light border border-gray-100 hover:shadow-xl hover:border-party-purple/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-party-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Bento Grid */}
      <section className="py-24 bg-party-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Supercharge your venue management</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to run your venue business, built into one powerful platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Feature */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-party-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-party-purple/10 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-party-purple/10 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-party-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">AI-Powered Quotations</h3>
                  <p className="text-gray-600 max-w-md">Generate pixel-perfect, branded quotes in seconds. Our AI analyzes the lead requirements and suggests the optimal pricing package.</p>
                </div>
                {/* Mock UI */}
                <div className="mt-8 bg-gray-50 rounded-xl p-4 border border-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-12 bg-party-purple/20 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-4/5 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Feature 1 */}
            <div className="bg-gradient-party rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Instant Chat</h3>
                  <p className="text-white/80 text-sm">Communicate with leads in real-time. Close deals faster while they're still hot.</p>
                </div>
              </div>
            </div>

            {/* Small Feature 2 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-party-blue/10 flex items-center justify-center mb-6">
                    <BarChart2 className="w-6 h-6 text-party-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
                  <p className="text-gray-600 text-sm">Track your conversion rates, revenue, and ROI with beautiful, easy-to-understand charts.</p>
                </div>
              </div>
            </div>

            {/* Medium Feature */}
            <div className="md:col-span-2 bg-party-dark rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/800/400')] opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Custom Venue Profile</h3>
                    <p className="text-gray-400 max-w-md">Showcase your venue with a stunning, SEO-optimized profile page that ranks on Google and attracts organic leads.</p>
                  </div>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hidden sm:flex">
                    View Example
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" ref={howItWorksRef} className="py-24 bg-party-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-party-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How PartyDial Works</h2>
              <p className="text-gray-400 text-lg mb-12">We simplify the lead generation process so you can focus on hosting amazing events.</p>
              
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Event organizer submits request', desc: 'Clients tell us what they need for their upcoming wedding, corporate event, or party.' },
                  { step: '02', title: 'AI matches vendors', desc: 'Our algorithm instantly matches the request with the best-suited venues in the area.' },
                  { step: '03', title: 'You receive high-quality leads', desc: 'Get notified instantly. Send a quote, chat with the client, and close the booking.' },
                ].map((item, i) => (
                  <div key={i} className="step-card flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-party-blue">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-dark rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">New Lead Received</div>
                    <div className="text-xl font-bold">Wedding Reception</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-party-pink/20 text-party-pink text-sm font-medium">
                    High Intent
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Guest Count</span>
                    <span className="font-medium">250-300</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Budget</span>
                    <span className="font-medium">$15,000 - $20,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Date</span>
                    <span className="font-medium">Oct 15, 2026</span>
                  </div>
                </div>
                <Button variant="gradient" className="w-full">Accept Lead & Send Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Benefits */}
      <section id="benefits" ref={benefitsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Top Venues Choose PartyDial</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't just send leads, we send opportunities that grow your business.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Verified Leads', desc: 'Every lead is phone-verified. No more wasting time on fake inquiries or window shoppers.' },
              { icon: TrendingUp, title: 'Higher Conversions', desc: 'Our AI matching ensures you only get leads that fit your venue, leading to a 3x higher close rate.' },
              { icon: LayoutDashboard, title: 'Smart CRM Dashboard', desc: 'Manage all your inquiries, send quotes, and track revenue from one easy-to-use dashboard.' },
            ].map((benefit, i) => (
              <div key={i} className="benefit-card p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-party-blue/30 transition-all text-center group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-party-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-party-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-party-dark text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-party-purple/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Plays nice with your favorite tools</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Connect PartyDial with the software you already use to run your business seamlessly.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Google Calendar', icon: Calendar, color: 'text-blue-400', bg: 'bg-blue-400/10' },
              { name: 'Stripe', icon: CreditCard, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
              { name: 'Mailchimp', icon: Mail, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
              { name: 'QuickBooks', icon: BarChart2, color: 'text-green-400', bg: 'bg-green-400/10' },
            ].map((tool, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors cursor-pointer group">
                <div className={`w-12 h-12 mx-auto rounded-xl ${tool.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <h3 className="font-bold text-sm">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" ref={testimonialsRef} className="py-24 bg-party-light relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-party-pink/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-party-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Loved by Venue Owners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See how PartyDial is transforming event businesses across the country.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Owner, The Grand Plaza', quote: 'PartyDial completely changed how we get bookings. We went from struggling to fill weekends to being booked out 6 months in advance.', rating: 5 },
              { name: 'David Chen', role: 'Manager, Sunset Resorts', quote: 'The AI quotation tool alone is worth the price. It saves my team hours every week, and the clients love how professional the quotes look.', rating: 5 },
              { name: 'Elena Rodriguez', role: 'Director, Crystal Banquets', quote: 'Finally, a platform that understands what venues actually need. The leads are high quality and the CRM makes follow-ups a breeze.', rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card p-8 rounded-3xl bg-white border border-gray-100 shadow-sm relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-party p-[2px]">
                    <div className="w-full h-full rounded-full border-2 border-white bg-white overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-party-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-party-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your venue's growth goals.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Basic', price: '$49', leads: '10 Leads/mo', features: ['Basic CRM', 'Email Support', 'Standard Profile'] },
              { name: 'Premium', price: '$99', leads: '30 Leads/mo', features: ['AI Quotation Generator', 'Priority Support', 'Featured Profile', 'Analytics Dashboard'], popular: true },
              { name: 'Elite', price: '$199', leads: 'Unlimited Leads', features: ['Everything in Premium', 'Dedicated Account Manager', 'API Access', 'Custom Integrations'] },
            ].map((plan, i) => (
              <div key={i} className={`relative p-8 rounded-3xl bg-white border ${plan.popular ? 'border-party-purple shadow-xl shadow-party-purple/10 scale-105 z-10' : 'border-gray-200'} transition-transform hover:-translate-y-2`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-party text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <div className="text-sm font-medium text-party-purple mb-6 pb-6 border-b border-gray-100">
                  {plan.leads}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-party-blue mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? 'gradient' : 'outline'} className="w-full">
                  Choose {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about the product and billing.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'How do you verify the leads?', a: 'Every lead that comes through our platform is verified via SMS and email. We also use AI to score the intent of the lead based on their requirements, ensuring you only spend time on serious inquiries.' },
              { q: 'Can I integrate this with my existing calendar?', a: 'Yes! PartyDial integrates seamlessly with Google Calendar, Outlook, and Apple Calendar. When a booking is confirmed, it automatically blocks out the date across all your synced calendars.' },
              { q: 'Is there a limit to how many quotes I can send?', a: 'On our Premium and Elite plans, you can send unlimited AI-generated quotes. The Basic plan includes up to 50 quotes per month.' },
              { q: 'Can I cancel my subscription at any time?', a: 'Absolutely. There are no long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard.' },
              { q: 'How does the AI Quotation Generator work?', a: 'Our AI analyzes the specific requirements of the lead (guest count, event type, date) and matches it against your pricing rules and packages to instantly generate a professional, branded PDF quote.' },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-party-dark pr-8">{faq.q}</span>
                  {openFaq === i ? (
                    <Minus className="w-5 h-5 text-party-purple flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-48 py-4 border-t border-gray-100 bg-gray-50' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="cta-content bg-party-dark rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-party-purple/20 to-party-blue/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to fill your venue calendar?</h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Join hundreds of top venues that are already using PartyDial to get high-quality leads and close more bookings.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/register">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto bg-white text-party-dark hover:bg-gray-100">
                    Get Started for Free
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-display font-bold text-gradient mb-4 md:mb-0">PartyDial</div>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-party-dark transition-colors">Terms</a>
            <a href="#" className="hover:text-party-dark transition-colors">Privacy</a>
            <a href="#" className="hover:text-party-dark transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
