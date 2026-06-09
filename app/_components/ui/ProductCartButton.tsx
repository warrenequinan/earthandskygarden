import clsx from "clsx";

type ButtonPropType = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const ProductCartButton = ({
  children,
  onClick,
  className,
}: ButtonPropType) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-[10px] rounded-[5px] px-[18px] py-[10px] !text-xs font-semibold uppercase hover:text-white transition-colors duration-300 hover:bg-accent-700 md:px-5 md:py-4 md:text-base text-primary bg-transparent border border-muted-300",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ProductCartButton;
