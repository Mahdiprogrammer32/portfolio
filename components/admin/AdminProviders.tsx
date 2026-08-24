"use client";

import type { ReactNode } from "react";
import { AdminAuthProvider } from "./AdminAuth";
import { ProjectManagerProvider } from "./ProjectManager";

export function AdminProviders({ children }: { children: ReactNode }) {
  return (
    <AdminAuthProvider>
      <ProjectManagerProvider>{children}</ProjectManagerProvider>
    </AdminAuthProvider>
  );
}
