const products = [

/* ===========================
        MOBILES
=========================== */

{
    name: "Apple iPhone 16 Pro",
    description: "Apple A18 Pro chipset, 6.3-inch Super Retina XDR OLED display, ProMotion 120Hz, Titanium design, 48MP Fusion Camera, Face ID and USB-C.",
    price: 129999,
    category: "Mobiles",
    image: "/products/Apple Iphone 16 Pro.jpg",
    stock: 20,
},

{
    name: "Samsung Galaxy S25 Ultra",
    description: "Flagship Samsung smartphone with Snapdragon Elite processor, 200MP AI camera, Dynamic AMOLED 2X display and S-Pen support.",
    price: 134999,
    category: "Mobiles",
    image: "/products/Samsung galaxy S25.jpg",
    stock: 18,
},

{
    name: "Google Pixel 10 Pro",
    description: "Google Tensor G5 processor, AI-powered photography, Android 16, Magic Editor and premium OLED display.",
    price: 104999,
    category: "Mobiles",
    image: "/products/Google Pixel 10 Pro.jpg",
    stock: 16,
},

{
    name: "OnePlus 13",
    description: "Snapdragon 8 Elite processor, 120Hz AMOLED display, Hasselblad triple camera, OxygenOS and 6000mAh battery.",
    price: 74999,
    category: "Mobiles",
    image: "/products/Oneplus 13.jpg",
    stock: 25,
},

{
    name: "Nothing Phone (3)",
    description: "Transparent Glyph Interface, Snapdragon flagship chipset, AMOLED display, Nothing OS and dual 50MP cameras.",
    price: 62999,
    category: "Mobiles",
    image: "/products/Nothing 3.jpg",
    stock: 22,
},

/* ===========================
        LAPTOPS
=========================== */

{
    name: "Apple MacBook Pro M5",
    description: "Apple M5 chip, Liquid Retina XDR display, 18GB Unified Memory, 512GB SSD and exceptional battery life.",
    price: 199999,
    category: "Laptops",
    image: "/products/Macbook Pro M5.jpg",
    stock: 10,
},

{
    name: "Apple MacBook Pro M4",
    description: "Apple M4 chip with Liquid Retina XDR display, 16GB RAM, 512GB SSD and professional-grade performance.",
    price: 189999,
    category: "Laptops",
    image: "/products/Macbook Pro M4.jpg",
    stock: 10,
},

{
    name: "Dell XPS 14",
    description: "Intel Core Ultra processor, OLED InfinityEdge display, NVIDIA RTX graphics and premium aluminum build.",
    price: 159999,
    category: "Laptops",
    image: "/products/Dell XPS 14.jpg",
    stock: 14,
},

{
    name: "ASUS ROG Zephyrus G14",
    description: "Gaming laptop with AMD Ryzen 9, RTX 4070 graphics, 165Hz display and RGB keyboard.",
    price: 169999,
    category: "Laptops",
    image: "/products/Asus ROG Zephyrus G14.jpg",
    stock: 12,
},

{
    name: "Lenovo Legion Pro 5i",
    description: "Intel Core i9 processor, RTX 4070 graphics, 240Hz gaming display and advanced cooling technology.",
    price: 164999,
    category: "Laptops",
    image: "/products/Lenovo Legion Pro 5i.jpg",
    stock: 13,
},

{
    name: "HP Spectre x360",
    description: "Premium convertible laptop featuring Intel Core Ultra processor, OLED touchscreen and all-day battery.",
    price: 149999,
    category: "Laptops",
    image: "/products/HP Spectre x360.jpg",
    stock: 15,
},

/* ===========================
        FASHION
=========================== */

{
    name: "Men's Denim Jacket",
    description: "Premium black full sleeve denim jacket made from high-quality cotton. Stylish, durable and comfortable for all seasons.",
    price: 2999,
    category: "Fashion",
    image: "/products/Full Sleeve Denim Jacket (Black).jpg",
    stock: 30,
},

{
    name: "Women's Floral Summer Dress",
    description: "Elegant floral printed summer dress with lightweight fabric, perfect for casual outings and vacations.",
    price: 2499,
    category: "Fashion",
    image: "/products/Women floral dress.jpg",
    stock: 28,
},

{
    name: "Nike Running Shoes",
    description: "Lightweight running shoes with responsive cushioning, breathable mesh upper and premium comfort.",
    price: 6499,
    category: "Fashion",
    image: "/products/Nike running Shoes.jpg",
    stock: 35,
},

{
    name: "Adidas Casual Sneakers",
    description: "Classic casual sneakers with modern comfort, premium sole and everyday wear durability.",
    price: 5999,
    category: "Fashion",
    image: "/products/Adidas casual Sneakers.jpg",
    stock: 32,
},

{
    name: "Leather Sandals",
    description: "Premium leather sandals designed for maximum comfort, durability and elegant everyday styling.",
    price: 1999,
    category: "Fashion",
    image: "/products/Leather sandals for men.jpg",
    stock: 40,
},

{
    name: "Face Care Kit",
    description: "Complete skincare kit including cleanser, toner, moisturizer and face serum suitable for all skin types.",
    price: 1499,
    category: "Fashion",
    image: "/products/Face care kit.jpg",
    stock: 45,
},

/* ===========================
          BOOKS
=========================== */

{
    name: "Atomic Habits",
    description: "James Clear's bestselling book on building better habits, breaking bad ones and achieving remarkable results.",
    price: 699,
    category: "Books",
    image: "/products/Atomic Habits.jpg",
    stock: 50,
},

{
    name: "The Silent Patient",
    description: "Psychological thriller by Alex Michaelides packed with suspense, mystery and unforgettable twists.",
    price: 599,
    category: "Books",
    image: "/products/The silent patient.jpg",
    stock: 40,
},

{
    name: "Rich Dad Poor Dad",
    description: "Robert Kiyosaki's financial education classic teaching wealth creation and financial independence.",
    price: 549,
    category: "Books",
    image: "/products/Rich dad poor dad.jpg",
    stock: 60,
},

{
    name: "Deep Work",
    description: "Cal Newport explains how focused work helps you achieve extraordinary productivity and career success.",
    price: 649,
    category: "Books",
    image: "/products/Deep work.jpg",
    stock: 38,
},

{
    name: "The Psychology of Money",
    description: "Morgan Housel explores how emotions influence financial decisions and long-term wealth building.",
    price: 699,
    category: "Books",
    image: "/products/The psychology of money.jpg",
    stock: 42,
},

/* ===========================
      ELECTRONICS
=========================== */

{
    name: "Apple AirPods Pro (2nd Gen)",
    description: "Active Noise Cancellation, Adaptive Audio, Spatial Audio, USB-C charging and premium Apple sound quality.",
    price: 24999,
    category: "Electronics",
    image: "/products/Apple airpods pro 2nd gen.jpg",
    stock: 25,
},

{
    name: "Sony WH-1000XM5",
    description: "Industry-leading wireless noise cancelling headphones with premium Hi-Res Audio experience.",
    price: 29999,
    category: "Electronics",
    image: "/products/Sony WH-1000XM5 Headphones.jpg",
    stock: 20,
},

{
    name: "JBL Flip 6 Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker delivering powerful JBL Pro Sound and deep bass.",
    price: 11999,
    category: "Electronics",
    image: "/products/JBL Flip 6 Bluetooth Speaker.jpg",
    stock: 24,
},

{
    name: "Logitech MX Master 3S Mouse",
    description: "Professional wireless productivity mouse featuring MagSpeed scrolling and silent clicks.",
    price: 9999,
    category: "Electronics",
    image: "/products/Logitech MX Master 3S Mouse.jpg",
    stock: 22,
},

{
    name: "Samsung T9 Portable SSD",
    description: "Ultra-fast portable SSD with USB 3.2 Gen2x2 speeds, rugged design and secure storage.",
    price: 14999,
    category: "Electronics",
    image: "/products/Samsung T9 Portable SSD.jpg",
    stock: 18,
},

/* ===========================
       ACCESSORIES
=========================== */

{
    name: "Silver Necklace",
    description: "Premium sterling silver necklace with elegant finish suitable for both casual and festive occasions.",
    price: 3999,
    category: "Accessories",
    image: "/products/Silver necklace for women.jpg",
    stock: 30,
},

{
    name: "Silver Bracelet",
    description: "Beautiful handcrafted sterling silver bracelet with polished finish and adjustable chain.",
    price: 2499,
    category: "Accessories",
    image: "/products/Bracelet for men.jpg",
    stock: 28,
},

{
    name: "Silver Earrings",
    description: "Elegant silver earrings featuring timeless craftsmanship and sparkling premium finish.",
    price: 1999,
    category: "Accessories",
    image: "/products/Earrings for women.jpg",
    stock: 40,
},

{
    name: "Analog Watch",
    description: "Premium analog wrist watch with stainless steel body, water resistance and classic design.",
    price: 4999,
    category: "Accessories",
    image: "/products/Titan analog watch for men.jpg",
    stock: 20,
},

{
    name: "Polarized Sunglasses",
    description: "UV400 polarized sunglasses offering crystal-clear vision, eye protection and premium styling.",
    price: 1799,
    category: "Accessories",
    image: "/products/Polarized sunglasses.jpg",
    stock: 35,
},



];

module.exports = products;

