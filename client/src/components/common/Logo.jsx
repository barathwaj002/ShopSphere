import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="select-none text-3xl font-extrabold tracking-tight"
    >
      <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
        ShopSphere
      </span>
    </Link>
  );
}

export default Logo;