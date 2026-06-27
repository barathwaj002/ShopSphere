import { motion } from "framer-motion";

const stats = [
  {
    value: "10K+",
    label: "Happy Customers"
  },
  {
    value: "500+",
    label: "Premium Products"
  },
  {
    value: "24/7",
    label: "Fast Delivery"
  },
  {
    value: "50+",
    label: "Top Brands"
  }
];

function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.8
      }}
      className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center sm:text-left">

          <h3 className="text-3xl font-bold text-violet-400">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>

        </div>
      ))}
    </motion.div>
  );
}

export default HeroStats;