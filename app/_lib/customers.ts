import { supabase } from "./supabase";

export const getTestimonials = async () => {
  const { data: customer, error } = await supabase
    .from("testimonial")
    .select("id,name,testimonial,image,rating");

  if (error) throw new Error("There is an error in fetching testimonials");

  return customer;
};
