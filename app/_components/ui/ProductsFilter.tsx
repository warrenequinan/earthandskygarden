import CategoryFilter from "@/app/_components/ui/CategoryFilter";

const ProductsFilter = () => {
  const category = [
    { name: "vegetables", placeholder: "Vegetables" },
    { name: "fruits", placeholder: "Fruits" },
    { name: "meat", placeholder: "Meat" },
    { name: "poultry", placeholder: "Poultry" },
    { name: "mushrooms", placeholder: "Mushrooms" },
  ];

  return (
    <>
      <div className="border-b border-muted-500 pb-6 pt-6">
        <div className="flex items-center gap-2">
          <h5 className="text-lg font-bold uppercase text-primary">
            Categories:
          </h5>
        </div>
        <CategoryFilter category={category} />
      </div>
      <div className="pb-0 lg:pb-6 pt-6">
        <div className="flex items-center gap-2">
          <h5 className="text-lg font-bold uppercase text-primary">Price:</h5>
        </div>

        <div className="mt-4 border-b border-muted-500 lg:border-none pb-6">
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
