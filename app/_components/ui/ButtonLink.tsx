import clsx from "clsx";
import Link from "next/link";

type ButtonPropType = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size: "small" | "medium" | "default";
  variant: "primary" | "secondary" | "transparent";
  href: string;
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

const ButtonLink = ({
  children,
  className,
  href,
  size = "default",
  variant = "primary",
}: ButtonPropType) => {
  const defaultConfig =
    "disabled:cursor-not-allowed uppercase rounded-[5px] inline-flex items-center justify-center !leading-none group ";

  return (
    <Link
      href={href}
      className={clsx(
        buttonSize[size] + buttonVariant[variant] + defaultConfig,
        className,
      )}
    >
      <span className="relative h-full overflow-hidden">
        <span className="flex flex-grow-0 items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>

        <span className="absolute left-0 top-full flex flex-grow-0 items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
          {children}
        </span>
      </span>
    </Link>
  );
};

export default ButtonLink;
