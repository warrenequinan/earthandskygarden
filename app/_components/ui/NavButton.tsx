"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const NavButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navBaseStyle =
    "rounded-[5px] px-4 py-2 text-muted-100 transition-colors hover:font-medium hover:text-accent-700";
  const pathname = usePathname();

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
          className={`inline-block h-[2.5px] ${isOpen ? "w-8" : "w-6"} rounded-[10px] bg-accent-700 leading-normal ease-in-out ${isOpen && "translate-y-[10px] rotate-[-45deg]"} transition-transform`}
        ></span>
        <span
          className={`inline-block h-[2.5px] w-[33px] rounded-[10px] bg-accent-700 leading-normal transition-transform duration-300 ease-in-out ${isOpen && "translate-x-[50px]"}`}
        ></span>
        <span
          className={`inline-block h-[2.5px] ${isOpen ? "w-8" : "w-6"} rounded-[10px] bg-accent-700 leading-normal transition-transform ease-in-out ${isOpen && "translate-y-[-7px] rotate-[45deg]"}`}
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
            <ul>
              <li
                className={`${navBaseStyle} ${pathname === "/" && "font-medium !text-accent-700"}`}
              >
                <Link href="#">Home</Link>
              </li>
              <li
                className={`${navBaseStyle} ${pathname === "/products" && "font-medium !text-accent-700"}`}
              >
                <Link href="#">Our Products</Link>
              </li>
              <li
                className={`${navBaseStyle} ${pathname === "/about" && "font-medium !text-accent-700"}`}
              >
                <Link href="#">About Us</Link>
              </li>
              <li
                className={`${navBaseStyle} ${pathname === "/gallery" && "font-medium !text-accent-700"}`}
              >
                <Link href="#">Gallery</Link>
              </li>
              <li
                className={`${navBaseStyle} ${pathname === "contact" && "font-medium !text-accent-700"}`}
              >
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavButton;
