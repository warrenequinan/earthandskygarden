"use client";

import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Button from "./Button";
import { useRouter, useSearchParams } from "next/navigation";

type PaginationPropType = {
  totalPage: number;
  activePage: number;
};

const Pagination = ({ totalPage, activePage }: PaginationPropType) => {
  const router = useRouter();
  const params = useSearchParams();
  const isFirstPage = activePage === 1;
  const isLastPage = activePage === totalPage;

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(params);
    newParams.set("page", page.toString());
    router.replace(`?${newParams.toString()}`, { scroll: false });
    router.refresh();
  };

  const handlePrevPage = () => {
    if (activePage > 1) {
      handlePageChange(activePage - 1);
    }
  };

  const handleNextPage = () => {
    if (activePage < totalPage) {
      handlePageChange(activePage + 1);
    }
  };

  if (!totalPage || totalPage <= 1) {
    return null;
  }

  return (
    <div className="flex gap-2">
      <Button
        size="medium"
        variant="transparent"
        animation={false}
        className="!p-0 text-lg text-primary"
        onClick={handlePrevPage}
        disabled={isFirstPage}
      >
        <HiChevronDoubleLeft />
      </Button>
      <div className="flex gap-1">
        {Array.from({ length: totalPage }).map((_, index) => {
          const isActive = index + 1 === activePage;
          return (
            <Button
              variant="secondary"
              size="medium"
              animation={false}
              key={index}
              className={`${isActive && "!bg-accent-700 text-white"}`}
              disabled={isActive}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          );
        })}
      </div>
      <Button
        size="medium"
        animation={false}
        variant="transparent"
        className="!p-0 text-lg text-primary"
        onClick={handleNextPage}
        disabled={isLastPage}
      >
        <HiChevronDoubleRight />
      </Button>
    </div>
  );
};

export default Pagination;
