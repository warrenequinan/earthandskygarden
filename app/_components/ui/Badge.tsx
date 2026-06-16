import clsx from "clsx";

type BadgePropType = {
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ children, className }: BadgePropType) => {
  return (
    <span
      className={clsx(
        "rounded-[5px] px-4 py-2 text-xs font-bold uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
