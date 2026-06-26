"use client";

import clsx from "clsx";
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
  const [filter, setFilter] = useState(defaultValue);

  if (!options || !name || !defaultValue) return;

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setFilter(value);
    }
  };

  return (
    <fieldset className="mt-4 flex flex-col">
      {options.map((item) => {
        const isActive = item.name === filter;
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
              checked={filter === item.name}
              onChange={handleChangeFilter}
            />
            <span className="flex justify-center items-center h-4 w-4 p-[2px] rounded-full border-2 border-gray-400 transition duration-300 peer-checked:border-accent-700">
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
