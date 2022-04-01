const express = require('express')
const bodyParser = require('body-parser')
const products_controller = require('./products-controller')
const PORT = 8080

const app = express();
app.use(bodyParser.json())
app.use(express.json());


//end points:
// get all products
app.get("/products", products_controller.getAllProducts);

// getByCode 
app.get('/products/:code',products_controller.getByCode)

//delete by code
app.delete("/products/:id", products_controller.deleteProduct);

//update product
app.put('/products/:code',products_controller.updateHandler)

//create product
app.post('/products', products_controller.createProduct);

//get by category
app.get('/products/:category', products_controller.getByCategory);

//order by price (assending)
app.get("/products", products_controller.lowToHigh);

//order by price (descending)
app.get('/products',products_controller.highToLow);


app.listen(
    PORT,
    ()=> console.log(`Server running on http://localhost:${PORT}`))

