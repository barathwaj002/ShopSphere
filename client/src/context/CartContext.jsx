import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import useAuth from "../hooks/useAuth";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const { token } = useAuth();

  const fetchCart = async () => {

    try {

      if (!token) {

        setCartItems([]);

        return;

      }

      const { data } = await api.get("/cart");

      setCartItems(data.cartItems);

    } catch (error) {

      console.log(error);

      setCartItems([]);

    }

  };

  useEffect(() => {

    fetchCart();

  }, [token]);

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