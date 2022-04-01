// products list (DB)
let products = [{
    smallDescription : 'Andora Trendy Plaids Full Sleeves Shirt - Baby Blue & White',
    code: '2501',
    price: 149.00,
    category: 'Fashion'
},
{
    smallDescription: 'Infinix Smart 6 - 6.6-inch 64GB/3GB Dual SIM Mobile Phone-Quetzal Cyan',
    code: '2502',
    price: 2074.00,
    category:'Phones & Tablets'
},
{
    smallDescription: 'Infinix Smart 6 - 6.6-inch 32GB/3GB Dual SIM Mobile Phone-Quetzal Cyan',
    code: '2502',
    price: 1074.00,
    category:'Phones & Tablets'
}
]
//Test Case
/*{
    "smallDescription": "Nike Air Max Terrascape 90",    
    "price": 5899.00,
    "category":"Sports"
}*/



update_handler
// update Handler
const updateHandler = (req,res)=>{
   var index = products.findIndex((product) => product.code === req.params.code)
   // check if product exist or not
   if (index !== -1)
    {
        products[index] = req.body
        res.send(products[index]) 
    }
    else
      res.status(404).send({error: 'product code is not found!'})
}


const getAllProducts =(req , res) => {
    return res.send(products);
};


const createProduct = (req, res)=>{
    const product = {
        smallDescription: req.body.smallDescription,
        code: (parseInt(products[products.length-1].code)+1).toString(),
        price: req.body.price,
        category : req.body.category
    };
    console.log(product);
    products.push(product);
    res.status(200).send(`Product Added Successfully, Code: ${product.code}`);
    console.log(products);

const getByCategory = (req, res)=>{
//     let productsByCategory = []
    const category = req.params.category;
    let productsByCategory = products.filter(product => product.category === category)
    res.status(200).send(productsByCategory);
    
//     products.forEach((i)=>{
//         if(i.category===category){
//             productsByCategory.push(i);
//         }
//     })
//     if(productsByCategory.length==0){
//         res.status(404).send(`Error: cateogry '${category}' not found`);
//     }
//     else{
//         res.status(200).send(productsByCategory);
//     }
    
}


const deleteProduct = (req,res) => {
    const id = req.params.id;
    products = products.filter((product) => product.code !== id);
    res.send({message : "Delete Complete"});

};

  
const lowToHigh = (req , res) =>{
 
 products.sort((a, b) => (a.price > b.price ? 1 : -1));
 //console.log(products);
  res.send(products);
};

const highToLow = (req, res) =>{
    products.sort((a, b) => (a.price > b.price ? -1 : 1));
    //console.log(products);
     res.send(products); 
  
// export handlers
module.exports = {
   updateHandler,
    lowToHigh,
    highToLow,
  deleteProduct,
    getAllProducts,
    createProduct,
    getByCategory
};

