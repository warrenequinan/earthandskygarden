"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { ProductImages } from "@/app/_types/product.types";

type ProductThumbSlider = {
  images: ProductImages[];
};

const ProductThumbSlider = ({ images }: ProductThumbSlider) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={32}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        loop={true}
      >
        {images.map((image) => (
          <SwiperSlide key={image.url}>
            <div className="flex aspect-square w-full items-center justify-center rounded-[5px] border border-muted-400">
              <Image
                src={image.url}
                alt={image.alt}
                className="h-auto max-w-[250px] sm:max-w-[400px]"
                width={400}
                height={304}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={3}
        modules={[FreeMode, Thumbs]}
        className="mt-4 lg:mt-8"
        freeMode={true}
        watchSlidesProgress={true}
        breakpoints={{
          1024: {
            spaceBetween: 32,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.url}>
            <div className="aspect-square w-full cursor-pointer overflow-hidden rounded-[5px] border border-muted-400">
              <div className="flex h-full w-full items-center justify-center p-4 transition-transform duration-300 hover:scale-105">
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={126}
                  height={96}
                  className="h-auto max-w-[75px] sm:max-w-[126px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductThumbSlider;
