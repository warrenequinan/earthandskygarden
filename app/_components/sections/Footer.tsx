import CtaBanner from "@/app/_components/ui/CtaBanner";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <CtaBanner />
      <div className="bg-primary px-4 py-8">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 justify-items-center gap-y-8 text-lg font-medium uppercase text-white sm:grid-cols-2 sm:justify-start lg:grid-cols-4 lg:gap-y-0">
          <div className="relative h-[70px] w-[180px]">
            <Image src="/eas-logo.svg" alt="eas logo" fill />
          </div>
          <nav>
            <ul className="flex flex-col gap-2 text-center sm:text-left">
              <li>Home</li>
              <li>About us</li>
              <li>Our Gallery</li>
              <li>Shop</li>
            </ul>
          </nav>
          <div className="flex flex-col gap-8 text-center sm:text-left">
            <div>
              <h5 className="mb-2">Follow us:</h5>
              <nav>
                <ul className="flex justify-center gap-4 sm:justify-start">
                  <li className="relative h-[28px] w-[28px]">
                    <Image src="/facebook.svg" fill alt="facebook icon" />
                  </li>
                  <li className="relative h-[28px] w-[28px]">
                    <Image src="/twitter.svg" fill alt="twitter icon" />
                  </li>
                  <li className="relative h-[28px] w-[28px]">
                    <Image src="/instagram.svg" fill alt="instagram icon" />
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h5 className="mb-2">Contact us:</h5>
              <nav>
                <ul className="flex justify-center gap-4 sm:justify-start">
                  <li className="relative h-[28px] w-[28px]">
                    <Image src="/contact.svg" fill alt="contact icon" />
                  </li>
                  <li className="relative h-[28px] w-[28px]">
                    <Image src="/email.svg" fill alt="email icon" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h5 className="mb-2">We also accept payment thru:</h5>
            <div className="flex items-center justify-center gap-6 sm:justify-start">
              <span className="relative h-[28px] w-[120px]">
                <Image src="/gcash.svg" fill alt="gcash icon" />
              </span>
              <span className="relative h-[23px] w-[80px]">
                <Image src="/maya.svg" fill alt="email icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 flex max-w-[1320px] flex-col gap-8 text-center text-lg font-medium uppercase text-white">
          <div className="bg-secondary-200 h-[1px] w-full"></div>
          <p>&#169; 2026 Earth and Sky Garden | All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
