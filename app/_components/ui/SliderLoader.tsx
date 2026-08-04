import CardContainer from "./CardContainer";

const visibilityClasses = [
  "",
  "hidden sm:block",
  "hidden lg:block",
  "hidden xl:block",
  "hidden 2xl:block",
];

const SliderLoader = () => {
  return (
    <div className="mx-auto grid max-w-[2560px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <CardContainer
          key={index}
          className={`${visibilityClasses[index]} h-[338.967px] w-full overflow-hidden bg-muted-200`}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>
        </CardContainer>
      ))}
    </div>
  );
};

export default SliderLoader;
