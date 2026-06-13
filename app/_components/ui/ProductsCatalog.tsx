import ProductsSort from "./ProductsSort";

const ProductsCatalog = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-base font-bold text-primary">
          Showing <span className="text-accent-700">24</span> Product Results
        </p>
        <ProductsSort />
      </div>
    </div>
  );
};

export default ProductsCatalog;
