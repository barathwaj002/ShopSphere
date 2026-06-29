import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../product/ProductCard";

function RelatedProducts({ currentProduct }) {

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {

    const fetchRelatedProducts = async () => {

      try {

        const { data } = await api.get("/products");

        const filtered = data.products.filter(
          (product) =>
            product.category === currentProduct.category &&
            product._id !== currentProduct._id
        );

        setRelatedProducts(filtered);

      } catch (error) {

        console.error("Failed to load related products:", error);

      }

    };

    fetchRelatedProducts();

  }, [currentProduct]);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">

      <h2 className="mb-10 text-4xl font-bold text-white">
        You May Also Like
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {relatedProducts.map((product) => (

          <ProductCard
            key={product._id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}

export default RelatedProducts;