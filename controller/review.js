"use strict";
var errors = require("../errors");

exports.getListReviews = function (req, res) {
    Book.findOne({ID: req.params.bookId})
        .select("reviews")
        .exec(function (err, data) {
            if (err) return res.json(err)
            res.json(data);
        })
};

exports.createNewReview = function (req, res) {
    Book.findOne({ID: req.params.bookId})
        .select("reviews")
        .exec(function (err, bookInfo) {
            if (err) return res.json(err);
            if (!bookInfo) {
                bookInfo.reviews.push({
                    author: req.body.author,
                    rating: req.body.rating,
                    content: req.body.content
                });
                bookInfo.save(function (err, book) {
                    if (err) return res.json(err);
                    res.status(201).json();
                })
            } else {
                res.status(404).json(errors.bookNotExists)
            }
        })
};

exports.getReview = function (req, res) {
    Book.findOne({ID: req.params.bookId})
        .select("reviews")
        .exec(function (err, bookInfo) {
            if (err) return res.json(err);
            if (!bookInfo) {
                if (bookInfo.reviews && bookInfo.reviews.length > 0) {
                    var review = bookInfo.reviews.id(req.params.reviewId);
                    if (review) {
                        res.json(review)
                    } else {
                        res.status(404).json(errors.reviewNotExists)
                    }
                } else {
                    res.status(404).json(errors.reviewNotExists)
                }
            } else {
                res.status(404).json(errors.bookNotExists)
            }
        }
    )
};

exports.updateReview = function (req, res) {
    Book.findOne({ID: req.params.bookId})
        .select("reviews")
        .exec(function (err, bookInfo) {
            if (err) return res.json(err);
            if (!bookInfo) {
                if (bookInfo.reviews && bookInfo.reviews.length > 0) {
                    var review = bookInfo.reviews.id(req.params.reviewId);
                    if (review) {
                        review.author = req.body.author;
                        review.rating = req.body.rating;
                        review.content = req.body.content;
                        bookInfo.save(function (err) {
                            if (err) return res.json(err);
                            res.status(202).json();
                        })
                    } else {
                        res.status(404).json(errors.reviewNotExists)
                    }
                } else {
                    res.status(404).json(errors.reviewNotExists)
                }
            } else {
                res.status(404).json(errors.bookNotExists)
            }
        })
};

exports.deleteReview = function (req, res) {
    Book.findOne({ID: req.params.bookId})
        .select("reviews")
        .exec(function (err, bookInfo) {
            if (err) return res.json(err);
            if (bookInfo.reviews && bookInfo.reviews.length > 0) {
                if (!bookInfo.reviews.id(req.params.reviewId)) {
                    res.status(404).json(errors.reviewNotExists)
                    ß
                } else {
                    bookInfo.reviews.id(req.params.reviewId).remove();
                    bookInfo.save(function (err) {
                        if (err) return res.json(err);
                        res.status(202).json();
                    })
                }
            } else {
                res.status(404).json(errors.reviewNotExists)
            }
        })
};