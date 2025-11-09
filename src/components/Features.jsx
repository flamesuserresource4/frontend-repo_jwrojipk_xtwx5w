import React from 'react';
import { Cpu, Gauge, ShieldCheck, Globe2 } from 'lucide-react';

const items = [
  {
    icon: Cpu,
    title: 'Edge Compute',
    desc: 'Run functions at the edge for ultra-low latency and dynamic experiences.',
  },
  {
    icon: Gauge,
    title: 'Blazing Performance',
    desc: 'Optimized network with HTTP/3 and smart routing keeps things snappy.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Security',
    desc: 'mTLS, WAF, DDoS protection, and automated patches—secure by default.',
  },
  {
    icon: Globe2,
    title: 'Global Anycast',
    desc: 'Deploy to 300+ PoPs worldwide with single-click replication.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Built for scale</h2>
        <p className="mt-3 text-white/70">Everything you need to deploy, secure, and observe your apps—without the drag.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-white shadow-[0_0_18px_rgba(217,70,239,0.25)]">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
