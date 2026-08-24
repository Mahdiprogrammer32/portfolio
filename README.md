# Mahdi — Senior Full-Stack Web Developer Portfolio

A premium, production-ready developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Premium Dark/Light Theme** — System-aware with manual toggle, persisted in localStorage
- **Fully Responsive** — Optimized for 320px to 1920px+ screens
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation, focus management, reduced motion support
- **Animated** — Scroll-triggered reveal animations with Framer Motion
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Clean Architecture** — Component-based structure with separated data files
- **Mobile-First Navigation** — Hamburger menu with smooth open/close, escape key support

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (sans-serif), JetBrains Mono (monospace)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Design tokens & global styles
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page composition
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav with scroll spy & mobile menu
│   │   └── Footer.tsx       # Footer with nav, socials, info
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with developer code visual
│   │   ├── About.tsx        # Bio & stats
│   │   ├── Skills.tsx       # Categorized skill display
│   │   ├── Projects.tsx     # Featured projects with expandable details
│   │   ├── EngineeringApproach.tsx  # 4-step process
│   │   ├── Experience.tsx   # Timeline
│   │   ├── Services.tsx     # Service cards
│   │   ├── Security.tsx     # Security capabilities
│   │   ├── GitHub.tsx       # Repository showcase
│   │   └── Contact.tsx      # Contact form & social links
│   ├── ui/
│   │   ├── AnimatedSection.tsx  # Scroll-triggered animation wrapper
│   │   ├── Badge.tsx        # Tag/label component
│   │   ├── Button.tsx       # Reusable button with variants
│   │   ├── Card.tsx         # Card with optional hover
│   │   └── SectionHeading.tsx  # Consistent section headers
│   └── ThemeProvider.tsx    # Dark/light mode context
├── data/
│   ├── profile.ts           # Personal info & stats
│   ├── projects.ts          # Project data
│   ├── skills.ts            # Skills by category
│   ├── experience.ts        # Experience timeline
│   ├── services.ts          # Services offered
│   └── socials.ts           # Social links
├── hooks/
│   ├── useInView.ts         # IntersectionObserver hook
│   └── useScrollSpy.ts      # Active section detection
└── public/
```

## Customization

All content is separated into `data/` files. Edit those files to update:

- Personal information (`data/profile.ts`)
- Projects (`data/projects.ts`)
- Skills (`data/skills.ts`)
- Experience (`data/experience.ts`)
- Services (`data/services.ts`)
- Social links (`data/socials.ts`)

## Deployment

This is a standard Next.js app. Deploy to any platform that supports Next.js:

- **Vercel:** `npx vercel`
- **Netlify:** Connect your Git repository
- **Docker:** Use the official Next.js Docker image

## License

Personal project — All rights reserved.
