"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { IdentityCard } from "./IdentityCard";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ContactSection } from "./ContactSection";
import { VersionSelector } from "./VersionSelector";
import { useTheme } from "@/context/ThemeContext";

export function ResumePage() {
  const { version } = useTheme();

  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div 
      className="min-h-screen"
      style={{ background: 'var(--background)' }}
    >
      {/* Desktop layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left section - Fixed Identity */}
        <div className="w-[30%] min-w-[320px] max-w-[400px] h-screen p-6 sticky top-0">
          <IdentityCard />
        </div>

        {/* Right section - Scrollable content */}
        <div className="flex-1 p-6 pl-0">
          <div className="max-w-3xl space-y-6">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
            
            {/* Footer spacer */}
            <div className="h-12" />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden">
        {/* Identity card at top */}
        <div className="p-4 pb-0">
          <div className="h-[500px]">
            <IdentityCard />
          </div>
        </div>

        {/* Scrollable cards */}
        <div className="p-4 space-y-4">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />

          {/* Footer spacer for mobile */}
          <div className="h-20" />
        </div>
      </div>

      {/* Version selector */}
      <VersionSelector />

      {/* Version-specific background decorations */}
      {version === "2" && (
        <>
          <div 
            className="fixed top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'var(--accent)', opacity: 0.03 }}
          />
          <div 
            className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'var(--accent)', opacity: 0.03 }}
          />
        </>
      )}

      {version === "3" && (
        <>
          {/* Geometric grid pattern */}
          <div 
            className="fixed inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(var(--accent) 1px, transparent 1px),
                linear-gradient(90deg, var(--accent) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </>
      )}

      {version === "4" && (
        <>
          {/* Gradient blobs */}
          <div 
            className="fixed top-1/4 -left-32 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
            style={{ background: 'var(--accent)', opacity: 0.05 }}
          />
          <div 
            className="fixed bottom-1/4 -right-32 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
            style={{ background: 'var(--accent)', opacity: 0.05 }}
          />
        </>
      )}
    </div>
  );
}
