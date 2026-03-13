import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xojkwwoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormState({
          name: '',
          organization: '',
          email: '',
          phone: '',
          category: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Contact Us</h2>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-medium text-slate-900 mb-6">
            Let’s Strategize Your <span className="italic">Financial</span> Growth.
          </h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Whether you have a tax query or need a comprehensive audit, we are here to provide expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 p-12 rounded-[48px] border border-emerald-100 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-serif font-medium text-slate-900">Message Received</h3>
                    <p className="text-slate-500 text-lg max-w-md mx-auto">
                      Thank you for reaching out. We have received your inquiry and will get back to you within 24–48 hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-emerald-600 font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send Another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-widest text-emerald-600">Full Name *</label>
                      <input 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        type="text" 
                        required 
                        className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 outline-none transition-colors" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-widest text-emerald-600">Organization / Company Name *</label>
                      <input 
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        type="text" 
                        required 
                        className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 outline-none transition-colors" 
                        placeholder="ABC Corp Pvt Ltd" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-widest text-emerald-600">Email Address *</label>
                      <input 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        type="email" 
                        required 
                        className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 outline-none transition-colors" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-bold uppercase tracking-widest text-emerald-600">Phone Number *</label>
                      <input 
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        type="tel" 
                        required 
                        className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 outline-none transition-colors" 
                        placeholder="+91 9314412945" 
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-emerald-600">Service Category *</label>
                    <select 
                      name="category"
                      value={formState.category}
                      onChange={handleChange}
                      required 
                      className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-slate-900 focus:border-emerald-500 outline-none transition-colors cursor-pointer appearance-none"
                    >
                      <option value="" disabled>Select a category...</option>
                      <option value="Income Tax / ITR">Income Tax / ITR</option>
                      <option value="GST & Indirect Tax">GST & Indirect Tax</option>
                      <option value="Statutory / Internal Audit">Statutory / Internal Audit</option>
                      <option value="Company Incorporation / ROC">Company Incorporation / ROC</option>
                      <option value="Other Advisory">Other Advisory</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-emerald-600">Message *</label>
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4} 
                      required 
                      className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 outline-none transition-colors resize-none" 
                      placeholder="Brief description of the requirement..." 
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again or call us directly.</p>
                  )}

                  <div className="pt-4">
                    <button 
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-12 bg-slate-900 text-white py-4 rounded-full font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {status === 'submitting' && <Loader2 className="animate-spin" size={20} />}
                      <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    </button>
                    <p className="text-xs text-slate-500 mt-6 leading-relaxed max-w-lg">
                      <span className="font-bold text-slate-900 italic underline decoration-emerald-500/30">Quick Note:</span> We aim to respond to all inquiries within 24–48 business hours. For urgent statutory deadlines or notices, please call us directly.
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h4 className="text-2xl font-serif font-medium mb-4 text-slate-900">Reach Out to the Firm</h4>
              <p className="text-slate-500 text-base leading-relaxed">
                Professional integrity and client confidentiality are the cornerstones of our practice. Whether you are looking for tax optimization for your business or need assistance with complex compliance matters, CA. Shailendra Agarwal and his team are ready to assist.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Office Address</div>
                  <div className="text-slate-500 text-sm">8th Floor, Manglam Signature Tower,<br/>DC 2, Tonk Road, Lalkothi, Jaipur, Rajasthan 302015</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Phone</div>
                  <div className="text-slate-500 text-sm">+91 9314412945</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Email</div>
                  <div className="text-slate-500 text-sm">office@cashailendra.com</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-medium mb-4 text-slate-900">Office Hours</h4>
              <div className="space-y-3 text-sm text-slate-500">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Monday – Friday</span>
                  <span className="font-medium text-slate-900">10:00 AM – 6:30 PM</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Saturday <span className="text-xs text-emerald-600 ml-1">(Appt Only)</span></span>
                  <span className="font-medium text-slate-900">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-slate-400">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-serif font-medium mb-4 text-slate-900">Visit Our Office</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Our doors are always open for a cup of tea and a discussion about your financial future. Please book an appointment in advance to ensure we can dedicate the necessary time to your consultation.
              </p>
              
              {/* Google Maps Embed */}
              <div className="w-full h-48 rounded-[24px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-slate-100 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.33230872688!2d75.723762!3d26.8851417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1709214343132!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919314412945" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          Chat with us on WhatsApp
          <span className="absolute top-1/2 -right-1 w-2 h-2 bg-slate-900 transform -translate-y-1/2 rotate-45" />
        </span>
      </a>
    </motion.div>
  );
};

export default ContactPage;
