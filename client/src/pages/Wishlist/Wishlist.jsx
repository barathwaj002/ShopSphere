import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";
import useWishlist from "../../hooks/useWishlist";

import WishlistItem from "./WishlistItem";
import EmptyWishlist from "./EmptyWishlist";

function Wishlist() {

  const {
    wishlistItems,
    fetchWishlist,
  } = useWishlist();

  const handleClearWishlist = async () => {

    try {

      await api.delete("/wishlist");

      await fetchWishlist();

      toast.success("Wishlist cleared");

    } catch (error) {

      toast.error("Unable to clear wishlist");

    }

  };

  return (

    <section className="mx-auto min-h-screen max-w-7xl px-8 py-20">

      <div className="mb-12 flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-black text-white">

            My Wishlist

          </h1>

          <p className="mt-2 text-slate-400">

            {wishlistItems.length} Saved Item(s)

          </p>

        </div>

        {wishlistItems.length > 0 && (

          <button
            onClick={handleClearWishlist}
            className="flex items-center gap-2 rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
          >

            <FiTrash2 />

            Clear Wishlist

          </button>

        )}

      </div>

      {wishlistItems.length === 0 ? (

        <EmptyWishlist />

      ) : (

        <>

          <div className="space-y-8">

            {wishlistItems.map((item) => (

              <WishlistItem
                key={item._id}
                item={item}
              />

            ))}

          </div>

          <div className="mt-12 text-center">

            <Link
              to="/products"
              className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
            >

              Continue Shopping

            </Link>

          </div>

        </>

      )}

    </section>

  );

}

export default Wishlist;