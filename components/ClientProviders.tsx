"use client";

import type { ReactNode } from "react";
import { ProjectManagerProvider } from "@/components/admin/ProjectManager";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <ProjectManagerProvider>{children}</ProjectManagerProvider>;
}
