"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { ProductsCatalogType } from "@/app/_types/product.types";
import ProductItem from "./ProductItem";
import SliderButton from "./SliderButton";

type ProductSliderProps = {
  products: ProductsCatalogType[];
  hasButton?: boolean;
};

const ProductSlider = ({ products, hasButton = true }: ProductSliderProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if(!products.length) return null;
    
  return (
    <div className="mx-auto max-w-[2560px]">
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
          delay: 5000,
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
      {hasButton && (
        <SliderButton
          isBeginning={isBeginning}
          isEnd={isEnd}
          swiper={swiper}
          align="center"
        />
      )}
    </div>
  );
};

export default ProductSlider;
