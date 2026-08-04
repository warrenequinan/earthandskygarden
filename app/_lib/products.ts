import { supabase } from "./supabase";

export const getProducts = async () => {
  const { data: products, error } = await supabase
    .from("products")
    .select("id,name,category,price,discount,slug,unit, images");
  if (error) throw new Error("There is a problem in fetching products");
  return products;
};
