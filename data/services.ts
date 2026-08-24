export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end development of modern web applications with scalable backends and responsive frontends.",
    icon: "Layers",
  },
  {
    title: "Laravel Development",
    description: "Scalable Laravel applications, APIs and enterprise systems built with proven architecture patterns.",
    icon: "Server",
  },
  {
    title: "React / Next.js Development",
    description: "Modern, responsive and performant user interfaces with React and Next.js.",
    icon: "Monitor",
  },
  {
    title: "API Development",
    description: "Secure, well-documented REST APIs designed for reliability and scale.",
    icon: "Plug",
  },
  {
    title: "Software Architecture",
    description: "Maintainable and scalable application architecture designed for growth.",
    icon: "LayoutGrid",
  },
  {
    title: "Security",
    description: "Secure authentication, authorization and application security from the ground up.",
    icon: "Shield",
  },
];
