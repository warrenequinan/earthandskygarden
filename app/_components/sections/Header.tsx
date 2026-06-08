"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef) return;
      const rect = headerRef?.current?.getBoundingClientRect();
      if (rect && rect?.height <= window.scrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header
      className={`fixed left-0 right-0 top-[0] z-[9999] flex justify-center p-4 transition-all duration-500 ${isScrolled && "bg-white shadow-md"}`}
      ref={headerRef}
    >
      <div
        className={`relative flex w-full max-w-[1320px] justify-between rounded-[5px]`}
      >
        <Logo isScrolled={isScrolled} />
        <Nav isScrolled={isScrolled} />
      </div>
    </header>
  );
};

export default Header;
