import CardContainer from "./CardContainer";


type ProductsLoader = {
    items: number;
}

const ProductsLoader = ({ items }: ProductsLoader) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {Array.from({ length: items }).map((_, index) => (
        <CardContainer
          key={index}
          className={`h-[338.967px] w-full overflow-hidden bg-muted-200`}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        </CardContainer>
      ))}
    </div>
  );
};

export default ProductsLoader;
