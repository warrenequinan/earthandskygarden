import { ProductsCatalogType } from "../_types/product.types";
import { supabase } from "./supabase";

type FilterType = string | string[] | null | number;

type Filter = Record<
  "category" | "discount" | "priceLte" | "priceGte",
  FilterType
>;

export const getProducts = async (filter: Filter) => {
  let query = supabase
    .from("products")
    .select("id,name,category,price,discount,slug,unit, images");

  if (filter.category) {
    if (Array.isArray(filter.category)) {
      query = query.in("category", filter.category);
    } else {
      query = query.eq("category", filter.category);
    }
  }

  if (filter.discount) {
    if (filter.discount === "with-discount") {
      query = query.gt("discount", 0);
    } else if (filter.discount === "without-discount") {
      query = query.eq("discount", 0);
    }
  }

  if (filter.priceLte && !Array.isArray(filter.priceLte)) {
    query = query.lte("price", filter.priceLte);
  }

  if (filter.priceGte && !Array.isArray(filter.priceGte)) {
    query = query.gte("price", filter.priceGte);
  }

  const { data: products, error } = await query;

  if (error) throw new Error("There is a problem in fetching products.");

  return products as unknown as ProductsCatalogType[];
};

export const getPopularProducts = async () => {
  const { data: products, error } = await supabase
    .from("popular_products")
    .select(
      "products!product_id (id,name,category,price,discount,slug,unit,images)",
    );
  if (error)
    throw new Error("There is a problem in fetching popular products.");
  return products.map(
    (item) => item.products as unknown as ProductsCatalogType,
  );
};
