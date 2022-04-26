const { Router } = require('express');
const productController = require('../controllers/Product_Controller');
const productRouter = Router();

//ps: '/' --> http://localhost:8080/products/

// insert product
productRouter.post('/', productController.insertProduct);
// filter by category
productRouter.get('/filterByCategory/:category', productController.filterByCategory);
// filter by category and color
productRouter.get('/filterByCategoryAndColor/:category/:color', productController.filterByCategoryAndColor);
// filter by category and size
productRouter.get('/filterByCategoryAndSize/:category/:size', productController.filterByCategoryAndSize);
// filter by category and color and size
productRouter.get('/filterByCategoryAndColorAndSize/:category/:color/:size', productController.filterByCategoryAndColorAndSize);
// get all products
productRouter.get('/', productController.getAllProducts);
// get product by id
productRouter.get('/:id', productController.getById);
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