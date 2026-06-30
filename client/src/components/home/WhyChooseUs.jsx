import { motion } from "framer-motion";
import {
  FiTruck,
  FiShield,
  FiRefreshCcw,
  FiHeadphones,
} from "react-icons/fi";

const features = [
  {
    icon: <FiTruck size={42} />,
    title: "Free Fast Delivery",
    description:
      "Enjoy lightning-fast delivery across India with secure packaging and real-time order tracking.",
    color: "text-cyan-400",
  },
  {
    icon: <FiShield size={42} />,
    title: "Secure Payments",
    description:
      "Every transaction is protected with industry-standard encryption and secure payment gateways.",
    color: "text-green-400",
  },
  {
    icon: <FiRefreshCcw size={42} />,
    title: "Easy Returns",
    description:
      "Simple and hassle-free returns with a customer-friendly replacement and refund policy.",
    color: "text-orange-400",
  },
  {
    icon: <FiHeadphones size={42} />,
    title: "24 × 7 Support",
    description:
      "Our dedicated support team is always available to assist you with your shopping experience.",
    color: "text-pink-400",
  },
];

function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <div className="mb-16 text-center">

        <h2 className="text-5xl font-black text-white">

          Why Choose ShopSphere?

        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">

          We provide a seamless shopping experience with premium quality,
          secure transactions, fast delivery and exceptional customer service.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {features.map((feature, index) => (

          <motion.div

            key={feature.title}

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}

            whileHover={{
              y: -10,
              scale: 1.03,
            }}

            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-violet-500/40"

          >

            <div
              className={`mb-8 inline-flex rounded-2xl bg-white/10 p-5 ${feature.color}`}
            >
              {feature.icon}
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white">

              {feature.title}

            </h3>

            <p className="leading-7 text-slate-400">

              {feature.description}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;