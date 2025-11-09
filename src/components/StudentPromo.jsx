import React from 'react';
import { GraduationCap, Rocket, ArrowRight } from 'lucide-react';

const StudentPromo = () => {
  return (
    <section id="student" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <GraduationCap className="h-3.5 w-3.5 text-cyan-300" />
              Promo Mahasiswa
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Diskon 40% untuk Anak Kuliah</h2>
            <p className="mt-3 text-white/70">Bangun portofolio, capstone, atau startup kampus dengan kredit gratis hingga 3 bulan dan domain .edu khusus.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(217,70,239,0.35)]">
                Klaim Diskon <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90">
                Lihat Syarat
              </a>
            </div>
            <ul className="mt-4 text-sm text-white/70">
              <li>• Verifikasi email kampus</li>
              <li>• Berlaku untuk paket Compute & Edge</li>
              <li>• Bonus kredit tambahan untuk hackathon</li>
            </ul>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" aria-hidden />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-fuchsia-300" />
                <p className="font-medium">Kredit hingga Rp1.500.000</p>
              </div>
              <p className="mt-2 text-sm text-white/70">Cukup upload kartu mahasiswa atau email institusi untuk verifikasi.</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-semibold">40%</p>
                  <p className="text-white/60">Diskon</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-semibold">3 bln</p>
                  <p className="text-white/60">Kredit</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-semibold">.edu</p>
                  <p className="text-white/60">Domain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentPromo;
