import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../../services/api";

function FloatingProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const { data } = await api.get("/products");

        setProducts(data.products.slice(0, 3));

      } catch (error) {

        console.error(error);

      }

    };

    fetchProducts();

  }, []);

  return (
    <div className="relative hidden h-[600px] w-[500px] lg:block">

      {products.map((product, index) => (

        <motion.div
          key={product._id}
          animate={{
            y: [0, -18, 0]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-60 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl"
          style={{
            top:
              index === 0
                ? "0px"
                : index === 1
                ? "180px"
                : "360px",

            left:
              index === 1
                ? "0px"
                : "180px"
          }}
        >

          <img
            src={product.image}
            alt={product.name}
            className="h-28 w-full rounded-xl object-cover"
          />

          <h3 className="mt-5 text-xl font-bold text-white">
            {product.name}
          </h3>

          <p className="mt-2 text-violet-400">
            ₹ {product.price}
          </p>

        </motion.div>

      ))}

    </div>
  );
}

export default FloatingProducts;