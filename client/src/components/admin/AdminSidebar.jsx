import { NavLink } from "react-router-dom";

import {
  FiGrid,
  FiBox,
  FiShoppingBag,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

const links = [

  {
    name: "Dashboard",
    path: "/admin",
    icon: <FiGrid />,
  },

  {
    name: "Products",
    path: "/admin/products",
    icon: <FiBox />,
  },

  {
    name: "Orders",
    path: "/admin/orders",
    icon: <FiShoppingBag />,
  },

  {
    name: "Users",
    path: "/admin/users",
    icon: <FiUsers />,
  },

  {
    name: "Analytics",
    path: "/admin/analytics",
    icon: <FiBarChart2 />,
  },

];

function AdminSidebar() {

  return (

    <aside className="w-72 border-r border-white/10 bg-[#0b1023]">

      <h1 className="p-8 text-3xl font-black text-violet-400">

        ShopSphere

      </h1>

      <nav className="space-y-2 px-4">

        {links.map((link) => (

          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-5 py-4 transition ${
                isActive
                  ? "bg-violet-600 text-white"
                  : "text-slate-400 hover:bg-white/10 hover:text-white"
              }`
            }
          >

            {link.icon}

            {link.name}

          </NavLink>

        ))}

      </nav>

    </aside>

  );

}

export default AdminSidebar;