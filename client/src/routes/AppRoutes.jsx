import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Products from "../pages/Products/Products";
import Wishlist from "../pages/Wishlist/Wishlist"; 

import AdminLayout from "../components/admin/AdminLayout";

import Dashboard from "../pages/Admin/Dashboard";
import AdminProducts from "../pages/Admin/Products";
import AdminOrders from "../pages/Admin/Orders";
import Users from "../pages/Admin/Users";
import Analytics from "../pages/Admin/Analytics";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/admin" element={<AdminLayout />}>

  <Route index element={<Dashboard />} />

  <Route
    path="products"
    element={<AdminProducts />}
  />

  <Route
    path="orders"
    element={<AdminOrders />}
  />

  <Route
    path="users"
    element={<Users />}
  />

  <Route
    path="analytics"
    element={<Analytics />}
  />

</Route>

      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route
          path="products"
          element={<Products />}
        />

        <Route
          path="products/:id"
          element={<ProductDetails />}
        />

        <Route
          path="wishlist"
          element={<Wishlist />}
        />

        <Route
          path="cart"
          element={<Cart />}
        />

        <Route
          path="checkout"
          element={<Checkout />}
        />

        <Route
          path="orders"
          element={<Orders />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;