import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate mt-28 min-h-[80vh]">
      {/* Interactive 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (don't block interaction) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute left-8 bottom-16 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">Next‑gen Cloud Hosting</span>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Lightning‑fast, cyberpunk‑styled infrastructure
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Deploy globally in seconds. Auto‑scale, secure by default, fully observable. Built for teams that ship at lightspeed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(217,70,239,0.35)]">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 hover:bg-white/10">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
