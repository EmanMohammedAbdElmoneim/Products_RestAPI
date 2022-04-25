const express = require('express');
const { productRouter } = require('./routes/Product');
const app = express();

app.use(express.json);

//middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use("/products/", productRouter);

module.exports = {app};