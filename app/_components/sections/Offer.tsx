import Image from "next/image";
import Description from "@/app/_components/ui/Description";
import SectionHeader from "@/app/_components/ui/SectionHeader";
import leafIcon from "@/public/eas-leaf-icon.svg";
import plantIcon from "@/public/eas-plant-icon.svg";
import truckIcon from "@/public/eas-track-icon.svg";

const Offer = () => {
  return (
    <section className="flex justify-center pb-[152px] pt-16 sm:pt-[120px]">
      <div className="max-w-[1320px] flex-1 px-4">
        <SectionHeader align="center">
          Nature&apos;s Best, Straight <br className="hidden sm:block" />
          From the Farm
        </SectionHeader>
        <Description align="center" className="mx-auto max-w-[618px] pt-8">
          From carefully grown vegetables and mushrooms to responsibly raised
          livestock products, we bring nature&apos;s finest harvest directly to
          your table.
        </Description>
        <div className="mt-[108px] flex flex-col gap-4 sm:gap-8 lg:flex-row lg:items-center">
          <div className="bg-secondary-100 relative flex flex-1 flex-col items-center justify-center rounded-[5px] px-6 py-20 text-center sm:pb-[70px] sm:pt-[100px]">
            <div className="absolute left-0 right-0 top-0 flex items-center justify-center">
              <div className="-mt-[60px] flex h-24 w-24 items-center justify-center rounded-full bg-white sm:-mt-[70px] sm:h-[120px] sm:w-[120px]">
                <div className="relative h-14 w-14 sm:h-[70px] sm:w-[70px]">
                  <Image src={leafIcon} alt="eas leaf icon" fill />
                </div>
              </div>
            </div>
            <h5 className="mb-2 text-2xl font-black uppercase leading-[32.8px] text-primary sm:text-[28px]">
              Farm-fresh harvest
            </h5>
            <Description align="center" className="max-w-[330px] text-primary">
              Handpicked vegetables and premium mushrooms grown with care to
              ensure freshness and nutrition.
            </Description>
          </div>
          <div className="relative flex flex-1 flex-col items-center justify-center rounded-[5px] bg-primary px-6 py-20 text-center sm:pb-[115px] sm:pt-[115px]">
            <div className="absolute left-0 right-0 top-0 flex items-center justify-center">
              <div className="-mt-[60px] flex h-24 w-24 items-center justify-center rounded-full bg-white sm:-mt-[70px] sm:h-[120px] sm:w-[120px]">
                <div className="relative h-14 w-14 sm:h-[70px] sm:w-[70px]">
                  <Image src={plantIcon} alt="eas plant icon" fill />
                </div>
              </div>
            </div>
            <h5 className="mb-2 text-2xl font-black uppercase leading-[32.8px] text-white sm:text-[28px]">
              Best Quality
            </h5>
            <Description align="center" className="max-w-[330px] text-white">
              Every product we offer is the result of careful farming practices,
              dedicated attention, and a commitment to quality.
            </Description>
          </div>
          <div className="bg-secondary-100 relative flex flex-1 flex-col items-center justify-center rounded-[5px] px-6 py-20 text-center sm:pb-[70px] sm:pt-[100px]">
            <div className="absolute left-0 right-0 top-0 flex items-center justify-center">
              <div className="-mt-[60px] flex h-24 w-24 items-center justify-center rounded-full bg-white sm:-mt-[70px] sm:h-[120px] sm:w-[120px]">
                <div className="relative h-14 w-14 sm:h-[70px] sm:w-[70px]">
                  <Image src={truckIcon} alt="eas truck icon" fill />
                </div>
              </div>
            </div>
            <h5 className="mb-2 text-2xl font-black uppercase leading-[32.8px] text-primary sm:text-[28px]">
              From farm to doorstep
            </h5>
            <Description align="center" className="max-w-[330px] text-primary">
              Experience the finest farm-fresh products delivered straight to
              your door with unmatched speed, care, and convenience.
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
