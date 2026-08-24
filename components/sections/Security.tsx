"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  ShieldCheck,
  KeyRound,
  Lock,
  CheckCircle,
  Shield,
  Database,
  UserCheck,
} from "lucide-react";

const items = [
  { icon: KeyRound, key: "auth" },
  { icon: UserCheck, key: "authz" },
  { icon: CheckCircle, key: "validation" },
  { icon: Shield, key: "api" },
  { icon: Database, key: "data" },
  { icon: Lock, key: "access" },
  { icon: ShieldCheck, key: "coding" },
];

const labels: Record<string, Record<string, string>> = {
  en: {
    auth: "Authentication",
    authz: "Authorization",
    validation: "Input Validation",
    api: "Secure APIs",
    data: "Data Protection",
    access: "Access Control",
    coding: "Secure Coding",
  },
  fa: {
    auth: "احراز هویت",
    authz: "مجوزدهی",
    validation: "اعتبارسنجی ورودی",
    api: "APIهای امن",
    data: "حفاظت از داده",
    access: "کنترل دسترسی",
    coding: "کدنویسی امن",
  },
};

export function Security() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  const textFont = isRtl ? { fontFamily: "var(--font-vazirmatn), var(--font-inter), sans-serif" } : undefined;

  return (
    <section id="security" className="section-padding bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label={tr.security.label}
            title={tr.security.title}
            description={tr.security.description}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 shadow-[var(--shadow-sm)]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]" style={textFont}>
                    {labels[lang][item.key]}
                  </span>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
