
const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.static("./public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
const conectDB = require("./config/config")




const userRouter = require('./routes/user')
app.use("/user", userRouter)

const sellerRouter = require('./routes/seller')
app.use("/seller", sellerRouter)


const port = process.env.PORT || 5000
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        conectDB()
        console.log("server is liseing port 5000");
    }
})