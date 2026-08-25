"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import {
  projects,
  type Project,
  type ProjectImage,
} from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  GitBranch,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   Image Lightbox
═══════════════════════════════════════════════════════════════ */

function ImageLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: ProjectImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => {
    setCurrent((c) => (c > 0 ? c - 1 : images.length - 1));
  };

  const next = () => {
    setCurrent((c) => (c < images.length - 1 ? c + 1 : 0));
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain"
        />

        {images[current].caption && (
          <p className="mt-2 text-center text-sm text-white/80">
            {images[current].caption}
          </p>
        )}

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            {/* Counter */}
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
              {current + 1} / {images.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Project Card
═══════════════════════════════════════════════════════════════ */

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  const textFont = isRtl
    ? {
        fontFamily:
          "var(--font-vazirmatn), var(--font-inter), sans-serif",
      }
    : undefined;

  const hasImages = project.images && project.images.length > 0;

  return (
    <>
      <AnimatedSection>
        <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:shadow-[var(--shadow-md)]">

          {/* ═══════════════════════════════════════════════════
              Image Gallery
          ═══════════════════════════════════════════════════ */}

          {hasImages ? (
            <div className="border-b border-[var(--color-border-subtle)]">
              {/* Main image */}
              <button
                type="button"
                onClick={() => setLightbox(0)}
                className="relative block h-48 w-full overflow-hidden bg-[var(--color-surface-elevated)]"
              >
                <img
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />

                {project.images[0].caption && (
                  <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-2 text-xs text-white">
                    {project.images[0].caption}
                  </p>
                )}
              </button>

              {/* Thumbnails */}
              {project.images.length > 1 && (
                <div className="flex gap-1 overflow-x-auto p-2">
                  {project.images.map((img, i) => (
                    <button
                      type="button"
                      key={`${img.src}-${i}`}
                      onClick={() => setLightbox(i)}
                      className="h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 border-transparent transition-colors hover:border-[var(--color-accent)]"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Placeholder */
            <div className="relative h-48 border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <span className="font-mono text-lg font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  <p
                    className="text-xs text-[var(--color-text-muted)]"
                    style={textFont}
                  >
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════
              Project Content
          ═══════════════════════════════════════════════════ */}

          <div className="p-6">
            {/* Title */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  {project.title}
                </h3>

                <p
                  className="mt-1 text-xs text-[var(--color-text-muted)]"
                  style={textFont}
                >
                  {project.category}
                </p>
              </div>
            </div>

            {/* Short Description */}
            <p
              className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]"
              style={textFont}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            {/* Expand / Collapse */}
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-accent)] transition-colors hover:opacity-80"
              aria-expanded={expanded}
              style={textFont}
            >
              {expanded
                ? tr.projects.hideDetails
                : tr.projects.viewDetails}

              {expanded ? (
                <ChevronUp size={14} />
              ) : (
                <ChevronDown size={14} />
              )}
            </button>

            {/* ═════════════════════════════════════════════════
                Expanded Details
            ═════════════════════════════════════════════════ */}

            {expanded && (
              <div className="mt-4 space-y-5 border-t border-[var(--color-border-subtle)] pt-4">

                {/* Long Description */}
                <div>
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
                    style={textFont}
                  >
                    {tr.projects.about}
                  </p>

                  <div className="space-y-3">
                    {project.longDescription.map(
                      (paragraph, index) => (
                        <p
                          key={`${project.id}-description-${index}`}
                          className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                          style={textFont}
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
                    style={textFont}
                  >
                    {tr.projects.features}
                  </p>

                  <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-[var(--color-text-secondary)] before:mr-2 before:text-[var(--color-accent)] before:content-['→']"
                        style={textFont}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture */}
                <div>
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
                    style={textFont}
                  >
                    {tr.projects.architecture}
                  </p>

                  <ul className="space-y-1">
                    {project.architecture.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[var(--color-text-secondary)] before:mr-2 before:text-[var(--color-accent)] before:content-['→']"
                        style={textFont}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Security */}
                <div>
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
                    style={textFont}
                  >
                    {tr.projects.security}
                  </p>

                  <ul className="space-y-1">
                    {project.security.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[var(--color-text-secondary)] before:mr-2 before:text-[var(--color-accent)] before:content-['→']"
                        style={textFont}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expanded Gallery */}
                {hasImages && project.images.length > 1 && (
                  <div>
                    <p
                      className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
                      style={textFont}
                    >
                      Gallery
                    </p>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {project.images.map((img, i) => (
                        <button
                          type="button"
                          key={`${img.src}-gallery-${i}`}
                          onClick={() => setLightbox(i)}
                          className="overflow-hidden rounded-lg border border-[var(--color-border-subtle)]"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="h-20 w-full object-cover transition-transform duration-200 hover:scale-105"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ═════════════════════════════════════════════════
                Project Links
            ═════════════════════════════════════════════════ */}

            {(project.github || project.demo) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    <GitBranch size={14} />
                    {tr.projects.code}
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    <ExternalLink size={14} />
                    {tr.projects.demo}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════════════════════════════════════
          Lightbox
      ═══════════════════════════════════════════════════════ */}

      {lightbox !== null && hasImages && (
        <ImageLightbox
          images={project.images}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Projects Section
═══════════════════════════════════════════════════════════════ */

export function Projects() {
  const { lang } = useLanguage();
  const tr = t(lang);

  return (
    <section
      id="projects"
      className="section-padding bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <AnimatedSection>
          <SectionHeading
            label={tr.projects.label}
            title={tr.projects.title}
            description={tr.projects.description}
          />
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}