import { ProductsCatalogType } from "../_types/product.types";
import { supabase } from "./supabase";

export const getProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("id,name,category,price,discount,slug,unit, images");
  if (error) throw new Error("There is a problem in fetching products.");
  return products;
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
