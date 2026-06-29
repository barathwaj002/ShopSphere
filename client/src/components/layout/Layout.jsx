import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomNav from "./BottomNav";

function Layout() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      <main className="pb-32">
        <Outlet />
      </main>

      <Footer />

      <BottomNav />

    </div>
  );
}

export default Layout;