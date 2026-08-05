import { getTestimonials } from "@/app/_lib/customers";
import TestimonialContent from "../ui/TestimonialContent";
import { CustomerTestimonialType } from "@/app/_types/testimonial.type";

const Testimonial = async () => {
  let customers: null | CustomerTestimonialType[] = null;
  try {
    customers = await getTestimonials();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
      return null;
    }
    return null;
  }

  return <TestimonialContent customers={customers} />;
};

export default Testimonial;
