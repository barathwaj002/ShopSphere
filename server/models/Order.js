const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        orderItems: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },

                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],

        shippingAddress: {
            type: String,
            required: true
        },

        totalPrice: {
            type: Number,
            required: true
        },

        paymentStatus: {
            type: String,
            enum: ["Pending", "Paid"],
            default: "Pending"
        },

        paymentMethod: {
           type: String,
           default: "Cash on Delivery"
        },

        orderStatus: {
            type: String,
            enum: [
                "Processing",
                "Shipped",
                "Delivered",
                "Cancelled"
            ],
            default: "Processing"
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Order", orderSchema);