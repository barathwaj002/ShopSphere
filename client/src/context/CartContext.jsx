import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setCartItems([]);
        return;
      }

      const { data } = await api.get("/cart");

      setCartItems(data.cartItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        fetchCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;