"use client";

import { motion } from "framer-motion";

export function Marquee({ items }: Readonly<{ items: string[] }>) {
  const row = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none border-t border-white/10">
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--background), transparent)",
        }}
      />
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
