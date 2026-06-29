import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

function AdminLayout() {

  return (

    <div className="flex min-h-screen bg-[#050816] text-white">

      <AdminSidebar />

      <div className="flex flex-1 flex-col">

        <AdminNavbar />

        <main className="flex-1 p-8">

          <Outlet />

        </main>

      </div>

    </div>

  );

}

export default AdminLayout;