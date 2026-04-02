import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useMotionTemplate, animate } from 'motion/react';
import { 
  ArrowRight, 
  Award,
  Building2,
  Scale,
  FileText,
  Users,
  Microscope,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Search,
  Zap,
  Eye,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { DrawIcon, SectionHeader } from '../components/AnimatedComponents';

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const TiltPortrait = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(250);

  const rotateX = useTransform(y, [0, 500], [8, -8]);
  const rotateY = useTransform(x, [0, 400], [-8, 8]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(200);
    y.set(250);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative group mb-10 w-full max-w-sm mx-auto hidden lg:block transform-gpu"
    >
      <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative z-10 bg-slate-100">
        <motion.img 
          animate={{ y: [0, -15, 0] }}
          transition={{ 
            scale: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }
          }}
          src="/Shailendra.jpeg" 
          alt="Shailendra Agarwal" 
          className="w-full h-full object-cover transition-all duration-700 hover:scale-105 pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-emerald-600/10 mix-blend-multiply group-hover:opacity-0 transition-opacity pointer-events-none z-20" />
      </div>
      
      {/* Floating Status */}
      <motion.div 
        style={{ translateZ: 50 }} 
        className="absolute top-8 -left-8 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-white/20 z-20 flex items-center space-x-3 pointer-events-none"
      >
        <span className="text-xs lg:text-sm font-bold text-slate-900 uppercase tracking-wider">Founder-Director RNGCA</span>
      </motion.div>
    </motion.div>
  );
};

