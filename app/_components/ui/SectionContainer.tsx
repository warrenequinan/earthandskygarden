import clsx from "clsx";

type SectionContainerPropType = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({
  children,
  className,
}: SectionContainerPropType) => {
  return (
    <section className={clsx("mx-auto mt-10 max-w-[1320px]", className)}>
      {children}
    </section>
  );
};

export default SectionContainer;
