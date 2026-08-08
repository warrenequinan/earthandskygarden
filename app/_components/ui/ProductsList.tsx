import Pagination from "./Pagination";
import ProductItem from "@/app/_components/ui/ProductItem";
import ErrorMessage from "./ErrorMessage";
import { ProductResponse } from "@/app/_types/product.types";
import { getProducts } from "@/app/_lib/products";
import { SearchParams } from "@/app/_types/SearchParams.types";
import { redirect } from "next/navigation";

const ProductsList = async ({ params }: { params: SearchParams }) => {
  let products: null | ProductResponse = null;
  let hasError = false;
  const category = params.category ?? null;
  const discount = params.discount ?? null;
  const priceLte = params.priceLte ?? 0;
  const priceGte = params.priceGte ?? 0;
  const show = params.show ?? 12;
  const order = params.order ?? "default";
  const page = params.page ?? 1;
  const pageSize = show;

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

  const pagination = {
    page,
    pageSize,
  };

  try {
    products = await getProducts(filter, sort, pagination);
  } catch (err) {
    if (
      typeof err === "object" &&
      err !== null &&
      "code" in err &&
      err.code === "PGRST103"
    ) {
      const queryParams = new URLSearchParams();

      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            queryParams.append(key, String(item));
          });
        } else {
          queryParams.set(key, String(value));
        }
      });

      queryParams.set("page", "1");

      redirect(`/products?${queryParams.toString()}`);
    }

    console.error("Error fetching products:", err);
    hasError = true;
  }

  const isProductsAvailable = products && products.data.length > 0;
  const numberOfPages = Math.ceil(
    (products?.totalItems ?? 0) / Number(pageSize),
  );

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {isProductsAvailable ? (
          products?.data.map((product) => (
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
            Showing{" "}
            <span className="text-accent-700">
              {(Number(page) - 1) * Number(pageSize) + 1} to{" "}
              {Math.min(
                Number(page) * Number(pageSize),
                products?.totalItems ?? 0,
              )}
            </span>{" "}
            of {products?.totalItems} products results
          </p>
          <Pagination totalPage={numberOfPages} activePage={Number(page)} />
        </div>
      )}
    </>
  );
};

export default ProductsList;
