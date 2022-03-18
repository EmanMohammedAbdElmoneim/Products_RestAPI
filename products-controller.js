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
//Test Case
/*{
    "smallDescription": "Nike Air Max Terrascape 90",    
    "price": 5899.00,
    "category":"Sports"
}*/

// TODO -> end points handlers:
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
}


// export handlers
module.exports = {
    createProduct,    
}
