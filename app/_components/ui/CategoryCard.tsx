import Image from "next/image";

type CategoryCardPropType = {
  children: React.ReactNode;
  overlay: "vegetables" | "fruits" | "meat";
};

const CategoryCard = ({ children, overlay }: CategoryCardPropType) => {
  const overlayBackground = {
    vegetables: {
      image: "/eas-category-overlay-1.png",
      alt: "Category Overlay 1",
      background: "bg-secondary-100",
    },
    fruits: {
      image: "/eas-category-overlay-2.png",
      alt: "Category Overlay 2",
      background: "bg-brown-100",
    },
    meat: {
      image: "/eas-category-overlay-3.png",
      alt: "Category Overlay 3",
      background: "bg-secondary-100",
    },
  };

  return (
    <div
      className={`${overlayBackground[overlay].background ?? ""} group relative flex flex-1 flex-col items-center justify-center p-20`}
    >
      {children}
      <Image
        className="object-cover"
        src={overlayBackground[overlay].image}
        fill
        alt={overlayBackground[overlay].alt}
      />
    </div>
  );
};

export default CategoryCard;
