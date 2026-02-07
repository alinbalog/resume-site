"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { IdentityCard } from "./IdentityCard";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsSection } from "./SkillsSection";
import { ContactSection } from "./ContactSection";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";

export function ResumePage() {
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
        <div className="w-[30%] min-w-[320px] max-w-125 h-screen p-6 sticky top-0">
          <IdentityCard />
        </div>

        {/* Right section - Scrollable content */}
        <div className="flex-1 p-6 pl-0 pr-24">
          <div className="space-y-6">
            <div id="about"><AboutSection /></div>
            <div id="experience"><ExperienceSection /></div>
            <div id="skills"><SkillsSection /></div>
            <div id="contact"><ContactSection /></div>
            
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
        <div className="p-4 space-y-4 pb-28">
          <div id="m-about"><AboutSection /></div>
          <div id="m-experience"><ExperienceSection /></div>
          <div id="m-skills"><SkillsSection /></div>
          <div id="m-contact"><ContactSection /></div>

          {/* Footer spacer for mobile */}
          <div className="h-20" />
        </div>
      </div>

      {/* Navigation */}
      <SideNav />
      <BottomNav />

      {/* Background geometric grid pattern */}
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
    </div>
  );
}
