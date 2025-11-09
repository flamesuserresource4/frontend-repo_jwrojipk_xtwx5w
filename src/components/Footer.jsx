import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-12">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-white/60 sm:flex-row">
        <p>© {new Date().getFullYear()} NeonHost. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Docs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
