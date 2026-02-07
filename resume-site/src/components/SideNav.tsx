"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Briefcase,
  Code2,
  Send,
  ArrowUp,
} from "lucide-react";

const sections = [
  { id: "about", label: "About", icon: Sparkles },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Send },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      let mostVisible: IntersectionObserverEntry | null = null;

      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry;
          }
        }
      }

      if (mostVisible) {
        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: [0.3, 0.6],
      rootMargin: "-10% 0px -40% 0px",
    });

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-1 p-3 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg"
      aria-label="Section navigation"
    >
      {/* Section icons */}
      <div className="flex flex-col items-center gap-0.5">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          const isHovered = hoveredItem === section.id;

          return (
            <div key={section.id} className="relative">
              <motion.button
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => setHoveredItem(section.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative w-10 h-10 flex items-center justify-center rounded-xl border-none bg-transparent cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--foreground-dim)] hover:text-[var(--foreground)] hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to ${section.label}`}
                aria-current={isActive ? "true" : undefined}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 1.8} />

                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-sm"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 0 8px var(--accent-glow), 0 0 16px var(--accent-glow)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>

              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 2 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 2 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-full top-1/2 -translate-y-1/2 mr-2.5 px-2.5 py-1 rounded-lg bg-[var(--background-card)] border border-[var(--card-border)] text-[var(--foreground)] text-xs font-mono tracking-wider whitespace-nowrap pointer-events-none shadow-lg"
                  >
                    {section.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="w-5 h-px bg-[var(--card-border)] my-1 relative z-10" />

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="relative w-10 h-10 flex items-center justify-center rounded-xl border-none bg-transparent text-[var(--foreground-dim)] cursor-pointer transition-all duration-200 hover:text-[var(--accent)] hover:bg-[var(--accent-glow)] z-10"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} strokeWidth={1.8} />
      </motion.button>
    </motion.nav>
  );
}
