import { useNavigate } from "react-router-dom";

function CartSummary({ cart }) {

  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-2xl font-bold text-white">
        Order Summary
      </h2>

      <div className="mt-6 flex justify-between text-lg">

        <span className="text-slate-400">
          Total
        </span>

        <span className="font-bold text-violet-400">
          ₹ {total}
        </span>

      </div>

      <button
        onClick={() => navigate("/checkout")}
        className="mt-8 w-full rounded-2xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500"
      >
        Proceed to Checkout
      </button>

    </div>
  );
}

export default CartSummary;