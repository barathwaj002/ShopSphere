import { useState } from "react";
import toast from "react-hot-toast";

import { changePassword } from "../../services/userService";

function ChangePasswordModal({
    open,
    onClose,
}) {

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            formData.newPassword !==
            formData.confirmPassword
        ) {

            toast.error("Passwords do not match.");

            return;

        }

        if (formData.newPassword.length < 6) {

            toast.error(
                "Password must be at least 6 characters."
            );

            return;

        }

        try {

            setLoading(true);

            await changePassword({
                currentPassword:
                    formData.currentPassword,
                newPassword:
                    formData.newPassword,
            });

            toast.success(
                "Password changed successfully."
            );

            setFormData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });

            onClose();

        } catch (error) {

            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                "Unable to change password."
            );

        } finally {

            setLoading(false);

        }

    };

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

            <div className="w-full max-w-lg rounded-3xl bg-[#0b1023] p-8 shadow-2xl">

                <h2 className="mb-8 text-3xl font-black text-white">

                    Change Password

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div>

                        <label className="mb-2 block text-sm text-slate-400">

                            Current Password

                        </label>

                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-slate-400">

                            New Password

                        </label>

                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-slate-400">

                            Confirm Password

                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
                        />

                    </div>

                    <div className="flex justify-end gap-4 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-white/10 px-6 py-3 text-white transition hover:bg-slate-800"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-60"
                        >
                            {loading
                                ? "Updating..."
                                : "Change Password"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default ChangePasswordModal;