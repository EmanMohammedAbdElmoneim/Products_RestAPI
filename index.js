const express = require('express')
const bodyParser = require('body-parser')
const products_controller = require('./products-controller')

const app = express();
app.use(bodyParser.json())
// TODO -> end points:


app.listen(8080,()=> console.log('Server running'))
