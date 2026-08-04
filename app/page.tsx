import About from "@/app/_components/sections/About";
import Hero from "@/app/_components/sections/Hero";
import Offer from "@/app/_components/sections/Offer";
import Products from "@/app/_components/sections/Products";
import Testimonial from "@/app/_components/sections/Testimonial";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <Products />
      <About />
      <Testimonial />
    </>
  );
}
