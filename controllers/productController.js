const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
    const products = await Product.find().populate('category');
    res.json(products);
};

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
};

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
};

exports.searchProducts = async (req, res) => {
    const { query } = req.query;
    const products = await Product.find({ name: { $regex: query, $options: 'i' } });
    res.json(products);
};
