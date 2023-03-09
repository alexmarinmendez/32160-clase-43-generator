var createError = require('http-errors');
var express = require('express');
var router = express.Router();

const products = []

/* GET products listing. */
router.get('/', (req, res) => {
    res.json(products)
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    const product = products.find(prod => prod.id === id)
    if (!product) {
        next(createError(404));
    }
    res.json(product)
});

router.post('/', (req, res) => {
    const { name, price } = req.body
    const id = products.length == 0 ? 1 : products[products.length-1].id+1
    const newProduct = { id, name, price }
    products.push(newProduct)
    res.status(201).json(newProduct)
});

router.put('/');
router.delete('/');

module.exports = router;
