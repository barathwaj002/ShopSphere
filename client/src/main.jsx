import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WishlistProvider from "./context/WishlistContext";


import App from "./App";
import "./styles/global.css";

import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WishlistProvider>
         <CartProvider>

           <Toaster
             position="top-right"
             reverseOrder={false}
           />

           <App />

          </CartProvider>
        </WishlistProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);