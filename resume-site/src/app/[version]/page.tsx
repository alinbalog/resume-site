"use client";

import { useParams } from "next/navigation";
import { ThemeProvider, ThemeVersion } from "@/context/ThemeContext";
import { ResumePage } from "@/components/ResumePage";

export default function VersionPage() {
  const params = useParams();
  const version = (params.version as ThemeVersion) || "1";

  // Validate version
  const validVersions: ThemeVersion[] = ["1", "2", "3", "4", "5"];
  const safeVersion = validVersions.includes(version) ? version : "1";

  return (
    <ThemeProvider initialVersion={safeVersion}>
      <ResumePage />
    </ThemeProvider>
  );
}
