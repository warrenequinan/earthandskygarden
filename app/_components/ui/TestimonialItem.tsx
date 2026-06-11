import { CustomerTestimonialType } from "@/app/_types/testimonial.type";
import CardContainer from "@/app/_components/ui/CardContainer";
import Description from "@/app/_components/ui/Description";
import Image from "next/image";
import { HiStar } from "react-icons/hi";

type TestimonialItemPropType = {
  customer: CustomerTestimonialType;
};

const TestimonialItem = ({ customer }: TestimonialItemPropType) => {
  const {
    name: { firstName, lastName },
    testimonial,
    image,
    rating,
  } = customer;

  return (
    <CardContainer align="left" className="h-full p-6">
      <Description align="left" className="mb-6">
        {testimonial}
      </Description>
      <div className="mt-auto flex items-center justify-start gap-4">
        <div className="relative h-[65px] w-[65px]">
          <Image
            src={image}
            fill
            className="object-contain"
            alt={`${firstName} ${lastName}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold uppercase leading-none text-primary">
            {firstName} {lastName}
          </h5>
          <div className="flex text-lg text-accent-700">
            {Array.from({ length: rating }).map((_, i) => (
              <HiStar key={i} />
            ))}
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default TestimonialItem;
