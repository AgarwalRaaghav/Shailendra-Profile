import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Briefcase,
  CheckCircle2,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: "Taxation & Strategic Optimization",
      hook: "Minimize liabilities. Maximize compliance.",
      desc: "In an ever-shifting regulatory environment, we ensure your tax strategy is both robust and efficient. We move beyond basic filing to proactive fiscal planning.",
      features: [
        "Income Tax Planning: Custom strategies for individuals, firms, and corporates.",
        "GST Advisory & Compliance: End-to-end management from registration to annual reconciliations.",
        "Tax Audit Representation: Expert guidance and representation before tax authorities.",
        "International Taxation: Navigating cross-border tax complexities and DTAA."
      ],
      icon: <FileText className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Audit & Assurance",
      hook: "Building trust through financial transparency.",
      desc: "Our audit process is more than a compliance check—it’s a health check for your business. We provide the integrity and clarity that stakeholders and financial institutions demand.",
      features: [
        "Statutory Audits: Rigorous examinations under the Companies Act.",
        "Internal & Operational Audits: Identifying leakages and improving internal controls.",
        "Tax Audits: Ensuring full adherence to Section 44AB of the Income Tax Act.",
        "Financial Due Diligence: Critical analysis for investments and partnerships."
      ],
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Corporate & Business Advisory",
      hook: "Strategic guidance from inception to exit.",
      desc: "Whether you are launching a startup in Jaipur or scaling an established enterprise, we provide the structural and financial foundation required for sustainable growth.",
      features: [
        "Entity Formation: Seamless registration for Private Limited, LLP, and OPCs.",
        "Business Restructuring: Optimizing corporate structures for better operational flow.",
        "M&A Support: Comprehensive financial assistance during mergers and acquisitions.",
        "Project Financing & CMA: Preparing detailed project reports for bank funding and VC pitches."
      ],
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Wealth Management & Family Office",
      hook: "Bespoke planning for multi-generational growth.",
      desc: "We look beyond the balance sheet to secure your personal legacy. Our advisory ensures that your hard-earned wealth is protected, grown, and seamlessly transitioned.",
      features: [
        "Portfolio Management Advisory: Aligning investments with your risk profile.",
        "Estate & Succession Planning: Ensuring a smooth transfer of assets to the next generation.",
        "Retirement & Pension Solutions: Structured planning for long-term financial independence.",
        "Comprehensive Risk Assessment: Protecting your assets against unforeseen contingencies."
      ],
      icon: <Users className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Our Services</h2>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-medium text-slate-900 mb-8 leading-tight">
            Expertise that scales with <span className="italic text-emerald-600">your ambitions.</span>
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed">
            We provide a comprehensive suite of financial and advisory services designed to navigate the complexities of modern business. Our approach combines traditional integrity with modern strategic insights.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 md:p-12 rounded-[48px] border border-slate-100 bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-1">
                   <div className={`w-20 h-20 ${service.color} rounded-[24px] flex items-center justify-center shrink-0`}>
                    {service.icon}
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex flex-col mb-6">
                    <h3 className="text-2xl sm:text-3xl font-serif font-medium text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-emerald-600 font-bold uppercase tracking-widest text-[10px] sm:text-xs italic">{service.hook}</p>
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start space-x-3 text-slate-700 font-medium">
                        <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 flex justify-end lg:justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-colors group"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
