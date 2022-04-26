const { Router } = require('express');
const productController = require('../controllers/Product_Controller');
const productRouter = Router();

//ps: '/' --> http://localhost:8080/products/

// insert product
productRouter.post('/', productController.insertProduct);
// get all products
productRouter.get('/', productController.getAllProducts);
// get product by id
productRouter.get('/getById/:id', productController.getById);
// assending order
productRouter.get('/lth', productController.sortAssendingly);
// descending order
productRouter.get('/htl',  productController.sortDescendingly);
// filter by brand
productRouter.get('/:brand', productController.filterByBrand);
// update product
productRouter.put('/:id', productController.updateProduct);
// delete product
productRouter.delete('/:id', productController.deleteProduct);


module.exports = {productRouter,};