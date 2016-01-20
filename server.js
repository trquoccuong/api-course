var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var bookRoute = require("./route/book");
var authRoute = require("./route/auth");
var errors = require("./errors");
var mongoose = require("mongoose");
var connString = "mongodb://localhost:27017/apis";
var passport = require('passport');
mongoose.connect(connString);
global.Book = require("./model/book");
global.User = require("./model/user");
global.Bucket = require("./model/bucket");
require("./passport");
var limitRate = require("./middleware/limitRate");
app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
app.use(passport.initialize());

app.use("/",authRoute);
app.use("/api",limitRate, bookRoute);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json(err);
    }
});

app.use("*", function (req, res) {
    res.status(404).json(errors.routeNotExists)
});

app.listen(3000);