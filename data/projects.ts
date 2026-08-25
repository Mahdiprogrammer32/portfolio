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
  longDescription: string[];
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
    id: "OnlineShop",

    title: "Modern E-Commerce Platform",

    category: "E-Commerce",

    description:
      "A modern and interactive e-commerce platform built with Next.js, React, and TypeScript, focused on performance, user experience, responsive design, and scalable frontend architecture.",

    longDescription: [
      "A modern and interactive e-commerce platform built with Next.js, React, and TypeScript, designed with a strong focus on user experience, performance, maintainability, and scalability.",

      "The project implements a component-based frontend architecture with reusable UI components and a modular structure, making the application easier to maintain and extend.",

      "The storefront provides core e-commerce functionality including product browsing, product details, categories, search, filtering, and shopping cart management.",

      "The interface follows a responsive design approach to provide a consistent experience across desktop, tablet, and mobile devices.",

      "TypeScript is used throughout the project to improve type safety, maintainability, and development reliability.",

      "The architecture is also prepared for future integration with backend services and additional e-commerce capabilities such as authentication, order management, online payments, inventory management, favorites, and an administration panel.",

      "This project demonstrates practical experience in building modern, scalable, and production-oriented web interfaces using the React and Next.js ecosystem.",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
    ],

    features: [
      "Product Listing",
      "Product Details",
      "Product Categories",
      "Product Search",
      "Product Filtering",
      "Shopping Cart",
      "Add to Cart",
      "Remove from Cart",
      "Cart Quantity Management",
      "Cart Total Calculation",
      "Responsive Design",
      "Desktop, Tablet and Mobile Support",
      "Modern Interactive UI",
      "Reusable Components",
      "Component-Based Architecture",
      "Type-Safe Development with TypeScript",
      "Optimized Next.js Pages",
    ],

    architecture: [
      "Next.js App Router",
      "React Component-Based Architecture",
      "Reusable UI Components",
      "TypeScript Type Safety",
      "Modular Project Structure",
      "Separation of UI and Application Logic",
      "Responsive UI Architecture",
      "Client-Side State Management",
      "Reusable Layout Architecture",
      "Scalable Frontend Structure",
    ],

    security: [
      "TypeScript-Based Type Safety",
      "Client-Side Input Validation",
      "No Sensitive Credentials Stored in the Client",
      "Secure Frontend Development Practices",
      "Separation of UI Components and Application Logic",
      "Environment-Based Configuration for Sensitive Values",
    ],

    images: [
      {
        src: "/portfolio/projects/online-shop/homepage.png",
        alt: "Modern E-Commerce Platform homepage",
        caption: "Modern responsive e-commerce homepage",
      },
 
      {
        src: "/portfolio/projects/online-shop/home1.webp",
        alt: "E-Commerce home page",
        caption: "E-commerce homepage section",
      },
      {
        src: "/portfolio/projects/online-shop/home2.webp",
        alt: "E-Commerce home page section",
        caption: "Modern storefront interface",
      },
      {
        src: "/portfolio/projects/online-shop/products.webp",
        alt: "E-Commerce products page on laptop",
        caption: "Responsive product listing experience",
      },
    ],
  },
];