type ErrorMessagePropType = {
  message: string;
  subtext: string;
};

const ErrorMessage = ({ message, subtext }: ErrorMessagePropType) => {
  return (
    <div className="py-10 text-center">
      <h2 className="text-lg font-semibold text-primary">{message}</h2>
      <p className="text-gray-500">{subtext}</p>
    </div>
  );
};

export default ErrorMessage;
