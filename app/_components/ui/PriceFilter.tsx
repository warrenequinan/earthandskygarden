"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PriceFilter = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [minPrice, setMinPrice] = useState(params.get("priceGte") ?? "");
  const [maxPrice, setMaxPrice] = useState(params.get("priceLte") ?? "");
  const normalizedValue = (value: string) => value.replace(/^0+(?=\d)/, "");
  const isNumber = (value: string) => /^\d*$/.test(value);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNumber(value)) setMinPrice(normalizedValue(value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isNumber(value)) setMaxPrice(normalizedValue(value));
  };

  useEffect(() => {
    const id = setTimeout(() => {
      const newParams = new URLSearchParams(params);

      if (minPrice) {
        newParams.set("priceGte", minPrice);
      } else {
        newParams.delete("priceGte");
      }

      if (maxPrice) {
        newParams.set("priceLte", maxPrice);
      } else {
        newParams.delete("priceLte");
      }

      router.replace(`?${newParams.toString()}`, { scroll: false });
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [minPrice, maxPrice, router]);

  return (
    <fieldset className="flex items-center gap-2 text-[13px]">
      <label>
        <input
          type="text"
          className="h-8 w-[100px] rounded-[5px] bg-muted-500 pl-[12px] outline-accent-700"
          placeholder="₱ 0.00"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
      </label>
      <span className="font-medium text-primary">─</span>
      <label>
        <input
          type="text"
          className="h-8 w-[100px] rounded-[5px] bg-muted-500 pl-[12px] outline-accent-700"
          placeholder="₱ 700.00"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </label>
    </fieldset>
  );
};

export default PriceFilter;
