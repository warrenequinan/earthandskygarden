import Image from "next/image";
import Description from "@/app/_components/ui/Description";
import SectionHeader from "@/app/_components/ui/SectionHeader";
import aboutUsThumbnail from "@/public/eas-about-us-thumbnail.jpg";
import galleryThumbnail from "@/public/eas-gallery-thumbnail.jpg";
import Button from "../ui/Button";

const About = () => {
  return (
    <section className="bg-muted-100 px-4 lg:px-0 max-w-[2560px] mx-auto">
      <div className="relative flex flex-col lg:flex-row">
        <div className="flex h-auto flex-1 flex-col items-center justify-center py-40 lg:min-h-[750px] lg:p-0">
          <SectionHeader align="center">About Us</SectionHeader>
          <Description align="center" className="mt-6 max-w-[500px]">
            Rooted in a passion for agriculture and a commitment to quality, our
            farm specializes in producing fresh vegetables, premium mushrooms,
            and quality livestock products...
          </Description>
          <Button className="mt-[40px]">Read more</Button>
        </div>
        <div className="relative min-h-[400px] lg:min-h-[750px] lg:flex-1">
          <Image
            src={aboutUsThumbnail}
            alt="eas about thumbnail"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute left-0 top-0 hidden h-[250px] w-[250px] -translate-y-[60px] translate-x-[100px] rotate-[40deg] -scale-x-100 xl:block">
          <Image fill src="/eas-arrow-design-1.svg" alt="eas arrow design 1" />
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row-reverse">
        <div className="flex h-auto flex-1 flex-col items-center justify-center py-40 lg:min-h-[750px] lg:p-0">
          <SectionHeader align="center">Our Gallery</SectionHeader>
          <Description align="center" className="mt-6 max-w-[500px]">
            Rooted in a passion for agriculture and a commitment to quality, our
            farm specializes in producing fresh vegetables, premium mushrooms,
            and quality livestock products...
          </Description>
          <Button className="mt-[40px]">View Gallery</Button>
        </div>
        <div className="relative min-h-[400px] lg:min-h-[750px] lg:flex-1">
          <Image
            src={galleryThumbnail}
            alt="eas gallery thumbnail"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 hidden h-[250px] w-[250px] translate-x-[-100px] translate-y-[70px] rotate-[30deg] -scale-y-100 xl:block">
          <Image fill src="/eas-arrow-design-1.svg" alt="eas arrow design 1" />
        </div>
      </div>
    </section>
  );
};

export default About;
