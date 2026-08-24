"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Search, Compass, Code2, Rocket } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const stepIcons = [Search, Compass, Code2, Rocket];

export function EngineeringApproach() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  const textFont = isRtl ? { fontFamily: "var(--font-vazirmatn), var(--font-inter), sans-serif" } : undefined;

  return (
    <section id="approach" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label={tr.approach.label}
            title={tr.approach.title}
            description={tr.approach.description}
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tr.approach.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-200 hover:shadow-[var(--shadow-md)]">
                  {/* Step number */}
                  <span className="font-mono text-3xl font-bold text-[var(--color-accent)]/20">
                    0{i + 1}
                  </span>

                  <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[var(--color-text-primary)]" style={textFont}>
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]" style={textFont}>
                    {step.desc}
                  </p>

                  {/* Connecting line for desktop */}
                  {i < tr.approach.steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-px w-4 bg-[var(--color-border)] lg:block" />
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
