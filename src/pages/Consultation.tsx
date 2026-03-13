import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const ConsultationPage = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Book a Session</h2>
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-slate-900 mb-6">
            Private <span className="italic text-emerald-600">Consultation</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Schedule a 30-minute strategic financial review. Select a time that works best for you to discuss your tax, audit, or advisory needs.
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div className="bg-slate-50 rounded-[48px] p-4 md:p-8 shadow-inner border border-slate-100 overflow-hidden min-h-[750px] relative">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/raaghav092/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Alternative Contact Info */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-emerald-600">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Direct Line</h4>
              <p className="text-slate-500 text-sm mt-1">+91 9314412945</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-emerald-600">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Office Email</h4>
              <p className="text-slate-500 text-sm mt-1">office@cashailendra.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-emerald-600">
              <MessageCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">WhatsApp</h4>
              <p className="text-slate-500 text-sm mt-1">Available for quick queries</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConsultationPage;
