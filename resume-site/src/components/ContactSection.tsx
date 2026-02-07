"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Send } from "lucide-react";
import { MdArrowUpward } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useState } from "react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";

export function ContactSection() {

  // Mouse following blob
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For now, just simulate form submission
      // In a real app, you'd send to an API endpoint or service like Formspree
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link with form data
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Split headline for staggered animation
  const headlineWords = "Get in Touch".split(" ");

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
          fontFamily: "var(--font-display)",
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
        Have a project in mind or just want to connect? I&apos;d love to hear from you. 
        Let&apos;s discuss how we can work together.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.55, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="space-y-4 mb-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-zinc-600 bg-transparent text-sm focus:outline-none focus:border-accent transition-colors"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--foreground)"
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-zinc-600 bg-transparent text-sm focus:outline-none focus:border-accent transition-colors"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--foreground)"
              }}
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border-2 border-zinc-600 bg-transparent text-sm focus:outline-none focus:border-accent transition-colors resize-none"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--foreground)"
            }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="space-y-4"
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileTap={{ scale: 0.97 }}
            className="w-full group/btn relative flex items-center justify-center gap-3 overflow-hidden rounded-xl py-3.5 px-7 font-semibold text-sm cursor-pointer border border-[var(--accent)] text-[var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {/* Fill sweep from left */}
            <div className="absolute inset-0 origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ background: "var(--accent)" }}
            />
            <span className="relative z-10 group-hover/btn:text-[var(--background)] transition-colors duration-300">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <div className="relative z-10 flex items-center justify-center w-5 h-5">
              <MdArrowUpward
                size={14}
                className="transition-all duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-[var(--background)]"
              />
            </div>
          </motion.button>
          
          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-zinc-600/50" />
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              or
            </span>
            <div className="flex-1 h-px bg-zinc-600/50" />
          </div>
          
          <motion.a
            href="/resume.pdf"
            download="Alin_Balog_Resume.pdf"
            whileTap={{ scale: 0.97 }}
            className="w-full group/btn relative flex items-center justify-center gap-3 overflow-hidden rounded-xl py-3.5 px-7 font-semibold text-sm cursor-pointer border border-zinc-700 text-zinc-400 hover:text-[var(--foreground)] hover:border-zinc-500 transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {/* Subtle fill */}
            <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/[0.04] transition-colors duration-300" />
            <span className="relative z-10">Download CV</span>
            <div className="relative z-10 flex items-center justify-center w-5 h-5">
              <MdArrowUpward
                size={14}
                className="rotate-180 transition-transform duration-300 group-hover/btn:translate-y-0.5"
              />
            </div>
          </motion.a>
        </motion.div>
        
        {/* Status messages */}
        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-green-400"
          >
            Message sent successfully! Opening your email client...
          </motion.p>
        )}
        
        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-400"
          >
            Failed to send message. Please try again.
          </motion.p>
        )}
      </motion.form>

      {/* Secondary CTAs - Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.7, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p
          className="text-xs uppercase tracking-wider mb-3 font-semibold"
          style={{
            color: "var(--foreground-muted)",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.1em",
          }}
        >
          Connect with me
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
            <FaGithub size={16} />
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
            <FaLinkedinIn size={16} />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
        </div>
      </div>
    </ContentCard>
  );
}
