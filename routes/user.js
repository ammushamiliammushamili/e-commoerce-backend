const express = require("express")

const router = express.Router()

const userController = require("../controllers/userControllers")
router.get("/user", userController.sendHi)
router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get("/getproductcategory/:category", userController.getproductBycategory)
router.post('/buynowproduct', userController.buyproduct)
router.get("/userorder/:id", userController.getUserOrder)
router.get("/addtocard/:userid/:productid", userController.addcart)
router.get("/viewcart/:userid", userController.getviewcart)




module.exports = router;


