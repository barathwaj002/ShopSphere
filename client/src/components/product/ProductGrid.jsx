import { useEffect, useMemo, useState } from "react";

import api from "../../services/api";

import ProductCard from "./ProductCard";
import ProductListCard from "./ProductListCard";
import ProductSkeleton from "./ProductSkeleton";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortDropdown from "./SortDropdown";

function ProductGrid({ featured = false }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const { data } = await api.get("/products");

        setProducts(data.products);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {

    let filtered = [...products];

    // Search

    filtered = filtered.filter((product) =>
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    // Category

    if (selectedCategory !== "All") {

      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() ===
          selectedCategory.toLowerCase()
      );

    }

    // Sorting

    switch (sortOption) {

      case "low-high":

        filtered.sort((a, b) => a.price - b.price);

        break;

      case "high-low":

        filtered.sort((a, b) => b.price - a.price);

        break;

      case "az":

        filtered.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        break;

      default:

        break;

    }

    return filtered;

  }, [
    products,
    searchTerm,
    selectedCategory,
    sortOption,
  ]);

  // Home Page → Show only 6 products

  const displayProducts = featured
    ? filteredProducts.slice(0, 6)
    : filteredProducts;

  if (loading) {

    return (

      <div className="grid gap-8">

        {[...Array(6)].map((_, index) => (

          <ProductSkeleton key={index} />

        ))}

      </div>

    );

  }

  return (

    <>

      {/* Search & Filters only for Products page */}

      {!featured && (

        <div className="mb-10 space-y-6">

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <SortDropdown
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

        </div>

      )}

      {displayProducts.length === 0 ? (

        <div className="py-20 text-center text-2xl font-semibold text-slate-400">

          No products found.

        </div>

      ) : featured ? (

        // HOME PAGE

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {displayProducts.map((product) => (

            <ProductCard

              key={product._id}

              product={product}

            />

          ))}

        </div>

      ) : (

        // PRODUCTS PAGE

        <div className="space-y-8">

          {displayProducts.map((product) => (

            <ProductListCard

              key={product._id}

              product={product}

            />

          ))}

        </div>

      )}

    </>

  );

}

export default ProductGrid;