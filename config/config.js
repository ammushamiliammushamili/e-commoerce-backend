const mongoose = require("mongoose")
async function conectDB() {
    await mongoose.connect("mongodb+srv://shamili:123@cluster0.tm05h.mongodb.net/flipcard?retryWrites=true&w=majority");
    console.log("Db connected");
}
module.exports = conectDB