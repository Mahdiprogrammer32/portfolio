"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GitBranch, ExternalLink, Star, GitFork } from "lucide-react";

const repos = [
  {
    name: "artin-admin-kit",
    description: {
      en: "Scalable enterprise admin foundation for CRM, ERP and business systems.",
      fa: "پایه مدیریتی مقیاس‌پذیر سازمانی برای CRM، ERP و سیستم‌های تجاری.",
    },
    language: "PHP",
    stars: null,
    forks: null,
    url: "https://github.com",
  },
  {
    name: "ecommerce-platform",
    description: {
      en: "Modern full-stack e-commerce with Laravel backend and responsive frontend.",
      fa: "پلتفرم تجارت الکترونیک فول‌استک مدرن با بک‌اند Laravel و فرانت‌اند واکنش‌گرا.",
    },
    language: "PHP",
    stars: null,
    forks: null,
    url: "https://github.com",
  },
];

const langColors: Record<string, string> = {
  PHP: "#4F5D95",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
};

export function GitHub() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  const textFont = isRtl ? { fontFamily: "var(--font-vazirmatn), var(--font-inter), sans-serif" } : undefined;

  return (
    <section id="github" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label={tr.github.label}
            title={tr.github.title}
            description={tr.github.description}
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <AnimatedSection key={repo.name}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-200 hover:shadow-[var(--shadow-md)] hover:border-[var(--color-accent-medium)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <GitBranch size={16} className="text-[var(--color-text-muted)]" />
                    <span className="font-mono text-sm font-semibold text-[var(--color-text-primary)]">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]"
                  />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]" style={textFont}>
                  {repo.description[lang]}
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: langColors[repo.language] ?? "#999" }}
                    />
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {repo.language}
                    </span>
                  </div>

                  {repo.stars !== null && (
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-[var(--color-text-muted)]" />
                      <span className="text-xs text-[var(--color-text-muted)]">{repo.stars}</span>
                    </div>
                  )}

                  {repo.forks !== null && (
                    <div className="flex items-center gap-1">
                      <GitFork size={12} className="text-[var(--color-text-muted)]" />
                      <span className="text-xs text-[var(--color-text-muted)]">{repo.forks}</span>
                    </div>
                  )}
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
