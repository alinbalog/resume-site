"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Lightbulb, FlaskConical, Layers, Sparkles } from "lucide-react";
import { resumeData } from "@/data/resume";

type Project = (typeof resumeData.projects)[number] & { liveUrl?: string };

interface CaseStudyPageProps {
  project: Project;
}

/* ──────────────────────────────────────────────
   Marquee — infinitely scrolling status ribbon
   ────────────────────────────────────────────── */
function Marquee({ items }: Readonly<{ items: string[] }>) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="relative w-full overflow-hidden py-4 select-none border-t border-white/10">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--background), transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, var(--background), transparent)",
        }}
      />
      
      <motion.div
        className="flex gap-8 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-25%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2 text-[13px] font-mono tracking-wide uppercase"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full border"
              style={{ borderColor: "var(--accent)", background: "transparent" }}
            />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Other‑project card (bottom section)
   ────────────────────────────────────────────── */
function ProjectCard({ project, index }: Readonly<{ project: Project; index: number }>) {
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
          {/* hover glow */}
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

            {/* tech preview */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.stack.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-mono rounded-md"
                  style={{
                    background: "rgba(0,0,0,0.05)",
                    color: "rgba(0,0,0,0.45)",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {t}
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

/* ──────────────────────────────────────────────
   Section heading helper
   ────────────────────────────────────────────── */
function SectionHeading({
  icon: Icon,
  children,
  delay = 0,
}: Readonly<{
  icon: typeof Lightbulb;
  children: React.ReactNode;
  delay?: number;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg mb-6"
        style={{
          background: "transparent",
          border: "1.5px solid #111",
        }}
      >
        <Icon size={16} style={{ color: "#111" }} strokeWidth={2.2} />
        <h2
          className="font-bold uppercase tracking-wider"
          style={{ fontFamily: "var(--font-display)", color: "#111" }}
        >
          {children}
        </h2>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════ */
export function CaseStudyPage({ project }: Readonly<CaseStudyPageProps>) {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  const headerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const otherProjects = resumeData.projects.filter((p) => p.slug !== project.slug);

  const marqueeItems = [
    project.status,
    ...project.stack.slice(0, 5),
    project.status,
  ];

  return (
    <div className="min-h-screen" style={{ background: "#fafafa" }}>
      {/* ────────── DARK HERO HEADER ────────── */}
      <header
        ref={headerRef}
        className="relative overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--accent) 1px, transparent 1px),
              linear-gradient(90deg, var(--accent) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Accent glow blob */}
        <motion.div
          className="absolute -top-32 -right-32 w-105 h-105 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
            opacity: 0.4,
          }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pt-10 pb-2"
        >
          {/* Return link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-mono group mb-8"
              style={{ color: "var(--foreground-muted)" }}
            >
              <motion.span
                className="inline-flex"
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowLeft size={16} />
              </motion.span>
              <span className="group-hover:underline underline-offset-4 decoration-accent">
                return
              </span>
            </Link>
          </motion.div>

          {/* Title + Story row — 40/60 on desktop */}
          <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-start mb-8">
            {/* Title block — 40% on desktop */}
            <motion.div
              className="w-full lg:w-2/5 shrink-0 mb-6 lg:mb-0"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--foreground)",
                }}
              >
                {project.name}
              </h1>

              {/* Action buttons — repo + live */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.repo && (
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono rounded-lg group/btn"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                    whileHover={{
                      borderColor: "rgba(255,255,255,0.5)",
                      background: "rgba(255,255,255,0.18)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <ExternalLink size={12} />
                    <span>Repository</span>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono rounded-lg group/btn"
                    style={{
                      background: "rgba(0,255,136,0.12)",
                      border: "1px solid rgba(0,255,136,0.3)",
                      color: "var(--accent)",
                    }}
                    whileHover={{
                      background: "rgba(0,255,136,0.18)",
                      borderColor: "var(--accent)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <ExternalLink size={12} />
                    <span>View Live</span>
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Story — 60% on desktop */}
            <motion.p
              className="w-full lg:w-3/5 text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {project.story}
            </motion.p>
          </div>
        </motion.div>

        {/* Marquee ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Marquee items={marqueeItems} />
        </motion.div>
      </header>

      {/* ────────── WHITE BODY ────────── */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-20">
        {/* ── The challenge ── */}
        <section className="mb-12">
          <SectionHeading icon={Lightbulb} delay={0.05}>
            The challenge
          </SectionHeading>
          <motion.p
            className="leading-relaxed"
            style={{ color: "rgba(0,0,0,0.65)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {project.caseStudy.purpose}
          </motion.p>
        </section>

        {/* ── The process ── */}
        <section className="mb-12">
          <SectionHeading icon={FlaskConical} delay={0.05}>
            The process
          </SectionHeading>
          <ul className="space-y-4">
            {project.caseStudy.lessonsLearned.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-3.5 text-[15px] leading-relaxed"
                style={{ color: "rgba(0,0,0,0.6)" }}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 * i,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.span
                  className="inline-block mt-1.75 w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: "#111" }}
                  whileHover={{ scale: 1.5, background: "var(--accent)" }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* ── Stack ── */}
        <section className="mb-12">
          <SectionHeading icon={Layers} delay={0.05}>
            Stack
          </SectionHeading>
          <div className="flex flex-wrap gap-2.5">
            {project.stack.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3.5 py-1.5 text-[13px] font-mono rounded-lg cursor-default"
                style={{
                  border: "1.5px solid rgba(0,0,0,0.12)",
                  color: "rgba(0,0,0,0.6)",
                  background: "transparent",
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.35,
                  delay: 0.04 * i,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  borderColor: "rgba(0,0,0,0.35)",
                  color: "#111",
                  scale: 1.06,
                  y: -2,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        {/* ── Future ideas ── */}
        <section className="mb-12">
          <SectionHeading icon={Sparkles} delay={0.05}>
            Future ideas
          </SectionHeading>
          <ul className="space-y-4">
            {project.caseStudy.futureIdeas.map((idea, i) => (
              <motion.li
                key={idea}
                className="flex items-start gap-3.5 text-[15px] leading-relaxed"
                style={{ color: "rgba(0,0,0,0.6)" }}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 * i,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.span
                  className="inline-block mt-1.75 w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: "#111" }}
                  whileHover={{ scale: 1.5, background: "var(--accent)" }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                />
                <span>{idea}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* ── Divider ── */}
        <motion.div
          className="h-px w-full mb-12"
          style={{ background: "linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* ── Other projects ── */}
        {otherProjects.length > 0 && (
          <section>
            <SectionHeading icon={Layers} delay={0.05}>
              Other projects
            </SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherProjects.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* bottom breathing room */}
        <div className="h-24" />
      </main>

      {/* Noise overlay — shared with main site */}
      <div className="noise-overlay" />
    </div>
  );
}