const KineticCounter = ({ from = 0, to, duration = 2.5 }: { from?: number, to: number, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    if (node) {
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return (
    <motion.span 
      ref={nodeRef} 
      whileInView={() => { setInView(true); return {}; }} 
      viewport={{ once: true, margin: "0px" }}
    >
      {from}
    </motion.span>
  );
};

const PracticeCard = ({ area }: { area: any, key?: React.Key }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      className="group min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center shrink-0 p-8 rounded-[32px] bg-gradient-to-b from-white to-slate-50/50 border border-slate-100/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200/60 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col"
    >
      {/* Cursor Tracking Glow Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-multiply"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-shadow duration-500 border border-slate-50 shrink-0 z-10">
        <DrawIcon>{area.icon}</DrawIcon>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2 whitespace-normal break-words z-10">{area.title}</h3>
      {area.subtitle && <p className="text-xs text-slate-500 font-medium whitespace-normal break-words z-10">{area.subtitle}</p>}
    </motion.div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
  const yText = useTransform(scrollY, [0, 800], [0, 100]);
  const yImage = useTransform(scrollY, [0, 800], [0, -50]);

  return (
    <section className="relative pt-28 pb-16 lg:pt-42 lg:pb-36 overflow-hidden">
      {/* Background Accents (Desktop) */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] -z-20 opacity-70 hidden md:block" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/30 -z-10 rounded-l-[100px] hidden md:block" />
      <div className="absolute top-0 -left-32 w-[500px] h-[500px] bg-emerald-300/30 rounded-full blur-[100px] -z-10 animate-blob mix-blend-multiply hidden lg:block" />
      <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-teal-200/30 rounded-full blur-[100px] -z-10 animate-blob mix-blend-multiply hidden lg:block" style={{ animationDelay: '2s' }} />

      {/* Intensive Background Accents (Mobile) */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] -z-20 opacity-40 md:hidden" />
      <div className="absolute top-10 -left-10 w-[250px] h-[250px] bg-emerald-400/50 rounded-full blur-[60px] -z-10 animate-blob mix-blend-multiply lg:hidden" />
      <div className="absolute top-60 -right-10 w-[200px] h-[200px] bg-teal-400/40 rounded-full blur-[50px] -z-10 animate-blob mix-blend-multiply lg:hidden" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            style={{ y: yText }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 pt-8 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/60 mb-8 shadow-sm group cursor-default">
              <img src="/logo.png" alt="CA Logo" className="w-14 h-auto object-contain pl-1" />
              <span className="text-[10px] sm:text-xs font-bold text-slate-800 uppercase tracking-widest border-l border-slate-300 pl-3">Chartered Accountant</span>
            </div>
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="text-5xl sm:text-6xl md:text-[110px] font-serif font-medium leading-[1.1] sm:leading-[0.9] text-slate-900 mb-8 sm:mb-10 tracking-tighter"
            >
              <span className="inline-block overflow-hidden pb-2"><motion.span variants={textRevealVariants} className="inline-block">Hi I'm</motion.span></span> <br className="hidden sm:block" />
              <span className="inline-block overflow-hidden pb-4"><motion.span variants={textRevealVariants} className="italic bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-400 drop-shadow-sm inline-block">Shailendra</motion.span></span> <br className="hidden sm:block" />
              <span className="inline-block overflow-hidden pb-2"><motion.span variants={textRevealVariants} className="inline-block">Agarwal.</motion.span></span>
            </motion.h1>
            
            <div className="flex items-center space-x-6 mb-12">
              <p className="text-xl text-slate-600 max-w-xs leading-relaxed font-medium">
                B.Com., CCCA, CCMSME, FAFD, AI (ICAI)
              </p>
              <div className="h-20 w-px bg-slate-200 hidden md:block" />
              <div className="hidden md:block">
                <Link to="/contact" className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                  <ArrowRight size={24} />
                </Link>
              </div>
            </div>

            {/* Mobile Portrait (Shown before clients) */}
            <div className="relative group mb-8 w-[80%] max-w-sm mx-auto lg:hidden">
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative z-10 bg-slate-100">
                <motion.img 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ 
                    scale: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
                    y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }
                  }}
                  src="/Shailendra.jpeg" 
                  alt="Shailendra Agarwal" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-600/10 mix-blend-multiply group-hover:opacity-0 transition-opacity pointer-events-none z-20" />
              </div>
              
              <div className="absolute top-8 -left-4 sm:-left-8 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-white/20 z-20 flex items-center space-x-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Founder-Director RNGCA</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center lg:justify-start">
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
            style={{ y: yImage }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center pt-10 lg:pt-0"
          >
            {/* Main Portrait Desktop (3D Tilt Effect) */}
            <TiltPortrait />

            {/* CTA Button */}
            <MagneticButton className="w-full max-w-sm mx-auto z-30">
              <Link 
                to="/consultation" 
                className="group relative flex items-center justify-center px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-full font-medium shadow-2xl hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] active:scale-95 transition-all duration-300 text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 tracking-wide flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
            </MagneticButton>

            {/* Mobile Scroll Indicator */}
            <motion.div 
              animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mt-16 flex flex-col items-center justify-center text-slate-400 lg:hidden"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold mb-3">Scroll to explore</span>
              <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-5 sm:py-6 bg-emerald-600 text-white overflow-hidden flex whitespace-nowrap shadow-lg select-none relative z-20">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-emerald-600 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-emerald-600 to-transparent z-10" />
      
      <div className="flex animate-marquee hover:[animation-play-state:paused] cursor-default">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-6 sm:space-x-12 px-3 sm:px-6 text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.25em] opacity-95">
            <span>Corporate Advisory</span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-200 rounded-full" />
            <span>Taxation Strategies</span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-200 rounded-full" />
            <span>Audit & Assurance</span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-200 rounded-full" />
            <span>Wealth Management</span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-200 rounded-full" />
            <span>Real Estate RERA</span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

const NewspaperCuttings = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const cuttings = [
    "/gallery/IMG_1594.JPG",
    "/gallery/IMG_0913.JPG",
    "/gallery/f8176784-b0d6-4a9c-81e0-3251a914e145.JPG",
    "/gallery/7a434fd9-0218-45a4-a6bc-866010038701.JPG",
    "/gallery/IMG_6353.JPG",
    "/gallery/IMG_2180.JPG"
  ];

  // Jagged edge clip-paths for authentic "torn paper" look
  const jaggedPaths = [
    "polygon(0% 2%, 5% 0%, 10% 3%, 15% 1%, 20% 4%, 25% 1%, 30% 5%, 35% 2%, 40% 6%, 45% 2%, 50% 5%, 55% 1%, 60% 4%, 65% 1%, 70% 3%, 75% 0%, 80% 4%, 85% 1%, 90% 5%, 95% 2%, 100% 4%, 98% 35%, 100% 70%, 97% 100%, 70% 98%, 35% 100%, 0% 97%, 2% 70%, 0% 35%)",
    "polygon(2% 0%, 35% 2%, 70% 0%, 100% 3%, 98% 35%, 100% 70%, 97% 98%, 70% 100%, 35% 97%, 0% 100%, 3% 70%, 0% 35%, 3% 0%)",
    "polygon(0% 0%, 25% 3%, 50% 1%, 75% 4%, 100% 2%, 97% 25%, 100% 50%, 98% 75%, 100% 100%, 75% 97%, 50% 100%, 25% 98%, 0% 100%, 2% 75%, 0% 50%, 3% 25%)"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="In the News" 
          title="Featured Media & Publications" 
        />
        
        {/* YouTube Video Embed */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 group">
            <iframe
              src="https://www.youtube.com/embed/3XBPwrT_Vng?start=43"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {cuttings.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative cursor-pointer hover:-translate-y-3 hover:rotate-1 hover:z-10 transition-all duration-500 will-change-transform"
              onClick={() => setSelectedImage(src)}
            >
              {/* Paper Shadow Effect */}
              <div 
                className="absolute inset-2 bg-black/10 blur-md -z-10 transition-transform group-hover:scale-105"
                style={{ clipPath: jaggedPaths[idx % jaggedPaths.length] }}
              />
              
              <div 
                className="bg-white p-2 shadow-sm transition-all duration-500 overflow-hidden"
                style={{ clipPath: jaggedPaths[idx % jaggedPaths.length] }}
              >
                <div className="w-full h-40 sm:h-64 md:h-[40vh] max-h-[350px] transition-all duration-700 group-hover:scale-105 bg-white flex items-center justify-center">
                  <img src={src} alt={`Newspaper Cutting ${idx + 1}`} className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Torn Edge Border Accent */}
              <div 
                className="absolute inset-0 border-[1px] border-slate-200/50 pointer-events-none"
                style={{ clipPath: jaggedPaths[idx % jaggedPaths.length] }}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/gallery" className="inline-flex items-center space-x-3 px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-full hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all shadow-sm font-medium text-lg">
            <Eye size={20} className="text-emerald-600" />
            <span>View more photos</span>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1.5} />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage}
              alt="Selected Newspaper Cutting"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
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
      <Marquee />
      <NewspaperCuttings />
      
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-slate-100 mb-20" />

        {/* Narrative / About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24"
        >
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              CA. Shailendra Agarwal is a senior Chartered Accountant with over <span className="text-slate-900 font-bold">18 years of hands-on professional experience</span> in structuring tax-efficient business models, handling high-stakes assessments, and resolving complex tax and regulatory disputes.
            </p>
            <p>
              He works closely with promoters, corporates, banks, MSMEs, and business families, advising them on capital protection, cash-flow optimization, and regulatory risk management.
            </p>
            <p>
              This foundation has naturally evolved into a focused practice in <span className="text-emerald-600 font-semibold">Real Estate Advisory and RERA-related services</span>, where regulatory foresight and structuring precision are critical.
            </p>
          </div>
          <div className="relative bg-gradient-to-br from-slate-50 to-white p-10 md:p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/20 overflow-hidden">
            <motion.div 
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute -top-4 left-6 text-[140px] text-emerald-500 font-serif leading-none select-none pointer-events-none"
            >
              "
            </motion.div>
            <p className="relative z-10 text-xl md:text-2xl font-serif italic text-slate-800 leading-relaxed pt-6 flex flex-wrap gap-x-2 gap-y-1">
              {"Widely known for his practical, no-nonsense advisory style, he brings clarity at the intersection of numbers, law, and business decisions. He is regarded as a promoter-side advisor who understands deal dynamics and focuses on solutions, not paperwork.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.2 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </p>
            <div className="relative z-10 mt-10 flex items-center space-x-4">
              <div className="h-px w-12 bg-emerald-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">Approach & Philosophy</span>
            </div>
          </div>
        </motion.section>

        {/* Core Practice Areas */}
        <section className="mb-24">
          <SectionHeader 
            badge="Core Practice Areas" 
            title="Surgical Precision in Professional Services" 
          />
          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            {[
              { title: "Real Estate Consultancy & RERA Advisory", icon: <Building2 className="text-emerald-600" /> },
              { title: "Regulatory Advisory for Promoters, Developers & Growth-Stage Businesses", icon: <Scale className="text-emerald-600" /> },
              { title: "Conceptualisation of Real Estate Projects", icon: <Microscope className="text-emerald-600" />, subtitle: "Based on market analytics and past-trend analysis" },
              { title: "Strategic Business Advisory", icon: <TrendingUp className="text-emerald-600" /> },
              { title: "Business Structuring & Transaction Advisory", icon: <FileText className="text-emerald-600" /> }
            ].map((area, idx) => (
              <PracticeCard key={idx} area={area} />
            ))}
          </div>
        </section>

        {/* Real Estate Expertise */}
        <section className="mb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[40px] md:rounded-[56px] p-8 md:p-20 text-white relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-700/50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '3s' }} />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-6">Expertise Focus</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
              Chartered Accountancy
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              CA. Shailendra Agarwal actively advises developers and landowners on project structuring, feasibility, RERA compliance, and risk mitigation, assisting in the conceptualisation of upcoming projects backed by historical market data and regulatory foresight.
            </p>
            <div className="flex items-center space-x-12">
               <div className="flex flex-col">
                 <span className="text-4xl font-serif text-white"><KineticCounter to={18} />+</span>
                 <span className="text-xs text-emerald-400 uppercase tracking-widest font-bold">Years Experience</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-4xl font-serif text-white"><KineticCounter to={1200} />+</span>
                 <span className="text-xs text-emerald-400 uppercase tracking-widest font-bold">Clients Served</span>
               </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Leadership</h2>
              <h3 className="text-3xl font-serif text-slate-900 leading-tight">
                Professional Leadership & Contribution
              </h3>
              <p className="mt-6 text-slate-600 leading-relaxed">
                He has served the profession across multiple platforms within the financial and professional ecosystem, shaping the future of finance in India.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { org: "Tax Consultants Association, Jaipur", role: "President" },
                { org: "Institute of Chartered Accountants of India – Jaipur Branch", role: "Secretary" },
                { org: "Federation of Rajasthan Trade & Industry (Forti Youth Wing)", role: "Vice-President" },
                { org: "AIFTP (Central Zone)", role: "Additional Joint Secretary" }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-[28px] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 flex items-start space-x-4 transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 bg-emerald-50/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-100/50 transition-colors">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.role}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">{item.org}</p>
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2 mt-4 p-8 bg-gradient-to-r from-emerald-50 to-teal-50/50 rounded-[32px] border border-emerald-100/60 italic text-slate-700 shadow-inner relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-200/40 rounded-full blur-[40px]" />
                <p className="relative z-10 leading-relaxed text-lg">
                  Through his leadership roles, mentorship, and professional conduct, he continues to shape the profession and guide students and future professionals with vision, discipline, and ethical strength.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
