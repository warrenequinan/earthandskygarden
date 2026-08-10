"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { ProductsCatalogType } from "@/app/_types/product.types";
import ProductItem from "./ProductItem";

import SectionHeader from "@/app/_components/ui/SectionHeader";
import SliderBullet from "./SliderBullet";

type RecommendedProductsType = {
  products: ProductsCatalogType[];
  title?: string;
};

const RecommendedProducts = ({ products, title }: RecommendedProductsType) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeSlider, setActiveSlider] = useState(0);

  if (!products || products.length === 0) return null;

  return (
    <div className="w-full bg-muted-100 px-6 py-10 xl:px-0">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader align="left" className="mb-10">
          {!title ? "Similar Products You'll love" : title}
        </SectionHeader>
        <Swiper
          onSwiper={(s) => {
            setSwiper(s);
          }}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={(s) => setActiveSlider(s.activeIndex)}
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
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
                  <ProductItem product={item} href={`/products/${item.slug}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderBullet
          swiper={swiper}
          className="mt-10"
          align="center"
          activeSlider={activeSlider}
          activeColor="bg-primary"
          bulletColor="bg-muted-200"
        />
      </div>
    </div>
  );
};

export default RecommendedProducts;
