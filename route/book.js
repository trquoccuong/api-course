"use strict";

var express = require("express");
var router = express.Router();
var bookController = require("../controller/book");

router.route("/books")
    .get(bookController.getListBooks)
    .post(bookController.createNewBook)




module.exports = router;