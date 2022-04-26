//build functions that CRUD in a collection
const { Product } = require('../models/Product');

const insertProduct = (req, res)=>{};
const getAllProducts =(req , res) => {};
const getById =async (req,res)=>{};
const filterByBrand =async (req,res)=>{
 await Product.find({brand:req.params.brand}).exec().then(
      docs => {
            res.status(200).json(docs)
      }
  ).catch(err=>{res.status(400).json(err)})
};
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
 