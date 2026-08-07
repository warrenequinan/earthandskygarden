"use client";

import { useSearchParams } from "next/navigation";
import { HiXMark } from "react-icons/hi2";

const FilterList = () => {
  const searchParams = useSearchParams();

  return (
    <div>
      {Array.from(searchParams.entries()).map(([key, value]) => {
        if (
          key !== "category" &&
          key !== "discount" &&
          key !== "priceGte" &&
          key !== "priceLte"
        ) {
          return null;
        }

        if (key === "priceLte") {
          const priceGte = searchParams.get("priceGte") || "0";
          const priceLte = searchParams.get("priceLte") || "0";

          return (
            <button
              className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600"
              key="price"
            >
              <HiXMark strokeWidth={3} />
              {`₱ ${Number(priceGte).toFixed(2)} ─ ₱ ${Number(priceLte).toFixed(2)}`}
            </button>
          );
        }

        if (key === "priceGte") {
          return null;
        }

        if (key === "discount") {
          return (
            <button
              className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600"
              key="price"
            >
              <HiXMark strokeWidth={3} />
              {value.replace("-", " ")}
            </button>
          );
        }

        return (
          <button
            className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600"
            key={key + value}
          >
            <HiXMark strokeWidth={3} /> {value}
          </button>
        );
      })}
    </div>
  );
};

export default FilterList;
