"use strict";

var express = require("express");
var router = express.Router();
var bookController = require("../controller/book");
var reviewController = require("../controller/review");
var config = require("../config");
var jwt = require('express-jwt');
var auth = jwt({
    secret: config.secretKey
});

router.route("/books")
    .get(bookController.getListBooks)
    .post(bookController.createNewBook)
    .delete(bookController.deleteMultiBooks);

router.route("/books/:id")
    .get(bookController.getBook)
    .put(bookController.updateBook)
    .delete(bookController.deleteBook);

router.route("/books/:bookId/reviews")
    .get(reviewController.getListReviews)
    .post(auth, reviewController.createNewReview);

router.route("/books/:bookId/reviews/:reviewId")
    .get(reviewController.getReview)
    .put(auth, reviewController.updateReview)
    .delete(auth, reviewController.deleteReview);

module.exports = router;