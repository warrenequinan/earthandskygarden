"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "../ui/Logo";
import Nav from "../ui/Nav";
import clsx from "clsx";

const Header = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed left-0 right-0 top-[0] z-[999] flex justify-center p-4 transition-all duration-500",
        scrolled && "bg-white shadow-sm",
      )}
      ref={headerRef}
    >
      <div
        className={`relative flex w-full max-w-[1320px] justify-between rounded-[5px]`}
      >
        <Logo isScrolled={scrolled} />
        <Nav isScrolled={scrolled} />
      </div>
    </header>
  );
};

export default Header;
