import { motion } from "framer-motion";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import api from "../../services/api";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const handleAddToCart = async () => {
     try {
      await api.post("/cart", {
        productId: product._id,
      });
      toast.success("Product added to cart!");
     } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add product."
      );
    }
  };
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
    >
      {/* Image */}
      <div className="overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      {/* Content */}
      <div className="space-y-4 p-6">

        {/* Rating + Category */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1 text-yellow-400">

            <FiStar className="fill-yellow-400" />

            <span className="text-sm text-white">
              4.8
            </span>

          </div>

          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300">
            {product.category}
          </span>

        </div>

        {/* Product Name */}

        <h3 className="truncate text-xl font-bold text-white">
          {product.name}
        </h3>

        {/* Description */}

        <p className="mt-2 line-clamp-2 min-h-[48px] text-sm text-slate-400">
          {product.description}
        </p>

        {/* Price */}

        <h2 className="text-3xl font-bold text-violet-400">
          ₹ {product.price}
        </h2>

        {/* Buttons */}

        <div className="flex items-center gap-3">

          <button className="rounded-xl border border-white/10 p-3 transition hover:bg-pink-500 hover:text-white">
            <FiHeart />
          </button>

          <button  onClick={handleAddToCart}className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-500">
            <FiShoppingCart />

            Add to Cart

          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default ProductCard;