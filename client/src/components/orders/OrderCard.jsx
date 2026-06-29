import {
  FiMapPin,
  FiCalendar,
  FiPackage,
  FiCreditCard,
} from "react-icons/fi";

import DownloadInvoice from "../invoice/DownloadInvoice";

function OrderCard({ order }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1023] shadow-xl">

      {/* ================= Header ================= */}

      <div className="flex flex-col gap-6 border-b border-white/10 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 p-8 text-white lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h2 className="text-3xl font-black">

            Order #{order._id.slice(-6).toUpperCase()}

          </h2>

          <div className="mt-4 flex flex-wrap gap-6 text-sm">

            <div className="flex items-center gap-2">

              <FiCalendar />

              <span>

                {new Date(order.createdAt).toLocaleDateString()}

              </span>

            </div>

            <div className="flex items-center gap-2">

              <FiCreditCard />

              <span>

                {order.paymentStatus}

              </span>

            </div>

          </div>

        </div>

        <div>

          <span
            className={`rounded-full px-5 py-2 text-sm font-bold ${
              order.orderStatus === "Delivered"
                ? "bg-green-500"
                : order.orderStatus === "Cancelled"
                ? "bg-red-500"
                : order.orderStatus === "Shipped"
                ? "bg-blue-500"
                : "bg-yellow-500 text-black"
            }`}
          >
            {order.orderStatus}
          </span>

        </div>

      </div>

      {/* ================= Shipping ================= */}

      <div className="border-b border-white/10 p-8">

        <div className="flex items-start gap-3">

          <FiMapPin
            size={24}
            className="mt-1 text-violet-400"
          />

          <div>

            <h3 className="text-xl font-bold text-white">

              Shipping Address

            </h3>

            <p className="mt-2 leading-7 text-slate-300">

              {order.shippingAddress}

            </p>

          </div>

        </div>

      </div>

      {/* ================= Products ================= */}

      <div className="space-y-5 p-8">

        <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">

          <FiPackage />

          Ordered Products

        </h3>

        {order.orderItems.map((item) => (

          <div
            key={item._id}
            className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 md:flex-row md:items-center md:justify-between"
          >

            <div className="flex items-center gap-5">

              <img
                src={item.product?.image}
                alt={item.product?.name}
                className="h-24 w-24 rounded-2xl border border-white/10 object-cover"
              />

              <div>

                <h2 className="text-xl font-bold text-white">

                  {item.product?.name}

                </h2>

                <p className="mt-2 text-slate-400">

                  Category :

                  {" "}

                  {item.product?.category}

                </p>

                <p className="mt-1 text-slate-400">

                  Quantity :

                  {" "}

                  {item.quantity}

                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="text-sm text-slate-400">

                Unit Price

              </p>

              <h2 className="text-2xl font-black text-violet-400">

                ₹ {item.product?.price}

              </h2>

              <p className="mt-3 font-semibold text-green-400">

                Total :

                {" "}

                ₹ {item.product?.price * item.quantity}

              </p>

            </div>

          </div>

        ))}

      </div>

      {/* ================= Bottom ================= */}

      <div className="flex flex-col gap-6 border-t border-white/10 bg-[#0d1328] p-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-slate-400">

            Grand Total

          </p>

          <h1 className="mt-2 text-5xl font-black text-violet-400">

            ₹ {order.totalPrice}

          </h1>

        </div>

        <DownloadInvoice order={order} />

      </div>

    </div>
  );
}

export default OrderCard;