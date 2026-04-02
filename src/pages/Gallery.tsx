import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../components/AnimatedComponents';
import galleryImages from '../gallery-images.json';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<{ url: string }[]>([]);
  const [loading, setLoading] = useState(true);

  // PLACEHOLDER: Paste your Google Apps Script Web App URL here
  const GOOGLE_DRIVE_API_URL = 'https://script.google.com/macros/s/AKfycbwGa_uEeQoFqBTd-cBBIODy7aT79ItU3S797hsauMlqOQ1oC7_Cxn646HDOJFQPY_V53Q/exec'; 

  useEffect(() => {
    const fetchImages = async () => {
      if (!GOOGLE_DRIVE_API_URL) {
        setImages(galleryImages.filter(url => !url.toLowerCase().endsWith('.heic')).map(url => ({ url })));
        setLoading(false);
        return;
      }

      // 8 Second Timeout Fail-safe (Handle larger folders)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      try {
        const cacheBuster = `?t=${Date.now()}`;
        const response = await fetch(`${GOOGLE_DRIVE_API_URL}${cacheBuster}`, { signal: controller.signal });
        const data = await response.json();
        clearTimeout(timeoutId);

        if (Array.isArray(data)) {
          setImages(data.map(url => ({ url })));
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        console.warn('Dynamic fetch failed or timed out, falling back to static:', err);
        setImages(galleryImages
          .filter(url => !url.toLowerCase().endsWith('.heic'))
          .map(url => ({ url }))
        );
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

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



  return (
    <section className="pt-24 lg:pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Visual Journey" 
          title={<>Our <span className="italic">Gallery</span>.</>} 
          subtitle="A glimpse into our professional environment, client engagements, and the impact we create through financial excellence."
          centered={false}
        />

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full"
            />
            <p className="text-slate-400 font-medium animate-pulse">Synchronizing with Cloud...</p>
          </div>
        ) : (
          /* Pinterest-style Masonry Layout (Fixed for WebKit/iOS) */
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, delay: (idx % 8) * 0.1, ease: "easeOut" }}
                className="group cursor-pointer break-inside-avoid relative overflow-hidden rounded-[24px] shadow-sm hover:shadow-2xl transition-all duration-500 mb-4 md:mb-6 inline-block w-full"
                onClick={() => setSelectedImage(img.url)}
              >
                <div className="relative w-full overflow-hidden bg-slate-100">
                  <img 
                    src={img.url} 
                    alt={`Gallery ${idx + 1}`} 
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/30 transition-colors duration-500 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-emerald-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 shadow-xl"
                    >
                      <ExternalLink size={24} strokeWidth={2} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-all bg-black/40 hover:bg-black/60 p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} strokeWidth={2} />
              </button>
              
              <motion.img
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: -40 }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                src={selectedImage}
                alt="Selected Masterpiece"
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GalleryPage;
