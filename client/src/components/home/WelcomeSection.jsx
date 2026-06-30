import { FiShoppingBag, FiTruck, FiShield } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

function WelcomeSection() {

  const { user } = useAuth();

  return (

    <section className="mx-auto max-w-7xl px-8 pt-10">

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 p-10 shadow-2xl">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-lg text-violet-100">

              Welcome Back 👋

            </p>

            <h1 className="mt-3 text-5xl font-black text-white">

              {user?.name || "Guest"}

            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-violet-100">

              Discover premium products with exclusive offers,
              lightning-fast delivery, secure payments,
              and an exceptional shopping experience only at ShopSphere.

            </p>

          </div>

          <div className="grid grid-cols-1 gap-5">

            <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-6 py-5 backdrop-blur">

              <FiShoppingBag
                className="text-white"
                size={30}
              />

              <div>

                <h3 className="font-bold text-white">

                  1000+

                </h3>

                <p className="text-sm text-violet-100">

                  Premium Products

                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-6 py-5 backdrop-blur">

              <FiTruck
                className="text-white"
                size={30}
              />

              <div>

                <h3 className="font-bold text-white">

                  Fast Delivery

                </h3>

                <p className="text-sm text-violet-100">

                  Across India

                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/10 px-6 py-5 backdrop-blur">

              <FiShield
                className="text-white"
                size={30}
              />

              <div>

                <h3 className="font-bold text-white">

                  Secure Payment

                </h3>

                <p className="text-sm text-violet-100">

                  100% Protected

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default WelcomeSection;