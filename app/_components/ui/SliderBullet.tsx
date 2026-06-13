import clsx from "clsx";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "motion/react";

type SliderBulletType = {
  swiper: SwiperType | null;
  activeSlider: number;
  align: "left" | "center";
  activeColor: string;
  bulletColor: string;
  className?: string;
};

const SliderBullet = ({
  className,
  swiper,
  activeSlider,
  align = "left",
  activeColor,
  bulletColor,
}: SliderBulletType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className={clsx(
        "flex w-full gap-[8px] md:gap-[10px]",
        align === "left" ? "justify-start" : "justify-center",
        className,
      )}
    >
      {Array.from({ length: swiper?.snapGrid.length ?? 0 }).map(
        (_, index: number) => (
          <span
            key={index}
            className={clsx(
              "h-[10px] w-[10px] rounded-[3px] transition-all duration-500 md:h-[14px] md:w-[14px] md:rounded-[5px]",
              index === activeSlider ? activeColor : bulletColor,
            )}
            role="button"
            onClick={() => swiper?.slideTo(index)}
          ></span>
        ),
      )}
    </motion.div>
  );
};

export default SliderBullet;
