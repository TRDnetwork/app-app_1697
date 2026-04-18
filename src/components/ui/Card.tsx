import { forwardRef, HTMLAttributes } from "react";
import { colors } from "@/design-system/colors";
import { shadows } from "@/design-system/shadows";
import { radii } from "@/design-system/radii";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "elevated" | "outlined";
  as?: "div" | "article" | "section";
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", variant = "default", as: Tag = "div", ...props }, ref) => {
    const baseStyles = `bg-[${colors.surface}] text-[${colors.text}]`;
    const roundedStyles = `rounded-[${radii.lg}]`;
    const paddingStyles = "p-6";

    const variantStyles = {
      default: `shadow-[${shadows.sm}] border border-[${colors.border}]`,
      elevated: `shadow-[${shadows.md}] hover:shadow-[${shadows.lg}] transition-shadow duration-300`,
      outlined: `border border-[${colors.border}]`,
    };

    const classes = [
      baseStyles,
      roundedStyles,
      paddingStyles,
      variantStyles[variant],
      className,
    ].join(" ");

    return (
      <Tag ref={ref} className={classes} {...props}>
        {children}
      </Tag>
    );
  }
);

Card.displayName = "Card";
---