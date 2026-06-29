import { useEffect, useState } from "react";
import api from "../../services/api";

import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyCart from "../../components/cart/EmptyCart";

function Cart() {

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {

      const { data } = await api.get("/cart");

      setCart(data.cartItems);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-white">
        Loading Cart...
      </div>
    );
  }

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto max-w-7xl px-8 py-20">

      <h1 className="mb-10 text-4xl font-bold text-white">
        Shopping Cart
      </h1>

      <div className="grid gap-10 lg:grid-cols-3">

        <div className="space-y-6 lg:col-span-2">

          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              refreshCart={fetchCart}
            />
          ))}

        </div>

        <CartSummary cart={cart} />

      </div>

    </div>
  );
}

export default Cart;