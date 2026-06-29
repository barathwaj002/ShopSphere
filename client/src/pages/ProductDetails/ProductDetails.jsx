import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

import ProductGallery from "../../components/productDetails/ProductGallery";
import ProductInfo from "../../components/productDetails/ProductInfo";
import ProductTabs from "../../components/productDetails/ProductTabs";
import RelatedProducts from "../../components/productDetails/RelatedProducts";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const { data } = await api.get(`/products/${id}`);

        setProduct(data.product);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchProduct();

  }, [id]);

  if (loading) {

    return (
      <div className="flex min-h-screen items-center justify-center text-3xl font-bold text-white">
        Loading Product...
      </div>
    );

  }

  if (!product) {

    return (
      <div className="flex min-h-screen items-center justify-center text-3xl font-bold text-red-400">
        Product Not Found
      </div>
    );

  }

  return (
    <section className="mx-auto max-w-7xl px-8 py-20">

      <div className="grid gap-16 lg:grid-cols-2">

        <ProductGallery product={product} />

        <ProductInfo product={product} />

      </div>
       <ProductTabs product={product} />
       <RelatedProducts currentProduct={product} />

    </section>
  );
}

export default ProductDetails;