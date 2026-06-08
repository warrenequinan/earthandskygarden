type ButtonPropType = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonPropType) => {
  return (
    <button
      className="flex items-center justify-center mx-auto gap-[10px] rounded-[5px] bg-accent-700 px-4 py-3 md:px-5 md:py-4 !text-sm font-semibold uppercase text-white transition-colors hover:bg-accent-800 md:text-base"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
