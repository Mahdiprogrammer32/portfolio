"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Monitor,
  Server,
  Database,
  Terminal,
  Shield,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Database,
  Terminal,
  Shield,
  LayoutGrid,
};

export function Skills() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label={tr.skills.label}
            title={tr.skills.title}
            description={tr.skills.description}
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIdx) => {
            const Icon = iconMap[cat.icon] ?? Monitor;
            return (
              <AnimatedSection key={cat.category} delay={catIdx * 0.05}>
                <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-200 hover:shadow-[var(--shadow-md)] hover:border-[var(--color-accent-medium)]">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div key={skill.name}>
                        <p className="text-sm font-medium text-[var(--color-text-primary)]">
                          {skill.name}
                        </p>
                        <p className="text-xs text-[var(--color-text-muted)]">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
