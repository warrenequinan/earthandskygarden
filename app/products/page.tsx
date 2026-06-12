import HeroSection from "../_components/ui/HeroSection";

const Products = () => {
  const title = {
    before: "",
    highlight: "Fresh",
    after: "From the farm",
  };

  const breadcrumb = [
    { name: "Home", link: "/" },
    { name: "Products", link: "" },
  ];

  return (
    <HeroSection
      title={title}
      breadcrumb={breadcrumb}
      background="/eas-products-page-hero-image.jpg"
    />
  );
};

export default Products;
