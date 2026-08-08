"use client";

import { HiTrash } from "react-icons/hi2";
import Button from "@/app/_components/ui/Button";
import { useRouter } from "next/navigation";

const ClearFilter = () => {
  const router = useRouter();
  const handleFilter = () => router.replace("?", { scroll: false });

  return (
    <Button size="small" variant="primary" onClick={handleFilter}>
      <span className="flex items-center gap-1">
        <HiTrash className="text-[15px] text-accent-600" /> Clear All
      </span>
    </Button>
  );
};

export default ClearFilter;
