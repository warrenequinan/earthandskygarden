import SectionHeader from "@/app/_components/ui/SectionHeader";
import CategoryCard from "@/app/_components/ui/CategoryCard";
import { Suspense } from "react";
import SliderLoader from "../ui/SliderLoader";
import ProductsSliderSection from "../ui/ProductsSliderSection";
import ButtonLink from "../ui/ButtonLink";

const Products = () => {
    
  return (
    <section className="w-full pb-[72px]">
      <SectionHeader align="center">Shop by category</SectionHeader>
      <div className="mt-10 flex h-auto flex-col gap-4 px-4 text-center lg:h-[500px] lg:flex-row lg:px-0">
        <CategoryCard
          overlay="vegetables"
          className="rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] rounded-tr-[5px] px-6 py-36 lg:rounded-bl-none lg:rounded-tl-none lg:p-0"
        >
          <h3 className="z-10 text-2xl font-black uppercase text-white md:text-[34px]">
            Fresh Vegetables
          </h3>
          <div className="z-10 mt-2">
            <ButtonLink size="default" variant="primary" href="/products?category=vegetables">
              Shop Vegetables
            </ButtonLink>
          </div>
        </CategoryCard>

        <CategoryCard
          overlay="fruits"
          className="rounded-[5px] px-6 py-36 lg:p-0"
        >
          <h3 className="z-10 text-2xl font-black uppercase text-white md:text-[34px]">
            Seasonal Fruits
          </h3>
          <div className="z-10 mt-2">
            <ButtonLink size="default" variant="primary" href="/products?category=fruits">
              Shop Fruits
            </ButtonLink>
          </div>
        </CategoryCard>

        <CategoryCard
          overlay="meat"
          className="rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] rounded-tr-[5px] px-6 py-36 lg:rounded-br-none lg:rounded-tr-none lg:p-0"
        >
          <h3 className="z-10 text-2xl font-black uppercase text-white md:text-[34px]">
            Meat & Poultry
          </h3>
          <div className="z-10 mt-2">
            <ButtonLink size="default" variant="primary" href="/products?category=meat&category=poultry">
              Shop Meat & Poultry
            </ButtonLink>
          </div>
        </CategoryCard>
      </div>
      <div className="mt-16">
        <SectionHeader align="center">Popular Products</SectionHeader>
        <div className="mt-10 p-4">
          <Suspense fallback={<SliderLoader />}>
            <ProductsSliderSection />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Products;
