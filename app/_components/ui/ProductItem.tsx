import Image from "next/image";
import CardContainer from "./CardContainer";
import CartCounter from "./CartCounter";
import ProductCartButton from "./ProductCartButton";
import { HiOutlineEye, HiOutlineHeart, HiShoppingBag } from "react-icons/hi";
import type { Product } from "@/app/_types/product.types";

type ProductItemType = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemType) => {
  const { name, price, discount, image } = product;
  const discountedPrice = discount > 0 ? price * (discount / 100) : 0;

  return (
    <CardContainer>
      <div className="relative mb-8 h-[191px] w-[251px]">
        <Image
          className="object-contain"
          src={image}
          fill
          alt={`eas ${name} product thumbnail`}
        />
      </div>
      <h5 className="text-xl font-bold uppercase text-primary">{name}</h5>
      <p className="text-base text-primary">
        {discount > 0
          ? `₱ ${(price - discountedPrice).toFixed(2)} / kg`
          : `₱ ${price.toFixed(2)} / kg`}
        {discount > 0 && (
          <span className="ml-[10px] text-muted-600 line-through">
            ₱ {price.toFixed(2)}
          </span>
        )}
      </p>
      {discount > 0 && (
        <div className="absolute left-0 top-0 translate-x-6 translate-y-6 rounded-[5px] bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
          {discount}% discount
        </div>
      )}
      <div className="absolute right-0 top-0 flex -translate-x-6 translate-y-6 flex-col gap-2 text-xl">
        <button className="relative flex h-[38px] w-[38px] scale-0 items-center justify-center rounded-full border border-muted-200 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
          <HiOutlineEye
            strokeWidth={2}
            className="absolute h-full w-full p-2"
          />
        </button>
        <button className="relative flex h-[38px] w-[38px] scale-0 items-center justify-center rounded-full border border-muted-200 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
          <HiOutlineHeart
            strokeWidth={2}
            className="absolute h-full w-full p-2"
          />
        </button>
      </div>
      <div className="mt-8 flex w-full justify-between">
        <CartCounter />
        <ProductCartButton>
          <HiShoppingBag className="text-lg" /> Add to cart
        </ProductCartButton>
      </div>
    </CardContainer>
  );
};

export default ProductItem;
