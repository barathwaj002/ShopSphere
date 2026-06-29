import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";
import ProductForm from "./ProductForm";

function AddProductModal({
  open,
  onClose,
  onSuccess,
}) {

  const [loading, setLoading] = useState(false);

  // Force ProductForm to remount every time
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {

    if (open) {
      setFormKey((prev) => prev + 1);
    }

  }, [open]);

  const handleSubmit = async (formData) => {

    try {

      setLoading(true);

      await api.post("/products", formData);

      toast.success("Product Added Successfully");

      onSuccess();

      setFormKey((prev) => prev + 1);

      onClose();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Unable to add product."
      );

    } finally {

      setLoading(false);

    }

  };

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">

      {/* Close when clicking outside */}

      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0b1023] shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">

          <h2 className="text-3xl font-bold text-white">
            Add Product
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-slate-400 transition hover:text-white"
          >
            ×
          </button>

        </div>

        {/* Body */}

        <div className="max-h-[75vh] overflow-y-auto p-8">

          <ProductForm
            key={formKey}
            initialData={null}
            submitText="Add Product"
            loading={loading}
            onSubmit={handleSubmit}
          />

        </div>

      </div>

    </div>

  );

}

export default AddProductModal;