const express = require('express')
const bodyParser = require('body-parser')
const products_controller = require('./products-controller')
const PORT = 8080

const app = express();
app.use(express.json())

// TODO -> end points:
app.get('/products/:category', products_controller.getByCategory);

app.listen(
    PORT,
    ()=> console.log(`Server running on http://localhost:${PORT}`))
