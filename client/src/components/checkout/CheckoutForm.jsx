import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";
import useCart from "../../hooks/useCart";

function CheckoutForm() {

  const [shippingAddress, setShippingAddress] = useState("");

  const navigate = useNavigate();
  const { setCartItems } = useCart();

  const handlePlaceOrder = async (e) => {

    e.preventDefault();

    try {

      await api.post("/orders", {
        shippingAddress,
      });
      setCartItems([]);


      toast.success("Order placed successfully!");

      console.log("ORDER SUCCESS");
      navigate("/shop/orders");

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Failed to place order"
      );

    }

  };

  return (
    <form
      onSubmit={handlePlaceOrder}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >

      <h2 className="mb-8 text-3xl font-bold text-white">
        Shipping Address
      </h2>

      <textarea
        rows={6}
        value={shippingAddress}
        onChange={(e) => setShippingAddress(e.target.value)}
        placeholder="Enter your complete shipping address..."
        className="w-full rounded-2xl border border-white/10 bg-transparent p-5 text-white outline-none focus:border-violet-500"
      />

      <button
        type="submit"
        className="mt-8 w-full rounded-2xl bg-violet-600 py-4 text-lg font-semibold text-white transition hover:bg-violet-500"
      >
        Place Order
      </button>

    </form>
  );
}

export default CheckoutForm;