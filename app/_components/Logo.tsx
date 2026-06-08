import Image from "next/image";
import logo from "@/public/eas-logo.svg";
import darkLogo from "@/public/eas-logo-dark.svg";

type LogoPropType = {
  isScrolled: boolean;
};

const Logo = ({ isScrolled }: LogoPropType) => {
  return (
    <div className="relative h-[46px] w-[120px]">
      <Image src={isScrolled ? darkLogo : logo} fill alt="Earth and Sky Garden Logo" />
    </div>
  );
};

export default Logo;
