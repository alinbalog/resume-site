"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { resumeData } from "@/data/resume";
import { useTheme } from "@/context/ThemeContext";

export function IdentityCard() {
  const { version } = useTheme();

  const socialLinks = [
    { icon: Github, href: resumeData.personal.github, label: "GitHub" },
    { icon: Linkedin, href: resumeData.personal.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${resumeData.personal.email}`, label: "Email" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-full w-full"
    >
      {/* Card container */}
      <div className="glass-card relative h-full overflow-hidden rounded-2xl lg:rounded-3xl">
        {/* Background gradient based on version */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              version === "1"
                ? "radial-gradient(ellipse at 50% 0%, rgba(0, 255, 136, 0.3), transparent 70%)"
                : version === "2"
                ? "radial-gradient(ellipse at 50% 0%, rgba(0, 240, 255, 0.4), transparent 70%)"
                : version === "3"
                ? "radial-gradient(ellipse at 50% 0%, rgba(168, 85, 247, 0.4), transparent 70%)"
                : version === "4"
                ? "radial-gradient(ellipse at 50% 0%, rgba(255, 107, 107, 0.4), transparent 70%)"
                : "radial-gradient(ellipse at 50% 0%, rgba(250, 204, 21, 0.3), transparent 70%)",
          }}
        />

        {/* Photo section */}
        <div className="relative h-[45%] lg:h-[50%] overflow-hidden">
          {/* Placeholder gradient for photo */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, 
                var(--background-card) 0%, 
                rgba(var(--accent), 0.1) 50%,
                var(--background-card) 100%)`,
            }}
          />
          
          {/* Decorative circle/avatar placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div 
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-2 flex items-center justify-center text-4xl lg:text-5xl font-bold"
                style={{ 
                  borderColor: 'var(--accent)',
                  background: 'linear-gradient(135deg, var(--background-card), var(--background))',
                }}
              >
                <span style={{ color: 'var(--accent)' }}>AB</span>
              </div>
              
              {/* Orbiting accent */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div 
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{ background: 'var(--accent)' }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Gradient overlay at bottom */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{
              background: 'linear-gradient(to top, var(--background-card), transparent)',
            }}
          />
        </div>

        {/* Content section */}
        <div className="relative p-6 lg:p-8 flex flex-col h-[55%] lg:h-[50%]">
          {/* Name and title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 
              className="text-2xl lg:text-3xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {resumeData.personal.name}
            </h1>
            <p 
              className="text-lg lg:text-xl mt-1"
              style={{ color: 'var(--accent)' }}
            >
              {resumeData.personal.title}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-sm lg:text-base leading-relaxed"
            style={{ color: 'var(--foreground-muted)' }}
          >
            {resumeData.personal.tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-3 flex items-center gap-2 text-sm"
            style={{ color: 'var(--foreground-dim)' }}
          >
            <MapPin size={14} />
            <span>{resumeData.personal.location}</span>
          </motion.div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--foreground-muted)',
                }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Download button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium text-sm transition-all duration-300"
            style={{
              background: 'var(--accent)',
              color: 'var(--background)',
            }}
          >
            <Download size={16} />
            Download Resume
          </motion.button>
        </div>

        {/* Version-specific decorative elements */}
        {version === "3" && (
          <>
            <div 
              className="absolute top-4 right-4 w-8 h-8 border rotate-45"
              style={{ borderColor: 'var(--accent)', opacity: 0.3 }}
            />
            <div 
              className="absolute bottom-4 left-4 w-4 h-4 border rotate-12"
              style={{ borderColor: 'var(--accent)', opacity: 0.3 }}
            />
          </>
        )}

        {version === "5" && (
          <div 
            className="absolute top-0 left-0 w-full h-1"
            style={{ background: 'var(--accent)' }}
          />
        )}
      </div>
    </motion.div>
  );
}
