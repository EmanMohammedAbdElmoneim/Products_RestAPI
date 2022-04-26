//build functions that CRUD in a collection
const { Product } = require('../models/Product');

 const insertProduct = (req, res)=>{};
 const getAllProducts = (req, res) => {
    const products = app.find({});
    res.status(200).send(products);
};
 const getById =async (req,res)=>{};
 const filterByBrand =async (req,res)=>{};
 const sortDescendingly = async(req , res) =>{};
 const sortAssendingly = async(req, res) =>{};
 const updateProduct = async (req,res)=>{};
 const deleteProduct = async (req,res) => {};

 // export handlers
 module.exports = {
     insertProduct,
     getAllProducts,
     getById,
     filterByBrand,
     updateProduct,
     deleteProduct,
     sortDescendingly,
     sortAssendingly
 };
 