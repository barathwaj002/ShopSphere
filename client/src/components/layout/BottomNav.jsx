import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiGrid,
  FiLayers,
  FiHeart,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";

const links = [
  {
    name: "Home",
    path: "/",
    icon: <FiHome size={22} />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <FiGrid size={22} />,
  },
  {
    name: "Categories",
    path: "/categories",
    icon: <FiLayers size={22} />,
  },
  {
    name: "Wishlist",
    path: "/wishlist",
    icon: <FiHeart size={22} />,
  },
  {
    name: "Cart",
    path: "/cart",
    icon: <FiShoppingCart size={22} />,
  },
  {
    name: "Profile",
    path: "/login",
    icon: <FiUser size={22} />,
  },
];

function BottomNav() {

  const { cartCount } = useCart();

  const { wishlistCount } = useWishlist();

  return (

    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
      }}
      className="fixed bottom-6 left-1/2 z-[999] -translate-x-1/2"
    >

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-6 py-4 shadow-2xl backdrop-blur-2xl">

        {links.map((link) => (

          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative flex flex-col items-center rounded-2xl px-4 py-2 transition-all duration-300 ${
                isActive
                  ? "bg-violet-600 text-white scale-105"
                  : "text-slate-400 hover:bg-white/10 hover:text-white"
              }`
            }
          >

            {link.icon}

            {/* Wishlist Badge */}

            {link.name === "Wishlist" &&
              wishlistCount > 0 && (

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[10px] font-semibold text-white">

                  {wishlistCount}

                </span>

              )}

            {/* Cart Badge */}

            {link.name === "Cart" &&
              cartCount > 0 && (

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-600 text-[10px] font-semibold text-white">

                  {cartCount}

                </span>

              )}

            <span className="mt-1 text-[11px] font-medium">

              {link.name}

            </span>

          </NavLink>

        ))}

      </div>

    </motion.div>

  );

}

export default BottomNav;