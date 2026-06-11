import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "swiper/css";
import "@/app/_styles/globals.css";
import "swiper/css/effect-fade";
import Header from "./_components/sections/Header";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "Earth and Skygarden | %s",
    default: "Earth and Skygarden | Home",
  },
  description:
    "Rooted in a passion for agriculture and a commitment to quality, our farm specializes in producing fresh vegetables, premium mushrooms, and quality livestock products",
};

export const generateViewPort = () => ({
  width: "device-width",
  initialScale: 1,
});

type RootLayoutPropType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutPropType) {
  return (
    <html
      lang="en"
      className={`${roboto.className} h-full antialiased transition-all duration-300 overflow-x-hidden`}
    >
      <body className="relative">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
