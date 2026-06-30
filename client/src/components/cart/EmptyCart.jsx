import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">

      <h2 className="text-4xl font-bold text-white">
        Your Cart is Empty
      </h2>

      <p className="mt-4 text-slate-400">
        Looks like you haven't added anything yet.
      </p>

      <Link
        to="/shop/products"
        className="mt-8 rounded-2xl bg-violet-600 px-8 py-3 text-white transition hover:bg-violet-500"
      >
        Continue Shopping
      </Link>

    </div>
  );
}

export default EmptyCart;