const router = require('express').Router();
const producController = require('../Controllers/product');

router.post('/add', producController.addProduct);
router.get('/product/:id', producController.getProduct)
router.get('/product', producController.getAllProduct)
module.exports = router