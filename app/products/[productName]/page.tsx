import ErrorMessage from "@/app/_components/ui/ErrorMessage";
import HeroSection from "@/app/_components/ui/HeroSection";
import ProductInfo from "@/app/_components/ui/ProductInfo";
import ProductThumbSlider from "@/app/_components/ui/ProductThumbSlider";
import RecommendedProducts from "@/app/_components/ui/RecommendedProducts";
import SectionContainer from "@/app/_components/ui/SectionContainer";
import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
} from "@/app/_lib/products";
import { Product, ProductsCatalogType } from "@/app/_types/product.types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { productName } = await params;

  try {
    const product = await getProductBySlug(productName);

    return {
      title: product.name,
      description: product.description,
    };
  } catch {
    return {
      title: "Product",
      description: "Unable to load product information.",
    };
  }
}

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    productName: product.slug,
  }));
}

const background = {
  url: "/eas-products-details-hero-image.jpg",
  alt: "eas products details hero image",
};

type PageProps = {
  params: Promise<{
    productName: string;
  }>;
};

const Page = async ({ params }: PageProps) => {
  const { productName } = await params;
  let product: Product | null = null;
  let otherProducts: ProductsCatalogType[] | null = null;
  let hasError = false;

  try {
    product = await getProductBySlug(productName);
    otherProducts = await getProductsByCategory(product.category, product.slug);
  } catch (err: unknown) {
    if (err instanceof Error) {
      hasError = true;
      console.error(err.message);
    }
  }

  const title = {
    before: "Fresh",
    highlight: product?.name ?? "",
    after: "",
  };
  const breadcrumb = [
    { name: "Home", link: "/" },
    { name: "All products", link: "/products" },
    { name: product?.name ?? "" },
  ];

  return (
    <>
      <HeroSection
        title={title}
        breadcrumb={breadcrumb}
        background={background}
      />
      <SectionContainer className="mb-[72px] px-6 xl:px-0">
        {product ? (
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="w-full min-w-0 flex-1 lg:max-w-[600px]">
              <ProductThumbSlider images={product.images} />
            </div>
            <div className="flex-1">
              <div className="sticky top-24">
                <ProductInfo product={product} />
              </div>
            </div>
          </div>
        ) : (
          hasError && (
            <ErrorMessage
              message="There is a problem in fetching the product"
              subtext="Please try again later."
            />
          )
        )}
      </SectionContainer>
      {otherProducts && <RecommendedProducts products={otherProducts} />}
    </>
  );
};

export default Page;
