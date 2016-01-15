var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var bookRoute = require("./route/book");
var errors = require("./errors");
var mongoose = require("mongoose");
var connString ="mongodb://localhost:27017/demoApi";
mongoose.connect(connString);
global.Book = require("./model/book");

app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api",bookRoute);

app.use("*", function (req,res) {
    res.status(404).json(errors.routeNotExists)
});

app.listen(3000);