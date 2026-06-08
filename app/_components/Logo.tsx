import Image from "next/image";
import logo from "@/public/eas-logo.svg";

const Logo = () => {
  return (
    <div className="w-[120px] relative h-[46px]">
      <Image src={logo} fill alt="Earth and Sky Garden Logo" />
    </div>
  );
};

export default Logo;
