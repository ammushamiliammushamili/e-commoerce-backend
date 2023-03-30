const mongoose = require("mongoose")
let cartSchema = mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.ObjectId,
    }
    ]
})

const cartmodel = mongoose.model('cart', cartSchema)
module.exports = cartmodel