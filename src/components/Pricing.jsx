import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: false,
    features: ['1 project', 'Shared edge runtime', 'Basic analytics'],
  },
  {
    name: 'Pro',
    price: '$29/mo',
    highlight: true,
    features: ['Unlimited projects', 'Dedicated edge runtime', 'Priority support', 'Advanced analytics'],
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    highlight: false,
    features: ['Custom SLA', 'Private networking', 'SAML SSO', '24/7 support'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Simple, predictable pricing</h2>
        <p className="mt-3 text-white/70">Start free. Scale when you’re ready.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border border-white/10 p-6 ${
              tier.highlight ? 'bg-white/[0.08] shadow-[0_0_32px_rgba(34,211,238,0.25)] ring-1 ring-cyan-400/30' : 'bg-white/5'
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-3 py-1 text-xs font-medium text-white">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold">{tier.name}</h3>
            <p className="mt-2 text-3xl font-bold">{tier.price}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/80">
                  <Check className="h-4 w-4 text-cyan-400" />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-medium text-white ${
              tier.highlight
                ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500'
                : 'border border-white/10 bg-white/5 hover:bg-white/10'
            }`}>
              {tier.highlight ? 'Upgrade to Pro' : 'Choose plan'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
