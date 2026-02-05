"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";
import { useTheme } from "@/context/ThemeContext";

export function AboutSection() {
  const { version } = useTheme();

  return (
    <ContentCard>
      <div className="flex items-start gap-4 mb-6">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ 
            background: 'var(--accent-glow)',
          }}
        >
          <Sparkles size={20} style={{ color: 'var(--accent)' }} />
        </div>
        <div>
          <h2 
            className="text-xl lg:text-2xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About Me
          </h2>
          <p 
            className="text-sm mt-1"
            style={{ color: 'var(--foreground-muted)' }}
          >
            {resumeData.personal.yearsExperience} years of experience
          </p>
        </div>
      </div>

      {/* Headline */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg lg:text-xl font-semibold mb-4 leading-snug"
        style={{ 
          fontFamily: version === "3" ? 'var(--font-serif)' : 'var(--font-display)',
          fontStyle: version === "3" ? 'italic' : 'normal',
        }}
      >
        {resumeData.about.headline}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="leading-relaxed mb-6"
        style={{ color: 'var(--foreground-muted)' }}
      >
        {resumeData.about.description.split('\n')[0]}
      </motion.p>

      {/* Highlights */}
      <div className="grid gap-2">
        {resumeData.about.highlights.map((highlight, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-center gap-3"
          >
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ 
                background: 'var(--accent)',
                boxShadow: version === "2" ? '0 0 8px var(--accent)' : 'none',
              }}
            />
            <span 
              className="text-sm"
              style={{ color: 'var(--foreground-muted)' }}
            >
              {highlight}
            </span>
          </motion.div>
        ))}
      </div>
    </ContentCard>
  );
}
