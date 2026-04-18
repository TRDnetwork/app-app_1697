import { ReactNode, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
};

export const Tooltip = ({ children, content, side = "top" }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (!isVisible || !triggerRef.current) return;

    const triggerEl = triggerRef.current;
    const tooltipEl = tooltipRef.current;
    if (!tooltipEl) return;

    const triggerRect = triggerEl.getBoundingClientRect();
    const tooltipRect = tooltipEl.getBoundingClientRect();

    let x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
    let y = triggerRect.top - tooltipRect.height - 8;

    if (side === "bottom") {
      y = triggerRect.bottom + 8;
    } else if (side === "left") {
      x = triggerRect.left - tooltipRect.width - 8;
      y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
    } else if (side === "right") {
      x = triggerRect.right + 8;
      y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
    }

    setPosition({ x, y });
  }, [isVisible, side]);

  return (
    <>
      {cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      {isVisible &&
        createPortal(
          <div
            ref={tooltipRef}
            className="fixed z-50 bg-black text-white text-sm px-2 py-1 rounded whitespace-nowrap"
            style={{ left: position.x, top: position.y }}
            role="tooltip"
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
};

Tooltip.displayName = "Tooltip";
---