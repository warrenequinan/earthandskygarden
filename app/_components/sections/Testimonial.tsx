"use client";

import SliderButton from "@/app/_components/ui/SliderButton";
import SectionHeader from "@/app/_components/ui/SectionHeader";
import TestimonialSlider from "@/app/_components/ui/TestimonialSlider";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import SliderBullet from "../ui/SliderBullet";

const Testimonial = () => {
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

  const customers = [
    {
      id: 1,
      name: {
        firstName: "Cameaila",
        lastName: "Cablle",
      },
      testimonial:
        "The vegetables are always fresh and arrive in excellent condition. You can really tell they're harvested with care. My family has been ordering regularly, and the quality has never disappointed us.",
      image: "/customers/customer-1.png",
      rating: 5,
    },
    {
      id: 2,
      name: {
        firstName: "James",
        lastName: "Reyes",
      },
      testimonial:
        "I was impressed by the quality of the mushrooms and farm products. Everything tasted fresh, and the ordering process was simple and convenient. Highly recommended for anyone looking for farm-fresh produce.",
      image: "/customers/customer-2.png",
      rating: 5,
    },
    {
      id: 3,
      name: {
        firstName: "Angela",
        lastName: "Cruz",
      },
      testimonial:
        "The livestock products exceeded my expectations. Fresh, clean, and reasonably priced. It's great to know exactly where our food comes from. I will definitely continue supporting this farm.",
      image: "/customers/customer-3.png",
      rating: 5,
    },
    {
      id: 4,
      name: {
        firstName: "Mark",
        lastName: "Dela Cruz",
      },
      testimonial:
        "The vegetables are always fresh and full of flavor. You can really tell they are harvested with care and delivered quickly. It’s become my go-to source for quality produce every week.",
      image: "/customers/customer-4.png",
      rating: 5,
    },
    {
      id: 5,
      name: {
        firstName: "Camille",
        lastName: "Dizon",
      },
      testimonial:
        "I’m really impressed with the freshness and consistency of the vegetables. Everything arrives in great condition, and it makes cooking healthier meals for my family so much easier.",
      image: "/customers/customer-5.png",
      rating: 5,
    },
    {
      id: 6,
      name: {
        firstName: "Joshua",
        lastName: "Reyes",
      },
      testimonial:
        "Great quality vegetables at a fair price. Everything tastes fresh like it was just picked from the farm. I appreciate the reliability and how clean the produce always is.",
      image: "/customers/customer-6.png",
      rating: 5,
    },
  ];

  return (
    <section className="mx-6 mb-16 mt-16 max-w-[2560px] overflow-hidden lg:mt-[72px] xl:mx-auto">
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

export default Testimonial;
