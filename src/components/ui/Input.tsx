import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { colors } from "@/design-system/colors";
import { radii } from "@/design-system/radii";
import { shadows } from "@/design-system/shadows";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  variant?: "default" | "outline";
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, className = "", ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[#1a1a1a]">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`
            w-full px-4 py-2 
            border border-[${colors.border}] rounded-md 
            focus:outline-none focus:ring-2 focus:ring-[${colors.accentAlt}] focus:border-transparent
            transition-all duration-200
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, error, className = "", ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-[#1a1a1a]">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={`
            w-full px-4 py-2 
            border border-[${colors.border}] rounded-md 
            focus:outline-none focus:ring-2 focus:ring-[${colors.accentAlt}] focus:border-transparent
            transition-all duration-200 resize-none
            ${error ? "border-red-500 focus:ring-red-500" : ""}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
---