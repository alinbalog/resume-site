"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";
import { useTheme } from "@/context/ThemeContext";

export function ExperienceSection() {
  const { version } = useTheme();

  return (
    <ContentCard delay={0.1}>
      <div className="flex items-start gap-4 mb-8">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ 
            background: 'var(--accent-glow)',
          }}
        >
          <Briefcase size={20} style={{ color: 'var(--accent)' }} />
        </div>
        <div>
          <h2 
            className="text-xl lg:text-2xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Experience
          </h2>
          <p 
            className="text-sm mt-1"
            style={{ color: 'var(--foreground-muted)' }}
          >
            Professional journey
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {resumeData.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="relative"
          >
            {/* Timeline line */}
            {i < resumeData.experience.length - 1 && (
              <div 
                className="absolute left-[7px] top-10 bottom-[-32px] w-[2px]"
                style={{ 
                  background: version === "5" 
                    ? 'var(--accent)' 
                    : 'linear-gradient(to bottom, var(--accent-dim), transparent)',
                }}
              />
            )}

            <div className="flex gap-4">
              {/* Timeline dot */}
              <div className="relative">
                <motion.div 
                  className="w-4 h-4 rounded-full border-2 mt-1"
                  style={{ 
                    borderColor: 'var(--accent)',
                    background: 'var(--background-card)',
                  }}
                  whileHover={{ scale: 1.2 }}
                />
                {version === "2" && (
                  <div 
                    className="absolute inset-0 rounded-full blur-md"
                    style={{ background: 'var(--accent)', opacity: 0.3 }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 
                    className="font-bold text-lg"
                    style={{ 
                      fontFamily: version === "3" ? 'var(--font-serif)' : 'var(--font-display)',
                    }}
                  >
                    {exp.company}
                  </h3>
                  <span 
                    className="text-xs font-mono"
                    style={{ color: 'var(--accent)' }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p 
                  className="text-sm font-medium mb-2"
                  style={{ color: 'var(--foreground-muted)' }}
                >
                  {exp.role}
                </p>

                <p 
                  className="text-sm mb-3 leading-relaxed"
                  style={{ color: 'var(--foreground-dim)' }}
                >
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-1.5 mb-4">
                  {exp.achievements.slice(0, 3).map((achievement, j) => (
                    <li 
                      key={j}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: 'var(--foreground-muted)' }}
                    >
                      <ChevronRight 
                        size={14} 
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--accent)' }}
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg"
                      style={{
                        background: 'var(--accent-glow)',
                        color: 'var(--accent)',
                        border: version === "5" ? '1px solid var(--accent)' : 'none',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </ContentCard>
  );
}
