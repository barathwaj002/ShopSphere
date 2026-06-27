import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import Logo from "../common/Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
];

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Logo />

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-violet-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5">

          <Link className="text-xl text-gray-300 transition hover:text-pink-400">
            <FiHeart />
          </Link>

          <Link className="relative text-xl text-gray-300 transition hover:text-cyan-400">
            <FiShoppingCart />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-xs">
              0
            </span>

          </Link>

          <Link className="text-xl text-gray-300 transition hover:text-violet-400">
            <FiUser />
          </Link>

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;