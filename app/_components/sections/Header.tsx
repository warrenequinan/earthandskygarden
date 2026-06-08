"use client";

import { useState } from "react";
import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <header
      className={`fixed left-0 right-0 top-[0] z-[9999] flex justify-center p-4`}
    >
      <div
        className={`relative flex w-full max-w-[1320px] justify-between rounded-[5px]`}
      >
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
