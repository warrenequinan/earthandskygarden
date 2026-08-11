import { HiAdjustments } from "react-icons/hi";
import ProductsFilter from "./ProductsFilter";
import { SearchParams } from "@/app/_types/SearchParams.types";
import FilterList from "./FilterList";
import ClearFilter from "./ClearFilter";

type SidebarFilterPropsType = {
  params: SearchParams;
  sidebarName: string;
};

const SidebarFilter = ({ params, sidebarName }: SidebarFilterPropsType) => {
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
          <ClearFilter />
        </div>
      )}
      <ProductsFilter sidebarName={sidebarName} />
    </div>
  );
};

export default SidebarFilter;
