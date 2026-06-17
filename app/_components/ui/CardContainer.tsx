import clsx from "clsx";

type CardContainerPropType = {
  children: React.ReactNode;
  className?: string;
  align: "left" | "center";
};

const CardContainer = ({
  children,
  className,
  align,
}: CardContainerPropType) => {
  return (
    <div
      className={clsx(
        "group relative flex flex-col rounded-[5px] transition-all duration-[400ms]",
        align === "left" ? "items-start" : "items-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CardContainer;
