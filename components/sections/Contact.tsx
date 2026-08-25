"use client";

import { useState, type FormEvent } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { socials } from "@/data/socials";

import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  GitBranch,
  Globe,
  Mail,
} from "lucide-react";

const CONTACT_EMAIL = "artinprojects.2026@gmail.com";

const socialIconMap: Record<string, React.ReactNode> = {
  GitHub: <GitBranch size={18} />,
  LinkedIn: <Globe size={18} />,
  Email: <Mail size={18} />,
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const { lang } = useLanguage();
  const tr = t(lang);

  const isRtl = lang === "fa";

  const textFont = isRtl
    ? {
        fontFamily:
          "var(--font-vazirmatn), var(--font-inter), sans-serif",
      }
    : undefined;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const emailSubject = subject || "New Portfolio Contact";

    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      "",
      "------------------------------",
      "Sent from Mahdi Portfolio",
    ].join("\n");

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(emailSubject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    try {
      window.location.href = mailtoUrl;

      await new Promise((resolve) => setTimeout(resolve, 500));

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label={tr.contact.label}
            title={tr.contact.title}
            description={tr.contact.description}
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          {/* Form */}
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]"
                    style={textFont}
                  >
                    {tr.contact.name}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                    placeholder={tr.contact.namePlaceholder}
                    style={textFont}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]"
                  >
                    {tr.contact.email}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                    placeholder={tr.contact.emailPlaceholder}
                    style={textFont}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]"
                  style={textFont}
                >
                  {tr.contact.subject}
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder={tr.contact.subjectPlaceholder}
                  style={textFont}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]"
                  style={textFont}
                >
                  {tr.contact.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                  placeholder={tr.contact.messagePlaceholder}
                  style={textFont}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] shadow-[var(--shadow-md)] transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                style={textFont}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {tr.contact.sending}
                  </>
                ) : (
                  <>
                    <Send
                      size={16}
                      className={isRtl ? "rotate-180" : ""}
                    />
                    {tr.contact.send}
                  </>
                )}
              </button>

              {/* Success */}
              {status === "success" && (
                <div
                  className="flex items-center gap-2 rounded-xl border border-[var(--color-success)]/20 bg-[var(--color-success)]/5 p-3 text-sm text-[var(--color-success)]"
                  style={textFont}
                  role="status"
                >
                  <CheckCircle size={16} />

                  <span>
                    {tr.contact.success}
                  </span>
                </div>
              )}

              {/* Error */}
              {status === "error" && (
                <div
                  className="flex items-center gap-2 rounded-xl border border-[var(--color-error)]/20 bg-[var(--color-error)]/5 p-3 text-sm text-[var(--color-error)]"
                  style={textFont}
                  role="alert"
                >
                  <AlertCircle size={16} />

                  <span>
                    {tr.contact.error}
                  </span>
                </div>
              )}
            </form>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {/* Get in touch */}
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
                <h3
                  className="text-sm font-bold text-[var(--color-text-primary)]"
                  style={textFont}
                >
                  {tr.contact.getInTouch}
                </h3>

                <p
                  className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]"
                  style={textFont}
                >
                  {tr.contact.getInTouchDesc}
                </p>

                {/* Direct Email */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-5 flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[var(--shadow-sm)]"
                >
                  <Mail size={18} />
                  <span className="break-all">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.url.startsWith("mailto")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.url.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[var(--shadow-sm)]"
                  >
                    {socialIconMap[social.icon]}
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}