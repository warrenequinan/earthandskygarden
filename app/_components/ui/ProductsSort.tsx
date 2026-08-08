import OrderSort from "./OrderSort";
import ShowSort from "./ShowSort";

const ProductsSort = () => {
  return (
    <div className="flex items-center">
      <div>
        <fieldset className="flex flex-col items-start gap-2 md:flex-row md:gap-8">
          <ShowSort />
          <OrderSort />
        </fieldset>
      </div>
    </div>
  );
};

export default ProductsSort;
