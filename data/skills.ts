export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      {
        name: "HTML5",
        description: "Semantic markup and accessible web structure",
      },
      {
        name: "CSS3",
        description: "Modern layouts, animations, responsive design",
      },
      {
        name: "JavaScript",
        description: "ES6+, DOM manipulation, async programming",
      },
      {
        name: "TypeScript",
        description: "Type-safe application development at scale",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first responsive interface development",
      },
      {
        name: "React",
        description: "Component architecture and state management",
      },
      {
        name: "Next.js",
        description: "Production React applications with SSR and SSG",
      },
      {
        name: "Alpine.js",
        description: "Lightweight reactive UI development",
      },
      {
        name: "Vite",
        description: "Fast frontend tooling, HMR and optimized builds",
      },
    ],
  },

  {
    category: "Backend",
    icon: "Server",
    skills: [
      {
        name: "PHP",
        description: "Server-side application development",
      },
      {
        name: "Laravel",
        description: "Modern PHP framework for scalable web applications",
      },
      {
        name: "Node.js",
        description: "JavaScript runtime for backend applications",
      },
      {
        name: "REST API",
        description: "Designing and building production-ready REST APIs",
      },
      {
        name: "ASP.NET",
        description: "Microsoft web framework for backend applications",
      },
      {
        name: "ASP.NET Core",
        description: "Cross-platform high-performance web development",
      },
      {
        name: "C#",
        description: "Object-oriented application and backend development",
      },
    ],
  },

  {
    category: "Android Development",
    icon: "Smartphone",
    skills: [
      {
        name: "Android",
        description: "Native Android application development",
      },
      {
        name: "Kotlin",
        description: "Modern Android development with Kotlin",
      },
      {
        name: "Java",
        description: "Android and object-oriented application development",
      },
      {
        name: "XML",
        description: "Android layouts and interface definition",
      },
      {
        name: "Android SDK",
        description: "Native Android APIs and platform integration",
      },
    ],
  },

  {
    category: "Telegram & Automation",
    icon: "Bot",
    skills: [
      {
        name: "Telegram Bots",
        description: "Development of automated Telegram bot systems",
      },
      {
        name: "Telegram Bot API",
        description: "Bot APIs, commands, updates and integrations",
      },
      {
        name: "Bot Automation",
        description: "Automated workflows and service integrations",
      },
      {
        name: "Webhooks",
        description: "Event-driven integrations and real-time updates",
      },
      {
        name: "API Integration",
        description: "Connecting applications with external services",
      },
    ],
  },

  {
    category: "Database",
    icon: "Database",
    skills: [
      {
        name: "MySQL",
        description: "Relational database design and optimization",
      },
      {
        name: "SQL",
        description: "Complex queries, indexing and performance optimization",
      },
      {
        name: "Database Design",
        description: "Schema design, normalization and migrations",
      },
      {
        name: "Eloquent ORM",
        description: "Laravel database modeling and query optimization",
      },
    ],
  },

  {
    category: "DevOps",
    icon: "Terminal",
    skills: [
      {
        name: "Git",
        description: "Version control and collaborative development",
      },
      {
        name: "GitHub",
        description: "Repository management, collaboration and CI/CD",
      },
      {
        name: "Docker",
        description: "Containerized development and deployment",
      },
      {
        name: "Linux",
        description: "Server administration and shell scripting",
      },
      {
        name: "CI/CD",
        description: "Automated testing and deployment pipelines",
      },
      {
        name: "Deployment",
        description: "Production deployment and application delivery",
      },
    ],
  },

  {
    category: "Security",
    icon: "Shield",
    skills: [
      {
        name: "Authentication",
        description: "Secure user identity and authentication systems",
      },
      {
        name: "Authorization",
        description: "Role-based access control and permissions",
      },
      {
        name: "API Security",
        description: "Token validation, rate limiting and CORS security",
      },
      {
        name: "Secure Coding",
        description: "Input validation and secure application practices",
      },
      {
        name: "Web Security",
        description: "OWASP principles and application hardening",
      },
      {
        name: "Network Security",
        description: "Secure protocols, firewalls and network protection",
      },
      {
        name: "Kali Linux",
        description: "Security testing and network security tooling",
      },
    ],
  },

  {
    category: "Architecture",
    icon: "LayoutGrid",
    skills: [
      {
        name: "Software Architecture",
        description: "Scalable and maintainable system architecture",
      },
      {
        name: "REST Architecture",
        description: "RESTful API architecture and design principles",
      },
      {
        name: "System Design",
        description: "Designing reliable and scalable software systems",
      },
      {
        name: "Scalable Systems",
        description: "Performance, scalability and growth planning",
      },
      {
        name: "SOLID Principles",
        description: "Maintainable object-oriented software design",
      },
      {
        name: "Clean Architecture",
        description:
          "Separation of concerns and maintainable application structure",
      },
    ],
  },
];
