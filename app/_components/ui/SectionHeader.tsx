import clsx from "clsx";

type SectionHeaderPropType = {
  children: React.ReactNode;
  align: "center" | "left";
  bar?: boolean;
  className?: string;
};

const SectionHeader = ({
  children,
  align = "center",
  bar = true,
  className,
}: SectionHeaderPropType) => {
  return (
    <div
      className={clsx(
        "flex flex-col",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        bar && "gap-1",
        className,
      )}
    >
      <h3 className="text-5xl font-black uppercase italic tracking-tight text-primary md:text-6xl">
        {children}
      </h3>
      {bar && (
        <span className="inline-block h-1 w-[60px] rounded bg-accent-700"></span>
      )}
    </div>
  );
};

export default SectionHeader;
