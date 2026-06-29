import { FiBell, FiUser } from "react-icons/fi";

function AdminNavbar() {

  return (

    <header className="flex items-center justify-between border-b border-white/10 bg-[#0b1023] px-8 py-5">

      <div>

        <h2 className="text-2xl font-bold">

          Admin Dashboard

        </h2>

        <p className="text-slate-400">

          Manage your store

        </p>

      </div>

      <div className="flex items-center gap-6">

        <FiBell size={22} />

        <FiUser size={24} />

      </div>

    </header>

  );

}

export default AdminNavbar;