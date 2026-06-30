import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { updateUserProfile } from "../../services/userService";

function EditProfileModal({
    open,
    onClose,
    user,
    onProfileUpdated,
}) {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        profileImage: "",
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (user) {

            setFormData({
                name: user.name || "",
                phone: user.phone || "",
                address: user.address || "",
                profileImage: user.profileImage || "",
            });

        }

    }, [user]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            await updateUserProfile(formData);

            toast.success("Profile updated successfully.");

            onProfileUpdated();

        } catch (error) {

            console.error(error);

            toast.error("Unable to update profile.");

        } finally {

            setLoading(false);

        }

    };

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

            <div className="w-full max-w-xl rounded-3xl bg-[#0b1023] p-8 shadow-2xl">

                <h2 className="mb-8 text-3xl font-black text-white">

                    Edit Profile

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div>

                        <label className="mb-2 block text-sm text-slate-400">

                            Full Name

                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
                            required
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-slate-400">

                            Phone Number

                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-slate-400">

                            Address

                        </label>

                        <textarea
                            rows={4}
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-500"
                        />

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-slate-400">

                            Profile Image URL

                        </label>

                        <input
                            type="text"
                            name="profileImage"
                            value={formData.profileImage}
                            onChange={handleChange}
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
                                ? "Saving..."
                                : "Save Changes"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditProfileModal;