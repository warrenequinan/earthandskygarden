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
      name: "Carrot",
      category: "Vegetables",
      price: 100,
      discount: 10,
      slug: "carrot",
      unit: {
        value: 1,
        type: "kg",
      },
      images: [
        {
          url: "/products-thumbnail/Carrot.png",
          alt: "Carrot",
        },
      ],
    },
    {
      id: 2,
      name: "Brocolli",
      category: "Vegetables",
      price: 100,
      discount: 0,
      slug: "brocolli",
      unit: {
        value: 1,
        type: "kg",
      },
      images: [
        {
          url: "/products-thumbnail/Brocolli.png",
          alt: "Brocolli",
        },
      ],
    },
    {
      id: 3,
      name: "Banana",
      category: "Fruits",
      price: 50,
      discount: 8,
      slug: "banana",
      unit: {
        value: 1,
        type: "kg",
      },
      images: [
        {
          url: "/products-thumbnail/Banana.png",
          alt: "Banana",
        },
      ],
    },
    {
      id: 4,
      name: "Cabbage",
      category: "Vegetables",
      price: 80,
      discount: 0,
      slug: "cabbage",
      unit: {
        value: 1,
        type: "kg",
      },
      images: [
        {
          url: "/products-thumbnail/Cabbage.png",
          alt: "Cabbage",
        },
      ],
    },
    {
      id: 5,
      name: "Tomato",
      category: "Vegetables",
      price: 25,
      discount: 8,
      slug: "tomato",
      unit: {
        value: 1,
        type: "kg",
      },
      images: [
        {
          url: "/products-thumbnail/Tomato.png",
          alt: "Tomato",
        },
      ],
    },
    {
      id: 6,
      name: "Porkchop",
      category: "Meat",
      price: 30,
      discount: 0,
      slug: "porkchop",
      unit: {
        value: 1,
        type: "kg",
      },
      images: [
        {
          url: "/products-thumbnail/Porkchop.png",
          alt: "Porkchop",
        },
      ],
    },
    {
      id: 7,
      name: "Bell Pepper",
      category: "Vegetables",
      price: 35,
      discount: 20,
      slug: "bell-pepper",
      unit: {
        value: 1,
        type: "kg",
      },
      images: [
        {
          url: "/products-thumbnail/Bell-pepper.png",
          alt: "Bell Pepper",
        },
      ],
    },
    {
      id: 8,
      name: "Chives",
      category: "Vegetables",
      price: 50,
      discount: 0,
      slug: "chives",
      unit: {
        value: 1,
        type: "kg",
      },
      images: [
        {
          url: "/products-thumbnail/Chives.png",
          alt: "Chives",
        },
      ],
    },
    {
      id: 9,
      name: "Patola",
      category: "Vegetables",
      price: 25,
      discount: 3,
      slug: "patola",
      unit: {
        value: 1,
        type: "kg",
      },
      images: [
        {
          url: "/products-thumbnail/Patola.png",
          alt: "Patola",
        },
      ],
    },
  ];

  return (
    <section className="w-full pb-[72px]">
      <div className="relative mx-auto max-w-[1320px] px-4 xl:px-0">
        <SectionHeader align="left">Shop by category</SectionHeader>
        <Description align="left" className="mb-8 mt-8 max-w-[735px]">
          Discover the finest harvest from our farm, featuring fresh vegetables,
          carefully cultivated mushrooms, and responsibly produced livestock
          products. Our commitment to quality and sustainable farming ensures
          that every item delivers freshness, flavor, and value you can trust.
        </Description>
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
            <Button size="default" variant="primary">
              Shop Vegetables
            </Button>
          </div>
        </CategoryCard>

        <CategoryCard overlay="fruits">
          <div className="relative z-10 mb-4 h-[186px] w-[186px] transition-transform duration-300 group-hover:scale-110">
            <Image
              src={fruitsCategory}
              fill
              alt="fruit category thumbnail"
              quality={100}
            />
          </div>
          <h3 className="z-10 text-2xl font-black uppercase text-primary">
            Fruits
          </h3>
          <div className="z-10 mt-2">
            <Button size="default" variant="primary">
              Shop Fruits
            </Button>
          </div>
        </CategoryCard>

        <CategoryCard overlay="meat">
          <div className="relative z-10 mb-4 h-[186px] w-[186px] transition-transform duration-300 group-hover:scale-110">
            <Image
              src={meatCategory}
              fill
              alt="meat and poultry category thumbnail"
              quality={100}
            />
          </div>
          <h3 className="z-10 text-2xl font-black uppercase text-primary">
            Meat & Poultry
          </h3>
          <div className="z-10 mt-2">
            <Button size="default" variant="primary">
              Shop Meat & Poultry
            </Button>
          </div>
        </CategoryCard>
      </div>
      <div className="mt-16">
        <SectionHeader align="center">Popular Products</SectionHeader>
        <div className="mt-10 p-4">
          <ProductSlider products={products} />
        </div>
      </div>
    </section>
  );
};

export default Products;
