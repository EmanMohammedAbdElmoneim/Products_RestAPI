const {Schema, model} = require('mongoose');
const productSchema = new Schema({
    description: {
        type: String,
        rquired: true,
    },
    category: {
        type: String,
        rquired: true,
        enum: ['shirts', 't-shirts', 'shoes', 'trousers', 'jackets'],
        default: 'shirts',
    },
    price: {
         type: Number,
         required: true,
    },
    color: {
        type: [String],
        required: true,
    },
    size: {
        type: [String],
        required: true,
    },
    brand: {
        type: String,
        required: false,
    },

});

//create model
const Product = model('Product', productSchema);
module.exports = {
    Product,
};
