type CardContainerPropType = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: CardContainerPropType) => {
  return (
    <div className="group relative flex flex-col items-center rounded-[5px] border border-muted-300 px-6 py-8 ">
      {children}
    </div>
  );
};

export default CardContainer;
