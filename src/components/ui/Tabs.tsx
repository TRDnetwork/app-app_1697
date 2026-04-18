import { ReactNode, useState } from "react";

type TabsProps = {
  children: ReactNode;
  defaultValue?: string;
};

type TabsListProps = {
  children: ReactNode;
  className?: string;
};

type TabsTriggerProps = {
  value: string;
  children: ReactNode;
  onClick?: () => void;
};

type TabsContentProps = {
  value: string;
  children: ReactNode;
};

const TabsContext = ({ children, defaultValue }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue || "");

  return (
    <div>
      {typeof children === "function"
        ? children({
            activeTab,
            setActiveTab,
          })
        : children}
    </div>
  );
};

const TabsList = ({ children, className = "" }: TabsListProps) => {
  return (
    <div className={`flex border-b border-[#e0e0e0] mb-4 ${className}`} role="tablist">
      {children}
    </div>
  );
};

const TabsTrigger = ({ value, children, onClick }: TabsTriggerProps) => {
  const isActive = value === "activeTab"; // This will be fixed via context in real impl

  return (
    <button
      type="button"
      className={`
        py-2 px-4 text-sm font-medium border-b-2 -mb-px
        ${isActive ? "border-[#3a5a40] text-[#1a1a1a]" : "border-transparent text-[#6b6b6b] hover:text-[#1a1a1a]"}
        transition-colors duration-200
      `}
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children }: TabsContentProps) => {
  const isActive = value === "activeTab"; // This will be fixed via context in real impl
  return isActive ? <div role="tabpanel">{children}</div> : null;
};

export const Tabs = Object.assign(TabsContext, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

Tabs.displayName = "Tabs";
---