var express = require("express");

var router = express.Router();

router.use("/", require("./pages"));

module.exports = router;