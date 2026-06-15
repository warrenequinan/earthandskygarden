import HeroSection from "@/app/_components/ui/HeroSection";
import SectionContainer from "@/app/_components/ui/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover the finest harvest from our farm, featuring fresh vegetables, carefully cultivated mushrooms, and responsibly produced livestock products. Our commitment to quality and sustainable farming ensures that every item delivers freshness, flavor, and value you can trust.",
};

const Products = () => {
  const title = {
    before: "",
    highlight: "Products",
    after: "Details",
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
      <SectionContainer>Products information here</SectionContainer>
    </>
  );
};

export default Products;
