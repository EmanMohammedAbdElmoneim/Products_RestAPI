//build functions that CRUD in a collection
const { Product } = require('../models/Product');

 const insertProduct = (req, res)=>{};
 const getAllProducts =(req , res) => {};
 const getById =async (req,res)=>{};
 const filterByBrand =async (req,res)=>{};
 const sortDescendingly = async(req , res) =>{};
 const sortAssendingly = async(req, res) =>{};
 const updateProduct = async (req,res)=>{};
 const deleteProduct = async (req,res) => {
    try{
        const productId = req.params.id;
        const product = Product.deleteOne({_id: productId});
        res.status(201).send(product);
    }
    catch(e){
        res.status(400).send(e);
    }
 };

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
 