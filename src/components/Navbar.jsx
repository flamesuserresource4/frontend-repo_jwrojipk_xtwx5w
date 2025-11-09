import React from 'react';
import { Rocket, Shield, User, Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 shadow-[0_0_24px_rgba(217,70,239,0.35)]">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-wide">NeonHost</span>
            </a>

            <nav className="hidden gap-8 md:flex">
              <a href="#features" className="text-sm text-white/80 transition hover:text-white">Features</a>
              <a href="#pricing" className="text-sm text-white/80 transition hover:text-white">Pricing</a>
              <a href="#" className="text-sm text-white/80 transition hover:text-white flex items-center gap-1"><Globe className="h-4 w-4"/>Status</a>
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
                <User className="h-4 w-4" />
                Sign in
              </button>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_rgba(34,211,238,0.35)]">
                Launch
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
