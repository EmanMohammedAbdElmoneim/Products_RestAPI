const express = require('express')
const bodyParser = require('body-parser')
const products_controller = require('./products-controller')

const app = express();
app.use(bodyParser.json())


// getByCode endpoint
app.get('/products/:code',products_controller.getByCode)

app.listen(8080,()=> console.log('Server running'))
