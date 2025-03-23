const express = require('express');
const { getProducts, createProduct, updateProduct, deleteProduct, searchProducts } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/search', searchProducts);

module.exports = router;