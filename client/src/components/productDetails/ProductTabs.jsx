import { useState } from "react";
import {
  FiTruck,
  FiShield,
  FiRefreshCcw,
} from "react-icons/fi";

function ProductTabs({ product }) {

  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-24">

      {/* Tabs */}

      <div className="flex gap-4 border-b border-white/10">

        <button
          onClick={() => setActiveTab("description")}
          className={`pb-4 text-lg font-semibold transition ${
            activeTab === "description"
              ? "border-b-2 border-violet-500 text-violet-400"
              : "text-slate-400"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("specifications")}
          className={`pb-4 text-lg font-semibold transition ${
            activeTab === "specifications"
              ? "border-b-2 border-violet-500 text-violet-400"
              : "text-slate-400"
          }`}
        >
          Specifications
        </button>

        <button
          onClick={() => setActiveTab("shipping")}
          className={`pb-4 text-lg font-semibold transition ${
            activeTab === "shipping"
              ? "border-b-2 border-violet-500 text-violet-400"
              : "text-slate-400"
          }`}
        >
          Shipping
        </button>

      </div>

      {/* Content */}

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        {activeTab === "description" && (

          <p className="leading-8 text-slate-300">
            {product.description}
          </p>

        )}

        {activeTab === "specifications" && (

          <div className="space-y-4 text-slate-300">

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Price:</strong> ₹ {product.price}
            </p>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>

            <p>
              <strong>Product ID:</strong> {product._id}
            </p>

          </div>

        )}

        {activeTab === "shipping" && (

          <div className="space-y-5 text-slate-300">

            <div className="flex items-center gap-3">
              <FiTruck />
              Free Delivery across India
            </div>

            <div className="flex items-center gap-3">
              <FiRefreshCcw />
              7-Day Easy Replacement
            </div>

            <div className="flex items-center gap-3">
              <FiShield />
              100% Secure Payments
            </div>

            <div className="flex items-center gap-3">
              🚚 Fast Dispatch within 24 Hours
            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default ProductTabs;