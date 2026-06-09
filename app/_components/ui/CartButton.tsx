import { HiShoppingBag } from "react-icons/hi";

type CartButtonPropType = {
  onClick?: () => void;
  isScrolled: boolean;
};

const CartButton = ({ onClick, isScrolled }: CartButtonPropType) => {
  return (
    <button
      className={`relative transition-all duration-700 ${isScrolled ? "text-muted-300" : "text-white"}`}
      onClick={onClick}
    >
      <span className="absolute right-[-5px] top-[8px] rounded-full bg-accent-700 p-[4px] text-[10px] font-semibold leading-none text-white">
        12
      </span>
      <HiShoppingBag className="text-4xl" />
    </button>
  );
};

export default CartButton;
