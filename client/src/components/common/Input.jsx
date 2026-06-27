function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none backdrop-blur-xl transition focus:border-violet-500"
      />
    </div>
  );
}

export default Input;