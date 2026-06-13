import Image from "next/image";
import CardContainer from "./CardContainer";
import {
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import type { Product } from "@/app/_types/product.types";

type ProductItemType = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemType) => {
  const { name, price, discount, image } = product;
  const discountedPrice = discount > 0 ? price * (discount / 100) : 0;

  return (
    <CardContainer className="bg-muted-100 px-6 py-6" align="center">
      <div className="relative mb-8 h-[191px] w-[251px]">
        <Image
          className="object-contain transition-all duration-[400ms] group-hover:scale-110"
          src={image}
          fill
          quality={100}
          alt={`eas ${name.toLowerCase()} product thumbnail`}
        />
      </div>
      <h5 className="text-xl font-bold uppercase text-primary">{name}</h5>
      <p className="text-base text-primary">
        {discount > 0
          ? `₱ ${(price - discountedPrice).toFixed(2)} / kg`
          : `₱ ${price.toFixed(2)} / kg`}
        {discount > 0 && (
          <span className="ml-[10px] text-muted-700 line-through">
            ₱ {price.toFixed(2)}
          </span>
        )}
      </p>
      {discount > 0 && (
        <div className="absolute left-0 top-0 translate-x-6 translate-y-6 rounded-[5px] bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
          {discount}% discount
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute flex translate-y-8 items-center rounded-[5px] bg-accent-700 px-4 py-2 text-xl opacity-0 transition-all duration-[400ms] group-hover:translate-y-0 group-hover:opacity-100">
          <button className="relative flex h-[40px] w-[40px] items-center justify-center text-white opacity-50 transition-all duration-300 hover:opacity-100">
            <HiOutlineShoppingBag
              strokeWidth={2}
              className="absolute h-full w-full p-2"
            />
          </button>
          <div className="mx-3 h-[14px] w-[0.5px] bg-white opacity-50"></div>
          <button className="relative flex h-[40px] w-[40px] items-center justify-center text-white opacity-50 transition-all duration-300 hover:opacity-100">
            <HiOutlineEye
              strokeWidth={2}
              className="absolute h-full w-full p-2"
            />
          </button>
          <div className="mx-3 h-[14px] w-[0.5px] bg-white opacity-50"></div>
          <button className="relative flex h-[40px] w-[40px] items-center justify-center text-white opacity-50 transition-all duration-300 hover:opacity-100">
            <HiOutlineHeart
              strokeWidth={2}
              className="absolute h-full w-full p-2"
            />
          </button>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProductItem;
