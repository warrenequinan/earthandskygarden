"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import type { Product } from "@/app/_types/product.types";
import ProductItem from "./ProductItem";

type ProductSliderProps = {
  products: Product[];
};

const ProductSlider = ({ products }: ProductSliderProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="mx-auto max-w-[2560px]">
      <div className="mb-6 flex w-full justify-center gap-2">
        <button
          disabled={isBeginning}
          className="group rounded-[5px] bg-muted-200 px-4 py-3 text-3xl text-primary disabled:cursor-not-allowed disabled:bg-muted-100 disabled:text-muted-500"
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
          className="group rounded-[5px] bg-muted-200 px-4 py-3 text-3xl text-primary disabled:cursor-not-allowed disabled:bg-muted-100 disabled:text-muted-500"
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
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },

          1700: {
            slidesPerView: 5,
          },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
