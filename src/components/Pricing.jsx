import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$5',
    period: '/mo',
    features: ['1 project', '10 GB bandwidth', 'Free SSL', 'Email support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    features: ['Unlimited projects', '1 TB bandwidth', 'Global Edge CDN', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Dedicated region', 'SLA 99.99%', 'Private networking', 'Solution architect'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#070711] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
        <p className="mt-3 text-center text-white/70 max-w-2xl mx-auto">
          Start small, scale to the stratosphere.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5 ${
                tier.highlight ? 'ring-2 ring-cyan-400' : ''
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <div className="text-3xl font-bold text-white">
                  {tier.price}
                  <span className="text-base font-medium text-white/70">{tier.period}</span>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/80">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 py-2.5 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:scale-[1.01] transition">
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
