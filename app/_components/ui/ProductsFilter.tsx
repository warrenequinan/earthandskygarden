import CategoryFilter from "@/app/_components/ui/CategoryFilter";
import FilterGroup from "./FilterGroup";
import PriceFilter from "./PriceFilter";

  const category = [
    { name: "vegetables", placeholder: "Vegetables" },
    { name: "fruits", placeholder: "Fruits" },
    { name: "meat", placeholder: "Meat" },
    { name: "poultry", placeholder: "Poultry" },
    { name: "mushrooms", placeholder: "Mushrooms" },
  ];

  const discount = [
    { name: "all", placeholder: "All" },
    { name: "with-discount", placeholder: "With Discount" },
    { name: "without-discount", placeholder: "Without Discount" },
];
  
type ProductsFilterType = {
  sidebarName: string;
};
const ProductsFilter = ({ sidebarName }: ProductsFilterType) => {
  return (
    <>
      <div className="border-b border-muted-500 pb-6 pt-6">
        <div className="flex items-center gap-2">
          <h5 className="text-lg font-semibold text-primary">Categories:</h5>
        </div>
        <CategoryFilter category={category} />
      </div>
      <div className="border-b border-muted-500 pb-6 pt-6">
        <div className="flex items-center gap-2">
          <h5 className="text-lg font-semibold text-primary">Discount:</h5>
        </div>
        <FilterGroup
          name="discount"
          groupName={sidebarName}
          options={discount}
          defaultValue="all"
        />
      </div>
      <div className="pb-0 pt-6 lg:pb-6">
        <div className="flex items-center gap-2">
          <h5 className="text-lg font-semibold text-primary">Price:</h5>
        </div>
        <div className="mt-4 border-b border-muted-500 pb-6 lg:border-none">
          <PriceFilter />
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;
