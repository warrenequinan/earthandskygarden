import { ProductResponse, ProductsCatalogType } from "../_types/product.types";
import { supabase } from "./supabase";

type SearchParamValue = string | string[] | null | number;

type Filter = Record<
  "category" | "discount" | "priceLte" | "priceGte",
  SearchParamValue
>;

type Sort = Record<"show" | "order", SearchParamValue>;

type Pagination = Record<"page" | "pageSize", SearchParamValue>;

export const getProducts = async (
  filter: Filter,
  sort: Sort,
  pagination: Pagination,
) => {
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
    } else {
      query = query.eq("discount", 0);
    }
  }

  if (filter.priceLte && !Array.isArray(filter.priceLte)) {
    query = query.lte("price", filter.priceLte);
  }

  if (filter.priceGte && !Array.isArray(filter.priceGte)) {
    query = query.gte("price", filter.priceGte);
  }

  if (sort.show && !Array.isArray(sort.show)) {
    query = query.limit(Number(sort.show));
  }

  if (sort.order && !Array.isArray(sort.order)) {
    switch (sort.order) {
      case "price_asc":
        query = query.order("price", { ascending: true });
        break;
      case "price_desc":
        query = query.order("price", { ascending: false });
        break;
      case "name_asc":
        query = query.order("name", { ascending: true });
        break;
      case "name_desc":
        query = query.order("name", { ascending: false });
        break;
    }
  }

  if (pagination.page && !Array.isArray(pagination.page)) {
    query = query.range(
      (Number(pagination.page) - 1) * Number(pagination.pageSize),
      Number(pagination.page) * Number(pagination.pageSize) - 1,
    );
  }

  const { data, count, error } = await query;

  if (error) throw new Error("There is a problem in fetching products.");

  return {
      data,
      totalItems: count ?? 0,
      totalPages: Math.ceil((count ?? 0) / Number(pagination.pageSize)),
      currentPage: Number(pagination.page),
  } as unknown as ProductResponse;
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
