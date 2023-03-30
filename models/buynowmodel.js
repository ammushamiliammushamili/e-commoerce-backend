const mongoose = require("mongoose")
let buySchema = mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    lanmark: {
        type: String,
        required: true
    },
    productid: {
        type: String,
        required: true
    },
    mrp: {
        type: String,
        required: true
    },
    orderstatus: {
        type: String,
        required: true,
        default: "pending"
    },
    paymentmethod: {
        type: String,
        required: true
    },
    ordereddate: {
        type: String,
        required: true,

    },
    expecteddate: {
        type: String,
        required: true,

    },
    seller_id: {
        type: String,
        required: true,

    },
    url: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        required: true,

    },
})

const buynowmodel = mongoose.model('order', buySchema)
module.exports = buynowmodel