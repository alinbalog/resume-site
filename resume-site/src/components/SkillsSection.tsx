"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Server, Users, LucideIcon } from "lucide-react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

interface SectionCardProps {
  sectionKey: string;
  title: string;
  Icon: LucideIcon;
  skills: string[];
  delay: number;
  animationDirection: { x?: number; y?: number };
  hoveredSection: string | null;
  onHover: (key: string | null) => void;
  tagBorder: string;
}

const SectionCard = ({
  sectionKey,
  title,
  Icon,
  skills,
  delay,
  animationDirection,
  hoveredSection,
  onHover,
  tagBorder,
}: SectionCardProps) => {
  const isHovered = hoveredSection === sectionKey;

  return (
    <motion.div
      initial={{ opacity: 0, ...animationDirection, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: 0 }}
      onHoverStart={() => onHover(sectionKey)}
      onHoverEnd={() => onHover(null)}
      className="relative p-5 rounded-xl cursor-default"
      style={{
        background: "rgba(255, 255, 255, 0.015)",
        border: isHovered ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          opacity: isHovered ? 0.08 : 0,
          background: isHovered
            ? "radial-gradient(circle at 50% 0%, var(--accent), transparent 70%)"
            : "transparent",
        }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
          <motion.div
            animate={{
              scale: isHovered ? 1.15 : 1,
              filter: isHovered
                ? "drop-shadow(0 0 8px var(--accent))"
                : "drop-shadow(0 0 0px transparent)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon
              size={16}
              style={{
                color: "var(--accent)",
                opacity: 0.85,
              }}
            />
          </motion.div>
          <motion.h3
            className="text-[13px] font-semibold uppercase tracking-wider"
            animate={{
              color: isHovered ? "var(--accent)" : "var(--foreground-muted)",
            }}
            transition={{ duration: 0.25 }}
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            {title}
          </motion.h3>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, j) => {
            return (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{
                  delay: isHovered ? j * 0.03 : 0.15 + j * 0.02,
                  duration: isHovered ? 0.3 : 0.35,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="px-2.5 py-1 text-[13px] rounded-md cursor-default"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  color: "var(--foreground-muted)",
                  border: tagBorder,
                  fontFamily: "var(--font-mono)",
                }}
              >
                {skill}
              </motion.span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export function SkillsSection() {
  const { version } = useTheme();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const tagBorder =
    version === "5"
      ? "1px solid var(--accent)"
      : "1px solid rgba(255, 255, 255, 0.06)";

  return (
    <ContentCard delay={0.3}>
      {/* Pill-style title */}
      <div className="mb-10">
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg"
          style={{
            background: "var(--accent-glow)",
            border: "1px solid var(--accent-dim)",
          }}
        >
          <Code2 size={16} style={{ color: "var(--accent)" }} />
          <span
            className="text-sm font-semibold tracking-wide uppercase"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
            }}
          >
            Skills & Stack
          </span>
        </div>
      </div>

      {/* Asymmetric magazine-style layout */}
      <div className="space-y-6">
        {/* Row 1: Backend (large) + Frontend */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-6">
          <SectionCard
            sectionKey="backend"
            title="Backend & Architecture"
            Icon={Code2}
            skills={resumeData.skills.backendAndArchitecture}
            delay={0.1}
            animationDirection={{ x: -20 }}
            hoveredSection={hoveredSection}
            onHover={setHoveredSection}
            tagBorder={tagBorder}
          />
          <SectionCard
            sectionKey="frontend"
            title="Frontend"
            Icon={Layers}
            skills={resumeData.skills.frontend}
            delay={0.2}
            animationDirection={{ x: 20 }}
            hoveredSection={hoveredSection}
            onHover={setHoveredSection}
            tagBorder={tagBorder}
          />
        </div>

        {/* Row 2: Data & Infra + Soft Skills (larger) */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-6">
          <SectionCard
            sectionKey="data"
            title="Data & Infrastructure"
            Icon={Server}
            skills={resumeData.skills.dataAndInfra}
            delay={0.3}
            animationDirection={{ y: 20 }}
            hoveredSection={hoveredSection}
            onHover={setHoveredSection}
            tagBorder={tagBorder}
          />
          <SectionCard
            sectionKey="soft"
            title="Soft Skills"
            Icon={Users}
            skills={resumeData.skills.soft}
            delay={0.4}
            animationDirection={{ y: 20 }}
            hoveredSection={hoveredSection}
            onHover={setHoveredSection}
            tagBorder={tagBorder}
          />
        </div>
      </div>
    </ContentCard>
  );
}
