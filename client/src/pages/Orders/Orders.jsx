import { useEffect, useState } from "react";
import api from "../../services/api";

import OrderCard from "../../components/orders/OrderCard";
import EmptyOrders from "../../components/orders/EmptyOrders";

function Orders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const { data } = await api.get("/orders");

        setOrders(data.orders);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchOrders();

  }, []);

  if (loading) {

    return (
      <div className="py-20 text-center text-white">
        Loading Orders...
      </div>
    );

  }

  if (orders.length === 0) {

    return <EmptyOrders />;

  }

  return (
    <div className="mx-auto max-w-7xl px-8 py-20">

      <h1 className="mb-10 text-5xl font-bold text-white">
        My Orders
      </h1>

      <div className="space-y-8">

        {orders.map((order) => (

          <OrderCard
            key={order._id}
            order={order}
          />

        ))}

      </div>

    </div>
  );
}

export default Orders;