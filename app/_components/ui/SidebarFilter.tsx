import { HiAdjustments } from "react-icons/hi";
import { HiTrash } from "react-icons/hi2";
import Button from "@/app/_components/ui/Button";
import ProductsFilter from "./ProductsFilter";
import { SearchParams } from "@/app/_types/SearchParams.types";
import FilterList from "./FilterList";

type SidebarFilterPropsType = {
  params: SearchParams;
};

const SidebarFilter = ({ params }: SidebarFilterPropsType) => {
  const hasParams = Object.keys(params).length > 0;
  return (
    <div>
      <div className="border-b border-muted-500 pb-6">
        <div className="flex items-center gap-2">
          <HiAdjustments className="text-xl text-muted-600" />
          <h5 className="text-lg font-semibold text-primary">Filter:</h5>
        </div>
        <FilterList />
      </div>
      {hasParams && (
        <div className="border-b border-muted-500 pb-6 pt-6">
          <Button size="small" variant="primary">
            <span className="flex items-center gap-1">
              <HiTrash className="text-[15px] text-accent-600" /> Clear All
            </span>
          </Button>
        </div>
      )}
      <ProductsFilter />
    </div>
  );
};

export default SidebarFilter;
