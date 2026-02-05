"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

interface ContentCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ContentCard({ children, delay = 0, className = "" }: ContentCardProps) {
  const { version } = useTheme();

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
        {/* Top accent line for brutalist version */}
        {version === "5" && (
          <div 
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: 'var(--accent)' }}
          />
        )}

        {/* Corner geometric for editorial version */}
        {version === "3" && (
          <div 
            className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2"
            style={{ borderColor: 'var(--accent)', opacity: 0.4 }}
          />
        )}

        {/* Content */}
        {children}
      </div>
    </motion.div>
  );
}
