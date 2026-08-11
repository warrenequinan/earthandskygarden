"use client";

import { createPortal } from "react-dom";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { HiOutlineX } from "react-icons/hi";
import clsx from "clsx";

type MobileSidebarProps = {
  children: React.ReactNode;
};

type SidebarContextType = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebarContext must be used inside MobileSidebar");
  }

  return context;
};

export const MobileSidebar = ({ children }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, handleOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const MobileSidebarTrigger = ({ children }: MobileSidebarProps) => {
  const { handleOpen } = useSidebarContext();

  return (
    <Button variant="primary" size="small" onClick={handleOpen}>
      {children}
    </Button>
  );
};

export const MobileSidebarContent = ({ children }: MobileSidebarProps) => {
  const [sidebarRoot, setSidebarRoot] = useState<HTMLElement | null>(null);
  const { handleClose, isOpen } = useSidebarContext();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSidebarRoot(document.getElementById("sidebar-root"));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideSidebarClick = (event: PointerEvent) => {
      const sidebar = sidebarRef.current;
      if (!sidebar) return;
      if (!sidebar.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("pointerdown", handleOutsideSidebarClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideSidebarClick);
    };
  }, [isOpen, handleClose]);

  if (!sidebarRoot) return null;

  return createPortal(
    <>
      <div
        ref={sidebarRef}
        className={clsx(
          "fixed left-0 right-0 top-0 z-[99999] h-full w-full bg-white transition-all duration-300 sm:w-[300px] lg:hidden",
          isOpen ? "translate-x-[0]" : "-translate-x-[100%]",
        )}
      >
        {children}
        <Button
          className="absolute right-0 top-0 text-xl"
          size="medium"
          variant="transparent"
          animation={false}
          aria-label="close sidebar"
          onClick={handleClose}
        >
          <HiOutlineX />
        </Button>
      </div>
      {isOpen && (
        <div
          className="cursor fixed bottom-0 left-0 right-0 top-0 z-[1000] bg-black/20 transition-all duration-300 lg:hidden"
          aria-hidden="true"
        ></div>
      )}
    </>,
    sidebarRoot,
  );
};

export default MobileSidebar;
