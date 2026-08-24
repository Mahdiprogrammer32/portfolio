interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

const variants = {
  default: "bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]",
  accent: "bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent-medium)]",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
