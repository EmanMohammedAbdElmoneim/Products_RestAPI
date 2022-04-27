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

 
 const getById =async (req,res)=>{
    try{ 
        const id =  req.params.id
        const product = await Product.findById({_id : id})
        res.status(200).send(product)
    }
    catch(err){  
         res.status(400).send(err)
    }
 };


 const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).send(products);
    }
    catch(e){
        res.status(400).send(e);
    }
};
//sort price High to Low
const sortDescendingly = async (req, res) => {
    try {
       const productsHtoL = await  Product.find({}).sort({price:-1})
       res.status(200).send(productsHtoL)
    } catch (error) {
       res.status(400).send(error)
    }
}
//sort price Low to High
const sortAssendingly = async (req, res) => {
    try {
        const productsLtoH = await  Product.find({}).sort({price:1})
        res.status(200).send(productsLtoH)
     } catch (error) {
        res.status(400).send(error)
     }
}


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

 
 


 const updateProduct = async (req,res)=>{
    try{ 
      const id = req.params.id
      const product = await Product.findById({_id : id})
      if (req.body.description != null)
            product.description = req.body.description
      if (req.body.category != null)
            product.category = req.body.category
      if (req.body.color != null)
            product.color = req.body.color
      if (req.body.size != null)
            product.size = req.body.size
      if (req.body.brand != null)
            product.brand = req.body.brand
          product.save()
          res.status(200).send(product)
    }
    catch(err){res.status(400).send(err)}
 };
  const deleteProduct = async (req,res) => {
    try{
        const productId = req.params.id;
        const product = await Product.deleteOne({_id: productId});
        res.status(200).send(product);
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
 
