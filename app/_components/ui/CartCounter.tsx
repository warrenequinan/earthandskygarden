"use client";

import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const CartCounter = () => {
  const [quantity, setQuantity] = useState(1);
  const MIN_QUANTITY = 1;
  const MAX_QUANTITY = 999;

  const handleIncrease = () => {
    setQuantity((quantity) => {
      if (quantity >= MAX_QUANTITY) return quantity;
      return quantity + 1;
    });
  };
  const handleDecrease = () => {
    setQuantity((quantity) => {
      if (quantity <= 1) return quantity;
      return quantity - 1;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setQuantity(MIN_QUANTITY);
      return;
    }

    const number = Number(value);

    if (Number.isNaN(number)) return;

    if (number < MIN_QUANTITY) {
      setQuantity(MIN_QUANTITY);
      return;
    }

    if (number > MAX_QUANTITY) {
      setQuantity(MAX_QUANTITY);
      return;
    }

    setQuantity(number);
  };

  return (
    <div className="flex h-[40px] text-sm font-bold md:h-[48px]">
      <button
        type="button"
        className="flex h-full w-[40px] items-center justify-center rounded-bl-[5px] rounded-tl-[5px] border-b border-l border-t border-muted-600 text-center text-muted-700 disabled:cursor-not-allowed md:w-[50px]"
        aria-label="Decrease quantity"
        disabled={quantity === MIN_QUANTITY}
        onClick={handleDecrease}
      >
        <HiMinus />
      </button>
      <input
        type="number"
        className="h-full w-[50px] border border-muted-600 text-center text-primary md:w-[60px]"
        name="quantity"
        value={quantity > 1 ? quantity : 1}
        onChange={handleInputChange}
        min={MIN_QUANTITY}
        max={MAX_QUANTITY}
      />
      <button
        type="button"
        className="flex h-full w-[40px] items-center justify-center rounded-br-[5px] rounded-tr-[5px] border-b border-r border-t border-muted-600 text-center text-muted-700 disabled:cursor-not-allowed md:w-[50px]"
        aria-label="Increase quantity"
        disabled={quantity === MAX_QUANTITY}
        onClick={handleIncrease}
      >
        <HiPlus />
      </button>
    </div>
  );
};

export default CartCounter;
