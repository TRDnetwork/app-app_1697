import { ReactNode, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type DropdownProps = {
  trigger: ReactNode;
  children: ReactNode;
  align?: "start" | "end";
};

export const Dropdown = ({ trigger, children, align = "end" }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left">
      <div ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className={`
              absolute z-50 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
              focus:outline-none
              ${align === "start" ? "left-0" : "right-0"}
            `}
            role="menu"
          >
            <div className="py-1" role="none">
              {children}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

Dropdown.displayName = "Dropdown";
---