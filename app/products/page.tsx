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

const Products = () => {
  const title = {
    before: "",
    highlight: "Fresh",
    after: "From the farm",
  };

  const breadcrumb = [{ name: "Home", link: "/" }, { name: "Products" }];

  return (
    <>
      <HeroSection
        title={title}
        breadcrumb={breadcrumb}
        background="/eas-products-page-hero-image.jpg"
      />
      <SectionContainer>
        <div className="grid grid-cols-1 gap-8 px-6 lg:grid-cols-[300px_1fr] lg:px-0">
          <SidebarFilter />
          <ProductsCatalog />
        </div>
      </SectionContainer>
    </>
  );
};

export default Products;
