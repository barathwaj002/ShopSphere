import ProductGrid from "../../components/product/ProductGrid";
import SectionTitle from "../../components/common/SectionTitle";

function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <SectionTitle
        title="Featured Products"
        subtitle="Explore our premium collection carefully selected for you."
      />

      <ProductGrid />

    </section>
  );
}

export default FeaturedProducts;