"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight, MapPin } from "lucide-react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";
import { useTheme } from "@/context/ThemeContext";

export function ExperienceSection() {
  const { version } = useTheme();

  return (
    <ContentCard delay={0.1}>
      <div className="relative">
        {/* Static blob in top right */}
        <motion.div
          className="pointer-events-none absolute top-0 right-0 w-80 rounded-full blur-3xl opacity-15"
          style={{
            background: "var(--accent)",
            height: '25%',
            translateX: "30%",
            translateY: "-30%",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Static blob in bottom left */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-12"
          style={{
            background: "var(--accent)",
            translateX: "-40%",
            translateY: "40%",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.12 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <div className="relative z-10">
      <div className="mb-8">
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg"
          style={{
            background: "var(--accent-glow)",
            border: "1px solid var(--accent-dim)",
          }}
        >
          <Briefcase size={16} style={{ color: "var(--accent)" }} />
          <span
            className="text-sm font-semibold tracking-wide uppercase"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
            }}
          >
            Experience
          </span>
        </div>
      </div>

      {/* Company list */}
      <div className="space-y-10">
        {resumeData.experience.map((company, i) => (
          <motion.div
            key={company.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative"
          >
            {/* Timeline connector between companies */}
            {i < resumeData.experience.length - 1 && (
              <div
                className="absolute left-1.75 top-12 -bottom-10 w-0.5"
                style={{
                  background:
                    version === "5"
                      ? "var(--accent)"
                      : "linear-gradient(to bottom, var(--accent-dim), transparent)",
                }}
              />
            )}

            <div className="flex gap-4">
              {/* Timeline dot */}
              <div className="relative shrink-0 mt-1">
                <motion.div
                  className="w-4 h-4 rounded-full border-2"
                  style={{
                    borderColor: "var(--accent)",
                    background: "var(--accent-glow)",
                  }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                {version === "2" && (
                  <div
                    className="absolute inset-0 rounded-full blur-md"
                    style={{ background: "var(--accent)", opacity: 0.3 }}
                  />
                )}
              </div>

              {/* Company block */}
              <div className="flex-1 min-w-0">
                {/* Company header */}
                <div className="mb-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3
                      className="font-bold text-lg"
                      style={{
                        fontFamily:
                          version === "3"
                            ? "var(--font-serif)"
                            : "var(--font-display)",
                      }}
                    >
                      {company.company}
                    </h3>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--accent)" }}
                    >
                      {company.period}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: "var(--foreground-dim)" }}
                  >
                    <MapPin size={12} />
                    <span>{company.location}</span>
                  </div>
                </div>

                {/* Projects under this company */}
                <div className="space-y-5">
                  {company.projects.map((project, j) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + i * 0.1 + j * 0.08,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="relative rounded-xl p-4"
                      style={{
                        background:
                          version === "5"
                            ? "transparent"
                            : "rgba(255, 255, 255, 0.02)",
                        border:
                          version === "5"
                            ? "1px solid var(--accent-dim)"
                            : "1px solid rgba(255, 255, 255, 0.04)",
                      }}
                    >
                      {/* Project header */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <h4
                            className="font-semibold text-[15px]"
                            style={{
                              fontFamily: "var(--font-display)",
                            }}
                          >
                            {project.name}
                          </h4>
                        </div>
                        <span
                          className="text-[11px] font-mono"
                          style={{ color: "var(--foreground-dim)" }}
                        >
                          {project.period}
                        </span>
                      </div>

                      <p
                        className="text-xs font-medium mb-2"
                        style={{ color: "var(--accent)", opacity: 0.85 }}
                      >
                        {project.role}
                      </p>

                      <p
                        className="text-sm leading-relaxed mb-3"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        {project.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-1.5 mb-3">
                        {project.achievements.map((achievement, k) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "var(--foreground-muted)" }}
                          >
                            <ChevronRight
                              size={14}
                              className="mt-0.5 shrink-0"
                              style={{ color: "var(--accent)" }}
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, k) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-mono rounded-md"
                            style={{
                              background: "var(--accent-glow)",
                              color: "var(--accent)",
                              border:
                                version === "5"
                                  ? "1px solid var(--accent)"
                                  : "none",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
        </div>
      </div>
    </ContentCard>
  );
}
