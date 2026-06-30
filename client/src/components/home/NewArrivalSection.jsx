import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiStar,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const arrivals = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: "₹89,999",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
  },
  {
    id: 2,
    name: "Premium Sneakers",
    price: "₹5,499",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
  },
  {
    id: 3,
    name: "DSLR Camera",
    price: "₹59,999",
    image:
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=900",
  },
  {
    id: 4,
    name: "Smart TV",
    price: "₹44,999",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=900",
  },
];

function NewArrivalSection() {

  const navigate = useNavigate();

  return (

    <section className="mx-auto max-w-7xl px-8 py-24">

      <div className="mb-14 flex items-center justify-between">

        <div>

          <h2 className="text-5xl font-black text-white">

            New Arrivals

          </h2>

          <p className="mt-4 text-slate-400">

            Fresh collections added this week.

          </p>

        </div>

        <button

          onClick={() => navigate("/shop/products")}

          className="flex items-center gap-3 rounded-2xl border border-violet-500 px-6 py-4 font-semibold text-violet-400 transition hover:bg-violet-600 hover:text-white"

        >

          View All

          <FiArrowRight />

        </button>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {arrivals.map((item, index) => (

          <motion.div

            key={item.id}

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: index * 0.12,
            }}

            whileHover={{
              y: -8,
            }}

            className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1023] shadow-xl"

          >

            <div className="relative">

              <img
                src={item.image}
                alt={item.name}
                className="h-72 w-full object-cover"
              />

              <span className="absolute left-4 top-4 rounded-full bg-green-500 px-4 py-2 text-xs font-bold text-white">

                NEW

              </span>

            </div>

            <div className="space-y-4 p-6">

              <div className="flex items-center gap-1 text-yellow-400">

                <FiStar className="fill-yellow-400" />

                <FiStar className="fill-yellow-400" />

                <FiStar className="fill-yellow-400" />

                <FiStar className="fill-yellow-400" />

                <FiStar className="fill-yellow-400" />

              </div>

              <h3 className="text-xl font-bold text-white">

                {item.name}

              </h3>

              <h2 className="text-3xl font-black text-violet-400">

                {item.price}

              </h2>

              <button

                onClick={() => navigate("/shop/products")}

                className="w-full rounded-2xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500"

              >

                View Collection

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}

export default NewArrivalSection;