import { Link } from "react-router-dom";
import {
    FiPackage,
    FiCalendar,
    FiCreditCard,
    FiArrowRight,
} from "react-icons/fi";

import DownloadInvoice from "../invoice/DownloadInvoice";

function RecentOrders({
    recentOrders = [],
}) {

    return (

        <div className="rounded-3xl border border-white/10 bg-[#0b1023] p-8 shadow-xl">

            <div className="mb-8 flex items-center justify-between">

                <h2 className="flex items-center gap-3 text-3xl font-black text-white">

                    <FiPackage />

                    Recent Orders

                </h2>

                <Link
                    to="/shop/orders"
                    className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
                >

                    View All

                    <FiArrowRight />

                </Link>

            </div>

            {recentOrders.length === 0 ? (

                <div className="rounded-2xl border border-dashed border-white/10 py-16 text-center">

                    <FiPackage
                        size={60}
                        className="mx-auto text-slate-500"
                    />

                    <h3 className="mt-6 text-2xl font-bold text-white">

                        No Orders Yet

                    </h3>

                    <p className="mt-3 text-slate-400">

                        Your recent orders will appear here.

                    </p>

                </div>

            ) : (

                <div className="space-y-6">

                    {recentOrders.map((order) => (

                        <div
                            key={order._id}
                            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
                        >

                            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                                <div>

                                    <h3 className="text-xl font-bold text-white">

                                        Order #

                                        {order._id.slice(-6).toUpperCase()}

                                    </h3>

                                    <div className="mt-3 flex flex-wrap gap-6 text-slate-400">

                                        <div className="flex items-center gap-2">

                                            <FiCalendar />

                                            {new Date(
                                                order.createdAt
                                            ).toLocaleDateString()}

                                        </div>

                                        <div className="flex items-center gap-2">

                                            <FiCreditCard />

                                            {order.paymentStatus}

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

                            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                                <div>

                                    <p className="text-slate-400">

                                        Grand Total

                                    </p>

                                    <h2 className="text-3xl font-black text-violet-400">

                                        ₹ {order.totalPrice}

                                    </h2>

                                </div>

                                <DownloadInvoice
                                    order={order}
                                />

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default RecentOrders;