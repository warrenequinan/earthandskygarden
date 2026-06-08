import { HiShoppingBag } from "react-icons/hi";

type CartButtonPropType = {
  onClick?: () => void;
};

const CartButton = ({ onClick }: CartButtonPropType) => {
  return (
    <button className="relative text-white" onClick={onClick}>
      <span className="absolute text-[10px] font-semibold text-white rounded-full bg-accent-700 p-[4px] leading-none top-[8px] right-[-5px]">12</span>
      <HiShoppingBag className="text-4xl" />
    </button>
  );
};

export default CartButton;
