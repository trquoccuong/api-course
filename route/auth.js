var express = require("express");
var router = express.Router();
var controllerAuth = require("../controller/auth.js");

router.post('/register', controllerAuth.register);
router.post('/login', controllerAuth.login);

module.exports = router;