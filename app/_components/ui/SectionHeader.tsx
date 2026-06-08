type SectionHeaderPropType = {
    children: React.ReactNode;
    align: "center" | "left"
};

const SectionHeader = ({ children, align = "center" }: SectionHeaderPropType) => {
  return (
    <div
      className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} gap-1`}
    >
      <h3 className="font-black uppercase italic tracking-tight text-primary md:text-6xl text-5xl">
        {children}
      </h3>
      <span className="inline-block h-1 w-[60px] rounded bg-accent-700"></span>
    </div>
  );
};

export default SectionHeader;
