import { Cpu, Gauge, ShieldCheck, Globe2 } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Edge-Optimized Compute',
    desc: 'Deploy to a global mesh of edge locations for ultra-low latency and auto-scaling.',
  },
  {
    icon: Gauge,
    title: 'Lightning Performance',
    desc: 'HTTP/3, QUIC, Brotli, and server push out-of-the-box — tuned for speed.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Security',
    desc: 'Built-in WAF, DDoS protection, and secrets vault with per-env access.',
  },
  {
    icon: Globe2,
    title: 'Global CDN + Any Runtime',
    desc: 'Static, Node, Python, Go — your stack, our global network.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0A0A14] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">Engineered for performance</h2>
        <p className="mt-3 text-center text-white/70 max-w-2xl mx-auto">
          A modern platform that blends raw speed with intelligent automation.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
