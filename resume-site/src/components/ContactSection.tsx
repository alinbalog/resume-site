"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { MdArrowUpward } from "react-icons/md";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";
import { useTheme } from "@/context/ThemeContext";

export function ContactSection() {
  const { version } = useTheme();

  // Mouse following blob
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Framer Motion variants to propagate hover from button -> icon
  const iconVariants = {
    rest: { rotate: 45 },
    hover: { rotate: 135, transition: { duration: 0.3 } },
  };

  // Split headline for staggered animation
  const headlineWords = "Ready to build something exceptional together?".split(" ");

  return (
    <ContentCard>
      <div className="relative" onMouseMove={handleMouseMove}>
        {/* Mouse-following blob */}
        <motion.div
          className="pointer-events-none absolute w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{
            background: "var(--accent)",
            x: smoothMouseX,
            y: smoothMouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        <div className="relative z-10">
      {/* Pill-style title */}
      <div className="mb-8">
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg"
          style={{
            background: "var(--accent-glow)",
            border: "1px solid var(--accent-dim)",
          }}
        >
          <Send size={16} style={{ color: "var(--accent)" }} />
          <span
            className="text-sm font-semibold tracking-wide uppercase"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
            }}
          >
            Get in Touch
          </span>
        </div>
      </div>

      {/* Headline — blur-in from below, word by word */}
      <h3
        className="text-2xl lg:text-3xl font-bold mb-6 leading-tight flex flex-wrap gap-x-[0.3em] gap-y-1"
        style={{
          fontFamily:
            version === "3" ? "var(--font-serif)" : "var(--font-display)",
          fontStyle: version === "3" ? "italic" : "normal",
        }}
      >
        {headlineWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: 0.15 + i * 0.045,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.5, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="leading-relaxed text-[15px] mb-8"
        style={{ color: "var(--foreground-muted)" }}
      >
        I'm always interested in hearing about new opportunities, challenging projects, 
        and ways to help teams build better software. Let's connect and explore how we 
        can work together.
      </motion.p>

      {/* Primary CTAs - Email and CV */}
      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.62, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col sm:flex-row gap-4 mb-6"
      >
        <motion.a
          href={`mailto:${resumeData.personal.email}`}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.97 }}
          className="group/btn relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-lg py-3 px-5 font-semibold text-sm cursor-pointer border-2 shadow-lg border-zinc-600"
          style={{
            fontFamily: "var(--font-display)",
          }}
        >
          <span className="relative z-20">Email Me</span>
          
          <motion.div 
            variants={iconVariants}
            className="relative z-20 flex items-center justify-center w-6 h-6 rounded-full border border-zinc-600 p-1"
          >
            <MdArrowUpward size={14} />
          </motion.div>
          
          {/* Circular fill animation (kept for visual cohesion) */}
          <motion.div 
            className="absolute left-0 top-1/2 w-full aspect-square rounded-full z-0 scale-0 -translate-x-1/2"
            style={{ 
              background: 'var(--accent)',
              translateY: '-50%',
            }}
            initial={{ scale: 0, translateX: '-50%' }}
            whileHover={{ scale: 2.5, translateX: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </motion.a>

        <motion.a
          href="/resume.pdf"
          download="Alin_Balog_Resume.pdf"
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.97 }}
          className="group/btn relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-lg py-3 px-5 font-semibold text-sm cursor-pointer border-2 shadow-lg border-zinc-600"
          style={{
            fontFamily: "var(--font-display)",
          }}
        >
          <span className="relative z-20">Download CV</span>
          
          <motion.div 
            variants={iconVariants}
            className="relative z-20 flex items-center justify-center w-6 h-6 rounded-full border border-zinc-600 p-1"
          >
            <MdArrowUpward size={14} />
          </motion.div>
          
          {/* Circular fill animation (kept for visual cohesion) */}
          <motion.div 
            className="absolute left-0 top-1/2 w-full aspect-square rounded-full z-0 scale-0 -translate-x-1/2"
            style={{ 
              background: 'var(--accent)',
              translateY: '-50%',
            }}
            initial={{ scale: 0, translateX: '-50%' }}
            whileHover={{ scale: 2.5, translateX: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </motion.a>
      </motion.div>

      {/* Secondary CTAs - Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.74, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p
          className="text-xs uppercase tracking-wider mb-3 font-semibold"
          style={{
            color: "var(--foreground-muted)",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.1em",
          }}
        >
          Or connect on
        </p>
        <div className="flex flex-wrap gap-3">
          <motion.a
            href={resumeData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm"
            style={{
              background: "var(--card-background)",
              color: "var(--foreground)",
              border: "1.5px solid var(--border)",
            }}
          >
            <Github size={16} />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href={resumeData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm"
            style={{
              background: "var(--card-background)",
              color: "var(--foreground)",
              border: "1.5px solid var(--border)",
            }}
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
        </div>
      </div>
    </ContentCard>
  );
}
