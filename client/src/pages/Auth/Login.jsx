import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

import Input from "../../components/common/Input";
import PasswordInput from "../../components/common/PasswordInput";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      login(data.user, data.token);

      toast.success("Login Successful!");

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Login failed"
      );

    }

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
      >

        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Login to continue shopping.
        </p>

        <div className="space-y-6">

          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Login
          </button>

        </div>

      </form>

    </div>
  );
}

export default Login;