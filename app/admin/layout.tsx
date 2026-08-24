"use client";

import { useState } from "react";
import { AdminAuthProvider, useAdminAuth } from "@/components/admin/AdminAuth";
import { ProjectManagerProvider } from "@/components/admin/ProjectManager";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { adminT } from "@/i18n/admin";
import { Lock, Eye, EyeOff, Shield, Globe } from "lucide-react";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, login } = useAdminAuth();
  const { lang, setLang } = useLanguage();
  const tr = adminT(lang);
  const isRtl = lang === "fa";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const textFont = isRtl ? { fontFamily: "var(--font-vazirmatn), var(--font-inter), sans-serif" } : undefined;

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-5">
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-lg)]">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Shield size={24} />
              </div>
              <h1 className="text-lg font-bold text-[var(--color-text-primary)]" style={textFont}>
                {tr.authTitle}
              </h1>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]" style={textFont}>
                {tr.authDesc}
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setError("");
                if (!login(password)) {
                  setError(tr.invalidPassword);
                  setPassword("");
                }
              }}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="admin-password"
                  className="mb-1.5 block text-xs font-medium text-[var(--color-text-muted)]"
                  style={textFont}
                >
                  {tr.password}
                </label>
                <div className="relative">
                  <Lock
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                  />
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] py-3 pl-10 pr-11 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                    placeholder={tr.passwordPlaceholder}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                    aria-label={showPassword ? tr.hidePassword : tr.showPassword}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-xs text-[var(--color-error)]" style={textFont}>{error}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-[var(--color-accent)] py-3 text-sm font-semibold text-[var(--color-bg)] transition-all hover:opacity-90"
                style={textFont}
              >
                {tr.signIn}
              </button>
            </form>

            {/* Language toggle */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setLang(lang === "en" ? "fa" : "en")}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
              >
                <Globe size={14} />
                {lang === "en" ? "فارسی" : "English"}
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]" style={textFont}>
            <a href="/" className="hover:text-[var(--color-accent)]">
              {tr.backToPortfolio}
            </a>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AdminAuthProvider>
          <ProjectManagerProvider>
            <AuthGuard>{children}</AuthGuard>
          </ProjectManagerProvider>
        </AdminAuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
