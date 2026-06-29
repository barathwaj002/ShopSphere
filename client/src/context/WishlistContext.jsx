import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchWishlist = async () => {

    try {

      const token = localStorage.getItem("token");

      if (!token) {

        setWishlistItems([]);

        return;

      }

      const { data } = await api.get("/wishlist");

      setWishlistItems(data.wishlist);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchWishlist();

  }, []);

  const wishlistCount = wishlistItems.length;

  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistCount,
        fetchWishlist,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

}

export default WishlistProvider;