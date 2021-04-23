const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
name: {
    type: String,
    required: [true,"Name is required for the book!!"]
},
price: {
    type: Number,
    min:[100,"Price of the book should be minimum 100Rs"],
    max:[1000,"Price cannot be more than 1000Rs"]
},
author: String
})
module.exports = mongoose.model("Book", bookSchema)