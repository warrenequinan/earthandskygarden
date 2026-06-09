import { HiMinus, HiPlus } from "react-icons/hi";

const CartCounter = () => {
  return (
    <div className="border-muted-300 flex items-center rounded-[5px] border">
      <button className="text-muted-300 px-3 py-4">
        <HiMinus />
      </button>
      <input
        type="text"
        className="w-[24px] text-center font-bold text-primary bg-transparent"
        defaultValue="1"
      />
      <button className="text-muted-300 px-3 py-3">
        <HiPlus />
      </button>
    </div>
  );
};

export default CartCounter;
