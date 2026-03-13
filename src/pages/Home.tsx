import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Briefcase,
  CheckCircle2,
  Users,
  Search,
  Zap,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <div className="inline-flex items-center space-x-3 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-100 mb-8 transform hover:scale-105 transition-transform duration-300">
              <img src="/logo.png" alt="CA Logo" className="w-16 h-auto object-contain" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest border-l border-emerald-200 pl-3">Chartered Accountant</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-[110px] font-serif font-medium leading-[0.9] text-slate-900 mb-10 tracking-tighter">
              Hi I'm <br />
              <span className="italic text-emerald-600">Shailendra</span> <br />
              Agarwal.
            </h1>
            
            <div className="flex items-center space-x-6 mb-12">
              <p className="text-xl text-slate-600 max-w-xs leading-relaxed">
                Strategic financial guardianship designed to fuel your professional and personal growth.
              </p>
              <div className="h-20 w-px bg-slate-200 hidden md:block" />
              <div className="hidden md:block">
                <Link to="/contact" className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                  <ArrowRight size={24} />
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img 
                      src={`https://picsum.photos/seed/person${i+10}/100/100`} 
                      alt="Client" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Trusted by over <span className="text-slate-900 font-bold">1200+ clients</span> <br />
                including entrepreneurs and leading enterprises.
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5"
          >
            {/* Main Portrait */}
            <div className="relative group">
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/Shailendra.jpeg" 
                  alt="Shailendra Agarwal" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-600/10 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
              </div>
              
              {/* Floating Status */}
              <div className="absolute top-8 -left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 z-20 flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Accepting New Consultations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Services Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-tight">
                Strategic Financial Guardianship for Your Growth.
              </h3>
            </div>
            <Link to="/services" className="text-sm font-bold text-slate-900 flex items-center space-x-2 group mb-2 border-b-2 border-slate-900 pb-1">
              <span>View All Services</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Taxation & Compliance",
                  desc: "Navigate the complexities of GST, Income Tax, and International Taxation with strategic planning designed to optimize your liabilities legally and efficiently.",
                  icon: <FileText className="w-6 h-6" />,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Audit & Assurance",
                  desc: "Beyond mere compliance—we provide a rigorous examination of your financial health, ensuring transparency and building stakeholder trust.",
                  icon: <ShieldCheck className="w-6 h-6" />,
                  color: "bg-emerald-50 text-emerald-600"
                },
                {
                  title: "Corporate Advisory",
                  desc: "Expert guidance for the modern enterprise: from company formation and ROC filings to complex financial restructuring and M&A support.",
                  icon: <Briefcase className="w-6 h-6" />,
                  color: "bg-purple-50 text-purple-600",
                  link: true
                },
                {
                  title: "Business Consulting",
                  desc: "Actionable insights for startups and established firms. We help you manage cash flows, project reports, and internal controls for sustainable scaling.",
                  icon: <Users className="w-6 h-6" />,
                  color: "bg-orange-50 text-orange-600",
                  link: true
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 rounded-[32px] border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                >
                  <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>
                  {service.link && (
                    <Link to="/services" className="text-sm font-bold text-emerald-600 flex items-center space-x-2 group mt-auto">
                      <span>Learn More</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-6">The Engagement Process</h2>
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium mb-10 leading-tight">
                A Disciplined Path to <span className="italic text-emerald-400">Financial Clarity.</span>
              </h3>
              <p className="text-slate-400 text-lg max-w-md mb-12">
                Partnering with CA. Shailendra Agarwal ensures a systematic approach where professional ethics meet modern efficiency.
              </p>
              <Link to="/consultation" className="inline-block bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
                Schedule a Professional Consultation
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Search className="w-6 h-6 text-emerald-400" />,
                  title: "Diagnostic Review",
                  desc: "We deep-dive into your existing financial records and compliance history to identify immediate risks and untapped opportunities."
                },
                {
                  icon: <Eye className="w-6 h-6 text-emerald-400" />,
                  title: "Bespoke Mapping",
                  desc: "Every client is unique. We craft a customized compliance and tax roadmap that aligns with your specific business or personal goals."
                },
                {
                  icon: <Zap className="w-6 h-6 text-emerald-400" />,
                  title: "Seamless Execution",
                  desc: "Our team handles the heavy lifting—from precise filings to representing you before authorities—ensuring zero-error execution."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
                  title: "Proactive Vigilance",
                  desc: "We don't just file and forget. We provide year-round monitoring and updates on changing regulations to keep you ahead of the curve."
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-colors"
                >
                  <div className="mb-4">{step.icon}</div>
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

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Client Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-slate-900">
              The Trust of Our Partners.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                quote: "CA. Shailendra has been instrumental in streamlining our GST transitions. His attention to detail and ability to simplify complex tax notices saved our firm significant time and capital.",
                author: "Rajesh Mehra",
                role: "Director at Heritage Exports",
                img: "https://picsum.photos/seed/rajesh/100/100"
              },
              {
                quote: "Professionalism at its best. Shailendra doesn't just provide audit reports; he provides business insights that have helped us tighten our internal controls as we scaled from a startup to a private limited company.",
                author: "Ananya Sharma",
                role: "Founder of Arka Tech",
                img: "https://picsum.photos/seed/ananya/100/100"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 md:p-14 rounded-[48px] shadow-sm border border-slate-100 relative group">
                <div className="absolute top-10 right-10 text-slate-100 group-hover:text-emerald-50 transition-colors">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017C11.4647 13 11.017 12.5523 11.017 12V9C11.017 7.34315 12.3601 6 14.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21H14.017ZM3.01693 21L3.01693 18C3.01693 16.8954 3.91236 16 5.01693 16H8.01693C8.56921 16 9.01693 15.5523 9.01693 15V9C9.01693 8.44772 8.56921 8 8.01693 8H5.01693C4.46465 8 4.01693 8.44772 4.01693 9V12C4.01693 12.5523 3.56921 13 3.01693 13H1.01693C0.46465 13 0.0169312 12.5523 0.0169312 12V9C0.0169312 7.34315 1.36008 6 3.01693 6H8.01693C9.67378 6 11.0169 7.34315 11.0169 9V15C11.0169 16.6569 9.67378 18 8.01693 18H5.01693C4.46465 18 4.01693 18.4477 4.01693 19V21H3.01693Z" /></svg>
                </div>
                <div className="text-emerald-500 mb-8 flex space-x-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-2xl text-slate-700 font-serif italic mb-10 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden shadow-inner">
                    <img 
                      src={t.img} 
                      alt={t.author} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">{t.author}</div>
                    <div className="text-sm text-slate-500 font-medium">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[56px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 -z-0" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-6">Final Call to Action</h2>
                <h3 className="text-2xl sm:text-4xl md:text-6xl font-serif font-medium text-white mb-8 leading-tight">
                  Secure Your Financial <br /> <span className="italic text-emerald-400">Integrity Today.</span>
                </h3>
                <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                  Don't wait for a notice to seek expert advice. Let's build a robust financial foundation for your business.
                </p>
                <Link to="/consultation" className="inline-flex items-center space-x-4 bg-white text-slate-900 px-10 py-5 rounded-full font-bold hover:bg-emerald-400 hover:text-slate-900 transition-all shadow-xl shadow-white/10">
                  <span>Get Started Now</span>
                  <ArrowRight size={20} />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-start space-x-6 p-6 rounded-3xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <FileText className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-xl font-medium text-white">office@cashailendra.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 rounded-3xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Users className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-1">Phone</div>
                    <div className="text-xl font-medium text-white">+91 9314412945</div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 p-6 rounded-3xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Eye className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-1">Office</div>
                    <div className="text-xl font-medium text-white leading-snug">8th Floor, Manglam Signature Tower,<br />DC 2, Tonk Road, Lalkothi,<br />Jaipur, Rajasthan 302015</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
