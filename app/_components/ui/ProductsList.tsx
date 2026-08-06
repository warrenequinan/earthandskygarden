import Pagination from "./Pagination";
import ProductItem from "@/app/_components/ui/ProductItem";
import ErrorMessage from "./ErrorMessage";
import { ProductsCatalogType } from "@/app/_types/product.types";
import { getProducts } from "@/app/_lib/products";
import { SearchParams } from "@/app/_types/SearchParams.types";

const ProductsList = async ({ params }: { params: SearchParams }) => {
  let products: null | ProductsCatalogType[] = null;
  let hasError = false;
  const category = params.category ?? null;
  const discount = params.discount ?? null;
  const priceLte = params.priceLte ?? 0;
  const priceGte = params.priceGte ?? 0;
  const show = params.show ?? 12;
  const order = params.order ?? null;
  const filter = {
    category,
    discount,
    priceLte,
    priceGte,
    show,
  };
  const sort = {
    show,
    order,
  };

  try {
    products = await getProducts(filter, sort);
  } catch (err) {
    console.error("Error fetching products:", err);
    hasError = true;
  }

  const isProductsAvailable = products && products.length > 0;

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {isProductsAvailable ? (
          products?.map((product) => (
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
    </>
  );
};

export default ProductsList;
