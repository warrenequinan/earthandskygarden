"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { HiSortAscending } from "react-icons/hi";

const OrderSort = () => {
  const params = useSearchParams();
  const router = useRouter();
  const order = params.get("order") ?? "default";
  const handleOrderSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(params);
    if (!order) return;
    newParams.set("order", value);
    router.replace(`?${newParams.toString()}`, { scroll: false });
    router.refresh();
  };

  return (
    <div className="relative flex items-center gap-4">
      <label
        htmlFor="numItems"
        className="flex items-center gap-2 text-lg font-semibold leading-none text-primary"
      >
        <HiSortAscending className="text-[22px] text-muted-600" /> Sort by:
      </label>
      <select
        className="h-8 appearance-none rounded-[5px] bg-muted-500 px-4 text-[13px] font-normal text-muted-700 outline-accent-700"
        value={order}
        onChange={handleOrderSort}
      >
        <option value="default">Default</option>
        <option value="price_asc">Price (Low → High)</option>
        <option value="price_desc">Price (High → Low)</option>
        <option value="name_asc">Alphabetically (A-Z)</option>
        <option value="name_desc">Alphabetically (Z-A)</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </div>
    </div>
  );
};

export default OrderSort;
