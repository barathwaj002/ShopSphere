function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="mb-8 flex flex-wrap gap-4">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`rounded-full px-5 py-2 transition ${
            selectedCategory === category
              ? "bg-violet-600 text-white"
              : "bg-white/5 text-slate-300 hover:bg-violet-500"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}

export default CategoryFilter;