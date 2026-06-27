import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function PasswordInput({
  label,
  value,
  onChange,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <div className="relative">

        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 pr-12 text-white outline-none backdrop-blur-xl focus:border-violet-500"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        >
          {show ? <FiEyeOff /> : <FiEye />}
        </button>

      </div>
    </div>
  );
}

export default PasswordInput;