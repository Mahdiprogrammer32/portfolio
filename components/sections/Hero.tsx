"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  const { lang } = useLanguage();
  const tr = t(lang);
  const isRtl = lang === "fa";

  const codeLines = [
    { indent: 0, tokens: [
      { text: "const ", color: "text-purple-400" },
      { text: "developer", color: "text-[var(--color-accent)]" },
      { text: " = ", color: "text-[var(--color-text-muted)]" },
      { text: "{", color: "text-[var(--color-text-muted)]" },
    ]},
    { indent: 1, tokens: [
      { text: `${tr.hero.code.name}`, color: "text-[var(--color-text-secondary)]" },
      { text: ": ", color: "text-[var(--color-text-muted)]" },
      { text: `"${tr.hero.code.nameVal}"`, color: "text-emerald-400" },
      { text: ",", color: "text-[var(--color-text-muted)]" },
    ]},
    { indent: 1, tokens: [
      { text: `${tr.hero.code.role}`, color: "text-[var(--color-text-secondary)]" },
      { text: ": ", color: "text-[var(--color-text-muted)]" },
      { text: `"${tr.hero.code.roleVal}"`, color: "text-emerald-400" },
      { text: ",", color: "text-[var(--color-text-muted)]" },
    ]},
    { indent: 1, tokens: [
      { text: `${tr.hero.code.stack}`, color: "text-[var(--color-text-secondary)]" },
      { text: ": [", color: "text-[var(--color-text-muted)]" },
      { text: `"${tr.hero.code.stackVal1}"`, color: "text-emerald-400" },
      { text: ", ", color: "text-[var(--color-text-muted)]" },
      { text: `"${tr.hero.code.stackVal2}"`, color: "text-emerald-400" },
      { text: ", ", color: "text-[var(--color-text-muted)]" },
      { text: `"${tr.hero.code.stackVal3}"`, color: "text-emerald-400" },
      { text: "]", color: "text-[var(--color-text-muted)]" },
    ]},
    { indent: 1, tokens: [
      { text: `${tr.hero.code.focus}`, color: "text-[var(--color-text-secondary)]" },
      { text: ": ", color: "text-[var(--color-text-muted)]" },
      { text: `"${tr.hero.code.focusVal}"`, color: "text-emerald-400" },
    ]},
    { indent: 0, tokens: [
      { text: "}", color: "text-[var(--color-text-muted)]" },
      { text: ";", color: "text-[var(--color-text-muted)]" },
    ]},
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid"
    >
      {/* Soft glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="section-padding relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: Content */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] shadow-[var(--shadow-sm)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] animate-pulse" />
              {tr.hero.available}
            </motion.div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]"
            >
              {tr.hero.title}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: isRtl ? "var(--font-vazirmatn), var(--font-inter), sans-serif" : undefined }}
            >
              {tr.hero.greeting}{" "}
              <span className="text-gradient">{tr.hero.name}</span>
              <span className="text-[var(--color-accent)]">.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-xl text-lg font-medium text-[var(--color-text-secondary)]"
              style={{ fontFamily: isRtl ? "var(--font-vazirmatn), var(--font-inter), sans-serif" : undefined }}
            >
              {tr.hero.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]"
              style={{ fontFamily: isRtl ? "var(--font-vazirmatn), var(--font-inter), sans-serif" : undefined }}
            >
              {tr.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] shadow-[var(--shadow-md)] transition-all duration-200 hover:opacity-90 hover:shadow-[var(--shadow-lg)]"
              >
                {tr.hero.ctaWork}
                <ArrowRight size={16} className={isRtl ? "rotate-180" : ""} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {tr.hero.ctaContact}
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 hidden items-center gap-2 text-xs text-[var(--color-text-muted)] lg:flex"
            >
              <ArrowDown size={14} className="animate-bounce" />
              {tr.hero.scrollHint}
            </motion.div>
          </div>

          {/* Right: Developer Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 rounded-3xl bg-[var(--color-accent)]/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-xl)]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs text-[var(--color-text-muted)] font-mono">
                  developer.ts
                </span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={tok.color}>
                        {tok.text}
                      </span>
                    ))}
                  </div>
                ))}
                <div className="mt-2 flex items-center gap-1">
                  <span className="h-4 w-0.5 bg-[var(--color-accent)] cursor-blink" />
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[var(--color-border)] px-5 py-3">
                <p className="text-xs text-[var(--color-text-muted)] font-mono">
                  &gt; {isRtl ? "تبدیل ایده‌ها به نرم‌افزار..." : "Building ideas into software..."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
