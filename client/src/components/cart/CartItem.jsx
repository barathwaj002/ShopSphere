import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";

function CartItem({ item, refreshCart }) {

  const { fetchCart } = useCart();

  const increaseQuantity = async () => {
    try {

      await api.put(`/cart/${item._id}`, {
        quantity: item.quantity + 1,
      });

      await fetchCart();
      refreshCart();

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Failed to update quantity"
      );

    }
  };

  const decreaseQuantity = async () => {

    if (item.quantity === 1) return;

    try {

      await api.put(`/cart/${item._id}`, {
        quantity: item.quantity - 1,
      });

      await fetchCart();
      refreshCart();

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Failed to update quantity"
      );

    }
  };

  const removeItem = async () => {

    try {

      await api.delete(`/cart/${item._id}`);

      await fetchCart();

      toast.success("Removed from cart");

      refreshCart();

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Failed to remove item"
      );

    }
  };

  return (
    <div className="flex gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <img
        src={item.product.image}
        alt={item.product.name}
        className="h-36 w-36 rounded-2xl object-cover"
      />

      <div className="flex flex-1 flex-col justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            {item.product.name}
          </h2>

          <p className="mt-2 text-slate-400">
            {item.product.category}
          </p>

          <h3 className="mt-4 text-2xl font-bold text-violet-400">
            ₹ {item.product.price}
          </h3>

        </div>

        <div className="mt-6 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <button
              onClick={decreaseQuantity}
              className="rounded-xl bg-slate-700 p-3 transition hover:bg-slate-600"
            >
              <FiMinus />
            </button>

            <span className="text-xl font-semibold text-white">
              {item.quantity}
            </span>

            <button
              onClick={increaseQuantity}
              className="rounded-xl bg-violet-600 p-3 transition hover:bg-violet-500"
            >
              <FiPlus />
            </button>

          </div>

          <button
            onClick={removeItem}
            className="text-red-400 transition hover:text-red-300"
          >
            <FiTrash2 size={24} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default CartItem;