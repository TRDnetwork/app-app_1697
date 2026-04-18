import { useEffect } from "react";
import { createPortal } from "react-dom";
import { colors } from "@/design-system/colors";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  onClose: (id: string) => void;
}

const typeStyles = {
  success: {
    bg: colors.success,
    text: "white",
  },
  error: {
    bg: colors.error,
    text: "white",
  },
  warning: {
    bg: colors.warning,
    text: "black",
  },
  info: {
    bg: colors.info,
    text: "white",
  },
};

export const Toast = ({ id, message, type, duration = 5000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, onClose, duration]);

  const style = typeStyles[type];

  return createPortal(
    <div
      className="fixed top-4 right-4 max-w-xs w-full bg-white shadow-lg rounded-md border border-[#e0e0e0] overflow-hidden z-50 animate-in slide-in-from-top duration-300"
      role="alert"
    >
      <div className="px-4 py-3 flex items-start gap-2" style={{ background: style.bg, color: style.text }}>
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={() => onClose(id)}
          className="ml-auto text-current hover:text-opacity-80"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
};

Toast.displayName = "Toast";
---