"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FolderOpen, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { resumeData } from "@/data/resume";
import { ContentCard } from "./ContentCard";

type Project = (typeof resumeData.projects)[0];

function ProjectCard({ project, index }: Readonly<{ project: Project; index: number }>) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/projects/${project.slug}`} className="block">
    <motion.article
      key={project.slug}
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: 0.08 + index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      animate={{
        y: hovered ? -3 : 0,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-xl p-5 overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255, 255, 255, 0.015)",
        border: hovered
          ? "1px solid var(--accent-dim)"
          : "1px solid rgba(255, 255, 255, 0.06)",
        transition: "border-color 0.25s ease",
      }}
    >
      {/* Radial glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        animate={{
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.35 }}
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 100%, var(--accent-glow), transparent)",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-3">
          <h3
            className="font-semibold text-base"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.name}
          </h3>
          <span
            className="text-[11px] font-mono px-2 py-1 rounded-md"
            style={{
              color:
                project.status === "Live"
                  ? "var(--accent)"
                  : "var(--foreground-dim)",
              background: "rgba(255, 255, 255, 0.04)",
            }}
          >
            {project.status}
          </span>
        </div>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--foreground-muted)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.slice(0, 5).map((tech) => (
            <motion.span
              key={tech}
              animate={{
                borderColor: hovered
                  ? "rgba(255,255,255,0.14)"
                  : "rgba(255,255,255,0.07)",
                color: hovered ? "var(--foreground-muted)" : "var(--foreground-dim)",
              }}
              transition={{ duration: 0.2 }}
              className="px-2 py-0.5 text-[11px] font-mono rounded-md"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* View case study label */}
        <span className="inline-flex items-center gap-1.5 text-xs font-mono" style={{ color: "var(--accent)" }}>
          <motion.span
            animate={{ x: hovered ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            View case study
          </motion.span>
          <motion.span
            animate={
              hovered
                ? { x: 3, y: -3, opacity: 1 }
                : { x: 0, y: 0, opacity: 0.7 }
            }
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex"
          >
            <ArrowUpRight size={13} />
          </motion.span>
        </span>
      </div>
    </motion.article>
    </Link>
  );
}

export function ProjectsSection() {
  return (
    <ContentCard delay={0.2}>
      <div className="mb-8">
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg"
          style={{
            background: "var(--accent-glow)",
            border: "1px solid var(--accent-dim)",
          }}
        >
          <FolderOpen size={16} style={{ color: "var(--accent)" }} />
          <span
            className="text-sm font-semibold tracking-wide uppercase"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.08em",
            }}
          >
            Projects
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {resumeData.projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </ContentCard>
  );
}
