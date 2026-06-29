import { useState } from "react";
import {
  FiStar,
  FiTruck,
  FiRefreshCcw,
  FiShield,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

import toast from "react-hot-toast";
import api from "../../services/api";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";

function ProductInfo({ product }) {

  const [quantity, setQuantity] = useState(1);

  const { fetchCart } = useCart();

  const {
    wishlistItems,
    fetchWishlist,
  } = useWishlist();

  const isWishlisted = wishlistItems.some(
    (item) =>
      item.product &&
      item.product._id === product._id
  );

  const increaseQuantity = () => {

    if (quantity < product.stock) {

      setQuantity((prev) => prev + 1);

    }

  };

  const decreaseQuantity = () => {

    if (quantity > 1) {

      setQuantity((prev) => prev - 1);

    }

  };

  const handleAddToCart = async () => {

    try {

      await api.post("/cart", {
        productId: product._id,
        quantity,
      });

      await fetchCart();

      toast.success(`${quantity} item(s) added to cart`);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to add product."
      );

    }

  };

  const handleWishlist = async () => {

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

    <div className="flex flex-col justify-center">

      {/* Rating */}

      <div className="mb-4 flex items-center gap-2">

        <div className="flex text-yellow-400">

          {[...Array(5)].map((_, index) => (

            <FiStar
              key={index}
              className="fill-yellow-400"
            />

          ))}

        </div>

        <span className="font-semibold text-white">

          4.9

        </span>

        <span className="text-slate-400">

          (218 Reviews)

        </span>

      </div>

      {/* Category */}

      <span className="mb-4 w-fit rounded-full bg-violet-600/20 px-4 py-2 text-sm font-medium text-violet-300">

        {product.category}

      </span>

      {/* Product Name */}

      <h1 className="text-6xl font-black leading-tight text-white">

        {product.name}

      </h1>

      {/* Price */}

      <h2 className="mt-6 text-5xl font-black text-violet-400">

        ₹ {product.price}

      </h2>

      {/* Description */}

      <p className="mt-8 leading-8 text-slate-400">

        {product.description}

      </p>

      {/* Stock */}

      <p className="mt-8 text-xl font-semibold text-green-400">

        ✓ In Stock ({product.stock})

      </p>

      {/* Features */}

      <div className="mt-10 space-y-4">

        <div className="flex items-center gap-3 text-slate-300">

          <FiTruck />

          Free Delivery Available

        </div>

        <div className="flex items-center gap-3 text-slate-300">

          <FiRefreshCcw />

          7-Day Easy Replacement

        </div>

        <div className="flex items-center gap-3 text-slate-300">

          <FiShield />

          100% Secure Payment

        </div>

      </div>

      {/* Quantity */}

      <div className="mt-10">

        <p className="mb-4 text-lg font-semibold text-white">

          Quantity

        </p>

        <div className="flex w-fit items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">

          <button
            onClick={decreaseQuantity}
            className="px-5 py-3 text-2xl transition hover:bg-violet-600"
          >
            −
          </button>

          <span className="min-w-[70px] text-center text-xl font-bold text-white">

            {quantity}

          </span>

          <button
            onClick={increaseQuantity}
            className="px-5 py-3 text-2xl transition hover:bg-violet-600"
          >
            +
          </button>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-12 flex gap-5">

        {/* Wishlist */}

        <button
          onClick={handleWishlist}
          className={`rounded-2xl border p-4 transition-all duration-300 ${
            isWishlisted
              ? "border-pink-500 bg-pink-500 text-white"
              : "border-white/10 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
          }`}
        >

          <FiHeart size={24} />

        </button>

        {/* Cart */}

        <button
          onClick={handleAddToCart}
          className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-violet-600 py-4 text-lg font-semibold text-white transition hover:bg-violet-500"
        >

          <FiShoppingCart />

          Add to Cart

        </button>

      </div>

    </div>

  );

}

export default ProductInfo;