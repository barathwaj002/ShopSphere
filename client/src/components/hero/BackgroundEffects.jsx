import { motion } from "framer-motion";

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-violet-600/30 blur-[120px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] bottom-10 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]"
      />

      {/* Small Floating Glow */}
      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-52 w-52 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[100px]"
      />

    </div>
  );
}

export default BackgroundEffects;