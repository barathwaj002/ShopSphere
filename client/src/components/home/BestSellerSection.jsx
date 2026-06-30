import { motion } from "framer-motion";
import {
  FiStar,
  FiTrendingUp,
  FiShoppingCart,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const bestSellers = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "₹4,999",
    rating: "4.9",
    sold: "1,250 Sold",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: "₹6,999",
    rating: "4.8",
    sold: "980 Sold",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    id: 3,
    name: "Professional Camera",
    price: "₹42,999",
    rating: "5.0",
    sold: "420 Sold",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
  },
];
function BestSellerSection() {

  const navigate = useNavigate();

  return (

    <section className="mx-auto max-w-7xl px-8 py-24">

      <div className="mb-14 flex items-center justify-between">

        <div>

          <h2 className="text-5xl font-black text-white">

            Best Sellers

          </h2>

          <p className="mt-4 text-slate-400">

            Most loved products by thousands of customers.

          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-red-500/20 px-5 py-3 text-red-400">

          <FiTrendingUp />

          Trending

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {bestSellers.map((product, index) => (

          <motion.div

            key={product.id}

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: index * 0.15,
            }}

            whileHover={{
              y: -10,
            }}

            className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1023] shadow-xl"

          >

            <img
              src={product.image}
              alt={product.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-8">

              <div className="flex items-center justify-between">

                <span className="rounded-full bg-violet-500/20 px-4 py-2 text-sm font-semibold text-violet-400">

                  Bestseller

                </span>

                <div className="flex items-center gap-1 text-yellow-400">

                  <FiStar className="fill-yellow-400" />

                  {product.rating}

                </div>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">

                {product.name}

              </h3>

              <p className="mt-2 text-slate-400">

                {product.sold}

              </p>

              <div className="mt-8 flex items-center justify-between">

                <h2 className="text-3xl font-black text-violet-400">

                  {product.price}

                </h2>

                <button

                  onClick={() => navigate("/shop/products")}

                  className="flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500"

                >

                  <FiShoppingCart />

                  Shop

                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default BestSellerSection;