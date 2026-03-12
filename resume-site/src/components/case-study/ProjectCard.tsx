"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Readonly<ProjectCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative rounded-2xl border p-6 overflow-hidden transition-colors duration-300"
          style={{
            borderColor: "rgba(0,0,0,0.1)",
            background: "rgba(0,0,0,0.02)",
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 0%, var(--accent-glow), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <h4
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#111" }}
              >
                {project.name}
              </h4>
              <span
                className="text-[11px] font-mono px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.06)",
                  color: "rgba(0,0,0,0.5)",
                }}
              >
                {project.status}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-mono rounded-md"
                  style={{
                    background: "rgba(0,0,0,0.05)",
                    color: "rgba(0,0,0,0.45)",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span
                  className="text-[10px] font-mono px-2 py-0.5"
                  style={{ color: "rgba(0,0,0,0.35)" }}
                >
                  +{project.stack.length - 4}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
