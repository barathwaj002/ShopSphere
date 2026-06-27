import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default Layout;