export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  architecture: string[];
  security: string[];
  github?: string;
  demo?: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "artin-admin-kit",
    title: "ARTIN Admin Kit",
    category: "Enterprise SaaS / Admin Architecture",
    description:
      "A scalable and reusable enterprise admin foundation designed for building CRM, ERP, HRM, inventory, accounting and other business management systems.",
    longDescription:
      "Built from the ground up to solve the recurring need for a robust admin panel foundation. Instead of starting from scratch for each business application, ARTIN Admin Kit provides a production-ready base with authentication, authorization, role management and license control — all following secure architecture patterns.",
    technologies: ["Laravel", "PHP", "MySQL", "Laravel Sanctum", "Spatie Permissions", "REST API"],
    features: [
      "Role-Based Access Control",
      "Authentication & Authorization",
      "License-Based Access",
      "User & Role Management",
      "Permission Management",
      "REST API",
      "Secure Architecture",
      "Automated Testing",
    ],
    architecture: [
      "Service-oriented backend architecture",
      "Repository pattern for data access",
      "API-first design with Sanctum tokens",
      "Modular permission system via Spatie",
    ],
    security: [
      "Sanctum token-based authentication",
      "Role & permission-based authorization",
      "Input validation and sanitization",
      "CSRF protection on web routes",
      "Rate limiting on API endpoints",
    ],
    images: [],
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Platform",
    category: "Full-Stack E-Commerce",
    description:
      "A modern full-stack e-commerce platform designed with a scalable backend architecture and responsive frontend.",
    longDescription:
      "A complete e-commerce solution covering product management, inventory tracking, shopping cart, pricing rules, and an admin panel. The architecture separates concerns clearly between the API layer, business logic, and presentation — making it maintainable and extensible.",
    technologies: ["Laravel", "PHP", "MySQL", "Vite", "JavaScript", "Tailwind CSS"],
    features: [
      "Product & Category Management",
      "User Management & Authentication",
      "Shopping Cart & Checkout",
      "Inventory & Stock Tracking",
      "Product Pricing & Variants",
      "Responsive UI",
      "Admin Dashboard",
      "Order Management",
    ],
    architecture: [
      "MVC with clear separation of concerns",
      "RESTful API for frontend consumption",
      "Database normalization for data integrity",
      "Component-based frontend with Vite",
    ],
    security: [
      "Secure authentication flow",
      "Input validation on all forms",
      "Protected admin routes",
      "SQL injection prevention",
      "XSS protection",
    ],
    images: [],
  },
];
