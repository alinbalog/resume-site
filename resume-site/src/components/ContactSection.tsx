"use client";

import { motion } from "framer-motion";
import { Send, Mail, ArrowRight } from "lucide-react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";
import { useTheme } from "@/context/ThemeContext";

export function ContactSection() {
  const { version } = useTheme();

  return (
    <ContentCard delay={0.4}>
      <div className="relative">
        {/* Background decoration */}
        <div 
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{ background: 'var(--accent)' }}
        />

        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ 
                background: 'var(--accent-glow)',
              }}
            >
              <Send size={20} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <h2 
                className="text-xl lg:text-2xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Let's Connect
              </h2>
              <p 
                className="text-sm mt-1"
                style={{ color: 'var(--foreground-muted)' }}
              >
                Open for opportunities
              </p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg mb-6 leading-relaxed max-w-xl"
            style={{ 
              color: 'var(--foreground-muted)',
              fontFamily: version === "3" ? 'var(--font-serif)' : 'inherit',
              fontStyle: version === "3" ? 'italic' : 'normal',
            }}
          >
            I'm always interested in hearing about new opportunities, 
            challenging projects, and ways to help teams build better software.
          </motion.p>

          <motion.a
            href={`mailto:${resumeData.personal.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 group"
            style={{
              background: version === "5" 
                ? 'transparent' 
                : 'var(--accent)',
              color: version === "5"
                ? 'var(--accent)'
                : 'var(--background)',
              border: version === "5" ? '2px solid var(--accent)' : 'none',
            }}
          >
            <Mail size={18} />
            <span>{resumeData.personal.email}</span>
            <ArrowRight 
              size={16} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </motion.a>
        </div>
      </div>
    </ContentCard>
  );
}
