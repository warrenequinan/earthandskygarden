"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { HiXMark } from "react-icons/hi2";

const FilterList = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleDeleteFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(params);
    if (key === "category") {
      const categories = newParams
        .getAll("category")
        .filter((category) => category !== value);

      newParams.delete("category");

      categories.forEach((category) => {
        newParams.append("category", category);
      });
    } else if (key === "priceLte" || key === "priceGte") {
      newParams.delete("priceLte");
      newParams.delete("priceGte");
    } else {
      newParams.delete(key);
    }
    router.replace(`?${newParams.toString()}`, { scroll: false });
  };

  return (
    <div>
      {Array.from(params.entries()).map(([key, value]) => {
        if (
          key !== "category" &&
          key !== "discount" &&
          key !== "priceGte" &&
          key !== "priceLte"
        ) {
          return null;
        }

        if (key === "priceLte") {
          const priceGte = params.get("priceGte") || "0";
          const priceLte = params.get("priceLte") || "0";

          return (
            <button
              onClick={() => handleDeleteFilter(key, value)}
              aria-label={`delete ${key}: ${value}`}
              className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600"
              key={key + value}
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
              onClick={() => handleDeleteFilter(key, value)}
              aria-label={`delete ${key}: ${value}`}
              className="mb-2 mr-2 inline-flex items-center gap-1 rounded-[5px] bg-muted-500 px-[10px] py-1 text-[13px] font-medium capitalize text-primary transition-colors duration-300 hover:bg-muted-600"
              key={key + value}
            >
              <HiXMark strokeWidth={3} />
              {value.replace("-", " ")}
            </button>
          );
        }

        return (
          <button
            onClick={() => handleDeleteFilter(key, value)}
            aria-label={`delete ${key}: ${value}`}
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
