const express = require("express")

const router = express.Router()


const sellerController = require("../controllers/sellerController")
const productControllers = require("../controllers/productControllers")
// router.get("/user", userController.sendHi)
router.post('/signup', sellerController.signup)
router.post('/login', sellerController.login)
router.post('/addproduct', productControllers.addproduct)
router.get("/getsellerproduct/:id", productControllers.selleraddproduct)
router.delete("/deletesellerproducts/:id", productControllers.deletesellerproduct)
router.patch("/updatesellerproducts/:id", productControllers.updatesellerproduct)
router.get("/getsingleproduct/:id", productControllers.getsingleproduct)
router.get("/sellervieworder/:id", sellerController.getsellerOrder)
router.patch("/statusorder/:id", sellerController.orderstatus)



module.exports = router;


