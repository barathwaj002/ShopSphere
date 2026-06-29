import { motion } from "framer-motion";
import Logo from "../common/Logo";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-8">
        <Logo />
      </div>
    </motion.nav>
  );
}

export default Navbar;