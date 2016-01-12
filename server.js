var express = require("express");
var app = express();
var morgan = require("morgan");
var bookRoute = require("./route/book");

app.use(morgan("dev"));

app.use("/",bookRoute);

app.listen(3000);