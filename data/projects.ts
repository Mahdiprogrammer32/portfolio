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
      "A modern e-commerce platform built with Laravel and Vite, focused on product management, shopping cart functionality, responsive design, and a maintainable web application architecture.",

    longDescription: [
      "A modern e-commerce platform developed with Laravel and Vite, designed to provide a clean, responsive, and practical online shopping experience.",

      "The application implements core e-commerce functionality including product management, product categories, product details, pricing, inventory quantity, and shopping cart management.",

      "The project uses Laravel as the backend framework and Vite as the frontend asset build tool, providing a structured development environment and an efficient asset pipeline.",

      "The interface follows a responsive design approach to provide a consistent experience across desktop, tablet, and mobile devices.",

      "The application is structured to keep business logic, data management, and presentation concerns organized and maintainable.",

      "The architecture is prepared for future expansion with additional e-commerce capabilities such as advanced product variants, color and size management, online payment integration, order management, customer accounts, favorites, and more advanced inventory functionality.",

      "This project demonstrates practical experience in building real-world e-commerce applications using Laravel, PHP, MySQL, and modern frontend tooling.",
    ],

    technologies: [
      "Laravel",
      "PHP",
      "Vite",
      "JavaScript",
      "MySQL",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
    ],

    features: [
      "Product Management",
      "Product Listing",
      "Product Details",
      "Product Categories",
      "Product Description",
      "Product Pricing",
      "Inventory Quantity Management",
      "Shopping Cart",
      "Add to Cart",
      "Remove from Cart",
      "Cart Quantity Management",
      "Cart Total Calculation",
      "User Management",
      "Category Management",
      "Responsive Design",
      "Desktop, Tablet and Mobile Support",
      "Modern Interactive UI",
      "Server-Side Application Architecture",
      "Laravel-Based Backend",
      "Vite Asset Build Pipeline",
    ],

    architecture: [
      "Laravel MVC Architecture",
      "Server-Side Application Architecture",
      "Blade-Based Frontend",
      "Modular Laravel Structure",
      "Separation of Application Logic and Presentation",
      "Reusable Blade Components",
      "Eloquent ORM",
      "MySQL Relational Database",
      "Vite Asset Pipeline",
      "Maintainable and Extensible Project Structure",
    ],

    security: [
      "Laravel Authentication and Authorization Practices",
      "CSRF Protection",
      "Server-Side Input Validation",
      "Request Validation",
      "Eloquent ORM for Database Interaction",
      "Protection Against Mass Assignment",
      "Environment-Based Configuration",
      "No Sensitive Credentials Stored in Source Code",
    ],

    images: [
      {
        src: "/portfolio/projects/online-shop/homepage.png",
        alt: "Modern Laravel E-Commerce Platform homepage",
        caption: "Modern responsive e-commerce homepage",
      },
      {
        src: "/portfolio/projects/online-shop/home1.webp",
        alt: "Laravel e-commerce homepage section",
        caption: "E-commerce homepage section",
      },
      {
        src: "/portfolio/projects/online-shop/home2.webp",
        alt: "Laravel e-commerce storefront interface",
        caption: "Modern storefront interface",
      },
      {
        src: "/portfolio/projects/online-shop/products.webp",
        alt: "Laravel e-commerce products page",
        caption: "Responsive product listing experience",
      },
    ],
  },
];