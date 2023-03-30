const Sellermodel = require("../models/Seller-model");
const bcrypt = require("bcrypt");
const buynowmodel = require("../models/buynowmodel");


const signup = async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    await Sellermodel.create(req.body)
    res.json({ success: true, msg: " successfully" })

}

const login = async (req, res) => {
    console.log(req.body);
    let seller = await Sellermodel.findOne({ email: req.body.email })
    console.log(seller);
    if (seller) {
        let valiedpassword = await bcrypt.compare(req.body.password, seller.password)
        if (valiedpassword) {
            res.json({ success: true, msg: "succefully", seller })

        } else {
            res.json({ success: false, msg: "invalied password" })

        }
    } else {
        res.json({
            success: false,
            msg: "login failed"
        })
    }

}

const getsellerOrder = async (req, res) => {
    try {
        console.log("hlo");
        let orders = await buynowmodel.find({ seller_id: req.params.id })
        if (orders.length == 0) {

            res.json({ success: true, msg: " you have  orders" });
        } else {
            res.json({ success: true, msg: " you have no orders", orders });

        }

    } catch (error) {
        res.json({
            success: false, msg: " server error",
        });
        console.log(error);

    }

}

const orderstatus = async (req, res) => {
    try {
        // console.log("hlo");
        await buynowmodel.findOneAndUpdate({ _id: req.params.id }, { orderstatus: "shipped" })


        res.json({ success: true, msg: "  shipped product" });


    } catch (error) {
        res.json({
            success: false, msg: "not shipped product",
        });
        console.log(error);

    }

}


module.exports = { signup, login, getsellerOrder, orderstatus }
