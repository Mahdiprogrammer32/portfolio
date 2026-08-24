"use client";

import { useState, useEffect, useCallback } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { t, type Language } from "@/i18n";
import { Sun, Moon, Menu, X, Globe } from "lucide-react";

const navItemIds = ["home", "about", "skills", "projects", "experience", "services", "contact"] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(navItemIds as unknown as string[]);
  const { theme, toggle } = useTheme();
  const { lang, setLang } = useLanguage();
  const tr = t(lang);

  const navItems = [
    { id: "home", label: tr.nav.home },
    { id: "about", label: tr.nav.about },
    { id: "skills", label: tr.nav.skills },
    { id: "projects", label: tr.nav.projects },
    { id: "experience", label: tr.nav.experience },
    { id: "services", label: tr.nav.services },
    { id: "contact", label: tr.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const scrollTo = (id: string) => {
    closeMobile();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => {
    const next: Language = lang === "en" ? "fa" : "en";
    setLang(next);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 shadow-[var(--shadow-sm)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="text-base font-bold tracking-tight text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
            aria-label="Scroll to top"
          >
            <span className="font-mono text-[var(--color-accent)]">&lt;</span>
            Mahdi
            <span className="font-mono text-[var(--color-accent)]">/&gt;</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.id
                    ? "text-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-1.5">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
              aria-label={`Switch to ${lang === "en" ? "فارسی" : "English"}`}
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{lang === "en" ? "FA" : "EN"}</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)] md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-2xl font-semibold transition-colors ${
                active === item.id
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
