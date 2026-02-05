"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme, themes, ThemeVersion } from "@/context/ThemeContext";

export function VersionSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { version, setVersion } = useTheme();
  const router = useRouter();

  const handleVersionChange = (newVersion: ThemeVersion) => {
    setVersion(newVersion);
    router.push(`/${newVersion}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
        style={{
          background: isOpen ? 'var(--foreground)' : 'var(--accent)',
          color: 'var(--background)',
        }}
        aria-label="Theme selector"
      >
        {isOpen ? <X size={20} /> : <Palette size={20} />}
      </motion.button>

      {/* Selector panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 p-4 rounded-2xl glass-card min-w-[240px]"
            style={{ 
              background: 'var(--background-card)',
              border: '1px solid var(--card-border)',
            }}
          >
            <p 
              className="text-xs font-mono uppercase tracking-wider mb-3"
              style={{ color: 'var(--foreground-dim)' }}
            >
              Design Variation
            </p>

            <div className="space-y-2">
              {themes.map((theme) => (
                <motion.button
                  key={theme.version}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleVersionChange(theme.version)}
                  className={`w-full p-3 rounded-xl text-left transition-all duration-200 flex items-center gap-3 ${
                    version === theme.version 
                      ? 'ring-1' 
                      : ''
                  }`}
                  style={{
                    background: version === theme.version 
                      ? 'var(--accent-glow)' 
                      : 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  {/* Version indicator */}
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                    style={{
                      background: version === theme.version 
                        ? 'var(--accent)' 
                        : 'rgba(255, 255, 255, 0.05)',
                      color: version === theme.version 
                        ? 'var(--background)' 
                        : 'var(--foreground-muted)',
                    }}
                  >
                    {theme.version}
                  </div>

                  <div className="flex-1">
                    <p 
                      className="font-medium text-sm"
                      style={{ 
                        color: version === theme.version 
                          ? 'var(--accent)' 
                          : 'var(--foreground)' 
                      }}
                    >
                      {theme.name}
                    </p>
                    <p 
                      className="text-xs"
                      style={{ color: 'var(--foreground-dim)' }}
                    >
                      {theme.accentName}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
}
