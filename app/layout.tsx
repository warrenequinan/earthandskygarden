import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "swiper/css";
import "@/app/_styles/globals.css";
import "swiper/css/effect-fade";
import Header from "@/app/_components/sections/Header";
import Footer from "@/app/_components/sections/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s — Earth and Skygarden",
    default: "Home — Earth and Skygarden",
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
      className={`${roboto.className} h-full overflow-x-hidden antialiased transition-all duration-300`}
    >
      <body className="relative">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
