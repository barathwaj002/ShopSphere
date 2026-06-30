import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import useAuth from "../hooks/useAuth";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

  const [wishlistItems, setWishlistItems] = useState([]);

  const { token } = useAuth();

  const fetchWishlist = async () => {

    try {

      if (!token) {

        setWishlistItems([]);

        return;

      }

      const { data } = await api.get("/wishlist");

      setWishlistItems(data.wishlist);

    } catch (error) {

      console.log(error);

      setWishlistItems([]);

    }

  };

  useEffect(() => {

    fetchWishlist();

  }, [token]);

  const wishlistCount = wishlistItems.length;

  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistCount,
        fetchWishlist,
        setWishlistItems,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

}

export default WishlistProvider;