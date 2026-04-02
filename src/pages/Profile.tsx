import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Building2, 
  Scale, 
  FileText, 
  Users, 
  Microscope,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  MapPin
} from 'lucide-react';

const ProfilePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 mb-6 font-bold text-emerald-600 text-xs uppercase tracking-widest">
                  <Award size={14} />
                  <span>Senior Chartered Accountant</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-slate-900 mb-6 leading-tight">
                  CA. Shailendra Agarwal <br />
                  <span className="text-slate-400 text-2xl md:text-3xl font-sans block mt-2">
                    B.Com., CCCA, CCMSME, FAFD, AI (ICAI)
                  </span>
                </h1>
                <p className="text-xl text-emerald-600 font-medium mb-8">
                  Founder - Director of RNGCA Business Consultation Pvt. Ltd.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "FCA", "Senior Chartered Accountant", "Direct Tax", 
                    "Real Estate & RERA Advisor", "Strategic Business & Regulatory Advisor",
                    "Speaker", "Mentor"
                  ].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative z-10 bg-slate-100">
                  <img 
                    src="/Shailendra.jpeg" 
                    alt="CA. Shailendra Agarwal" 
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-emerald-600/10 mix-blend-multiply" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full -z-10 blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <hr className="border-slate-100 mb-20" />

        {/* Narrative / About Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
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
          <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
            <p className="text-xl font-serif italic text-slate-800 leading-relaxed">
              "Widely known for his practical, no-nonsense advisory style, he brings clarity at the intersection of numbers, law, and business decisions. He is regarded as a promoter-side advisor who understands deal dynamics and focuses on solutions, not paperwork."
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <div className="h-px w-12 bg-emerald-500" />
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">Approach & Philosophy</span>
            </div>
          </div>
        </section>

        {/* Core Practice Areas */}
        <section className="mb-20">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-12 flex items-center space-x-3">
             <span className="h-px w-8 bg-emerald-200" />
             <span>Core Practice Areas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Real Estate Consultancy & RERA Advisory", icon: <Building2 className="text-emerald-600" /> },
              { title: "Regulatory Advisory for Promoters, Developers & Growth-Stage Businesses", icon: <Scale className="text-emerald-600" /> },
              { title: "Conceptualisation of Real Estate Projects", icon: <Microscope className="text-emerald-600" />, subtitle: "Based on market analytics and past-trend analysis" },
              { title: "Strategic Business Advisory", icon: <TrendingUp className="text-emerald-600" /> },
              { title: "Business Structuring & Transaction Advisory", icon: <FileText className="text-emerald-600" /> }
            ].map((area, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{area.title}</h3>
                {area.subtitle && <p className="text-xs text-slate-500 font-medium">{area.subtitle}</p>}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Real Estate Expertise */}
        <section className="mb-20 bg-slate-900 rounded-[56px] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-6">Expertise Focus</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
              Real Estate & RERA Expertise
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              CA. Shailendra Agarwal actively advises developers and landowners on project structuring, feasibility, RERA compliance, and risk mitigation, assisting in the conceptualisation of upcoming projects backed by historical market data and regulatory foresight.
            </p>
            <div className="flex items-center space-x-12">
               <div className="flex flex-col">
                 <span className="text-4xl font-serif text-white">18+</span>
                 <span className="text-xs text-emerald-400 uppercase tracking-widest font-bold">Years Experience</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-4xl font-serif text-white">RERA</span>
                 <span className="text-xs text-emerald-400 uppercase tracking-widest font-bold">Expert Advisor</span>
               </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section>
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
                <div key={idx} className="p-6 rounded-3xl border border-slate-100 flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.role}</h4>
                    <p className="text-sm text-slate-500 leading-snug mt-1">{item.org}</p>
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2 mt-8 p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100 italic text-slate-700">
                Through his leadership roles, mentorship, and professional conduct, he continues to shape the profession and guide students and future professionals with vision, discipline, and ethical strength.
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
