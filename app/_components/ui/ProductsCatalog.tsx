import { Product } from "@/app/_types/product.types";
import ProductsSort from "./ProductsSort";
import ProductItem from "./ProductItem";

type ProductsCatalogPropType = {
  products: Product[];
};

const ProductsCatalog = ({ products }: ProductsCatalogPropType) => {
  return (
    <div>
      <div className="flex flex-col-reverse items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="md:0 mt-4 text-base font-bold text-primary">
          Showing <span className="text-accent-700">24</span> Product Results
        </p>
        <ProductsSort />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className="md:0 mt-4 text-base font-bold text-primary">
          Showing <span className="text-accent-700">1 to 12</span> of products
          results
        </p>
      </div>
    </div>
  );
};

export default ProductsCatalog;
