import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="text-xl font-serif font-bold text-slate-900">
            CA. Shailendra Agarwal
          </Link>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1">Chartered Accountant</span>
        </div>

        <div className="text-center max-w-xs">
          <p className="text-sm italic text-slate-500 leading-relaxed">
            "Trust is earned in drops and lost in buckets — we protect yours, always."
          </p>
        </div>

        <div className="text-sm text-slate-400">
          © 2026 CA. Shailendra Agarwal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
