import { forwardRef, HTMLAttributes } from "react";
import { colors } from "@/design-system/colors";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "error";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantStyles: Record<BadgeVariant, string> = {
  default: `bg-[${colors.textDim}] text-white`,
  accent: `bg-[${colors.accent}] text-white`,
  success: `bg-[${colors.success}] text-white`,
  warning: `bg-[${colors.warning}] text-black`,
  error: `bg-[${colors.error}] text-white`,
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className = "", variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
---