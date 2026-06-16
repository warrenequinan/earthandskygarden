import HeroSection from "@/app/_components/ui/HeroSection";
import SectionContainer from "@/app/_components/ui/SectionContainer";
import SidebarFilter from "@/app/_components/ui/SidebarFilter";
import ProductsCatalog from "../_components/ui/ProductsCatalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover the finest harvest from our farm, featuring fresh vegetables, carefully cultivated mushrooms, and responsibly produced livestock products. Our commitment to quality and sustainable farming ensures that every item delivers freshness, flavor, and value you can trust.",
};

const Page = () => {
  const title = {
    before: "",
    highlight: "Fresh",
    after: "From the farm",
  };
  const breadcrumb = [{ name: "Home", link: "/" }, { name: "Products" }];
  const background = {
    url: "/eas-products-page-hero-image.jpg",
    alt: "eas products page hero image",
  };

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
  {
    id: 10,
    name: "Pechay",
    category: "Vegetables",
    price: 40,
    discount: 0,
    slug: "pechay",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Pechay.png",
        alt: "Pechay",
      },
    ],
  },
  {
    id: 11,
    name: "Okra",
    category: "Vegetables",
    price: 35,
    discount: 10,
    slug: "okra",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Okra.png",
        alt: "Okra",
      },
    ],
  },
  {
    id: 12,
    name: "Chicken",
    category: "Poultry",
    price: 300,
    discount: 0,
    slug: "chicken",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Chicken.png",
        alt: "Chicken",
      },
    ],
  },
];

  return (
    <>
      <HeroSection
        title={title}
        breadcrumb={breadcrumb}
        background={background}
      />
      <SectionContainer>
        <div className="grid grid-cols-1 gap-8 px-6 lg:grid-cols-[300px_1fr] lg:px-0">
          <SidebarFilter />
          <ProductsCatalog products={products} />
        </div>
      </SectionContainer>
    </>
  );
};

export default Page;
