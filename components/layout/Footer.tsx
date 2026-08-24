"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { GitBranch, Globe, Mail } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <GitBranch size={18} />,
  LinkedIn: <Globe size={18} />,
  Email: <Mail size={18} />,
};

export function Footer() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  const textFont = isRtl ? { fontFamily: "var(--font-vazirmatn), var(--font-inter), sans-serif" } : undefined;

  const navLinks = [
    { label: tr.nav.about, href: "#about" },
    { label: tr.nav.skills, href: "#skills" },
    { label: tr.nav.projects, href: "#projects" },
    { label: tr.nav.experience, href: "#experience" },
    { label: tr.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-base font-bold text-[var(--color-text-primary)]">
              <span className="font-mono text-[var(--color-accent)]">&lt;</span>
              Mahdi
              <span className="font-mono text-[var(--color-accent)]">/&gt;</span>
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]" style={textFont}>
              {profile.title}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]" style={textFont}>
              {tr.footer.nav}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                    style={textFont}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]" style={textFont}>
              {tr.footer.connect}
            </p>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {iconMap[s.icon]}
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]" style={textFont}>
              {tr.footer.info}
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]" style={textFont}>
              <li>{tr.footer.location} {tr.footer.locationVal}</li>
              <li>
                {profile.available ? (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" />
                    {tr.footer.available}
                  </span>
                ) : (
                  tr.footer.notAvailable
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-border-subtle)] pt-6 text-center text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} {profile.name}. {tr.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
