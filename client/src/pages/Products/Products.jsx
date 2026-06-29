import ProductGrid from "../../components/product/ProductGrid";

function Products() {
  return (
    <div className="min-h-screen bg-[#050816]">

      <section className="mx-auto max-w-7xl px-8 pt-16">

        <div className="mb-14 text-center">

          <h1 className="text-5xl font-black text-white">
            Explore Products
          </h1>

          <p className="mt-5 text-lg text-slate-400">
            Browse our premium collection across all categories.
          </p>

        </div>

        <ProductGrid />

      </section>

    </div>
  );
}

export default Products;