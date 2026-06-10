import Image from "next/image";
import Description from "@/app/_components/ui/Description";
import SectionHeader from "@/app/_components/ui/SectionHeader";
import vegetableCategory from "@/public/eas-vegetable-category-thumbnail.png";
import fruitsCategory from "@/public/eas-fruits-category-thumbnail.png";
import meatCategory from "@/public/eas-meat-and-poultry-category-thumbnail.png";
import Button from "@/app/_components/ui/Button";
import CategoryCard from "@/app/_components/ui/CategoryCard";
import ProductSlider from "@/app/_components/ui/ProductSlider";

const Products = () => {
    const products = [
      {
        id: 1,
        name: "Brocolli",
        category: "Vegetables",
        price: 75,
        discount: 15,
        image: "/products-thumbnail/Brocolli.png",
      },
      {
        id: 2,
        name: "Banana",
        category: "Fruits",
        price: 50,
        discount: 0,
        image: "/products-thumbnail/Banana.png",
      },
      {
        id: 3,
        name: "Carrot",
        category: "Vegetables",
        price: 100,
        discount: 10,
        image: "/products-thumbnail/Carrot.png",
      },
      {
        id: 4,
        name: "Cabbage",
        category: "Vegetables",
        price: 80,
        discount: 0,
        image: "/products-thumbnail/Cabbage.png",
      },
      {
        id: 5,
        name: "Tomato",
        category: "Vegetables",
        price: 25,
        discount: 8,
        image: "/products-thumbnail/Tomato.png",
      },
      {
        id: 6,
        name: "Chives",
        category: "Vegetables",
        price: 30,
        discount: 0,
        image: "/products-thumbnail/Chives.png",
      },
      {
        id: 7,
        name: "Eggplant",
        category: "Vegetables",
        price: 40,
        discount: 3,
        image: "/products-thumbnail/Eggplant.png",
      },
      {
        id: 8,
        name: "Mushroom",
        category: "Vegetables",
        price: 80,
        discount: 0,
        image: "/products-thumbnail/Mushroom.png",
      },
      {
        id: 9,
        name: "Porkchop",
        category: "Meat",
        price: 120,
        discount: 10,
        image: "/products-thumbnail/Porkchop.png",
      },
      {
        id: 10,
        name: "Chili",
        category: "Vegetables",
        price: 20,
        discount: 0,
        image: "/products-thumbnail/Chili.png",
      },
    ];

  return (
    <section className="w-full pb-[72px]">
      <div className="relative mx-auto max-w-[1320px] px-4 xl:px-0">
        <SectionHeader align="left">OUR PRODUCTS</SectionHeader>
        <Description align="left" className="mb-8 mt-8 max-w-[735px]">
          Discover the finest harvest from our farm, featuring fresh vegetables,
          carefully cultivated mushrooms, and responsibly produced livestock
          products. Our commitment to quality and sustainable farming ensures
          that every item delivers freshness, flavor, and value you can trust.
        </Description>
        <div className="absolute right-0 top-0 hidden h-[250px] w-[250px] translate-x-[-300px] translate-y-[-50px] lg:block">
          <Image fill src="/eas-arrow-design-1.svg" alt="eas arrow design 1" />
        </div>
      </div>

      <div className="mt-8 flex flex-col text-center lg:flex-row">
        <CategoryCard overlay="vegetables">
          <div className="relative z-10 mb-4 h-[186px] w-[186px] transition-transform duration-300 group-hover:scale-110">
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
        </CategoryCard>

        <CategoryCard overlay="fruits">
          <div className="relative z-10 mb-4 h-[186px] w-[186px] transition-transform duration-300 group-hover:scale-110">
            <Image src={fruitsCategory} fill alt="fruit category thumbnail" />
          </div>
          <h3 className="z-10 text-2xl font-black uppercase text-primary">
            Fruits
          </h3>
          <div className="z-10 mt-2">
            <Button>Browse Products</Button>
          </div>
        </CategoryCard>

        <CategoryCard overlay="meat">
          <div className="relative z-10 mb-4 h-[186px] w-[186px] transition-transform duration-300 group-hover:scale-110">
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
        </CategoryCard>
      </div>
      <div className="mt-16">
        <SectionHeader align="center">Fresh Products</SectionHeader>
        <div className="mt-10 p-4">
          <ProductSlider products={products} />
        </div>
      </div>
    </section>
  );
};

export default Products;
