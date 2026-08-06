import { ProductsCatalogType } from "@/app/_types/product.types";
import ProductsSort from "@/app/_components/ui/ProductsSort";
import ProductItem from "@/app/_components/ui/ProductItem";
import Pagination from "@/app/_components/ui/Pagination";
import ErrorMessage from "./ErrorMessage";

type ProductsCatalogPropType = {
  products: ProductsCatalogType[] | null;
  hasError: boolean;
};

const ProductsCatalog = ({ products, hasError }: ProductsCatalogPropType) => {
  const isProductsAvailable = products && products.length > 0;

  return (
    <div>
      <div className="flex flex-col-reverse items-start justify-end gap-4 md:flex-row md:items-center">
        <ProductsSort />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {isProductsAvailable ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : hasError ? (
          <ErrorMessage
            className="col-span-full"
            message="An error occurred while fetching products."
            subtext="Please try again later."
          />
        ) : (
          <p className="col-span-full text-center text-lg font-semibold text-primary">
            No products found.
          </p>
        )}
      </div>
      {isProductsAvailable && (
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-base font-bold text-primary">
            Showing <span className="text-accent-700">1 to 12 of 24 </span>
            products results
          </p>
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default ProductsCatalog;
