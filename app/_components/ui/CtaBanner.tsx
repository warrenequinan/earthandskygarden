import Image from "next/image";
import Button from "./Button";
import Description from "./Description";
import SectionHeader from "./SectionHeader";
import ctaBackground from "@/public/eas-cta-background.jpg"

const CtaBanner = () => {
  return (
    <div className="relative flex h-[450px] lg:h-[644px] flex-col items-center justify-center text-center px-6">
      <SectionHeader align="center" bar={false} className="mb-2 max-w-[964px]">
        We only provide fresh and <br className="hidden lg:block"  />
        high-quality products
      </SectionHeader>
      <Description align="center" className="mb-8 max-w-[638px]">
        Quality is at the heart of everything we do. From sourcing to delivery,
        we ensure that every product meets the highest standards of freshness,
        safety, and excellence.
      </Description>
      <Button>Order Now</Button>
      <div className="absolute w-full h-full -z-10">
        <Image src={ctaBackground} alt="eas cta background" fill className="object-cover object-top" />
      </div>
    </div>
  );
};

export default CtaBanner;
