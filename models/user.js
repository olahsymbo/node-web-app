var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");

var SALT_FACTOR = 10;

var userSchema = mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:false},
    createdAt:{type:Date, default:Date.now}
});

userSchema.pre("save", function(done){
    var user = this;

    if(!user.isModified){
        return done();
    }

    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if(err){
            return done(err);
        }
        bcrypt.hash(user.password, salt, (err, hashedPassword)=>{
            if(err){
                return done(err);
            }
            user.password = hashedPassword;
        });
    });
});

userSchema.methods.checkPassword = (guess, err) => {
    if(this.password != null){
        bcrypt.compare(guess, this.password, (err, isMatch) => {
            done(err, isMatch);
        });
    } 
};

var user = mongoose.model("user", userSchema);
module.exports = user;