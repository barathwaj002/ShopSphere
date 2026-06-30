import {
    FiPackage,
    FiHeart,
    FiShoppingCart,
    FiDollarSign,
} from "react-icons/fi";

function ProfileStats({
    totalOrders = 0,
    wishlistItems = 0,
    cartItems = 0,
    totalSpent = 0,
}) {

    const stats = [
        {
            title: "Total Orders",
            value: totalOrders,
            icon: <FiPackage size={28} />,
            color: "text-violet-400",
        },
        {
            title: "Wishlist Items",
            value: wishlistItems,
            icon: <FiHeart size={28} />,
            color: "text-pink-400",
        },
        {
            title: "Cart Items",
            value: cartItems,
            icon: <FiShoppingCart size={28} />,
            color: "text-blue-400",
        },
        {
            title: "Total Spent",
            value: `₹ ${totalSpent}`,
            icon: <FiDollarSign size={28} />,
            color: "text-green-400",
        },
    ];

    return (

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat, index) => (

                <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-[#0b1023] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500"
                >

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm text-slate-400">

                                {stat.title}

                            </p>

                            <h2 className="mt-3 text-3xl font-black text-white">

                                {stat.value}

                            </h2>

                        </div>

                        <div
                            className={`rounded-2xl bg-slate-900 p-4 ${stat.color}`}
                        >

                            {stat.icon}

                        </div>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default ProfileStats;