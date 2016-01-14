var mongoose = require("mongoose");
var bookSchema = new mongoose.Schema({
    ID: Number,
    Title: String,
    SubTitle: String,
    Description: String,
    Image: String,
    isbn: {
        type: String,
        require: true,
        unique : true
    }
});