/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Users, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Navbar = ({ setView, currentView }: { setView: (v: 'home' | 'gallery') => void, currentView: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', action: () => setView('home'), type: 'view', id: 'home' },
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'Gallery', action: () => setView('gallery'), type: 'view', id: 'gallery' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || currentView === 'gallery' ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setView('home')}
          className="text-2xl font-serif font-bold tracking-tight text-slate-900 cursor-pointer"
        >
          Shailendra Agarwal<span className="text-emerald-600">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.type === 'view' ? (
              <button 
                key={link.name} 
                onClick={link.action}
                className={`text-sm font-medium transition-colors ${currentView === link.id ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
              >
                {link.name}
              </button>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            Consultation
          </button>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-slate-900 text-white w-full py-4 rounded-xl font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 -z-10 rounded-l-[100px]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 pt-8"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              <ShieldCheck size={14} />
              <span>Trusted Financial Advisor</span>
            </div>
            <h1 className="text-6xl md:text-[110px] font-serif font-medium leading-[0.85] text-slate-900 mb-10 tracking-tighter">
              Hi I'm <br />
              <span className="italic text-emerald-600">Shailendra</span> <br />
              Agarwal.
            </h1>
            
            <div className="flex items-center space-x-6 mb-12">
              <p className="text-xl text-slate-600 max-w-xs leading-relaxed">
                Passionate about creating intuitive financial strategies that connect users with value.
              </p>
              <div className="h-20 w-px bg-slate-200 hidden md:block" />
              <div className="hidden md:block">
                <button className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img 
                      src={`https://picsum.photos/seed/person${i}/100/100`} 
                      alt="Client" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Trusted by over <span className="text-slate-900 font-bold">1200+ happy clients</span> <br />
                across residential and commercial projects.
              </p>
            </div>
          </motion.div>

          {/* Right Content - The "Empty Space" now filled */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 space-y-12"
          >
            {/* Main Portrait */}
            <div className="relative group">
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Shailendra Agarwal" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-600/10 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
              </div>
              
              {/* Floating Status */}
              <div className="absolute top-8 -left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 z-20 flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Available for new opportunities</span>
              </div>
            </div>

            {/* Seen Recent Works - Shifted from below to here */}
            <div className="bg-emerald-50/50 p-8 rounded-[40px] border border-emerald-100/50">
              <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-6">Seen Recent Works</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400"
                ].map((url, i) => (
                  <div key={i} className="aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img src={url} alt="Work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 text-sm font-bold text-emerald-700 flex items-center justify-center space-x-2 group">
                <span>View All Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800", title: "Corporate Strategy", category: "Consulting" },
    { url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800", title: "Tax Audit Session", category: "Audit" },
    { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800", title: "Executive Meeting", category: "Leadership" },
    { url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800", title: "Financial Workshop", category: "Education" },
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", title: "Data Analysis", category: "Analytics" },
    { url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800", title: "Team Collaboration", category: "Culture" },
  ];

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Visual Journey</h2>
          <h3 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 mb-6">
            Our <span className="italic">Gallery</span>.
          </h3>
          <p className="text-slate-500 text-lg max-w-xl">
            A glimpse into our professional environment, client engagements, and the impact we create through financial excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-[32px] overflow-hidden mb-4 relative">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              <div className="px-2">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{img.category}</span>
                <h4 className="text-lg font-bold text-slate-900">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Tax Planning",
      desc: "Strategic optimization of tax liabilities for individuals and corporations.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Audit & Assurance",
      desc: "Rigorous financial examination ensuring compliance and transparency.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Corporate Consulting",
      desc: "Expert guidance on mergers, acquisitions, and financial restructuring.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Wealth Management",
      desc: "Comprehensive investment and estate planning for long-term growth.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-slate-900">
            Comprehensive Financial <br /> Solutions for Every Need.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className="text-sm font-bold text-slate-900 flex items-center space-x-2 group">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We begin by understanding your unique financial landscape and goals through deep analysis."
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Our team crafts a bespoke roadmap designed to optimize your assets and minimize risks."
    },
    {
      num: "03",
      title: "Execution",
      desc: "We implement the strategy with precision, handling all compliance and filings seamlessly."
    },
    {
      num: "04",
      title: "Monitoring",
      desc: "Continuous review and adjustment to ensure your financial health stays on the right track."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-6">How we work</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-medium mb-10 leading-tight">
              A systematic <br /> approach to <br /> <span className="italic text-emerald-400">financial success.</span>
            </h3>
            <p className="text-slate-400 text-lg max-w-md mb-12">
              Working with Shailendra Agarwal is seamless from start to finish. 
              We prioritize clarity, empathy, and results in every engagement.
            </p>
            <button className="bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-all">
              Book a Consultation
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-4xl font-serif font-bold text-emerald-400/30 mb-4">{step.num}</div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Client Stories</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-slate-900">
              Trusted by industry leaders and growing enterprises.
            </h3>
          </div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: "Shailendra brought our financial vision to life with incredible attention to detail. His ability to balance business needs with empathy made our platform not just beautiful—but genuinely useful.",
              author: "Sarah Nguyen",
              role: "Product Manager at FlowSync"
            },
            {
              quote: "Working with the team was seamless from start to finish. They understood our goals quickly, asked the right questions, and delivered a financial strategy that scaled perfectly with our growth.",
              author: "Daniel Reed",
              role: "Founder of NovaLabs"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <div className="text-emerald-500 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-xl text-slate-700 font-serif italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt={t.author} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-emerald-600 rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight">
                Ready to secure your <br /> <span className="italic text-emerald-200">financial future?</span>
              </h2>
              <p className="text-emerald-100 text-lg mb-12 max-w-md">
                Schedule a confidential consultation today and discover how we can help you achieve your financial goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">contact@shailendra.ca</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg">Financial District, Mumbai, India</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 md:p-12 text-slate-900 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <input type="text" className="w-full px-0 py-3 border-b border-slate-200 focus:border-emerald-500 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <input type="email" className="w-full px-0 py-3 border-b border-slate-200 focus:border-emerald-500 outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Service Needed</label>
                  <select className="w-full px-0 py-3 border-b border-slate-200 focus:border-emerald-500 outline-none transition-colors bg-transparent">
                    <option>Tax Planning</option>
                    <option>Audit & Assurance</option>
                    <option>Corporate Consulting</option>
                    <option>Wealth Management</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message</label>
                  <textarea rows={4} className="w-full px-0 py-3 border-b border-slate-200 focus:border-emerald-500 outline-none transition-colors resize-none" placeholder="Tell us about your requirements..." />
                </div>
                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-serif font-bold text-slate-900">
          Shailendra Agarwal<span className="text-emerald-600">.</span>
        </div>
        
        <div className="flex space-x-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Cookie Policy</a>
        </div>

        <div className="text-sm text-slate-400">
          © 2026 Shailendra Agarwal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'home' | 'gallery'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar setView={setView} currentView={view} />
      <main>
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Services />
              <Process />
              <Testimonials />
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Gallery />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
