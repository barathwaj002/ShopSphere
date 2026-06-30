function AdminNavbar() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-[#0b1023] px-8 py-5">

      <div>

        <h2 className="text-2xl font-bold text-white">
          Admin Dashboard
        </h2>

        <p className="text-slate-400">
          Manage products, orders and users
        </p>

      </div>

    </header>
  );
}

export default AdminNavbar;