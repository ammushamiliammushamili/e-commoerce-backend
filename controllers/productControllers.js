const res = require("express/lib/response");
const Sellerproductmodel = require("../models/Selleraddproduct-model");
// const Selleraddproductmodel = require("../models/Selleraddproduct-model");

const addproduct = async (req, res) => {
    await Sellerproductmodel.create(req.body)
    res.json({ success: true, msg: " successfully" })
}

const selleraddproduct = async (req, res) => {
    let sellerproduct = await Sellerproductmodel.find({ seller_id: req.params.id })
    res.json({
        success: true,
        sellerproduct
    })
}


const deletesellerproduct = async (req, res) => {
    await Sellerproductmodel.findOneAndDelete({ _id: req.params.id })
    res.json({
        success: true,
        msg: "delete product"

    })

}

const updatesellerproduct = async (req, res) => {
    await Sellerproductmodel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.json({
        success: true,
        msg: "update product success"


    })
}

const getsingleproduct = async (req, res) => {
    try {
        let singlesellerproduct = await Sellerproductmodel.findOne({ _id: req.params.id })
        res.json({
            success: true,
            msg: "success collected product",
            singlesellerproduct
        })

    } catch (error) {

    }


}

module.exports = { addproduct, selleraddproduct, deletesellerproduct, updatesellerproduct, getsingleproduct }
