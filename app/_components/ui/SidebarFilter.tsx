import { HiAdjustments } from "react-icons/hi";
import { HiTrash, HiXMark } from "react-icons/hi2";
import Button from "@/app/_components/ui/Button";
import ProductsFilter from "./ProductsFilter";

const SidebarFilter = () => {
  return (
    <div>
      <div className="border-b border-muted-500 pb-6">
        <div className="flex items-center gap-2">
          <HiAdjustments className="text-xl text-muted-600" />
          <h5 className="text-lg font-semibold text-primary">Filter:</h5>
        </div>
        <div className="mt-6 inline-block">
          <button className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600">
            <HiXMark strokeWidth={3} /> vegetables
          </button>
          <button className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600">
            <HiXMark strokeWidth={3} /> meat
          </button>
          <button className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600">
            <HiXMark strokeWidth={3} /> poultry
          </button>
          <button className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600">
            <HiXMark strokeWidth={3} /> mushrooms
          </button>
          <button className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600">
            <HiXMark strokeWidth={3} /> ₱ 0.00 ─ ₱ 25.00
          </button>
        </div>
      </div>
      <div className="border-b border-muted-500 pb-6 pt-6">
        <Button size="small">
          <span className="flex items-center gap-1">
            <HiTrash className="text-[15px] text-accent-600" /> Clear All
          </span>
        </Button>
      </div>
      <ProductsFilter />
    </div>
  );
};

export default SidebarFilter;
