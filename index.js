const express = require('express')
const bodyParser = require('body-parser')
const products_controller = require('./products-controller')

const app = express();
app.use(bodyParser.json())

// update 
app.put('/products/:code',products_controller.updateHandler)

app.listen(8080,()=> console.log('Server running'))
