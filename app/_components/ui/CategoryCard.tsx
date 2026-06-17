import clsx from "clsx";
import Image from "next/image";

type CategoryCardPropType = {
  children: React.ReactNode;
  overlay: "vegetables" | "fruits" | "meat";
  className?: string;
};

const CategoryCard = ({ children, overlay, className }: CategoryCardPropType) => {
  const overlayBackground = {
    vegetables: {
      image: "/eas-bg-category-vegetable.jpg",
      alt: "Vegetable Category Background",
    },
    fruits: {
      image: "/eas-bg-category-fruits.jpg",
      alt: "Fruits Category Background",
    },
    meat: {
      image: "/eas-bg-category-meat-and-poultry.jpg",
      alt: "Meat and Poultry Category Background",
    },
  };

  return (
    <>
      <div
        className={clsx(
          "group relative flex flex-1 flex-col items-center justify-center overflow-hidden",
          className,
        )}
      >
        {children}
        <Image
          className="object-cover group-hover:scale-105 transition duration-500 object-top"
          src={overlayBackground[overlay].image}
          fill
          alt={overlayBackground[overlay].alt}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </>
  );
};

export default CategoryCard;
