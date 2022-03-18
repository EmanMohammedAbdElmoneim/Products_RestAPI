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
}
]

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

// export handlers
module.exports = {updateHandler}

