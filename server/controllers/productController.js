const Product = require("../models/Product");

// Add Product
const addProduct = async (req, res) => {
    try {

        const {
            name,
            description,
            price,
            category,
            image,
            stock
        } = req.body;

        // Check all required fields
        if (
            !name ||
            !description ||
            !price ||
            !category ||
            !image ||
            stock === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });
        }

        // Validate price
        if (price <= 0) {
            return res.status(400).json({
                success: false,
                message: "Price must be greater than 0"
            });
        }

        // Validate stock
        if (stock < 0) {
            return res.status(400).json({
                success: false,
                message: "Stock cannot be negative"
            });
        }

        // Create product
        const product = await Product.create({
            name,
            description,
            price,
            category,
            image,
            stock
        });

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Products
const getProducts = async (req, res) => {
    try {

        const products = await Product.find();

        res.status(200).json({
            success: true,
            count: products.length,
            products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get Product By ID
const getProductById = async (req, res) => {
    try {

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {

        console.log("Product ID:", req.params.id);
        console.log("Request Body:", req.body);

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: updatedProduct
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    addProduct,
    getProducts,
    getProductById,
    updateProduct
};