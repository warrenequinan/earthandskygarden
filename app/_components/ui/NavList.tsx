"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavListPropType = {
  onCloseMenu: () => void;
};

const NavList = ({ onCloseMenu }: NavListPropType) => {
  const pathname = usePathname();
  const navBaseStyle =
    "rounded-[5px] px-4 py-2 text-muted-300  transition-colors hover:font-medium hover:text-accent-700";
  return (
    <ul>
      <li
        className={`${navBaseStyle} ${pathname === "/" && "font-medium !text-accent-700"}`}
      >
        <Link href="/" onClick={onCloseMenu}>
          Home
        </Link>
      </li>
      <li
        className={`${navBaseStyle} ${pathname === "/products" && "font-medium !text-accent-700"}`}
      >
        <Link href="/products" onClick={onCloseMenu}>
          Our Products
        </Link>
      </li>
      <li
        className={`${navBaseStyle} ${pathname === "/about" && "font-medium !text-accent-700"}`}
      >
        <Link href="#" onClick={onCloseMenu}>About Us</Link>
      </li>
      <li
        className={`${navBaseStyle} ${pathname === "/gallery" && "font-medium !text-accent-700"}`}
      >
        <Link href="#" onClick={onCloseMenu}>Gallery</Link>
      </li>
      <li
        className={`${navBaseStyle} ${pathname === "contact" && "font-medium !text-accent-700"}`}
      >
        <Link href="#" onClick={onCloseMenu}>Contact Us</Link>
      </li>
    </ul>
  );
};

export default NavList;
