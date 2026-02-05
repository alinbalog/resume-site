"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Cloud, Heart } from "lucide-react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";
import { useTheme } from "@/context/ThemeContext";

export function SkillsSection() {
  const { version } = useTheme();

  const skillCategories = [
    { title: "Backend", icon: Code2, skills: resumeData.skills.backend },
    { title: "Frontend", icon: Layers, skills: resumeData.skills.frontend },
    { title: "Cloud & Infra", icon: Cloud, skills: resumeData.skills.cloud },
  ];

  return (
    <ContentCard delay={0.3}>
      <div className="flex items-start gap-4 mb-8">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ 
            background: 'var(--accent-glow)',
          }}
        >
          <Code2 size={20} style={{ color: 'var(--accent)' }} />
        </div>
        <div>
          <h2 
            className="text-xl lg:text-2xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Skills & Stack
          </h2>
          <p 
            className="text-sm mt-1"
            style={{ color: 'var(--foreground-muted)' }}
          >
            Technical expertise
          </p>
        </div>
      </div>

      {/* Technical Skills Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <category.icon size={16} style={{ color: 'var(--accent)' }} />
              <h3 
                className="font-semibold text-sm uppercase tracking-wider"
                style={{ color: 'var(--foreground-muted)' }}
              >
                {category.title}
              </h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill, j) => (
                <div key={j}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span style={{ color: 'var(--foreground-muted)' }}>
                      {skill.name}
                    </span>
                    <span 
                      className="font-mono text-xs"
                      style={{ color: 'var(--accent)' }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div 
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.4 + j * 0.1, 
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full rounded-full"
                      style={{
                        background: version === "4"
                          ? `linear-gradient(90deg, var(--accent), var(--accent-dim))`
                          : 'var(--accent)',
                        boxShadow: version === "2" ? '0 0 10px var(--accent)' : 'none',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="pt-6"
        style={{ borderTop: '1px solid var(--card-border)' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Heart size={16} style={{ color: 'var(--accent)' }} />
          <h3 
            className="font-semibold text-sm uppercase tracking-wider"
            style={{ color: 'var(--foreground-muted)' }}
          >
            Soft Skills
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {resumeData.skills.soft.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 text-sm rounded-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                color: 'var(--foreground-muted)',
                border: version === "5" 
                  ? '1px solid var(--accent)'
                  : version === "3"
                  ? '1px solid var(--card-border)'
                  : 'none',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </ContentCard>
  );
}
