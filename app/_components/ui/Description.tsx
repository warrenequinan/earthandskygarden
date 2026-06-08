import clsx from "clsx";

type DescriptionPropType = {
  children: React.ReactNode;
  align: "center" | "left";
  className?: string;
};

const Description = ({
  children,
  align = "center",
  className,
}: DescriptionPropType) => {
  return (
    <p
      className={clsx(
        "font-medium leading-[25px] text-muted-200",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Description;
