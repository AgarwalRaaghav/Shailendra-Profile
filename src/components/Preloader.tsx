import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900 overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <img src="/logo.png" alt="Logo" className="w-24 h-auto brightness-0 invert opacity-80" />
            </motion.div>
            
            <div className="overflow-hidden flex space-x-2">
              {"Shailendra Agarwal".split(" ").map((word, wordIdx) => (
                <div key={wordIdx} className="flex">
                  {word.split("").map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5 + (wordIdx * 0.2) + (charIdx * 0.03),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="text-white text-2xl font-serif tracking-widest uppercase inline-block mx-[0.5px]"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIdx === 0 && <span className="w-4" />}
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              className="h-[1px] w-32 bg-emerald-500/50 mt-8 origin-center"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-white/40 text-[10px] uppercase tracking-[0.4em] mt-6 font-bold"
            >
              Establishing Excellence
            </motion.p>
          </div>

          {/* Background Ambient Glows */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
