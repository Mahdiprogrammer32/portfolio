"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  const textFont = { fontFamily: isRtl ? "var(--font-vazirmatn), var(--font-inter), sans-serif" : undefined };

  return (
    <section id="about" className="section-padding bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label={tr.about.label}
            title={tr.about.title}
          />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-[var(--color-text-secondary)] lg:text-lg" style={textFont}>
              <p>{tr.about.p1}</p>
              <p>{tr.about.p2}</p>
              <p>{tr.about.p3}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-5">
              {[
                { value: "5+", label: tr.about.stats.years },
                { value: "20+", label: tr.about.stats.techs },
                { value: "Multiple", label: tr.about.stats.projects },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 text-center"
                >
                  <p className="text-2xl font-bold text-[var(--color-accent)] lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]" style={textFont}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
