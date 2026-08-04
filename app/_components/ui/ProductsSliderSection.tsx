import { getPopularProducts } from "@/app/_lib/products";
import ProductSlider from "./ProductSlider";

const ProductsSliderSection = async () => {
  let popularProducts = null;

  try {
      popularProducts = await getPopularProducts();
  } catch {
    return (
      <div className="py-10 text-center">
        <h2 className="text-lg font-semibold text-primary">
          We couldn&apos;t load our products right now.
        </h2>
        <p className="text-gray-500">Please try again later.</p>
      </div>
    );
  }

  return <ProductSlider products={popularProducts} />;
};

export default ProductsSliderSection;
