import Button from "./Button";
import { HiUser } from "react-icons/hi";
import CartButton from "./CartButton";
import NavButton from "./NavButton";

const Navigation = () => {
  return (
    <div className="flex items-center gap-4">
      <Button>
        <HiUser className="text-[24px] leading-none" /> <span className="hidden md:inline">Login / Sign up</span>
      </Button>
      <CartButton />
      <NavButton />
    </div>
  );
};

export default Navigation;
