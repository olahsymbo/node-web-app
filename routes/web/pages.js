var express = require('express');
var passport = require('passport');
var users = require('../../users');

var router = express.Router();

router.get("/", (req, res) => {
    res.render('pages/index');
});

router.get("/home", (req, res) => {
    res.render('pages/home');
});

router.get("/about", (req, res) => {
    res.render('pages/about');
});

router.get("/login", (req, res) => {
    res.render('pages/login');
});

router.get("/signup", (req, res) => {
    res.render('pages/signup');
});

router.post("/signup", (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
});

module.exports = router;