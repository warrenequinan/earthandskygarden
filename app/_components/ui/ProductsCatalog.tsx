import ProductsSort from "@/app/_components/ui/ProductsSort";
import ProductsList from "./ProductsList";
import { Suspense } from "react";
import { SearchParams } from "@/app/_types/SearchParams.types";

type ProductsCatalogProps = {
  params: SearchParams;
};

const ProductsCatalog = ({ params }: ProductsCatalogProps) => {
  return (
    <div>
      <div className="flex flex-col-reverse items-start justify-end gap-4 md:flex-row md:items-center">
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
