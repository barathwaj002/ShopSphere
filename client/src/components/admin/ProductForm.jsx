import { useEffect, useState } from "react";

function ProductForm({
  initialData = null,
  onSubmit,
  submitText,
  loading,
}) {

  const emptyForm = {
    name: "",
    description: "",
    category: "",
    image: "",
    price: "",
    stock: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {

    if (initialData) {

      setFormData({
        name: initialData.name || "",
        description: initialData.description || "",
        category: initialData.category || "",
        image: initialData.image || "",
        price: initialData.price || "",
        stock: initialData.stock || "",
      });

    } else {

      setFormData(emptyForm);

    }

  }, [initialData]);

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.category ||
      !formData.image ||
      !formData.price ||
      !formData.stock
    ) {

      alert("Please fill all fields");

      return;

    }

    onSubmit({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* Product Name */}

      <div>

        <label className="mb-2 block">
          Product Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-900 p-3 outline-none"
        />

      </div>

      {/* Description */}

      <div>

        <label className="mb-2 block">
          Description
        </label>

        <textarea
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-900 p-3 outline-none"
        />

      </div>

      {/* Category */}

      <div>

        <label className="mb-2 block">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-900 p-3 outline-none"
        >

          <option value="">
            Select Category
          </option>

          <option>Mobiles</option>
          <option>Laptops</option>
          <option>Accessories</option>
          <option>Fashion</option>
          <option>Books</option>
          <option>Jewellery</option>

        </select>

      </div>

      {/* Image */}

      <div>

        <label className="mb-2 block">
          Image URL
        </label>

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-900 p-3 outline-none"
        />

      </div>

      {/* Preview */}

      {formData.image && (

        <img
          src={formData.image}
          alt="Preview"
          className="mx-auto h-40 rounded-xl object-cover"
        />

      )}

      {/* Price & Stock */}

      <div className="grid grid-cols-2 gap-5">

        <div>

          <label className="mb-2 block">
            Price
          </label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-900 p-3 outline-none"
          />

        </div>

        <div>

          <label className="mb-2 block">
            Stock
          </label>

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-900 p-3 outline-none"
          />

        </div>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-violet-600 py-3 text-lg font-bold transition hover:bg-violet-500"
      >

        {loading ? "Please Wait..." : submitText}

      </button>

    </form>

  );

}

export default ProductForm;