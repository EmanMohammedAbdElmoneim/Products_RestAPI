//build functions that CRUD in a collection
const { Product } = require('../models/Product');

 const insertProduct = async (req, res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).send(product)
        
    } catch (error) {
        res.status(400).send(error)
    }
 };
 const filterByCategory = async (req, res) => {
     try {
        console.log(req.params.category)
        const productsByCategory = await  Product.find({category: { $eq: req.params.category}})
        res.status(200).send(productsByCategory)
     } catch (error) {
        res.status(400).send(error)
     }
 }
 const filterByCategoryAndColor = async (req, res) => {
    try {
       const productsByCategoryAndColor = await  Product.find({
           category: { $eq: req.params.category},
           color: {$in: req.params.color}
        })
       res.status(200).send(productsByCategoryAndColor)
    } catch (error) {
       res.status(400).send(error)
    }
}
const filterByCategoryAndSize = async (req, res) => {
   try {
      const productsByCategoryAndSize = await  Product.find({
          category: { $eq: req.params.category}, 
          size: {$in: req.params.size}
       })
      res.status(200).send(productsByCategoryAndSize)
   } catch (error) {
      res.status(400).send(error)
   }
}
const filterByCategoryAndColorAndSize = async (req, res) => {
    try {
       const productsByCategoryAndColorAndSize = await  Product.find({
           category: { $eq: req.params.category}, 
           color: {$in: req.params.color}, 
           size: {$in: req.params.size}
        })
       res.status(200).send(productsByCategoryAndColorAndSize)
    } catch (error) {
       res.status(400).send(error)
    }
}
 const getAllProducts = async (req , res) => {};
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
          const docs =  await Product.find({
              brand: {$eq: req.params.brand} ,
              category: { $eq: req.params.category}
            })
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
     sortAssendingly,
     filterByCategory,
     filterByCategoryAndColor,
     filterByCategoryAndSize,
     filterByCategoryAndColorAndSize,
 };
 