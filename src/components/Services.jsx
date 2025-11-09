import React from 'react';
import { Cpu, Gauge, ShieldCheck, Globe2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Compute',
    desc: 'Container & VM hosting with instant cold-start free scaling.',
  },
  {
    icon: Globe2,
    title: 'Edge Network',
    desc: 'Global Anycast network with intelligent routing and CDN.',
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    desc: 'DDoS protection, WAF, managed certs, and secrets vault.',
  },
  {
    icon: Gauge,
    title: 'Observability',
    desc: 'Metrics, logs, and traces unified in one simple view.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Layanan Inti</h2>
          <p className="mt-3 text-white/70">Paket komputasi modern dengan performa dan keamanan tingkat tinggi.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-transform hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              <s.icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-3 text-lg font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              <a href="#pricing" className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300">
                Mulai sekarang <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
