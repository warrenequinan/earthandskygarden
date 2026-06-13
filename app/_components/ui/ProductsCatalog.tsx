import { Product } from "@/app/_types/product.types";
import ProductsSort from "@/app/_components/ui/ProductsSort";
import ProductItem from "@/app/_components/ui/ProductItem";
import Pagination from "@/app/_components/ui/Pagination";

type ProductsCatalogPropType = {
  products: Product[];
};

const ProductsCatalog = ({ products }: ProductsCatalogPropType) => {
  return (
    <div>
      <div className="flex flex-col-reverse items-start justify-end gap-4 md:flex-row md:items-center">
        <ProductsSort />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className="text-base font-bold text-primary">
          Showing <span className="text-accent-700">1 to 12</span> of products
          results
        </p>
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsCatalog;
