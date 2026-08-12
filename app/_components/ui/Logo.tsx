import Image from "next/image";
import logo from "@/public/eas-logo.svg";
import darkLogo from "@/public/eas-logo-dark.svg";
import Link from "next/link";
import clsx from "clsx";

type LogoPropType = {
  isScrolled: boolean;
};

const Logo = ({ isScrolled }: LogoPropType) => {
  return (
    <div
      className={clsx(
        "relative transition-all duration-300",
        isScrolled ? "h-[38px] w-[100px]" : "h-[46px] w-[120px]",
      )}
    >
      <Link href="/">
        <Image
          src={isScrolled ? darkLogo : logo}
          fill
          alt="Earth and Sky Garden Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
