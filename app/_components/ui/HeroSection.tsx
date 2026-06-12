import Image from "next/image";
import PaperOverlay from "./PaperOverlay";
import Link from "next/link";
import clsx from "clsx";
import {
  HeroBreadcrumbType,
  HeroTitleType,
} from "@/app/_types/herosection.types";

type HeroSectionPropType = {
  title: HeroTitleType;
  breadcrumb: HeroBreadcrumbType;
  background: string;
};

const HeroSection = ({
  title,
  breadcrumb,
  background,
}: HeroSectionPropType) => {
  const { before, highlight, after } = title;

  return (
    <section
      className={clsx(
        "relative flex h-[600] items-center justify-center text-center uppercase",
        !background && "bg-slate-600",
      )}
    >
      <div className="mx-auto max-w-[1320px]">
        <h1 className="mb-1 text-4xl font-black italic tracking-tight text-white md:mb-4 md:text-6xl">
          {before}
          {highlight && (
            <span
              className={clsx(
                "text-accent-700",
                before && "ml-4",
                after && "mr-4",
              )}
            >
              {highlight}
            </span>
          )}
          {after}
        </h1>
        <nav>
          <ul className="flex justify-center gap-[10px] text-lg font-medium text-white md:text-base">
            {breadcrumb.map((item, index) => (
              <li
                className={`${index === breadcrumb.length - 1 ? "font-bold text-accent-700" : "after:ml-[10px] after:content-['/']"}`}
                key={item.name}
              >
                <Link href={item.link ?? "#"}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {background && (
        <Image
          src={background}
          fill
          alt="eas products page hero image"
          className="-z-20 object-cover"
          quality={100}
        />
      )}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black/50"></div>
      <PaperOverlay />
    </section>
  );
};

export default HeroSection;
