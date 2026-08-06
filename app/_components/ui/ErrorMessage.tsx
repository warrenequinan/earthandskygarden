import clsx from "clsx";

type ErrorMessagePropType = {
  message: string;
  subtext: string;
  className?: string;
};

const ErrorMessage = ({
  message,
  subtext,
  className,
}: ErrorMessagePropType) => {
  return (
    <div className={clsx("w-full py-10 text-center", className)}>
      <h2 className="text-lg font-semibold text-primary">{message}</h2>
      <p className="text-gray-500">{subtext}</p>
    </div>
  );
};

export default ErrorMessage;
