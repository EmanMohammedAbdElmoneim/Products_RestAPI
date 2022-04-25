const {Schema, model} = require('mongoose');
const productSchema = new Schema({
    description: {
        type: String,
        rquired: true,
    },
    category: {
        type: String,
        rquired: true,
        enum: ['shirts', 'shoes'],
        default: 'shirts',
    },
    price: {
         type: Number,
         required: true,
    },
    color: {
        type: String,
        required: true,
        enum: ['black', 'white', 'red', 'dark blue', 'blue', 'grey'],
        default: 'black',
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
const User = model('Product', productSchema);
module.exports = {
    Product,
};
