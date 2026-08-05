import { getPopularProducts } from "@/app/_lib/products";
import ProductSlider from "./ProductSlider";
import ErrorMessage from "./ErrorMessage";

const ProductsSliderSection = async () => {
  let popularProducts = null;
  const subtext = "Please try again later.";

  try {
    popularProducts = await getPopularProducts();
  } catch (err: unknown) {
    if (err instanceof Error) {
      return <ErrorMessage message={err.message} subtext={subtext} />;
    }
    return null;
  }

  return <ProductSlider products={popularProducts} />;
};

export default ProductsSliderSection;
