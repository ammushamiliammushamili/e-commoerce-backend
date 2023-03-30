const usermodel = require("../models/user-model");
const bcrypt = require("bcrypt");
const Sellerproductmodel = require("../models/Selleraddproduct-model");
const buynowmodel = require("../models/buynowmodel");
const cartmodel = require("../models/cart-model");



const sendHi = (req, res) => {
    console.log("hi");
    res.send("hi")
}

const signup = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
        await usermodel.create(req.body)
        res.json({ success: true, msg: " successfully" })

    } catch (error) {
        res.json({ success: true, msg: "failed to signup" })

    }
    // res.send("hlo")


}

const login = async (req, res) => {
    console.log(req.body);
    let user = await usermodel.findOne({ email: req.body.email })
    console.log(user);
    if (user != null) {
        let valiedpassword = await bcrypt.compare(req.body.password, user.password)
        if (valiedpassword) {
            res.json({ success: true, msg: "succefully", user })

        } else {
            res.json({ success: false, msg: "invalied password" })

        }
    } else {
        res.json({
            success: false,
            message: "login failed"
        })
    }

}

const getproductBycategory = async (req, res) => {
    try {

        let getcategory = await Sellerproductmodel.find({ category: req.params.category })
        res.json({ success: true, msg: " get product category", getcategory })
    } catch (error) {
        res.json({ success: false, msg: "canot get product category", getcategory })

    }

}



const buyproduct = async (req, res) => {
    try {
        await buynowmodel.create(req.body)
        res.json({ success: true, msg: " successfully added product" })

    } catch (error) {
        res.json({ success: false, msg: " canot added product" })
        console.log(error);

    }

}


const getUserOrder = async (req, res) => {
    try {
        let orders = await buynowmodel.find({ userid: req.params.id })
        if (orders.length == 0) {

            res.json({ success: true, msg: " you have no orders" });
        } else {
            res.json({ success: true, msg: " you have no orders", orders });

        }

    } catch (error) {
        res.json({
            success: false, msg: " you have no orders",
        });
        console.log(error);

    }

}

const addcart = async (req, res) => {
    try {
        let cartExist = await cartmodel.findOne({ userid: req.params.userid })
        if (cartExist) {
            let products = cartExist.products
            products.push(req.params.productid)
            await cartmodel.findOneAndUpdate({ userid: req.params.userid }, { $set: { products } })

            res.json({ success: true, msg: "added product" });


        } else {
            let cartobj = {
                userid: req.params.userid,
                products: [req.params.productid]

            }
            let cart = await cartmodel.create(cartobj)
            res.json({ success: true, msg: "successfully added product card", cart });
        }



    } catch (error) {
        res.json({ success: false, msg: " could not added product card" });

    }

}

const getviewcart = async (req, res) => {
    try {
        let cart = await cartmodel.aggregate([
            { $match: { userid: '6381c708443402ec09661b91' } },
            {
                $lookup: {
                    from: "products",
                    localField: "products",
                    foreignField: "_id",
                    as: "all_products",
                },
            }
            ,
            { $unwind: "$all_products" },
            {
                $group: {
                    "_id": "$_id",
                    "userid": { "$first": "$userid" },
                    "products": { "$push": "$all_products" }

                }
            },
            { $project: { "products.__v": 0, }, },
        ])
        res.json({ success: true, msg: "view product", cart: cart[0] })

    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: " could not view product card" });

    }


}


module.exports = { sendHi, signup, login, getproductBycategory, buyproduct, getUserOrder, addcart, getviewcart }