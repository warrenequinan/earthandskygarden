import clsx from "clsx";

type CardContainerPropType = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer = ({ children, className }: CardContainerPropType) => {
  return (
    <div
      className={clsx(
        "group relative flex flex-col items-center rounded-[5px] border border-muted-300 px-6 py-8 transition-all duration-[400ms]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CardContainer;
