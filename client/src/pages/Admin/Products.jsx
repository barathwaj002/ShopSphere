import { useEffect, useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiSearch,
  FiPackage,
} from "react-icons/fi";

import toast from "react-hot-toast";
import api from "../../services/api";

import AddProductModal from "../../components/admin/AddProductModal";
import EditProductModal from "../../components/admin/EditProductModal";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {

    try {

      const { data } = await api.get("/products");

      setProducts(data.products);

    } catch {

      toast.error("Unable to load products.");

    }

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this product?")) return;

    try {

      await api.delete(`/products/${id}`);

      toast.success("Product Deleted");

      fetchProducts();

    } catch {

      toast.error("Unable to delete product");

    }

  };

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-wrap items-center justify-between">

          <div>

            <h1 className="text-4xl font-black">

              Products Management

            </h1>

            <p className="mt-2 text-slate-400">

              Total Products : {products.length}

            </p>

          </div>

          <button

            onClick={() => setShowAddModal(true)}

            className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"

          >

            <FiPlus />

            Add Product

          </button>

        </div>

        {/* Search */}

        <div className="relative">

          <FiSearch
            size={20}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input

            type="text"

            value={search}

            placeholder="Search Products..."

            onChange={(e) =>
              setSearch(e.target.value)
            }

            className="w-full rounded-2xl border border-white/10 bg-[#0b1023] py-4 pl-12 pr-5 outline-none"

          />

        </div>

        <p className="text-slate-400">

          Showing {filteredProducts.length} Products

        </p>

        {/* Table */}

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1023]">

          <table className="w-full">

            <thead className="bg-violet-700">

              <tr>

                <th className="p-5 text-left">

                  Image

                </th>

                <th className="text-left">

                  Product

                </th>

                <th className="text-left">

                  Category

                </th>

                <th>

                  Price

                </th>

                <th>

                  Stock

                </th>

                <th>

                  Actions

                </th>

              </tr>

            </thead>

            <tbody>

              {filteredProducts.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="py-16 text-center text-slate-400"
                  >

                    No Products Found

                  </td>

                </tr>

              ) : (

                filteredProducts.map((product, index) => (

                  <tr

                    key={product._id}

                    className={`border-t border-white/10 transition hover:bg-white/5 ${
                      index % 2 === 0
                        ? "bg-[#0d1328]"
                        : "bg-[#0b1023]"
                    }`}

                  >

                    <td className="p-4">

                      <img

                        src={product.image}

                        alt={product.name}

                        className="h-20 w-20 rounded-2xl border border-white/10 object-cover"

                      />

                    </td>

                    <td>

                      <h2 className="font-semibold">

                        {product.name}

                      </h2>

                    </td>

                    <td>

                      <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300">

                        {product.category}

                      </span>

                    </td>

                    <td className="text-center font-bold text-green-400">

                      ₹ {product.price}

                    </td>

                    <td className="text-center">

                      {product.stock <= 5 ? (

                        <span className="rounded-full bg-red-600 px-3 py-1 text-xs">

                          Low ({product.stock})

                        </span>

                      ) : (

                        <span className="rounded-full bg-green-600 px-3 py-1 text-xs">

                          {product.stock}

                        </span>

                      )}

                    </td>

                    <td>

                      <div className="flex items-center justify-center gap-3">

                        <button

                          onClick={() => {

                            setSelectedProduct(product);

                            setShowEditModal(true);

                          }}

                          className="rounded-xl bg-cyan-600 p-3 transition hover:scale-110"

                        >

                          <FiEdit2 />

                        </button>

                        <button

                          onClick={() =>
                            handleDelete(product._id)
                          }

                          className="rounded-xl bg-red-600 p-3 transition hover:scale-110"

                        >

                          <FiTrash2 />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

        {/* Footer */}

        <div className="flex items-center gap-4 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

          <FiPackage
            size={28}
            className="text-violet-400"
          />

          <div>

            <h3 className="font-bold">

              Inventory Overview

            </h3>

            <p className="text-slate-400">

              Manage products, stock and pricing from one place.

            </p>

          </div>

        </div>

      </div>

      {/* Add Modal */}

      <AddProductModal

        open={showAddModal}

        onClose={() => setShowAddModal(false)}

        onSuccess={() => {

          fetchProducts();

          setShowAddModal(false);

        }}

      />

      {/* Edit Modal */}

      <EditProductModal

        open={showEditModal}

        product={selectedProduct}

        onClose={() => {

          setShowEditModal(false);

          setSelectedProduct(null);

        }}

        onSuccess={() => {

          fetchProducts();

          setShowEditModal(false);

        }}

      />

    </>

  );

}

export default Products;