"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = () => {
  const pathname = usePathname();
  const navBaseStyle =
    "rounded-[5px] px-4 py-2 text-muted-300  transition-colors hover:font-medium hover:text-accent-700";
  return (
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
  );
};

export default NavList;
