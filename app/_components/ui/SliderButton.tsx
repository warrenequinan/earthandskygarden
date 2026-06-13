"use client";

import clsx from "clsx";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import type { Swiper as SwiperType } from "swiper";

type SliderButtonProptype = {
  isBeginning: boolean;
  isEnd: boolean;
  swiper: SwiperType | null;
  className?: string;
  align: "left" | "right" | "center";
};

const SliderButton = ({
  isBeginning,
  isEnd,
  swiper,
  className,
  align = "center",
}: SliderButtonProptype) => {
  return (
    <div
      className={clsx(
        "mt-6 flex w-full gap-2",
        align === "left" && "justify-start",
        align === "right" && "justify-end",
        align === "center" && "justify-center",
        className,
      )}
    >
      <button
        disabled={isBeginning}
        className="duration-300 rounded-[5px] group bg-muted-200 px-4 py-3 text-3xl text-primary transition-all disabled:cursor-not-allowed disabled:bg-muted-100 disabled:text-muted-700"
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
        className="group rounded-[5px] bg-muted-200 px-4 py-3 text-3xl text-primary disabled:cursor-not-allowed disabled:bg-muted-100 disabled:text-muted-700"
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
  );
};

export default SliderButton;
