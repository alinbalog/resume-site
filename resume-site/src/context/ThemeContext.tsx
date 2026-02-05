"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeVersion = "1" | "2" | "3" | "4" | "5";

export interface ThemeConfig {
  version: ThemeVersion;
  name: string;
  description: string;
  accentName: string;
}

export const themes: ThemeConfig[] = [
  { version: "1", name: "Minimal", description: "Dark premium minimal", accentName: "Emerald" },
  { version: "2", name: "Neon", description: "Dark premium with neon accents", accentName: "Cyan" },
  { version: "3", name: "Geometric", description: "Dark premium editorial", accentName: "Purple" },
  { version: "4", name: "Gradient", description: "Dark premium with soft gradients", accentName: "Coral" },
  { version: "5", name: "Brutalist", description: "Dark premium brutalist", accentName: "Yellow" },
];

interface ThemeContextType {
  version: ThemeVersion;
  setVersion: (v: ThemeVersion) => void;
  config: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  initialVersion = "1",
}: {
  children: React.ReactNode;
  initialVersion?: ThemeVersion;
}) {
  const [version, setVersion] = useState<ThemeVersion>(initialVersion);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", version);
  }, [version]);

  const config = themes.find((t) => t.version === version) || themes[0];

  return (
    <ThemeContext.Provider value={{ version, setVersion, config }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
