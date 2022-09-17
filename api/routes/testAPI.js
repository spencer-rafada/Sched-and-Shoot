var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next){
    console.log("GET request received")
    res.json({ message: "Hello from server" });
});

module.exports = router;