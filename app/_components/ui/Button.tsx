import clsx from "clsx";

type ButtonPropType = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size: "small" | "medium" | "default";
  disabled?: boolean;
  animation?: boolean;
  variant: "primary" | "secondary" | "transparent";
};

const buttonSize: Record<"small" | "medium" | "default", string> = {
  small: "text-[13px] px-[12px] py-2 ",
  medium: "text-[13px] py-[10px] px-[15px] ",
  default: "px-4 py-3 !text-sm md:px-5 md:py-4 md:!text-[14px] ",
};

const buttonVariant = {
  primary:
    "font-semibold transition-colors hover:bg-accent-800 duration-300 text-white bg-accent-700 gap-[10px] ",
  secondary:
    "bg-muted-500 text-muted-700 hover:bg-accent-700 hover:text-white transition-colors duration-300 ",
  transparent: "bg-transparent",
};

const Button = ({
  children,
  onClick,
  className,
  size = "default",
  variant = "primary",
  animation = true,
  disabled,
}: ButtonPropType) => {
  const defaultConfig =
    "disabled:cursor-not-allowed uppercase rounded-[5px] flex items-center justify-center !leading-none group ";

  return (
    <button
      className={clsx(
        buttonSize[size] + buttonVariant[variant] + defaultConfig,
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {!animation ? (
        children
      ) : (
        <span className="relative h-full overflow-hidden">
          <span className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
            {children}
          </span>

          <span className="absolute left-0 top-full flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
            {children}
          </span>
        </span>
      )}
    </button>
  );
};

export default Button;
