import {
  FiShoppingBag,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#050816]">

      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 lg:grid-cols-4">

        {/* ================= Brand ================= */}

        <div>

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-violet-600 p-3">

              <FiShoppingBag
                size={24}
                className="text-white"
              />

            </div>

            <h2 className="text-3xl font-black text-white">

              ShopSphere

            </h2>

          </div>

          <p className="mt-6 leading-8 text-slate-400">

            ShopSphere is your trusted destination for
            premium electronics, fashion, home essentials,
            beauty products and much more. We aim to deliver
            quality products with secure payments and fast
            delivery across India.

          </p>

        </div>

        {/* ================= Quick Links ================= */}

        <div>

          <h3 className="text-2xl font-bold text-white">

            Quick Links

          </h3>

          <div className="mt-6 flex flex-col gap-4">

            <Link
              to="/shop"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Home
            </Link>

            <Link
              to="/shop/products"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Products
            </Link>

            <Link
              to="/shop/wishlist"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Wishlist
            </Link>

            <Link
              to="/shop/cart"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Cart
            </Link>

            <Link
              to="/shop/orders"
              className="text-slate-400 transition hover:text-violet-400"
            >
              My Orders
            </Link>

          </div>

        </div>

        {/* ================= Customer Support ================= */}

        <div>

          <h3 className="text-2xl font-bold text-white">

            Customer Support

          </h3>

          <div className="mt-6 flex flex-col gap-4">

            <Link
              to="/faq"
              className="text-slate-400 transition hover:text-violet-400"
            >
              FAQ
            </Link>

            <Link
              to="/privacy-policy"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="text-slate-400 transition hover:text-violet-400"
            >
              Contact Us
            </Link>

          </div>

        </div>

        {/* ================= Contact ================= */}

        <div>

          <h3 className="text-2xl font-bold text-white">

            Contact

          </h3>

          <div className="mt-6 space-y-5">

            <div className="flex items-center gap-3">

              <FiMail className="text-violet-400" />

              <span className="text-slate-400">

                support@shopsphere.com

              </span>

            </div>

            <div className="flex items-center gap-3">

              <FiPhone className="text-violet-400" />

              <span className="text-slate-400">

                +91 98765 43210

              </span>

            </div>

            <div className="flex items-center gap-3">

              <FiMapPin className="text-violet-400" />

              <span className="text-slate-400">

                Chennai, Tamil Nadu, India

              </span>

            </div>

          </div>

          {/* Social Icons */}

          <div className="mt-8 flex gap-4">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-3 transition hover:bg-violet-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-3 transition hover:bg-pink-600"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-3 transition hover:bg-blue-600"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 p-3 transition hover:bg-slate-700"
            >
              <FaGithub />
            </a>

          </div>

        </div>

      </div>

      {/* ================= Bottom ================= */}

      <div className="border-t border-white/10 py-6">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 text-center text-sm text-slate-500 md:flex-row">

          <p>

            © 2026 ShopSphere. All Rights Reserved.

          </p>

          <p>

            Designed & Developed by{" "}

            <span className="font-semibold text-violet-400">

              S. Barathwaj

            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;