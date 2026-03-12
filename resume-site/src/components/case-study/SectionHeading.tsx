"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  icon: LucideIcon;
  children: ReactNode;
  delay?: number;
}

export function SectionHeading({
  icon: Icon,
  children,
  delay = 0,
}: Readonly<SectionHeadingProps>) {
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
