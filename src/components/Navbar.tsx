import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/"
          className="text-lg sm:text-2xl font-serif font-bold tracking-tight text-slate-900 cursor-pointer"
        >
          CA. Shailendra Agarwal
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/consultation"
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-white z-[60] flex flex-col pt-32 px-10 md:hidden"
          >
            <button 
              className="absolute top-8 right-6 text-slate-900" 
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink 
                    to={link.href} 
                    className={({ isActive }) => 
                      `text-4xl font-serif font-medium ${isActive ? 'text-emerald-600' : 'text-slate-900'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                className="pt-8"
              >
                <Link 
                  to="/consultation"
                  className="bg-slate-900 text-white w-full py-5 rounded-3xl font-bold text-center inline-block text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Consultation
                </Link>
              </motion.div>
            </div>

            <div className="mt-auto pb-16">
              <p className="text-sm text-slate-400 font-medium mb-4 uppercase tracking-widest">Connect</p>
              <div className="flex space-x-6 text-slate-600">
                <a href="tel:+919314412945" className="font-bold">+91 9314412945</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
