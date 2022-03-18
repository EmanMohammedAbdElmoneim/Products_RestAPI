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

const deleteProduct = (req,res) => {
    const id = req.params.id;
    products = products.filter((product) => product.code !== id);
    res.send({message : "Delete Complete"});
};

// export handlers
module.exports = {
    deleteProduct,
};

