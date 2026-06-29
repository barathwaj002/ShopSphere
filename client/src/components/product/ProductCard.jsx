import { motion } from "framer-motion";
import {
  FiHeart,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const { fetchCart } = useCart();

  const {
    wishlistItems,
    fetchWishlist,
  } = useWishlist();

  const [loading, setLoading] = useState(false);

  const isWishlisted = wishlistItems.some(
    (item) =>
      item.product &&
      item.product._id === product._id
  );

  const handleAddToCart = async (e) => {

    e.stopPropagation();

    if (loading) return;

    try {

      setLoading(true);

      await api.post("/cart", {
        productId: product._id,
      });

      await fetchCart();

      toast.success("Added to Cart");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Unable to add product."
      );

    } finally {

      setLoading(false);

    }

  };

  const handleWishlist = async (e) => {

    e.stopPropagation();

    try {

      if (isWishlisted) {

        const wishlistItem = wishlistItems.find(
          (item) =>
            item.product &&
            item.product._id === product._id
        );

        if (wishlistItem) {

          await api.delete(
            `/wishlist/${wishlistItem._id}`
          );

        }

        toast.success("Removed from Wishlist");

      } else {

        await api.post("/wishlist", {
          productId: product._id,
        });

        toast.success("Added to Wishlist");

      }

      await fetchWishlist();

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message ||
        "Wishlist operation failed."
      );

    }

  };

  return (

    <motion.div

      whileHover={{
        y: -8,
        scale: 1.02,
      }}

      transition={{
        duration: 0.25,
      }}

      onClick={() =>
        navigate(`/products/${product._id}`)
      }

      className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all hover:border-violet-500/40 hover:shadow-violet-500/20"

    >

      {/* Product Image */}

      <div className="overflow-hidden">

        <img

          src={product.image}

          alt={product.name}

          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"

        />

      </div>

      {/* Product Details */}

      <div className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1">

            <FiStar className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-medium text-white">

              4.8

            </span>

          </div>

          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-medium text-violet-300">

            {product.category}

          </span>

        </div>

        <h3 className="truncate text-xl font-bold text-white transition group-hover:text-violet-400">

          {product.name}

        </h3>

        <p className="line-clamp-2 min-h-[48px] text-sm leading-6 text-slate-400">

          {product.description}

        </p>

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-black text-violet-400">

            ₹ {product.price}

          </h2>

          <span className="text-sm font-medium text-green-400">

            Stock : {product.stock}

          </span>

        </div>

        <div className="flex items-center gap-3 pt-2">

          {/* Wishlist */}

          <button
            onClick={handleWishlist}
            className={`rounded-2xl border p-3 transition-all duration-300 ${
              isWishlisted
                ? "border-pink-500 bg-pink-500 text-white"
                : "border-white/10 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
            }`}
          >

            <FiHeart size={18} />

          </button>

          {/* Cart */}

          <button

            onClick={handleAddToCart}

            disabled={loading}

            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"

          >

            <FiShoppingCart />

            {loading ? "Adding..." : "Add to Cart"}

          </button>

        </div>

      </div>

    </motion.div>

  );

}

export default ProductCard;