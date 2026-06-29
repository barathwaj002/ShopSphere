import { motion } from "framer-motion";
import {
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiEye,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";

function ProductListCard({ product }) {

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
        "Failed to add product."
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
        scale: 1.01,
        y: -3,
      }}

      transition={{
        duration: 0.25,
      }}

      onClick={() =>
        navigate(`/products/${product._id}`)
      }

      className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all hover:border-violet-500/40 hover:shadow-violet-500/20"

    >

      <div className="flex flex-col md:flex-row">

        {/* IMAGE */}

        <div className="flex items-center justify-center p-6 md:w-72">

          <img
            src={product.image}
            alt={product.name}
            className="h-60 w-60 rounded-2xl object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

        {/* CONTENT */}

        <div className="flex flex-1 flex-col justify-between p-8">

          <div>

            <div className="flex flex-wrap items-center gap-3">

              <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300">

                {product.category}

              </span>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">

                In Stock ({product.stock})

              </span>

            </div>

            <h2 className="mt-5 text-3xl font-bold text-white transition group-hover:text-violet-400">

              {product.name}

            </h2>

            <div className="mt-4 flex items-center gap-2">

              <div className="flex text-yellow-400">

                {[...Array(5)].map((_, index) => (

                  <FiStar
                    key={index}
                    className="fill-yellow-400"
                  />

                ))}

              </div>

              <span className="font-semibold text-white">

                4.8

              </span>

              <span className="text-slate-400">

                (210 Reviews)

              </span>

            </div>

            <p className="mt-6 max-w-3xl leading-8 text-slate-400">

              {product.description}

            </p>

          </div>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-sm text-slate-400">

                Price

              </p>

              <h2 className="text-4xl font-black text-violet-400">

                ₹ {product.price}

              </h2>

            </div>

            <div className="flex flex-wrap gap-4">
                              {/* Wishlist */}

              <button
                onClick={handleWishlist}
                className={`rounded-2xl border p-4 transition-all duration-300 ${
                  isWishlisted
                    ? "border-pink-500 bg-pink-500 text-white"
                    : "border-white/10 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                }`}
              >

                <FiHeart size={20} />

              </button>

              {/* View Details */}

              <button

                onClick={(e) => {

                  e.stopPropagation();

                  navigate(`/products/${product._id}`);

                }}

                className="flex items-center gap-2 rounded-2xl border border-cyan-500 px-6 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"

              >

                <FiEye />

                View Details

              </button>

              {/* Add to Cart */}

              <button

                disabled={loading}

                onClick={handleAddToCart}

                className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"

              >

                <FiShoppingCart />

                {loading
                  ? "Adding..."
                  : "Add to Cart"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  );

}

export default ProductListCard;