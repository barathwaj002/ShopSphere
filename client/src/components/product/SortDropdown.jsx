function SortDropdown({
  sortOption,
  setSortOption,
}) {
  return (
    <div className="mb-10">

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="rounded-xl border border-white/10 bg-slate-900 px-5 py-3 text-white outline-none"
      >

        <option value="default">
          Sort Products
        </option>

        <option value="low-high">
          Price Low → High
        </option>

        <option value="high-low">
          Price High → Low
        </option>

        <option value="az">
          A → Z
        </option>

      </select>

    </div>
  );
}

export default SortDropdown;