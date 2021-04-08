const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
name: String,
price: Number,
author: String
})
module.exports = mongoose.model("Book", bookSchema)