import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-slate-100/50' : 'bg-white/50 backdrop-blur-sm py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link 
          to="/"
          className="text-base sm:text-2xl font-serif font-bold tracking-tight text-slate-900 cursor-pointer shrink-0"
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

        {/* Mobile Header Actions */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link 
            to="/" 
            className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 border border-slate-200 px-4 py-1.5 rounded-full active:scale-95 transition-all hover:bg-slate-50"
          >
            Home
          </Link>
          <button className="text-slate-900 p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.6 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 mesh-bg backdrop-blur-3xl z-[60] flex flex-col pt-32 px-10 md:hidden"
          >
            <button 
              className="absolute top-8 right-6 p-2 bg-slate-50 border border-slate-100 shadow-sm rounded-full text-slate-900 active:scale-90 transition-transform" 
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                >
                  <NavLink 
                    to={link.href} 
                    className={({ isActive }) => 
                      `text-4xl sm:text-5xl font-serif font-medium block w-full outline-none focus-visible:outline-none transition-transform active:scale-95 origin-left ${isActive ? 'text-emerald-600' : 'text-slate-900'}`
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
    </motion.nav>
  );
};

export default Navbar;
