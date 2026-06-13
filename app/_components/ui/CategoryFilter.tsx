type CategoryType = {
  name: string;
  placeholder: string;
};

type CategoryFilterPropType = {
  category: CategoryType[];
};

const CategoryFilter = ({ category }: CategoryFilterPropType) => {
  return (
    <fieldset className="mt-4 flex flex-col">
      {category.map((item) => (
        <label
          className="flex items-center gap-2 text-base font-medium text-secondary-200"
          key={item.name}
        >
          <input
            className="peer hidden"
            type="checkbox"
            name={item.name}
            value={item.name}
          />
          <div className="flex h-[14px] w-[14px] items-center justify-center rounded border border-muted-500 transition peer-checked:border-accent-700 peer-checked:bg-accent-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              className="h-4 w-4 text-white opacity-100"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {item.placeholder}
        </label>
      ))}
    </fieldset>
  );
};

export default CategoryFilter;
