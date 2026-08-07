import CategoryFilter from "@/app/_components/ui/CategoryFilter";
import FilterGroup from "./FilterGroup";

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
const ProductsFilter = () => {

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
        <FilterGroup name="discount" options={discount} defaultValue="all" />
      </div>
      <div className="pb-0 pt-6 lg:pb-6">
        <div className="flex items-center gap-2">
          <h5 className="text-lg font-semibold text-primary">Price:</h5>
        </div>
        <div className="mt-4 border-b border-muted-500 pb-6 lg:border-none">
          <fieldset className="flex items-center gap-2 text-[13px]">
            <label>
              <input
                type="text"
                className="h-8 w-[100px] rounded-[5px] bg-muted-500 pl-[12px] outline-accent-700"
                placeholder="₱ 0.00"
              />
            </label>
            <span className="font-medium text-primary">─</span>
            <label>
              <input
                type="text"
                className="h-8 w-[100px] rounded-[5px] bg-muted-500 pl-[12px] outline-accent-700"
                placeholder="₱ 700.00"
              />
            </label>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default ProductsFilter;
