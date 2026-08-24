"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] transition-colors duration-[var(--duration-normal)] ${hover ? "hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-accent-medium)]" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
