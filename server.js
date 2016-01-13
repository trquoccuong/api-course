var express = require("express");
var app = express();
var morgan = require("morgan");
var bookRoute = require("./route/book");

app.use(morgan("dev"));

app.use("/api",bookRoute);

app.listen(3000);