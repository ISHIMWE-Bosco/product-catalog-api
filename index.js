const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/product-catalog";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ MongoDB Connected Successfully");
}).catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
});

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Product Catalog API!");
});

// Define the Product schema and model
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const Product = mongoose.model("Product", productSchema);

// API Route to Get All Products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});
app.put("/products/:id", async (req, res) => {
  try {
      const productId = req.params.id.trim(); // Trim any extra spaces or newlines
      if (!mongoose.Types.ObjectId.isValid(productId)) {
          return res.status(400).json({ message: "Invalid product ID" });
      }

      const updatedProduct = await Product.findByIdAndUpdate(
          productId,
          req.body,
          { new: true, runValidators: true }
      );

      if (!updatedProduct) {
          return res.status(404).json({ message: "Product not found" });
      }

      res.json(updatedProduct);
  } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
