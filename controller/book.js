"use strict";
var bookDB = require("../model/book");

exports.getListBooks = function (req, res) {
    bookDB.listBooks(function (err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    });
};

exports.createNewBook = function (req, res) {
    bookDB.createBook(req.body, function (err,data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
};

exports.deleteMultiBooks = function (req, res) {
    res.json("delete")
};

exports.updateMultiBooks = function (req, res) {
    res.json("update")
};