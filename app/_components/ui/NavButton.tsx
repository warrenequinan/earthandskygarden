"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import NavList from "./NavList";
import clsx from "clsx";

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!navRef.current) return;

      if (!navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        className="flex flex-col items-end gap-[6px] overflow-hidden p-1"
        onClick={() => setIsOpen((curr) => !curr)}
      >
        <span
          className={clsx(
            "inline-block h-[2.5px] rounded-full bg-accent-700 leading-normal transition-transform ease-in-out",
            isOpen ? "w-8 translate-y-[10px] rotate-[-45deg]" : "w-6",
          )}
        ></span>
        <span
          className={clsx(
            "inline-block h-[2.5px] w-[33px] rounded-full bg-accent-700 leading-normal transition-transform duration-300 ease-in-out",
            isOpen && "translate-x-[50px]",
          )}
        ></span>
        <span
          className={clsx(
            "inline-block h-[2.5px] rounded-full bg-accent-700 leading-normal transition-transform ease-in-out",
            isOpen ? "w-8 translate-y-[-7px] rotate-[45deg]" : "w-6",
          )}
        ></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={navRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-[70px] w-[251px] overflow-hidden rounded-[5px] bg-white p-4 font-normal shadow-md"
          >
            <NavList />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavButton;
