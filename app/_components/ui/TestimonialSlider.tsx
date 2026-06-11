import { Swiper, SwiperSlide } from "swiper/react";
import { CustomerTestimonialType } from "@/app/_types/testimonial.type";
import TestimonialItem from "./TestimonialItem";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

type TestimonialSliderPropType = {
  customers: CustomerTestimonialType[];
  onSwiper: (swiper: SwiperType | null) => void;
  onSetBeginning: (value: boolean) => void;
  onSetEnd: (value: boolean) => void;
  onActiveSlider: (value: number) => void;
};

const TestimonialSlider = ({
  customers,
  onSwiper,
  onSetBeginning,
  onSetEnd,
  onActiveSlider,
}: TestimonialSliderPropType) => {
  return (
    <Swiper
      slidesPerView={1}
      onSwiper={(s) => {
        onSwiper(s);
        onSetBeginning(s.isBeginning);
        onSetEnd(s.isEnd);
      }}
      onSlideChange={(s) => {
        onSetBeginning(s.isBeginning);
        onSetEnd(s.isEnd);
        onActiveSlider(s.activeIndex);
      }}
      spaceBetween={24}
      modules={[Autoplay]}
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
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      }}
    >
      {customers.map((customer) => (
        <SwiperSlide className="flex h-auto" key={customer.id}>
          <TestimonialItem customer={customer} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
