"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCards,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import heroSlider1 from "@/public/eas-hero-slider-1.png";
import heroSlider2 from "@/public/hero-slider-2.png";
import heroSlider3 from "@/public/hero-slider-3.png";
import PaperOverlay from "@/app/_components/ui/PaperOverlay";
import SliderBullet from "../ui/SliderBullet";
import Link from "next/link";

const Hero = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeSlider, setActiveSlider] = useState(0);
  const [renderSlider, setRenderSlider] = useState(0);

  const slideItems = [
    {
      title: {
        before: "",
        highlight: "Earth & Sky",
        after: "Garden",
      },
      subText: "Welcome to",
      button: {
        text: "Browse Our Products",
        url: "/products",
      },
      backgroundImage: {
        url: heroSlider1,
        alt: "Earth and Sky Garden Hero Image",
      },
    },
    {
      title: {
        before: "Explore",
        highlight: "Fresh Choices",
        after: "Garden",
      },
      subText: "Fresh From Local Farms",
      button: {
        text: "Shop Vegetables & Fruits",
        url: "",
      },
      backgroundImage: {
        url: heroSlider2,
        alt: "Earth and Sky Garden Hero Image 2",
      },
    },
    {
      title: {
        before: "Premium",
        highlight: "Meat & Poultry",
        after: "",
      },
      subText: "Clean & Fresh Protein Source",
      button: {
        text: "Shop Meat & Poultry",
        url: "",
      },
      backgroundImage: {
        url: heroSlider3,
        alt: "Earth and Sky Garden Hero Image 3",
      },
    },
  ];

  return (
    <section className="relative w-full uppercase">
      <Swiper
        className="h-[100vh] min-h-[600px] w-full"
        modules={[Autoplay]}
        // effect="creative"
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActiveSlider(s.activeIndex)}
        onSlideChangeTransitionEnd={(s) => {
          setRenderSlider(s.activeIndex);
        }}
      >
        {slideItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute inset-0 -z-10 h-full w-full bg-black/50"></div>
              <Image
                className="-z-50 object-cover"
                src={item?.backgroundImage?.url}
                alt={item?.backgroundImage?.alt}
                quality={100}
                fill
              />
              <div className="px-4 text-center xl:px-0">
                <AnimatePresence mode="wait">
                  {index === renderSlider && (
                    <>
                      <motion.h3
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8 }}
                        className="text-base text-white md:text-lg"
                      >
                        {item?.subText}
                      </motion.h3>
                      <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-8 text-4xl font-black italic tracking-tight text-white md:text-6xl"
                      >
                        {item?.title.before && item?.title?.before}
                        {item?.title?.highlight && (
                          <span
                            className={`${item?.title?.before && "ml-2"} ${item?.title?.after && "mr-2"} text-accent-700`}
                          >
                            {item.title.highlight}
                          </span>
                        )}
                        {item?.title?.after && item?.title?.after}
                      </motion.h1>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                      >
                        <Link
                          href={item.button.url ?? "#"}
                          className="flex-inline mx-auto items-center justify-center gap-[10px] rounded-[5px] bg-accent-700 px-4 py-3 !text-sm font-semibold uppercase text-white transition-colors hover:bg-accent-800 md:px-5 md:py-4 md:text-base"
                        >
                          {item?.button?.text}
                        </Link>
                      </motion.div>
                      <SliderBullet
                        className="mt-[104px]"
                        align="center"
                        swiper={swiper}
                        activeSlider={activeSlider}
                        activeColor="bg-white"
                        bulletColor="bg-white/50"
                      />
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <PaperOverlay />
    </section>
  );
};

export default Hero;
