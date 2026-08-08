import { HiViewGrid } from "react-icons/hi";

const ShowSort = () => {
  return (
    <div className="relative flex items-center gap-4">
      <label
        htmlFor="numItems"
        className="flex items-center gap-2 text-lg font-semibold leading-none text-primary"
      >
        <HiViewGrid className="text-[22px] text-muted-600" /> Show:
      </label>
      <select
        className="h-8 w-16 appearance-none rounded-[5px] bg-muted-500 px-4 text-[13px] font-normal text-muted-700 outline-accent-700"
        defaultValue={12}
      >
        <option value={6}>6</option>
        <option value={12}>12</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </div>
    </div>
  );
};

export default ShowSort;
