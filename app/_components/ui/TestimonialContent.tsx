"use client";

import SliderButton from "@/app/_components/ui/SliderButton";
import SectionHeader from "@/app/_components/ui/SectionHeader";
import TestimonialSlider from "@/app/_components/ui/TestimonialSlider";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import SliderBullet from "@/app/_components/ui/SliderBullet";
import { CustomerTestimonialType } from "@/app/_types/testimonial.type";

type TestimonialContentPropType = {
    customers: CustomerTestimonialType[];
}

const TestimonialContent = ({ customers }: TestimonialContentPropType) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [activeSlider, setActiveSlider] = useState(0);

  const handleSetSwiper = (swiper: SwiperType | null) => {
    setSwiper(swiper);
  };

  const handleSetBeginning = (value: boolean) => {
    setIsBeginning(value);
  };

  const handleSetEnd = (value: boolean) => {
    setIsEnd(value);
  };

  const handleSetActive = (value: number) => {
    setActiveSlider(value);
  };

  return (
    <section className="mx-6 mt-16 max-w-[2560px] overflow-hidden lg:mt-[72px] xl:mx-auto">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="flex shrink-0 basis-full flex-col gap-8 lg:basis-[500px]">
          <SectionHeader align="left">Hear From Our Customers</SectionHeader>
          <SliderButton
            isBeginning={isBeginning}
            isEnd={isEnd}
            swiper={swiper}
            align="left"
          />
        </div>
        <div className="max-w-[1400px] xl:w-[calc(100vw-((100vw-1320px)/2)-500px)]">
          <TestimonialSlider
            customers={customers}
            onSwiper={handleSetSwiper}
            onSetBeginning={handleSetBeginning}
            onSetEnd={handleSetEnd}
            onActiveSlider={handleSetActive}
          />

          <SliderBullet
            className="mt-6"
            swiper={swiper}
            activeSlider={activeSlider}
            align="left"
            bulletColor="bg-muted-200"
            activeColor="bg-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialContent;
