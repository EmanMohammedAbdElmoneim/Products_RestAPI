const express = require('express')
const bodyParser = require('body-parser')
const products_controller = require('./products-controller')
const PORT = 8080

const app = express();
app.use(bodyParser.json())
app.use(express.json());

//end points
app.get("/products", products_controller.getAllProducts);

app.delete("/products/:id", products_controller.deleteProduct);

app.put('/products/:code',products_controller.updateHandler)

app.post('/products', products_controller.createProduct);

app.get('/products/:category', products_controller.getByCategory);

app.get("/products", products_controller.lowToHigh);

app.get('/products',products_controller.highToLow);


app.listen(
    PORT,
    ()=> console.log(`Server running on http://localhost:${PORT}`))

