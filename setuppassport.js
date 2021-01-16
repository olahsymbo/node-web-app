var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;

var user = require("./models/user");

module.exports = function(){
    passport.serializeUser(function(user,done){
        done(null, user_id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });
};