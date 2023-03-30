const mongoose = require("mongoose")
const { stringify } = require("nodemon/lib/utils")
let sellerproductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    mrp: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    offer: {
        type: String,
        required: true
    },
    seller_name: {
        type: String,

    },
    seller_id: {
        type: String,

    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,

    }


})


const Sellerproductmodel = mongoose.model('product', sellerproductSchema)
module.exports = Sellerproductmodel