const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");
const products = require("./data/products");

dotenv.config();

const seedProducts = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");

        // Delete existing products
        await Product.deleteMany();

        console.log("Old Products Deleted");

        // Insert new products
        await Product.insertMany(products);

        console.log("32 Products Inserted Successfully");

        process.exit();

    } catch (error) {

        console.log(error);

        process.exit(1);

    }
};

seedProducts();