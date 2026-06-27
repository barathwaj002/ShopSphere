import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;