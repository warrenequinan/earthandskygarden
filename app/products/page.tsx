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

    const products = [
      {
        id: 1,
        name: "Carrot",
        category: "Vegetables",
        price: 100,
        discount: 10,
        image: "/products-thumbnail/Carrot.png",
      },
      {
        id: 2,
        name: "Brocolli",
        category: "Vegetables",
        price: 100,
        discount: 0,
        image: "/products-thumbnail/Brocolli.png",
      },
      {
        id: 3,
        name: "Banana",
        category: "Fruits",
        price: 50,
        discount: 8,
        image: "/products-thumbnail/Banana.png",
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
        name: "Porkchop",
        category: "Meat",
        price: 30,
        discount: 0,
        image: "/products-thumbnail/Porkchop.png",
      },
      {
        id: 7,
        name: "Bell Pepper",
        category: "Vegetables",
        price: 35,
        discount: 20,
        image: "/products-thumbnail/Bell-pepper.png",
      },
      {
        id: 8,
        name: "Chives",
        category: "Vegetables",
        price: 50,
        discount: 0,
        image: "/products-thumbnail/Chives.png",
      },
      {
        id: 9,
        name: "Patola",
        category: "Vegetables",
        price: 25,
        discount: 3,
        image: "/products-thumbnail/Patola.png",
      },
      {
        id: 10,
        name: "Pechay",
        category: "Vegetables",
        price: 40,
        discount: 0,
        image: "/products-thumbnail/Pechay.png",
      },
      {
        id: 11,
        name: "Okra",
        category: "Vegetables",
        price: 35,
        discount: 10,
        image: "/products-thumbnail/Okra.png",
      },
      {
        id: 12,
        name: "Chicken",
        category: "Poultry",
        price: 300,
        discount: 0,
        image: "/products-thumbnail/Chicken.png",
      },
    ];

    
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
          <ProductsCatalog products={products} />
        </div>
      </SectionContainer>
    </>
  );
};

export default Products;
