import React, { useEffect, useRef } from 'react';
import { CheckCircle2, CreditCard, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import gsap from 'gsap';

export function Subscription() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-display font-bold mb-4">Upgrade Your Plan</h1>
        <p className="text-gray-600">Get more leads, unlock AI tools, and grow your venue business faster with our premium plans.</p>
      </div>

      <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { 
            name: 'Basic', 
            price: '$49', 
            leads: '10 Leads/mo', 
            features: ['Basic CRM', 'Email Support', 'Standard Profile', 'Manual Quotations'],
            popular: false
          },
          { 
            name: 'Premium', 
            price: '$99', 
            leads: '30 Leads/mo', 
            features: ['AI Quotation Generator', 'Priority Support', 'Featured Profile', 'Analytics Dashboard', 'WhatsApp Integration'], 
            popular: true 
          },
          { 
            name: 'Elite', 
            price: '$199', 
            leads: 'Unlimited Leads', 
            features: ['Everything in Premium', 'Dedicated Account Manager', 'API Access', 'Custom Integrations', 'White-label Quotes'],
            popular: false
          },
        ].map((plan, i) => (
          <div key={i} className={`pricing-card relative p-8 rounded-3xl bg-white border ${plan.popular ? 'border-party-purple shadow-xl shadow-party-purple/10 scale-105 z-10' : 'border-gray-200'} transition-transform hover:-translate-y-2 flex flex-col`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-party text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center">
                <Zap className="w-3 h-3 mr-1" /> Most Popular
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
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-party-blue mr-3 flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="space-y-3 mt-auto">
              <Button variant={plan.popular ? 'gradient' : 'outline'} className="w-full">
                Subscribe Now
              </Button>
              <Button variant="ghost" className="w-full text-gray-500 hover:text-party-dark">
                <CreditCard className="w-4 h-4 mr-2" /> Pay with EMI
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Need a custom plan?</h3>
          <p className="text-gray-600">Contact our sales team for enterprise pricing and custom lead volume requirements.</p>
        </div>
        <Button variant="outline" className="whitespace-nowrap">Contact Sales</Button>
      </div>
    </div>
  );
}
