"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";
import { useTheme } from "@/context/ThemeContext";

export function AboutSection() {
  const { version } = useTheme();

  // Split headline into words for staggered blur-in animation
  const headlineWords = resumeData.about.headline.split(" ");

  return (
    <ContentCard>
      {/* Pill-style title */}
      <div className="mb-8">
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg"
          style={{
            background: "var(--accent-glow)",
            border: "1px solid var(--accent-dim)",
          }}
        >
          <Sparkles size={16} style={{ color: "var(--accent)" }} />
          <span
            className="text-sm font-semibold tracking-wide uppercase"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
            }}
          >
            About Me
          </span>
        </div>
      </div>

      {/* Headline — blur-in from below, word by word */}
      <h3
        className="text-xl lg:text-2xl font-bold mb-6 leading-snug flex flex-wrap gap-x-[0.3em] gap-y-1"
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

      {/* Description: render all paragraphs */}
      {resumeData.about.description
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean)
        .map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="leading-relaxed text-[15px] mb-4"
            style={{ color: "var(--foreground-muted)" }}
          >
            {para}
          </motion.p>
        ))}
    </ContentCard>
  );
}
