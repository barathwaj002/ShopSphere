import { motion } from "framer-motion";
import { useState } from "react";

function ProductGallery({ product }) {

  const [selectedImage] = useState(product.image);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" />

      {/* Glass Card */}

      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <motion.img
          whileHover={{
            scale: 1.12,
            rotate: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          src={selectedImage}
          alt={product.name}
          className="mx-auto h-[600px] w-full rounded-3xl object-contain"
        />

      </div>

      {/* Image Indicator */}

      <div className="mt-8 flex justify-center gap-3">

        <div className="h-3 w-3 rounded-full bg-violet-500" />

      </div>

    </motion.div>
  );
}

export default ProductGallery;