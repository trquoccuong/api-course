"use strict";
var bookDB = require("../model/book");
var errors = require("../errors");

exports.getListBooks = function (req, res) {
    Book.find({}, function (err, books) {
        if (err) return res.json(err);
        res.json(books);
    });
};

exports.createNewBook = function (req, res) {
    var newBook = Book({
        ID: req.body.ID,
        Title: req.body.Title,
        SubTitle: req.body.SubTitle,
        Description: req.body.Description,
        Image: req.body.Image,
        isbn: req.body.isbn
    });

    newBook.save(function (err) {
        if(err) return res.json(err);
        res.status(201).json();
    })
};

exports.deleteMultiBooks = function (req, res) {
    res.json("delete")
};

exports.updateMultiBooks = function (req, res) {
    res.json("update")
};

exports.getBook = function (req, res) {
    Book.findOne({ID : req.params.id}, function (err,data) {
        if (err) {
            res.json(err);
        } else {
            res.json(data)
        }
    });
};

exports.updateBook = function (req,res) {
    Book.findOne({ID : req.params.id}, function (err,data) {
        if (err) {
            res.json(err);
        } else {
            data.ID =  req.body.ID || data.ID;
            data.Title = req.body.Title || data.Title;
            data.SubTitle= req.body.SubTitle || data.SubTitle;
            data.Description = req.body.Description || data.Description;
            data.Image= req.body.Image || data.Image;
            data.isbn= req.body.isbn || data.isbn;
            data.save(function (err) {
                if (err) return res.json(err);
                res.status(202).json();
            })
        }
    });
};

exports.deleteBook = function (req, res) {
    Book.findOneAndRemove({ID : req.params.id}, function (err) {
        if (err) return res.json(err);
        res.status(202).json();
    })
};