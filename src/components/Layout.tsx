import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
