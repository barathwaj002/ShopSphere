function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30",

    secondary:
      "border border-white/20 bg-white/5 hover:bg-white/10 text-white",

    danger:
      "bg-red-600 hover:bg-red-500 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-2xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        active:scale-95
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;