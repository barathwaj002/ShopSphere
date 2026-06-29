import CompanyLogo from "../../assets/invoice/Company_Logo.png";

function InvoiceTemplate({ order }) {

    const subtotal = order.orderItems.reduce(
        (total, item) =>
            total + item.product.price * item.quantity,
        0
    );

    return (

        <div
            id="invoice-template"
            className="mx-auto w-[900px] overflow-hidden rounded-3xl bg-white text-gray-800 shadow-2xl"
        >

            {/* ===================== HEADER ===================== */}

            <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 px-10 py-8 text-white">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-5">

                        <img
                            src={CompanyLogo}
                            alt="Company Logo"
                            className="h-20 w-20 rounded-2xl bg-white p-2 shadow-xl"
                        />

                        <div>

                            <h1 className="text-4xl font-black">

                                ShopSphere

                            </h1>

                            <p className="mt-2 text-sm text-violet-100">

                                Premium Online Shopping Platform

                            </p>

                            <p className="text-sm text-violet-100">

                                www.shopsphere.com

                            </p>

                        </div>

                    </div>

                    <div className="text-right">

                        <h2 className="text-5xl font-black">

                            INVOICE

                        </h2>

                        <p className="mt-3 text-violet-100">

                            Invoice No

                        </p>

                        <h3 className="text-2xl font-bold">

                            SS-
                            {order._id.slice(-6).toUpperCase()}

                        </h3>

                    </div>

                </div>

            </div>

            {/* ===================== CUSTOMER SECTION ===================== */}

            <div className="grid grid-cols-2 gap-8 p-10">

                <div className="rounded-2xl border border-slate-200 p-6">

                    <h2 className="mb-6 text-2xl font-bold text-violet-700">

                        Customer Details

                    </h2>

                    <div className="space-y-5">

                        <div>

                            <p className="text-sm text-gray-500">

                                Customer Name

                            </p>

                            <h3 className="text-lg font-semibold">

                                {order.user?.name}

                            </h3>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                Email Address

                            </p>

                            <h3>

                                {order.user?.email}

                            </h3>

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                Shipping Address

                            </p>

                            <h3 className="leading-7">

                                {order.shippingAddress}

                            </h3>

                        </div>

                    </div>

                </div>

                {/* Order Details */}

                <div className="rounded-2xl border border-slate-200 p-6">

                    <h2 className="mb-6 text-2xl font-bold text-violet-700">

                        Order Details

                    </h2>

                    <div className="space-y-5">

                        <div className="flex justify-between">

                            <span>

                                Order ID

                            </span>

                            <span className="font-semibold">

                                {order._id.slice(-10)}

                            </span>

                        </div>

                        <div className="flex justify-between">

                            <span>

                                Ordered Date

                            </span>

                            <span>

                                {new Date(
                                    order.createdAt
                                ).toLocaleDateString()}

                            </span>

                        </div>

                        <div className="flex justify-between">

                            <span>

                                Payment Method

                            </span>

                            <span>

                                Cash On Delivery

                            </span>

                        </div>

                        <div className="flex justify-between">

                            <span>

                                Payment Status

                            </span>

                            <span className="rounded-full bg-green-600 px-4 py-1 text-sm text-white">

                                {order.paymentStatus}

                            </span>

                        </div>

                        <div className="flex justify-between">

                            <span>

                                Order Status

                            </span>

                            <span className="rounded-full bg-violet-600 px-4 py-1 text-sm text-white">

                                {order.orderStatus}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

            {/* Divider */}

            <div className="mx-10 border-b border-dashed border-gray-300"></div>

            {/* ===================== PRODUCT TABLE ===================== */}

            <div className="p-10">

                <h2 className="mb-6 text-2xl font-bold text-violet-700">

                    Ordered Products

                </h2>

                <table className="w-full overflow-hidden rounded-xl">

                    <thead>

                        <tr className="bg-violet-700 text-white">

                            <th className="p-4 text-left">

                                Product

                            </th>

                            <th className="p-4 text-center">

                                Qty

                            </th>

                            <th className="p-4 text-center">

                                Price

                            </th>

                            <th className="p-4 text-right">

                                Total

                            </th>

                        </tr>

                    </thead>

                    <tbody>
                                                {order.orderItems.map((item, index) => (

                            <tr
                                key={item._id}
                                className={
                                    index % 2 === 0
                                        ? "bg-white"
                                        : "bg-gray-50"
                                }
                            >

                                <td className="p-5">

                                    <div className="flex items-center gap-4">

                                        <img
                                            src={item.product?.image}
                                            alt={item.product?.name}
                                            className="h-16 w-16 rounded-xl border object-cover"
                                        />

                                        <div>

                                            <h3 className="font-bold text-gray-800">

                                                {item.product?.name}

                                            </h3>

                                            <p className="text-sm text-gray-500">

                                                {item.product?.category}

                                            </p>

                                        </div>

                                    </div>

                                </td>

                                <td className="text-center font-semibold">

                                    {item.quantity}

                                </td>

                                <td className="text-center">

                                    ₹ {item.product?.price}

                                </td>

                                <td className="pr-6 text-right font-bold text-violet-700">

                                    ₹ {item.product?.price * item.quantity}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

                {/* ================= PAYMENT SUMMARY ================= */}

                <div className="mt-10 flex justify-end">

                    <div className="w-[360px] rounded-3xl bg-violet-700 p-8 text-white shadow-xl">

                        <h2 className="mb-6 text-2xl font-bold">

                            Payment Summary

                        </h2>

                        <div className="space-y-4">

                            <div className="flex justify-between">

                                <span>

                                    Sub Total

                                </span>

                                <span>

                                    ₹ {subtotal}

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>

                                    Shipping

                                </span>

                                <span>

                                    FREE

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>

                                    Tax

                                </span>

                                <span>

                                    Included

                                </span>

                            </div>

                            <div className="border-t border-violet-400 pt-5">

                                <div className="flex justify-between text-3xl font-black">

                                    <span>

                                        Grand Total

                                    </span>

                                    <span>

                                        ₹ {order.totalPrice}

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ================= COMPANY FEATURES ================= */}

                <div className="mt-12 grid grid-cols-4 gap-6">

                    <div className="rounded-2xl border p-6 text-center">

                        <div className="text-4xl">

                            🚚

                        </div>

                        <h3 className="mt-4 font-bold">

                            Fast Delivery

                        </h3>

                        <p className="mt-2 text-sm text-gray-500">

                            Quick & Safe Shipping

                        </p>

                    </div>

                    <div className="rounded-2xl border p-6 text-center">

                        <div className="text-4xl">

                            🔒

                        </div>

                        <h3 className="mt-4 font-bold">

                            Secure Payment

                        </h3>

                        <p className="mt-2 text-sm text-gray-500">

                            100% Protected

                        </p>

                    </div>

                    <div className="rounded-2xl border p-6 text-center">

                        <div className="text-4xl">

                            🔄

                        </div>

                        <h3 className="mt-4 font-bold">

                            Easy Returns

                        </h3>

                        <p className="mt-2 text-sm text-gray-500">

                            Hassle Free

                        </p>

                    </div>

                    <div className="rounded-2xl border p-6 text-center">

                        <div className="text-4xl">

                            💬

                        </div>

                        <h3 className="mt-4 font-bold">

                            Customer Support

                        </h3>

                        <p className="mt-2 text-sm text-gray-500">

                            24 × 7 Assistance

                        </p>

                    </div>

                </div>

                {/* ================= FOOTER ================= */}

                <div className="mt-14 rounded-3xl bg-gray-100 p-8">

                    <h2 className="text-center text-3xl font-black text-violet-700">

                        Thank You For Shopping With ShopSphere ❤️

                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-gray-600">

                        We sincerely appreciate your purchase.

                        Your trust motivates us to continuously deliver
                        high-quality products with excellent customer
                        service.

                    </p>

                    <div className="mt-10 grid grid-cols-3 gap-6 text-center">

                        <div>

                            <h3 className="font-bold text-violet-700">

                                Email

                            </h3>

                            <p className="mt-2">

                                support@shopsphere.com

                            </p>

                        </div>

                        <div>

                            <h3 className="font-bold text-violet-700">

                                Website

                            </h3>

                            <p className="mt-2">

                                www.shopsphere.com

                            </p>

                        </div>

                        <div>

                            <h3 className="font-bold text-violet-700">

                                Contact

                            </h3>

                            <p className="mt-2">

                                +91 98765 43210

                            </p>

                        </div>

                    </div>

                    <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">

                        © {new Date().getFullYear()} ShopSphere.

                        All Rights Reserved.

                    </div>

                </div>

            </div>

        </div>

    );

}

export default InvoiceTemplate;