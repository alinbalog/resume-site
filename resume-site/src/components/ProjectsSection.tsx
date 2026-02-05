"use client";

import { motion } from "framer-motion";
import { Rocket, ExternalLink } from "lucide-react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";
import { useTheme } from "@/context/ThemeContext";

export function ProjectsSection() {
  const { version } = useTheme();

  return (
    <ContentCard delay={0.2}>
      <div className="flex items-start gap-4 mb-8">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ 
            background: 'var(--accent-glow)',
          }}
        >
          <Rocket size={20} style={{ color: 'var(--accent)' }} />
        </div>
        <div>
          <h2 
            className="text-xl lg:text-2xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Side Projects
          </h2>
          <p 
            className="text-sm mt-1"
            style={{ color: 'var(--foreground-muted)' }}
          >
            Personal explorations
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {resumeData.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative p-5 rounded-xl cursor-pointer transition-all duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: version === "5" ? '2px solid var(--accent)' : '1px solid var(--card-border)',
            }}
          >
            {/* Hover gradient */}
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--accent-glow), transparent)',
              }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-2">
                <h3 
                  className="font-bold text-base group-hover:text-gradient transition-colors duration-300"
                  style={{ 
                    fontFamily: version === "3" ? 'var(--font-serif)' : 'var(--font-display)',
                  }}
                >
                  {project.name}
                </h3>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--accent)' }}
                >
                  <ExternalLink size={16} />
                </motion.div>
              </div>

              <p 
                className="text-sm mb-4 leading-relaxed"
                style={{ color: 'var(--foreground-muted)' }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-0.5 text-xs font-mono rounded"
                    style={{
                      background: 'var(--background)',
                      color: 'var(--foreground-dim)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative corner for geometric version */}
            {version === "3" && (
              <div 
                className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 opacity-30"
                style={{ borderColor: 'var(--accent)' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </ContentCard>
  );
}
