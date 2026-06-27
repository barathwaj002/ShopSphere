import { motion } from "framer-motion";
import Button from "../common/Button";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      <p className="mb-4 text-lg font-medium text-violet-400">
        Welcome to ShopSphere
      </p>

      <h1 className="text-6xl font-black leading-tight text-white">
        Shop Smarter.
        <br />

        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          Experience Premium Shopping.
        </span>
      </h1>

      <p className="mt-8 text-lg leading-8 text-slate-400">
        Discover premium gadgets, fashion, electronics and lifestyle products
        carefully curated for modern shoppers.
      </p>

      <div className="mt-10 flex gap-5">

        <Button>
          Explore Collection
        </Button>

        <Button variant="secondary">
          Shop Now
        </Button>

      </div>

    </motion.div>
  );
}

export default HeroContent;