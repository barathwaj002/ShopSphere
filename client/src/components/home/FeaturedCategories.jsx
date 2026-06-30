import { motion } from "framer-motion";
import {
  FiMonitor,
  FiSmartphone,
  FiWatch,
  FiShoppingBag,
  FiHome,
  FiHeadphones,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Electronics",
    icon: <FiMonitor size={42} />,
    color: "from-cyan-500 to-blue-600",
    products: "250+ Products",
  },
  {
    name: "Mobiles",
    icon: <FiSmartphone size={42} />,
    color: "from-green-500 to-emerald-600",
    products: "180+ Products",
  },
  {
    name: "Fashion",
    icon: <FiShoppingBag size={42} />,
    color: "from-pink-500 to-rose-600",
    products: "420+ Products",
  },
  {
    name: "Watches",
    icon: <FiWatch size={42} />,
    color: "from-violet-500 to-purple-700",
    products: "90+ Products",
  },
  {
    name: "Home",
    icon: <FiHome size={42} />,
    color: "from-orange-500 to-amber-600",
    products: "150+ Products",
  },
  {
    name: "Accessories",
    icon: <FiHeadphones size={42} />,
    color: "from-indigo-500 to-sky-600",
    products: "120+ Products",
  },
];

function FeaturedCategories() {

  const navigate = useNavigate();

  return (

    <section className="mx-auto max-w-7xl px-8 py-24">

      <div className="mb-14 text-center">

        <h2 className="text-5xl font-black text-white">

          Shop by Category

        </h2>

        <p className="mt-5 text-lg text-slate-400">

          Find your favourite products from our premium collections.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {categories.map((category, index) => (

          <motion.div

            key={category.name}

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: index * 0.1,
            }}

            whileHover={{
              y: -10,
              scale: 1.03,
            }}

            onClick={() => navigate("/shop/products")}

            className={`cursor-pointer rounded-3xl bg-gradient-to-r ${category.color} p-8 shadow-2xl transition-all`}

          >

            <div className="flex items-center justify-between">

              <div className="rounded-2xl bg-white/20 p-4 text-white">

                {category.icon}

              </div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">

                {category.products}

              </span>

            </div>

            <h3 className="mt-10 text-3xl font-black text-white">

              {category.name}

            </h3>

            <p className="mt-3 text-white/80">

              Explore the latest collection of {category.name} with amazing deals and exclusive discounts.

            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default FeaturedCategories;