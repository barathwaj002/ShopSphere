import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiShield,
  FiEdit,
  FiLock,
  FiLogOut,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

import EditProfileModal from "./EditProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";

function ProfileHeader({
  user,
  onProfileUpdated,
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully.");

    navigate("/login");
  };

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1023] shadow-xl">

        {/* ================= Header ================= */}

        <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 p-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Left Section */}

            <div className="flex items-center gap-8">

              <img
                src={user.profileImage}
                alt={user.name}
                className="h-36 w-36 rounded-full border-4 border-white object-cover shadow-xl"
              />

              <div className="text-white">

                <h1 className="text-4xl font-black">
                  {user.name}
                </h1>

                <div className="mt-4 space-y-2">

                  <div className="flex items-center gap-3">
                    <FiMail />
                    <span>{user.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FiPhone />
                    <span>{user.phone || "Not Added"}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FiMapPin />
                    <span>{user.address || "No Address"}</span>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Section */}

            <div className="flex w-full max-w-xs flex-col gap-4">

              {/* Edit Profile */}

              <button
                onClick={() => setShowEditModal(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-violet-700 transition hover:scale-105"
              >
                <FiEdit />
                Edit Profile
              </button>

              {/* Change Password */}

              <button
                onClick={() => setShowPasswordModal(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-violet-700"
              >
                <FiLock />
                Change Password
              </button>

              {/* Admin Dashboard */}

              {user.role === "admin" && (
                <button
                  onClick={() => navigate("/admin")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
                >
                  <FiShield />
                  Admin Dashboard
                </button>
              )}

              {/* Logout */}

              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
              >
                <FiLogOut />
                Logout
              </button>

            </div>

          </div>

        </div>

        {/* ================= Footer ================= */}

        <div className="grid gap-6 p-8 md:grid-cols-2">

          <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-5">

            <FiShield
              size={28}
              className="text-violet-400"
            />

            <div>

              <p className="text-sm text-slate-400">
                Account Type
              </p>

              <h3 className="text-lg font-bold capitalize text-white">
                {user.role}
              </h3>

            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-slate-900 p-5">

            <FiCalendar
              size={28}
              className="text-violet-400"
            />

            <div>

              <p className="text-sm text-slate-400">
                Member Since
              </p>

              <h3 className="text-lg font-bold text-white">
                {new Date(user.createdAt).toLocaleDateString()}
              </h3>

            </div>

          </div>

        </div>

      </div>

      <EditProfileModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        user={user}
        onProfileUpdated={() => {
          setShowEditModal(false);
          onProfileUpdated();
        }}
      />

      <ChangePasswordModal
        open={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />
    </>
  );
}

export default ProfileHeader;