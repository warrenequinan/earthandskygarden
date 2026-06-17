import HeroSection from "@/app/_components/ui/HeroSection";
import ProductInfo from "@/app/_components/ui/ProductInfo";
import ProductThumbSlider from "@/app/_components/ui/ProductThumbSlider";
import RecommendedProducts from "@/app/_components/ui/RecommendedProducts";
import SectionContainer from "@/app/_components/ui/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover the finest harvest from our farm, featuring fresh vegetables, carefully cultivated mushrooms, and responsibly produced livestock products. Our commitment to quality and sustainable farming ensures that every item delivers freshness, flavor, and value you can trust.",
};

const productTemp = {
  id: 1,
  name: "carrot",
  slug: "carrot",
  discount: 10,
  category: "vegetables",
  description:
    "Fresh, crisp carrots packed with natural sweetness and essential nutrients. Carefully harvested for peak freshness, they offer a satisfying crunch and vibrant flavor that enhances a variety of dishes. Perfect for salads, soups, stir-fries, roasting, juicing, and healthy snacking, these versatile vegetables are a rich source of beta-carotene, fiber, and vitamins that support a balanced diet and healthy lifestyle.",
  price: 100,
  unit: {
    value: 1,
    type: "kg",
  },
  stock: 120,
  sku: "carrot-1kg",
  images: [
    {
      url: "/products-gallery/carrot-1.png",
      alt: "eas products carrot 1",
    },
    {
      url: "/products-gallery/carrot-2.png",
      alt: "eas products carrot 2",
    },
    {
      url: "/products-gallery/carrot-3.png",
      alt: "eas products carrot 3",
    },
  ],
};

const Page = () => {
  const title = {
    before: "Fresh",
    highlight: productTemp.name,
    after: "",
  };
  const background = {
    url: "/eas-products-details-hero-image.jpg",
    alt: "eas products details hero image",
  };
  const breadcrumb = [
    { name: "Home", link: "/" },
    { name: "All products", link: "/products" },
    { name: "Carrots" },
  ];

  const products = [
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
  ];
  return (
    <>
      <HeroSection
        title={title}
        breadcrumb={breadcrumb}
        background={background}
      />
      <SectionContainer className="mb-[72px] px-6 xl:px-0">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="w-full min-w-0 flex-1 lg:max-w-[600px]">
            <ProductThumbSlider images={productTemp.images} />
          </div>
          <div className="flex-1">
            <div className="sticky top-24">
              <ProductInfo product={productTemp} />
            </div>
          </div>
        </div>
      </SectionContainer>
      <RecommendedProducts products={products} />
    </>
  );
};

export default Page;
