var mongoose = require("mongoose");
var reviewSchema = require("./review");

var bookSchema = new mongoose.Schema({
    ID: Number,
    Title: String,
    SubTitle: String,
    Description: String,
    Image: String,
    isbn: {
        type: String,
        require: true,
        unique: true
    },
    reviews : [reviewSchema]
});

module.exports = mongoose.model("book",bookSchema,"book");