import { getProducts } from "@/app/_lib/products";
import ProductSlider from "./ProductSlider";

const products = [
  {
    id: 1,
    name: "Carrot",
    category: "Vegetables",
    price: 100,
    discount: 10,
    slug: "carrot",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Carrot.png",
        alt: "Carrot",
      },
    ],
  },
  {
    id: 2,
    name: "Brocolli",
    category: "Vegetables",
    price: 100,
    discount: 0,
    slug: "brocolli",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Brocolli.png",
        alt: "Brocolli",
      },
    ],
  },
  {
    id: 3,
    name: "Banana",
    category: "Fruits",
    price: 50,
    discount: 8,
    slug: "banana",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Banana.png",
        alt: "Banana",
      },
    ],
  },
  {
    id: 4,
    name: "Cabbage",
    category: "Vegetables",
    price: 80,
    discount: 0,
    slug: "cabbage",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Cabbage.png",
        alt: "Cabbage",
      },
    ],
  },
  {
    id: 5,
    name: "Tomato",
    category: "Vegetables",
    price: 25,
    discount: 8,
    slug: "tomato",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Tomato.png",
        alt: "Tomato",
      },
    ],
  },
  {
    id: 6,
    name: "Porkchop",
    category: "Meat",
    price: 30,
    discount: 0,
    slug: "porkchop",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Porkchop.png",
        alt: "Porkchop",
      },
    ],
  },
  {
    id: 7,
    name: "Bell Pepper",
    category: "Vegetables",
    price: 35,
    discount: 20,
    slug: "bell-pepper",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Bell-pepper.png",
        alt: "Bell Pepper",
      },
    ],
  },
  {
    id: 8,
    name: "Chives",
    category: "Vegetables",
    price: 50,
    discount: 0,
    slug: "chives",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Chives.png",
        alt: "Chives",
      },
    ],
  },
  {
    id: 9,
    name: "Patola",
    category: "Vegetables",
    price: 25,
    discount: 3,
    slug: "patola",
    unit: {
      value: 1,
      type: "kg",
    },
    images: [
      {
        url: "/products-thumbnail/Patola.png",
        alt: "Patola",
      },
    ],
  },
];


const ProductsSliderSection = async () => {
  const products1 = await getProducts();
  console.log(products1);
  return <ProductSlider products={products1} />;
};

export default ProductsSliderSection;
