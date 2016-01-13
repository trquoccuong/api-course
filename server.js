var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var bookRoute = require("./route/book");

app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api",bookRoute);

app.listen(3000);