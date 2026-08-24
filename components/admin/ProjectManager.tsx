"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { projects as defaultProjects, type Project } from "@/data/projects";

interface ProjectManagerContextValue {
  projects: Project[];
  addProject: (project: Omit<Project, "id">) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
  resetToDefaults: () => void;
  isLoaded: boolean;
}

const STORAGE_KEY = "mahdi_portfolio_projects";

const ProjectManagerContext = createContext<ProjectManagerContextValue | null>(null);

function generateId(): string {
  return `proj_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function loadProjects(): Project[] {
  if (typeof window === "undefined") return [...defaultProjects];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // corrupted data, use defaults
  }
  return [...defaultProjects];
}

function saveProjects(projects: Project[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch {
    // storage full or unavailable
  }
}

export function ProjectManagerProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setProjects(loadProjects());
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveProjects(projects);
    }
  }, [projects, isLoaded]);

  const addProject = useCallback((project: Omit<Project, "id">) => {
    const newProject: Project = { ...project, id: generateId() };
    setProjects((prev) => [newProject, ...prev]);
  }, []);

  const updateProject = useCallback((id: string, updates: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  }, []);

  const deleteProject = useCallback((id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const getProject = useCallback(
    (id: string) => projects.find((p) => p.id === id),
    [projects]
  );

  const resetToDefaults = useCallback(() => {
    setProjects([...defaultProjects]);
  }, []);

  return (
    <ProjectManagerContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        getProject,
        resetToDefaults,
        isLoaded,
      }}
    >
      {children}
    </ProjectManagerContext.Provider>
  );
}

export function useProjectManager() {
  const ctx = useContext(ProjectManagerContext);
  if (!ctx) {
    throw new Error("useProjectManager must be used within ProjectManagerProvider");
  }
  return ctx;
}
