import Image from "next/image";
import Button from "./Button";
import Description from "./Description";
import SectionHeader from "./SectionHeader";
import ctaBackground from "@/public/eas-cta-background.jpg"

const CtaBanner = () => {
  return (
    <div className="relative flex h-auto flex-col items-center justify-center px-6 py-20 text-center lg:h-[644px] lg:py-0">
      <SectionHeader align="center" bar={false} className="mb-2 max-w-[964px]">
        We only provide fresh and <br className="hidden lg:block" />
        high-quality products
      </SectionHeader>
      <Description align="center" className="mb-8 max-w-[638px]">
        Quality is at the heart of everything we do. From sourcing to delivery,
        we ensure that every product meets the highest standards of freshness,
        safety, and excellence.
      </Description>
      <Button size="default" variant="primary">
        Order Now
      </Button>
      <div className="absolute -z-10 h-full w-full">
        <Image
          src={ctaBackground}
          alt="eas cta background"
          fill
          className="object-cover object-top"
          quality={100}
        />
      </div>
    </div>
  );
};

export default CtaBanner;
