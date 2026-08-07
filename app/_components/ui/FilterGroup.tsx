"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type OptionsType = {
  name: string;
  placeholder: string;
};

type FilterGroupPropType = {
  name: string;
  options: OptionsType[];
  defaultValue: string;
};

const FilterGroup = ({ name, options, defaultValue }: FilterGroupPropType) => {
    const router = useRouter();
    const params = useSearchParams();
    const [filter, setFilter] = useState(defaultValue);

  if (!options || !name || !defaultValue) return;

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
        setFilter(value);
        const newParams = new URLSearchParams(params);
        newParams.set(name, value);
        router.replace(`?${newParams.toString()}`, { scroll: false });
        router.refresh();
    }
  };

  return (
    <fieldset className="mt-4 flex flex-col">
      {options.map((item) => {
        const isActive = params.get(name) !== null ? params.get(name) === item.name : filter === item.name;
        return (
          <label
            key={item.name}
            className={clsx(
              "flex items-center gap-2 text-base font-medium text-secondary-200 transition duration-300",
              isActive && "!text-accent-700",
            )}
          >
            <input
              className="peer sr-only mr-2"
              type="radio"
              name={name}
              value={item.name}
              checked={isActive}
              onChange={handleChangeFilter}
            />
            <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-gray-400 p-[2px] transition duration-300 peer-checked:border-accent-700">
              <span
                className={clsx(
                  "h-full w-full scale-0 rounded-full bg-accent-700 transition duration-300",
                  isActive && "scale-100",
                )}
              />
            </span>
            {item.placeholder}
          </label>
        );
      })}
    </fieldset>
  );
};

export default FilterGroup;
