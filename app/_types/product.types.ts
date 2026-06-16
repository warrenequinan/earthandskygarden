export type PopularProductData = {
  id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
  image: string;
};

export type ProductImages = {
  url: string;
  alt: string;
};

export type Products = {
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
