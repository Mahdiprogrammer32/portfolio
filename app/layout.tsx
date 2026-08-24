import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mahdi — Senior Full-Stack Web Developer | مهدی — توسعه‌دهنده ارشد فول‌استک",
    template: "%s | Mahdi",
  },
  description:
    "Senior Full-Stack Web Developer with 5+ years of experience building modern, scalable and secure web applications. Laravel, React, Next.js, Node.js, API Design, Database Architecture.",
  keywords: [
    "Full-Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "API Development",
    "Web Security",
    "Software Architecture",
    "Database Design",
    "DevOps",
  ],
  authors: [{ name: "Mahdi" }],
  creator: "Mahdi",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fa_IR",
    siteName: "Mahdi — Senior Full-Stack Web Developer",
    title: "Mahdi — Senior Full-Stack Web Developer",
    description:
      "Senior Full-Stack Web Developer building modern, scalable and secure web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahdi — Senior Full-Stack Web Developer",
    description:
      "Senior Full-Stack Web Developer building modern, scalable and secure web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${jetbrainsMono.variable} ${vazirmatn.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mahdi",
              jobTitle: "Senior Full-Stack Web Developer",
              description:
                "Senior Full-Stack Web Developer with 5+ years of experience.",
              url: "#",
              knowsAbout: [
                "Full-Stack Development",
                "Laravel",
                "React",
                "Next.js",
                "Node.js",
                "REST API",
                "MySQL",
                "Software Architecture",
                "Web Security",
              ],
            }),
          }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
