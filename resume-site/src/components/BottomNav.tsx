"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Briefcase,
  FolderOpen,
  Code2,
  Send,
  ArrowUp,
} from "lucide-react";

const sections = [
  { id: "m-about", label: "About", icon: Sparkles },
  { id: "m-experience", label: "Experience", icon: Briefcase },
  { id: "m-projects", label: "Projects", icon: FolderOpen },
  { id: "m-skills", label: "Skills", icon: Code2 },
  { id: "m-contact", label: "Contact", icon: Send },
];

export function BottomNav() {
  const [activeSection, setActiveSection] = useState<string>("m-about");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const updateActiveSection = () => {
      const anchorY = window.innerHeight * 0.4;

      let containingSection: string | null = null;
      let closestSection = sections[0]?.id ?? "m-about";
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= anchorY && rect.bottom >= anchorY) {
          containingSection = id;
          break;
        }

        const distance = Math.abs(rect.top - anchorY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = id;
        }
      }

      setActiveSection(containingSection ?? closestSection);
    };

    const onScrollOrResize = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
      className="fixed bottom-5 left-0 right-0 mx-auto z-40 lg:hidden flex flex-col w-fit max-w-[calc(100vw-32px)] rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden"
      aria-label="Section navigation"
    >
      {/* Progress bar along top edge */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-white/5 z-20 overflow-hidden">
        <motion.div
          className="h-full w-full"
          style={{
            background: "var(--accent)",
            transformOrigin: "left center",
            opacity: 0.6,
            scaleX: scrollProgress,
          }}
        />
      </div>

      <div className="flex items-center justify-center gap-0 p-1.5">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative flex flex-col items-center justify-center gap-0.5 px-2.5 py-2 border-none bg-transparent cursor-pointer rounded-2xl transition-all duration-200 flex-shrink-0 ${
                isActive
                  ? "text-[var(--accent)]"
                  : "text-[var(--foreground-dim)] hover:bg-white/5"
              }`}
              whileTap={{ scale: 0.88 }}
              aria-label={section.label}
              aria-current={isActive ? "true" : undefined}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />

            </motion.button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-8 bg-[var(--card-border)] mx-1" />

        {/* Scroll to top */}
        <motion.button
          onClick={scrollToTop}
          className="relative flex flex-col items-center justify-center gap-0.5 px-2.5 py-2 border-l border-[var(--card-border)] border-none bg-transparent text-[var(--foreground-dim)] cursor-pointer rounded-r-2xl transition-all duration-200 flex-shrink-0 hover:text-[var(--accent)]"
          style={{
            opacity: scrollProgress > 0.05 ? 1 : 0.35,
          }}
          whileTap={{ scale: 0.88 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={1.8} />
        </motion.button>
      </div>
    </motion.nav>
  );
}
