import React from "react";
import { useLocation } from "react-router-dom"; // ✅ Correct import
import { cn } from "@lib/utils";

interface SecondarySidebarProps {
  children?: React.ReactNode;
  className?: string;
}

export function SecondarySidebar({ children, className }: SecondarySidebarProps) {
  const location = useLocation(); // ✅ Hook inside component body
  const pathname = location.pathname;

  // Don't show secondary sidebar on home page
  if (pathname === "/") {
    return null;
  }

  let title = "";
  if (pathname === "/albums") title = "Photo Filters";
  else if (pathname === "/moments") title = "Event Sections";
  else if (pathname === "/profile") title = "Account Options";
  else if (pathname === "/settings") title = "Preferences";

  return (
    <div className={cn("w-64 bg-muted/30 border-r border-border flex-col", className)}>
      <div className="flex h-16 items-center px-4 border-b border-border">
        <h2 className="text-sm font-medium text-muted-foreground">
          {title}
        </h2>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
