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
  background: { url: string; alt: string };
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
        "relative flex h-[600px] items-center justify-center px-6 text-center uppercase lg:px-0",
        !background && "bg-slate-600",
      )}
    >
      <div className="mx-auto -mt-20 max-w-[1320px]">
        <h1 className="mb-1 text-4xl font-black italic tracking-tight text-white md:mb-4 md:text-6xl">
          {before}
          {highlight && (
            <span
              className={clsx(
                "text-accent-700",
                before && "ml-2",
                after && "mr-2",
              )}
            >
              {highlight}
            </span>
          )}
          {after}
        </h1>
        <nav aria-label="Breadcrumb">
          <ul className="flex justify-center gap-[10px] text-xs font-medium text-white md:text-sm">
            {breadcrumb.map((item, index) => {
              const isLastBreadcrumb = index === breadcrumb.length - 1;
              return (
                <li
                  className={`${isLastBreadcrumb ? "font-bold text-accent-700" : "after:ml-[10px] after:content-['/']"}`}
                  key={item.name}
                >
                  {isLastBreadcrumb ? (
                    <span aria-current="page">{item.name}</span>
                  ) : (
                    <Link href={item.link ?? "#"}>{item.name}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {background && (
        <Image
          src={background.url}
          fill
          alt={background.alt}
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
