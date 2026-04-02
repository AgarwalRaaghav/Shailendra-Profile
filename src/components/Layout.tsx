import React from 'react';
import { Outlet } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';

const Layout = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden relative">
      <Preloader />

      
      {/* Global Cinematic Film Grain */}
      <div 
        className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
    </ReactLenis>
  );
};

export default Layout;
