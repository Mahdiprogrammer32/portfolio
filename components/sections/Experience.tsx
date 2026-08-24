"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Experience() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  const textFont = isRtl ? { fontFamily: "var(--font-vazirmatn), var(--font-inter), sans-serif" } : undefined;

  return (
    <section id="experience" className="section-padding bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label={tr.experience.label}
            title={tr.experience.title}
          />
        </AnimatedSection>

        <div className="space-y-6">
          {experience.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-[var(--shadow-sm)]">
                <div className="mb-3 inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
                  {item.period}
                </div>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)]" style={textFont}>
                  {item.role}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]" style={textFont}>
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border-subtle)] px-2.5 py-0.5 text-xs text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
