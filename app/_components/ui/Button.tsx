import clsx from "clsx";

type ButtonPropType = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size: "small" | "medium" | "default";
  disabled?: boolean;
  variant: "primary" | "secondary" | "transparent";
};

const buttonSize: Record<"small" | "medium" | "default", string> = {
  small: "text-[13px] px-[12px] py-2 ",
  medium: "text-[13px] py-[10px] px-[15px] ",
  default: "px-4 py-3 !text-sm md:px-5 md:py-4 md:text-base ",
};

const buttonVariant = {
  primary:
    "font-semibold transition-colors hover:bg-accent-800 duration-300  text-white bg-accent-700 gap-[10px] ",
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
  disabled,
}: ButtonPropType) => {
  const defaultConfig =
    "disabled:cursor-not-allowed uppercase rounded-[5px] flex items-center justify-center ";

  return (
    <button
      className={clsx(
        buttonSize[size] + buttonVariant[variant] + defaultConfig,
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
