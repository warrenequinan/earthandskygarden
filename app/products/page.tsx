import HeroSection from "@/app/_components/ui/HeroSection";
import SectionContainer from "@/app/_components/ui/SectionContainer";
import { HiAdjustments } from "react-icons/hi";
import { HiTrash, HiXMark } from "react-icons/hi2";
import Button from "../_components/ui/Button";
import CategoryFilter from "../_components/ui/CategoryFilter";

const Products = () => {
  const title = {
    before: "",
    highlight: "Fresh",
    after: "From the farm",
  };

  const breadcrumb = [{ name: "Home", link: "/" }, { name: "Products" }];
  const category = [
    { name: "vegetables", placeholder: "Vegetables" },
    { name: "fruits", placeholder: "Fruits" },
    { name: "meat", placeholder: "Meat" },
    { name: "poultry", placeholder: "Poultry" },
    { name: "mushrooms", placeholder: "Mushrooms" },
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
          <div>
            <div className="border-b border-muted-500 pb-6">
              <div className="flex items-center gap-2">
                <HiAdjustments className="text-xl text-muted-600" />
                <h5 className="text-xl font-bold uppercase text-primary">
                  Filter:
                </h5>
              </div>
              <div className="mt-6 inline-block">
                <button
                  className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary"
                >
                  <HiXMark strokeWidth={3} /> vegetables
                </button>
                <button
                  className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary"
                >
                  <HiXMark strokeWidth={3} /> meat
                </button>
                <button
                  className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary"
                >
                  <HiXMark strokeWidth={3} /> poultry
                </button>
                <button
                  className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary"
                >
                  <HiXMark strokeWidth={3} /> mushrooms
                </button>
                <button
                  className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary"
                >
                  <HiXMark strokeWidth={3} /> ₱ 0.00 ─ ₱ 25.00
                </button>
              </div>
            </div>
            <div className="border-b border-muted-500 pb-6 pt-6">
              <Button size="small">
                <span className="flex items-center gap-1">
                  <HiTrash className="text-accent-600 text-[15px]" /> Clear All
                </span>
              </Button>
            </div>
            <div className="border-b border-muted-500 pb-6 pt-6">
              <div className="flex items-center gap-2">
                <HiAdjustments className="text-xl text-muted-600" />
                <h5 className="text-xl font-bold uppercase text-primary">
                  Categories:
                </h5>
              </div>
              <CategoryFilter category={category} />
            </div>
          </div>
          <div>products</div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Products;
