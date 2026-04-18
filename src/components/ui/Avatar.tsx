import { forwardRef, HTMLAttributes } from "react";

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
};

const sizeStyles = {
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = "Avatar", size = "md", fallback, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          rounded-full overflow-hidden flex items-center justify-center bg-gray-200
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-600 font-medium">{fallback || alt.charAt(0).toUpperCase()}</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
---