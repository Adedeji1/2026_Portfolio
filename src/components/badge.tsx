import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  icon?: ReactNode;
  size?: "sm" | "md";
  className?: string;
};

const sizes = {
  sm: "px-2 py-1 text-xs",
  md: "px-3.5 py-1.5 text-xs uppercase tracking-wider",
};

export function Badge({ children, icon, size = "md", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-accent-soft font-semibold text-accent ${sizes[size]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}