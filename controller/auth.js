var errors = require("../errors");
var passport = require("passport");

exports.register = function (req, res) {
    if (req.body.name && req.body.email && req.body.password) {
        var user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.setPassword(req.body.password);
        user.save(function (err) {
            if (err) {
                res.status(404).json(err)
            } else {
                res.status(201).json()
            }
        });
    } else {
        res.status(400).json(errors.notEnoughInformation)
    }
};

exports.login = function (req, res) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json(errors.notEnoughInformation);
    }
    passport.authenticate("local", function (err, user, info) {
        if (err) return res.status(404).json(err);
        if (user) {
            var token = user.generateJWT();
            res.status(200).json({
                token: token
            })
        } else {
            res.status(401).json(info);
        }
    })(req, res)
}