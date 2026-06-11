export type CustomerTestimonialType = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  testimonial: string;
  image: string;
  rating: number;
};
