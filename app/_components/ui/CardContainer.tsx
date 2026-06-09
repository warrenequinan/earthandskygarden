type CardContainerPropType = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: CardContainerPropType) => {
  return (
    <div className="group relative flex flex-col items-center rounded-[5px] border border-muted-200 p-6">
      {children}
    </div>
  );
};

export default CardContainer;
