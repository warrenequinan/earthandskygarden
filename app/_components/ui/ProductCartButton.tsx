import clsx from "clsx";

type ButtonPropType = {
  children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const ProductCartButton = ({ children, onClick, className }: ButtonPropType) => {
    return (
      <button
        className={clsx(
          "flex items-center justify-center gap-[10px] rounded-[5px] bg-accent-700 px-[18px] py-[10px] !text-xs font-semibold uppercase text-white transition-colors hover:bg-accent-800 md:px-5 md:py-4 md:text-base",
          className,
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
};

export default ProductCartButton;
