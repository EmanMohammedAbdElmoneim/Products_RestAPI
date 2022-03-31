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

// TODO -> end points handlers:
const getByCategory = (req, res)=>{
    let productsByCategory = []
    const category = req.params.category;
    products.forEach((i)=>{
        if(i.category===category){
            productsByCategory.push(i);
        }
    })
    if(productsByCategory.length==0){
        res.status(404).send(`Error: cateogry '${category}' not found`);
    }
    else{
        res.status(200).send(productsByCategory);
    }
}


// export handlers
module.exports = {
    getByCategory,
}
