import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await api.get("/orders/all");
      setOrders(data.orders);
    } catch (error) {
      toast.error("Unable to load orders");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/orders/${id}`, {
        orderStatus: status,
      });

      toast.success("Order Updated");

      fetchOrders();
    } catch (error) {
      toast.error("Unable to update order");
    }
  };

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-black">
        Orders Management
      </h1>

      {orders.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-[#0b1023] p-10 text-center text-slate-400">
          No Orders Found
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="rounded-3xl border border-white/10 bg-[#0b1023] p-6"
          >

            {/* Customer */}

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {order.user?.name || "Unknown User"}
                </h2>

                <p className="text-slate-400">
                  {order.user?.email || "No Email"}
                </p>

              </div>

              <select
                value={order.orderStatus}
                onChange={(e) =>
                  updateStatus(order._id, e.target.value)
                }
                className="rounded-xl bg-slate-800 px-4 py-2"
              >
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>

            </div>

            {/* Products */}

            <div className="space-y-4">

              {order.orderItems.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-5 rounded-2xl bg-slate-900 p-4"
                >

                  {item.product ? (
                    <>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />

                      <div className="flex-1">

                        <h3 className="text-lg font-semibold">
                          {item.product.name}
                        </h3>

                        <p className="text-slate-400">
                          Quantity : {item.quantity}
                        </p>

                        <p className="text-violet-400 font-semibold">
                          ₹ {item.product.price}
                        </p>

                      </div>
                    </>
                  ) : (
                    <div className="flex-1">

                      <h3 className="text-lg font-semibold text-red-400">
                        Product Deleted
                      </h3>

                      <p className="text-slate-400">
                        Quantity : {item.quantity}
                      </p>

                    </div>
                  )}

                </div>

              ))}

            </div>

            {/* Footer */}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">

              <div>

                <p className="text-slate-400">
                  Shipping Address
                </p>

                <p className="font-medium">
                  {order.shippingAddress}
                </p>

              </div>

              <div>

                <p className="text-slate-400">
                  Ordered On
                </p>

                <p>
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>

              </div>

              <div className="text-right">

                <p className="text-slate-400">
                  Total Amount
                </p>

                <h2 className="text-3xl font-black text-violet-400">
                  ₹ {order.totalPrice}
                </h2>

              </div>

            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default Orders;