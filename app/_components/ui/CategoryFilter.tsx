"use client";

import { useRouter, useSearchParams } from "next/navigation";
type CategoryType = {
  name: string;
  placeholder: string;
};

type CategoryFilterPropType = {
  category: CategoryType[];
};

const CategoryFilter = ({ category }: CategoryFilterPropType) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.checked) {
      params.append("category", e.target.value);
    } else {
      const categories = params.getAll("category");
      params.delete("category");

      categories
        .filter((category) => category !== e.target.value)
        .forEach((category) => {
          params.append("category", category);
        });
    }

    router.replace(`?${params.toString()}`, {
      scroll: false,
    });
      router.refresh();
  };

  return (
    <fieldset className="mt-4 flex flex-col">
      {category.map((item) => (
        <label
          className="flex items-center gap-2 text-base font-medium text-secondary-200"
          key={item.name}
        >
          <input
            id={item.name}
            className="peer hidden"
            type="checkbox"
            name={item.name}
            value={item.name}
            checked={searchParams.getAll("category").includes(item.name)}
            onChange={handleCategoryChange}
          />
          <div className="peer-checked:text-acc flex h-[14px] w-[14px] items-center justify-center rounded border border-muted-500 transition duration-300 peer-checked:border-accent-700 peer-checked:bg-accent-700">
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
          <span className="transition duration-300 peer-checked:text-accent-700">
            {item.placeholder}
          </span>
        </label>
      ))}
    </fieldset>
  );
};

export default CategoryFilter;
