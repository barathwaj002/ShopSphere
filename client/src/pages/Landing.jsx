import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiShoppingBag,
  FiShield,
  FiTruck,
  FiStar,
} from "react-icons/fi";

function Landing() {
  return (

    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#050816] text-white">

      {/* ================= Background ================= */}

      <div className="pointer-events-none fixed inset-0 -z-10">

        <div className="absolute left-[-180px] top-[-150px] h-[420px] w-[420px] rounded-full bg-violet-700/20 blur-[140px]" />

        <div className="absolute bottom-[-180px] right-[-150px] h-[420px] w-[420px] rounded-full bg-cyan-600/20 blur-[140px]" />

      </div>

      {/* ================= Navbar ================= */}

      <header className="relative z-20">

        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-8">

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black tracking-wide text-violet-400"
          >

            ShopSphere

          </motion.h1>

          <div className="flex gap-4">

            <Link
              to="/login"
              className="rounded-xl border border-violet-500 px-6 py-3 font-semibold transition hover:bg-violet-600"
            >

              Login

            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
            >

              Register

            </Link>

          </div>

        </div>

      </header>

      {/* ================= Main ================= */}

      <main className="flex flex-1 items-center">

        <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-20 px-8 py-16 lg:flex-row">

          {/* ================= Left ================= */}

          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >

            <span className="rounded-full border border-violet-500 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-300">

              India's Next Generation Shopping Experience

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">

              Everything You Need.

              <br />

              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">

                Delivered Smarter.

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-300">

              ShopSphere combines premium shopping,
              secure payments,
              lightning-fast delivery
              and an elegant user experience
              into one powerful e-commerce platform.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/login"
                className="flex items-center gap-3 rounded-2xl bg-violet-600 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-violet-500"
              >

                Start Shopping

                <FiArrowRight size={22} />

              </Link>

              <Link
                to="/register"
                className="rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold transition hover:bg-white/10"
              >

                Create Account

              </Link>

            </div>

          </motion.div>

          {/* ================= Right ================= */}

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 md:grid-cols-2"
          >
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <FiShoppingBag
                size={40}
                className="text-violet-400"
              />

              <h2 className="mt-6 text-2xl font-bold">

                Premium Products

              </h2>

              <p className="mt-3 text-slate-400">

                Thousands of products carefully selected from trusted brands.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <FiTruck
                size={40}
                className="text-cyan-400"
              />

              <h2 className="mt-6 text-2xl font-bold">

                Fast Delivery

              </h2>

              <p className="mt-3 text-slate-400">

                Quick shipping with real-time order tracking.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <FiShield
                size={40}
                className="text-green-400"
              />

              <h2 className="mt-6 text-2xl font-bold">

                Secure Payments

              </h2>

              <p className="mt-3 text-slate-400">

                Protected transactions with complete customer safety.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <FiStar
                size={40}
                className="text-yellow-400"
              />

              <h2 className="mt-6 text-2xl font-bold">

                Trusted by Customers

              </h2>

              <p className="mt-3 text-slate-400">

                A modern shopping platform built with quality and reliability.

              </p>

            </div>

          </motion.div>

        </section>

      </main>

      {/* ================= Footer ================= */}

      <footer className="relative z-20 border-t border-white/10 bg-[#050816]/70 backdrop-blur-sm">

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-8 py-8 text-center">

          <p className="text-sm text-slate-400">

            © {new Date().getFullYear()} ShopSphere.

            <span className="mx-2 text-violet-400">
              Crafted with ❤️
            </span>

            for modern online shopping.

          </p>

        </div>

      </footer>

    </div>

  );

}

export default Landing;