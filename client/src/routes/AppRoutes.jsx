import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import AdminLayout from "../components/admin/AdminLayout";

// Landing
import Landing from "../pages/Landing";

// Authentication
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

// User Pages
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Wishlist from "../pages/Wishlist/Wishlist";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/Profile";

// Support Pages
import FAQ from "../pages/FAQ";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import Contact from "../pages/Contact";

// Admin
import AdminRoute from "./AdminRoute";
import Dashboard from "../pages/Admin/Dashboard";
import AdminProducts from "../pages/Admin/Products";
import AdminOrders from "../pages/Admin/Orders";
import Users from "../pages/Admin/Users";

function AppRoutes() {
  return (
    <Routes>

      {/* ================= Landing ================= */}

      <Route
        path="/"
        element={<Landing />}
      />

      {/* ================= Authentication ================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ================= Support Pages ================= */}

      <Route
        path="/faq"
        element={<FAQ />}
      />

      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />

      <Route
        path="/terms"
        element={<Terms />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* ================= User ================= */}

      <Route
        path="/shop"
        element={<Layout />}
      >

        <Route
          index
          element={<Home />}
        />

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

        <Route
          path="profile"
          element={<Profile />}
        />

      </Route>

      {/* ================= Admin ================= */}

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >

        <Route
          index
          element={<Dashboard />}
        />

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

      </Route>

    </Routes>
  );
}

export default AppRoutes;