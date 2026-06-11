import clsx from "clsx";
import type { Swiper as SwiperType } from "swiper";

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
    <div
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
              "h-[12px] w-[12px] rounded-[3px] md:h-[14px] md:w-[14px] md:rounded-[5px]",
              bulletColor,
              activeColor && `data-[active=true]:${activeColor}`,
            )}
            role="button"
            onClick={() => swiper?.slideTo(index)}
            data-active={index === activeSlider}
          ></span>
        ),
      )}
    </div>
  );
};

export default SliderBullet;
