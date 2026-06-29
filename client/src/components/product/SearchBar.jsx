function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-8">

      <input
        type="text"
        placeholder="🔍 Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none backdrop-blur-xl placeholder:text-slate-400 focus:border-violet-500"
      />

    </div>
  );
}

export default SearchBar;   