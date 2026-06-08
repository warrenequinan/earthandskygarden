import Image from "next/image";
import Description from "@/app/_components/ui/Description";
import SectionHeader from "@/app/_components/ui/SectionHeader";
import vegetableCategory from "@/public/eas-vegetable-category-thumbnail.png";
import fruitsCategory from "@/public/eas-fruits-category-thumbnail.png";
import meatCategory from "@/public/eas-meat-and-poultry-category-thumbnail.png";
import Button from "@/app/_components/ui/Button";

const Products = () => {
  return (
    <section className="w-full pb-[72px]">
      <div className="mx-auto max-w-[1320px] px-4">
        <SectionHeader align="left">OUR PRODUCTS</SectionHeader>
        <Description align="left" className="mb-8 mt-8 max-w-[735px]">
          Discover the finest harvest from our farm, featuring fresh vegetables,
          carefully cultivated mushrooms, and responsibly produced livestock
          products. Our commitment to quality and sustainable farming ensures
          that every item delivers freshness, flavor, and value you can trust.
        </Description>
      </div>
      <div className="mt-8 flex">
        <div className="bg-secondary-100 relative flex flex-1 flex-col items-center justify-center p-20">
          <div className="relative z-10 mb-4 h-[186px] w-[186px]">
            <Image
              src={vegetableCategory}
              fill
              alt="vegetable category thumbnail"
            />
          </div>
          <h3 className="z-10 text-2xl font-black uppercase text-primary">
            Vegetables
          </h3>
          <div className="z-10 mt-2">
            <Button>Browse Products</Button>
          </div>
          <Image
            className="object-cover"
            src="/eas-category-overlay-1.png"
            fill
            alt="category overlay 1"
          />
        </div>
        <div className="bg-brown-100 relative flex flex-1 flex-col items-center justify-center p-20">
          <div className="relative z-10 mb-4 h-[186px] w-[186px]">
            <Image src={fruitsCategory} fill alt="fruit category thumbnail" />
          </div>
          <h3 className="z-10 text-2xl font-black uppercase text-primary">
            Fruits
          </h3>
          <div className="z-10 mt-2">
            <Button>Browse Products</Button>
          </div>
          <Image
            className="object-cover"
            src="/eas-category-overlay-2.png"
            fill
            alt="category overlay 2"
          />
        </div>
        <div className="bg-secondary-100 relative flex flex-1 flex-col items-center justify-center p-20">
          <div className="relative z-10 mb-4 h-[186px] w-[186px]">
            <Image
              src={meatCategory}
              fill
              alt="meat and poultry category thumbnail"
            />
          </div>
          <h3 className="z-10 text-2xl font-black uppercase text-primary">
            Meat & Poultry
          </h3>
          <div className="z-10 mt-2">
            <Button>Browse Products</Button>
          </div>
          <Image
            className="object-cover"
            src="/eas-category-overlay-3.png"
            fill
            alt="category overlay 3"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
