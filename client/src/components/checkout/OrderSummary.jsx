import { useEffect, useState } from "react";
import api from "../../services/api";

function OrderSummary() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const fetchCart = async () => {

      try {

        const { data } = await api.get("/cart");

        setCart(data.cartItems);

      } catch (error) {

        console.log(error);

      }

    };

    fetchCart();

  }, []);

  const total = cart.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-3xl font-bold text-white">
        Order Summary
      </h2>

      <div className="mt-8 space-y-5">

        {cart.map((item) => (

          <div
            key={item._id}
            className="flex justify-between text-slate-300"
          >

            <span>
              {item.product.name} × {item.quantity}
            </span>

            <span>
              ₹ {item.product.price * item.quantity}
            </span>

          </div>

        ))}

      </div>

      <hr className="my-8 border-white/10" />

      <div className="flex justify-between text-2xl font-bold">

        <span className="text-white">
          Total
        </span>

        <span className="text-violet-400">
          ₹ {total}
        </span>

      </div>

    </div>
  );
}

export default OrderSummary;