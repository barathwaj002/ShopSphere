import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

function EmptyWishlist() {

  return (

    <div className="flex flex-col items-center justify-center py-32">

      <FiHeart
        size={90}
        className="mb-6 text-pink-500"
      />

      <h2 className="text-3xl font-bold text-white">
        Your Wishlist is Empty
      </h2>

      <p className="mt-4 text-slate-400">
        Save your favourite products here.
      </p>

      <Link
        to="/shop/products"
        className="mt-10 rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
      >
        Continue Shopping
      </Link>

    </div>

  );

}

export default EmptyWishlist;