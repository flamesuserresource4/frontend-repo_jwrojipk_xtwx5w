import React from 'react';
import { ShieldCheck, Rocket, Globe2, Check } from 'lucide-react';

const points = [
  { icon: Rocket, title: 'Performa Kencang', desc: 'Infra modern dengan CPU generasi terbaru dan NVMe.' },
  { icon: ShieldCheck, title: 'Keamanan Ketat', desc: 'Isolasi workload, WAF, dan backup otomatis.' },
  { icon: Globe2, title: 'Global by Default', desc: 'Latency rendah berkat edge POP di berbagai negara.' },
  { icon: Check, title: 'Harga Transparan', desc: 'Bayar sesuai pemakaian, tanpa biaya tersembunyi.' },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Mengapa Memilih Kami?</h2>
          <p className="mt-3 text-white/70">Fokus pada produk Anda, biarkan kami mengurus infrastruktur.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <p.icon className="mt-0.5 h-6 w-6 text-fuchsia-300" />
                <div>
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="mt-1 text-white/70">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
