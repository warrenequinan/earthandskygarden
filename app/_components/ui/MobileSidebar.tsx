"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Button from "./Button";

type MobileSidebarProps = {
  children: React.ReactNode;
};

export const MobileSidebar = ({ children }: MobileSidebarProps) => {
  return children;
};

export const MobileSidebarTrigger = ({ children }: MobileSidebarProps) => {
  return (
    <Button variant="primary" size="small">
      {children}
    </Button>
  );
};

export const MobileSidebarContent = ({ children }: MobileSidebarProps) => {
  const [sidebarRoot, setSidebarRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setSidebarRoot(document.getElementById("sidebar-root"));
  }, []);

  if (!sidebarRoot) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-[99999] h-full bg-white lg:hidden">
      {children}
    </div>,
    sidebarRoot,
  );
};

export default MobileSidebar;
