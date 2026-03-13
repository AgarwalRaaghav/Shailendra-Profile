import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import galleryImages from '../gallery-images.json';

const GalleryPage = () => {
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

  const images = galleryImages.map((url) => ({
    url
  }));

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Visual Journey</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 mb-6">
            Our <span className="italic">Gallery</span>.
          </h1>
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
              transition={{ delay: (idx % 10) * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(img.url)}
            >
              <div className="aspect-square rounded-[32px] overflow-hidden relative">
                <img 
                  src={img.url} 
                  alt={`Gallery Image ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
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
                alt="Selected Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
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
