import { resumeData } from "@/data/resume";

export type Project = (typeof resumeData.projects)[number] & { liveUrl?: string };
