import { Link } from "react-router-dom";

function EmptyOrders() {

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">

      <h1 className="text-5xl font-bold text-white">
        No Orders Yet
      </h1>

      <p className="mt-5 text-slate-400">
        Start shopping to place your first order.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-2xl bg-violet-600 px-8 py-4 text-white"
      >
        Shop Now
      </Link>

    </div>
  );
}

export default EmptyOrders;