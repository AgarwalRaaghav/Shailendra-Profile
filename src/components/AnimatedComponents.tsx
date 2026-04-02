import React from 'react';
import { motion } from 'motion/react';

export const DrawIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative flex items-center justify-center w-full h-full"
    >
      <motion.div
        variants={{
          hidden: { pathLength: 0, opacity: 0, scale: 0.8 },
          visible: { 
            pathLength: 1, 
            opacity: 1,
            scale: 1,
            transition: { 
              pathLength: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5, ease: "easeOut" }
            }
          }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const SectionHeader = ({ badge, title, subtitle, centered = true }: { badge: string, title: string, subtitle?: string, centered?: boolean }) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} mb-12 sm:mb-16`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4"
      >
        {badge}
      </motion.h2>
      <motion.h3 
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-tight"
      >
        {title}
      </motion.h3>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`text-slate-500 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} leading-relaxed`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
