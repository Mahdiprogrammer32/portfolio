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
      { name: "HTML5", description: "Semantic markup and accessibility" },
      { name: "CSS3", description: "Modern layouts, animations, responsive design" },
      { name: "JavaScript", description: "ES6+, DOM, async patterns" },
      { name: "TypeScript", description: "Type-safe development at scale" },
      { name: "Tailwind CSS", description: "Utility-first rapid UI development" },
      { name: "React", description: "Component architecture and state management" },
      { name: "Next.js", description: "Full-stack React with SSR/SSG" },
      { name: "Alpine.js", description: "Lightweight reactive interfaces" },
      { name: "Vite", description: "Fast build tooling and HMR" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "PHP", description: "Server-side logic and scripting" },
      { name: "Laravel", description: "Enterprise-grade PHP framework" },
      { name: "Node.js", description: "JavaScript runtime for server apps" },
      { name: "REST API", description: "Designing and building RESTful services" },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL", description: "Relational database design and optimization" },
      { name: "SQL", description: "Complex queries, indexing, performance" },
      { name: "Database Design", description: "Schema design, normalization, migrations" },
    ],
  },
  {
    category: "DevOps",
    icon: "Terminal",
    skills: [
      { name: "Git", description: "Version control and collaboration workflows" },
      { name: "Docker", description: "Containerized development and deployment" },
      { name: "Linux", description: "Server administration and shell scripting" },
      { name: "CI/CD", description: "Automated testing and deployment pipelines" },
      { name: "Deployment", description: "Production deployment and monitoring" },
    ],
  },
  {
    category: "Security",
    icon: "Shield",
    skills: [
      { name: "Authentication", description: "Secure user identity management" },
      { name: "Authorization", description: "Role-based access control systems" },
      { name: "API Security", description: "Token validation, rate limiting, CORS" },
      { name: "Secure Coding", description: "Input validation, XSS/CSRF prevention" },
      { name: "Web Security", description: "OWASP best practices and hardening" },
      { name: "Network Security", description: "SSL/TLS, firewalls, secure protocols" },
    ],
  },
  {
    category: "Architecture",
    icon: "LayoutGrid",
    skills: [
      { name: "Software Architecture", description: "Scalable and maintainable system design" },
      { name: "REST Architecture", description: "RESTful API design principles" },
      { name: "System Design", description: "Distributed systems and scalability" },
      { name: "Scalable Systems", description: "Performance and growth planning" },
    ],
  },
];
