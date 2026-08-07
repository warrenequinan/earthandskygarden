"use client";

import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Button from "./Button";

type PaginationPropType = {
    totalPage: number;
    activePage: number;
}

const Pagination = ({ totalPage, activePage }: PaginationPropType) => {
 
    if(!totalPage || totalPage <= 1) {
        return null;
    }

  return (
    <div className="flex gap-2">
      <Button
        size="medium"
        variant="transparent"
        animation={false}
        className="!p-0 text-lg text-primary"
      >
        <HiChevronDoubleLeft />
      </Button>
      <div className="flex gap-1">
        {Array.from({ length: totalPage }).map((_, index) => (
          <Button
            variant="secondary"
            size="medium"
            animation={false}
            key={index}
            className={`${index === activePage - 1 && "!bg-accent-700 text-white"}`}
            disabled={index === activePage - 1}
          >
            {index + 1}
          </Button>
        ))}
      </div>
      <Button
        size="medium"
        animation={false}
        variant="transparent"
        className="!p-0 text-lg text-primary"
      >
        <HiChevronDoubleRight />
      </Button>
    </div>
  );
};

export default Pagination;
