import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket, ShieldCheck, Globe2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate mt-28 min-h-[75vh] overflow-hidden">
      {/* Spline scene as lightweight ambient animation */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/0UnIIJngGgvQNHiD/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-5%] h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_0%,rgba(10,11,16,0.6)_60%,rgba(10,11,16,0.9)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-fuchsia-300" />
          Next‑gen Cloud Hosting
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Lightning‑fast, cyberpunk‑styled infrastructure
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Deploy globally in seconds. Auto‑scale, secure by default, fully observable. Built for teams that ship at lightspeed.
        </p>

        {/* Primary CTA row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(217,70,239,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.99]">
            Mulai Sekarang
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 transition-colors hover:bg-white/10">
            Lihat Layanan
          </a>
        </div>

        {/* Mini highlights row */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 text-left text-sm text-white/75 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2">
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            Enterprise‑grade security
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2">
            <Globe2 className="h-4 w-4 text-cyan-300" />
            Global edge network
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2">
            <Rocket className="h-4 w-4 text-fuchsia-300" />
            60s deploys
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
