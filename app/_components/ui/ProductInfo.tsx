import Badge from "@/app/_components/ui/Badge";
import type { Products } from "@/app/_types/product.types";
import clsx from "clsx";

type ProductInfoPropType = {
  product: Products;
};

const ProductInfo = ({ product }: ProductInfoPropType) => {
  const discount = product.discount
    ? product.price * (product.discount / 100)
    : 0;
  const finalPrice = product.price - discount;

  return (
    <>
      <div className="flex gap-2">
        <Badge className="bg-muted-500 text-primary">{product.category}</Badge>
        {product.discount && (
          <Badge className="bg-primary text-white">
            {product.discount}% discount
          </Badge>
        )}
      </div>

      <h5 className="mt-4 md:mt-6 md:mb-4 text-[24px] md:text-[34px] font-normal uppercase text-primary">
        {product.name}
      </h5>
      <div className="flex items-center gap-2 uppercase text-accent-700">
        <p className="text-[36px] md:text-6xl font-bold italic">₱ {finalPrice.toFixed(2)}</p>
        <div className="flex items-center gap-1 text-base font-medium italic">
          <span className="line-through">
            {discount > 0 && `₱ ${product.price.toFixed(2)}`}
          </span>
          <span>/ {product.unit.type}</span>
        </div>
      </div>
      <div className="my-4 border-y border-muted-500 py-4 uppercase">
        <p className="text-[13px] font-bold text-primary">
          Availability:
          <Badge
            className={clsx(
              "ml-2",
              product.stock !== 0 ? "bg-green-400 text-white" : "bg-yellow-300",
            )}
          >
            {product.stock !== 0
              ? `In Stock: ${product.stock}`
              : "Out of stock"}
          </Badge>
        </p>
      </div>
      <p className="pb-10 text-base font-medium text-muted-700">
        Fresh, crisp carrots packed with natural sweetness and essential
        nutrients. Carefully harvested for peak freshness, they offer a
        satisfying crunch and vibrant flavor that enhances a variety of dishes.
        Perfect for salads, soups, stir-fries, roasting, juicing, and healthy
        snacking, these versatile vegetables are a rich source of beta-carotene,
        fiber, and vitamins that support a balanced diet and healthy lifestyle.
      </p>
      <div>add to cart here</div>
    </>
  );
};

export default ProductInfo;
