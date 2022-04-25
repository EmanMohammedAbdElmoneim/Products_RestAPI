const Router = require('express').Router
const productRouter = Router()
const productController = require('../controllers/Product_Controller.js')

// insert product
productRouter.post('/', ()=>{})
// get all products
productRouter.get('/', ()=>{})
// get product by id
productRouter.get('/:id', ()=>{})
// assending order
productRouter.get('/lth', ()=>{})
// descending order
productRouter.get('/htl', ()=>{})
// filter by brand
productRouter.get('/:brand', ()=>{})
// update product
productRouter.put('/:id', ()=>{})
// delete product
productRouter.delete('/:id', ()=>{})


module.exports = {productRouter}