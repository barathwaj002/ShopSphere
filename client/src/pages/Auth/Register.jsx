import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

import Input from "../../components/common/Input";
import PasswordInput from "../../components/common/PasswordInput";

function Register() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const { data } = await api.post(
        "/auth/register",
        {
          name,
          email,
          password,
        }
      );

      login(data.user, data.token);

      toast.success(
        "Welcome to ShopSphere 🎉"
      );

      navigate("/shop");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <div className="mb-10 text-center">

          <h1 className="text-4xl font-black text-violet-400">

            ShopSphere

          </h1>

          <h2 className="mt-5 text-3xl font-bold text-white">

            Create Account 🚀

          </h2>

          <p className="mt-3 text-slate-400">

            Join thousands of happy shoppers.

          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <PasswordInput
            label="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {loading
              ? "Creating Account..."
              : "Register"}

          </button>

        </form>

        <div className="mt-8 text-center">

          <p className="text-slate-400">

            Already have an account?

          </p>

          <Link
            to="/login"
            className="mt-3 inline-block font-semibold text-violet-400 hover:text-violet-300"
          >

            Login Here

          </Link>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">

          <Link
            to="/"
            className="text-slate-400 transition hover:text-white"
          >

            ← Back to Landing Page

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Register;