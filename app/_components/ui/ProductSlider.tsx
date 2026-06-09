"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineHeart,
  HiShoppingBag,
} from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCartButton from "./ProductCartButton";
import CartCounter from "./CartCounter";
import CardContainer from "./CardContainer";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";

const ProductSlider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div>
      <div className="mb-6 flex w-full justify-center gap-2">
        <button
          disabled={isBeginning}
          className="group rounded-[5px] bg-muted-200 px-5 py-4 text-2xl text-primary disabled:cursor-not-allowed disabled:bg-muted-100"
          onClick={() => swiper?.slidePrev()}
        >
          <HiChevronLeft
            className={clsx(
              "transition-all duration-300 group-hover:-translate-x-1",
              isBeginning && "group-hover:translate-x-0",
            )}
          />
        </button>

        <button
          disabled={isEnd}
          className="group rounded-[5px] bg-muted-200 px-5 py-4 text-2xl text-primary disabled:cursor-not-allowed disabled:bg-muted-100"
          onClick={() => swiper?.slideNext()}
        >
          <HiChevronRight
            className={clsx(
              "transition-all duration-300 group-hover:translate-x-1",
              isEnd && "group-hover:translate-x-0",
            )}
          />
        </button>
      </div>
      <Swiper
        onSwiper={(s) => {
          setSwiper(s);
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
        onSlideChange={(s) => {
          setIsBeginning(s.isBeginning);
          setIsEnd(s.isEnd);
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 4,
          },

          1700: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <CardContainer>
            <div className="relative mb-8 h-[191px] w-[251px]">
              <Image
                className="object-contain"
                src="/products-thumbnail/Brocolli.png"
                fill
                alt="eas brocolli product thumbnail"
              />
            </div>
            <h5 className="text-xl font-bold uppercase text-primary">
              Brocolli
            </h5>
            <p className="text-base text-primary">
              ₱ 75.00 / kg
              <span className="ml-[10px] text-muted-300 line-through">
                ₱ 85.00
              </span>
            </p>
            <div className="absolute left-0 top-0 translate-x-6 translate-y-6 rounded-[5px] bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
              15% discount
            </div>
            <div className="absolute right-0 top-0 flex -translate-x-6 translate-y-6 flex-col gap-2 text-xl">
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineEye strokeWidth={2} />
              </button>
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineHeart strokeWidth={2} />
              </button>
            </div>
            <div className="mt-8 flex w-full justify-between">
              <CartCounter />
              <ProductCartButton>
                <HiShoppingBag className="text-lg" /> Add to cart
              </ProductCartButton>
            </div>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <div className="relative mb-8 h-[191px] w-[251px]">
              <Image
                className="object-contain"
                src="/products-thumbnail/Brocolli.png"
                fill
                alt="eas brocolli product thumbnail"
              />
            </div>
            <h5 className="text-xl font-bold uppercase text-primary">
              Brocolli
            </h5>
            <p className="text-base text-primary">
              ₱ 75.00 / kg
              <span className="ml-[10px] text-muted-300 line-through">
                ₱ 85.00
              </span>
            </p>
            <div className="absolute left-0 top-0 translate-x-6 translate-y-6 rounded-[5px] bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
              15% discount
            </div>
            <div className="absolute right-0 top-0 flex -translate-x-6 translate-y-6 flex-col gap-2 text-xl">
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineEye strokeWidth={2} />
              </button>
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineHeart strokeWidth={2} />
              </button>
            </div>
            <div className="mt-8 flex w-full justify-between">
              <CartCounter />
              <ProductCartButton>
                <HiShoppingBag className="text-lg" /> Add to cart
              </ProductCartButton>
            </div>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <div className="relative mb-8 h-[191px] w-[251px]">
              <Image
                className="object-contain"
                src="/products-thumbnail/Brocolli.png"
                fill
                alt="eas brocolli product thumbnail"
              />
            </div>
            <h5 className="text-xl font-bold uppercase text-primary">
              Brocolli
            </h5>
            <p className="text-base text-primary">
              ₱ 75.00 / kg
              <span className="ml-[10px] text-muted-300 line-through">
                ₱ 85.00
              </span>
            </p>
            <div className="absolute left-0 top-0 translate-x-6 translate-y-6 rounded-[5px] bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
              15% discount
            </div>
            <div className="absolute right-0 top-0 flex -translate-x-6 translate-y-6 flex-col gap-2 text-xl">
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineEye strokeWidth={2} />
              </button>
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineHeart strokeWidth={2} />
              </button>
            </div>
            <div className="mt-8 flex w-full justify-between">
              <CartCounter />
              <ProductCartButton>
                <HiShoppingBag className="text-lg" /> Add to cart
              </ProductCartButton>
            </div>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <div className="relative mb-8 h-[191px] w-[251px]">
              <Image
                className="object-contain"
                src="/products-thumbnail/Brocolli.png"
                fill
                alt="eas brocolli product thumbnail"
              />
            </div>
            <h5 className="text-xl font-bold uppercase text-primary">
              Brocolli
            </h5>
            <p className="text-base text-primary">
              ₱ 75.00 / kg
              <span className="ml-[10px] text-muted-300 line-through">
                ₱ 85.00
              </span>
            </p>
            <div className="absolute left-0 top-0 translate-x-6 translate-y-6 rounded-[5px] bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
              15% discount
            </div>
            <div className="absolute right-0 top-0 flex -translate-x-6 translate-y-6 flex-col gap-2 text-xl">
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineEye strokeWidth={2} />
              </button>
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineHeart strokeWidth={2} />
              </button>
            </div>
            <div className="mt-8 flex w-full justify-between">
              <CartCounter />
              <ProductCartButton>
                <HiShoppingBag className="text-lg" /> Add to cart
              </ProductCartButton>
            </div>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <div className="relative mb-8 h-[191px] w-[251px]">
              <Image
                className="object-contain"
                src="/products-thumbnail/Brocolli.png"
                fill
                alt="eas brocolli product thumbnail"
              />
            </div>
            <h5 className="text-xl font-bold uppercase text-primary">
              Brocolli
            </h5>
            <p className="text-base text-primary">
              ₱ 75.00 / kg
              <span className="ml-[10px] text-muted-300 line-through">
                ₱ 85.00
              </span>
            </p>
            <div className="absolute left-0 top-0 translate-x-6 translate-y-6 rounded-[5px] bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
              15% discount
            </div>
            <div className="absolute right-0 top-0 flex -translate-x-6 translate-y-6 flex-col gap-2 text-xl">
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineEye strokeWidth={2} />
              </button>
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineHeart strokeWidth={2} />
              </button>
            </div>
            <div className="mt-8 flex w-full justify-between">
              <CartCounter />
              <ProductCartButton>
                <HiShoppingBag className="text-lg" /> Add to cart
              </ProductCartButton>
            </div>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <div className="relative mb-8 h-[191px] w-[251px]">
              <Image
                className="object-contain"
                src="/products-thumbnail/Brocolli.png"
                fill
                alt="eas brocolli product thumbnail"
              />
            </div>
            <h5 className="text-xl font-bold uppercase text-primary">
              Brocolli
            </h5>
            <p className="text-base text-primary">
              ₱ 75.00 / kg
              <span className="ml-[10px] text-muted-300 line-through">
                ₱ 85.00
              </span>
            </p>
            <div className="absolute left-0 top-0 translate-x-6 translate-y-6 rounded-[5px] bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
              15% discount
            </div>
            <div className="absolute right-0 top-0 flex -translate-x-6 translate-y-6 flex-col gap-2 text-xl">
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineEye strokeWidth={2} />
              </button>
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineHeart strokeWidth={2} />
              </button>
            </div>
            <div className="mt-8 flex w-full justify-between">
              <CartCounter />
              <ProductCartButton>
                <HiShoppingBag className="text-lg" /> Add to cart
              </ProductCartButton>
            </div>
          </CardContainer>
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer>
            <div className="relative mb-8 h-[191px] w-[251px]">
              <Image
                className="object-contain"
                src="/products-thumbnail/Brocolli.png"
                fill
                alt="eas brocolli product thumbnail"
              />
            </div>
            <h5 className="text-xl font-bold uppercase text-primary">
              Brocolli
            </h5>
            <p className="text-base text-primary">
              ₱ 75.00 / kg
              <span className="ml-[10px] text-muted-300 line-through">
                ₱ 85.00
              </span>
            </p>
            <div className="absolute left-0 top-0 translate-x-6 translate-y-6 rounded-[5px] bg-primary px-4 py-1 text-xs font-bold uppercase text-white">
              15% discount
            </div>
            <div className="absolute right-0 top-0 flex -translate-x-6 translate-y-6 flex-col gap-2 text-xl">
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineEye strokeWidth={2} />
              </button>
              <button className="flex h-[39px] w-[39px] scale-0 items-center justify-center rounded-full border border-muted-200 px-[10px] py-3 text-primary transition-all duration-300 hover:bg-accent-700 hover:text-white group-hover:scale-100">
                <HiOutlineHeart strokeWidth={2} />
              </button>
            </div>
            <div className="mt-8 flex w-full justify-between">
              <CartCounter />
              <ProductCartButton>
                <HiShoppingBag className="text-lg" /> Add to cart
              </ProductCartButton>
            </div>
          </CardContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
