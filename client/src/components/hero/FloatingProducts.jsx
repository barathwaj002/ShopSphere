import { motion } from "framer-motion";

const products = [
  {
    emoji: "💻",
    title: "MacBook Pro",
    price: "₹1,89,999",
    delay: 0
  },
  {
    emoji: "📱",
    title: "iPhone 16",
    price: "₹84,999",
    delay: 0.5
  },
  {
    emoji: "🎧",
    title: "AirPods Pro",
    price: "₹24,999",
    delay: 1
  }
];

function FloatingProducts() {
  return (
    <div className="relative hidden h-[600px] w-[500px] lg:block">

      {products.map((product, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -18, 0]
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: product.delay
          }}
          className={`
            absolute
            w-60
            rounded-3xl
            border border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
            shadow-2xl
          `}
          style={{
            top:
              index === 0
                ? "0px"
                : index === 1
                ? "180px"
                : "360px",

            left:
              index === 1
                ? "0px"
                : "180px"
          }}
        >
          <div className="text-5xl">
            {product.emoji}
          </div>

          <h3 className="mt-5 text-xl font-bold text-white">
            {product.title}
          </h3>

          <p className="mt-2 text-violet-400">
            {product.price}
          </p>
        </motion.div>
      ))}

    </div>
  );
}

export default FloatingProducts;