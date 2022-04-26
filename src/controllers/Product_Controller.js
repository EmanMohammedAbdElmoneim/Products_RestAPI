//build functions that CRUD in a collection
const { Product } = require('../models/Product');

const insertProduct = (req, res)=>{};
const getAllProducts =(req , res) => {};
const getById =async (req,res)=>{};
const filterByBrand =async (req,res)=>{
 try {
    const docs = await Product.find({brand:req.params.brand})
    res.status(200).send(docs)
     
 } catch (error) {
    res.status(400).send(error)

 }
};
const filterByBrandAndCategory =async (req,res)=>{
    try {
       const docs =  await Product.find({brand:req.params.brand}, {category:req.params.category})
       res.status(200).send(docs)
    } catch (error) {
       res.status(400).send(error)
    }
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
     filterByBrandAndCategory,
     updateProduct,
     deleteProduct,
     sortDescendingly,
     sortAssendingly
 };
 