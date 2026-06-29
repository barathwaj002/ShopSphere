import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

import api from "../../services/api";
import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";

function WishlistItem({ item }) {

  const { fetchCart } = useCart();

  const { fetchWishlist } = useWishlist();

  const { product } = item;

  const handleMoveToCart = async () => {

    try {

      await api.post("/cart", {
        productId: product._id,
      });

      await api.delete(`/wishlist/${item._id}`);

      await fetchCart();

      await fetchWishlist();

      toast.success("Moved to Cart");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Unable to move product."
      );

    }

  };

  const handleRemove = async () => {

    try {

      await api.delete(`/wishlist/${item._id}`);

      await fetchWishlist();

      toast.success("Removed from Wishlist");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Unable to remove item."
      );

    }

  };

  return (

    <div className="flex items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-pink-500/40">

      {/* Image */}

      <img
        src={product.image}
        alt={product.name}
        className="h-44 w-44 rounded-2xl object-cover"
      />

      {/* Product Info */}

      <div className="flex flex-1 flex-col justify-between">

        <div>

          <span className="rounded-full bg-violet-600/20 px-3 py-1 text-sm text-violet-300">

            {product.category}

          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">

            {product.name}

          </h2>

          <p className="mt-3 max-w-3xl text-slate-400">

            {product.description}

          </p>

        </div>

        <div className="mt-6 flex items-center justify-between">

          <div>

            <h3 className="text-3xl font-black text-violet-400">

              ₹ {product.price}

            </h3>

            <p className="mt-2 text-green-400">

              Stock : {product.stock}

            </p>

          </div>

          <div className="flex gap-4">

            <button
              onClick={handleMoveToCart}
              className="flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
            >

              <FiShoppingCart />

              Move to Cart

            </button>

            <button
              onClick={handleRemove}
              className="flex items-center gap-2 rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
            >

              <FiTrash2 />

              Remove

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default WishlistItem;