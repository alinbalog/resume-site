"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { resumeData } from "@/data/resume";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = resumeData.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Project not found
          </h1>
          <Link
            href="/"
            className="text-sm font-mono underline"
            style={{ color: "var(--accent)" }}
          >
            &larr; Back to resume
          </Link>
        </div>
      </div>
    );
  }

  return <CaseStudyPage project={project} />;
}
