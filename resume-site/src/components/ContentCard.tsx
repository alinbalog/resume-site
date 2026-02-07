"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ContentCard({ children, delay = 0, className = "" }: ContentCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`relative ${className}`}
    >
      <div 
        className="glass-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden"
        style={{
          background: 'var(--background-card)',
        }}
      >
        {/* Content */}
        {children}
      </div>
    </motion.div>
  );
}
