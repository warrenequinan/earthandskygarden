export type ProductImages = {
  url: string;
  alt: string;
};

export type ProductsCatalogType = {
  id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
  slug: string;
  unit: {
    value: number;
    type: string;
  };
  images: ProductImages[];
};

export type ProductResponse = {
  data: Product[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  discount: number;
  slug: string;
  description: string;
  price: number;
  unit: {
    value: number;
    type: string;
  };
  stock: number;
  sku: string;
  images: ProductImages[];
};