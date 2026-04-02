import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white pt-24 pb-8 overflow-hidden rounded-t-[40px] md:rounded-t-[80px] mt-24 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)]">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 animate-blob mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] -z-10 animate-blob mix-blend-screen" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Main Call to Action */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-8">
              Let's build <span className="italic text-emerald-400">certainty</span> in <br className="hidden md:block" /> a complex world.
            </h2>
            <Link 
              to="/consultation" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-slate-900 rounded-full font-bold hover:bg-emerald-400 transition-all duration-300 active:scale-95 text-lg"
            >
              Start the Conversation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:justify-items-end uppercase tracking-widest text-sm font-bold">
            <div className="flex flex-col space-y-4">
              <span className="text-slate-500 mb-4">Explore</span>
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <Link to="/services" className="hover:text-emerald-400 transition-colors">Services</Link>
              <Link to="/gallery" className="hover:text-emerald-400 transition-colors">Gallery</Link>
              <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-slate-500 mb-4">Connect</span>
              <a href="mailto:shailendra@rngca.com" className="hover:text-emerald-400 transition-colors">Email</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
              <a href="tel:+919314412945" className="hover:text-emerald-400 transition-colors">+91 9314412945</a>
            </div>
          </div>
        </div>

        {/* Massive Footer Text */}
        <div className="w-full border-t border-slate-800 pt-16 flex flex-col items-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full text-center overflow-hidden"
          >
            <h1 className="text-[9.5vw] sm:text-[8.5vw] font-serif font-bold text-slate-800 tracking-tighter leading-none select-none max-w-full truncate">
              SHAILENDRA
            </h1>
          </motion.div>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 text-slate-500 text-sm">
            <p>© 2026 CA. Shailendra Agarwal. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed & Built for Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
