import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
    getUserDashboard,
} from "../services/userService";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";
import RecentOrders from "../components/profile/RecentOrders";

function Profile() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState({
       totalOrders: 0,
       wishlistItems: 0,
       cartItems: 0,
       totalSpent: 0,
    });

const [recentOrders, setRecentOrders] =
    useState([]);
    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {

        try {

            const { user, stats, recentOrders } = await getUserDashboard();

            setUser(user);
            setStats(stats);
            setRecentOrders(recentOrders);

        } catch (error) {

            console.error(error);

            toast.error("Unable to load profile.");

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="flex h-[60vh] items-center justify-center">

                <div className="text-lg font-semibold">

                    Loading Profile...

                </div>

            </div>

        );

    }

    return (

        <div className="space-y-10">

            <ProfileHeader
                user={user}
                onProfileUpdated={fetchProfile}
            />

            <ProfileStats
              totalOrders={stats.totalOrders}
              wishlistItems={stats.wishlistItems}
              cartItems={stats.cartItems}
              totalSpent={stats.totalSpent} 
            />

            <RecentOrders
              recentOrders={recentOrders}
            />

        </div>

    );

}

export default Profile;