var express = require("express");

var router = express.Router();

router.get('/', function(req, res){
    res.json({"users":"users page"});
});

module.exports = router;