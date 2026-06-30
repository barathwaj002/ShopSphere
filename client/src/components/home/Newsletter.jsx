import { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function Newsletter() {

  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {

    e.preventDefault();

    if (!email.trim()) {

      toast.error("Please enter your email.");

      return;

    }

    toast.success("🎉 Successfully subscribed!");

    setEmail("");

  };

  return (

    <section className="mx-auto max-w-7xl px-8 py-24">

      <motion.div

        initial={{
          opacity: 0,
          y: 60,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.7,
        }}

        className="overflow-hidden rounded-[35px] bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 p-12 shadow-2xl"

      >

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="inline-flex rounded-full bg-white/20 p-5">

              <FiMail
                size={40}
                className="text-white"
              />

            </div>

            <h2 className="mt-8 text-5xl font-black text-white">

              Subscribe to

              <br />

              ShopSphere

            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-violet-100">

              Receive exclusive discounts, new arrivals,
              flash sale notifications,
              shopping tips and premium offers
              directly in your inbox.

            </p>

          </div>

          {/* Right */}

          <form
            onSubmit={handleSubscribe}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl"
          >

            <h3 className="mb-8 text-3xl font-bold text-white">

              Join Our Community

            </h3>

            <input

              type="email"

              placeholder="Enter your email"

              value={email}

              onChange={(e) =>
                setEmail(e.target.value)
              }

              className="mb-6 w-full rounded-2xl border border-white/20 bg-transparent px-6 py-5 text-white placeholder:text-violet-200 outline-none focus:border-white"

            />

            <button

              type="submit"

              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-lg font-bold text-violet-700 transition hover:scale-[1.02]"

            >

              <FiSend />

              Subscribe Now

            </button>

            <p className="mt-6 text-center text-sm text-violet-100">

              No spam. Only exciting deals and product launches.

            </p>

          </form>

        </div>

      </motion.div>

    </section>

  );

}

export default Newsletter;