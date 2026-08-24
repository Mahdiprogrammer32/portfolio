"use client";

import { useState, useEffect } from "react";
import { useAdminAuth } from "@/components/admin/AdminAuth";
import { useProjectManager } from "@/components/admin/ProjectManager";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { adminT } from "@/i18n/admin";
import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  LayoutGrid,
  RotateCcw,
  ChevronLeft,
  Globe,
  Sun,
  Moon,
  ExternalLink,
  Images,
} from "lucide-react";

export default function AdminPage() {
  const { logout } = useAdminAuth();
  const { projects, deleteProject, resetToDefaults } = useProjectManager();
  const { lang, setLang } = useLanguage();
  const { theme, toggle: toggleTheme } = useThemeCompat();
  const tr = t(lang);
  const admin = adminT(lang);
  const isRtl = lang === "fa";

  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const textFont = isRtl ? { fontFamily: "var(--font-vazirmatn), var(--font-inter), sans-serif" } : undefined;

  const handleDelete = (id: string) => {
    if (confirmDelete === id) {
      deleteProject(id);
      setConfirmDelete(null);
    } else {
      setConfirmDelete(id);
      setTimeout(() => setConfirmDelete(null), 5000);
    }
  };

  const handleReset = () => {
    if (confirmReset) {
      resetToDefaults();
      setConfirmReset(false);
    } else {
      setConfirmReset(true);
      setTimeout(() => setConfirmReset(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              {isRtl ? <ChevronLeft size={16} className="rotate-180" /> : <ChevronLeft size={16} />}
              {admin.portfolio}
            </a>
            <span className="text-[var(--color-border)]">|</span>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text-primary)]" style={textFont}>
              <LayoutGrid size={16} />
              {admin.dashboard}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setLang(lang === "en" ? "fa" : "en")}
              className="flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
            >
              <Globe size={14} />
              {lang === "en" ? "FA" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
              aria-label={`Theme`}
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={logout}
              className="flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-error)]/10 hover:text-[var(--color-error)]"
              style={textFont}
            >
              <LogOut size={14} />
              {admin.logout}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-5 py-8">
        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
            <p className="text-xs text-[var(--color-text-muted)]" style={textFont}>{admin.totalProjects}</p>
            <p className="mt-1 text-2xl font-bold text-[var(--color-accent)]">{projects.length}</p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
            <p className="text-xs text-[var(--color-text-muted)]" style={textFont}>{admin.storage}</p>
            <p className="mt-1 text-2xl font-bold text-[var(--color-accent)]">{admin.storageVal}</p>
          </div>
          <div className="col-span-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:col-span-1">
            <p className="text-xs text-[var(--color-text-muted)]" style={textFont}>{admin.status}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-success)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" />
              {admin.active}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]" style={textFont}>
            {admin.projects} ({projects.length})
          </h2>

          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-warning)] hover:text-[var(--color-warning)]"
              style={textFont}
            >
              <RotateCcw size={14} />
              {confirmReset ? admin.clickToConfirm : admin.resetToDefaults}
            </button>
            <a
              href="/admin/project/?id=new"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-[var(--color-bg)] transition-all hover:opacity-90"
              style={textFont}
            >
              <Plus size={14} />
              {admin.addProject}
            </a>
          </div>
        </div>

        {/* Project list */}
        {projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center">
            <LayoutGrid size={40} className="mx-auto text-[var(--color-text-muted)]" />
            <p className="mt-4 text-sm text-[var(--color-text-muted)]" style={textFont}>
              {admin.noProjects}
            </p>
            <a
              href="/admin/project/?id=new"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-[var(--color-bg)] transition-all hover:opacity-90"
              style={textFont}
            >
              <Plus size={14} />
              {admin.addProject}
            </a>
          </div>
        ) : (
          <div className="space-y-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:shadow-[var(--shadow-md)] sm:items-center"
              >
                {/* Thumbnail */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] font-mono text-sm font-bold text-[var(--color-accent)]">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  ) : (
                    project.title.charAt(0)
                  )}
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-[var(--color-text-primary)]">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-[var(--color-text-muted)]" style={textFont}>
                    {project.category}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] px-2 py-0.5 text-[10px] text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] text-[var(--color-text-muted)]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                    {project.images && project.images.length > 0 && (
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] px-2 py-0.5 text-[10px] text-[var(--color-text-muted)]">
                        <Images size={10} />
                        {project.images.length}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-1.5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={`/admin/project/?id=${project.id}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
                    aria-label="Edit"
                  >
                    <Pencil size={14} />
                  </a>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                      confirmDelete === project.id
                        ? "bg-[var(--color-error)]/10 text-[var(--color-error)]"
                        : "text-[var(--color-text-muted)] hover:bg-[var(--color-error)]/10 hover:text-[var(--color-error)]"
                    }`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function useThemeCompat() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored ?? (prefersDark ? "dark" : "light"));
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  return { theme, toggle };
}
