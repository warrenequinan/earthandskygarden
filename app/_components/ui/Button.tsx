import clsx from "clsx";

type ButtonPropType = {
  children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const Button = ({ children, onClick, className }: ButtonPropType) => {
    return (
      <button
        className={clsx(
          "mx-auto flex items-center justify-center gap-[10px] rounded-[5px] bg-accent-700 px-4 py-3 !text-sm font-semibold uppercase text-white transition-colors hover:bg-accent-800 md:px-5 md:py-4 md:text-base",
          className,
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
};

export default Button;
