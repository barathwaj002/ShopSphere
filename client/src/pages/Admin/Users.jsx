import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetchUsers();

    }, []);

    const fetchUsers = async () => {

        try {

            const { data } = await api.get("/admin/users");

            setUsers(data.users);

        } catch {

            toast.error("Unable to load users");

        }

    };

    return (

        <div>

            <h1 className="mb-8 text-4xl font-black">

                Users

            </h1>

            <div className="overflow-hidden rounded-3xl border border-white/10">

                <table className="w-full">

                    <thead className="bg-violet-700">

                        <tr>

                            <th className="p-5 text-left">

                                Name

                            </th>

                            <th>

                                Email

                            </th>

                            <th>

                                Role

                            </th>

                            <th>

                                Joined

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {users.map((user) => (

                            <tr
                                key={user._id}
                                className="border-t border-white/10"
                            >

                                <td className="p-5">

                                    {user.name}

                                </td>

                                <td>

                                    {user.email}

                                </td>

                                <td>

                                    {user.role === "admin" ? (
                                         <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
                                             Admin
                                         </span>
                                    ) : (
                                         <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-400">
                                             Customer
                                         </span>
                                    )}

                                </td>

                                <td>

                                    {new Date(
                                        user.createdAt
                                    ).toLocaleDateString()}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Users;