import ProductsSort from "@/app/_components/ui/ProductsSort";
import ProductsList from "./ProductsList";
import { Suspense } from "react";
import { SearchParams } from "@/app/_types/SearchParams.types";
import MobileSidebar, {
  MobileSidebarContent,
  MobileSidebarTrigger,
} from "./MobileSidebar";
import SidebarFilter from "./SidebarFilter";
import Sidebar from "./Sidebar";
import { HiAdjustments } from "react-icons/hi";

type ProductsCatalogProps = {
  params: SearchParams;
};

const ProductsCatalog = ({ params }: ProductsCatalogProps) => {
  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center lg:justify-end">
        <div className="lg:hidden">
          <MobileSidebar>
            <MobileSidebarTrigger>
              <HiAdjustments className="text-xl text-white" /> Filter
            </MobileSidebarTrigger>
            <MobileSidebarContent>
              <Sidebar>
                <SidebarFilter params={params} sidebarName="mobile-filter" />
              </Sidebar>
            </MobileSidebarContent>
          </MobileSidebar>
        </div>

        <ProductsSort />
      </div>
      <Suspense
        fallback={
          <p className="text-center text-lg font-semibold text-primary">
            Loading products...
          </p>
        }
      >
        <ProductsList params={params} />
      </Suspense>
    </div>
  );
};

export default ProductsCatalog;
