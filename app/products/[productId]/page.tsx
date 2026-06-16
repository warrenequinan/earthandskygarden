import HeroSection from "@/app/_components/ui/HeroSection";
import ProductInfo from "@/app/_components/ui/ProductInfo";
import ProductThumbSlider from "@/app/_components/ui/ProductThumbSlider";
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
  const breadcrumb = [{ name: "Home", link: "/" }, { name: "Carrots" }];

  return (
    <>
      <HeroSection
        title={title}
        breadcrumb={breadcrumb}
        background={background}
      />
      <SectionContainer className="px-6 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="w-full min-w-0 lg:max-w-[600px] flex-1">
            <ProductThumbSlider images={productTemp.images} />
          </div>
          <div className="flex-1">
            <ProductInfo product={productTemp} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Page;
