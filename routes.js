var express = require("express");

var router = express.Router();

router.get("/", function(req, res)  {
    console.log("Hello, I'm on the start page here");
    res.render("index");
});

module.exports = router;

