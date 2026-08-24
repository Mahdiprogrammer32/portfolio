"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useProjectManager } from "@/components/admin/ProjectManager";
import { useLanguage } from "@/components/LanguageProvider";
import { adminT } from "@/i18n/admin";
import { type ProjectImage } from "@/data/projects";
import {
  ArrowLeft,
  Save,
  Upload,
  X,
  Plus,
  ChevronLeft,
} from "lucide-react";

export default function ProjectFormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { getProject, addProject, updateProject } = useProjectManager();
  const { lang } = useLanguage();
  const admin = adminT(lang);
  const isRtl = lang === "fa";

  const id = searchParams.get("id");
  const isNew = !id || id === "new";
  const existing = id && id !== "new" ? getProject(id) : undefined;

  const textFont = isRtl ? { fontFamily: "var(--font-vazirmatn), var(--font-inter), sans-serif" } : undefined;

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    longDescription: "",
    technologies: "",
    features: "",
    architecture: "",
    security: "",
    github: "",
    demo: "",
  });

  const [images, setImages] = useState<ProjectImage[]>([]);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (existing) {
      setForm({
        title: existing.title,
        category: existing.category,
        description: existing.description,
        longDescription: existing.longDescription,
        technologies: existing.technologies.join(", "),
        features: existing.features.join("\n"),
        architecture: existing.architecture.join("\n"),
        security: existing.security.join("\n"),
        github: existing.github ?? "",
        demo: existing.demo ?? "",
      });
      setImages(existing.images ?? []);
    }
  }, [existing]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.size > 2 * 1024 * 1024) {
        alert(`"${file.name}" ${admin.imageTooLarge}`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImages((prev) => [
          ...prev,
          { src: result, alt: file.name.replace(/\.[^.]+$/, ""), caption: "" },
        ]);
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const updateImage = (index: number, field: keyof ProjectImage, value: string) => {
    setImages((prev) =>
      prev.map((img, i) => (i === index ? { ...img, [field]: value } : img))
    );
  };

  const moveImage = (from: number, to: number) => {
    if (to < 0 || to >= images.length) return;
    setImages((prev) => {
      const arr = [...prev];
      const [item] = arr.splice(from, 1);
      arr.splice(to, 0, item);
      return arr;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const projectData = {
      title: form.title,
      category: form.category,
      description: form.description,
      longDescription: form.longDescription,
      technologies: form.technologies.split(",").map((t) => t.trim()).filter(Boolean),
      features: form.features.split("\n").map((f) => f.trim()).filter(Boolean),
      architecture: form.architecture.split("\n").map((a) => a.trim()).filter(Boolean),
      security: form.security.split("\n").map((s) => s.trim()).filter(Boolean),
      github: form.github || undefined,
      demo: form.demo || undefined,
      images,
    };

    if (isNew) {
      addProject(projectData);
    } else if (id) {
      updateProject(id, projectData);
    }

    setSaved(true);
    setTimeout(() => router.push("/admin"), 800);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-5">
          <a
            href="/admin"
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
            style={textFont}
          >
            {isRtl ? <ChevronLeft size={16} className="rotate-180" /> : <ChevronLeft size={16} />}
            {admin.backToDashboard}
          </a>
          <h1 className="text-sm font-semibold text-[var(--color-text-primary)]" style={textFont}>
            {isNew ? admin.newProject : admin.editProject}
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-8">
        {saved && (
          <div className="mb-6 rounded-xl border border-[var(--color-success)]/20 bg-[var(--color-success)]/5 p-3 text-sm text-[var(--color-success)]" style={textFont}>
            {admin.savedSuccess}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ═══ IMAGES SECTION ═══ */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h2 className="mb-4 text-sm font-bold text-[var(--color-text-primary)]" style={textFont}>
              {admin.projectImages}
            </h2>

            {images.length > 0 && (
              <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]"
                  >
                    <div className="relative h-36">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center gap-1.5 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                        {i > 0 && (
                          <button
                            type="button"
                            onClick={() => moveImage(i, i - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                            aria-label="Move left"
                          >
                            <ChevronLeft size={14} />
                          </button>
                        )}
                        {i < images.length - 1 && (
                          <button
                            type="button"
                            onClick={() => moveImage(i, i + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                            aria-label="Move right"
                          >
                            <ChevronLeft size={14} className="rotate-180" />
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-error)] text-white opacity-0 transition-opacity group-hover:opacity-100"
                        aria-label={admin.removeImage}
                      >
                        <X size={12} />
                      </button>

                      <span className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>

                    <div className="space-y-2 p-3">
                      <input
                        type="text"
                        value={img.alt}
                        onChange={(e) => updateImage(i, "alt", e.target.value)}
                        className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5 text-xs text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent)]"
                        placeholder={admin.imageAlt}
                        style={textFont}
                      />
                      <input
                        type="text"
                        value={img.caption ?? ""}
                        onChange={(e) => updateImage(i, "caption", e.target.value)}
                        className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5 text-xs text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent)]"
                        placeholder={admin.imageCaption}
                        style={textFont}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                style={textFont}
              >
                <Upload size={16} />
                {images.length > 0 ? admin.addMoreImages : admin.uploadImage}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <p className="mt-3 text-xs text-[var(--color-text-muted)]" style={textFont}>
              {admin.imageRecommendation}
            </p>
          </div>

          {/* ═══ BASIC INFO ═══ */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h2 className="mb-4 text-sm font-bold text-[var(--color-text-primary)]" style={textFont}>
              {admin.basicInformation}
            </h2>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="title" className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]" style={textFont}>
                    {admin.projectTitle}
                  </label>
                  <input id="title" type="text" required value={form.title} onChange={(e) => update("title", e.target.value)}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                    placeholder={admin.titlePlaceholder} style={textFont}
                  />
                </div>
                <div>
                  <label htmlFor="category" className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]" style={textFont}>
                    {admin.category}
                  </label>
                  <input id="category" type="text" required value={form.category} onChange={(e) => update("category", e.target.value)}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                    placeholder={admin.categoryPlaceholder} style={textFont}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]" style={textFont}>
                  {admin.shortDescription}
                </label>
                <textarea id="description" required rows={2} value={form.description} onChange={(e) => update("description", e.target.value)}
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder={admin.shortDescPlaceholder} style={textFont}
                />
              </div>

              <div>
                <label htmlFor="longDesc" className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]" style={textFont}>
                  {admin.detailedDescription}
                </label>
                <textarea id="longDesc" rows={4} value={form.longDescription} onChange={(e) => update("longDescription", e.target.value)}
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder={admin.longDescPlaceholder} style={textFont}
                />
              </div>
            </div>
          </div>

          {/* ═══ TECHNOLOGIES ═══ */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h2 className="mb-4 text-sm font-bold text-[var(--color-text-primary)]" style={textFont}>
              {admin.technologies}
            </h2>
            <p className="mb-3 text-xs text-[var(--color-text-muted)]" style={textFont}>
              {admin.techHint}
            </p>
            <input
              type="text"
              value={form.technologies}
              onChange={(e) => update("technologies", e.target.value)}
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
              placeholder={admin.techPlaceholder}
            />
            {form.technologies && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {form.technologies.split(",").map((t) => t.trim()).filter(Boolean).map((tech, i) => (
                  <span key={i} className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)]">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ═══ DETAILS ═══ */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h2 className="mb-4 text-sm font-bold text-[var(--color-text-primary)]" style={textFont}>
              {admin.details}
            </h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="features" className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]" style={textFont}>
                  {admin.features}
                </label>
                <textarea id="features" rows={4} value={form.features} onChange={(e) => update("features", e.target.value)}
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 font-mono text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder={admin.featuresPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="architecture" className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]" style={textFont}>
                  {admin.architecture}
                </label>
                <textarea id="architecture" rows={3} value={form.architecture} onChange={(e) => update("architecture", e.target.value)}
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 font-mono text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder={admin.archPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="security" className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]" style={textFont}>
                  {admin.security}
                </label>
                <textarea id="security" rows={3} value={form.security} onChange={(e) => update("security", e.target.value)}
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 font-mono text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder={admin.securityPlaceholder}
                />
              </div>
            </div>
          </div>

          {/* ═══ LINKS ═══ */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h2 className="mb-4 text-sm font-bold text-[var(--color-text-primary)]" style={textFont}>
              {admin.links}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="github" className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]" style={textFont}>
                  {admin.githubUrl}
                </label>
                <input id="github" type="url" value={form.github} onChange={(e) => update("github", e.target.value)}
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder={admin.githubPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="demo" className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]" style={textFont}>
                  {admin.demoUrl}
                </label>
                <input id="demo" type="url" value={form.demo} onChange={(e) => update("demo", e.target.value)}
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder={admin.demoPlaceholder}
                />
              </div>
            </div>
          </div>

          {/* ═══ SUBMIT ═══ */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] shadow-[var(--shadow-md)] transition-all hover:opacity-90"
              style={textFont}
            >
              <Save size={16} />
              {isNew ? admin.createProject : admin.saveChanges}
            </button>
            <a
              href="/admin"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              style={textFont}
            >
              {admin.cancel}
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
