import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiShoppingBag,
  FiTruck,
  FiShield,
} from "react-icons/fi";

function HeroBanner() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-8">

      <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#4F46E5] via-[#6D28D9] to-[#9333EA] px-10 py-16 shadow-2xl">

        {/* Background Blur */}

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">

              🔥 Mega Sale 

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

              Shop Smart.

              <br />

              Live Better.

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-violet-100">

              Discover premium electronics, fashion, accessories,
              home essentials and much more at unbeatable prices.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/shop/products"
                className="flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-violet-700 transition hover:scale-105"
              >
                Shop Now
                <FiArrowRight />
              </Link>

              

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">

              <FiShoppingBag
                size={40}
                className="text-white"
              />

              <h3 className="mt-6 text-2xl font-bold text-white">

                    Trending

              </h3>

              <p className="mt-2 text-violet-100">

                Products Available

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">

              <FiTruck
                size={40}
                className="text-white"
              />

              <h3 className="mt-6 text-2xl font-bold text-white">

                Free Delivery

              </h3>

              <p className="mt-2 text-violet-100">

                On Eligible Orders

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">

              <FiShield
                size={40}
                className="text-white"
              />

              <h3 className="mt-6 text-2xl font-bold text-white">

                Secure

              </h3>

              <p className="mt-2 text-violet-100">

                100% Safe Payment

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">

              <h3 className="text-5xl font-black text-white">

                24/7

              </h3>

              <p className="mt-3 text-violet-100">

                Customer Support

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;