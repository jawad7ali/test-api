var express = require('express');
var router = express.Router();

const product_controller = require('../controllers/product.controller');


router.get('/products', product_controller.list);

router.post('/products', product_controller.product_create);

router.get('/products/:id', product_controller.get_product_by_id);

router.put('/products/:id', product_controller.update_product);

router.delete('/products/:id', product_controller.product_delete);

module.exports = router;
