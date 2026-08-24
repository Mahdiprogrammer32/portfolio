"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Layers,
  Server,
  Monitor,
  Plug,
  LayoutGrid,
  Shield,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Server,
  Monitor,
  Plug,
  LayoutGrid,
  Shield,
};

export function Services() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  const textFont = isRtl ? { fontFamily: "var(--font-vazirmatn), var(--font-inter), sans-serif" } : undefined;

  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label={tr.services.label}
            title={tr.services.title}
            description={tr.services.description}
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Layers;
            return (
              <AnimatedSection key={service.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-200 hover:shadow-[var(--shadow-md)] hover:border-[var(--color-accent-medium)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[var(--color-text-primary)]" style={textFont}>
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]" style={textFont}>
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
