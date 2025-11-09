import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Raka — CTO, FintechID',
    quote: 'Migrasi paling mulus. Deploy 60 detik, observabilitas-nya bikin on-call lebih tenang.',
  },
  {
    name: 'Nadia — Founder, EduLabs',
    quote: 'Harga masuk akal buat startup. Auto-scale dan edge caching bikin aplikasi kami ngebut.',
  },
  {
    name: 'Bimo — DevOps, GameHub',
    quote: 'Dukungan teknis responsif banget. DDoS mitigation-nya terbukti saat peak event.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Apa Kata Mereka</h2>
          <p className="mt-3 text-white/70">Tim dari berbagai industri mempercayakan workload mereka kepada kami.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-1 text-fuchsia-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-white/60">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
