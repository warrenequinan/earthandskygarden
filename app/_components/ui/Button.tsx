import clsx from "clsx";

type ButtonPropType = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size: "small" | "default";
};

const Button = ({
  children,
  onClick,
  className,
  size = "default",
}: ButtonPropType) => {
  const buttonSize: Record<"small" | "default", string> = {
    small:
      "text-[13px] uppercase text-white bg-accent-700 rounded-[5px] px-[12px] py-2 font-bold transition-colors hover:bg-accent-800",
    default:
      "mx-auto flex items-center justify-center gap-[10px] rounded-[5px] bg-accent-700 px-4 py-3 !text-sm font-semibold uppercase text-white transition-colors hover:bg-accent-800 md:px-5 md:py-4 md:text-base",
  };

  return (
    <button className={clsx(buttonSize[size], className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
