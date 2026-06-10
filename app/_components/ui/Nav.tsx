import Button from "./Button";
import { HiUser } from "react-icons/hi";
import CartButton from "./CartButton";
import NavButton from "./NavButton";

type NavPropType = {
  isScrolled: boolean;
};

const Nav = ({ isScrolled }: NavPropType) => {
  return (
    <div className="flex items-center gap-4">
      <Button>
        <HiUser className="text-[20px] leading-none" />{" "}
        <span className="hidden md:inline">Login / Sign up</span>
      </Button>
      <CartButton isScrolled={isScrolled} />
      <NavButton />
    </div>
  );
};

export default Nav;
