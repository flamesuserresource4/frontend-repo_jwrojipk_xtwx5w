import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 right-[-10%] h-[60vh] w-[60vh] rounded-full bg-fuchsia-600/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-cyan-500/20 blur-[110px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
