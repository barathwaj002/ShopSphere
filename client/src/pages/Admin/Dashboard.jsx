import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  FiShoppingBag,
  FiUsers,
  FiPackage,
  FiDollarSign,
  FiTrendingUp,
  FiAlertTriangle,
  FiClock,
} from "react-icons/fi";

import api from "../../services/api";

function Dashboard() {

  const [stats, setStats] = useState(null);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const { data } = await api.get("/admin/dashboard");

        setStats(data);

      } catch {

        toast.error("Unable to load dashboard");

      }

    };

    fetchDashboard();

  }, []);

  if (!stats) {

    return (

      <div className="flex h-[70vh] items-center justify-center">

        <div className="text-3xl font-bold">

          Loading Dashboard...

        </div>

      </div>

    );

  }

  return (

    <div className="space-y-10">

      {/* Heading */}

      <div>

        <h1 className="text-5xl font-black">

          Dashboard

        </h1>

        <p className="mt-2 text-slate-400">

          Welcome back Admin 👋

        </p>

      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* Products */}

        <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-violet-800 p-7 shadow-xl">

          <div className="flex items-center justify-between">

            <FiPackage size={38} />

            <FiTrendingUp size={22} />

          </div>

          <p className="mt-6 text-slate-200">

            Total Products

          </p>

          <h2 className="mt-3 text-5xl font-black">

            {stats.totalProducts}

          </h2>

        </div>

        {/* Orders */}

        <div className="rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 p-7 shadow-xl">

          <div className="flex items-center justify-between">

            <FiShoppingBag size={38} />

            <FiTrendingUp size={22} />

          </div>

          <p className="mt-6 text-slate-200">

            Total Orders

          </p>

          <h2 className="mt-3 text-5xl font-black">

            {stats.totalOrders}

          </h2>

        </div>

        {/* Users */}

        <div className="rounded-3xl bg-gradient-to-br from-pink-600 to-rose-700 p-7 shadow-xl">

          <div className="flex items-center justify-between">

            <FiUsers size={38} />

            <FiTrendingUp size={22} />

          </div>

          <p className="mt-6 text-slate-200">

            Registered Users

          </p>

          <h2 className="mt-3 text-5xl font-black">

            {stats.totalUsers}

          </h2>

        </div>

        {/* Revenue */}

        <div className="rounded-3xl bg-gradient-to-br from-green-600 to-emerald-700 p-7 shadow-xl">

          <div className="flex items-center justify-between">

            <FiDollarSign size={38} />

            <FiTrendingUp size={22} />

          </div>

          <p className="mt-6 text-slate-200">

            Total Revenue

          </p>

          <h2 className="mt-3 text-4xl font-black">

            ₹ {stats.totalRevenue}

          </h2>

        </div>

      </div>

      {/* Panels */}

      <div className="grid gap-8 lg:grid-cols-2">

                {/* Low Stock Products */}

        <div className="rounded-3xl bg-[#0b1023] p-6 shadow-xl">

          <div className="mb-6 flex items-center gap-3">

            <FiAlertTriangle
              size={24}
              className="text-yellow-400"
            />

            <h2 className="text-2xl font-bold">

              Low Stock Products

            </h2>

          </div>

          {stats.lowStockProducts.length === 0 ? (

            <p className="text-green-400">

              🎉 All products have sufficient stock.

            </p>

          ) : (

            stats.lowStockProducts.map((product) => (

              <div
                key={product._id}
                className="mb-4 flex items-center justify-between rounded-xl bg-slate-900 p-4"
              >

                <div>

                  <h3 className="font-semibold">

                    {product.name}

                  </h3>

                  <p className="text-sm text-slate-400">

                    {product.category}

                  </p>

                </div>

                <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold">

                  {product.stock} Left

                </span>

              </div>

            ))

          )}

        </div>

        {/* Recent Orders */}

        <div className="rounded-3xl bg-[#0b1023] p-6 shadow-xl">

          <div className="mb-6 flex items-center gap-3">

            <FiClock
              size={24}
              className="text-cyan-400"
            />

            <h2 className="text-2xl font-bold">

              Recent Orders

            </h2>

          </div>

          {stats.recentOrders.length === 0 ? (

            <p>No Orders Found</p>

          ) : (

            stats.recentOrders.map((order) => (

              <div
                key={order._id}
                className="mb-4 rounded-xl bg-slate-900 p-4"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="font-semibold">

                      {order.user?.name || "Unknown User"}

                    </h3>

                    <p className="text-sm text-slate-400">

                      {order.user?.email || "No Email"}

                    </p>

                  </div>

                  <div className="text-right">

                    <h2 className="font-bold text-green-400">

                      ₹ {order.totalPrice}

                    </h2>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        order.orderStatus === "Delivered"
                          ? "bg-green-600"
                          : order.orderStatus === "Shipped"
                          ? "bg-blue-600"
                          : order.orderStatus === "Processing"
                          ? "bg-yellow-500 text-black"
                          : "bg-red-600"
                      }`}
                    >

                      {order.orderStatus}

                    </span>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

      {/* Inventory Summary */}

      <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6">

        <div className="flex items-center gap-4">

          <FiPackage
            size={32}
            className="text-violet-400"
          />

          <div>

            <h2 className="text-2xl font-bold">

              Inventory Summary

            </h2>

            <p className="mt-1 text-slate-300">

              Monitor products, customer orders, revenue,
              users and stock availability from one place.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;